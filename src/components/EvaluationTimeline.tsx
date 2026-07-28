import React from 'react';
import { SectionHeading } from './SectionHeading';
import { EVALUATION_TIMELINE, getWhatsAppUrl } from '../data/professional';
import { Calendar, ArrowRight, CheckCircle } from 'lucide-react';

export const EvaluationTimeline: React.FC = () => {
  return (
    <section id="como-funciona" className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Jornada da Avaliação"
          title="Um processo organizado em etapas clareadoras"
          description="A avaliação neuropsicológica é uma caminhada com começo, meio e fim, estruturada para oferecer respostas consistentes com segurança e transparência."
          badge="Passo a Passo"
        />

        {/* Timeline Layout */}
        <div className="relative">
          
          {/* Vertical Connecting Line on Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-0.5 bg-[#D6DDD7] -translate-x-1/2 pointer-events-none" />

          <div className="space-y-8 sm:space-y-12">
            {EVALUATION_TIMELINE.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={step.stepNumber}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Step Card Content */}
                  <div className="w-full lg:w-1/2 px-0 lg:px-8">
                    <div className="p-6 sm:p-8 rounded-2xl bg-[#F8F5F0] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-3 relative group">
                      
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-semibold uppercase tracking-wider text-[#56685E] bg-[#E5EBE6] px-3 py-1 rounded-full border border-[#D6DDD7]">
                          Etapa 0{step.stepNumber}
                        </span>
                        <span className="text-xs text-[#829287] font-medium">
                          {step.subtitle}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl text-[#252A27] font-medium group-hover:text-[#56685E] transition-colors">
                        {step.title}
                      </h3>

                      <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center Node Badge on Desktop */}
                  <div className="my-4 lg:my-0 z-10 flex items-center justify-center w-12 h-12 rounded-full bg-[#56685E] text-white font-serif text-base font-bold shadow-sm shrink-0">
                    {step.stepNumber}
                  </div>

                  {/* Spacer for 2-column alignment */}
                  <div className="hidden lg:block w-1/2" />

                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Flexibility Disclaimer & Action */}
        <div className="p-8 rounded-3xl bg-[#E5EBE6]/80 border border-[#D6DDD7] text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FCFBF8] text-[#56685E] text-xs font-medium border border-[#D6DDD7]">
            <Calendar className="w-3.5 h-3.5" />
            <span>Flexibilidade do Atendimento</span>
          </div>

          <p className="text-sm sm:text-base text-[#252A27] leading-relaxed font-medium">
            O número de encontros e os recursos específicos utilizados variam conforme a complexidade e os objetivos individuais de cada avaliação.
          </p>

          <div className="pt-2">
            <a
              href={getWhatsAppUrl('neuropsychology')}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#56685E] text-white text-xs sm:text-sm font-semibold hover:bg-[#252A27] transition-colors shadow-xs"
            >
              <span>Perguntar sobre a estrutura do processo</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
