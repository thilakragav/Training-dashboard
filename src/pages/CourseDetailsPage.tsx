import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, 
  Signal, 
  MapPin, 
  Star, 
  CheckCircle2, 
  BookOpen, 
  Layers, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  ArrowRight, 
  MessageSquare, 
  Award, 
  ShieldCheck, 
  HelpCircle, 
  User, 
  Bookmark, 
  BookmarkCheck,
  Check,
  Play,
  FileText
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { Course } from '../types';
import { useLearning } from '../context/LearningContext';
import { useAuth } from '../context/AuthContext';

export const CourseDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { openEnquiryModal, openCounsellingModal, isBookmarked, toggleBookmark, enrollInCourse, enrollments } = useLearning();
  const { isAuthenticated } = useAuth();

  const [course, setCourse] = useState<Course | null>(null);
  const [expandedModules, setExpandedModules] = useState<Record<string, boolean>>({});
  const [expandedFaqs, setExpandedFaqs] = useState<Record<number, boolean>>({});
  const [isEnrolling, setIsEnrolling] = useState(false);

  useEffect(() => {
    if (!id) return;
    const found = COURSES_DATA.find(c => c.id === id || c.slug === id);
    if (found) {
      setCourse(found);
      // Expand first module by default
      if (found.modules.length > 0) {
        setExpandedModules({ [found.modules[0].id]: true });
      }
    }
  }, [id]);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#0B0F19] pt-36 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white">Course Not Found</h2>
        <p className="text-slate-400 text-sm mt-2">The course you are looking for does not exist or has been archived.</p>
        <Link to="/courses" className="mt-4 inline-block px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold">
          Return to Course Catalog
        </Link>
      </div>
    );
  }

  const toggleModule = (modId: string) => {
    setExpandedModules(prev => ({ ...prev, [modId]: !prev[modId] }));
  };

  const toggleFaq = (idx: number) => {
    setExpandedFaqs(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  const isAlreadyEnrolled = enrollments.some(e => e.courseId === course.id);
  const bookmarked = isBookmarked(course.id);

  const handleEnrollNow = async () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    setIsEnrolling(true);
    try {
      await enrollInCourse(course.id);
      navigate('/portal');
    } catch (err) {
      console.error(err);
    } finally {
      setIsEnrolling(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-24 pb-24 text-left">
      
      {/* Top Breadcrumb & Hero */}
      <div className="bg-gradient-to-b from-[#131B2E] to-[#0B0F19] border-b border-slate-800/80 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-slate-400 mb-4">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link to="/courses" className="hover:text-white transition">Courses</Link>
            <span>/</span>
            <span className="text-blue-400 truncate max-w-xs">{course.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left 8 cols: Course Headline & Details */}
            <div className="lg:col-span-8 space-y-4">
              
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  {course.category}
                </span>
                {course.badge && (
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                    {course.badge}
                  </span>
                )}
                <div className="flex items-center gap-1 text-xs text-amber-400 font-bold ml-2">
                  <Star className="w-4 h-4 fill-amber-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400 font-normal">({course.reviewCount} student reviews)</span>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {course.title}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
                {course.longDescription}
              </p>

              {/* Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800/80 text-xs">
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Duration</span>
                  <strong className="text-white text-sm">{course.durationWeeks} Weeks ({course.totalHours} Hrs)</strong>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Skill Level</span>
                  <strong className="text-white text-sm">{course.level}</strong>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Delivery Format</span>
                  <strong className="text-white text-sm">{course.deliveryMode}</strong>
                </div>
                <div className="bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-400 block text-[10px] uppercase font-mono">Alumni Enrolled</span>
                  <strong className="text-white text-sm">{course.enrolledStudentsCount} Students</strong>
                </div>
              </div>

              {/* Highlights */}
              <div className="pt-2">
                <h3 className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest mb-2">
                  Program Highlights
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.highlights.map((hl, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right 4 cols: Sticky Enrollment & Enquiry Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="bg-[#0F172A] border border-blue-500/30 rounded-3xl p-6 shadow-2xl space-y-6">
                
                {/* Price Display */}
                <div>
                  <span className="text-xs text-slate-400">Total Program Investment</span>
                  {course.publishedFee ? (
                    <div className="mt-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-black text-white">
                          ₹{course.publishedFee.totalAmount.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-400">incl. all taxes & labs</span>
                      </div>
                      {course.publishedFee.emiStartsAt && (
                        <p className="text-xs text-emerald-400 font-semibold mt-1">
                          No-Cost EMI starts at ₹{course.publishedFee.emiStartsAt.toLocaleString('en-IN')}/month
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="text-xl font-bold text-white mt-1">Fee on Academic Consultation</div>
                  )}
                </div>

                {/* Primary Enrollment Action */}
                <div className="space-y-3">
                  {isAlreadyEnrolled ? (
                    <Link
                      to="/portal"
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-sm text-center block transition shadow-lg shadow-emerald-600/25"
                    >
                      Already Enrolled • Continue in Portal →
                    </Link>
                  ) : (
                    <button
                      onClick={handleEnrollNow}
                      disabled={isEnrolling}
                      className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold text-sm shadow-xl shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-50"
                    >
                      {isEnrolling ? 'Processing Enrollment...' : 'Enroll in Program Now'}
                    </button>
                  )}

                  <button
                    onClick={() => openEnquiryModal(course)}
                    className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-600 rounded-xl font-semibold text-xs transition flex items-center justify-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4 text-blue-400" />
                    <span>Download Brochure & Enquire</span>
                  </button>
                </div>

                {/* Upcoming Next Batch */}
                {course.upcomingBatches.length > 0 && (
                  <div className="p-3.5 bg-slate-900/80 border border-slate-800 rounded-xl text-xs space-y-1.5">
                    <span className="text-[10px] uppercase font-mono font-bold text-blue-400">Next Upcoming Batch</span>
                    <div className="flex items-center justify-between text-slate-200">
                      <strong>{course.upcomingBatches[0].startDate}</strong>
                      <span className="text-amber-400 font-semibold font-mono text-[11px]">
                        Only {course.upcomingBatches[0].seatsLeft} seats left
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400">{course.upcomingBatches[0].schedule}</p>
                  </div>
                )}

                {/* Assurance points */}
                <div className="space-y-2 text-xs text-slate-400 pt-2 border-t border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    <span>7-Day Full Refund Guarantee</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-400" />
                    <span>Verifiable Course Certificate with QR Code</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-violet-400" />
                    <span>Weekly 1:1 Live Mentor Review</span>
                  </div>
                </div>

                {/* Bookmark trigger */}
                <button
                  onClick={() => toggleBookmark(course.id)}
                  className="w-full py-2 text-xs text-slate-400 hover:text-white flex items-center justify-center gap-1.5 transition"
                >
                  {bookmarked ? (
                    <>
                      <BookmarkCheck className="w-4 h-4 text-blue-400 fill-blue-400" />
                      <span>Bookmarked in your profile</span>
                    </>
                  ) : (
                    <>
                      <Bookmark className="w-4 h-4" />
                      <span>Save course for later</span>
                    </>
                  )}
                </button>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Main Course Details Content Tabs/Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          <div className="lg:col-span-8 space-y-12">
            
            {/* Section: Learning Objectives */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" /> What You Will Master
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {course.learningOutcomes.map((outcome, idx) => (
                  <div key={idx} className="p-4 bg-[#0F172A] border border-slate-800 rounded-2xl flex items-start gap-3">
                    <span className="w-6 h-6 rounded-lg bg-emerald-500/10 text-emerald-400 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                      ✓
                    </span>
                    <span className="text-xs text-slate-300 leading-relaxed">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Section: Detailed Module-by-Module Expandable Syllabus */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-blue-400" /> Comprehensive Curriculum Syllabus
                  </h2>
                  <p className="text-xs text-slate-400 mt-1">
                    {course.modules.length} Modules • {course.modules.flatMap(m => m.lessons).length} In-Depth Lessons • Expand modules to view topics
                  </p>
                </div>
                <button
                  onClick={() => {
                    const allOpen = Object.keys(expandedModules).length === course.modules.length;
                    if (allOpen) {
                      setExpandedModules({});
                    } else {
                      const all: Record<string, boolean> = {};
                      course.modules.forEach(m => all[m.id] = true);
                      setExpandedModules(all);
                    }
                  }}
                  className="text-xs text-blue-400 hover:text-blue-300 font-semibold"
                >
                  {Object.keys(expandedModules).length === course.modules.length ? 'Collapse All' : 'Expand All'}
                </button>
              </div>

              {/* Accordion Module List */}
              <div className="space-y-3">
                {course.modules.map((module) => {
                  const isExpanded = expandedModules[module.id];

                  return (
                    <div
                      key={module.id}
                      className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden transition"
                    >
                      <button
                        onClick={() => toggleModule(module.id)}
                        className="w-full p-5 text-left flex items-center justify-between hover:bg-slate-900/60 transition"
                      >
                        <div className="flex items-center gap-4">
                          <span className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-xs font-mono">
                            0{module.moduleNumber}
                          </span>
                          <div>
                            <h3 className="text-sm sm:text-base font-bold text-white">{module.title}</h3>
                            <span className="text-xs text-slate-400">{module.durationHours} Hours • {module.lessons.length} Lessons</span>
                          </div>
                        </div>
                        {isExpanded ? <ChevronUp className="w-5 h-5 text-slate-400" /> : <ChevronDown className="w-5 h-5 text-slate-400" />}
                      </button>

                      {isExpanded && (
                        <div className="px-5 pb-5 pt-2 border-t border-slate-800/80 space-y-4 animate-fadeIn">
                          <p className="text-xs text-slate-300 leading-relaxed">
                            {module.description}
                          </p>

                          {/* Lessons list */}
                          <div className="space-y-2">
                            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider font-mono">
                              Lessons & Labs in Module {module.moduleNumber}:
                            </span>
                            {module.lessons.map(les => (
                              <div
                                key={les.id}
                                className="p-3 bg-slate-900/80 rounded-xl border border-slate-800/80 flex items-center justify-between text-xs"
                              >
                                <div className="flex items-center gap-2.5">
                                  {les.type === 'video' && <Play className="w-3.5 h-3.5 text-blue-400" />}
                                  {les.type === 'code-lab' && <Layers className="w-3.5 h-3.5 text-cyan-400" />}
                                  {les.type === 'reading' && <FileText className="w-3.5 h-3.5 text-violet-400" />}
                                  {les.type === 'quiz' && <HelpCircle className="w-3.5 h-3.5 text-amber-400" />}
                                  <span className="text-slate-200">{les.title}</span>
                                </div>
                                <span className="text-slate-500 font-mono text-[11px]">{les.durationMinutes} min</span>
                              </div>
                            ))}
                          </div>

                          {/* Hands-on Lab box */}
                          <div className="p-3.5 bg-blue-950/20 border border-blue-500/20 rounded-xl text-xs text-blue-300">
                            <strong>Hands-On Lab:</strong> {module.handsOnLab}
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Section: Capstone Project Spotlight */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Layers className="w-5 h-5 text-violet-400" /> Flagship Capstone Project Spotlight
              </h2>
              <div className="bg-[#0F172A] border border-violet-500/20 rounded-3xl p-6 sm:p-8 space-y-4">
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                  Industrial Capstone
                </span>
                <h3 className="text-xl font-bold text-white">{course.capstoneProject.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {course.capstoneProject.description}
                </p>

                <div>
                  <span className="text-xs font-semibold text-slate-300 block mb-2">Key Deliverables:</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-400">
                    {course.capstoneProject.deliverables.map((d, idx) => (
                      <div key={idx} className="flex items-start gap-2 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-xs font-semibold text-slate-400 block mb-2">Capstone Tech Stack:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {course.capstoneProject.techStack.map(t => (
                      <span key={t} className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-300">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Section: Target Audience & Prerequisites */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-base font-bold text-white">Who This Course Is For</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {course.targetAudience.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-blue-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-3">
                <h3 className="text-base font-bold text-white">Prerequisites Check</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {course.prerequisites.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-amber-400 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Section: Lead Faculty Instructor */}
            <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
              <h3 className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Lead Program Instructor
              </h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
                <img
                  src={course.instructor.avatarUrl}
                  alt={course.instructor.name}
                  className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/30"
                />
                <div>
                  <h4 className="text-lg font-bold text-white">{course.instructor.name}</h4>
                  <p className="text-xs text-blue-400 font-medium">{course.instructor.title}</p>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">{course.instructor.experience} • {course.instructor.companyBackground}</p>
                </div>
              </div>
            </div>

            {/* Section: Frequently Asked Questions (FAQ) */}
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-amber-400" /> Frequently Asked Questions
              </h2>
              <div className="space-y-2">
                {course.faqs.map((faq, idx) => {
                  const isOpen = expandedFaqs[idx];
                  return (
                    <div key={idx} className="bg-[#0F172A] border border-slate-800 rounded-2xl overflow-hidden">
                      <button
                        onClick={() => toggleFaq(idx)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-slate-900/60 transition"
                      >
                        <span className="text-sm font-semibold text-white">{faq.question}</span>
                        {isOpen ? <ChevronUp className="w-4 h-4 text-slate-400" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
                      </button>
                      {isOpen && (
                        <div className="px-4 pb-4 pt-1 text-xs text-slate-300 leading-relaxed border-t border-slate-800/80 animate-fadeIn">
                          {faq.answer}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Enquire Banner */}
            <div className="p-8 bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="text-xl font-bold text-white">Have questions about syllabus pacing?</h3>
                <p className="text-xs text-slate-300 mt-1">Book a free 1-on-1 session with our lead faculty before making a decision.</p>
              </div>
              <div className="flex items-center gap-3">
                <button
                  onClick={openCounsellingModal}
                  className="px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
                >
                  Book 1:1 Discussion
                </button>
                <button
                  onClick={() => openEnquiryModal(course)}
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
                >
                  Enquire Now
                </button>
              </div>
            </div>

          </div>

          <div className="hidden lg:block lg:col-span-4" />

        </div>
      </div>

    </div>
  );
};
