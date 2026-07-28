import React from 'react';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { MessageCircle, Instagram, MapPin, Globe, CheckCircle2 } from 'lucide-react';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF8] border-t border-[#D6DDD7] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        <div className="space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EBE6] text-[#56685E] text-xs font-semibold border border-[#D6DDD7]">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Primeiro Passo Informativo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl text-[#252A27] font-medium leading-tight">
            Informação também ajuda a organizar o próximo passo.
          </h2>

          <p className="text-base sm:text-lg text-[#626A65] leading-relaxed font-normal">
            Entre em contato para esclarecer dúvidas sobre avaliação neuropsicológica, psicoterapia ou palestras com tranquilidade e transparência.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={getWhatsAppUrl('default')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#56685E] text-white text-sm sm:text-base font-medium hover:bg-[#252A27] transition-all shadow-sm w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-[#56685E]"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Falar com Grazielle no WhatsApp</span>
          </a>

          <a
            href={PROFESSIONAL_DATA.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#FCFBF8] text-[#252A27] border border-[#D6DDD7] text-sm sm:text-base font-medium hover:bg-[#F1EAE1] transition-all shadow-2xs w-full sm:w-auto justify-center focus:outline-none focus:ring-2 focus:ring-[#56685E]"
          >
            <Instagram className="w-5 h-5 text-[#56685E]" />
            <span>Acessar o Instagram {PROFESSIONAL_DATA.instagramUser}</span>
          </a>
        </div>

        {/* Quick summary strip */}
        <div className="pt-8 border-t border-[#D6DDD7] grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-[#626A65]">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#56685E] shrink-0" />
            <span>{PROFESSIONAL_DATA.address}, Barra Mansa - RJ</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Globe className="w-4 h-4 text-[#56685E] shrink-0" />
            <span>Atendimento Presencial e Online</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MessageCircle className="w-4 h-4 text-[#56685E] shrink-0" />
            <span>{PROFESSIONAL_DATA.phoneDisplay}</span>
          </div>
        </div>

      </div>
    </section>
  );
};
