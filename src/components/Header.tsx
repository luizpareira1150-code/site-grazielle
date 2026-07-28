import React, { useState, useEffect } from 'react';
import { Menu, MessageCircle } from 'lucide-react';
import { PROFESSIONAL_DATA, getWhatsAppUrl } from '../data/professional';
import { MobileMenu } from './MobileMenu';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Neuropsicologia', href: '#neuropsicologia' },
    { name: 'Como Funciona', href: '#como-funciona' },
    { name: 'Psicoterapia', href: '#psicoterapia' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Palestras', href: '#palestras' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#FCFBF8]/90 backdrop-blur-md shadow-xs border-b border-[#D6DDD7]/80 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          className="group focus:outline-none focus:ring-2 focus:ring-[#56685E] rounded-md p-1"
        >
          <span className="font-serif text-xl sm:text-2xl text-[#252A27] font-semibold tracking-tight block group-hover:text-[#56685E] transition-colors">
            {PROFESSIONAL_DATA.name}
          </span>
          <span className="text-xs text-[#829287] font-medium tracking-wide block -mt-1">
            {PROFESSIONAL_DATA.title} <span className="hidden sm:inline">• {PROFESSIONAL_DATA.crp}</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-[#626A65]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-[#252A27] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#56685E] hover:after:w-full after:transition-all focus:outline-none focus:ring-1 focus:ring-[#56685E] rounded"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={getWhatsAppUrl('default')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#56685E] text-white text-xs sm:text-sm font-medium hover:bg-[#252A27] transition-all shadow-xs focus:outline-none focus:ring-2 focus:ring-[#56685E] focus:ring-offset-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar com Grazielle</span>
          </a>

          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Abrir menu de navegação"
            className="lg:hidden p-2 rounded-lg text-[#252A27] hover:bg-[#E5EBE6] transition-colors focus:outline-none focus:ring-2 focus:ring-[#56685E]"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </header>
  );
};
