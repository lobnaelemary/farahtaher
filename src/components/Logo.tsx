import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  className?: string;
  onClick?: () => void; // أضفت الـ onClick لتسهيل التنقل
}

export const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  onClick
}) => {
  const iconSizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24'
  };

  return (
    <div 
      onClick={onClick}
      className={`flex flex-col items-center select-none group cursor-pointer ${className}`}
    >
      {/* Image Logo Container */}
      <div className={`relative ${iconSizes[size]} transition-transform duration-300 group-hover:scale-105 flex items-center justify-center`}>
        <img
          src="/assets/img/farah logo gold v2 3.png"
          alt="Farah Taher Logo"
          className="w-full h-full object-contain drop-shadow-[0_2px_12px_rgba(194,165,129,0.4)]"
        />
      </div>

      {/* Typography */}
      {showText && (
        <div className="mt-2 text-center">
          <span className="block font-serif-display text-sm md:text-base font-semibold tracking-[0.22em] text-[#f5ebd8] uppercase group-hover:text-[#C2A581] transition-colors duration-300">
            FARAH TAHER
          </span>
          <span className="block text-[9px] md:text-[10px] tracking-[0.18em] text-[#C2A581] font-light uppercase opacity-90">
            Analytics Consultant
          </span>
        </div>
      )}
    </div>
  );
};