import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  Briefcase, 
  ArrowRight, 
  CheckCircle2, 
  Send, 
  Layers, 
  ShieldCheck, 
  Cpu, 
  Database, 
  BarChart3, 
  Bot, 
  Cloud, 
  Code,
  Sparkles,
  Check,
  ChevronDown,
  Building
} from 'lucide-react';
import { DIGITAL_SOLUTIONS_SERVICES, COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';


const SERVICE_THUMBNAILS: Record<string, string> = {
  'service-custom-software': 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?auto=format&fit=crop&w=1200&q=80',
  'service-data-engineering': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  'service-business-intelligence': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  'service-artificial-intelligence': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80',
  'service-rpa-automation': 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1200&q=80',
  'service-cloud-architecture': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80',
};

export const DigitalSolutionsPage: React.FC = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>(DIGITAL_SOLUTIONS_SERVICES[0].id);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTopic, setModalTopic] = useState('');

  const openConsultation = (topic: string = '') => {
    setModalTopic(topic || 'Enterprise Software & AI Consulting');
    setModalOpen(true);
  };

  const currentService = DIGITAL_SOLUTIONS_SERVICES.find(s => s.id === selectedServiceId) || DIGITAL_SOLUTIONS_SERVICES[0];

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="solutions" />
      
      {/* Hero */}
      <section className="relative py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] bg-[#6366F1]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#A78BFA] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Briefcase className="w-3.5 h-3.5" /> NodalBot Digital Solutions — Enterprise Technology Division
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Engineering Intelligent Solutions <span className="text-gradient-electric block mt-1">for Modern Businesses.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Engineering intelligent software, high-throughput modern data platforms, automated RPA workflows, and scalable cloud architectures. From rapid PoC accelerators to full-scale digital transformations.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openConsultation('Enterprise Architecture & AI Consultation')}
              className="btn-solutions text-xs uppercase tracking-wider py-3.5 px-7"
            >
              <Send className="w-4 h-4 mr-2" /> Schedule Initial Consultation
            </button>
            <a
              href="#services"
              className="btn-secondary text-xs"
            >
              Explore 6 Service Areas
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 pt-8 border-t border-nodal-border grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <span className="block text-2xl font-black text-white font-sans">99.95% SLA</span>
              <span className="text-xs text-nodal-muted font-mono">High-Availability Software</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#00D2FF] font-sans">Sub-Second</span>
              <span className="text-xs text-nodal-muted font-mono">Modern BI Query Speeds</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#A78BFA] font-sans">Secure GenAI</span>
              <span className="text-xs text-nodal-muted font-mono">MCP Protocol & Guardrails</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-white font-sans">Chennai HQ</span>
              <span className="text-xs text-nodal-muted font-mono">International Delivery</span>
            </div>
          </div>

        </div>
      </section>

      {/* Services Navigator Section */}
      <section id="services" className="py-20 bg-nodal-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A78BFA] block mb-2">
              CORE SERVICE AREAS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              6 Enterprise Engineering Pillars
            </h2>
            <p className="mt-2 text-nodal-muted text-sm">
              Select an engineering service area to inspect business challenges, proposed solutions, architecture blueprints, and delivery lifecycles.
            </p>
          </div>

          {/* 6 Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 mb-10 sm:mb-12">
            {DIGITAL_SOLUTIONS_SERVICES.map((srv) => {
              const isSelected = selectedServiceId === srv.id;
              return (
                <button
                  key={srv.id}
                  onClick={() => setSelectedServiceId(srv.id)}
                  className={`p-3.5 rounded-2xl text-left border transition-all ${
                    isSelected
                      ? 'bg-[#6366F1]/20 border-[#8B5CF6] text-white shadow-xl shadow-[#6366F1]/20 font-bold'
                      : 'bg-nodal-surface border-nodal-border hover:border-nodal-border text-nodal-muted hover:text-white'
                  }`}
                >
                  <span className="block text-[10px] font-mono font-bold text-[#A78BFA] mb-1">
                    #{srv.serviceNumber}
                  </span>
                  <span className="block text-xs font-bold leading-tight font-sans line-clamp-2">
                    {srv.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Service Detail Deep Dive Card */}
          <div className="bg-nodal-surface rounded-3xl border border-[#6366F1]/30 p-6 sm:p-10 shadow-2xl space-y-10 text-left">
            
            {/* Top Meta */}
            <div>
              <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A78BFA]">
                  SERVICE #{currentService.serviceNumber} • ENTERPRISE CONSULTING
                </span>
                <span className="text-xs font-mono text-nodal-muted">
                  Delivery: Agile 2-Week Sprints
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-nodal-text font-display">
                {currentService.title}
              </h2>
              
              <p className="mt-2 text-sm sm:text-base text-indigo-300 font-mono font-semibold">
                "{currentService.tagline}"
              </p>

              <p className="mt-4 text-sm text-nodal-muted font-sans leading-relaxed">
                {currentService.fullOverview}
              </p>
            </div>

            {/* Business Challenges & Proposed Solution */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 rounded-2xl bg-nodal-navy border border-nodal-border">
              
              <div>
                <span className="text-xs font-mono uppercase text-rose-400 font-bold block mb-3">
                  Critical Business Challenges Addressed:
                </span>
                <ul className="space-y-2 text-xs text-nodal-muted">
                  {currentService.businessChallenges.map((ch, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{ch}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-3">
                  NodalBot Proposed Solution & Architecture:
                </span>
                <p className="text-xs text-nodal-muted leading-relaxed font-sans mb-3">
                  {currentService.proposedSolution}
                </p>
                <div className="p-3 rounded-xl bg-[#0066FF]/10 border border-[#0066FF]/20 text-xs text-cyan-200">
                  <strong>Architecture Concept:</strong> {currentService.solutionArchitectureOverview}
                </div>
              </div>

            </div>

            {/* Key Capabilities Breakdown */}
            <div>
              <h3 className="text-xl font-bold text-nodal-text font-display mb-4 flex items-center gap-2">
                <Layers className="w-5 h-5 text-[#A78BFA]" /> Key Engineering Capabilities
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {currentService.keyCapabilities.map((cap, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-nodal-navy border border-nodal-border flex flex-col justify-between">
                    <div>
                      <h4 className="text-sm font-bold text-nodal-text font-display mb-2">{cap.title}</h4>
                      <p className="text-xs text-nodal-muted leading-relaxed mb-3">{cap.description}</p>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1 font-bold">Deliverables:</span>
                      <ul className="space-y-1 text-xs text-nodal-muted">
                        {cap.deliverables.map((d, j) => (
                          <li key={j} className="flex items-center gap-1.5">
                            <CheckCircle2 className="w-3 h-3 text-[#00D2FF] shrink-0" />
                            <span>{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies & Business Value Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-nodal-border">
              
              <div>
                <span className="text-xs font-mono uppercase text-nodal-muted font-bold block mb-3">
                  Core Technologies Deployed:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {currentService.technologies.map(t => (
                    <span key={t} className="px-3 py-1 rounded-md text-xs font-mono bg-[#0066FF]/15 text-[#00D2FF] border border-[#0066FF]/30">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <span className="text-xs font-mono uppercase text-emerald-400 font-bold block mb-3">
                  Verified Business Impact Metrics:
                </span>
                <div className="space-y-2">
                  {currentService.businessValueMetrics.map((bvm, i) => (
                    <div key={i} className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-xs text-slate-200">
                      <strong className="text-emerald-400 font-mono uppercase">{bvm.metric}:</strong> {bvm.impact}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* 4-Stage Delivery Approach */}
            <div>
              <h3 className="text-xl font-bold text-nodal-text font-display mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-[#A78BFA]" /> Engineering Delivery Lifecycle
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentService.deliveryApproach.map((stg) => (
                  <div key={stg.stage} className="p-4 rounded-xl bg-nodal-navy border border-nodal-border text-xs">
                    <span className="font-mono text-[#00D2FF] font-bold block text-[10px]">{stg.stage}</span>
                    <h4 className="font-bold text-white text-sm mt-1">{stg.name}</h4>
                    <p className="text-nodal-muted mt-2 leading-relaxed">{stg.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case Study */}
            <div className="p-6 rounded-2xl bg-nodal-navy border border-[#0066FF]/30 text-xs text-nodal-muted space-y-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#00D2FF] font-bold">
                  REPRESENTATIVE CASE ARCHITECTURE
                </span>
                <span className="text-[10px] font-mono text-nodal-muted">
                  {currentService.sampleCaseStudy.clientType}
                </span>
              </div>
              <p><strong>Challenge:</strong> {currentService.sampleCaseStudy.challenge}</p>
              <p><strong>NodalBot Solution:</strong> {currentService.sampleCaseStudy.solution}</p>
              <ul className="space-y-1 pt-1 text-slate-200">
                {currentService.sampleCaseStudy.outcomes.map((out, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{out}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Bar */}
            <div className="pt-6 border-t border-nodal-border flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-nodal-muted block">Have a project in this domain?</span>
                <span className="text-sm font-bold text-white font-sans">Book an initial discovery call with our solutions team</span>
              </div>
              <button
                onClick={() => openConsultation(currentService.title)}
                className="w-full sm:w-auto btn-solutions text-xs py-3 px-6"
              >
                <Send className="w-4 h-4 mr-2" /> Discuss Your Project
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        streamType="software_project_consultation"
        initialTopic={modalTopic}
      />

    </div>
  );
};
