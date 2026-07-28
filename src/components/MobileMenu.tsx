import React, { useEffect, useRef } from 'react';
import { X, MessageCircle, ChevronRight } from 'lucide-react';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: { name: string; href: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, navLinks }) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 100);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#252A27]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Drawer */}
      <div 
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu de navegação"
        className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#FCFBF8] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
      >
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-6 border-b border-[#D6DDD7]">
            <div>
              <span className="font-serif text-lg text-[#252A27] font-semibold block">
                {PROFESSIONAL_DATA.name}
              </span>
              <span className="text-xs text-[#829287] block">
                {PROFESSIONAL_DATA.title} • {PROFESSIONAL_DATA.crp}
              </span>
            </div>
            <button
              ref={closeButtonRef}
              onClick={onClose}
              aria-label="Fechar menu"
              className="p-2 rounded-full text-[#626A65] hover:bg-[#E5EBE6] hover:text-[#252A27] transition-colors focus:outline-none focus:ring-2 focus:ring-[#56685E]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-3 rounded-lg text-base font-medium text-[#252A27] hover:bg-[#F1EAE1] hover:text-[#56685E] transition-colors"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-[#829287]" />
              </a>
            ))}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-[#D6DDD7] space-y-4">
          <a
            href={getWhatsAppUrl('default')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-[#56685E] text-white font-medium hover:bg-[#252A27] transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>

          <div className="text-center text-xs text-[#829287] space-y-1">
            <p>{PROFESSIONAL_DATA.fullLocation}</p>
            <p>Atendimento Presencial e Online</p>
          </div>
        </div>
      </div>
    </div>
  );
};
