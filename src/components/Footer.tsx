import React, { useState } from 'react';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { MessageCircle, Instagram, MapPin, AlertTriangle, ShieldCheck } from 'lucide-react';
import { PrivacyModal } from './PrivacyModal';
import { TermsModal } from './TermsModal';

export const Footer: React.FC = () => {
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Neuropsicologia', href: '#neuropsicologia' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Psicoterapia', href: '#psicoterapia' },
    { name: 'Sobre Grazielle', href: '#sobre' },
    { name: 'Palestras', href: '#palestras' },
    { name: 'Dúvidas', href: '#duvidas' },
  ];

  return (
    <footer className="bg-[#252A27] text-[#E5EBE6] pt-16 pb-12 border-t border-[#56685E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 items-start">
          
          {/* Brand & Registration */}
          <div className="lg:col-span-5 space-y-4">
            <div>
              <span className="font-serif text-2xl text-white font-semibold block">
                {PROFESSIONAL_DATA.name}
              </span>
              <span className="text-xs text-[#829287] font-medium block">
                {PROFESSIONAL_DATA.title} • <strong className="text-[#DED2C2]">{PROFESSIONAL_DATA.crp}</strong>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-[#829287] leading-relaxed max-w-sm">
              Avaliação neuropsicológica e psicoterapia para adolescentes e adultos. Atendimento presencial em Barra Mansa – RJ e online.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={getWhatsAppUrl('default')}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp profissional"
                className="p-2.5 rounded-full bg-[#56685E] text-white hover:bg-[#829287] transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href={PROFESSIONAL_DATA.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram profissional"
                className="p-2.5 rounded-full bg-[#56685E] text-white hover:bg-[#829287] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Navegação
            </p>
            <ul className="space-y-2 text-xs sm:text-sm text-[#829287]">
              {navLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location & Contact Info */}
          <div className="lg:col-span-4 space-y-3">
            <p className="text-xs font-semibold text-white uppercase tracking-wider">
              Atendimento e Endereço
            </p>
            <div className="space-y-2 text-xs sm:text-sm text-[#829287]">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#829287] shrink-0 mt-0.5" />
                <span>{PROFESSIONAL_DATA.address}, Barra Mansa – RJ</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#829287] shrink-0" />
                <span>WhatsApp: {PROFESSIONAL_DATA.phoneDisplay}</span>
              </p>
              <p className="flex items-center gap-2">
                <Instagram className="w-4 h-4 text-[#829287] shrink-0" />
                <span>Instagram: {PROFESSIONAL_DATA.instagramUser}</span>
              </p>
            </div>
          </div>

        </div>

        {/* Emergency Notice Box (Ethical & A11y Requirement) */}
        <div className="p-4 sm:p-5 rounded-2xl bg-[#56685E]/30 border border-[#56685E]/60 text-xs text-[#E5EBE6] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#DED2C2]">
            <AlertTriangle className="w-4 h-4 text-[#DED2C2] shrink-0" />
            <span>Aviso sobre situações de emergência:</span>
          </div>
          <p className="leading-relaxed font-light">
            Este canal não realiza atendimento de urgência. Em situações de risco imediato ou crise grave, procure um serviço de emergência local ou acione o <strong>SAMU pelo número 192</strong>. Para apoio emocional gratuito e sigiloso, o <strong>CVV atende pelo número 188</strong> (24 horas).
          </p>
        </div>

        {/* Informative Disclaimer & Copyright Bottom Bar */}
        <div className="pt-8 border-t border-[#56685E]/50 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#829287]">
          <p className="text-center md:text-left">
            Este site possui caráter informativo e não substitui avaliação ou atendimento profissional.
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setPrivacyOpen(true)}
              className="hover:text-white transition-colors underline"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => setTermsOpen(true)}
              className="hover:text-white transition-colors underline"
            >
              Termos de Uso
            </button>
          </div>

          <p>© {new Date().getFullYear()} Grazielle Nacarate • {PROFESSIONAL_DATA.crp}. Todos os direitos reservados.</p>
        </div>

      </div>

      {/* Modals */}
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <TermsModal isOpen={termsOpen} onClose={() => setTermsOpen(false)} />
    </footer>
  );
};
