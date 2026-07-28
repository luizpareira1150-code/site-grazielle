import React from 'react';

export const SkipLink: React.FC = () => {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#56685E] focus:text-white focus:rounded-md focus:shadow-lg focus:outline-none transition-all"
    >
      Pular para o conteúdo principal
    </a>
  );
};
