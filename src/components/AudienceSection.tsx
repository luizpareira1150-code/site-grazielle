import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Sparkles, GraduationCap, Briefcase, Users2, Shield, BookOpen } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
export const AudienceSection: React.FC = () => {
  const childrenPhotoSrc = '/images/audience_children.jpg';
  const teensPhotoSrc = '/images/audience_teens.jpg';
  const adultsPhotoSrc = '/images/audience_adults.jpg';

  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Público Atendido"
          title="Uma avaliação construída para cada fase e demanda"
          description="A avaliação neuropsicológica adapta seus instrumentos, ritmo e linguagem ao momento de vida da pessoa, acolhendo crianças (a partir de 6 anos), adolescentes e adultos."
          badge="Crianças, Adolescentes & Adultos"
        />

        {/* Audience Cards Grid - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          
          {/* Crianças (6+ anos) Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-5">
              
              {/* Photo Slot: Crianças */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#D6DDD7] group">
                <ImageWithFallback
                  src={childrenPhotoSrc}
                  alt="Avaliação Neuropsicológica Infantil a partir de 6 anos"
                  fallbackText="Foto • Atendimento Infantil"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2.5 left-2.5 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D6DDD7]">
                  A partir de 6 anos
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Infância & Desenvolvimento
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#252A27] font-medium">
                  Atendimento Infantil
                </h3>
                <p className="text-xs sm:text-sm text-[#829287] mt-1 font-medium">
                  A partir de 6 anos • Atenção, aprendizagem e comportamento
                </p>
              </div>

              <p className="text-sm text-[#626A65] leading-relaxed">
                Investigação acolhedora e lúdica de marcos do desenvolvimento, questões escolares, dificuldades atencionais (TDAH), desorganização e aspectos socioemocionais.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Users2 className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Parceria próxima com os pais, cuidadores e equipe pedagógica escolar.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Shield className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Instrumentos e dinâmicas estruturadas com respeito ao ritmo da criança.</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#D6DDD7]/80 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs text-[#829287]">
                Orientação familiar e escolar.
              </span>
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#56685E] hover:text-[#252A27] underline underline-offset-4"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Adolescentes Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-5">
              
              {/* Photo Slot: Adolescentes */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#D6DDD7] group">
                <ImageWithFallback
                  src={teensPhotoSrc}
                  alt="Acompanhamento e Avaliação de Adolescentes"
                  fallbackText="Foto • Atendimento a Adolescentes"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2.5 left-2.5 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D6DDD7]">
                  Adolescentes
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Desenvolvimento & Aprendizagem
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#252A27] font-medium">
                  Atendimento a Adolescentes
                </h3>
                <p className="text-xs sm:text-sm text-[#829287] mt-1 font-medium">
                  Foco em transições, rotina escolar e autorregulação
                </p>
              </div>

              <p className="text-sm text-[#626A65] leading-relaxed">
                Na adolescência, mudanças no desempenho acadêmico, dificuldades de atenção, desorganização ou variações comportamentais podem gerar dúvidas nos jovens e na família.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Users2 className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Participação dos responsáveis com respeito à autonomia do jovem.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Shield className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Linguagem acolhedora, sem infantilização e com foco na compreensão global.</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#D6DDD7]/80 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs text-[#829287]">
                Orientação aos pais e escola.
              </span>
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#56685E] hover:text-[#252A27] underline underline-offset-4"
              >
                Saiba mais
              </a>
            </div>
          </div>

          {/* Adultos Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-6 flex flex-col justify-between shadow-2xs">
            <div className="space-y-5">
              
              {/* Photo Slot: Adultos */}
              <div className="relative rounded-2xl overflow-hidden aspect-16/9 border border-[#D6DDD7] group">
                <ImageWithFallback
                  src={adultsPhotoSrc}
                  alt="Avaliação Neuropsicológica e Psicoterapia para Adultos"
                  fallbackText="Foto • Atendimento a Adultos"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                <div className="absolute top-2.5 left-2.5 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-0.5 rounded-full border border-[#D6DDD7]">
                  Adultos
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="w-11 h-11 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <Briefcase className="w-5 h-5" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Vida Adulta & Profissional
                </span>
              </div>

              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#252A27] font-medium">
                  Atendimento a Adultos
                </h3>
                <p className="text-xs sm:text-sm text-[#829287] mt-1 font-medium">
                  Investigação de foco, memória e demandas do trabalho
                </p>
              </div>

              <p className="text-sm text-[#626A65] leading-relaxed">
                Em adultos, a avaliação costuma ser procurada por conta de sobrecarga no trabalho, lapsos de memória, foco, transições de carreira ou solicitação médica.
              </p>

              <div className="space-y-2.5 pt-1">
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Shield className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Análise ponderada: esquecimentos rotineiros não indicam automaticamente transtornos.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#252A27]">
                  <Users2 className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                  <span>Entendimento do funcionamento pessoal para orientar estratégias práticas.</span>
                </div>
              </div>
            </div>

            <div className="pt-5 border-t border-[#D6DDD7]/80 flex items-center justify-between">
              <span className="text-[11px] sm:text-xs text-[#829287]">
                Presencial e online.
              </span>
              <a
                href={getWhatsAppUrl('neuropsychology')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-[#56685E] hover:text-[#252A27] underline underline-offset-4"
              >
                Saiba mais
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
