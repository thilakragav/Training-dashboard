import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  Building, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  Target, 
  ShieldCheck, 
  Send, 
  Clock, 
  Sparkles,
  BookOpen,
  Cpu,
  Database,
  BarChart3,
  Bot,
  Cloud
} from 'lucide-react';
import { CORPORATE_TRAINING_PROGRAMS, CORPORATE_DELIVERY_MODELS, COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const CorporateTrainingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Enterprise Data Engineering Bootcamp');

  const openRfpModal = (topic: string = '') => {
    setSelectedTopic(topic || 'Enterprise Team Training Proposal');
    setModalOpen(true);
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="corporate" />
      
      {/* Hero */}
      <section className="relative py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] bg-[#0066FF]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Building className="w-3.5 h-3.5" /> B2B Corporate Learning & Talent Transformation
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Build High-Performing <span className="text-gradient-electric">Technology Teams.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Enterprise-grade upskilling in Azure Data Factory, Databricks, Apache Spark, Generative AI, Power BI, and Cloud Architecture. Designed for HR leaders, L&D teams, and engineering executives.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openRfpModal('Enterprise Customized Training Proposal')}
              className="btn-primary py-3.5 px-7 text-xs uppercase tracking-wider"
            >
              <Send className="w-4 h-4 mr-2" /> Request Customized Proposal
            </button>
            <a
              href="#programs"
              className="btn-secondary text-xs"
            >
              Browse Enterprise Programs
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 pt-8 border-t border-nodal-border grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <span className="block text-2xl font-black text-white font-sans">100% Practical</span>
              <span className="text-xs text-nodal-muted font-mono">Live Cloud Sandboxes</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#00D2FF] font-sans">6 Delivery Modes</span>
              <span className="text-xs text-nodal-muted font-mono">Virtual, Onsite, Hybrid</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#A78BFA] font-sans">Pre/Post Testing</span>
              <span className="text-xs text-nodal-muted font-mono">Skill Matrix Verification</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-white font-sans">SLA Backed</span>
              <span className="text-xs text-nodal-muted font-mono">Dedicated Account Lead</span>
            </div>
          </div>

        </div>
      </section>

      {/* Corporate Programs Grid */}
      <section id="programs" className="py-20 bg-nodal-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block mb-2">
              CURRICULUM PORTFOLIO
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              10 Enterprise Technology Programs
            </h2>
            <p className="mt-2 text-nodal-muted text-sm">
              Customizable modules aligned directly to your upcoming client deliverables and modernization roadmaps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {CORPORATE_TRAINING_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="p-6 sm:p-8 rounded-3xl bg-nodal-surface border border-[#0066FF]/25 hover:border-[#00D2FF] transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#00D2FF] tracking-wider">
                      ENTERPRISE TRACK
                    </span>
                    <span className="text-xs font-mono text-nodal-muted">
                      {prog.durationOptions}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-nodal-text font-display">
                    {prog.title}
                  </h3>

                  <p className="mt-2 text-xs font-mono text-indigo-300">
                    Target: {prog.targetAudience}
                  </p>

                  <div className="mt-4">
                    <span className="text-xs font-mono uppercase text-nodal-muted block mb-2 font-semibold">
                      Core Technology Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {prog.focusAreas.map(f => (
                        <span key={f} className="px-2.5 py-1 rounded text-xs font-mono bg-[#0066FF]/15 text-[#00D2FF] border border-[#0066FF]/30">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-nodal-navy border border-nodal-border text-xs text-nodal-muted">
                    <strong>Measurable Outcome:</strong> {prog.outcome}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-nodal-border flex items-center justify-between">
                  <button
                    onClick={() => openRfpModal(prog.title)}
                    className="text-xs font-bold text-[#00D2FF] hover:underline flex items-center gap-1.5"
                  >
                    Request Custom Proposal →
                  </button>
                  <span className="text-[10px] font-mono text-slate-500">Custom Syllabi Available</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6 Delivery Models */}
      <section className="py-20 bg-nodal-bg border-t border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A78BFA] block mb-2">
              FLEXIBLE ENGAGEMENT
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              6 Enterprise Delivery Formats
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORPORATE_DELIVERY_MODELS.map((model, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-nodal-card border border-nodal-border shadow-xl text-left">
                <span className="text-xs font-mono font-bold text-[#00D2FF]">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-nodal-text font-display mt-2">{model.title}</h3>
                <p className="mt-2 text-xs text-nodal-muted font-sans leading-relaxed">{model.description}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Dedicated Corporate Proposal CTA */}
      <section className="py-20 bg-nodal-navy border-t border-nodal-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-nodal-surface border-2 border-[#0066FF]/40 shadow-2xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block">
              TALENT TRANSFORMATION ADVISORY
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-nodal-text font-display">
              Request a Customized Corporate Training Proposal
            </h2>

            <p className="text-sm text-nodal-muted font-sans max-w-2xl mx-auto leading-relaxed">
              Share your team size, expected training topics, and target dates. Our enterprise director will prepare a tailored curriculum and commercial proposal within 24 hours.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openRfpModal('Corporate Team Upskilling RFP')}
                className="w-full sm:w-auto btn-primary py-3.5 px-8 text-xs"
              >
                <Send className="w-4 h-4 mr-2" /> Open Corporate Proposal Form
              </button>
              <a
                href={`mailto:${COMPANY_INFO.contact.corporateEmail}`}
                className="w-full sm:w-auto btn-secondary text-xs"
              >
                Email: {COMPANY_INFO.contact.corporateEmail}
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        streamType="corporate_training_rfp"
        initialTopic={selectedTopic}
      />

    </div>
  );
};
