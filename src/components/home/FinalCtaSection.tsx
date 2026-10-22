import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PhoneCall, MessageSquare, ShieldCheck } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export const FinalCtaSection: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-gradient-to-b from-[#0F172A] via-[#0B0F19] to-[#070A11] border-t border-slate-800">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-blue-600/20 via-violet-600/20 to-cyan-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/15 border border-blue-500/30 text-blue-300 text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Take the Decisive Leap in 2026</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Your Next Opportunity Starts With Your{' '}
          <span className="text-gradient">Next Skill.</span>
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Join a community of ambitious students and working professionals mastering AI, Data Engineering, and Full-Stack systems. Zero fluff. 100% production code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-bold text-sm sm:text-base rounded-2xl shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <button
            onClick={openCounsellingModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-slate-900/90 hover:bg-slate-800 text-slate-200 hover:text-white font-bold text-sm sm:text-base rounded-2xl border border-slate-700 hover:border-slate-600 transition shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span>Book Free Counselling</span>
          </button>
        </div>

        {/* Direct Contacts Row */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-blue-400" />
            Direct Admissions Desk: <strong className="text-white">+91 98765 43210</strong>
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-400 hover:underline"
          >
            <MessageSquare className="w-4 h-4" />
            Instant WhatsApp Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
