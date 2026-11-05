import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Target, 
  Eye, 
  Lightbulb, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  Cpu, 
  Code, 
  BookOpen, 
  Briefcase, 
  MapPin,
  Sparkles,
  Users
} from 'lucide-react';
import { COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const AboutPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-20">
      <PageBackground variant="about" />
      
      {/* Hero Section */}
      <section className="relative py-16 lg:py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[500px] h-[250px] bg-[#0066FF]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Building className="w-3.5 h-3.5" /> Corporate Overview & Philosophy
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Empowering Talent.{' '}
            <span className="text-gradient-electric block mt-1">Engineering Innovation.</span>
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            NodalBot Technologies is an enterprise technology company headquartered in Chennai, India. We connect cutting-edge technical education with scalable digital software solutions for organizations across the globe.
          </p>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-nodal-navy relative border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Vision */}
            <div className="p-6 sm:p-10 rounded-3xl bg-nodal-surface border border-[#0066FF]/30 shadow-2xl hover:border-[#00D2FF] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#0066FF]/20 border border-[#0066FF]/30 flex items-center justify-center text-[#00D2FF] mb-6">
                <Eye className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase text-[#00D2FF] tracking-widest block mb-2">
                OUR BRAND VISION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-nodal-text font-display">
                To Empower Global Potential Through Practical Technology
              </h3>
              <p className="mt-4 text-sm text-nodal-muted font-sans leading-relaxed">
                "{COMPANY_INFO.vision}"
              </p>
              <div className="mt-6 pt-4 border-t border-nodal-border text-xs text-nodal-muted">
                Aiming to serve individuals, university institutions, and enterprise clients across India, North America, Europe, and Asia-Pacific.
              </div>
            </div>

            {/* Mission */}
            <div className="p-6 sm:p-10 rounded-3xl bg-nodal-surface border border-[#6366F1]/30 shadow-2xl hover:border-[#8B5CF6] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#6366F1]/20 border border-[#6366F1]/30 flex items-center justify-center text-[#A78BFA] mb-6">
                <Target className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold uppercase text-[#A78BFA] tracking-widest block mb-2">
                OUR BRAND MISSION
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-nodal-text font-display">
                Industry-Relevant Training & Scalable Software Engineering
              </h3>
              <p className="mt-4 text-sm text-nodal-muted font-sans leading-relaxed">
                "{COMPANY_INFO.mission}"
              </p>
              <div className="mt-6 pt-4 border-t border-nodal-border text-xs text-nodal-muted">
                Grounding every training program in real-world code and engineering scalable digital solutions that drive business outcomes.
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Two-Pronged Philosophy (Training Approach vs Engineering Approach) */}
      <section className="py-20 bg-nodal-bg relative border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block mb-2">
              THE NODALBOT PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              Two Disciplines. Shared Rigor.
            </h2>
            <p className="mt-3 text-nodal-muted text-sm sm:text-base">
              Why our dual-division model gives our students and our consulting clients a distinct advantage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            
            {/* Training Approach */}
            <div className="p-6 sm:p-8 rounded-2xl bg-nodal-card border border-[#0066FF]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-[#00D2FF]">
                <BookOpen className="w-6 h-6" />
                <h3 className="text-xl font-bold text-nodal-text font-display">
                  Our Training Approach (NodalBot Academy)
                </h3>
              </div>
              <p className="text-sm text-nodal-muted leading-relaxed">
                We reject generic presentation slides and shallow syntax overviews. Technology education at NodalBot is taught by practicing senior engineers using live cloud sandboxes.
              </p>
              <ul className="space-y-2.5 text-xs text-nodal-muted pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Project-First Pedagogy:</strong> Every course culminates in a full industrial capstone (e.g., end-to-end lakehouses, custom RAG pipelines).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Small Cohorts:</strong> Limited to 15 students per batch to allow line-by-line mentor code reviews.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                  <span><strong>Zero Fluff:</strong> Verified skills aligned to current market job descriptions.</span>
                </li>
              </ul>
            </div>

            {/* Engineering Approach */}
            <div className="p-6 sm:p-8 rounded-2xl bg-nodal-card border border-[#6366F1]/30 shadow-xl space-y-4">
              <div className="flex items-center gap-3 text-[#A78BFA]">
                <Briefcase className="w-6 h-6" />
                <h3 className="text-xl font-bold text-nodal-text font-display">
                  Our Engineering Approach (Digital Solutions)
                </h3>
              </div>
              <p className="text-sm text-nodal-muted leading-relaxed">
                We engineer scalable, secure, and maintainable software systems that solve concrete operational bottlenecks for modern businesses.
              </p>
              <ul className="space-y-2.5 text-xs text-nodal-muted pt-2">
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span><strong>Architectural Integrity:</strong> Microservices, Medallion Lakehouses, and containerized Docker deployments built to prevent technical debt.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span><strong>Pragmatic AI & Automation:</strong> We deploy AI agents and RPA where they deliver measurable business impact.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-0.5" />
                  <span><strong>Transparent Delivery:</strong> Bi-weekly agile demos, open code repositories, and comprehensive technical documentation.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-nodal-navy relative border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block mb-2">
              FOUNDATIONAL PILLARS
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Technical Rigor', desc: 'We prioritize deep architectural understanding and clean code over superficial shortcuts.' },
              { title: 'Real-World Practicality', desc: 'Every lesson and consulting deliverable must solve a tangible, production-grade business problem.' },
              { title: 'Ethical & Secure AI', desc: 'We strictly enforce data privacy, hallucination verification, and enterprise guardrails in all AI systems.' },
              { title: 'Empowering Long-Term Growth', desc: 'Whether upskilling a junior developer or delivering an enterprise lakehouse, we foster self-sustaining capability.' }
            ].map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-nodal-card border border-nodal-border hover:border-[#0066FF]/40 transition-all shadow-xl">
                <span className="text-xs font-mono font-bold text-[#00D2FF]">0{idx + 1}</span>
                <h3 className="text-lg font-bold text-nodal-text font-display mt-2">{val.title}</h3>
                <p className="mt-2 text-xs text-nodal-muted font-sans leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      
      {/* Engineering Innovation Showcase */}
      <section className="py-20 bg-nodal-navy relative border-b border-nodal-border overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block mb-2">
              APPLIED TECHNOLOGY ECOSYSTEM
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              Innovation In Action
            </h2>
            <p className="mt-3 text-nodal-muted text-sm sm:text-base">
              Explore the engineering infrastructure, physical labs, and connected intelligence powering our training programs and client deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 1 */}
            <div className="group rounded-3xl overflow-hidden bg-nodal-card border border-nodal-border hover:border-[#0066FF]/50 transition-all duration-300 shadow-xl flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80" 
                  alt="NodalBot Advanced Engineering Research"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nodal-card via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-[#00D2FF]/40 text-[10px] font-mono text-[#00D2FF] font-bold">
                  APPLIED LABS
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-nodal-text font-display group-hover:text-[#00D2FF] transition-colors">
                    Interactive Data & AI Engineering Sandbox
                  </h3>
                  <p className="mt-2 text-xs text-nodal-muted leading-relaxed">
                    Live compute clusters, Delta Lake storage pipelines, and production test harnesses replicated from Fortune 500 environments.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-nodal-border/60 flex items-center justify-between text-[11px] font-mono text-nodal-muted">
                  <span>PySpark • Databricks</span>
                  <span className="text-emerald-400">Verified Sandbox</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-3xl overflow-hidden bg-nodal-card border border-nodal-border hover:border-[#6366F1]/50 transition-all duration-300 shadow-xl flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80" 
                  alt="Global Connected Intelligence"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nodal-card via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-[#A78BFA]/40 text-[10px] font-mono text-[#A78BFA] font-bold">
                  GLOBAL NETWORK
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-nodal-text font-display group-hover:text-[#A78BFA] transition-colors">
                    Distributed Global Intelligence Center
                  </h3>
                  <p className="mt-2 text-xs text-nodal-muted leading-relaxed">
                    Worldwide cloud integration connecting our Chennai headquarters with remote learners, universities, and enterprise clients across 4 continents.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-nodal-border/60 flex items-center justify-between text-[11px] font-mono text-nodal-muted">
                  <span>Global Multi-Cloud</span>
                  <span className="text-[#00D2FF]">24/7 Operations</span>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-3xl overflow-hidden bg-nodal-card border border-nodal-border hover:border-cyan-500/50 transition-all duration-300 shadow-xl flex flex-col">
              <div className="relative h-56 w-full overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" 
                  alt="Enterprise Infrastructure & AI Automation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nodal-card via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md border border-[#C56845] dark:border-[#E5A17D]/40 text-[10px] font-mono text-[#C56845] dark:text-[#E5A17D] font-bold">
                  CLOUD INFRASTRUCTURE
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-nodal-text font-display group-hover:text-[#C56845] dark:text-[#E5A17D] transition-colors">
                    Autonomous Cloud & Systems Matrix
                  </h3>
                  <p className="mt-2 text-xs text-nodal-muted leading-relaxed">
                    Production microservices, high-throughput message brokers, and enterprise robotic process automation queues delivering zero-latency outcomes.
                  </p>
                </div>
                <div className="mt-4 pt-4 border-t border-nodal-border/60 flex items-center justify-between text-[11px] font-mono text-nodal-muted">
                  <span>Kubernetes • Entra ID</span>
                  <span className="text-emerald-400">99.99% SLA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chennai Headquarters & Global Delivery */}
      <section className="py-20 bg-nodal-bg relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="p-6 sm:p-12 rounded-3xl bg-gradient-to-r from-nodal-surface to-nodal-card border border-[#0066FF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl text-left">
              <div className="flex items-center gap-2 text-[#00D2FF] text-xs font-mono uppercase tracking-widest font-bold mb-2">
                <MapPin className="w-4 h-4" /> Global Hub
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-nodal-text font-display">
                Headquartered in Chennai, India. Serving Globally.
              </h2>
              <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed">
                Located in the heart of Chennai's thriving technology corridor, NodalBot combines India's premier engineering talent with international delivery standards for clients across North America, Europe, the Middle East, and Asia-Pacific.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0 w-full sm:w-auto">
              <Link
                to="/contact"
                className="btn-primary"
              >
                Get in Touch
              </Link>
              <button
                onClick={() => setModalOpen(true)}
                className="btn-secondary"
              >
                Schedule Consultation
              </button>
            </div>
          </div>

        </div>
      </section>

      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        streamType="software_project_consultation"
      />

    </div>
  );
};
