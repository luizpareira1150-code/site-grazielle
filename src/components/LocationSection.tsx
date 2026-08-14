import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { MapPin, Globe, ExternalLink, MessageCircle, ShieldCheck, Crop } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';
import { usePhotoStore } from '../lib/photoStore';

interface LocationSectionProps {
  onOpenPhotoEditor?: (slotKey: string) => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onOpenPhotoEditor }) => {
  const { getPhoto } = usePhotoStore();
  const office1Src = getPhoto('office_1');
  const office2Src = getPhoto('office_2');
  const office3Src = getPhoto('office_3');

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${PROFESSIONAL_DATA.address}, Barra Mansa - RJ`
  )}`;

  const officeImages = [
    {
      key: 'office_1',
      title: 'Sala de Atendimento',
      desc: 'Espaço privativo, confortável e acolhedor para consultas e avaliação',
      src: office1Src,
    },
    {
      key: 'office_2',
      title: 'Recepção e Espera',
      desc: 'Ambiente tranquilo pensado para o seu bem-estar e pontualidade',
      src: office2Src,
    },
    {
      key: 'office_3',
      title: 'Recursos e Materiais',
      desc: 'Instrumentos e testes neuropsicológicos padronizados pelo CFP',
      src: office3Src,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Localização & Modalidades"
          title="Atendimento presencial em Barra Mansa e online"
          description="Espaço de acolhimento estruturado para atendimento presencial no centro de Barra Mansa – RJ ou presenças virtuais seguras para todo o país."
          badge="Presencial & Online"
        />

        {/* Modalidad Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Presencial Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#F8F5F0] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#56685E] text-white flex items-center justify-center">
                  <MapPin className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Presencial em Barra Mansa
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                  Consultório Particular
                </h3>
                <p className="text-sm font-semibold text-[#56685E] mt-2">
                  {PROFESSIONAL_DATA.address}
                </p>
                <p className="text-xs text-[#829287] mt-0.5">
                  {PROFESSIONAL_DATA.fullLocation}
                </p>
              </div>

              <p className="text-sm text-[#626A65] leading-relaxed">
                Ambiente reservado e tranquilo preparado para acomodar entrevistas, aplicação de instrumentos neuropsicológicos e sessões de psicoterapia.
              </p>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#FCFBF8] text-[#252A27] border border-[#D6DDD7] text-xs font-semibold hover:bg-[#F1EAE1] transition-colors justify-center"
              >
                <span>Ver localização no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#56685E]" />
              </a>

              <a
                href={getWhatsAppUrl('default')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#56685E] hover:text-[#252A27] justify-center"
              >
                <span>Consultar horários</span>
              </a>
            </div>
          </div>

          {/* Online Card */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#FCFBF8] border border-[#D6DDD7] space-y-6 flex flex-col justify-between shadow-2xs hover:border-[#829287] transition-all">
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center">
                  <Globe className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#E5EBE6] text-[#56685E]">
                  Atendimento Online
                </span>
              </div>

              <div>
                <h3 className="font-serif text-2xl text-[#252A27] font-medium">
                  Atendimento Remoto
                </h3>
                <p className="text-sm text-[#829287] mt-1 font-medium">
                  Plataforma criptografada & sigilosa
                </p>
              </div>

              <p className="text-sm text-[#626A65] leading-relaxed">
                A viabilidade e a adequação do formato online são avaliadas rigorosamente conforme a demanda, a idade do paciente, a necessidade de instrumentos e as condições de privacidade e conexão.
              </p>

              <div className="p-3.5 rounded-xl bg-[#F8F5F0] border border-[#D6DDD7] flex items-start gap-2.5 text-xs text-[#626A65]">
                <ShieldCheck className="w-4 h-4 text-[#56685E] shrink-0 mt-0.5" />
                <span>Sigilo e ética respeitados em conformidade com as diretrizes do Conselho Federal de Psicologia.</span>
              </div>
            </div>

            <div className="pt-6 border-t border-[#D6DDD7]">
              <a
                href={getWhatsAppUrl('default')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-full justify-center px-5 py-2.5 rounded-xl bg-[#56685E] text-white text-xs font-semibold hover:bg-[#252A27] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Consultar viabilidade do atendimento online</span>
              </a>
            </div>
          </div>

        </div>

        {/* Consultório Photos Showcase */}
        <div className="space-y-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-semibold text-[#829287] uppercase tracking-wider">Espaço Físico</span>
              <h3 className="font-serif text-2xl text-[#252A27] font-medium mt-1">
                Conheça a estrutura do consultório
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#626A65] max-w-md">
              Ambiente planejado com privacidade acústica, climatização e conforto para avaliações e sessões terapêuticas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {officeImages.map((img) => (
              <div
                key={img.key}
                className="group relative rounded-2xl bg-[#FCFBF8] border border-[#D6DDD7] overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <ImageWithFallback
                    src={img.src}
                    alt={img.title}
                    fallbackText={img.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {onOpenPhotoEditor && (
                    <button
                      onClick={() => onOpenPhotoEditor(img.key)}
                      className="absolute top-3 right-3 bg-[#FCFBF8]/90 hover:bg-[#56685E] hover:text-white backdrop-blur-xs px-2.5 py-1 rounded-full text-[10px] font-bold text-[#56685E] border border-[#D6DDD7] shadow-xs flex items-center gap-1.5 transition-colors z-10"
                      title={`Trocar ou enquadrar foto de ${img.title}`}
                    >
                      <Crop className="w-3 h-3" />
                      <span>Enquadrar</span>
                    </button>
                  )}
                </div>
                <div className="p-4 space-y-1 flex-1 flex flex-col justify-between">
                  <h4 className="font-serif text-base font-semibold text-[#252A27]">{img.title}</h4>
                  <p className="text-xs text-[#626A65] leading-relaxed">{img.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
