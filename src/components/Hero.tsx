import React from 'react';
import { ArrowRight, MessageCircle, ShieldCheck, MapPin, Sparkles, Crop } from 'lucide-react';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { ImageWithFallback } from './ImageWithFallback';
import { usePhotoStore } from '../lib/photoStore';

interface HeroProps {
  onOpenPhotoEditor?: (slotKey: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenPhotoEditor }) => {
  const { getPhoto } = usePhotoStore();
  const heroPhotoSrc = getPhoto('hero_portrait');

  return (
    <section id="hero" className="relative pt-28 sm:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-b from-[#F1EAE1]/50 via-[#F8F5F0] to-[#F8F5F0]">
      {/* Subtle organic design accent lines */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-40">
        <svg className="w-full h-full" viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 200C300 120 600 280 1200 200" stroke="#829287" strokeWidth="1" strokeDasharray="4 8" />
          <circle cx="600" cy="240" r="120" stroke="#DED2C2" strokeWidth="1" />
          <circle cx="600" cy="240" r="220" stroke="#E5EBE6" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E5EBE6] text-[#56685E] text-xs font-semibold tracking-wide border border-[#D6DDD7]">
              <Sparkles className="w-3.5 h-3.5 text-[#56685E]" />
              <span>Neuropsicologia • Psicoterapia • Barra Mansa e Online</span>
            </div>

            {/* H1 Main Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl text-[#252A27] font-serif leading-[1.15] font-normal tracking-tight">
              Compreender o funcionamento cognitivo também é compreender a pessoa <span className="italic text-[#56685E]">por inteiro.</span>
            </h1>

            {/* Support Copy */}
            <p className="text-base sm:text-lg text-[#626A65] leading-relaxed max-w-2xl font-normal">
              A avaliação neuropsicológica investiga diferentes funções cognitivas e considera também a história, os aspectos emocionais e o contexto de cada pessoa.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                href="#neuropsicologia"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#56685E] text-white text-sm sm:text-base font-medium hover:bg-[#252A27] transition-all shadow-sm group focus:outline-none focus:ring-2 focus:ring-[#56685E]"
              >
                <span>Conhecer a avaliação neuropsicológica</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href={getWhatsAppUrl('default')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#FCFBF8] text-[#252A27] border border-[#D6DDD7] text-sm sm:text-base font-medium hover:bg-[#F1EAE1] hover:border-[#829287] transition-all shadow-2xs focus:outline-none focus:ring-2 focus:ring-[#56685E]"
              >
                <MessageCircle className="w-4 h-4 text-[#56685E]" />
                <span>Conversar com Grazielle</span>
              </a>
            </div>

            {/* Trust Line & Details */}
            <div className="pt-4 border-t border-[#D6DDD7]/80 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#626A65]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#56685E] shrink-0" />
                <span>Adolescentes e Adultos</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#56685E] shrink-0" />
                <span>Presencial em Barra Mansa & Online</span>
              </div>
            </div>

          </div>

          {/* Hero Visual Card / Dual Photo Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none space-y-4">
              
              {/* Main Portrait Card */}
              <div className="relative rounded-2xl bg-[#FCFBF8] p-4 border border-[#D6DDD7] shadow-md space-y-3">
                <div className="relative rounded-xl overflow-hidden aspect-4/3 sm:aspect-3/4 group">
                  <ImageWithFallback
                    src={heroPhotoSrc}
                    alt="Grazielle Nacarate - Psicóloga e Neuropsicóloga"
                    fallbackText="Foto 1 • Grazielle Nacarate"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#252A27]/70 via-transparent to-transparent"></div>

                  {/* Photo Label Badge & Quick Edit Button */}
                  {onOpenPhotoEditor && (
                    <button
                      onClick={() => onOpenPhotoEditor('hero_portrait')}
                      className="absolute top-3 right-3 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors"
                      title="Clique para trocar ou enquadrar esta foto"
                    >
                      <Crop className="w-3 h-3" />
                      <span>Enquadrar Foto</span>
                    </button>
                  )}

                  {/* On-image info */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="font-serif text-lg font-semibold leading-tight">
                      {PROFESSIONAL_DATA.name}
                    </p>
                    <p className="text-xs text-[#E5EBE6] font-light">
                      {PROFESSIONAL_DATA.title} • {PROFESSIONAL_DATA.crp}
                    </p>
                  </div>
                </div>

                {/* Editorial Callout snippet */}
                <div className="bg-[#F8F5F0] rounded-xl p-3 border border-[#D6DDD7]/80 text-xs text-[#626A65] space-y-1">
                  <p className="font-serif text-sm text-[#252A27] font-medium italic">
                    "Investigar aspectos cognitivos, emocionais e relacionais para oferecer clareza e orientação."
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

