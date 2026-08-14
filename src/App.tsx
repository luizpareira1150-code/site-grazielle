import React from 'react';
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

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8F5F0] text-[#252A27] font-sans antialiased flex flex-col selection:bg-[#E5EBE6] selection:text-[#56685E]">
      <SkipLink />
      <Header />

      <main id="main-content" className="flex-grow">
        <Hero />
        <RecognitionSection />
        <NeuropsychologyExplanation />
        <CognitiveDomains />
        <AudienceSection />
        <EvaluationTimeline />
        <MythsSection />
        <ServicesComparison />
        <PsychotherapySection />
        <AboutSection />
        <LecturesSection />
        <LocationSection />
        <ContactBanner />
        <FAQAccordion />
        <FinalCTA />
      </main>

      <FloatingWhatsApp />
      <Footer />
    </div>
  );
}
