import React, { useState, useRef, useEffect, useCallback } from 'react';
import { PHOTO_SLOTS, PhotoSlotConfig, usePhotoStore, getRawOriginal as getRawOriginalFromStore } from '../lib/photoStore';
import { 
  X, 
  Upload, 
  ZoomIn, 
  ZoomOut, 
  RotateCw, 
  Check, 
  Image as ImageIcon, 
  Sliders, 
  Save, 
  RefreshCw, 
  Info,
  Sparkles,
  Move
} from 'lucide-react';

interface PhotoEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSlotKey?: string;
}

export const PhotoEditorModal: React.FC<PhotoEditorModalProps> = ({
  isOpen,
  onClose,
  initialSlotKey = 'hero_portrait'
}) => {
  const { photos, savePhoto, resetPhoto, getRawOriginal, saveRawOriginal } = usePhotoStore();
  
  const [selectedSlotKey, setSelectedSlotKey] = useState<string>(initialSlotKey);
  const [imageSrc, setImageSrc] = useState<string>('');
  const [imgDimensions, setImgDimensions] = useState<{ width: number; height: number } | null>(null);
  
  // Transform states for framing
  const [zoom, setZoom] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [rotation, setRotation] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const dragStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const panStartRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  // Status feedback
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const activeSlot = PHOTO_SLOTS.find(s => s.key === selectedSlotKey) || PHOTO_SLOTS[0];

  // Load raw uncropped original when slot changes
  useEffect(() => {
    if (selectedSlotKey) {
      const rawUrl = getRawOriginalFromStore(selectedSlotKey) || photos[selectedSlotKey] || '';
      setImageSrc(rawUrl);
      setZoom(1);
      setPan({ x: 0, y: 0 });
      setRotation(0);
      setSaveSuccessMsg(null);
    }
  }, [selectedSlotKey, photos]);

  // Measure natural dimensions of image for aspect ratio calculations
  useEffect(() => {
    if (!imageSrc) {
      setImgDimensions(null);
      return;
    }
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      setImgDimensions({
        width: img.naturalWidth || 800,
        height: img.naturalHeight || 600,
      });
    };
    img.src = imageSrc;
  }, [imageSrc]);

  // Handle File Upload
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          const rawDataUrl = event.target.result as string;
          saveRawOriginal(selectedSlotKey, rawDataUrl);
          setImageSrc(rawDataUrl);
          setZoom(1);
          setPan({ x: 0, y: 0 });
          setRotation(0);
          setSaveSuccessMsg(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Mouse / Touch Dragging logic for panning the image
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    panStartRef.current = { ...pan };
  };

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    setPan({
      x: panStartRef.current.x + dx,
      y: panStartRef.current.y + dy,
    });
  }, [isDragging]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

  // Compute base preview box size for image naturally matching aspect
  const vpAspect = activeSlot.aspectRatioValue;
  const imgAspect = imgDimensions && imgDimensions.width > 0 && imgDimensions.height > 0
    ? imgDimensions.width / imgDimensions.height
    : vpAspect;

  let baseWidth = 360;
  let baseHeight = 360 / vpAspect;

  if (imgDimensions && imgDimensions.width > 0 && imgDimensions.height > 0) {
    if (imgAspect > vpAspect) {
      baseHeight = 360 / vpAspect;
      baseWidth = baseHeight * imgAspect;
    } else {
      baseWidth = 360;
      baseHeight = 360 / imgAspect;
    }
  }

  // Crop & Export Canvas
  const processCroppedDataUrl = (): Promise<string> => {
    return new Promise((resolve) => {
      if (!imageSrc) {
        resolve('');
        return;
      }

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const targetWidth = 800;
        const targetHeight = Math.round(targetWidth / activeSlot.aspectRatioValue);

        const canvas = document.createElement('canvas');
        canvas.width = targetWidth;
        canvas.height = targetHeight;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          resolve('');
          return;
        }

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, targetWidth, targetHeight);

        const scaleRatio = targetWidth / 360;
        const natW = img.naturalWidth || 800;
        const natH = img.naturalHeight || 600;
        const imgAsp = natW / natH;
        const vpAsp = activeSlot.aspectRatioValue;

        let baseW = 360;
        let baseH = 360 / vpAsp;

        if (imgAsp > vpAsp) {
          baseH = 360 / vpAsp;
          baseW = baseH * imgAsp;
        } else {
          baseW = 360;
          baseH = 360 / imgAsp;
        }

        const scaledW = baseW * zoom * scaleRatio;
        const scaledH = baseH * zoom * scaleRatio;
        const panXCanvas = pan.x * scaleRatio;
        const panYCanvas = pan.y * scaleRatio;

        ctx.save();
        ctx.translate(targetWidth / 2, targetHeight / 2);
        ctx.rotate((rotation * Math.PI) / 180);

        ctx.drawImage(
          img,
          -scaledW / 2 + panXCanvas,
          -scaledH / 2 + panYCanvas,
          scaledW,
          scaledH
        );

        ctx.restore();

        resolve(canvas.toDataURL('image/jpeg', 0.82));
      };

      img.src = imageSrc;
    });
  };

  // Save / Record Handler
  const handleSavePhoto = async () => {
    setIsSaving(true);
    setSaveSuccessMsg(null);

    try {
      const croppedDataUrl = await processCroppedDataUrl();
      if (!croppedDataUrl) {
        setIsSaving(false);
        return;
      }

      const result = await savePhoto(selectedSlotKey, croppedDataUrl);
      setSaveSuccessMsg(result.message);
    } catch (err) {
      console.error('Error recording photo', err);
    } finally {
      setIsSaving(false);
    }
  };

  const handleResetSlot = () => {
    resetPhoto(selectedSlotKey);
    setZoom(1);
    setPan({ x: 0, y: 0 });
    setRotation(0);
    setSaveSuccessMsg('Restaurado para a foto padrão original.');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#252A27]/70 backdrop-blur-sm p-4 overflow-y-auto animate-fadeIn">
      <div className="bg-[#FCFBF8] border border-[#D6DDD7] rounded-3xl shadow-2xl w-full max-w-5xl overflow-hidden my-auto flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-[#D6DDD7] flex items-center justify-between bg-[#F8F5F0]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#56685E] text-white flex items-center justify-center shadow-xs">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-xl sm:text-2xl text-[#252A27] font-semibold">
                Gerenciador & Enquadramento de Fotos
              </h2>
              <p className="text-xs text-[#626A65]">
                Ajuste o zoom, enquadre e grave as fotos diretamente no código fonte do projeto.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-[#E5EBE6] hover:bg-[#D6DDD7] text-[#252A27] flex items-center justify-center transition-colors focus:outline-none"
            title="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start flex-1">
          
          {/* Left Column: Photo Slots List */}
          <div className="lg:col-span-4 space-y-3 border-r border-[#D6DDD7]/70 pr-0 lg:pr-6 max-h-[60vh] overflow-y-auto">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#56685E]">
              Selecione a Foto do Site:
            </p>

            <div className="space-y-2">
              {PHOTO_SLOTS.map((slot) => {
                const isSelected = slot.key === selectedSlotKey;
                const slotPhoto = photos[slot.key];

                return (
                  <button
                    key={slot.key}
                    onClick={() => setSelectedSlotKey(slot.key)}
                    className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center gap-3 ${
                      isSelected
                        ? 'bg-[#56685E] text-white border-[#56685E] shadow-sm'
                        : 'bg-[#F8F5F0] hover:bg-[#E5EBE6] text-[#252A27] border-[#D6DDD7]'
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl overflow-hidden bg-black/10 shrink-0 border border-white/20">
                      {slotPhoto ? (
                        <img src={slotPhoto} alt={slot.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400">
                          <ImageIcon className="w-5 h-5" />
                        </div>
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className={`text-xs font-semibold truncate ${isSelected ? 'text-white' : 'text-[#252A27]'}`}>
                        {slot.title}
                      </p>
                      <p className={`text-[10px] ${isSelected ? 'text-white/80' : 'text-[#626A65]'}`}>
                        Proporção: {slot.recommendedAspect}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Cropper Canvas & Framing Controls */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Active Slot Description */}
            <div className="bg-[#E5EBE6]/60 p-4 rounded-2xl border border-[#D6DDD7] flex items-center justify-between">
              <div>
                <p className="font-serif text-lg font-semibold text-[#252A27]">
                  {activeSlot.title}
                </p>
                <p className="text-xs text-[#626A65]">
                  {activeSlot.description} • Ideal: <span className="font-semibold">{activeSlot.recommendedAspect}</span>
                </p>
              </div>

              <button
                onClick={() => fileInputRef.current?.click()}
                className="px-3.5 py-2 rounded-xl bg-[#56685E] hover:bg-[#3D4B43] text-white text-xs font-semibold flex items-center gap-2 shadow-xs transition-colors shrink-0"
              >
                <Upload className="w-4 h-4" />
                <span>Escolher Nova Foto</span>
              </button>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                accept="image/*"
                className="hidden"
              />
            </div>

            {/* Interactive Framing Viewport */}
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs text-[#626A65]">
                <span className="flex items-center gap-1.5 font-medium">
                  <Move className="w-4 h-4 text-[#56685E]" />
                  Clique e arraste a imagem para enquadrar perfeitamente
                </span>
                <span className="text-[11px] bg-[#F8F5F0] px-2.5 py-1 rounded-full border border-[#D6DDD7]">
                  Zoom Atual: {zoom.toFixed(1)}x
                </span>
              </div>

              {/* Crop Frame Box */}
              <div className="relative w-full flex justify-center bg-[#252A27] rounded-2xl p-4 overflow-hidden shadow-inner border border-[#D6DDD7]">
                <div
                  className="relative overflow-hidden cursor-grab active:cursor-grabbing border-2 border-dashed border-white/90 shadow-2xl rounded-xl bg-black/80 flex items-center justify-center select-none"
                  style={{
                    width: '360px',
                    height: `${360 / activeSlot.aspectRatioValue}px`,
                  }}
                  onMouseDown={handleMouseDown}
                >
                  {imageSrc ? (
                    <div
                      className="absolute flex items-center justify-center pointer-events-none transition-transform duration-75"
                      style={{
                        width: `${baseWidth}px`,
                        height: `${baseHeight}px`,
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom}) rotate(${rotation}deg)`,
                        transformOrigin: 'center center',
                      }}
                    >
                      <img
                        src={imageSrc}
                        alt="Preview para Enquadramento"
                        className="w-full h-full object-fill pointer-events-none max-w-none max-h-none"
                        draggable={false}
                      />
                    </div>
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center text-white/60 p-4 text-center space-y-2">
                      <ImageIcon className="w-8 h-8 opacity-50" />
                      <p className="text-xs">Nenhuma foto selecionada para este slot.</p>
                    </div>
                  )}

                  {/* Framing Grid Overlay */}
                  <div className="absolute inset-0 pointer-events-none grid grid-cols-3 grid-rows-3 border border-white/30">
                    <div className="border-r border-b border-white/20"></div>
                    <div className="border-r border-b border-white/20"></div>
                    <div className="border-b border-white/20"></div>
                    <div className="border-r border-b border-white/20"></div>
                    <div className="border-r border-b border-white/20"></div>
                    <div className="border-b border-white/20"></div>
                    <div className="border-r border-white/20"></div>
                    <div className="border-r border-white/20"></div>
                    <div></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adjustment Sliders & Tools */}
            <div className="bg-[#F8F5F0] p-4 rounded-2xl border border-[#D6DDD7] space-y-4">
              
              {/* Zoom Slider */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-[#252A27] w-24 shrink-0">
                  <ZoomIn className="w-4 h-4 text-[#56685E]" />
                  <span>Zoom / Escala:</span>
                </div>

                <input
                  type="range"
                  min="0.3"
                  max="3.5"
                  step="0.05"
                  value={zoom}
                  onChange={(e) => setZoom(parseFloat(e.target.value))}
                  className="flex-1 accent-[#56685E] cursor-pointer"
                />

                <span className="text-xs font-bold text-[#56685E] w-12 text-right">
                  {Math.round(zoom * 100)}%
                </span>
              </div>

              {/* Auxiliary Controls */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-[#D6DDD7]/70">
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setRotation((r) => (r + 90) % 360)}
                    className="px-3 py-1.5 rounded-xl bg-[#FCFBF8] border border-[#D6DDD7] text-xs font-medium text-[#252A27] hover:bg-[#E5EBE6] flex items-center gap-1.5 transition-colors"
                  >
                    <RotateCw className="w-3.5 h-3.5" />
                    <span>Girar 90°</span>
                  </button>

                  <button
                    onClick={() => {
                      setZoom(1);
                      setPan({ x: 0, y: 0 });
                      setRotation(0);
                    }}
                    className="px-3 py-1.5 rounded-xl bg-[#FCFBF8] border border-[#D6DDD7] text-xs font-medium text-[#252A27] hover:bg-[#E5EBE6] flex items-center gap-1.5 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Centralizar</span>
                  </button>
                </div>

                <button
                  onClick={handleResetSlot}
                  className="text-xs text-[#829287] hover:text-[#56685E] underline transition-colors"
                >
                  Restaurar foto original padrão
                </button>
              </div>

            </div>

            {/* Success / Status Message */}
            {saveSuccessMsg && (
              <div className="p-4 rounded-2xl bg-[#E5EBE6] border border-[#56685E] text-[#252A27] text-xs flex items-center gap-3 animate-fadeIn">
                <div className="w-6 h-6 rounded-full bg-[#56685E] text-white flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <p className="font-bold text-sm text-[#56685E]">Foto Gravada no Código do Projeto!</p>
                  <p>{saveSuccessMsg}</p>
                  <p className="text-[11px] text-[#626A65]">
                    A foto foi empacotada no arquivo <code className="bg-white/80 px-1 py-0.5 rounded font-mono">src/data/embeddedPhotos.ts</code> e na pasta <code className="bg-white/80 px-1 py-0.5 rounded font-mono">public/images/</code>.
                  </p>
                </div>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-xl border border-[#D6DDD7] text-xs font-semibold text-[#626A65] hover:bg-[#E5EBE6] transition-colors"
              >
                Concluir / Fechar
              </button>

              <button
                onClick={handleSavePhoto}
                disabled={isSaving || !imageSrc}
                className="px-6 py-2.5 rounded-xl bg-[#56685E] hover:bg-[#3D4B43] text-white text-xs font-semibold flex items-center gap-2 shadow-md transition-all disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Gravando no Código...</span>
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    <span>Gravar e Fixar Foto no Código</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

        {/* Footer Info Banner */}
        <div className="p-4 bg-[#F8F5F0] border-t border-[#D6DDD7] flex items-center justify-between text-[11px] text-[#626A65]">
          <div className="flex items-center gap-2">
            <Info className="w-4 h-4 text-[#56685E] shrink-0" />
            <span>
              Ao baixar o ZIP ou publicar na Vercel, as fotos salvas estarão gravadas permanentemente na pasta <strong>public/images/</strong> e em <strong>src/data/embeddedPhotos.ts</strong>.
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};
