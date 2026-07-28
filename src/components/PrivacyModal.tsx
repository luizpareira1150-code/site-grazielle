import React from 'react';
import { X, ShieldCheck } from 'lucide-react';
import { PROFESSIONAL_DATA } from '../data/professional';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#252A27]/60 backdrop-blur-sm">
      <div 
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-title"
        className="bg-[#FCFBF8] rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 sm:p-8 border border-[#D6DDD7] shadow-2xl space-y-6"
      >
        <div className="flex items-center justify-between border-b border-[#D6DDD7] pb-4">
          <div className="flex items-center gap-2 text-[#56685E]">
            <ShieldCheck className="w-5 h-5" />
            <h2 id="privacy-title" className="font-serif text-xl font-medium text-[#252A27]">
              Política de Privacidade & LGPD
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Fechar política de privacidade"
            className="p-2 rounded-full hover:bg-[#E5EBE6] text-[#626A65] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-[#626A65] leading-relaxed">
          <p>
            Este site tem caráter exclusivamente informativo sobre os serviços de avaliação neuropsicológica, psicoterapia e palestras oferecidos por <strong>{PROFESSIONAL_DATA.name}</strong> ({PROFESSIONAL_DATA.crp}).
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">1. Coleta de Dados</h3>
          <p>
            Este site não possui formulários clínicos para coleta de dados de saúde ou histórico de pacientes. Não são coletados dados pessoais sensíveis diretamente no navegador.
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">2. Redirecionamento e Contato</h3>
          <p>
            Ao clicar nos botões de contato via WhatsApp ou Instagram, você será redirecionado para aplicativos de terceiros. As conversas e dados trocados diretamente nessas plataformas estão sujeitos às suas respectivas políticas de privacidade e às diretrizes do Conselho Federal de Psicologia (CFP).
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">3. Cookies e Rastreamento</h3>
          <p>
            Utilizamos apenas cookies essenciais para o funcionamento básico e acessibilidade do site. Não utilizamos trackers invasivos, gravação de sessão ou pixels de publicidade sem consentimento.
          </p>

          <h3 className="font-serif text-sm font-semibold text-[#252A27]">4. Contato do Encarregado de Dados</h3>
          <p>
            Para esclarecimentos sobre privacidade ou exercício de direitos LGPD, entre em contato pelo telefone/WhatsApp profissional: {PROFESSIONAL_DATA.phoneDisplay}.
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
