import React, { useState } from 'react';
import { SectionHeading } from './SectionHeading';
import { COGNITIVE_DOMAINS } from '../data/professional';
import { Target, Brain, Compass, MessageSquareText, HeartHandshake, CheckCircle2, Info, ChevronRight } from 'lucide-react';

export const CognitiveDomains: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(COGNITIVE_DOMAINS[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-5 h-5" />;
      case 'Brain': return <Brain className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'MessageSquareText': return <MessageSquareText className="w-5 h-5" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5" />;
      default: return <Brain className="w-5 h-5" />;
    }
  };

  const activeDomain = COGNITIVE_DOMAINS.find(d => d.id === activeTab) || COGNITIVE_DOMAINS[0];

  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Áreas de Investigação"
          title="Funções cognitivas e emocionais em análise"
          description="A avaliação neuropsicológica investiga diferentes dimensões do funcionamento mental de maneira integrada, personalizada para as dúvidas específicas de cada pessoa."
          badge="Domínios Cognitivos"
        />

        {/* Tab Navigation for Desktop / Mobile Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Domain Selector Navigation (Left Column) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-semibold text-[#829287] uppercase tracking-wider px-1 pb-1">
              Selecione o grupo para explorar:
            </p>

            <div className="space-y-2">
              {COGNITIVE_DOMAINS.map((domain) => {
                const isActive = domain.id === activeTab;
                return (
                  <button
                    key={domain.id}
                    onClick={() => setActiveTab(domain.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between group focus:outline-none focus:ring-2 focus:ring-[#56685E] ${
                      isActive
                        ? 'bg-[#56685E] text-white border-[#56685E] shadow-sm'
                        : 'bg-[#F8F5F0] text-[#252A27] border-[#D6DDD7] hover:bg-[#E5EBE6] hover:border-[#829287]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        isActive ? 'bg-white/15 text-white' : 'bg-[#E5EBE6] text-[#56685E]'
                      }`}>
                        {getIcon(domain.iconName)}
                      </div>
                      <span className="font-serif font-medium text-base sm:text-lg">
                        {domain.title}
                      </span>
                    </div>

                    <div className="flex items-center">
                      <ChevronRight
                        className={`w-5 h-5 transition-transform duration-200 ${
                          isActive
                            ? 'text-white translate-x-1'
                            : 'text-[#829287] group-hover:text-[#56685E] group-hover:translate-x-1'
                        }`}
                      />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Domain Detail Display (Right Column) */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#D6DDD7] space-y-8 relative shadow-2xs">
              
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#E5EBE6] text-[#56685E]">
                  {getIcon(activeDomain.iconName)}
                </div>
                <div>
                  <span className="text-xs font-semibold text-[#829287] uppercase tracking-wider block">
                    Investigação Direcionada
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#252A27] font-medium">
                    {activeDomain.title}
                  </h3>
                </div>
              </div>

              <p className="text-base text-[#626A65] leading-relaxed">
                {activeDomain.description}
              </p>

              {/* Items List */}
              <div className="space-y-4 pt-2">
                <p className="text-xs font-semibold text-[#252A27] uppercase tracking-wider">
                  Aspectos específicos investigados nesta dimensão:
                </p>
                
                <div className="space-y-3">
                  {activeDomain.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-[#FCFBF8] border border-[#D6DDD7]/80">
                      <CheckCircle2 className="w-5 h-5 text-[#56685E] shrink-0 mt-0.5" />
                      <span className="text-sm text-[#252A27] font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cautious note inside domain details */}
              <div className="p-4 rounded-xl bg-[#E5EBE6]/60 border border-[#D6DDD7] flex items-start gap-2.5 text-xs text-[#626A65]">
                <Info className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                <span>
                  As funções e áreas efetivamente investigadas são selecionadas de forma personalizada, segundo a demanda e o plano de avaliação definido para cada pessoa.
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
