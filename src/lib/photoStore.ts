import { useState, useEffect, useCallback } from 'react';
import { EMBEDDED_PHOTOS, DEFAULT_PHOTOS } from '../data/embeddedPhotos';

export interface PhotoSlotConfig {
  key: string;
  title: string;
  category: string;
  recommendedAspect: string; // e.g. "3:4", "4:3", "16:9"
  aspectRatioValue: number; // e.g. 0.75, 1.33, 1.77
  description: string;
}

export const PHOTO_SLOTS: PhotoSlotConfig[] = [
  {
    key: 'hero_portrait',
    title: 'Foto Principal da Hero (Início)',
    category: 'Geral / Apresentação',
    recommendedAspect: '3:4 (Retrato)',
    aspectRatioValue: 3 / 4,
    description: 'Foto em destaque no topo da página principal.'
  },
  {
    key: 'about_portrait',
    title: 'Retrato da Seção Sobre Mim',
    category: 'Sobre Mim',
    recommendedAspect: '3:4 (Retrato)',
    aspectRatioValue: 3 / 4,
    description: 'Foto do perfil profissional na apresentação da trajetória.'
  },
  {
    key: 'office_1',
    title: 'Consultório 1 - Sala Principal',
    category: 'Consultório',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Sala de atendimento e avaliação neuropsicológica.'
  },
  {
    key: 'office_2',
    title: 'Consultório 2 - Recepção / Espera',
    category: 'Consultório',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Ambiente de recepção e recepção do consultório.'
  },
  {
    key: 'office_3',
    title: 'Consultório 3 - Materiais e Estrutura',
    category: 'Consultório',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Detalhes da estrutura e ambiente de atendimento.'
  },
  {
    key: 'psychotherapy_hero',
    title: 'Sessão de Psicoterapia',
    category: 'Serviços',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Imagem ilustrativa ou real do ambiente de escuta e psicoterapia.'
  },
  {
    key: 'neuropsych_materials',
    title: 'Materiais de Avaliação Neuropsicológica',
    category: 'Serviços',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Sessão e aplicação de testes neuropsicológicos.'
  },
  {
    key: 'lectures_banner',
    title: 'Palestras e Treinamentos',
    category: 'Palestras',
    recommendedAspect: '4:3 (Paisagem)',
    aspectRatioValue: 4 / 3,
    description: 'Apresentação em empresas, escolas e instituições.'
  },
  {
    key: 'audience_children',
    title: 'Atendimento Infantil (A partir de 6 anos)',
    category: 'Público',
    recommendedAspect: '16:9 (Panorâmica)',
    aspectRatioValue: 16 / 9,
    description: 'Foto do cartão de público para crianças a partir de 6 anos.'
  },
  {
    key: 'audience_teens',
    title: 'Atendimento a Adolescentes',
    category: 'Público',
    recommendedAspect: '16:9 (Panorâmica)',
    aspectRatioValue: 16 / 9,
    description: 'Foto do cartão de público para adolescentes.'
  },
  {
    key: 'audience_adults',
    title: 'Atendimento a Adultos',
    category: 'Público',
    recommendedAspect: '16:9 (Panorâmica)',
    aspectRatioValue: 16 / 9,
    description: 'Foto do cartão de público para adultos.'
  }
];

const LOCAL_STORAGE_KEY = 'gn_custom_photos_v1';

type Listener = () => void;
const listeners = new Set<Listener>();

// In-memory cache for ultra-fast updates and fallback if localStorage quota is reached
let memoryPhotosCache: Record<string, string> | null = null;
let memoryRawOriginalsCache: Record<string, string> | null = null;

function loadInitialPhotos(): Record<string, string> {
  const merged = { ...DEFAULT_PHOTOS, ...EMBEDDED_PHOTOS };
  if (typeof window !== 'undefined') {
    try {
      const stored = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        Object.assign(merged, parsed);
      }
      // Check individual slot overrides
      PHOTO_SLOTS.forEach((slot) => {
        const single = localStorage.getItem(`gn_photo_${slot.key}`);
        if (single) {
          merged[slot.key] = single;
        }
      });
    } catch (e) {
      console.warn('Could not read photos from localStorage', e);
    }
  }
  return merged;
}

function loadInitialRawOriginals(): Record<string, string> {
  const merged = { ...DEFAULT_PHOTOS, ...EMBEDDED_PHOTOS };
  if (typeof window !== 'undefined') {
    try {
      PHOTO_SLOTS.forEach((slot) => {
        const raw = localStorage.getItem(`gn_raw_photo_${slot.key}`);
        if (raw) {
          merged[slot.key] = raw;
        }
      });
    } catch (e) {
      console.warn('Could not read raw photos from localStorage', e);
    }
  }
  return merged;
}

function getMemoryPhotos(): Record<string, string> {
  if (!memoryPhotosCache) {
    memoryPhotosCache = loadInitialPhotos();
  }
  return memoryPhotosCache;
}

export function saveRawOriginal(key: string, dataUrl: string) {
  if (!memoryRawOriginalsCache) {
    memoryRawOriginalsCache = loadInitialRawOriginals();
  }
  memoryRawOriginalsCache[key] = dataUrl;
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(`gn_raw_photo_${key}`, dataUrl);
    } catch (e) {
      console.warn('Could not store raw photo in localStorage', e);
    }
  }
}

export function getRawOriginal(key: string): string {
  if (!memoryRawOriginalsCache) {
    memoryRawOriginalsCache = loadInitialRawOriginals();
  }
  return memoryRawOriginalsCache[key] || DEFAULT_PHOTOS[key] || '';
}

function emitChange() {
  listeners.forEach((listener) => listener());
}

// Get initial photos merged with localStorage and memory cache
export function getSavedPhotos(): Record<string, string> {
  return getMemoryPhotos();
}

export function getPhotoUrl(key: string): string {
  const photos = getSavedPhotos();
  return photos[key] || DEFAULT_PHOTOS[key] || '';
}

export async function persistPhotoToProject(key: string, dataUrl: string): Promise<{ success: boolean; message: string }> {
  // 1. Update in-memory cache and notify listeners immediately
  const memory = getMemoryPhotos();
  memory[key] = dataUrl;
  emitChange();

  // 2. Try persisting to LocalStorage safely (handling quota limits gracefully)
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memory));
    } catch (e) {
      // Storage quota exceeded for single blob — try storing single item or cleanup
      try {
        localStorage.setItem(`gn_photo_${key}`, dataUrl);
      } catch (innerErr) {
        console.warn('LocalStorage quota reached. Photo retained in active session memory.', innerErr);
      }
    }
  }

  // 3. Send to backend API to write physically to public/images and src/data/embeddedPhotos.ts
  try {
    const res = await fetch('/api/save-photo', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ photoKey: key, dataUrl }),
    });

    if (res.ok) {
      const json = await res.json();
      return { success: true, message: json.message || 'Foto gravada com sucesso no código fonte!' };
    } else {
      return { success: true, message: 'Foto salva no navegador! (No Vercel/Produção a gravação local é mantida no cache).' };
    }
  } catch (err) {
    console.warn('Backend endpoint non-responsive, stored in client storage.', err);
    return { success: true, message: 'Foto gravada com sucesso na sessão do navegador!' };
  }
}

export function resetPhotoSlot(key: string) {
  const memory = getMemoryPhotos();
  delete memory[key];
  emitChange();

  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memory));
      localStorage.removeItem(`gn_photo_${key}`);
    } catch (e) {
      console.warn('Could not reset photo in localStorage', e);
    }
  }
}

export function usePhotoStore() {
  const [photos, setPhotos] = useState<Record<string, string>>(() => getSavedPhotos());

  useEffect(() => {
    const handleChange = () => {
      setPhotos(getSavedPhotos());
    };
    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  // Auto-sync browser localStorage photos to disk via /api/save-photo
  useEffect(() => {
    if (typeof window !== 'undefined') {
      PHOTO_SLOTS.forEach((slot) => {
        try {
          const custom = localStorage.getItem(`gn_photo_${slot.key}`) ||
            (localStorage.getItem('gn_raw_photo_' + slot.key));
          if (custom && custom.startsWith('data:image/')) {
            persistPhotoToProject(slot.key, custom);
          }
        } catch (e) {}
      });
    }
  }, []);

  const getPhoto = useCallback(
    (key: string) => photos[key] || DEFAULT_PHOTOS[key] || '',
    [photos]
  );

  const getRawOriginalCb = useCallback(
    (key: string) => getRawOriginal(key) || photos[key] || DEFAULT_PHOTOS[key] || '',
    [photos]
  );

  const saveRawOriginalCb = useCallback(
    (key: string, dataUrl: string) => saveRawOriginal(key, dataUrl),
    []
  );

  const resetPhotoCb = useCallback((key: string) => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem(`gn_raw_photo_${key}`);
      } catch (e) {}
    }
    resetPhotoSlot(key);
  }, []);

  return {
    photos,
    getPhoto,
    getRawOriginal: getRawOriginalCb,
    saveRawOriginal: saveRawOriginalCb,
    savePhoto: persistPhotoToProject,
    resetPhoto: resetPhotoCb,
  };
}
