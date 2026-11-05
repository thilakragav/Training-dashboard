import React from 'react';

interface NodalBotLogoProps {
  className?: string;
  showTagline?: boolean;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'icon' | 'white';
}

export const NodalBotLogo: React.FC<NodalBotLogoProps> = ({
  className = '',
  showTagline = false,
  size = 'md',
  variant = 'full',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-xl',
  };

  return (
    <div className={`flex items-center gap-2.5 select-none ${className}`}>
      {/* Claude-Inspired Warm Architectural Nodal Emblem */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-xl bg-gradient-to-br from-[#FAF8F4] to-[#F0E2D7] dark:from-[#302D28] dark:to-[#37332D] border border-[#E6DED3] dark:border-[#4B443B] shadow-sm group-hover:border-[#C56845] transition-all duration-300 overflow-hidden`}>
        {/* Subtle warm glow backdrop */}
        <div className="absolute inset-0 bg-[#C56845]/10 dark:bg-[#D27A54]/15 rounded-xl"></div>
        
        <svg 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5 relative z-10 transition-transform duration-500 group-hover:scale-105"
        >
          {/* Connection vectors */}
          <line x1="24" y1="24" x2="12" y2="12" stroke="#C56845" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="2 2" />
          <line x1="24" y1="24" x2="36" y2="12" stroke="#D99A78" strokeWidth="1.5" strokeOpacity="0.8" />
          <line x1="24" y1="24" x2="36" y2="36" stroke="#8F4F35" strokeWidth="1.5" strokeOpacity="0.8" strokeDasharray="2 2" />
          <line x1="24" y1="24" x2="12" y2="36" stroke="#C56845" strokeWidth="1.5" strokeOpacity="0.8" />
          
          <line x1="12" y1="12" x2="36" y2="12" stroke="#D99A78" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="36" y1="12" x2="36" y2="36" stroke="#8F4F35" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="36" y1="36" x2="12" y2="36" stroke="#C56845" strokeWidth="1" strokeOpacity="0.5" />
          <line x1="12" y1="36" x2="12" y2="12" stroke="#D99A78" strokeWidth="1" strokeOpacity="0.5" />

          {/* Peripheral Nodes */}
          {/* Top-Left: Learn Node */}
          <circle cx="12" cy="12" r="3.5" fill="#C56845" stroke="#F5F0E8" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="1.5" fill="#FFFFFF" />

          {/* Top-Right: Engineer Node */}
          <circle cx="36" cy="12" r="3.5" fill="#D99A78" stroke="#F5F0E8" strokeWidth="1.5" />
          <circle cx="36" cy="12" r="1.5" fill="#FFFFFF" />

          {/* Bottom-Right: Transform Node */}
          <circle cx="36" cy="36" r="3.5" fill="#8F4F35" stroke="#F5F0E8" strokeWidth="1.5" />
          <circle cx="36" cy="36" r="1.5" fill="#FFFFFF" />

          {/* Bottom-Left: Scale Node */}
          <circle cx="12" cy="36" r="3.5" fill="#D27A54" stroke="#F5F0E8" strokeWidth="1.5" />
          <circle cx="12" cy="36" r="1.5" fill="#FFFFFF" />

          {/* Central Nodal Core */}
          <circle cx="24" cy="24" r="5" fill="#29251F" stroke="#C56845" strokeWidth="2" />
          <circle cx="24" cy="24" r="2" fill="#D99A78" />
        </svg>
      </div>

      {/* Typography */}
      {variant !== 'icon' && (
        <div className="flex flex-col text-left">
          <div className="flex items-center gap-1.5 leading-none">
            <span className={`font-semibold tracking-tight text-nodal-text font-serif ${textSizes[size]}`}>
              Nodal<span className="text-[#C56845] dark:text-[#D27A54] font-normal">Bot</span>
            </span>
            <span className="text-[10px] uppercase font-medium tracking-widest text-nodal-muted font-mono border-l border-nodal-border pl-1.5">
              TECH
            </span>
          </div>
          <span className="text-[9px] tracking-wider uppercase font-medium text-nodal-muted font-mono mt-0.5">
            {showTagline ? 'Intelligence in Learning. Innovation in Engineering.' : 'Technologies'}
          </span>
        </div>
      )}
    </div>
  );
};
