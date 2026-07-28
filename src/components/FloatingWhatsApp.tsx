import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../data/professional';

export const FloatingWhatsApp: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <a
      href={getWhatsAppUrl('default')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com Grazielle Nacarate no WhatsApp"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#56685E] text-white shadow-lg hover:bg-[#252A27] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#56685E] focus:ring-offset-2 border border-white/20"
    >
      <MessageCircle className="w-5 h-5 shrink-0" />
      <span className="hidden sm:inline text-xs sm:text-sm font-semibold tracking-wide">
        Falar pelo WhatsApp
      </span>
    </a>
  );
};
