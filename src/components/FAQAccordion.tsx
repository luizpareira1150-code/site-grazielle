import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { FAQ_DATA } from '../data/professional';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';

export const FAQAccordion: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  const col1 = FAQ_DATA.slice(0, 6);
  const col2 = FAQ_DATA.slice(6, 12);

  const renderFAQItem = (faq: typeof FAQ_DATA[0]) => {
    const isOpen = openId === faq.id;
    const contentId = `faq-content-${faq.id}`;
    const headerId = `faq-header-${faq.id}`;

    return (
      <div
        key={faq.id}
        className="rounded-2xl bg-[#FCFBF8] border border-[#D6DDD7] overflow-hidden transition-all duration-200 h-fit"
      >
        <h3>
          <button
            id={headerId}
            aria-expanded={isOpen}
            aria-controls={contentId}
            onClick={() => toggleFAQ(faq.id)}
            className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-serif text-base sm:text-lg text-[#252A27] font-medium hover:text-[#56685E] transition-colors focus:outline-none focus:ring-2 focus:ring-[#56685E]"
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 text-[#829287] shrink-0 transition-transform duration-300 ${
                isOpen ? 'rotate-180 text-[#56685E]' : ''
              }`}
            />
          </button>
        </h3>

        {isOpen && (
          <div
            id={contentId}
            role="region"
            aria-labelledby={headerId}
            className="px-5 sm:px-6 pb-6 pt-0 text-sm sm:text-base text-[#626A65] leading-relaxed border-t border-[#D6DDD7]/50 mt-1 animate-fadeIn"
          >
            <p className="pt-3">{faq.answer}</p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section id="duvidas" className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Esclarecimentos Frequentes"
          title="Perguntas e respostas sobre o atendimento"
          description="Informações transparentes e acessíveis para ajudar você a compreender o funcionamento da avaliação neuropsicológica, da psicoterapia e das palestras."
          badge="Dúvidas Frequentes"
        />

        {/* 2 Columns FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start">
          <div className="space-y-4">
            {col1.map(renderFAQItem)}
          </div>
          <div className="space-y-4">
            {col2.map(renderFAQItem)}
          </div>
        </div>

        {/* Still have questions? */}
        <div className="p-6 rounded-2xl bg-[#E5EBE6] border border-[#D6DDD7] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <p className="font-serif text-base text-[#252A27] font-semibold">
              Sua dúvida não está listada aqui?
            </p>
            <p className="text-xs text-[#626A65]">
              Entre em contato diretamente para receber orientações personalizadas sobre o seu caso.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('default')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#56685E] text-white text-xs font-semibold hover:bg-[#252A27] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Grazielle</span>
          </a>
        </div>

      </div>
    </section>
  );
};
