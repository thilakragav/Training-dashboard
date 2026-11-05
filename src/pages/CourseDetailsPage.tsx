import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Calendar, 
  CheckCircle2, 
  Download, 
  MessageSquare, 
  Send, 
  ShieldCheck, 
  ChevronDown, 
  Layers, 
  Target, 
  Users, 
  BookOpen, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { COURSES_MASTER_CATALOG, COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Find course by slug or ID
  const course = COURSES_MASTER_CATALOG.find(c => c.slug === id || c.id === id) || COURSES_MASTER_CATALOG[0];

  const [leadModalOpen, setLeadModalOpen] = useState(false);
  const [modalStreamType, setModalStreamType] = useState<any>('student_course_enquiry');
  const [expandedModule, setExpandedModule] = useState<string | null>(course.modules[0]?.id || null);
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const openModal = (type: any = 'student_course_enquiry') => {
    setModalStreamType(type);
    setLeadModalOpen(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi NodalBot Academy! I am interested in syllabus, demo class, and upcoming batch dates for: "${course.title}". Please send details.`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  // Functional Syllabus Download Handler (Preserving real text syllabus generation)
  const handleDownloadSyllabus = () => {
    const syllabusText = `
================================================================================
NODALBOT TECHNOLOGIES — NODALBOT ACADEMY
COURSE SYLLABUS: ${course.title.toUpperCase()}
================================================================================
Domain: ${course.domain}
Difficulty Level: ${course.level}
Duration: ${course.durationWeeks} Weeks (${course.totalHours} Hours)
Delivery Mode: ${course.deliveryMode}
Technologies Covered: ${course.technologiesCovered.join(', ')}

OVERVIEW:
${course.longDescription}

LEARNING OUTCOMES:
${course.learningOutcomes.map((lo, i) => `${i + 1}. ${lo}`).join('\n')}

PREREQUISITES:
${course.prerequisites.map(p => `• ${p}`).join('\n')}

TARGET AUDIENCE:
${course.targetAudience.map(a => `• ${a}`).join('\n')}

================================================================================
MODULE-WISE SYLLABUS BREAKDOWN:
================================================================================
${course.modules.map(mod => `
MODULE ${mod.moduleNumber}: ${mod.title} (${mod.durationHours} Hours)
Description: ${mod.description}
Key Objectives:
${mod.learningObjectives.map(obj => `  - ${obj}`).join('\n')}
Hands-On Lab: ${mod.handsOnLab || 'Production Architecture Lab'}
`).join('\n')}

================================================================================
CAPSTONE PROJECT SPECIFICATION:
================================================================================
Title: ${course.capstoneProject.title}
Description: ${course.capstoneProject.description}
Deliverables:
${course.capstoneProject.deliverables.map(d => `  • ${d}`).join('\n')}
Tech Stack: ${course.capstoneProject.techStack.join(', ')}

================================================================================
HEADQUARTERS & CONTACT:
NodalBot Technologies, Chennai, Tamil Nadu, India
Email: ${COMPANY_INFO.contact.email} | WhatsApp: ${COMPANY_INFO.contact.whatsapp}
Website: https://nodalbot.com
================================================================================
    `.trim();

    const blob = new Blob([syllabusText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `NodalBot_Syllabus_${course.slug}.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 4000);
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24 text-left">
      <PageBackground variant="courses" />
      
      {/* Breadcrumb Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 pb-6">
        <Link 
          to="/academy" 
          className="inline-flex items-center gap-2 text-xs font-mono text-[#00D2FF] hover:underline"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Academy Courses
        </Link>
      </div>

      {/* Hero Banner for Course */}
      <section className="bg-nodal-navy border-y border-nodal-border py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 Cols */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono">
                <span className="px-3 py-1 rounded-full bg-[#0066FF]/15 text-[#00D2FF] border border-[#0066FF]/30 font-bold uppercase">
                  {course.domain}
                </span>
                <span className="px-3 py-1 rounded-full bg-nodal-surface text-nodal-muted border border-nodal-border">
                  Level: {course.level}
                </span>
                {course.badge && (
                  <span className="px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 font-bold">
                    {course.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nodal-text font-display tracking-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base md:text-lg text-nodal-muted font-sans leading-relaxed">
                {course.shortDescription}
              </p>

              {/* Quick Spec Pills */}
              <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono text-nodal-muted">
                <div className="flex items-center gap-2 bg-nodal-surface px-3.5 py-2 rounded-xl border border-nodal-border">
                  <Clock className="w-4 h-4 text-[#00D2FF]" />
                  <span>Duration: <strong>{course.durationWeeks} Weeks ({course.totalHours}h)</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-nodal-surface px-3.5 py-2 rounded-xl border border-nodal-border">
                  <Calendar className="w-4 h-4 text-[#6366F1]" />
                  <span>Delivery: <strong>{course.deliveryMode}</strong></span>
                </div>
                <div className="flex items-center gap-2 bg-nodal-surface px-3.5 py-2 rounded-xl border border-nodal-border">
                  <Users className="w-4 h-4 text-emerald-400" />
                  <span>Cohort Size: <strong>Max 15 Students</strong></span>
                </div>
              </div>
            </div>

            {/* Right 4 Cols: Quick Actions Card */}
            <div className="lg:col-span-4 p-6 rounded-2xl bg-nodal-surface border-2 border-[#0066FF]/40 shadow-2xl space-y-3.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#00D2FF] font-bold block">
                BATCH ADMISSIONS OPEN
              </span>
              
              <h3 className="text-base font-bold text-nodal-text font-display">
                Ready to Master {course.title.split('&')[0]}?
              </h3>
              
              <p className="text-xs text-nodal-muted font-sans">
                Experience our hands-on cloud labs with a free live demo session before enrolling.
              </p>

              <button
                onClick={() => openModal('free_demo_registration')}
                className="w-full btn-primary py-3 px-4 text-xs uppercase tracking-wider"
              >
                <Sparkles className="w-4 h-4 mr-2" /> Book Free Demo Session
              </button>

              <button
                onClick={handleDownloadSyllabus}
                className="w-full py-2.5 px-4 rounded-xl btn-secondary text-xs flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4 text-[#00D2FF]" /> 
                {downloadSuccess ? 'Syllabus Downloaded!' : 'Download Complete Syllabus (TXT)'}
              </button>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <button
                  onClick={() => openModal('course_enrollment')}
                  className="py-2.5 px-3 rounded-xl bg-[#0066FF]/20 hover:bg-[#0066FF]/35 text-[#00D2FF] text-xs font-semibold border border-[#0066FF]/40 text-center"
                >
                  Enroll Now
                </button>
                <button
                  onClick={handleWhatsApp}
                  className="py-2.5 px-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-xs font-semibold border border-emerald-500/30 flex items-center justify-center gap-1.5"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" /> WhatsApp
                </button>
              </div>

              <div className="text-[10px] font-mono text-nodal-muted text-center pt-2 border-t border-nodal-border">
                1:1 Mentor Code Reviews • Small Cohorts
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left 8 Cols: Syllabus, Outcomes, Capstone */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Detailed Overview */}
              <div>
                <h2 className="text-2xl font-bold text-nodal-text font-display mb-3">
                  Course Overview & Pedagogy
                </h2>
                <p className="text-sm text-nodal-muted leading-relaxed font-sans">
                  {course.longDescription}
                </p>
              </div>

              {/* Learning Outcomes */}
              <div className="p-6 rounded-2xl bg-nodal-surface border border-nodal-border">
                <h3 className="text-lg font-bold text-nodal-text font-display flex items-center gap-2 mb-4">
                  <Target className="w-5 h-5 text-[#00D2FF]" /> What You Will Achieve
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-nodal-muted">
                  {course.learningOutcomes.map((lo, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-nodal-navy border border-nodal-border">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{lo}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* MODULE-WISE SYLLABUS ACCORDION */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-nodal-text font-display">
                    Detailed Module-Wise Syllabus
                  </h2>
                  <button
                    onClick={handleDownloadSyllabus}
                    className="text-xs font-mono text-[#00D2FF] hover:underline flex items-center gap-1 font-semibold"
                  >
                    <Download className="w-3.5 h-3.5" /> Download Full Syllabus
                  </button>
                </div>

                <div className="space-y-3">
                  {course.modules.map((mod) => {
                    const isExpanded = expandedModule === mod.id;
                    return (
                      <div
                        key={mod.id}
                        className="rounded-xl bg-nodal-surface border border-nodal-border overflow-hidden transition-all"
                      >
                        <button
                          onClick={() => setExpandedModule(isExpanded ? null : mod.id)}
                          className="w-full p-4 text-left flex items-center justify-between hover:bg-nodal-card transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <span className="w-7 h-7 rounded-lg bg-[#0066FF]/20 text-[#00D2FF] font-mono text-xs flex items-center justify-center font-bold border border-[#0066FF]/30">
                              0{mod.moduleNumber}
                            </span>
                            <div>
                              <span className="block text-sm font-bold text-white font-sans">
                                {mod.title}
                              </span>
                              <span className="block text-[10px] font-mono text-nodal-muted mt-0.5">
                                {mod.durationHours} Hours • {mod.lessons.length} Core Topics
                              </span>
                            </div>
                          </div>
                          <ChevronDown className={`w-4 h-4 text-nodal-muted transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        </button>

                        {isExpanded && (
                          <div className="p-4 pt-2 border-t border-nodal-border bg-nodal-navy text-xs text-nodal-muted space-y-3 animate-fade-in">
                            <p className="text-nodal-muted leading-relaxed">
                              {mod.description}
                            </p>

                            <div>
                              <span className="font-mono text-[10px] text-[#00D2FF] uppercase font-bold block mb-1">
                                Learning Objectives:
                              </span>
                              <ul className="list-disc pl-4 space-y-1 text-nodal-muted">
                                {mod.learningObjectives.map((obj, i) => (
                                  <li key={i}>{obj}</li>
                                ))}
                              </ul>
                            </div>

                            {mod.handsOnLab && (
                              <div className="p-3 rounded-lg bg-[#0066FF]/10 border border-[#0066FF]/20 text-cyan-200">
                                <strong className="text-[#00D2FF]">Hands-on Lab Exercise:</strong> {mod.handsOnLab}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* INDUSTRIAL CAPSTONE PROJECT */}
              <div className="p-6 sm:p-8 rounded-2xl bg-nodal-surface border-2 border-[#00D2FF]/30 shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-widest">
                  <Sparkles className="w-4 h-4" /> Comprehensive Industrial Capstone
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-nodal-text font-display">
                  {course.capstoneProject.title}
                </h3>

                <p className="text-xs sm:text-sm text-nodal-muted leading-relaxed font-sans">
                  {course.capstoneProject.description}
                </p>

                <div>
                  <span className="text-xs font-mono uppercase text-nodal-muted block mb-2 font-semibold">
                    Key Project Deliverables Built for Your GitHub Portfolio:
                  </span>
                  <ul className="space-y-1.5 text-xs text-nodal-muted">
                    {course.capstoneProject.deliverables.map((del, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1.5 font-bold">
                    Capstone Technologies:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.capstoneProject.techStack.map(t => (
                      <span key={t} className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0066FF]/20 text-[#00D2FF] border border-[#0066FF]/30">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQs */}
              {course.faqs && course.faqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-nodal-text font-display mb-4">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-3">
                    {course.faqs.map((faq, i) => (
                      <div key={i} className="p-5 rounded-xl bg-nodal-surface border border-nodal-border">
                        <h4 className="text-sm font-bold text-nodal-text font-display mb-1.5">
                          {faq.question}
                        </h4>
                        <p className="text-xs text-nodal-muted font-sans leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Right 4 Cols: Prerequisites, Target Audience, Instructor, Batches */}
            <div className="lg:col-span-4 space-y-6">
              
              {/* Upcoming Batches */}
              <div className="p-6 rounded-2xl bg-nodal-surface border border-nodal-border">
                <span className="text-xs font-mono font-bold uppercase text-[#00D2FF] block mb-3">
                  Confirmed Upcoming Schedules
                </span>
                <div className="space-y-3">
                  {course.upcomingBatches.map((b) => (
                    <div key={b.id} className="p-3 rounded-xl bg-nodal-navy border border-nodal-border text-xs space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-white">{b.startDate}</span>
                        <span className="text-[10px] font-mono text-[#00D2FF]">{b.seatsLeft} seats left</span>
                      </div>
                      <span className="block text-nodal-muted">{b.schedule}</span>
                      <span className="block text-[10px] font-mono text-slate-500">{b.timing}</span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={() => openModal('course_enrollment')}
                  className="w-full mt-4 btn-primary text-xs py-2 px-3"
                >
                  Reserve Your Seat
                </button>
              </div>

              {/* Prerequisites & Audience */}
              <div className="p-6 rounded-2xl bg-nodal-surface border border-nodal-border space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-2">
                    Prerequisites:
                  </span>
                  <ul className="space-y-1.5 text-xs text-nodal-muted">
                    {course.prerequisites.map((p, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0066FF] shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-nodal-border">
                  <span className="text-xs font-mono uppercase text-[#A78BFA] font-bold block mb-2">
                    Who Should Attend:
                  </span>
                  <ul className="space-y-1.5 text-xs text-nodal-muted">
                    {course.targetAudience.map((a, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Target className="w-3.5 h-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Instructor Profile */}
              <div className="p-6 rounded-2xl bg-nodal-surface border border-nodal-border space-y-3">
                <span className="text-xs font-mono uppercase text-nodal-muted font-bold block">
                  Lead Technology Instructor
                </span>
                <div className="flex items-center gap-3">
                  <img
                    src={course.instructor.avatarUrl}
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-xl object-cover border border-nodal-border"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-nodal-text font-display">
                      {course.instructor.name}
                    </h4>
                    <span className="text-xs text-[#00D2FF] block">
                      {course.instructor.title}
                    </span>
                  </div>
                </div>
                <p className="text-xs text-nodal-muted leading-relaxed">
                  {course.instructor.experience} • {course.instructor.companyBackground}
                </p>
              </div>

              {/* Direct Enquiry Box */}
              <div className="p-6 rounded-2xl bg-nodal-navy border border-[#0066FF]/30 text-center space-y-3">
                <h4 className="text-sm font-bold text-nodal-text font-display">
                  Have Specific Questions?
                </h4>
                <p className="text-xs text-nodal-muted">
                  Speak directly with our academic advisor or request batch customization.
                </p>
                <button
                  onClick={() => openModal('student_course_enquiry')}
                  className="w-full btn-secondary text-xs py-2.5 px-4"
                >
                  Submit Enquiry
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* Global Lead Modal */}
      <LeadModal
        isOpen={leadModalOpen}
        onClose={() => setLeadModalOpen(false)}
        streamType={modalStreamType}
        initialTopic={course.title}
      />

    </div>
  );
};
