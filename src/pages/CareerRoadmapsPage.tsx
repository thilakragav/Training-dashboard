import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, BookOpen, Layers, Sparkles, Code, Cpu } from 'lucide-react';
import { CAREER_PATHS_DATABASE } from '../data/careerPathsData';
import { COURSES_DATA } from '../data/coursesData';
import { Link } from 'react-router-dom';
import { useLearning } from '../context/LearningContext';

export const CareerRoadmapsPage: React.FC = () => {
  const { openCounsellingModal } = useLearning();
  const [selectedRoleId, setSelectedRoleId] = useState<string>('gen-ai');

  const careerRoles = Object.values(CAREER_PATHS_DATABASE);
  const currentRole = CAREER_PATHS_DATABASE[selectedRoleId] || careerRoles[0];

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Visual Career Maps</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Curated <span className="text-gradient">Career Roadmaps</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Clear, month-by-month milestone tracks from zero to industry competence. Select your target domain below.
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {careerRoles.map((role) => (
            <button
              key={role.roleId}
              onClick={() => setSelectedRoleId(role.roleId)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                selectedRoleId === role.roleId
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              {role.roleTitle.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Roadmap Display Card */}
        <div className="bg-[#0F172A] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 animate-fadeIn">
          
          {/* Header of Active Role */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Career Specialization Track
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white mt-1">
                {currentRole.roleTitle}
              </h2>
              <p className="text-sm text-cyan-300 mt-1">{currentRole.tagline}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="px-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Market Demand</span>
                <span className="font-bold text-emerald-400">{currentRole.marketDemand}</span>
              </div>
              <button
                onClick={openCounsellingModal}
                className="px-4 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-xl shadow-md shadow-violet-600/25 transition flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Discuss This Path</span>
              </button>
            </div>
          </div>

          {/* Description & Core Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-7 space-y-3">
              <h3 className="text-sm font-bold text-white">Role Scope & Responsibilities:</h3>
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                {currentRole.description}
              </p>
            </div>

            <div className="lg:col-span-5 space-y-3">
              <h3 className="text-sm font-bold text-white">Key Technical Competencies:</h3>
              <div className="flex flex-wrap gap-2">
                {currentRole.coreSkills.map(s => (
                  <span key={s} className="px-3 py-1 bg-slate-900 border border-slate-800 text-xs font-medium text-blue-300 rounded-lg">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Step-by-Step Chronological Sequence */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-violet-400" /> Month-by-Month Milestone Journey
            </h3>

            <div className="space-y-3">
              {currentRole.suggestedSequence.map((stepText, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-900/90 border border-slate-800 rounded-2xl flex items-start gap-4 hover:border-slate-700 transition"
                >
                  <div className="w-8 h-8 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center font-bold text-xs font-mono flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{stepText.split(':')[0]}</h4>
                    <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">{stepText.split(':')[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Capstone Benchmark */}
          <div className="p-5 bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-500/20 rounded-2xl space-y-2">
            <span className="text-[11px] font-mono font-bold text-cyan-400 uppercase tracking-widest">
              Required Portfolio Benchmark Project
            </span>
            <h4 className="text-base font-bold text-white">{currentRole.sampleProject}</h4>
            <p className="text-xs text-slate-400">
              Students graduating from this track must deploy this capstone live to GitHub with full unit tests and API docs.
            </p>
          </div>

          {/* Recommended Nexora Programs */}
          <div className="space-y-3 pt-4 border-t border-slate-800">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-400" /> Recommended Matching Programs
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {currentRole.recommendedCourses.map(courseId => {
                const c = COURSES_DATA.find(item => item.id === courseId);
                if (!c) return null;
                return (
                  <div key={c.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex flex-col justify-between">
                    <div>
                      <p className="text-xs font-bold text-white line-clamp-2">{c.title}</p>
                      <p className="text-[11px] text-slate-400 mt-1">{c.level} • {c.durationWeeks} Weeks</p>
                    </div>
                    <Link
                      to={`/course/${c.slug}`}
                      className="mt-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg text-center transition"
                    >
                      View Syllabus →
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
