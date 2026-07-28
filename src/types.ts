export interface ProfessionalInfo {
  name: string;
  title: string;
  crp: string;
  city: string;
  state: string;
  address: string;
  fullLocation: string;
  phoneDisplay: string;
  phoneRaw: string;
  whatsappNumber: string;
  whatsappBaseUrl: string;
  instagramUser: string;
  instagramUrl: string;
  modalities: string[];
  audience: string[];
  approaches: string[];
  startYear: number;
  neuroStartYear: number;
}

export interface WhatsAppMessages {
  default: string;
  neuropsychology: string;
  psychotherapy: string;
  lectures: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: 'neuro' | 'psy' | 'general';
}

export interface CognitiveGroup {
  id: string;
  title: string;
  description: string;
  items: string[];
  iconName: string;
}

export interface TimelineStep {
  stepNumber: number;
  title: string;
  subtitle: string;
  description: string;
}

export interface MythItem {
  id: string;
  myth: string;
  reality: string;
}

export interface LectureFormat {
  title: string;
  target: string;
  description: string;
}
