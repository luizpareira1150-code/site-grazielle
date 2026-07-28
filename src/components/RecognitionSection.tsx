import React from 'react';
import { SectionHeading } from './SectionHeading';
import { AlertCircle, ArrowUpRight, HelpCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';

export const RecognitionSection: React.FC = () => {
  const scenarios = [
    {
      title: "Memória e Esquececimentos",
      desc: "Mudanças percebidas no resgate de informações recentes, esquecimentos frequentes de compromissos ou sensação de 'lapso' na rotina."
    },
    {
      title: "Atenção e Foco Sustentado",
      desc: "Dificuldade constante para manter a concentração em leitura ou trabalho, dispersão rápida e esforço excessivo para concluir tarefas simples."
    },
    {
      title: "Organização e Planejamento",
      desc: "Desafios para priorizar atividades, gerenciar o tempo, cumprir prazos ou organizar passos de projetos cotidianos."
    },
    {
      title: "Aprendizagem e Desempenho",
      desc: "Queda injustificada de rendimento acadêmico ou profissional, dificuldades com leitura, escrita, cálculo ou absorção de novos conteúdos."
    },
    {
      title: "Encaminhamento Profissional",
      desc: "Orientação vinda de médico neurologista, psiquiatra, psicólogo ou equipe pedagógica solicitando mapeamento detalhado das funções cognitivas."
    },
    {
      title: "Compreensão de Si e do Perfil Cognitivo",
      desc: "Desejo de entender como seus processos cognitivos funcionam na prática, identificando tanto fragilidades quanto potenciais preservados."
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FCFBF8] border-y border-[#D6DDD7]/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Heading */}
        <SectionHeading
          eyebrow="Identificação de demandas"
          title="Quando uma dificuldade precisa ser melhor compreendida"
          description="Algumas questões aparecem de forma evidente no dia a dia. Outras se misturam à rotina e tornam-se difíceis de nomear sem uma investigação estruturada."
          badge="Reconhecimento"
        />

        {/* Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#F8F5F0] border border-[#D6DDD7] hover:border-[#829287] transition-all flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="w-9 h-9 rounded-xl bg-[#E5EBE6] text-[#56685E] flex items-center justify-center font-serif text-sm font-medium">
                  {idx + 1}
                </div>
                <h3 className="text-lg font-serif text-[#252A27] font-medium group-hover:text-[#56685E] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-[#626A65] leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-[#D6DDD7]/60 flex items-center justify-between text-xs font-medium text-[#829287]">
                <span>Demanda investigativa</span>
                <HelpCircle className="w-4 h-4 text-[#829287] group-hover:text-[#56685E] transition-colors" />
              </div>
            </div>
          ))}
        </div>

        {/* Cautious Note Box */}
        <div className="p-6 rounded-2xl bg-[#E5EBE6]/70 border border-[#D6DDD7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-[#56685E] shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-[#252A27] leading-relaxed font-medium">
              <strong className="font-semibold text-[#56685E]">Importante:</strong> A presença de uma dificuldade isolada não define um diagnóstico. Cada situação precisa ser investigada considerando sua história, seus aspectos emocionais e seu contexto único.
            </p>
          </div>

          <a
            href={getWhatsAppUrl('neuropsychology')}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#56685E] text-white text-xs font-medium hover:bg-[#252A27] transition-colors"
          >
            <span>Tirar dúvida no WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
