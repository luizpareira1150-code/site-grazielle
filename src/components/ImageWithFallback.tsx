import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackText?: string;
  aspectRatio?: string;
  className?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({
  src,
  alt,
  fallbackText,
  aspectRatio,
  className = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-[#E5EBE6]/60 ${aspectRatio || ''} ${className}`}>
      {!hasError ? (
        <img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          {...props}
        />
      ) : null}

      {(hasError || !isLoaded) && (
        <div className={`absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-gradient-to-br from-[#E5EBE6] to-[#F1EAE1] ${
          isLoaded && !hasError ? 'hidden' : 'flex'
        }`}>
          <div className="w-12 h-12 rounded-full bg-[#56685E]/10 flex items-center justify-center mb-2">
            <span className="text-[#56685E] text-xl font-serif">GN</span>
          </div>
          <p className="text-xs font-medium text-[#56685E] uppercase tracking-wider">
            {fallbackText || alt}
          </p>
        </div>
      )}
    </div>
  );
};
