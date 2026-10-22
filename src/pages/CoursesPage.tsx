import React from 'react';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { Sparkles, ShieldCheck, HelpCircle } from 'lucide-react';
import { useLearning } from '../context/LearningContext';

export const CoursesPage: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          <span>Curated Technology Syllabi</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
          Explore Our <span className="text-gradient">Specializations</span>
        </h1>
        <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          From foundational programming and databases to distributed big data pipelines and multimodal generative AI. Find the right track for your career trajectory.
        </p>

        {/* Counselling Banner */}
        <div className="mt-8 p-4 bg-[#0F172A] border border-violet-500/30 rounded-2xl max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-violet-600/20 text-violet-400 flex items-center justify-center flex-shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Uncertain which curriculum matches your current level?</p>
              <p className="text-[11px] text-slate-400">Speak directly with an academic advisor for a 1-on-1 syllabus audit.</p>
            </div>
          </div>
          <button
            onClick={openCounsellingModal}
            className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white text-xs font-semibold rounded-xl whitespace-nowrap transition shadow-md shadow-violet-600/20"
          >
            Free Syllabus Consultation
          </button>
        </div>
      </div>

      {/* Featured Courses Component */}
      <FeaturedCourses isFullCatalog={true} />

    </div>
  );
};
