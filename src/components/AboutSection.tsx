import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROFESSIONAL_DATA } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { Heart, Shield } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const aboutPhotoSrc = '/images/about_portrait.jpg';

  return (
    <section id="sobre" className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Sobre a Profissional"
          title="Experiência construída em diferentes contextos de cuidado"
          description="Um olhar atento que integra aspectos cognitivos, emocionais e sociais, pautado pelo rigor técnico, escuta ética e responsabilidade."
          badge="Trajetória & Compromisso"
        />

        {/* Grid layout: Photo & Badges + Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Multi-Photo Trajectory Cards & Badges */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Photo 1: Main Portrait */}
            <div className="rounded-3xl overflow-hidden bg-[#F8F5F0] border border-[#D6DDD7] p-4 shadow-2xs space-y-3">
              <div className="relative rounded-2xl overflow-hidden aspect-3/4 group">
                <ImageWithFallback
                  src={aboutPhotoSrc}
                  alt="Grazielle Nacarate - Psicóloga e Neuropsicóloga"
                  fallbackText="Foto Retrato • Grazielle Nacarate"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute top-3 left-3 bg-[#56685E] text-white text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider shadow-xs">
                  Retrato Profissional
                </div>
              </div>

              {/* Official Credentials Box */}
              <div className="p-4 rounded-xl bg-[#E5EBE6] border border-[#D6DDD7] space-y-1.5 text-center">
                <p className="font-serif text-base font-semibold text-[#252A27]">
                  {PROFESSIONAL_DATA.name}
                </p>
                <p className="text-xs font-medium text-[#56685E]">
                  {PROFESSIONAL_DATA.title}
                </p>
                <div className="inline-block px-3 py-0.5 rounded-full bg-[#56685E] text-white text-[11px] font-bold tracking-wider">
                  {PROFESSIONAL_DATA.crp}
                </div>
              </div>
            </div>

            {/* Key Values */}
            <div className="grid grid-cols-2 gap-3 text-xs text-[#626A65]">
              <div className="p-3 rounded-xl bg-[#F8F5F0] border border-[#D6DDD7] flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#56685E] shrink-0" />
                <span className="font-medium text-[11px]">Rigor Ético & Técnico</span>
              </div>
              <div className="p-3 rounded-xl bg-[#F8F5F0] border border-[#D6DDD7] flex items-center gap-2">
                <Heart className="w-4 h-4 text-[#56685E] shrink-0" />
                <span className="font-medium text-[11px]">Escuta Acolhedora</span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Narrative Editorial Card */}
            <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#D6DDD7] space-y-6">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#829287]">
                Apresentação Pessoal & Profissional
              </span>

              <div className="space-y-4 text-base sm:text-lg text-[#252A27] leading-relaxed font-normal">
                <p>
                  Sou psicóloga desde 2018, em 2025, concluí minha formação em Neuropsicologia, ampliando minha atuação e meu olhar sobre o desenvolvimento humano, os aspectos emocionais e os processos cognitivos.
                </p>
                <p>
                  Ao longo da minha trajetória profissional, tive a oportunidade de atuar em diferentes contextos da saúde pública, incluindo o Consultório na Rua e o setor de Epidemiologia da Prefeitura. Essas vivências reforçaram a importância de uma prática sensível às realidades singulares, acolhedora e conectada com a história de cada pessoa.
                </p>
                <p>
                  Atualmente, atuo como neuropsicóloga e em meu consultório particular, oferecendo atendimento psicológico e avaliação neuropsicológica para crianças (a partir de 6 anos), adolescentes e adultos.
                </p>
                <p>
                  Além da prática clínica, sou palestrante e desenvolvo conteúdos voltados à promoção da saúde mental, ao bem-estar e ao desenvolvimento pessoal e profissional.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
