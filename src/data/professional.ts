import { ProfessionalInfo, WhatsAppMessages, FAQItem, CognitiveGroup, TimelineStep, MythItem, LectureFormat } from '../types';

export const PROFESSIONAL_DATA: ProfessionalInfo = {
  name: "Grazielle Nacarate",
  title: "Psicóloga e Neuropsicóloga",
  crp: "CRP 05/57007",
  city: "Barra Mansa",
  state: "Rio de Janeiro",
  address: "José Marcelino de Camargo, nº 1041, sala 601",
  fullLocation: "Barra Mansa – RJ",
  phoneDisplay: "(24) 99941-4395",
  phoneRaw: "5524999414395",
  whatsappNumber: "5524999414395",
  whatsappBaseUrl: "https://wa.me/5524999414395",
  instagramUser: "@psi.grazinacarate",
  instagramUrl: "https://instagram.com/psi.grazinacarate",
  modalities: ["Atendimento Presencial em Barra Mansa", "Atendimento Online"],
  audience: ["Adolescentes", "Adultos"],
  approaches: ["Psicologia Analítica", "Psicologia Sistêmica"],
  startYear: 2018,
  neuroStartYear: 2025
};

export const WHATSAPP_MESSAGES: WhatsAppMessages = {
  default: "Olá, Grazielle! Encontrei seu site e gostaria de receber informações sobre o atendimento.",
  neuropsychology: "Olá, Grazielle! Encontrei seu site e gostaria de saber como funciona a avaliação neuropsicológica.",
  psychotherapy: "Olá, Grazielle! Encontrei seu site e gostaria de receber informações sobre a psicoterapia.",
  lectures: "Olá, Grazielle! Encontrei seu site e gostaria de conversar sobre uma palestra."
};

export function getWhatsAppUrl(messageKey: keyof WhatsAppMessages = 'default'): string {
  const message = WHATSAPP_MESSAGES[messageKey];
  return `${PROFESSIONAL_DATA.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;
}

export const COGNITIVE_DOMAINS: CognitiveGroup[] = [
  {
    id: "processing-attention",
    title: "Processamento e Atenção",
    description: "Investigação da capacidade de direcionar, manter e alternar o foco em diferentes tarefas do dia a dia.",
    items: [
      "Atenção sustentada, alternada e dividida",
      "Velocidade de processamento das informações",
      "Capacidade de manter o foco diante de distrações"
    ],
    iconName: "Target"
  },
  {
    id: "memory-learning",
    title: "Memória e Aprendizagem",
    description: "Análise dos processos de aquisição, retenção, armazenamento e resgate de conhecimentos e experiências.",
    items: [
      "Memória operacional e de trabalho",
      "Memória episódica, verbal e visual",
      "Estratégias de consolidação e retenção"
    ],
    iconName: "Brain"
  },
  {
    id: "planning-regulation",
    title: "Planejamento e Autorregulação",
    description: "Compreensão das funções executivas responsáveis pela organização de ações e controle de impulsos.",
    items: [
      "Organização e planejamento de metas",
      "Tomada de decisão e flexibilidade cognitiva",
      "Controle inibitório e autorregulação"
    ],
    iconName: "Compass"
  },
  {
    id: "language-reasoning",
    title: "Linguagem e Raciocínio",
    description: "Investigação da capacidade de raciocínio lógico, compreensão, expressão e resolução de problemas complexos.",
    items: [
      "Compreensão e expressão verbal",
      "Raciocínio abstrato e lógico-dedutivo",
      "Formação de conceitos e resolução de problemas"
    ],
    iconName: "MessageSquareText"
  },
  {
    id: "emotional-behavioral",
    title: "Aspectos Emocionais e Comportamentais",
    description: "Observação de fatores afetivos e relacionais que interagem com o desempenho cognitivo e o cotidiano.",
    items: [
      "Fatores emocionais que impactam o foco e o rendimento",
      "Padrões comportamentais observados na rotina",
      "Relação entre cognição, emoção e ambiente social"
    ],
    iconName: "HeartHandshake"
  }
];

export const EVALUATION_TIMELINE: TimelineStep[] = [
  {
    stepNumber: 1,
    title: "Contato Inicial",
    subtitle: "Acolhimento e esclarecimento",
    description: "Conversa para compreender a demanda inicial, esclarecer dúvidas fundamentais e fornecer orientações sobre o funcionamento da avaliação."
  },
  {
    stepNumber: 2,
    title: "Entrevista de Anamnese",
    subtitle: "Compreensão do histórico",
    description: "Levantamento detalhado da história de vida, das dificuldades percebidas na rotina, das potencialidades e do contexto familiar, acadêmico ou profissional."
  },
  {
    stepNumber: 3,
    title: "Sessões Avaliativas",
    subtitle: "Investigação estruturada",
    description: "Utilização de instrumentos padronizados, observação clínica e técnicas qualitativas selecionadas especificamente conforme a demanda do caso."
  },
  {
    stepNumber: 4,
    title: "Integração dos Dados",
    subtitle: "Análise quantitativa e qualitativa",
    description: "Estudo minucioso dos resultados obtidos, cruzando dados cognitivos, aspectos emocionais, histórico de vida e observação comportamental."
  },
  {
    stepNumber: 5,
    title: "Devolutiva e Orientação",
    subtitle: "Clareza sobre os próximos passos",
    description: "Sessão dedicada à apresentação das conclusões, entrega de orientações claras, esclarecimento de dúvidas e indicações de possíveis encaminhamentos."
  }
];

export const MYTHS_DATA: MythItem[] = [
  {
    id: "myth-1",
    myth: "A avaliação neuropsicológica é apenas um teste de inteligência.",
    reality: "A investigação abrange múltiplas funções cognitivas, aspectos emocionais, comportamentais e o contexto de vida da pessoa, indo muito além de uma simples medição do QI."
  },
  {
    id: "myth-2",
    myth: "Um único teste pode confirmar ou descartar um diagnóstico.",
    reality: "As conclusões neuropsicológicas dependem da integração criteriosa de diversas fontes de informação, histórico clínico e observação, nunca de um instrumento isolado."
  },
  {
    id: "myth-3",
    myth: "É necessário já chegar com uma suspeita médica definida para avaliar.",
    reality: "A avaliação pode iniciar a partir de uma dúvida pessoal, uma dificuldade percebida no dia a dia ou pela necessidade de compreender melhor pontos fortes e fragilidades."
  },
  {
    id: "myth-4",
    myth: "O resultado da avaliação define quem a pessoa é para sempre.",
    reality: "A avaliação descreve o funcionamento observado em determinado momento e contexto. Nenhum relatório resume a totalidade, o potencial ou a história de um ser humano."
  }
];

export const LECTURE_FORMATS: LectureFormat[] = [
  {
    title: "Empresas e Equipes",
    target: "Ambientes corporativos e organizações",
    description: "Desenvolvimento de temas sobre saúde mental no trabalho, prevenção de burnout, regulação emocional, relações interpessoais e bem-estar corporativo."
  },
  {
    title: "Instituições de Ensino",
    target: "Escolas, faculdades e educadores",
    description: "Palestras voltadas a processos de aprendizagem, atipicidades no desenvolvimento, funções executivas na sala de aula e orientação parental/pedagógica."
  },
  {
    title: "Eventos e Projetos Sociais",
    target: "Comunidades e simpósios",
    description: "Encontros informativos e acolhedores sobre promoção de saúde mental, fases da vida, autoconhecimento e desmistificação da neuropsicologia."
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: "faq-1",
    question: "O que é uma avaliação neuropsicológica?",
    answer: "É um processo estruturado de investigação que busca compreender como diferentes funções cognitivas (como atenção, memória, linguagem e planejamento) e aspectos emocionais se manifestam no cotidiano da pessoa."
  },
  {
    id: "faq-2",
    question: "A avaliação é apenas a aplicação de testes?",
    answer: "Não. Os testes e instrumentos padronizados são ferramentas dentro de um processo maior que inclui entrevistas de anamnese, observação clínica, análise do histórico de vida e integração cuidadosa dos dados."
  },
  {
    id: "faq-3",
    question: "Preciso ter um encaminhamento médico para procurar a avaliação?",
    answer: "Não é obrigatório. Embora muitos pacientes venham encaminhados por médicos ou educadores, a busca pode partir de uma iniciativa própria, diante de dúvidas ou dificuldades percebidas na rotina."
  },
  {
    id: "faq-4",
    question: "A avaliação neuropsicológica sempre resulta em um diagnóstico?",
    answer: "Não necessariamente. O objetivo principal é mapear o perfil cognitivo e emocional para compreender o funcionamento da pessoa. Os achados podem contribuir com um diagnóstico clínico, indicar hipóteses ou servir de guia para reabilitação e orientações."
  },
  {
    id: "faq-5",
    question: "Quantas sessões são necessárias para concluir a avaliação?",
    answer: "A quantidade de sessões varia conforme a demanda investigada, a complexidade do caso e a velocidade de resposta de cada pessoa. Essa organização é conversada no atendimento inicial."
  },
  {
    id: "faq-6",
    question: "A avaliação neuropsicológica pode ser realizada online?",
    answer: "A possibilidade de avaliação online depende da demanda específica, da idade da pessoa, da disponibilidade de instrumentos validados para essa modalidade e de condições adequadas de ambiente. A adequação é avaliada individualmente."
  },
  {
    id: "faq-7",
    question: "Adolescentes podem realizar avaliação neuropsicológica?",
    answer: "Sim. O atendimento a adolescentes é estruturado considerando suas particularidades do desenvolvimento. A participação dos responsáveis é organizada de acordo com a idade, a demanda e os preceitos éticos do atendimento."
  },
  {
    id: "faq-8",
    question: "Psicoterapia e avaliação neuropsicológica são a mesma coisa?",
    answer: "Não. A avaliação é um processo com início, meio e fim focado na investigação do perfil cognitivo e emocional. A psicoterapia é um acompanhamento contínuo focado no trabalho de questões emocionais, relacionais e no autoconhecimento."
  },
  {
    id: "faq-9",
    question: "A avaliação substitui a consulta ou o acompanhamento médico?",
    answer: "Não substitui. A neuropsicologia atua de maneira interdisciplinar e complementar aos cuidados médicos (como neurologia e psiquiatria), fortalecendo a compreensão do paciente."
  },
  {
    id: "faq-10",
    question: "Onde acontece o atendimento presencial?",
    answer: "O consultório está localizado em Barra Mansa – RJ, na Rua José Marcelino de Camargo, nº 1041, sala 601."
  },
  {
    id: "faq-11",
    question: "Como consultar os valores e disponibilidade de horários?",
    answer: "Informações sobre valores, formatos de pagamento, agendas e agendamento podem ser solicitadas diretamente por mensagem no WhatsApp."
  },
  {
    id: "faq-12",
    question: "Grazielle realiza palestras para empresas ou escolas?",
    answer: "Sim. Palestras e workshops sobre saúde mental, bem-estar e desenvolvimento podem ser planejados e personalizados conforme o contexto e os objetivos do evento."
  }
];
