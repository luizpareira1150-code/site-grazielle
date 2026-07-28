import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Check, Compass, Brain, HeartHandshake, ArrowRight } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';

export const ServicesComparison: React.FC = () => {
  const neuroPoints = [
    "Foco em investigação técnica de funções cognitivas e comportamentais",
    "Estrutura organizada em etapas (anamnese, testes, análise, devolutiva)",
    "Uso de instrumentos e baterias padronizadas validadas",
    "Processo delimitado e focado em responder dúvidas clínicas específicas",
    "Conclusão com sessão de devolutiva e documento orientador"
  ];

  const psyPoints = [
    "Acompanhamento contínuo focado em questões emocionais e relacionais",
    "Processo aberto de reflexão, autoconhecimento e elaboração de conflitos",
    "Trabalho baseado no diálogo, vínculo e sentidos das experiências",
    "Desenvolvimento gradual ao longo do tempo conforme necessidades vivenciadas",
    "Sem objetivo de medir ou testar pontuações cognitivas"
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Diferenciação dos Serviços"
          title="Avaliação neuropsicológica e psicoterapia não são o mesmo processo"
          description="Embora ambas visem o bem-estar e o cuidado em saúde mental, possuem objetivos, metodologias e estruturas distintas."
          badge="Comparativo Claro"
        />

        {/* Side-by-side comparison grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Neuropsychology Column */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border-2 border-[#56685E] space-y-6 flex flex-col justify-between shadow-2xs relative">
            <div className="absolute top-4 right-4 bg-[#56685E] text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
              Eixo Principal
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#56685E] text-white">
                  <Brain className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                    Avaliação Neuropsicológica
                  </h3>
                  <p className="text-xs text-[#829287] font-medium">
                    Processo Investigativo Estruturado
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                {neuroPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#E5EBE6] text-[#56685E] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#252A27] font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7]">
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl bg-[#56685E] text-white text-xs font-semibold hover:bg-[#252A27] transition-colors"
              >
                <span>Perguntar sobre a Avaliação</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Psychotherapy Column */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-[#E5EBE6] text-[#56685E]">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                    Psicoterapia Clínica
                  </h3>
                  <p className="text-xs text-[#829287] font-medium">
                    Acompanhamento Emocional & Relacional
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 pt-2">
                {psyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#F1EAE1] text-[#829287] flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm text-[#252A27] font-medium leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7]">
              <a
                href={getWhatsAppUrl('psychotherapy')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-5 py-3 rounded-xl bg-[#FCFBF8] text-[#252A27] border border-[#D6DDD7] text-xs font-semibold hover:bg-[#F1EAE1] transition-colors"
              >
                <span>Perguntar sobre a Psicoterapia</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Complementary Note */}
        <div className="p-6 rounded-2xl bg-[#E5EBE6]/60 border border-[#D6DDD7] text-center text-xs sm:text-sm text-[#626A65] font-medium max-w-2xl mx-auto">
          Nenhuma das frentes é superior à outra. Quando há indicação clínica, a avaliação neuropsicológica e a psicoterapia podem se complementar para enriquecer o cuidado integral.
        </div>

      </div>
    </section>
  );
};
