import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Compass, 
  Terminal, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Sparkles, 
  Play, 
  ChevronRight,
  TrendingUp,
  ShieldCheck,
  Award
} from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export const HeroSection: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  // Active step in interactive learning journey preview
  const [activeStep, setActiveStep] = useState<number>(1);

  const journeyStages = [
    {
      step: 1,
      title: '1. Core Foundations',
      badge: 'Weeks 1-4',
      focus: 'Syntax, Data Structures & Algorithmic Logic',
      metric: '40 Hours Guided Practice',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: 2,
      title: '2. Guided Lab Exercises',
      badge: 'Weeks 5-8',
      focus: 'Production Frameworks & System Design',
      metric: '12 Graded Micro-Labs',
      color: 'from-cyan-500 to-teal-500'
    },
    {
      step: 3,
      title: '3. Industrial Capstone',
      badge: 'Weeks 9-12',
      focus: 'End-to-End Deployed Architecture on Cloud',
      metric: 'Portfolio-Ready Artifact',
      color: 'from-violet-500 to-purple-500'
    },
    {
      step: 4,
      title: '4. Career Readiness',
      badge: 'Weeks 13-16',
      focus: 'Technical Interviews, Code Reviews & Resume',
      metric: '1:1 Mentor Sign-off',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  return (
    <section className="relative pt-28 pb-20 lg:pt-36 lg:pb-32 overflow-hidden bg-[#0B0F19]">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[450px] bg-gradient-to-tr from-blue-600/15 via-violet-600/10 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-cyan-500/10 blur-[90px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-600/10 blur-[100px] pointer-events-none rounded-full" />

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center text-left">
          
          {/* Left Column: Headline & Action */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Accreditation Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span>Technology Specialization Programs • 2026 Batch Admissions Open</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] font-sans">
              Build Skills That Move Your{' '}
              <span className="text-gradient">Career Forward.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              Learn emerging technologies through hands-on projects, expert guidance, and career-focused training. Designed for college students, ambitious graduates, and working professionals.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                to="/courses"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-sm sm:text-base rounded-xl shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>Explore Courses</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="#career-discovery"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm sm:text-base rounded-xl border border-slate-700/80 hover:border-slate-600 transition text-center shadow-sm"
              >
                <Compass className="w-4 h-4 text-cyan-400" />
                <span>Find Your Tech Career</span>
              </a>
            </div>

            {/* Verified Transparency Badges */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Code-First Syllabus</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Weekly 1:1 Senior Mentorship</span>
              </div>
              <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Verifiable Capstone Credentials</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Student Dashboard & Roadmap Preview */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl p-1 bg-gradient-to-b from-blue-500/30 via-slate-800 to-slate-900/60 shadow-2xl shadow-blue-900/20">
              <div className="bg-[#0F172A] rounded-[15px] p-5 sm:p-6 border border-slate-800 space-y-5">
                
                {/* Header of Preview Box */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                    <span className="text-xs font-mono text-slate-400 ml-2">nexora-learning-system v3.2</span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-blue-500/20 text-blue-300 font-mono">
                    Live Roadmap
                  </span>
                </div>

                {/* Simulated Student Profile Snippet */}
                <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img 
                      src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=120&q=80" 
                      alt="Student" 
                      className="w-10 h-10 rounded-xl object-cover border border-blue-400/40"
                    />
                    <div>
                      <p className="text-xs font-bold text-white">Aarav Patel</p>
                      <p className="text-[11px] text-slate-400">Track: AI & ML Engineering</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-emerald-400">42% Completed</span>
                    <div className="w-20 h-1.5 bg-slate-800 rounded-full mt-1 overflow-hidden">
                      <div className="w-[42%] h-full bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Animated 4-Stage Career Progression Visualizer */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-300">Curriculum Progression Engine</span>
                    <span className="text-[11px] text-blue-400 font-mono">Click stages below</span>
                  </div>

                  <div className="grid grid-cols-4 gap-1.5">
                    {journeyStages.map((stage) => (
                      <button
                        key={stage.step}
                        onClick={() => setActiveStep(stage.step)}
                        className={`p-2 rounded-xl text-left border transition-all text-[11px] ${
                          activeStep === stage.step
                            ? 'bg-blue-600/20 border-blue-500 text-white font-bold shadow-md shadow-blue-500/20'
                            : 'bg-slate-900/50 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                        }`}
                      >
                        <div className="text-[10px] font-mono text-slate-500">Stage {stage.step}</div>
                        <div className="truncate font-semibold">{stage.step === 1 ? 'Foundations' : stage.step === 2 ? 'Labs' : stage.step === 3 ? 'Capstone' : 'Launch'}</div>
                      </button>
                    ))}
                  </div>

                  {/* Dynamic Stage Details Card */}
                  {(() => {
                    const current = journeyStages[activeStep - 1];
                    return (
                      <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 animate-fadeIn text-left">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-white flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                            {current.title}
                          </span>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                            {current.badge}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {current.focus}
                        </p>
                        <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 text-[11px]">
                          <span className="text-slate-400">Milestone Deliverable:</span>
                          <span className="text-blue-400 font-semibold">{current.metric}</span>
                        </div>
                      </div>
                    );
                  })()}
                </div>

                {/* Bottom Interactive Trigger */}
                <div className="pt-2 flex items-center justify-between">
                  <Link
                    to="/learning-lab"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 transition"
                  >
                    <span>Test Interactive Labs</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>

                  <button
                    onClick={openCounsellingModal}
                    className="text-xs font-semibold text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                  >
                    Talk to Mentor
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
