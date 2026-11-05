import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { 
  Search, 
  Filter, 
  BookOpen, 
  Clock, 
  Calendar, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Download, 
  MessageSquare,
  Sparkles,
  Database,
  BarChart3,
  Cpu,
  Bot,
  Cloud,
  Code
} from 'lucide-react';
import { COURSES_MASTER_CATALOG, LEARNING_DOMAINS_INFO, COMPANY_INFO } from '../data/nodalbotData';
import { LearningDomain, SkillLevel, DeliveryMode } from '../types';
import { LeadModal } from '../components/modals/LeadModal';


const DOMAIN_THUMBNAILS: Record<string, string> = {
  'Data Engineering': 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80',
  'Data Science & Analytics': 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
  'Business Intelligence': 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80',
  'Artificial Intelligence & GenAI': 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
  'Cloud Computing & DevOps': 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=600&q=80',
  'RPA & Intelligent Automation': 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=600&q=80',
};

export const AcademyPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialDomainParam = searchParams.get('domain') || 'All';

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDomain, setSelectedDomain] = useState<string>(initialDomainParam);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');

  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalStreamType, setModalStreamType] = useState<any>('student_course_enquiry');
  const [modalCourseTitle, setModalCourseTitle] = useState('');

  const openLeadModal = (type: any, courseTitle: string) => {
    setModalStreamType(type);
    setModalCourseTitle(courseTitle);
    setLeadModalOpen(true);
  };

  const handleWhatsApp = (courseTitle: string) => {
    const text = encodeURIComponent(`Hello NodalBot Academy! I am interested in syllabus and demo details for: ${courseTitle}. Please assist me.`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  // Filtered courses
  const filteredCourses = useMemo(() => {
    return COURSES_MASTER_CATALOG.filter((course) => {
      // Domain filter
      if (selectedDomain !== 'All' && course.domain !== selectedDomain) {
        return false;
      }
      // Level filter
      if (selectedLevel !== 'All' && course.level !== selectedLevel) {
        return false;
      }
      // Mode filter
      if (selectedMode !== 'All' && !course.deliveryMode.includes(selectedMode)) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(q);
        const matchesDesc = course.shortDescription.toLowerCase().includes(q);
        const matchesTech = course.technologiesCovered.some(t => t.toLowerCase().includes(q));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }
      return true;
    });
  }, [selectedDomain, selectedLevel, selectedMode, searchQuery]);

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="academy" />
      
      {/* Academy Hero Header */}
      <section className="relative py-16 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] bg-[#0066FF]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping"></span>
            NodalBot Academy — Technology Education & Professional Training
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Learn the Technologies <span className="text-gradient-electric">That Shape Tomorrow.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Practical, project-centric technology training in Data Engineering, Generative AI, Power BI, Machine Learning, and Cloud Architecture. Learn directly from practicing senior architects.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/roadmaps"
              className="btn-primary"
            >
              <span>Explore 14 Career Pathways</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
            <Link
              to="/corporate-training"
              className="btn-secondary"
            >
              Corporate Team Training
            </Link>
          </div>
        </div>
      </section>

      {/* 6 Primary Domains Horizontal Navigator */}
      <section className="py-8 bg-nodal-navy border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-3 text-left">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-nodal-muted">
              Filter by Primary Learning Domain:
            </span>
            {selectedDomain !== 'All' && (
              <button
                onClick={() => {
                  setSelectedDomain('All');
                  setSearchParams({});
                }}
                className="text-xs font-mono text-[#00D2FF] hover:underline"
              >
                Clear Domain Filter
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {LEARNING_DOMAINS_INFO.map((dom) => {
              const isSelected = selectedDomain === dom.title;
              return (
                <button
                  key={dom.id}
                  onClick={() => {
                    setSelectedDomain(dom.title);
                    setSearchParams({ domain: dom.title });
                  }}
                  className={`p-3 rounded-xl text-left border transition-all ${
                    isSelected
                      ? 'bg-[#0066FF]/20 border-[#00D2FF] text-white shadow-md shadow-[#0066FF]/20 font-bold'
                      : 'bg-nodal-surface border-nodal-border hover:border-slate-600 text-nodal-muted hover:text-white'
                  }`}
                >
                  <span className="block text-[9px] font-mono font-bold text-[#00D2FF] mb-0.5">{dom.code}</span>
                  <span className="block text-xs font-semibold leading-tight line-clamp-1">{dom.title.split('&')[0]}</span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Search and Filters Bar */}
      <section className="py-6 bg-nodal-bg border-b border-nodal-border sticky top-16 z-30 backdrop-blur-md bg-nodal-bg/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4 justify-between">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nodal-muted" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search courses, skills, tools (Databricks, DAX, RAG, Spark)..."
                className="w-full pl-10 pr-10 py-2.5 rounded-xl bg-nodal-surface border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-mono text-slate-500 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level and Mode Filters */}
            <div className="flex flex-wrap items-center gap-3 text-xs">
              
              {/* Level Filter */}
              <div className="flex items-center gap-1.5 bg-nodal-surface px-3 py-2 rounded-xl border border-nodal-border">
                <span className="font-mono text-nodal-muted text-[11px]">Level:</span>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-nodal-surface">All Levels</option>
                  <option value="Beginner" className="bg-nodal-surface">Beginner</option>
                  <option value="Intermediate" className="bg-nodal-surface">Intermediate</option>
                  <option value="Advanced" className="bg-nodal-surface">Advanced</option>
                </select>
              </div>

              {/* Mode Filter */}
              <div className="flex items-center gap-1.5 bg-nodal-surface px-3 py-2 rounded-xl border border-nodal-border">
                <span className="font-mono text-nodal-muted text-[11px]">Mode:</span>
                <select
                  value={selectedMode}
                  onChange={(e) => setSelectedMode(e.target.value)}
                  className="bg-transparent text-white font-semibold focus:outline-none cursor-pointer"
                >
                  <option value="All" className="bg-nodal-surface">All Delivery Modes</option>
                  <option value="Live Online" className="bg-nodal-surface">Live Online</option>
                  <option value="Hybrid" className="bg-nodal-surface">Hybrid (Classroom + Online)</option>
                  <option value="Classroom" className="bg-nodal-surface">Classroom (Chennai)</option>
                </select>
              </div>

              <div className="text-[11px] font-mono text-nodal-muted">
                Showing <strong>{filteredCourses.length}</strong> Program{filteredCourses.length !== 1 ? 's' : ''}
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Courses Catalog Grid */}
      <section className="py-14 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredCourses.length === 0 ? (
            <div className="text-center py-16 bg-nodal-surface rounded-2xl border border-nodal-border">
              <BookOpen className="w-12 h-12 text-slate-500 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white">No courses match your active filters</h3>
              <p className="text-xs text-nodal-muted mt-1 max-w-sm mx-auto">
                Try selecting a different domain or clearing your search query.
              </p>
              <button
                onClick={() => {
                  setSelectedDomain('All');
                  setSelectedLevel('All');
                  setSelectedMode('All');
                  setSearchQuery('');
                  setSearchParams({});
                }}
                className="mt-4 btn-primary text-xs"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredCourses.map((course) => (
                <div
                  key={course.id}
                  className="rounded-2xl bg-nodal-surface border border-[#0066FF]/25 hover:border-[#00D2FF] transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-[#0066FF]/15 flex flex-col justify-between group overflow-hidden"
                >
                  {/* HD Course Domain Image Thumbnail */}
                  <div className="relative h-44 w-full overflow-hidden bg-nodal-navy">
                    <img
                      src={DOMAIN_THUMBNAILS[course.domain] || DOMAIN_THUMBNAILS['Data Engineering']}
                      alt={course.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nodal-surface via-nodal-surface/20 to-black/40" />
                    <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-[#00D2FF] font-bold uppercase border border-[#0066FF]/40 shadow-sm">
                        {course.domain}
                      </span>
                      <span className="px-2 py-0.5 rounded-lg bg-black/70 backdrop-blur-md text-[10px] font-mono text-white/90 font-semibold border border-white/10 shadow-sm">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 pt-4 text-left">

                    {/* Title */}
                    <h3 className="text-xl font-bold text-nodal-text font-display group-hover:text-[#00D2FF] transition-colors">
                      <Link to={`/course/${course.slug}`}>
                        {course.title}
                      </Link>
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs text-nodal-muted font-sans leading-relaxed line-clamp-3">
                      {course.shortDescription}
                    </p>

                    {/* Metadata Specs */}
                    <div className="mt-5 grid grid-cols-2 gap-2 text-xs font-mono text-nodal-muted bg-nodal-navy p-3 rounded-xl border border-nodal-border">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>{course.durationWeeks} Wks ({course.totalHours}h)</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#6366F1] shrink-0" />
                        <span className="truncate">{course.deliveryMode.split('(')[0]}</span>
                      </div>
                    </div>

                    {/* Technologies Pills */}
                    <div className="mt-4">
                      <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1.5 font-semibold">
                        Tools Covered:
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.technologiesCovered.slice(0, 5).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-nodal-card text-nodal-muted border border-nodal-border">
                            {tech}
                          </span>
                        ))}
                        {course.technologiesCovered.length > 5 && (
                          <span className="px-1.5 py-0.5 rounded text-[10px] font-mono text-[#00D2FF]">
                            +{course.technologiesCovered.length - 5} more
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Capstone Preview */}
                    <div className="mt-4 p-2.5 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 text-[11px] text-cyan-200">
                      <strong className="text-[#00D2FF]">Capstone:</strong> {course.capstoneProject.title}
                    </div>

                  </div>

                  {/* Actions Bar */}
                  <div className="p-6 pt-0 space-y-2.5">
                    <div className="grid grid-cols-2 gap-2">
                      <Link
                        to={`/course/${course.slug}`}
                        className="btn-primary py-2 px-3 text-xs"
                      >
                        View Syllabus
                      </Link>
                      <button
                        onClick={() => openLeadModal('free_demo_registration', course.title)}
                        className="btn-secondary py-2 px-3 text-xs"
                      >
                        Book Demo
                      </button>
                    </div>

                    <div className="flex items-center justify-between text-xs pt-2 border-t border-nodal-border">
                      <button
                        onClick={() => openLeadModal('course_enrollment', course.title)}
                        className="text-nodal-muted hover:text-white font-semibold underline text-xs"
                      >
                        Enroll in Batch
                      </button>
                      <button
                        onClick={() => handleWhatsApp(course.title)}
                        className="text-emerald-400 hover:text-emerald-300 font-mono text-xs flex items-center gap-1 font-semibold"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Query
                      </button>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        streamType={modalStreamType}
        initialTopic={modalCourseTitle}
      />

    </div>
  );
};
