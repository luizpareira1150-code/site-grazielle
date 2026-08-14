import React from 'react';
import { SectionHeading } from './SectionHeading';
import { LECTURE_FORMATS, getWhatsAppUrl } from '../data/professional';
import { Building, GraduationCap, Users, MessageCircle } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
export const LecturesSection: React.FC = () => {
  const lecturesPhotoSrc = '/images/lectures_banner.jpg';

  const getIcon = (idx: number) => {
    switch (idx) {
      case 0: return <Building className="w-5 h-5 text-[#56685E]" />;
      case 1: return <GraduationCap className="w-5 h-5 text-[#56685E]" />;
      default: return <Users className="w-5 h-5 text-[#56685E]" />;
    }
  };

  return (
    <section id="palestras" className="py-16 sm:py-24 bg-[#F8F5F0] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Palestras & Ações Educativas"
          title="Saúde mental também pode ser construída por meio da informação"
          description="Encontros e exposições técnicas e acolhedoras para grupos, escolas e empresas interessados na promoção de saúde mental, neuropsicologia e bem-estar."
          badge="Palestras"
        />

        {/* Lecture Photo Showcase Card */}
        <div className="rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center shadow-2xs">
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden aspect-16/10 sm:aspect-4/3 border border-[#D6DDD7] group">
            <ImageWithFallback
              src={lecturesPhotoSrc}
              alt="Palestras e Treinamentos com Grazielle Nacarate"
              fallbackText="Foto • Palestras e Eventos"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute top-3 left-3 bg-[#FCFBF8]/90 text-[#252A27] text-[10px] font-bold px-2.5 py-1 rounded-full border border-[#D6DDD7]">
              Palestras & Treinamentos
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="px-3 py-1 rounded-full bg-[#E5EBE6] text-[#56685E] text-xs font-semibold">
              Atuação Educativa & Corporativa
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl text-[#252A27] font-medium">
              Comunicação acessível com rigor técnico
            </h3>
            <p className="text-sm sm:text-base text-[#626A65] leading-relaxed">
              As palestras são preparadas com linguagem clara, dinâmica e fundamentada em evidências, aproximando temas da neuropsicologia e da saúde mental do cotidiano das pessoas e das organizações.
            </p>
          </div>
        </div>


        {/* Formats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {LECTURE_FORMATS.map((fmt, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] hover:border-[#829287] transition-all space-y-5 flex flex-col justify-between shadow-2xs"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] flex items-center justify-center">
                  {getIcon(idx)}
                </div>

                <div>
                  <span className="text-xs font-semibold text-[#829287] uppercase tracking-wider block">
                    {fmt.target}
                  </span>
                  <h3 className="font-serif text-2xl text-[#252A27] font-medium mt-1">
                    {fmt.title}
                  </h3>
                </div>

                <p className="text-sm text-[#626A65] leading-relaxed">
                  {fmt.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#D6DDD7] text-xs font-medium text-[#829287]">
                Formato personalizável
              </div>
            </div>
          ))}
        </div>

        {/* Customization Callout & CTA */}
        <div className="p-8 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] flex flex-col sm:flex-row items-center justify-between gap-6 max-w-4xl mx-auto shadow-2xs">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-serif text-lg text-[#252A27] font-medium">
              Formatos e temas únicos construídos para você
            </p>
            <p className="text-xs sm:text-sm text-[#626A65]">
              Os tópicos e a duração da palestra são alinhados conforme o contexto e os objetivos do evento.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('lectures')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#56685E] text-white text-xs sm:text-sm font-semibold hover:bg-[#252A27] transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Conversar sobre uma palestra</span>
          </a>
        </div>

      </div>
    </section>
  );
};
