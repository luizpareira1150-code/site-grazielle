import React from 'react';
import { SectionHeading } from './SectionHeading';
import { Compass, Users, HeartHandshake, MessageCircle, Crop } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { usePhotoStore } from '../lib/photoStore';

interface PsychotherapySectionProps {
  onOpenPhotoEditor?: (slotKey: string) => void;
}

export const PsychotherapySection: React.FC<PsychotherapySectionProps> = ({ onOpenPhotoEditor }) => {
  const { getPhoto } = usePhotoStore();
  const psychotherapyPhotoSrc = getPhoto('psychotherapy_hero');

  return (
    <section id="psicoterapia" className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Atendimento Clínico"
          title="Um espaço para compreender experiências, relações e formas de lidar"
          description="A psicoterapia oferece um espaço seguro de reflexão e escuta técnica para acolher inquietações emocionais, padrões relacionais e fases de mudança."
          badge="Psicoterapia"
        />

        {/* Visual Hero Photo Banner for Psychotherapy */}
        <div className="rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-16/10 sm:aspect-4/3 border border-[#D6DDD7] group">
            <ImageWithFallback
              src={psychotherapyPhotoSrc}
              alt="Sessão de Psicoterapia e Acolhimento"
              fallbackText="Foto • Espaço de Psicoterapia"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {onOpenPhotoEditor && (
              <button
                onClick={() => onOpenPhotoEditor('psychotherapy_hero')}
                className="absolute top-3 right-3 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors"
                title="Trocar ou enquadrar foto de Psicoterapia"
              >
                <Crop className="w-3 h-3" />
                <span>Enquadrar Foto</span>
              </button>
            )}

            <div className="absolute top-3 left-3 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D6DDD7]">
              Espaço de Psicoterapia
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E5EBE6] text-[#56685E] text-xs font-semibold">
              Ambiente de Escuta
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#252A27] font-medium">
              Relação terapêutica fundamentada na confiança e no sigilo
            </h3>
            <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
              O ambiente de psicoterapia é preparado para oferecer privacidade e conforto emocional. As conversas e investigações são conduzidas no tempo do paciente, sem julgamentos ou soluções pré-formatadas.
            </p>
          </div>
        </div>


        {/* Approaches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Psicologia Analítica Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                <Compass className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold text-[#829287] uppercase tracking-wider block">
                  Fundamentação Teórica
                </span>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium mt-1">
                  Psicologia Analítica
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
                Busca compreender a experiência emocional profunda, os conflitos internos, a construção de sentidos ao longo da história de vida e as formas como a pessoa se relaciona consigo mesma e com o mundo ao seu redor.
              </p>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#D6DDD7] text-xs text-[#626A65]">
                Uma investigação ética focada no autoconhecimento, na elaboração de momentos de crise e no resgate de recursos subjetivos.
              </div>
            </div>

            <div className="pt-4 text-xs text-[#829287] border-t border-[#D6DDD7]">
              Compreensão simbólica e afetiva sem dogmas.
            </div>
          </div>

          {/* Psicologia Sistêmica Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all">
            <div className="space-y-5">
              <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-semibold text-[#829287] uppercase tracking-wider block">
                  Fundamentação Teórica
                </span>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium mt-1">
                  Psicologia Sistêmica
                </h3>
              </div>

              <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
                Observa a pessoa considerando também seus vínculos, redes de apoio, dinâmicas relacionais e contextos. Mostra que os sentimentos não acontecem de maneira isolada do ambiente familiar, social ou afetivo.
              </p>

              <div className="p-4 rounded-xl bg-[#F8F5F0] border border-[#D6DDD7] text-xs text-[#626A65]">
                Olhar atento para os padrões de comunicação e interação que influenciam o bem-estar cotidiano nas relações humanas.
              </div>
            </div>

            <div className="pt-4 text-xs text-[#829287] border-t border-[#D6DDD7]">
              Análise relacional contextualizada.
            </div>
          </div>

        </div>

        {/* Integration & Action Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#56685E] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-md">
          <div className="space-y-3 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-medium border border-white/20 text-[#E5EBE6]">
              <HeartHandshake className="w-3.5 h-3.5" />
              <span>Integração Atenta</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl font-medium leading-snug">
              Compreender a história, o contexto e os afetos
            </h3>
            <p className="text-sm sm:text-base text-[#E5EBE6] leading-relaxed font-light">
              Na prática clínica, busco integrar a escuta singular da história da pessoa com a atenção aos seus padrões relacionais e emocionais na vida cotidiana.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('psychotherapy')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#FCFBF8] text-[#252A27] text-sm font-semibold hover:bg-[#F1EAE1] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#56685E]" />
            <span>Receber informações sobre psicoterapia</span>
          </a>
        </div>

      </div>
    </section>
  );
};
