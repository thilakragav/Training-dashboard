import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Sparkles, 
  Database, 
  Cpu, 
  Code, 
  BarChart3, 
  Bot, 
  Cloud, 
  CheckCircle2, 
  Send, 
  Layers, 
  Building, 
  GraduationCap, 
  ShieldCheck, 
  Users,
  Compass,
  BookOpen,
  Briefcase,
  ChevronRight,
  ExternalLink
} from 'lucide-react';
import { HeroVisualizer } from '../components/home/HeroVisualizer';
import { TechnologyConstellation } from '../components/interactive/TechnologyConstellation';
import { LearningPathFinder } from '../components/interactive/LearningPathFinder';
import { SolutionDiscoveryEngine } from '../components/interactive/SolutionDiscoveryEngine';
import { TechStackExplorer } from '../components/interactive/TechStackExplorer';
import { UpcomingBatchesSection } from '../components/home/UpcomingBatchesSection';
import { LeadModal } from '../components/modals/LeadModal';
import { 
  COMPANY_INFO, 
  LEARNING_DOMAINS_INFO, 
  DIGITAL_SOLUTIONS_SERVICES, 
  INDUSTRY_SOLUTIONS_DATA,
  RESOURCE_ARTICLES_DATA 
} from '../data/nodalbotData';

export const HomePage: React.FC = () => {
  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [leadStreamType, setLeadStreamType] = useState<any>('student_course_enquiry');
  const [modalTopic, setModalTopic] = useState('');

  const openModal = (type: any = 'student_course_enquiry', topic: string = '') => {
    setLeadStreamType(type);
    setModalTopic(topic);
    setLeadModalOpen(true);
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-nodal-text overflow-hidden">
      <PageBackground variant="home" />
      
      {/* =========================================================================
          SECTION 1: HERO — "BUILD FUTURE-READY SKILLS. ACCELERATE DIGITAL INNOVATION."
          ========================================================================= */}
      <section className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden bg-tech-grid">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[300px] bg-[#C56845]/10 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="absolute top-10 right-10 w-64 h-64 bg-[#D99A78]/10 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 text-left space-y-6">
              
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C56845]/10 border border-[#C56845]/25 text-[#C56845] dark:text-[#E5A17D] font-mono text-xs uppercase tracking-widest font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C56845] animate-pulse"></span>
                INTELLIGENCE IN LEARNING • INNOVATION IN ENGINEERING
              </div>

              {/* Claude-Inspired Editorial Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-nodal-text font-serif leading-[1.12]">
                Think Beyond Technology.{' '}
                <span className="text-gradient-warm italic font-normal block mt-1">
                  Build What Comes Next.
                </span>
              </h1>

              {/* Supporting Text */}
              <p className="text-base sm:text-lg text-nodal-muted font-sans leading-relaxed max-w-2xl">
                We empower individuals and organisations with industry-focused technology education and intelligent digital solutions. Connecting rigorous capability with transformative engineering.
              </p>

              {/* Primary Dual CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href="#two-worlds"
                  className="btn-primary"
                >
                  <span>Explore Pathways</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>

                <button
                  onClick={() => openModal('software_project_consultation', 'Enterprise Consultation')}
                  className="btn-secondary"
                >
                  <span>Start a Conversation</span>
                </button>
              </div>

              {/* Two Clear Business Pathways Preview Cards */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5 max-w-xl">
                
                {/* Pathway A: NodalBot Academy */}
                <Link
                  to="/academy"
                  className="p-3.5 rounded-2xl bg-nodal-surface border border-nodal-border hover:border-[#C56845]/60 transition-all group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#C56845] dark:text-[#E5A17D] flex items-center gap-1.5">
                      <GraduationCap className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D]" />
                      NodalBot Academy
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-nodal-muted group-hover:text-[#C56845] dark:text-[#E5A17D] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-nodal-muted font-sans leading-snug">
                    Technology education, practical training, career pathways and professional upskilling.
                  </p>
                </Link>

                {/* Pathway B: NodalBot Digital Solutions */}
                <Link
                  to="/digital-solutions"
                  className="p-3.5 rounded-2xl bg-nodal-surface border border-nodal-border hover:border-[#8F4F35]/60 transition-all group shadow-sm"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#8F4F35] dark:text-[#E5A17D] flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-[#8F4F35] dark:text-[#E5A17D]" />
                      Digital Solutions
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 text-nodal-muted group-hover:text-[#8F4F35] dark:text-[#E5A17D] group-hover:translate-x-1 transition-all" />
                  </div>
                  <p className="text-xs text-nodal-muted font-sans leading-snug">
                    Software development, data engineering, AI, business intelligence, cloud and automation consulting.
                  </p>
                </Link>

              </div>

              {/* Trust & Proof Metrics Strip */}
              <div className="pt-4 border-t border-nodal-border grid grid-cols-3 gap-3 max-w-lg">
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-nodal-text font-sans">6 Domains</span>
                  <span className="text-[11px] text-nodal-muted font-mono">Advanced Tech Academy</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-nodal-text font-sans">6 Services</span>
                  <span className="text-[11px] text-nodal-muted font-mono">Enterprise Engineering</span>
                </div>
                <div>
                  <span className="block text-xl sm:text-2xl font-black text-[#C56845] dark:text-[#E5A17D] font-sans">Chennai HQ</span>
                  <span className="text-[11px] text-nodal-muted font-mono">Global Delivery Scope</span>
                </div>
              </div>

            </div>

            {/* Right: Custom Animated Technology Visualization (5 Cols) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <HeroVisualizer />
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          SECTION 2: DUAL BUSINESS DIVISIONS — "TWO WORLDS. ONE TECHNOLOGY PARTNER."
          ========================================================================= */}
      <section id="two-worlds" className="py-20 sm:py-24 bg-nodal-navy relative overflow-hidden border-t border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C56845] dark:text-[#E5A17D] block mb-2">
              NODALBOT ARCHITECTURE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nodal-text tracking-tight font-display">
              Two Worlds. <span className="text-gradient-electric">One Technology Partner.</span>
            </h2>
            <p className="mt-3 text-nodal-muted text-sm sm:text-base">
              NodalBot operates two specialized, high-performing divisions under one unified engineering standard. Select the path calibrated for your current objective.
            </p>
          </div>

          {/* DUAL INTERCONNECTED PANELS */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* PANEL A: NODALBOT ACADEMY */}
            <div className="relative rounded-3xl bg-gradient-to-br from-nodal-surface to-nodal-navy border border-nodal-border p-6 sm:p-10 shadow-warm-card hover:border-[#C56845]/60 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00D2FF] animate-ping"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C56845] dark:text-[#E5A17D]">
                      DIVISION 01
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#C56845]/10 text-[#C56845] dark:text-[#E5A17D] border border-[#C56845]/20">
                    Students • Professionals • Teams
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-nodal-text font-display group-hover:text-[#C56845] dark:text-[#E5A17D] transition-colors">
                  NodalBot Academy
                </h3>
                
                <h4 className="text-base sm:text-lg font-bold text-[#C56845] dark:text-[#E5A17D] font-display mt-2">
                  "Turn Curiosity Into Capability."
                </h4>

                <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed">
                  Practical technology education designed to prepare students, working developers, institutions, and corporate teams for evolving digital careers.
                </p>

                {/* 6 Core Domains */}
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase text-nodal-muted tracking-wider block mb-3 font-semibold">
                    Core Learning Domains:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Data Engineering (Spark, Fabric, ADF)',
                      'Data Analytics & BI (Power BI, DAX)',
                      'Data Science & Machine Learning',
                      'Artificial Intelligence & GenAI',
                      'Cloud Computing & DevOps',
                      'Automation & Intelligent RPA'
                    ].map((dom) => (
                      <div key={dom} className="flex items-center gap-2 text-nodal-text p-2 rounded-xl bg-nodal-card border border-nodal-border shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                        <span className="line-clamp-1">{dom}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Innovation Visual Showcase Card */}
                <div className="mt-6 relative rounded-2xl overflow-hidden border border-[#C56845]/20 group-hover:border-[#C56845]/60 transition-all shadow-xl bg-nodal-card/80">
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                      alt="NodalBot Academy Hands-on Technology Labs"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nodal-surface via-nodal-surface/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#00D2FF]/40 text-[10px] font-mono text-[#C56845] dark:text-[#E5A17D] font-bold flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#00D2FF] animate-pulse" />
                        LIVE ENTERPRISE LABS & SANDBOX
                      </span>
                      <span className="text-[10px] font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 font-semibold">
                        14 Career Paths
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel A CTA */}
              <div className="mt-8 pt-6 border-t border-nodal-border flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/academy"
                  className="w-full sm:w-auto flex-1 btn-primary"
                >
                  <span>Explore Training Programs</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <Link
                  to="/roadmaps"
                  className="w-full sm:w-auto btn-secondary text-xs"
                >
                  14 Career Pathways
                </Link>
              </div>
            </div>

            {/* PANEL B: NODALBOT DIGITAL SOLUTIONS */}
            <div className="relative rounded-3xl bg-gradient-to-br from-nodal-surface to-nodal-navy border border-nodal-border p-6 sm:p-10 shadow-warm-card hover:border-[#8F4F35]/60 transition-all duration-300 group flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#8B5CF6] animate-ping"></span>
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#8F4F35] dark:text-[#E5A17D]">
                      DIVISION 02
                    </span>
                  </div>
                  <span className="px-3 py-1 rounded-full text-[10px] font-mono bg-[#8F4F35]/10 text-[#8F4F35] dark:text-[#E5A17D] border border-[#8F4F35]/20">
                    Enterprises • Startups • CTOs
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-nodal-text font-display group-hover:text-[#8F4F35] dark:text-[#E5A17D] transition-colors">
                  NodalBot Digital Solutions
                </h3>

                <h4 className="text-base sm:text-lg font-bold text-[#8F4F35] dark:text-[#E5A17D] font-display mt-2">
                  "Turn Complex Challenges Into Digital Solutions."
                </h4>

                <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed">
                  Engineering intelligent software, distributed modern data platforms, automated RPA workflows, and scalable cloud architectures for modern businesses.
                </p>

                {/* Core Engineering Services */}
                <div className="mt-6">
                  <span className="text-xs font-mono uppercase text-nodal-muted tracking-wider block mb-3 font-semibold">
                    Core Engineering Services:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {[
                      'Custom Software & Web Development',
                      'Data Engineering & Platforms',
                      'Business Intelligence & Dashboards',
                      'Artificial Intelligence & GenAI',
                      'RPA & Intelligent Automation',
                      'Cloud Architecture & DevOps'
                    ].map((srv) => (
                      <div key={srv} className="flex items-center gap-2 text-nodal-text p-2 rounded-xl bg-nodal-card border border-nodal-border shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#8F4F35] dark:text-[#E5A17D] shrink-0" />
                        <span className="line-clamp-1">{srv}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Innovation Visual Showcase Card */}
                <div className="mt-6 relative rounded-2xl overflow-hidden border border-[#8F4F35]/20 group-hover:border-[#8F4F35]/60 transition-all shadow-xl bg-nodal-card/80">
                  <div className="relative h-44 sm:h-48 w-full overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800&q=80" 
                      alt="NodalBot Digital Solutions Distributed Architecture"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nodal-surface via-nodal-surface/40 to-transparent" />
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-[#A78BFA]/40 text-[10px] font-mono text-[#8F4F35] dark:text-[#E5A17D] font-bold flex items-center gap-1.5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B5CF6] animate-pulse" />
                        PRODUCTION AI & CLOUD ARCHITECTURE
                      </span>
                      <span className="text-[10px] font-mono text-white/90 bg-black/60 px-2.5 py-1 rounded-lg backdrop-blur-md border border-white/10 font-semibold">
                        99.99% Reliability
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Panel B CTA */}
              <div className="mt-8 pt-6 border-t border-nodal-border flex flex-col sm:flex-row items-center gap-3">
                <Link
                  to="/digital-solutions"
                  className="w-full sm:w-auto flex-1 btn-solutions"
                >
                  <span>Explore Digital Solutions</span>
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
                <button
                  onClick={() => openModal('software_project_consultation', 'Discovery Call')}
                  className="w-full sm:w-auto btn-secondary text-xs"
                >
                  Book Discovery Call
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          INTERACTIVE FEATURE 1: TECHNOLOGY CONSTELLATION NETWORK
          ========================================================================= */}
      <TechnologyConstellation />


      {/* =========================================================================
          INTERACTIVE FEATURE 2: LEARNING PATH FINDER
          ========================================================================= */}
      <LearningPathFinder />


      {/* =========================================================================
          INTERACTIVE FEATURE 3: ENTERPRISE SOLUTION DISCOVERY ENGINE
          ========================================================================= */}
      <SolutionDiscoveryEngine />


      {/* =========================================================================
          INTERACTIVE FEATURE 4: TECHNOLOGY STACK EXPLORER
          ========================================================================= */}
      <TechStackExplorer />


      {/* =========================================================================
          INTERACTIVE FEATURE 5: UPCOMING BATCHES & PROGRAMS
          ========================================================================= */}
      <UpcomingBatchesSection onOpenLeadModal={openModal} />


      {/* =========================================================================
          SECTION: CORPORATE TRAINING & COLLEGE PARTNERSHIPS DUAL BANNER
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-nodal-bg relative overflow-hidden border-t border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Corporate Training Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-nodal-surface border border-[#C56845]/20 shadow-xl flex flex-col justify-between group hover:border-[#C56845] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#C56845]/15 border border-[#C56845]/20 flex items-center justify-center text-[#C56845] dark:text-[#E5A17D] mb-5">
                  <Building className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-[#C56845] dark:text-[#E5A17D] tracking-widest block mb-1">
                  B2B ENTERPRISE UPSKILLING
                </span>
                <h3 className="text-2xl font-bold text-nodal-text font-display">
                  Build High-Performing Technology Teams
                </h3>
                <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed">
                  Tailored corporate bootcamps for engineering teams on Azure Databricks, Enterprise Generative AI, Power BI, and Cloud Architecture with customized pre/post assessments.
                </p>
                <div className="mt-5 space-y-2 text-xs text-nodal-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D]" />
                    <span>Virtual, Onsite, Hybrid, or Weekend Bootcamps</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D]" />
                    <span>Live code sandboxes and custom client project alignments</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-nodal-border flex items-center justify-between">
                <Link to="/corporate-training" className="text-xs font-semibold text-[#C56845] dark:text-[#E5A17D] hover:underline flex items-center gap-1">
                  Explore B2B Programs <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openModal('corporate_training_rfp', 'Corporate Training RFP')}
                  className="px-4 py-2 rounded-xl btn-primary text-xs"
                >
                  Request Proposal
                </button>
              </div>
            </div>

            {/* College Partnerships Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-nodal-surface border border-[#8F4F35]/20 shadow-xl flex flex-col justify-between group hover:border-[#8F4F35] transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-[#8F4F35]/15 border border-[#8F4F35]/20 flex items-center justify-center text-[#8F4F35] dark:text-[#E5A17D] mb-5">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <span className="text-xs font-mono font-bold uppercase text-[#8F4F35] dark:text-[#E5A17D] tracking-widest block mb-1">
                  ACADEMIC INSTITUTIONS & UNIVERSITIES
                </span>
                <h3 className="text-2xl font-bold text-nodal-text font-display">
                  Bridge Academic Learning With Industry Technology
                </h3>
                <p className="mt-3 text-sm text-nodal-muted font-sans leading-relaxed">
                  Faculty Development Programs (FDP), student industry bootcamps, final-year project guidance, and internship-oriented technical workshops.
                </p>
                <div className="mt-5 space-y-2 text-xs text-nodal-muted">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8F4F35] dark:text-[#E5A17D]" />
                    <span>MOU partnerships with engineering & science colleges</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#8F4F35] dark:text-[#E5A17D]" />
                    <span>Genuine, non-plagiarized student project capstones</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-nodal-border flex items-center justify-between">
                <Link to="/college-training" className="text-xs font-semibold text-[#8F4F35] dark:text-[#E5A17D] hover:underline flex items-center gap-1">
                  View Academic Programs <ChevronRight className="w-4 h-4" />
                </Link>
                <button
                  onClick={() => openModal('college_partnership', 'Academic Partnership')}
                  className="px-4 py-2 rounded-xl btn-solutions text-xs"
                >
                  Partner With Us
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: 8 INDUSTRY SOLUTIONS PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-nodal-navy relative overflow-hidden border-t border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C56845] dark:text-[#E5A17D] block mb-2">
                APPLIED DOMAIN IMPACT
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-nodal-text tracking-tight font-display">
                Industry-Specific <span className="text-gradient-electric">Technology Solutions</span>
              </h2>
              <p className="mt-2 text-nodal-muted text-sm max-w-xl">
                Explore how modern Data Engineering, Artificial Intelligence, Business Intelligence, and Automation drive real-world transformation across 8 key sectors.
              </p>
            </div>

            <Link
              to="/industry-solutions"
              className="text-xs font-bold text-[#C56845] dark:text-[#E5A17D] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              View Full Industry Breakdown <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SOLUTIONS_DATA.map((ind) => (
              <div
                key={ind.id}
                className="p-6 rounded-2xl bg-nodal-card border border-nodal-border hover:border-[#C56845]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-lg font-bold text-nodal-text font-display">
                    {ind.industryName}
                  </h3>
                  <p className="text-xs text-[#C56845] dark:text-[#E5A17D] font-mono mt-1">
                    {ind.tagline}
                  </p>
                  <p className="mt-3 text-xs text-nodal-muted font-sans leading-relaxed line-clamp-3">
                    {ind.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-nodal-border">
                  <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1">
                    Key Metric Outcome:
                  </span>
                  <span className="text-xs font-bold text-emerald-400 font-mono">
                    {ind.keyOutcomes[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: KNOWLEDGE HUB & RESOURCES PREVIEW
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-nodal-bg relative overflow-hidden border-t border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C56845] dark:text-[#E5A17D] block mb-2">
                INSIGHTS & GUIDES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-nodal-text tracking-tight font-display">
                NodalBot <span className="text-gradient-electric">Knowledge Hub</span>
              </h2>
              <p className="mt-2 text-nodal-muted text-sm max-w-xl">
                Rigorous technical articles, architectural patterns, and career roadmaps authored by our working instructors and senior engineers.
              </p>
            </div>

            <Link
              to="/resources"
              className="text-xs font-bold text-[#C56845] dark:text-[#E5A17D] hover:underline flex items-center gap-1 self-start md:self-auto"
            >
              Browse All Guides <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESOURCE_ARTICLES_DATA.slice(0, 3).map((art) => (
              <div
                key={art.id}
                className="p-6 rounded-2xl bg-nodal-card border border-nodal-border hover:border-[#C56845]/40 transition-all flex flex-col justify-between shadow-xl"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-[#C56845]/10 text-[#C56845] dark:text-[#E5A17D] border border-[#C56845]/20">
                      {art.category}
                    </span>
                    <span className="text-slate-500">{art.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-nodal-text font-display leading-snug hover:text-[#C56845] dark:text-[#E5A17D] transition-colors">
                    <Link to="/resources">
                      {art.title}
                    </Link>
                  </h3>

                  <p className="mt-2 text-xs text-nodal-muted font-sans line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-nodal-border flex items-center justify-between text-xs">
                  <span className="text-nodal-muted font-mono text-[11px]">
                    By {art.author.name}
                  </span>
                  <Link to="/resources" className="text-[#C56845] dark:text-[#E5A17D] font-semibold flex items-center gap-1 hover:translate-x-0.5 transition-transform">
                    Read Article →
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION: FINAL DUAL CALL TO ACTION
          ========================================================================= */}
      <section className="py-24 sm:py-28 bg-gradient-to-b from-nodal-navy to-nodal-bg relative overflow-hidden border-t border-[#C56845]/20">
        <div className="absolute inset-0 bg-tech-dots opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#C56845]/10 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#C56845]/10 border border-[#C56845]/20 text-[#C56845] dark:text-[#E5A17D] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Start Your Journey Today
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-nodal-text tracking-tight font-display max-w-3xl mx-auto leading-tight">
            Learn the Technologies Shaping Tomorrow.{' '}
            <span className="text-gradient-electric block mt-2">
              Engineer Intelligent Digital Solutions.
            </span>
          </h2>

          <p className="mt-6 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you are preparing for a career transition into Data Engineering or looking for an enterprise technology partner to architect an AI-driven platform, NodalBot is ready.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/academy"
              className="w-full sm:w-auto btn-primary py-3.5 px-8"
            >
              <span>Explore Academy Courses</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>

            <button
              onClick={() => openModal('software_project_consultation', 'Enterprise Software Project')}
              className="w-full sm:w-auto btn-solutions py-3.5 px-8"
            >
              <span>Discuss a Software Project</span>
              <Send className="w-4 h-4 ml-1.5" />
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-nodal-muted">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D]" /> Chennai, Tamil Nadu, India HQ
            </span>
            <span>•</span>
            <span>Live Interactive Sandboxes</span>
            <span>•</span>
            <span>Enterprise SLAs</span>
          </div>

        </div>
      </section>

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        streamType={leadStreamType}
        initialTopic={modalTopic}
      />

    </div>
  );
};
