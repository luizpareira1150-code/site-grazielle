import React from 'react';
import { SectionHeading } from './SectionHeading';
import { MYTHS_DATA } from '../data/professional';
import { HelpCircle, CheckCircle2, ShieldX } from 'lucide-react';

export const MythsSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Esclarecimentos Necessários"
          title="Neuropsicologia sem respostas simplistas"
          description="Desmistificar ideias equivocadas sobre a prática neuropsicológica é o primeiro passo para uma experiência mais segura, ética e tranquila."
          badge="Mitos & Verdades"
        />

        {/* Myths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MYTHS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all"
            >
              {/* Myth statement */}
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F1EAE1] text-[#626A65] text-xs font-semibold">
                  <ShieldX className="w-3.5 h-3.5 text-[#829287]" />
                  <span>Mito Comum</span>
                </div>
                <h3 className="font-serif text-lg sm:text-xl text-[#252A27] font-medium leading-snug">
                  "{item.myth}"
                </h3>
              </div>

              {/* Reality answer */}
              <div className="p-5 rounded-2xl bg-[#E5EBE6]/60 border border-[#D6DDD7] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#56685E] uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4 text-[#56685E]" />
                  <span>A Realidade da Prática Clínico-Neuropsicológica</span>
                </div>
                <p className="text-sm sm:text-base text-[#252A27] leading-relaxed font-normal">
                  {item.reality}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
