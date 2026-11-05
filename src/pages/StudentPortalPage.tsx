import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Flame, 
  BookOpen, 
  Play, 
  Clock, 
  Award, 
  CheckCircle2, 
  Calendar, 
  Bell, 
  Bookmark, 
  ArrowRight,
  TrendingUp,
  FileCheck,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useLearning } from '../context/LearningContext';
import { api } from '../services/api';
import { Notification } from '../types';
import { COURSES_DATA } from '../data/coursesData';

export const StudentPortalPage: React.FC = () => {
  const { user } = useAuth();
  const { enrollments, bookmarks } = useLearning();

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    setNotifications(api.getNotifications());
  }, []);

  const savedCoursesList = COURSES_DATA.filter(c => bookmarks.includes(c.id));

  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Welcome Header & Gamification Streak */}
        <div className="bg-gradient-to-r from-nodal-navy via-nodal-surface to-nodal-card border border-nodal-border rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-2xl">
          <div className="flex items-center gap-4">
            <img 
              src={user?.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'} 
              alt={user?.fullName} 
              className="w-16 h-16 rounded-2xl object-cover border-2 border-nodal-blue/40 shadow-lg"
            />
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-nodal-cyan uppercase tracking-widest">
                  Active Student Workspace
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-bold">
                  Enrolled Active
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Welcome back, {user?.fullName}!
              </h1>
              <p className="text-xs text-nodal-muted mt-0.5">
                Keep up the momentum. You are on track for your next project milestone review.
              </p>
            </div>
          </div>

          {/* Gamification Streak & Stats */}
          <div className="flex items-center gap-3">
            <div className="px-4 py-2.5 bg-nodal-card border border-amber-500/30 rounded-2xl flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
                <Flame className="w-5 h-5 fill-amber-400" />
              </div>
              <div>
                <span className="text-lg font-black text-white font-mono">{user?.streakDays || 6} Days</span>
                <span className="text-[10px] text-amber-300 block font-semibold uppercase tracking-wider">Learning Streak</span>
              </div>
            </div>

            <Link
              to="/portal/certificates"
              className="px-4 py-2.5 bg-nodal-blue/20 hover:bg-nodal-blue/30 border border-nodal-blue/30 rounded-2xl flex items-center gap-2 transition"
            >
              <Award className="w-5 h-5 text-nodal-cyan" />
              <div>
                <span className="text-xs font-bold text-white block">Certificates</span>
                <span className="text-[10px] text-nodal-cyan font-medium">1 Verifiable</span>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Grid: Enrolled Courses & Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left 8 Cols: Enrolled Programs & Active Learning */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-nodal-cyan" /> My Enrolled Programs
              </h2>
              <Link to="/academy" className="text-xs text-nodal-cyan hover:underline">
                Explore More Programs →
              </Link>
            </div>

            {enrollments.length > 0 ? (
              <div className="space-y-4">
                {enrollments.map((enr) => {
                  const courseData = COURSES_DATA.find(c => c.id === enr.courseId);
                  const isCompleted = enr.completionPercentage >= 100;

                  return (
                    <div
                      key={enr.id}
                      className="bg-nodal-card border border-nodal-border hover:border-nodal-blue/40 rounded-3xl p-6 transition shadow-xl space-y-4"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-nodal-blue/15 text-nodal-cyan">
                            {enr.courseCategory}
                          </span>
                          <h3 className="text-lg font-bold text-white mt-1.5">{enr.courseTitle}</h3>
                        </div>

                        <span className={`px-3 py-1 rounded-xl text-xs font-semibold self-start sm:self-auto ${
                          isCompleted 
                            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
                            : 'bg-nodal-blue/20 text-nodal-cyan border border-nodal-blue/30'
                        }`}>
                          {isCompleted ? 'Completed 100%' : `${enr.completionPercentage}% Completed`}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs text-nodal-muted">
                          <span>Syllabus Completion</span>
                          <span className="font-mono text-white font-bold">{enr.completionPercentage}%</span>
                        </div>
                        <div className="w-full h-2.5 bg-nodal-navy rounded-full overflow-hidden border border-nodal-border">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${
                              isCompleted 
                                ? 'bg-gradient-to-r from-emerald-500 to-teal-400' 
                                : 'bg-gradient-to-r from-nodal-blue via-nodal-violet to-nodal-cyan'
                            }`}
                            style={{ width: `${enr.completionPercentage}%` }}
                          />
                        </div>
                      </div>

                      {/* Bottom Action Row */}
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <div className="text-xs text-nodal-muted flex items-center gap-2">
                          <Clock className="w-3.5 h-3.5 text-nodal-cyan" />
                          <span>Last lesson completed: {enr.completedLessonIds.length} lessons finished</span>
                        </div>

                        <div className="flex items-center gap-2 w-full sm:w-auto">
                          {isCompleted && (
                            <Link
                              to="/portal/certificates"
                              className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 border border-emerald-500/30 rounded-xl text-xs font-semibold transition"
                            >
                              View Certificate
                            </Link>
                          )}
                          <Link
                            to={`/portal/learn/${enr.courseId}`}
                            className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-nodal-blue hover:bg-nodal-blue/90 text-white rounded-xl text-xs font-semibold shadow-md shadow-nodal-blue/25 transition"
                          >
                            <Play className="w-3.5 h-3.5 fill-white" />
                            <span>Continue Learning</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /* Empty State */
              <div className="bg-nodal-card border border-nodal-border rounded-3xl p-8 text-center space-y-4">
                <div className="w-12 h-12 bg-nodal-navy text-nodal-muted rounded-full flex items-center justify-center mx-auto">
                  <BookOpen className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white">You have not enrolled in any programs yet</h3>
                <p className="text-xs text-nodal-muted max-w-sm mx-auto">
                  Explore our industry tracks to start building production-ready projects under faculty supervision.
                </p>
                <Link
                  to="/academy"
                  className="inline-block px-5 py-2.5 bg-nodal-blue hover:bg-nodal-blue/90 text-white rounded-xl text-xs font-semibold transition"
                >
                  Explore Course Catalog
                </Link>
              </div>
            )}

            {/* Upcoming Live Classes & Mentoring */}
            <div className="bg-nodal-card border border-nodal-border rounded-3xl p-6 space-y-4">
              <h3 className="text-base font-bold text-white flex items-center gap-2">
                <Calendar className="w-4 h-4 text-nodal-violet" /> Upcoming Live Classes & Office Hours
              </h3>
              
              <div className="space-y-3 text-xs">
                <div className="p-3.5 bg-nodal-navy border border-nodal-border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-nodal-violet">Tomorrow • 6:00 PM IST</span>
                    <h4 className="font-bold text-white">1:1 Code Review: RAG Vector DB Chunking Edge Cases</h4>
                    <p className="text-nodal-muted">Mentor: Ananya Deshmukh (Google Meet)</p>
                  </div>
                  <a 
                    href="https://meet.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 bg-nodal-violet hover:bg-nodal-violet/90 text-white rounded-lg font-semibold transition text-center"
                  >
                    Join Room
                  </a>
                </div>

                <div className="p-3.5 bg-nodal-navy border border-nodal-border rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono font-bold text-nodal-cyan">Saturday • 10:00 AM IST</span>
                    <h4 className="font-bold text-white">Live Batch Session: PyTorch ResNet-50 Fine-Tuning Lab</h4>
                    <p className="text-nodal-muted">Instructor: Dr. Vikramaditya Sen</p>
                  </div>
                  <span className="px-3 py-1 bg-nodal-surface text-nodal-muted border border-nodal-border rounded-lg text-[11px] text-center">
                    Upcoming
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right 4 Cols: Notifications & Saved Courses */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* Notifications Box */}
            <div className="bg-nodal-card border border-nodal-border rounded-3xl p-6 space-y-4">
              <div className="flex items-center justify-between border-b border-nodal-border pb-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <Bell className="w-4 h-4 text-nodal-cyan" /> Notifications & Alerts
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-nodal-blue/20 text-nodal-cyan">
                  {notifications.filter(n => !n.read).length} New
                </span>
              </div>

              <div className="space-y-3">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-3 rounded-xl border text-xs space-y-1 ${
                      notif.read ? 'bg-nodal-navy/40 border-nodal-border/60 text-nodal-muted' : 'bg-nodal-navy border-nodal-blue/30 text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <strong className="text-white text-xs">{notif.title}</strong>
                      <span className="text-[10px] text-nodal-muted">{notif.timestamp}</span>
                    </div>
                    <p className="text-[11px] leading-relaxed text-nodal-muted">{notif.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Bookmarks Box */}
            <div className="bg-nodal-card border border-nodal-border rounded-3xl p-6 space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-amber-400" /> Saved Programs ({savedCoursesList.length})
              </h3>

              {savedCoursesList.length > 0 ? (
                <div className="space-y-2">
                  {savedCoursesList.map((c) => (
                    <Link
                      key={c.id}
                      to={`/course/${c.slug}`}
                      className="p-3 bg-nodal-navy hover:bg-nodal-surface border border-nodal-border rounded-xl flex items-center justify-between text-xs group transition"
                    >
                      <div>
                        <p className="font-bold text-white group-hover:text-nodal-cyan line-clamp-1">{c.title}</p>
                        <p className="text-[10px] text-nodal-muted">{c.level} • {c.durationWeeks} Wks</p>
                      </div>
                      <ChevronRight className="w-4 h-4 text-nodal-muted group-hover:text-nodal-cyan transition" />
                    </Link>
                  ))}
                </div>
              ) : (
                <p className="text-xs text-nodal-muted leading-relaxed">
                  No courses bookmarked yet. Click the bookmark icon on any course card to save for later review.
                </p>
              )}
            </div>

            {/* Verifiable Credentials CTA Box */}
            <div className="p-6 bg-gradient-to-br from-nodal-navy to-nodal-card border border-nodal-border rounded-3xl space-y-3">
              <Award className="w-8 h-8 text-nodal-cyan" />
              <h4 className="text-sm font-bold text-white">Verifiable Blockchain & QR Certificates</h4>
              <p className="text-xs text-nodal-muted leading-relaxed">
                Completed programs generate a unique cryptographic ID and public verification page for prospective recruiters.
              </p>
              <Link
                to="/portal/certificates"
                className="inline-block px-4 py-2 bg-nodal-blue hover:bg-nodal-blue/90 text-white rounded-xl text-xs font-semibold transition"
              >
                Access My Certificates →
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
