import React, { useState, useEffect } from 'react';
import { Database, Sparkles, Cloud, Code, BarChart3, Bot, Network, Layers, ShieldCheck } from 'lucide-react';

export const HeroVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'academy' | 'solutions'>('both');
  const [pulse, setPulse] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse(p => (p + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[320px] xs:max-w-[360px] sm:max-w-[460px] lg:max-w-[520px] mx-auto select-none">
      {/* Background radial glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#C56845]/15 via-[#8F4F35]/10 to-[#D99A78]/15 blur-3xl rounded-full pointer-events-none"></div>

      {/* Decorative Technical Coordinate Rings */}
      <div className="absolute inset-3 sm:inset-4 rounded-full border border-[#C56845]/20 border-dashed animate-orbit-slow pointer-events-none"></div>
      <div className="absolute inset-12 sm:inset-16 rounded-full border border-[#8F4F35]/25 animate-orbit-reverse pointer-events-none"></div>
      <div className="absolute inset-20 sm:inset-28 rounded-full border border-[#D99A78]/20 pointer-events-none"></div>

      {/* Mode Selector Pill */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1 p-1 rounded-full bg-nodal-surface/95 border border-nodal-border backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 text-[10px] sm:text-[11px] font-mono">
        <button
          onClick={() => setActiveTab('both')}
          className={`px-2.5 sm:px-3 py-1 rounded-full transition-all ${
            activeTab === 'both' 
              ? 'bg-[#C56845] text-white font-semibold shadow-sm' 
              : 'text-nodal-muted hover:text-nodal-text'
          }`}
        >
          Ecosystem
        </button>
        <button
          onClick={() => setActiveTab('academy')}
          className={`px-2.5 sm:px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
            activeTab === 'academy' 
              ? 'bg-[#D99A78]/25 text-[#D99A78] border border-[#D99A78]/40 font-semibold shadow-sm' 
              : 'text-nodal-muted hover:text-[#D99A78]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D99A78]"></span>
          Academy
        </button>
        <button
          onClick={() => setActiveTab('solutions')}
          className={`px-2.5 sm:px-3 py-1 rounded-full transition-all flex items-center gap-1 ${
            activeTab === 'solutions' 
              ? 'bg-[#8F4F35]/25 text-[#E5A17D] border border-[#8F4F35]/40 font-semibold shadow-sm' 
              : 'text-nodal-muted hover:text-[#E5A17D]'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D27A54]"></span>
          Solutions
        </button>
      </div>

      {/* SVG Canvas for Flowing Connection Conduits */}
      <svg className="absolute inset-0 w-full h-full z-10 pointer-events-none" viewBox="0 0 500 500">
        <defs>
          <linearGradient id="blueGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C56845" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D99A78" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="purpleGlow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8F4F35" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#D27A54" stopOpacity="0.8" />
          </linearGradient>
        </defs>

        {/* Central Hub Radiating Conduits */}
        <line 
          x1="250" y1="250" x2="105" y2="115" 
          stroke="url(#blueGlow)" 
          strokeWidth={activeTab === 'solutions' ? '1' : '2'} 
          strokeDasharray="6 6"
          strokeOpacity={activeTab === 'solutions' ? '0.2' : '0.8'}
        />
        <line 
          x1="250" y1="250" x2="395" y2="115" 
          stroke="url(#purpleGlow)" 
          strokeWidth={activeTab === 'academy' ? '1' : '2'} 
          strokeDasharray="6 6"
          strokeOpacity={activeTab === 'academy' ? '0.2' : '0.8'}
        />
        <line 
          x1="250" y1="250" x2="70" y2="250" 
          stroke="url(#blueGlow)" 
          strokeWidth={activeTab === 'solutions' ? '1' : '2'} 
          strokeOpacity={activeTab === 'solutions' ? '0.2' : '0.8'}
        />
        <line 
          x1="250" y1="250" x2="430" y2="250" 
          stroke="url(#purpleGlow)" 
          strokeWidth={activeTab === 'academy' ? '1' : '2'} 
          strokeOpacity={activeTab === 'academy' ? '0.2' : '0.8'}
        />
        <line 
          x1="250" y1="250" x2="110" y2="385" 
          stroke="url(#blueGlow)" 
          strokeWidth={activeTab === 'solutions' ? '1' : '2'} 
          strokeDasharray="4 4"
          strokeOpacity={activeTab === 'solutions' ? '0.2' : '0.8'}
        />
        <line 
          x1="250" y1="250" x2="390" y2="385" 
          stroke="url(#purpleGlow)" 
          strokeWidth={activeTab === 'academy' ? '1' : '2'} 
          strokeDasharray="4 4"
          strokeOpacity={activeTab === 'academy' ? '0.2' : '0.8'}
        />

        {/* Orbiting Energy Packet Animations */}
        <circle 
          cx={250 + (105 - 250) * ((pulse % 100) / 100)} 
          cy={250 + (115 - 250) * ((pulse % 100) / 100)} 
          r="3.5" 
          fill="#D99A78" 
          opacity={activeTab === 'solutions' ? 0 : 0.9}
        />
        <circle 
          cx={250 + (395 - 250) * (((pulse + 40) % 100) / 100)} 
          cy={250 + (115 - 250) * (((pulse + 40) % 100) / 100)} 
          r="3.5" 
          fill="#D27A54" 
          opacity={activeTab === 'academy' ? 0 : 0.9}
        />
        <circle 
          cx={250 + (430 - 250) * (((pulse + 70) % 100) / 100)} 
          cy={250 + (250 - 250) * (((pulse + 70) % 100) / 100)} 
          r="3.5" 
          fill="#8F4F35" 
          opacity={activeTab === 'academy' ? 0 : 0.9}
        />
      </svg>

      {/* CENTRAL CORE: THE NODALBOT GEOMETRIC HUB */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 group">
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr from-nodal-navy via-nodal-surface to-nodal-card border-2 border-[#C56845]/60 p-2.5 sm:p-3 shadow-2xl shadow-[#C56845]/30 flex flex-col items-center justify-center text-center transition-all duration-300 group-hover:scale-105 group-hover:border-[#D99A78] overflow-hidden">
          {/* HD Holographic Neural Mesh Backdrop */}
          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=300&q=80" 
            alt="" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-screen filter contrast-125 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-nodal-navy via-transparent to-nodal-navy/60 pointer-events-none" />
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-[#C56845] via-[#8F4F35] to-[#D99A78] opacity-35 blur-md group-hover:opacity-85 transition duration-500 animate-pulse"></div>
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg bg-[#C56845]/25 border border-[#C56845]/40 flex items-center justify-center text-[#D99A78] mb-1">
              <Network className="w-4 h-4 sm:w-5 sm:h-5 text-[#D99A78]" />
            </div>
            <span className="text-[11px] sm:text-[12px] font-black tracking-tight text-nodal-text font-serif leading-tight">
              NODAL<span className="text-[#D99A78]">BOT</span>
            </span>
            <span className="text-[7px] sm:text-[8px] font-mono tracking-widest text-nodal-muted uppercase">
              CORE HUB
            </span>
          </div>

          <div className="absolute bottom-1 sm:bottom-1.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            <span className="text-[6px] sm:text-[7px] font-mono text-emerald-400 font-bold uppercase tracking-wider">ACTIVE</span>
          </div>
        </div>
      </div>

      {/* SURROUNDING ORBITAL NODES (6 Pillars) */}

      {/* NODE 1: TOP-LEFT (ACADEMY: DATA ENGINEERING) */}
      <div 
        className={`absolute top-[6%] left-[2%] sm:left-[4%] z-20 transition-all duration-500 ${
          activeTab === 'solutions' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#C56845]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D99A78] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C56845]/20 border border-[#C56845]/30 flex items-center justify-center text-[#D99A78] shrink-0">
            <Database className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D99A78]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#D99A78] tracking-wider">ACADEMY</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">Data Engineering</span>
          </div>
        </div>
      </div>

      {/* NODE 2: TOP-RIGHT (SOLUTIONS: AI & GENAI) */}
      <div 
        className={`absolute top-[6%] right-[2%] sm:right-[4%] z-20 transition-all duration-500 ${
          activeTab === 'academy' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#8F4F35]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D27A54] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#8F4F35]/20 border border-[#8F4F35]/30 flex items-center justify-center text-[#E5A17D] shrink-0">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A17D]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#E5A17D] tracking-wider">SOLUTIONS</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">AI & GenAI Solutions</span>
          </div>
        </div>
      </div>

      {/* NODE 3: MID-LEFT (ACADEMY: BUSINESS INTELLIGENCE) */}
      <div 
        className={`absolute top-[48%] left-[0%] -translate-y-1/2 z-20 transition-all duration-500 ${
          activeTab === 'solutions' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#C56845]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D99A78] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#D99A78]/20 border border-[#D99A78]/30 flex items-center justify-center text-[#D99A78] shrink-0">
            <BarChart3 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D99A78]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#D99A78] tracking-wider">ACADEMY</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">Power BI & DAX</span>
          </div>
        </div>
      </div>

      {/* NODE 4: MID-RIGHT (SOLUTIONS: CUSTOM SOFTWARE) */}
      <div 
        className={`absolute top-[48%] right-[0%] -translate-y-1/2 z-20 transition-all duration-500 ${
          activeTab === 'academy' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#8F4F35]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D27A54] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#8F4F35]/20 border border-[#8F4F35]/30 flex items-center justify-center text-[#E5A17D] shrink-0">
            <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A17D]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#E5A17D] tracking-wider">SOLUTIONS</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">Custom Software</span>
          </div>
        </div>
      </div>

      {/* NODE 5: BOTTOM-LEFT (ACADEMY: RPA & AUTOMATION) */}
      <div 
        className={`absolute bottom-[6%] left-[4%] z-20 transition-all duration-500 ${
          activeTab === 'solutions' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#C56845]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D99A78] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#C56845]/20 border border-[#C56845]/30 flex items-center justify-center text-[#D99A78] shrink-0">
            <Bot className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#D99A78]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#D99A78] tracking-wider">ACADEMY</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">RPA & Automation</span>
          </div>
        </div>
      </div>

      {/* NODE 6: BOTTOM-RIGHT (SOLUTIONS: CLOUD & ARCHITECTURE) */}
      <div 
        className={`absolute bottom-[6%] right-[4%] z-20 transition-all duration-500 ${
          activeTab === 'academy' ? 'opacity-30 scale-95' : 'opacity-100 scale-100'
        }`}
      >
        <div className="flex items-center gap-1.5 sm:gap-2 p-1.5 sm:p-2 rounded-xl bg-nodal-surface/95 border border-[#8F4F35]/30 backdrop-blur-md shadow-lg shadow-black/10 dark:shadow-black/40 hover:border-[#D27A54] transition-all group">
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#8F4F35]/20 border border-[#8F4F35]/30 flex items-center justify-center text-[#E5A17D] shrink-0">
            <Cloud className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#E5A17D]" />
          </div>
          <div className="text-left">
            <span className="block text-[7px] sm:text-[8px] font-mono font-bold uppercase text-[#E5A17D] tracking-wider">SOLUTIONS</span>
            <span className="block text-[10px] sm:text-xs font-bold text-nodal-text leading-tight">Cloud Architecture</span>
          </div>
        </div>
      </div>

      {/* Floating Telemetry Pills */}
      <div className="absolute bottom-1 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 sm:gap-3 px-3 py-1 rounded-full bg-nodal-navy/95 border border-nodal-border text-[9px] sm:text-[10px] font-mono text-nodal-muted backdrop-blur-md whitespace-nowrap shadow-md">
        <span className="flex items-center gap-1 text-[#D99A78]">
          <Layers className="w-3 h-3 text-[#D99A78]" /> 6 Domains
        </span>
        <span className="text-nodal-border">•</span>
        <span className="flex items-center gap-1 text-[#E5A17D]">
          <ShieldCheck className="w-3 h-3 text-[#D27A54]" /> Enterprise SLA
        </span>
        <span className="text-nodal-border">•</span>
        <span className="text-nodal-text font-semibold">Chennai HQ</span>
      </div>
    </div>
  );
};
