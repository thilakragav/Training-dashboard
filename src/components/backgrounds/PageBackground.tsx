import React from 'react';
import { useTheme } from '../../context/ThemeContext';

export type BackgroundVariant =
  | 'home'
  | 'about'
  | 'academy'
  | 'courses'
  | 'careers-page'
  | 'corporate'
  | 'college'
  | 'solutions'
  | 'industry'
  | 'resources'
  | 'contact'
  | 'careers-job'
  | 'default';

interface PageBackgroundProps {
  variant?: BackgroundVariant;
  className?: string;
}

const WARM_BACKGROUND_IMAGES: Record<BackgroundVariant, string> = {
  home: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
  about: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  academy: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
  courses: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=80',
  'careers-page': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80',
  solutions: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80',
  industry: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80',
  corporate: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=2000&q=80',
  college: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80',
  resources: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80',
  contact: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
  'careers-job': 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=2000&q=80',
  default: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80',
};

export const PageBackground: React.FC<PageBackgroundProps> = ({ variant = 'default', className = '' }) => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';
  const bgImageUrl = WARM_BACKGROUND_IMAGES[variant] || WARM_BACKGROUND_IMAGES.default;

  const baseClass = `pointer-events-none fixed inset-0 -z-10 overflow-hidden ${className}`;

  // Claude-inspired warm atmospheric background layer
  const imageLayer = (
    <div className="absolute inset-0">
      <img
        src={bgImageUrl}
        alt=""
        loading="lazy"
        decoding="async"
        className={`w-full h-full object-cover object-center transition-all duration-700 ${
          isDark 
            ? 'opacity-15 mix-blend-screen brightness-90 contrast-125' 
            : 'opacity-10 mix-blend-multiply brightness-105 contrast-110'
        }`}
      />
      {/* Warm gradient fog overlay tailored to Claude warm editorial / warm charcoal palette */}
      <div 
        className={`absolute inset-0 ${
          isDark 
            ? 'bg-gradient-to-b from-[#25231F]/80 via-[#25231F]/90 to-[#25231F] backdrop-blur-[2px]' 
            : 'bg-gradient-to-b from-[#F5F0E8]/85 via-[#F5F0E8]/92 to-[#F5F0E8] backdrop-blur-[2px]'
        }`} 
      />
    </div>
  );

  return (
    <div className={baseClass} aria-hidden="true">
      {/* Base Canvas */}
      <div className={`absolute inset-0 ${isDark ? 'bg-[#25231F]' : 'bg-[#F5F0E8]'}`} />
      {imageLayer}

      {/* Ambient Warm Light Diffusions */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[450px] rounded-full blur-3xl opacity-30 ${isDark ? 'bg-[#D27A54]/20' : 'bg-[#C56845]/15'}`} />
      <div className={`absolute bottom-0 right-0 w-[550px] h-[350px] rounded-full blur-3xl opacity-20 ${isDark ? 'bg-[#E5A17D]/15' : 'bg-[#D99A78]/15'}`} />

      {/* Subtle Architectural Grid Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
        {Array.from({ length: 12 }).map((_, i) => (
          <line key={`v${i}`} x1={`${(i + 1) * 8.33}%`} y1="0" x2={`${(i + 1) * 8.33}%`} y2="100%" stroke={isDark ? '#4B443B' : '#E6DED3'} strokeWidth="1" />
        ))}
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={`h${i}`} x1="0" y1={`${(i + 1) * 12.5}%`} x2="100%" y2={`${(i + 1) * 12.5}%`} stroke={isDark ? '#4B443B' : '#E6DED3'} strokeWidth="1" />
        ))}
      </svg>
    </div>
  );
};

export default PageBackground;
