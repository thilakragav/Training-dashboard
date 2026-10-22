import React, { useEffect } from 'react';
import { X, ExternalLink, Layers, CheckCircle2, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import { GithubIcon } from '../ui/BrandIcons';
import { useLearning } from '../../context/LearningContext';

export const ProjectDetailModal: React.FC = () => {
  const { isProjectModalOpen, closeProjectModal, selectedProject } = useLearning();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeProjectModal();
    };
    if (isProjectModalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isProjectModalOpen, closeProjectModal]);

  if (!isProjectModalOpen || !selectedProject) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-[#0F172A] border border-blue-500/25 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#131B2E]">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30">
              {selectedProject.domain}
            </span>
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${
              selectedProject.isStudentCapstone 
                ? 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30' 
                : 'bg-purple-500/15 text-purple-400 border-purple-500/30'
            }`}>
              {selectedProject.isStudentCapstone ? 'Verified Student Capstone' : 'Industry Capstone Specification'}
            </span>
          </div>
          <button 
            onClick={closeProjectModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-slate-400">Difficulty: <strong className="text-white">{selectedProject.difficulty}</strong></span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-slate-400">Project Type: <strong className="text-white">Portfolio-Grade Capstone</strong></span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-slate-800">
            <img 
              src={selectedProject.previewImageUrl} 
              alt={selectedProject.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-blue-400 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> The Business Problem
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {selectedProject.problemStatement}
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-violet-400 flex items-center gap-2">
              <Layers className="w-4 h-4" /> Architectural Design & System Flow
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-3.5 rounded-xl border border-slate-800">
              {selectedProject.solutionArchitecture}
            </p>
          </div>

          {/* Expected Deliverables */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Expected Project Deliverables
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {selectedProject.expectedDeliverables.map((item, idx) => (
                <div key={idx} className="p-2.5 bg-slate-900/40 border border-slate-800 rounded-lg text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-200 text-xs rounded-lg font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-slate-800 flex flex-wrap gap-3">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-xs font-semibold transition border border-slate-700"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repository Mockup
              </a>
            )}
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition"
              >
                <ExternalLink className="w-4 h-4" /> Open Interactive Demo
              </a>
            )}
            <button
              onClick={closeProjectModal}
              className="ml-auto px-4 py-2.5 bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white rounded-xl text-xs font-medium transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
