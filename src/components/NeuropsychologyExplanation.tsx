import React from 'react';
import { SectionHeading } from './SectionHeading';
import { FileSearch, Sparkles, UserCheck, Layers, BookOpenCheck, Crop } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { usePhotoStore } from '../lib/photoStore';

interface NeuropsychologyExplanationProps {
  onOpenPhotoEditor?: (slotKey: string) => void;
}

export const NeuropsychologyExplanation: React.FC<NeuropsychologyExplanationProps> = ({ onOpenPhotoEditor }) => {
  const { getPhoto } = usePhotoStore();
  const materialsPhotoSrc = getPhoto('neuropsych_materials');

  const steps = [
    {
      icon: UserCheck,
      title: "Escuta e Anamnese",
      text: "Compreensão aprofundada da história de vida, das queixas atuais, das rotinas, dos aspectos familiares, acadêmicos e profissionais."
    },
    {
      icon: FileSearch,
      title: "Instrumentos Selecionados",
      text: "Uso rigoroso de testes, escalas e tarefas neuropsicológicas padronizadas e validadas, escolhidas rigorosamente para o perfil de cada pessoa."
    },
    {
      icon: Layers,
      title: "Observação Clínica",
      text: "Análise contínua do comportamento durante a realização das tarefas, nível de tolerância à frustração, estratégias de resolução e fatores emocionais."
    },
    {
      icon: BookOpenCheck,
      title: "Análise e Devolutiva",
      text: "Integração cuidadosa dos dados, elaboração do documento explicativo e realização de sessão presencial ou online para orientar os próximos passos."
    }
  ];

  return (
    <section id="neuropsicologia" className="py-16 sm:py-24 bg-[#F8F5F0] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="O que é a Neuropsicologia"
          title="Uma investigação que vai além da aplicação de testes"
          description="A avaliação neuropsicológica é um processo técnico e humano projetado para mapear como os processos cognitivos, emocionais e comportamentais interagem na vida diária de adolescentes e adultos."
          badge="Método & Rigor"
        />

        {/* Photo Showcase Card: Assessment Environment & Materials */}
        <div className="rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-16/10 sm:aspect-4/3 border border-[#D6DDD7] group">
            <ImageWithFallback
              src={materialsPhotoSrc}
              alt="Materiais e Instrumentos de Avaliação Neuropsicológica"
              fallbackText="Foto • Materiais de Avaliação Neuropsicológica"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {onOpenPhotoEditor && (
              <button
                onClick={() => onOpenPhotoEditor('neuropsych_materials')}
                className="absolute top-3 right-3 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors"
                title="Trocar ou enquadrar foto de Materiais"
              >
                <Crop className="w-3 h-3" />
                <span>Enquadrar Foto</span>
              </button>
            )}

            <div className="absolute top-3 left-3 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D6DDD7]">
              Materiais & Instrumentos
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E5EBE6] text-[#56685E] text-xs font-semibold">
              Prática Avaliativa
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#252A27] font-medium">
              Instrumentos padronizados e olhar clínico individualizado
            </h3>
            <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
              As sessões de avaliação combinam atividades cognitivas direcionadas com momentos de conversa fluida. Todo o material é higienizado, organizado e adaptado à faixa etária e ao nível de fadiga do paciente.
            </p>
          </div>
        </div>


        {/* Content Layout: 4 pillars + Key Highlight Box */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 4 pillars grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-3">
                    <div className="w-10 h-10 rounded-xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-lg text-[#252A27] font-medium">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[#626A65] leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                  <div className="text-[11px] font-semibold text-[#829287] tracking-wider uppercase pt-2">
                    Etapa {idx + 1} de investigação
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Key Highlight Quote Box */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#56685E] text-white flex-1 flex flex-col justify-between space-y-8 shadow-md relative overflow-hidden">
              
              {/* Subtle background graphics */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>

              <div className="space-y-6 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20 text-[#E5EBE6]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Princípio Fundamental</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white font-normal leading-snug">
                  "O resultado não vem de um teste isolado."
                </h3>

                <p className="text-sm sm:text-base text-[#E5EBE6] leading-relaxed font-light">
                  As informações obtidas precisam ser rigorosamente analisadas em conjunto — cruzando a demanda inicial, a trajetória do indivíduo, os fatores ambientais e os dados quantitativos e qualitativos observados.
                </p>
              </div>

              <div className="pt-6 border-t border-white/20 relative z-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                <span className="text-xs text-[#E5EBE6]/80">
                  Sem rótulos simplistas ou testes mecânicos.
                </span>

                <a
                  href={getWhatsAppUrl('neuropsychology')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-[#FCFBF8] text-[#252A27] text-xs font-semibold hover:bg-[#F1EAE1] transition-colors text-center shadow-xs"
                >
                  Saber como funciona
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
