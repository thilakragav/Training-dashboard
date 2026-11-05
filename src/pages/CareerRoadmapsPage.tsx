import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Target, 
  Award, 
  Briefcase, 
  Layers, 
  Sparkles, 
  ChevronRight,
  Database,
  BarChart3,
  Cpu,
  Bot,
  Cloud
} from 'lucide-react';
import { CAREER_PATHWAYS_DATA } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const CareerRoadmapsPage: React.FC = () => {
  const [selectedPathwaySlug, setSelectedPathwaySlug] = useState<string>(CAREER_PATHWAYS_DATA[0].slug);
  const [filterDomain, setFilterDomain] = useState<string>('All');
  const [leadModalOpen, setLeadModalOpen] = useState(false);

  const domains = [
    'All',
    'Data Engineering',
    'Data Analytics & Business Intelligence',
    'Data Science & Machine Learning',
    'Artificial Intelligence & Generative AI',
    'RPA & Automation',
    'Cloud & Software Technologies'
  ];

  const filteredPathways = filterDomain === 'All'
    ? CAREER_PATHWAYS_DATA
    : CAREER_PATHWAYS_DATA.filter(p => p.domain === filterDomain);

  const currentPathway = CAREER_PATHWAYS_DATA.find(p => p.slug === selectedPathwaySlug) || CAREER_PATHWAYS_DATA[0];

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="careers-page" />
      
      {/* Header */}
      <section className="relative py-16 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Compass className="w-3.5 h-3.5" /> 14 In-Demand Industry Career Roadmaps
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Find Your <span className="text-gradient-electric">Technology Career Path</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Step-by-step beginner-to-advanced learning sequences, core tech stacks, suggested certifications, and realistic salary bands for 14 specialized modern roles.
          </p>
        </div>
      </section>

      {/* Domain Filter Pills */}
      <section className="py-6 bg-nodal-navy border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
          {domains.map((dom) => (
            <button
              key={dom}
              onClick={() => setFilterDomain(dom)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterDomain === dom
                  ? 'bg-[#0066FF] text-white font-bold shadow-md shadow-[#0066FF]/30 border border-[#00D2FF]/40'
                  : 'bg-nodal-surface text-nodal-muted hover:text-white border border-nodal-border'
              }`}
            >
              {dom === 'All' ? 'All 14 Pathways' : dom}
            </button>
          ))}
        </div>
      </section>

      {/* Main 2-Column Layout */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 4 Cols: Pathway Selector List */}
            <div className="lg:col-span-4 space-y-2.5">
              <span className="text-xs font-mono font-bold uppercase text-nodal-muted block mb-2 text-left">
                Select Career Pathway ({filteredPathways.length} Available):
              </span>

              <div className="space-y-2 max-h-[750px] overflow-y-auto pr-1">
                {filteredPathways.map((pathway) => {
                  const isSelected = selectedPathwaySlug === pathway.slug;
                  return (
                    <button
                      key={pathway.id}
                      onClick={() => setSelectedPathwaySlug(pathway.slug)}
                      className={`w-full p-4 rounded-xl text-left border transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-nodal-surface border-[#00D2FF] text-white shadow-lg shadow-[#0066FF]/20'
                          : 'bg-nodal-navy border-nodal-border hover:border-nodal-border text-nodal-muted hover:text-white'
                      }`}
                    >
                      <div>
                        <span className="block text-xs font-mono uppercase tracking-wider text-[#00D2FF] font-bold mb-0.5">
                          {pathway.domain.split('&')[0]}
                        </span>
                        <span className="block text-sm font-bold text-white font-sans">
                          {pathway.roleTitle}
                        </span>
                        <span className="block text-[11px] text-nodal-muted mt-1 line-clamp-1">
                          {pathway.tagline}
                        </span>
                      </div>
                      <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'text-[#00D2FF] translate-x-1' : 'text-slate-600'}`} />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right 8 Cols: Detailed Pathway Deep Dive */}
            <div className="lg:col-span-8 bg-nodal-surface rounded-3xl border border-[#0066FF]/30 p-6 sm:p-10 shadow-2xl space-y-8 text-left">
              
              {/* Header */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#00D2FF]">
                    {currentPathway.domain}
                  </span>
                  {currentPathway.averageSalaryBand && (
                    <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                      Average Band: {currentPathway.averageSalaryBand}
                    </span>
                  )}
                </div>

                <h2 className="text-2xl sm:text-4xl font-black text-nodal-text font-display">
                  {currentPathway.roleTitle}
                </h2>
                
                <p className="mt-2 text-sm sm:text-base text-nodal-muted font-sans leading-relaxed">
                  {currentPathway.tagline}
                </p>
              </div>

              {/* Required Skills & Tech Stack */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 rounded-2xl bg-nodal-navy border border-nodal-border">
                <div>
                  <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-2">
                    Core Technical Competencies:
                  </span>
                  <ul className="space-y-1.5 text-xs text-nodal-muted">
                    {currentPathway.requiredSkills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#A78BFA] font-bold block mb-2">
                    Technology Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPathway.technologyStack.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#0066FF]/10 text-[#00D2FF] border border-[#0066FF]/25">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 4-Phase Learning Sequence Roadmap */}
              <div>
                <h3 className="text-xl font-bold text-nodal-text font-display mb-4 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-[#00D2FF]" /> Recommended Step-by-Step Learning Sequence
                </h3>

                <div className="space-y-3">
                  {currentPathway.learningSequence.map((seq, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-nodal-navy border border-nodal-border flex items-start gap-4">
                      <div className="w-8 h-8 rounded-xl bg-[#0066FF]/20 text-[#00D2FF] font-mono text-xs flex items-center justify-center font-bold shrink-0 border border-[#0066FF]/30">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-[#00D2FF] font-semibold">{seq.phase}</span>
                          <span className="text-[10px] font-mono text-slate-500">({seq.duration})</span>
                        </div>
                        <h4 className="text-sm font-bold text-nodal-text font-display mt-0.5">
                          {seq.title}
                        </h4>
                        <div className="flex flex-wrap gap-1.5 mt-2">
                          {seq.topics.map((t, i) => (
                            <span key={i} className="px-2 py-0.5 rounded text-[11px] bg-nodal-card text-nodal-muted border border-nodal-border font-mono">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Practical Project Ideas */}
              <div>
                <h3 className="text-xl font-bold text-nodal-text font-display mb-3 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#8B5CF6]" /> Portfolio Capstone Projects
                </h3>
                <div className="space-y-3">
                  {currentPathway.practicalProjectIdeas.map((proj, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-nodal-navy border border-[#0066FF]/20 text-xs text-nodal-muted">
                      <h4 className="font-bold text-white text-sm font-display mb-1">{proj.title}</h4>
                      <p className="text-nodal-muted leading-relaxed mb-2">{proj.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {proj.technologies.map(t => (
                          <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#0066FF]/20 text-[#00D2FF]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications & Careers */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-nodal-border">
                <div>
                  <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-2 flex items-center gap-1.5">
                    <Award className="w-4 h-4" /> Aligned Industry Certifications:
                  </span>
                  <ul className="space-y-1 text-xs text-nodal-muted">
                    {currentPathway.suggestedCertifications.map((cert, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className="text-xs font-mono uppercase text-[#A78BFA] font-bold block mb-2 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4" /> Target Job Roles:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {currentPathway.careerOpportunities.map((opp, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md text-xs bg-nodal-navy text-nodal-muted border border-nodal-border">
                        {opp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="pt-6 border-t border-nodal-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-nodal-muted block">Recommended NodalBot Course:</span>
                  <span className="text-sm font-bold text-white font-sans">{currentPathway.recommendedCourses[0]}</span>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <Link
                    to="/academy"
                    className="flex-1 sm:flex-none btn-primary text-xs py-2.5 px-5"
                  >
                    View Courses
                  </Link>
                  <button
                    onClick={() => setLeadModalOpen(true)}
                    className="flex-1 sm:flex-none btn-secondary text-xs py-2.5 px-5"
                  >
                    Get 1:1 Advice
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        streamType="free_demo_registration"
        initialTopic={currentPathway.roleTitle}
      />

    </div>
  );
};
