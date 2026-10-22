import React, { useState, useEffect } from 'react';
import { 
  ShieldAlert, 
  BookOpen, 
  Users, 
  MessageSquare, 
  Calendar, 
  TrendingUp, 
  Plus, 
  Edit3, 
  Archive, 
  CheckCircle2, 
  AlertCircle,
  Bell,
  Search,
  Filter
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { Course, EnquirySubmission, Workshop, User } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { UPCOMING_WORKSHOPS } from '../data/workshopsData';
import { Link } from 'react-router-dom';

export const AdminPortalPage: React.FC = () => {
  const { user, isAdmin, switchToDemoAdmin, switchToDemoStudent } = useAuth();

  const [activeTab, setActiveTab] = useState<'overview' | 'courses' | 'enquiries' | 'workshops'>('overview');
  const [courses, setCourses] = useState<Course[]>(COURSES_DATA);
  const [enquiries, setEnquiries] = useState<EnquirySubmission[]>([]);
  const [workshops, setWorkshops] = useState<Workshop[]>(UPCOMING_WORKSHOPS);

  // Status update message
  const [feedbackMessage, setFeedbackMessage] = useState('');

  useEffect(() => {
    const loadAdminData = async () => {
      const enqs = await api.getEnquiries();
      setEnquiries(enqs);
    };
    loadAdminData();
  }, []);

  const handleUpdateEnquiryStatus = async (enquiryId: string, status: EnquirySubmission['status']) => {
    await api.updateEnquiryStatus(enquiryId, status);
    setEnquiries(prev => prev.map(e => e.id === enquiryId ? { ...e, status } : e));
    setFeedbackMessage(`Enquiry ${enquiryId} updated to status: ${status}`);
    setTimeout(() => setFeedbackMessage(''), 3000);
  };

  // If user is not an admin, show a friendly role-switcher warning
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0B0F19] pt-36 pb-20 flex items-center justify-center px-4 text-left">
        <div className="w-full max-w-lg bg-[#0F172A] border border-amber-500/30 rounded-3xl p-8 shadow-2xl space-y-5 text-center">
          <div className="w-16 h-16 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center mx-auto">
            <ShieldAlert className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-white">Administrator Access Required</h2>
          <p className="text-xs text-slate-300 leading-relaxed max-w-sm mx-auto">
            You are currently signed in as a student (<strong className="text-white">{user?.fullName || 'Guest'}</strong>). 
            Administrator routes and operations are protected from ordinary student accounts.
          </p>
          <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-xs text-slate-400">
            Click below to instantly switch into the <strong>Demo Administrator Role</strong> (Dr. Vikramaditya Sen).
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={switchToDemoAdmin}
              className="px-6 py-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs rounded-xl transition"
            >
              Switch to Demo Admin
            </button>
            <Link
              to="/portal"
              className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold rounded-xl transition"
            >
              Return to Student Portal
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Analytics Stats
  const totalEnquiries = enquiries.length;
  const newLeads = enquiries.filter(e => e.status === 'NEW').length;
  const totalWorkshopSeats = workshops.reduce((acc, w) => acc + w.seatsRegistered, 0);

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="bg-[#0F172A] border border-amber-500/30 rounded-3xl p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xl">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 uppercase tracking-wider">
                Admin Control Panel
              </span>
              <span className="text-xs text-slate-400">• Role: Principal Administrator</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-white mt-1">
              Academic Operations Management
            </h1>
            <p className="text-xs text-slate-400 mt-0.5">
              Logged in as {user?.fullName} ({user?.email})
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={switchToDemoStudent}
              className="px-3.5 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-medium transition"
            >
              Switch to Student View
            </button>
          </div>
        </div>

        {feedbackMessage && (
          <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-xl text-xs flex items-center gap-2 animate-fadeIn">
            <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
            <span>{feedbackMessage}</span>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'overview' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Overview & Metrics
          </button>
          <button
            onClick={() => setActiveTab('enquiries')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${
              activeTab === 'enquiries' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            <span>Enquiries & CRM</span>
            {newLeads > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                {newLeads}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'courses' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Course Curriculum ({courses.length})
          </button>
          <button
            onClick={() => setActiveTab('workshops')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
              activeTab === 'workshops' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'
            }`}
          >
            Workshops & Batches
          </button>
        </div>

        {/* --- OVERVIEW TAB --- */}
        {activeTab === 'overview' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-1">
                <span className="text-slate-400 text-xs">Total Active Programs</span>
                <p className="text-3xl font-black text-white font-mono">{courses.length}</p>
                <span className="text-[11px] text-emerald-400 font-medium">8 Verified Syllabi</span>
              </div>
              <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-1">
                <span className="text-slate-400 text-xs">Admissions Enquiries</span>
                <p className="text-3xl font-black text-cyan-400 font-mono">{totalEnquiries}</p>
                <span className="text-[11px] text-rose-400 font-semibold">{newLeads} New Needs Followup</span>
              </div>
              <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-1">
                <span className="text-slate-400 text-xs">Workshop Registrations</span>
                <p className="text-3xl font-black text-amber-400 font-mono">{totalWorkshopSeats}</p>
                <span className="text-[11px] text-slate-400">Across 3 live sessions</span>
              </div>
              <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-1">
                <span className="text-slate-400 text-xs">Active Enrolled Cohort</span>
                <p className="text-3xl font-black text-emerald-400 font-mono">1,490</p>
                <span className="text-[11px] text-slate-400">Current Academic Term</span>
              </div>
            </div>

            {/* Recent Enquiries Preview */}
            <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-white">Recent Student Inquiries</h3>
                <button onClick={() => setActiveTab('enquiries')} className="text-xs text-blue-400 hover:underline">
                  View Full CRM →
                </button>
              </div>

              <div className="space-y-2">
                {enquiries.slice(0, 3).map((enq) => (
                  <div key={enq.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between text-xs">
                    <div>
                      <strong className="text-white">{enq.fullName}</strong>
                      <span className="text-slate-400 ml-2">({enq.email} • {enq.phone})</span>
                      <p className="text-slate-400 text-[11px] mt-0.5">Program: {enq.courseInterest}</p>
                    </div>
                    <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                      enq.status === 'NEW' ? 'bg-rose-500/20 text-rose-300' : 'bg-emerald-500/20 text-emerald-300'
                    }`}>
                      {enq.status}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* --- ENQUIRIES CRM TAB --- */}
        {activeTab === 'enquiries' && (
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Admissions & Counselling Leads CRM</h2>
                <p className="text-xs text-slate-400 mt-1">Review student requests and update pipeline status.</p>
              </div>
              <span className="text-xs text-slate-400 font-mono">{enquiries.length} Total Submissions</span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-800 text-slate-400 font-mono">
                    <th className="pb-3 font-semibold">Name</th>
                    <th className="pb-3 font-semibold">Contact</th>
                    <th className="pb-3 font-semibold">Program Interest</th>
                    <th className="pb-3 font-semibold">Background</th>
                    <th className="pb-3 font-semibold">Status</th>
                    <th className="pb-3 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/80">
                  {enquiries.map((enq) => (
                    <tr key={enq.id} className="hover:bg-slate-900/40">
                      <td className="py-3 font-bold text-white whitespace-nowrap">{enq.fullName}</td>
                      <td className="py-3 text-slate-300 whitespace-nowrap">
                        <div>{enq.phone}</div>
                        <div className="text-[11px] text-slate-500">{enq.email}</div>
                      </td>
                      <td className="py-3 text-blue-300 max-w-xs truncate">{enq.courseInterest}</td>
                      <td className="py-3 text-slate-400">{enq.qualification}</td>
                      <td className="py-3">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${
                          enq.status === 'NEW' ? 'bg-rose-500/20 text-rose-300' :
                          enq.status === 'CONTACTED' ? 'bg-amber-500/20 text-amber-300' :
                          enq.status === 'ENROLLED' ? 'bg-emerald-500/20 text-emerald-300' :
                          'bg-slate-800 text-slate-400'
                        }`}>
                          {enq.status}
                        </span>
                      </td>
                      <td className="py-3 text-right">
                        <div className="inline-flex gap-1.5">
                          <button
                            onClick={() => handleUpdateEnquiryStatus(enq.id!, 'CONTACTED')}
                            className="px-2 py-1 bg-amber-500/15 hover:bg-amber-500/25 text-amber-300 rounded text-[10px] font-medium transition"
                          >
                            Mark Contacted
                          </button>
                          <button
                            onClick={() => handleUpdateEnquiryStatus(enq.id!, 'ENROLLED')}
                            className="px-2 py-1 bg-emerald-500/15 hover:bg-emerald-500/25 text-emerald-300 rounded text-[10px] font-medium transition"
                          >
                            Mark Enrolled
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* --- COURSES MANAGEMENT TAB --- */}
        {activeTab === 'courses' && (
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Course Syllabus Catalog Management</h2>
                <p className="text-xs text-slate-400 mt-1">Manage modules, published fees, and delivery schedules.</p>
              </div>
              <button
                onClick={() => alert('New course template initialized! (In full production, this opens the Course Creator Wizard)')}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold flex items-center gap-1.5 transition"
              >
                <Plus className="w-4 h-4" />
                <span>Create New Program</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {courses.map((c) => (
                <div key={c.id} className="p-4 bg-slate-900 border border-slate-800 rounded-2xl flex items-start justify-between gap-4">
                  <div>
                    <span className="text-[10px] font-semibold text-blue-400 uppercase tracking-wider font-mono">
                      {c.category}
                    </span>
                    <h3 className="text-sm font-bold text-white mt-0.5">{c.title}</h3>
                    <p className="text-xs text-slate-400 mt-1">{c.modules.length} Modules • {c.durationWeeks} Weeks</p>
                    <p className="text-xs font-bold text-emerald-400 mt-1">₹{c.publishedFee?.totalAmount.toLocaleString('en-IN')}</p>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <Link
                      to={`/course/${c.slug}`}
                      className="px-2.5 py-1 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded text-[11px] text-center"
                    >
                      View Live
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* --- WORKSHOPS TAB --- */}
        {activeTab === 'workshops' && (
          <div className="bg-[#0F172A] border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <div>
                <h2 className="text-xl font-bold text-white">Upcoming Masterclasses & Workshops</h2>
                <p className="text-xs text-slate-400 mt-1">Track attendee registrations and Zoom link dispatches.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workshops.map(w => (
                <div key={w.id} className="p-5 bg-slate-900 border border-slate-800 rounded-2xl space-y-3">
                  <h3 className="text-sm font-bold text-white">{w.title}</h3>
                  <p className="text-xs text-slate-400">{w.date} • {w.time}</p>
                  <div className="pt-2">
                    <div className="flex items-center justify-between text-xs text-slate-300 mb-1">
                      <span>Registered Attendees:</span>
                      <strong className="font-mono text-cyan-400">{w.seatsRegistered} / {w.seatsTotal}</strong>
                    </div>
                    <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${(w.seatsRegistered / w.seatsTotal) * 100}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
