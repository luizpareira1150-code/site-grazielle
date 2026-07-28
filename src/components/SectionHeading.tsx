import React from 'react';

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  badge?: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  eyebrow,
  title,
  description,
  align = 'center',
  badge,
  className = ''
}) => {
  const isCenter = align === 'center';

  return (
    <div className={`space-y-3 ${isCenter ? 'text-center mx-auto max-w-3xl' : 'max-w-2xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-[#E5EBE6] text-[#56685E] border border-[#D6DDD7] ${isCenter ? 'mx-auto' : ''}`}>
          <span>{badge}</span>
        </div>
      )}

      {eyebrow && (
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#829287] uppercase">
          {eyebrow}
        </p>
      )}

      <h2 className="text-2xl sm:text-3xl md:text-4xl text-[#252A27] font-serif leading-tight">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-[#626A65] leading-relaxed font-normal pt-1">
          {description}
        </p>
      )}
    </div>
  );
};
