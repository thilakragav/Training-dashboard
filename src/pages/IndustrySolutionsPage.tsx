import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  Building, 
  ArrowRight, 
  CheckCircle2, 
  Database, 
  Sparkles, 
  BarChart3, 
  Bot, 
  Send,
  Layers
} from 'lucide-react';
import { INDUSTRY_SOLUTIONS_DATA, COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const IndustrySolutionsPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState<string>(INDUSTRY_SOLUTIONS_DATA[0].slug);

  const currentInd = INDUSTRY_SOLUTIONS_DATA.find(i => i.slug === selectedIndustry) || INDUSTRY_SOLUTIONS_DATA[0];

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="industry" />
      
      {/* Hero */}
      <section className="relative py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#A78BFA] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Building className="w-3.5 h-3.5" /> Sector-Specific Technology Blueprints
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Industry Solutions <span className="text-gradient-electric block mt-1">Engineered for Concrete ROI.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Every vertical presents distinct data architectures, regulatory mandates, and operational friction points. Explore how NodalBot deploys Data Engineering, AI, BI, and Automation across 8 major industries.
          </p>
        </div>
      </section>

      {/* Main Content with 8 Industry Tabs */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Industry Selection Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-12">
            {INDUSTRY_SOLUTIONS_DATA.map((ind) => {
              const isSelected = selectedIndustry === ind.slug;
              return (
                <button
                  key={ind.id}
                  onClick={() => setSelectedIndustry(ind.slug)}
                  className={`p-3 rounded-xl text-center border transition-all text-xs font-semibold ${
                    isSelected
                      ? 'bg-[#6366F1] border-[#8B5CF6] text-white font-bold shadow-lg shadow-[#6366F1]/30'
                      : 'bg-nodal-surface border-nodal-border hover:border-nodal-border text-nodal-muted hover:text-white'
                  }`}
                >
                  <span className="block font-sans line-clamp-1">{ind.industryName.split('&')[0]}</span>
                </button>
              );
            })}
          </div>

          {/* Active Industry Breakdown Card */}
          <div className="bg-nodal-surface rounded-3xl border border-[#6366F1]/30 p-6 sm:p-10 shadow-2xl space-y-10 text-left">
            
            {/* Header */}
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#A78BFA] block mb-1">
                VERTICAL CAPABILITY PROFILE
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-nodal-text font-display">
                {currentInd.industryName}
              </h2>
              <p className="mt-1 text-sm text-[#00D2FF] font-mono">
                "{currentInd.tagline}"
              </p>
              <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed max-w-4xl">
                {currentInd.description}
              </p>
            </div>

            {/* 4 Pillars Matrix (Data, AI, BI, Automation) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Pillar 1: Data Engineering */}
              <div className="p-6 rounded-2xl bg-nodal-navy border border-[#0066FF]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#00D2FF] font-mono text-xs font-bold uppercase">
                  <Database className="w-4 h-4" /> Data Engineering Applications
                </div>
                <ul className="space-y-2 text-xs text-nodal-muted">
                  {currentInd.dataEngineeringUseCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00D2FF] font-bold">•</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 2: AI & Generative AI */}
              <div className="p-6 rounded-2xl bg-nodal-navy border border-[#6366F1]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#A78BFA] font-mono text-xs font-bold uppercase">
                  <Sparkles className="w-4 h-4" /> Artificial Intelligence & GenAI
                </div>
                <ul className="space-y-2 text-xs text-nodal-muted">
                  {currentInd.aiAndGenAIUseCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#A78BFA] font-bold">•</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 3: BI & Analytics */}
              <div className="p-6 rounded-2xl bg-nodal-navy border border-[#00D2FF]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#00D2FF] font-mono text-xs font-bold uppercase">
                  <BarChart3 className="w-4 h-4" /> Business Intelligence & Dashboards
                </div>
                <ul className="space-y-2 text-xs text-nodal-muted">
                  {currentInd.biAndAnalyticsUseCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#00D2FF] font-bold">•</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar 4: RPA & Automation */}
              <div className="p-6 rounded-2xl bg-nodal-navy border border-[#6366F1]/30 space-y-3">
                <div className="flex items-center gap-2 text-[#A78BFA] font-mono text-xs font-bold uppercase">
                  <Bot className="w-4 h-4" /> RPA & Intelligent Automation
                </div>
                <ul className="space-y-2 text-xs text-nodal-muted">
                  {currentInd.automationUseCases.map((uc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-[#8B5CF6] font-bold">•</span>
                      <span>{uc}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Key Expected Outcomes */}
            <div className="p-6 rounded-2xl bg-nodal-navy border border-nodal-border">
              <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-2">
                Proven Target Outcomes for {currentInd.industryName}:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {currentInd.keyOutcomes.map((out, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-white">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-6 border-t border-nodal-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-nodal-muted block">Operating in {currentInd.industryName}?</span>
                <span className="text-sm font-bold text-white font-sans">Request an industry-specific technology architecture assessment</span>
              </div>
              <button
                onClick={() => setModalOpen(true)}
                className="w-full sm:w-auto btn-solutions py-3 px-6 text-xs uppercase tracking-wider"
              >
                <Send className="w-4 h-4 mr-2" /> Request Vertical Assessment
              </button>
            </div>

          </div>

        </div>
      </section>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        streamType="software_project_consultation"
        initialTopic={`Industry Assessment: ${currentInd.industryName}`}
      />

    </div>
  );
};
