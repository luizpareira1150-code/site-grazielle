import React, { useState } from 'react';
import { SkipLink } from './components/SkipLink';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { RecognitionSection } from './components/RecognitionSection';
import { NeuropsychologyExplanation } from './components/NeuropsychologyExplanation';
import { CognitiveDomains } from './components/CognitiveDomains';
import { AudienceSection } from './components/AudienceSection';
import { EvaluationTimeline } from './components/EvaluationTimeline';
import { MythsSection } from './components/MythsSection';
import { ServicesComparison } from './components/ServicesComparison';
import { PsychotherapySection } from './components/PsychotherapySection';
import { AboutSection } from './components/AboutSection';
import { LecturesSection } from './components/LecturesSection';
import { LocationSection } from './components/LocationSection';
import { ContactBanner } from './components/ContactBanner';
import { FAQAccordion } from './components/FAQAccordion';
import { FinalCTA } from './components/FinalCTA';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';
import { PhotoEditorModal } from './components/PhotoEditorModal';
import { Camera } from 'lucide-react';

export default function App() {
  const [editorSlotKey, setEditorSlotKey] = useState<string | null>(null);

  const handleOpenPhotoEditor = (slotKey: string) => {
    setEditorSlotKey(slotKey);
  };

  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#252A27] font-sans antialiased flex flex-col selection:bg-[#E5EBE6] selection:text-[#56685E]">
      <SkipLink />
      <Header />

      <main id="main-content" className="flex-grow">
        <Hero onOpenPhotoEditor={handleOpenPhotoEditor} />
        <RecognitionSection />
        <NeuropsychologyExplanation onOpenPhotoEditor={handleOpenPhotoEditor} />
        <CognitiveDomains />
        <AudienceSection onOpenPhotoEditor={handleOpenPhotoEditor} />
        <EvaluationTimeline />
        <MythsSection />
        <ServicesComparison />
        <PsychotherapySection onOpenPhotoEditor={handleOpenPhotoEditor} />
        <AboutSection onOpenPhotoEditor={handleOpenPhotoEditor} />
        <LecturesSection onOpenPhotoEditor={handleOpenPhotoEditor} />
        <LocationSection onOpenPhotoEditor={handleOpenPhotoEditor} />
        <ContactBanner />
        <FAQAccordion />
        <FinalCTA />
      </main>

      {/* Floating Photo Manager Trigger Button */}
      <button
        onClick={() => setEditorSlotKey('hero_primary')}
        className="fixed bottom-24 right-6 z-40 bg-[#252A27] hover:bg-[#56685E] text-white px-4 py-2.5 rounded-full shadow-lg border border-white/20 flex items-center gap-2 text-xs font-semibold transition-all hover:scale-105 active:scale-95 group"
        title="Abrir Gerenciador e Enquadrador de Fotos"
      >
        <Camera className="w-4 h-4 text-[#C5D1C7] group-hover:rotate-12 transition-transform" />
        <span>Gerenciar / Enquadrar Fotos</span>
      </button>

      <FloatingWhatsApp />
      <Footer />

      {/* Photo Editor Modal */}
      {editorSlotKey && (
        <PhotoEditorModal
          isOpen={!!editorSlotKey}
          onClose={() => setEditorSlotKey(null)}
          initialSlotKey={editorSlotKey}
        />
      )}
    </div>
  );
}

