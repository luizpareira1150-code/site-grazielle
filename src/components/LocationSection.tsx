import React from 'react';
import { SectionHeading } from './SectionHeading';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { MapPin, Globe, ExternalLink, MessageCircle, ShieldCheck } from 'lucide-react';

export const LocationSection: React.FC = () => {

  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${PROFESSIONAL_DATA.address}, Barra Mansa - RJ`
  )}`;

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

      </div>
    </section>
  );
};
