import React from 'react';
import { getWhatsAppUrl } from '../data/professional';
import { MessageCircle, ArrowRight } from 'lucide-react';

export const ContactBanner: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 bg-[#56685E] text-white relative overflow-hidden">
      
      {/* Decorative background circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full pointer-events-none blur-3xl" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="space-y-4">
          <span className="inline-block px-3.5 py-1 rounded-full bg-white/10 text-[#E5EBE6] text-xs font-medium border border-white/20">
            Acolhimento Informativo
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-normal leading-tight">
            "Nem toda dúvida chega com um nome definido."
          </h2>

          <p className="text-base sm:text-lg text-[#E5EBE6] leading-relaxed max-w-2xl mx-auto font-light">
            O contato inicial pode ajudar a esclarecer qual serviço faz sentido para a demanda apresentada e como o processo é organizado.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a
            href={getWhatsAppUrl('neuropsychology')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FCFBF8] text-[#252A27] text-xs sm:text-sm font-semibold hover:bg-[#F1EAE1] transition-colors shadow-xs w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-4 h-4 text-[#56685E]" />
            <span>Perguntar sobre avaliação neuropsicológica</span>
          </a>

          <a
            href={getWhatsAppUrl('psychotherapy')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white/10 text-white border border-white/25 text-xs sm:text-sm font-semibold hover:bg-white/20 transition-colors w-full sm:w-auto justify-center"
          >
            <span>Perguntar sobre psicoterapia</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <p className="text-[11px] text-[#E5EBE6]/70 pt-2">
          Este canal não realiza atendimentos emergenciais nem triagem clínica automatizada.
        </p>

      </div>
    </section>
  );
};
