import React from 'react';
import { SectionHeading } from './SectionHeading';
import { GraduationCap, Briefcase, Users2, Shield, Crop } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { usePhotoStore } from '../lib/photoStore';

interface AudienceSectionProps {
  onOpenPhotoEditor?: (slotKey: string) => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenPhotoEditor }) => {
  const { getPhoto } = usePhotoStore();
  const teensPhotoSrc = getPhoto('audience_teens');
  const adultsPhotoSrc = getPhoto('audience_adults');

  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Público Atendido"
          title="Uma avaliação construída para cada fase e demanda"
          description="A avaliação neuropsicológica adapta seus instrumentos, ritmo e linguagem ao momento de vida da pessoa, atendendo exclusivamente adolescentes e adultos."
          badge="Adolescentes & Adultos"
        />

        {/* Audience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Adolescentes Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              
              {/* Photo Slot: Adolescentes */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#D6DDD7] group">
                <ImageWithFallback
                  src={teensPhotoSrc}
                  alt="Acompanhamento e Avaliação de Adolescentes"
                  fallbackText="Foto • Atendimento a Adolescentes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {onOpenPhotoEditor && (
                  <button
                    onClick={() => onOpenPhotoEditor('audience_teens')}
                    className="absolute top-2.5 right-2.5 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors"
                    title="Trocar ou enquadrar foto de Adolescentes"
                  >
                    <Crop className="w-3 h-3" />
                    <span>Enquadrar</span>
                  </button>
                )}

                <div className="absolute top-2.5 left-2.5 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D6DDD7]">
                  Adolescentes
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Desenvolvimento & Aprendizagem
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                  Atendimento a Adolescentes
                </h3>
                <p className="text-sm text-[#829287] mt-1 font-medium">
                  Foco em transições, rotina escolar e autorregulação
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
                Na adolescência, mudanças no desempenho acadêmico, dificuldades de atenção, desorganização ou variações comportamentais podem gerar dúvidas nos próprios jovens e na família.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Users2 className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Participação dos responsáveis organizada com respeito à autonomia e preceitos éticos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Shield className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Linguagem acolhedora, sem infantilização e com foco na compreensão do contexto.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7]/80 flex items-center justify-between">
              <span className="text-xs text-[#829287]">
                Orientação aos pais e escola quando indicado.
              </span>
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#56685E] hover:text-[#252A27] underline underline-offset-4"
              >
                Informações para adolescentes
              </a>
            </div>
          </div>

          {/* Adultos Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-6">
              
              {/* Photo Slot: Adultos */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#D6DDD7] group">
                <ImageWithFallback
                  src={adultsPhotoSrc}
                  alt="Avaliação Neuropsicológica e Psicoterapia para Adultos"
                  fallbackText="Foto • Atendimento a Adultos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {onOpenPhotoEditor && (
                  <button
                    onClick={() => onOpenPhotoEditor('audience_adults')}
                    className="absolute top-2.5 right-2.5 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors"
                    title="Trocar ou enquadrar foto de Adultos"
                  >
                    <Crop className="w-3 h-3" />
                    <span>Enquadrar</span>
                  </button>
                )}

                <div className="absolute top-2.5 left-2.5 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D6DDD7]">
                  Adultos
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Vida Adulta & Profissional
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                  Atendimento a Adultos
                </h3>
                <p className="text-sm text-[#829287] mt-1 font-medium">
                  Investigação de foco, memória e demandas do trabalho
                </p>
              </div>

              <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
                Em adultos, a avaliação costuma ser procurada por conta de sobrecarga no trabalho, lapsos de memória, dificuldades de concentração, transições de carreira ou por solicitação médica.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Shield className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Análise ponderada: esquecimentos rotineiros não indicam automaticamente transtornos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Users2 className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Foco no entendimento do funcionamento pessoal para orientar estratégias práticas.</span>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7]/80 flex items-center justify-between">
              <span className="text-xs text-[#829287]">
                Atendimento presencial e online.
              </span>
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#56685E] hover:text-[#252A27] underline underline-offset-4"
              >
                Informações para adultos
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

