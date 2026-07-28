import React from 'react';
import { X, FileText } from 'lucide-react';
import { PROFESSIONAL_DATA } from '../data/professional';

interface TermsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TermsModal: React.FC<TermsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252A27]/60 backdrop-blur-sm">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="terms-title"
        className="bg-[#FCFBF8] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#D6DDD7] shadow-2xl space-y-6"
      >
        <div className="flex items-center justify-between border-b border-[#D6DDD7] pb-4">
          <div className="flex items-center gap-2 text-[#56685E]">
            <FileText className="w-5 h-5" />
            <h2 id="terms-title" className="font-serif text-xl font-medium text-[#252A27]">
              Termos de Uso
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar termos de uso"
            className="p-2 rounded-full hover:bg-[#E5EBE6] text-[#626A65] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#626A65] leading-relaxed">
          <p>
            Bem-vindo ao site institucional de <strong>{PROFESSIONAL_DATA.name}</strong> ({PROFESSIONAL_DATA.crp}). Ao navegar por este site, você concorda com os termos aqui apresentados.
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">1. Caráter Informativo</h3>
          <p>
            As informações contidas neste site possuem finalidade exclusivamente educativa e informativa sobre a Neuropsicologia e a Psicoterapia. Nenhuma informação substitui uma consulta, avaliação ou orientação profissional individualizada.
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">2. Ausência de Atendimento Emergencial</h3>
          <p>
            Este site e seus canais de mensagens não realizam atendimento de emergência ou urgência psiquiátrica. Em momentos de crise imediata, dirija-se ao pronto-socorro mais próximo, ligue para o SAMU (192) ou entre em contato com o CVV pelo número 188.
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">3. Direitos Autorais</h3>
          <p>
            Todo o conteúdo textual e identidade visual são de propriedade de {PROFESSIONAL_DATA.name}, sendo proibida a reprodução não autorizada.
          </p>
        </div>

        <div className="pt-4 border-t border-[#D6DDD7] text-right">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-[#56685E] text-white text-xs font-semibold hover:bg-[#252A27] transition-colors"
          >
            Compreendido
          </button>
        </div>
      </div>
    </div>
  );
};
