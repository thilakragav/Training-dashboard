import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Play, 
  CheckCircle2, 
  Circle, 
  ChevronLeft, 
  ChevronRight, 
  FileText, 
  Download, 
  Code2, 
  Layers, 
  BookOpen, 
  Check, 
  Award,
  Sparkles,
  ArrowLeft
} from 'lucide-react';
import { COURSES_DATA } from '../data/coursesData';
import { useLearning } from '../context/LearningContext';
import { Course, CourseModule, Lesson } from '../types';

export const StudentLearnPage: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const { enrollments, toggleLessonCompleted, isLessonCompleted } = useLearning();

  const [course, setCourse] = useState<Course | null>(null);
  const [currentModule, setCurrentModule] = useState<CourseModule | null>(null);
  const [currentLesson, setCurrentLesson] = useState<Lesson | null>(null);
  const [activeTab, setActiveTab] = useState<'video' | 'notes' | 'code'>('video');

  useEffect(() => {
    if (!courseId) return;
    const found = COURSES_DATA.find(c => c.id === courseId || c.slug === courseId);
    if (found) {
      setCourse(found);
      if (found.modules.length > 0) {
        setCurrentModule(found.modules[0]);
        if (found.modules[0].lessons.length > 0) {
          setCurrentLesson(found.modules[0].lessons[0]);
        }
      }
    }
  }, [courseId]);

  if (!course || !currentModule || !currentLesson) {
    return (
      <div className="min-h-screen bg-nodal-bg pt-36 text-center text-white">
        <p>Loading course modules...</p>
      </div>
    );
  }

  const enrollment = enrollments.find(e => e.courseId === course.id);
  const completed = isLessonCompleted(course.id, currentLesson.id);

  // Flatten all lessons to enable Next/Prev buttons
  const allLessons = course.modules.flatMap(m => m.lessons.map(l => ({ ...l, moduleId: m.id })));
  const currentLessonIndex = allLessons.findIndex(l => l.id === currentLesson.id);

  const handleNextLesson = () => {
    if (currentLessonIndex < allLessons.length - 1) {
      const nextL = allLessons[currentLessonIndex + 1];
      const nextMod = course.modules.find(m => m.id === nextL.moduleId);
      if (nextMod) setCurrentModule(nextMod);
      setCurrentLesson(nextL);
    }
  };

  const handlePrevLesson = () => {
    if (currentLessonIndex > 0) {
      const prevL = allLessons[currentLessonIndex - 1];
      const prevMod = course.modules.find(m => m.id === prevL.moduleId);
      if (prevMod) setCurrentModule(prevMod);
      setCurrentLesson(prevL);
    }
  };

  return (
    <div className="min-h-screen bg-nodal-bg pt-20 flex flex-col text-left">
      
      {/* Top Classroom Bar */}
      <div className="bg-nodal-navy border-b border-nodal-border px-4 sm:px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to="/portal"
            className="p-1.5 text-nodal-muted hover:text-white rounded-lg hover:bg-nodal-surface transition"
          >
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div>
            <h1 className="text-xs sm:text-sm font-bold text-white line-clamp-1">{course.title}</h1>
            <span className="text-[10px] text-nodal-muted font-mono">
              Module {currentModule.moduleNumber}: {currentModule.title}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          {enrollment && (
            <div className="hidden sm:flex items-center gap-2 text-xs">
              <span className="text-nodal-muted">Progress:</span>
              <span className="font-mono font-bold text-emerald-400">{enrollment.completionPercentage}%</span>
              <div className="w-16 h-1.5 bg-nodal-surface rounded-full overflow-hidden">
                <div 
                  className="h-full bg-emerald-500 rounded-full" 
                  style={{ width: `${enrollment.completionPercentage}%` }} 
                />
              </div>
            </div>
          )}

          <button
            onClick={() => toggleLessonCompleted(course.id, currentLesson.id, !completed)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
              completed
                ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                : 'bg-nodal-blue hover:bg-nodal-blue/90 text-white shadow-md shadow-nodal-blue/25'
            }`}
          >
            {completed ? <Check className="w-3.5 h-3.5" /> : <Circle className="w-3.5 h-3.5" />}
            <span>{completed ? 'Lesson Completed' : 'Mark as Complete'}</span>
          </button>
        </div>
      </div>

      {/* Classroom Split View */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        
        {/* Left: Main Content Player & Tabs (8 cols) */}
        <div className="flex-1 p-4 sm:p-6 lg:p-8 overflow-y-auto space-y-6">
          
          {/* Active Lesson Header */}
          <div className="flex items-center justify-between pb-4 border-b border-nodal-border">
            <div>
              <span className="text-xs font-mono font-bold text-nodal-cyan uppercase tracking-widest">
                Lesson {currentLessonIndex + 1} of {allLessons.length}
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white mt-1">
                {currentLesson.title}
              </h2>
            </div>
            <span className="text-xs text-nodal-muted font-mono px-2.5 py-1 bg-nodal-surface rounded-lg border border-nodal-border">
              {currentLesson.durationMinutes} Minutes
            </span>
          </div>

          {/* Media Player Simulation */}
          <div className="relative rounded-2xl overflow-hidden bg-nodal-navy border border-nodal-border shadow-2xl aspect-video max-h-[460px] flex items-center justify-center group">
            <img
              src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80"
              alt="Lesson Cover"
              className="w-full h-full object-cover opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            
            <div className="absolute text-center space-y-3 z-10 px-4">
              <button 
                onClick={() => toggleLessonCompleted(course.id, currentLesson.id, true)}
                className="w-16 h-16 rounded-full bg-nodal-blue hover:bg-nodal-blue/90 text-white flex items-center justify-center mx-auto shadow-2xl shadow-nodal-blue/50 transform group-hover:scale-110 transition duration-300"
                aria-label="Play lesson video"
              >
                <Play className="w-8 h-8 fill-white ml-1" />
              </button>
              <h3 className="text-lg font-bold text-white drop-shadow">
                {currentLesson.title}
              </h3>
              <p className="text-xs text-nodal-muted max-w-md mx-auto">
                Interactive video lecture recorded with live terminal demonstrations and instructor voiceover.
              </p>
            </div>
          </div>

          {/* Lesson Content Tabs */}
          <div className="bg-nodal-surface border border-nodal-border rounded-2xl p-6 space-y-4">
            <div className="flex flex-wrap items-center gap-2 border-b border-nodal-border pb-3">
              <button
                onClick={() => setActiveTab('video')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'video' ? 'bg-nodal-blue text-white' : 'text-nodal-muted hover:text-white'
                }`}
              >
                Lecture Summary
              </button>
              <button
                onClick={() => setActiveTab('notes')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'notes' ? 'bg-nodal-blue text-white' : 'text-nodal-muted hover:text-white'
                }`}
              >
                Cheatsheet & Notes
              </button>
              <button
                onClick={() => setActiveTab('code')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === 'code' ? 'bg-nodal-blue text-white' : 'text-nodal-muted hover:text-white'
                }`}
              >
                Starter Code Snippet
              </button>
            </div>

            {activeTab === 'video' && (
              <div className="text-xs text-nodal-muted leading-relaxed space-y-3 animate-fadeIn">
                <p>
                  In this session, you explore the internal mechanics of <strong>{currentLesson.title}</strong>. Follow along with the instructor in your cloud sandbox environment.
                </p>
                <div className="p-3.5 bg-nodal-card border border-nodal-border rounded-xl space-y-1.5">
                  <span className="font-bold text-white text-xs block">Key takeaways from this module:</span>
                  <ul className="space-y-1 text-nodal-muted list-disc list-inside">
                    <li>Proper architecture patterns and prevention of runtime memory leakage</li>
                    <li>Structuring unit tests and asserting boundary conditions</li>
                    <li>Deploying changes safely to the staging cluster</li>
                  </ul>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="text-xs text-nodal-muted space-y-3 animate-fadeIn">
                <p>Quick reference documentation and terminal commands for {currentLesson.title}:</p>
                <div className="p-3 bg-nodal-bg rounded-xl border border-nodal-border font-mono text-nodal-cyan text-xs">
                  # Terminal Initialization<br/>
                  git checkout -b feature/module-{currentModule.moduleNumber}-lab<br/>
                  npm install && npm test -- --watch
                </div>
              </div>
            )}

            {activeTab === 'code' && (
              <div className="space-y-2 animate-fadeIn">
                <span className="text-xs font-mono text-nodal-muted">starter_template.ts</span>
                <div className="p-4 bg-nodal-bg rounded-xl border border-nodal-border font-mono text-xs text-nodal-cyan overflow-x-auto">
                  <pre>{`// NodalBot Academy - Module ${currentModule.moduleNumber}
export async function executePipeline(inputDataset: Record<string, any>) {
  console.log("Initializing ${currentLesson.title}...");
  // Implement assignment logic here
  return { status: "SUCCESS", timestamp: new Date().toISOString() };
}`}</pre>
                </div>
              </div>
            )}
          </div>

          {/* Navigation Controls: Previous / Next */}
          <div className="flex items-center justify-between pt-4 border-t border-nodal-border">
            <button
              onClick={handlePrevLesson}
              disabled={currentLessonIndex === 0}
              className="px-4 py-2 bg-nodal-surface hover:bg-nodal-card disabled:opacity-30 text-nodal-text rounded-xl text-xs font-semibold border border-nodal-border transition flex items-center gap-1.5"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Lesson</span>
            </button>

            <button
              onClick={handleNextLesson}
              disabled={currentLessonIndex === allLessons.length - 1}
              className="px-4 py-2 bg-nodal-blue hover:bg-nodal-blue/90 disabled:opacity-30 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
            >
              <span>Next Lesson</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Right Sidebar: Module & Lesson Directory (4 cols) */}
        <div className="w-full lg:w-96 bg-nodal-surface border-t lg:border-t-0 lg:border-l border-nodal-border p-5 overflow-y-auto space-y-6">
          <div className="flex items-center justify-between border-b border-nodal-border pb-3">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-nodal-cyan" /> Syllabus Navigator
            </h3>
            <span className="text-[10px] font-mono text-nodal-muted">{allLessons.length} Total Lessons</span>
          </div>

          <div className="space-y-4">
            {course.modules.map((mod) => (
              <div key={mod.id} className="space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-nodal-muted bg-nodal-card p-2.5 rounded-xl border border-nodal-border">
                  <span className="truncate">Mod 0{mod.moduleNumber}: {mod.title}</span>
                  <span className="text-[10px] text-nodal-muted font-mono flex-shrink-0 ml-2">{mod.lessons.length}</span>
                </div>

                <div className="space-y-1 pl-2">
                  {mod.lessons.map((les) => {
                    const isCurrent = currentLesson.id === les.id;
                    const isDone = isLessonCompleted(course.id, les.id);

                    return (
                      <button
                        key={les.id}
                        onClick={() => {
                          setCurrentModule(mod);
                          setCurrentLesson(les);
                        }}
                        className={`w-full p-2.5 rounded-xl text-left text-xs transition flex items-center justify-between ${
                          isCurrent
                            ? 'bg-nodal-blue text-white font-semibold shadow-md'
                            : 'text-nodal-muted hover:text-white hover:bg-nodal-card'
                        }`}
                      >
                        <div className="flex items-center gap-2 truncate">
                          {isDone ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          ) : (
                            <Circle className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" />
                          )}
                          <span className="truncate">{les.title}</span>
                        </div>
                        <span className={`text-[10px] font-mono flex-shrink-0 ml-2 ${isCurrent ? 'text-blue-100' : 'text-nodal-muted'}`}>
                          {les.durationMinutes}m
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Certificate unlock notification */}
          {enrollment && enrollment.completionPercentage === 100 && (
            <div className="p-4 bg-emerald-950/40 border border-emerald-500/30 rounded-2xl text-xs space-y-2 text-center animate-fadeIn">
              <Award className="w-8 h-8 text-emerald-400 mx-auto" />
              <h4 className="font-bold text-white">Course 100% Completed!</h4>
              <p className="text-nodal-muted">Your verifiable certificate has been issued and signed by faculty.</p>
              <Link
                to="/portal/certificates"
                className="w-full inline-block py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-semibold transition"
              >
                View Credential
              </Link>
            </div>
          )}
        </div>

      </div>

    </div>
  );
};
