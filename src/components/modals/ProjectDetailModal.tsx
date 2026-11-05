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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-2xl bg-nodal-surface border border-nodal-border rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-nodal-border bg-nodal-navy">
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-nodal-blue/20 text-nodal-cyan border border-nodal-blue/30">
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
            className="p-2 text-nodal-muted hover:text-white rounded-lg hover:bg-nodal-card transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-left">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{selectedProject.title}</h2>
            <div className="flex flex-wrap gap-2 items-center">
              <span className="text-xs text-nodal-muted">Difficulty: <strong className="text-white">{selectedProject.difficulty}</strong></span>
              <span className="text-slate-600">•</span>
              <span className="text-xs text-nodal-muted">Project Type: <strong className="text-white">Portfolio-Grade Capstone</strong></span>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-48 sm:h-56 rounded-xl overflow-hidden border border-nodal-border">
            <img 
              src={selectedProject.previewImageUrl} 
              alt={selectedProject.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-nodal-surface via-transparent to-transparent" />
          </div>

          {/* Problem Statement */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-nodal-cyan flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" /> The Business Problem
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-nodal-card p-3.5 rounded-xl border border-nodal-border">
              {selectedProject.problemStatement}
            </p>
          </div>

          {/* Solution Architecture */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-nodal-violet flex items-center gap-2">
              <Layers className="w-4 h-4" /> Architectural Design & System Flow
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed bg-nodal-card p-3.5 rounded-xl border border-nodal-border">
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
                <div key={idx} className="p-2.5 bg-nodal-card/60 border border-nodal-border rounded-lg text-xs text-slate-300 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-nodal-cyan flex items-center gap-2">
              <Cpu className="w-4 h-4" /> Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {selectedProject.techStack.map(tech => (
                <span key={tech} className="px-3 py-1 bg-nodal-card border border-nodal-border text-slate-200 text-xs rounded-lg font-mono">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="pt-4 border-t border-nodal-border flex flex-wrap gap-3">
            {selectedProject.githubUrl && (
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-nodal-card hover:bg-nodal-surface text-white rounded-xl text-xs font-semibold transition border border-nodal-border"
              >
                <GithubIcon className="w-4 h-4" /> View GitHub Repository Mockup
              </a>
            )}
            {selectedProject.demoUrl && (
              <a
                href={selectedProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-nodal-blue hover:bg-nodal-blue/90 text-white rounded-xl text-xs font-semibold transition"
              >
                <ExternalLink className="w-4 h-4" /> Open Interactive Demo
              </a>
            )}
            <button
              onClick={closeProjectModal}
              className="ml-auto px-4 py-2.5 bg-nodal-card hover:bg-nodal-surface text-nodal-muted hover:text-white rounded-xl text-xs font-medium border border-nodal-border transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
