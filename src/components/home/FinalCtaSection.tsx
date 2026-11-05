import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, PhoneCall, MessageSquare } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';

export const FinalCtaSection: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  return (
    <section className="py-20 lg:py-28 relative overflow-hidden bg-nodal-surface border-t border-nodal-border">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#C56845]/15 via-[#D99A78]/15 to-transparent blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C56845]/10 border border-[#C56845]/25 text-[#C56845] dark:text-[#E5A17D] text-xs font-semibold backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D]" />
          <span>Think Beyond Technology • Build What Comes Next</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-normal text-nodal-text font-serif tracking-tight leading-tight">
          Your Next Opportunity Starts With Your{' '}
          <span className="text-gradient-warm italic font-normal">Next Skill.</span>
        </h2>

        <p className="text-base sm:text-lg text-nodal-muted font-sans max-w-2xl mx-auto leading-relaxed">
          Join a community of ambitious students and working professionals mastering AI, Data Engineering, and Scalable Digital Systems. Zero fluff. 100% production code.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            to="/courses"
            className="w-full sm:w-auto btn-primary py-3.5 px-8 text-sm sm:text-base font-semibold"
          >
            <span>Explore Programs</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </Link>

          <button
            onClick={openCounsellingModal}
            className="w-full sm:w-auto btn-secondary py-3.5 px-8 text-sm sm:text-base font-semibold"
          >
            <Sparkles className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] mr-1.5" />
            <span>Book Free Counselling</span>
          </button>
        </div>

        {/* Direct Contacts Row */}
        <div className="pt-8 border-t border-nodal-border flex flex-wrap items-center justify-center gap-6 text-xs text-nodal-muted font-mono">
          <span className="flex items-center gap-2">
            <PhoneCall className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D]" />
            Direct Admissions Desk: <strong className="text-nodal-text">+91 97899 76268</strong>
          </span>
          <span className="hidden sm:inline text-nodal-border">•</span>
          <a
            href="https://wa.me/919789976268"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline font-semibold"
          >
            <MessageSquare className="w-4 h-4" />
            Instant WhatsApp Consultation
          </a>
        </div>

      </div>
    </section>
  );
};
