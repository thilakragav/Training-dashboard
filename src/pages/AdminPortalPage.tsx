import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Users, 
  Calendar, 
  BookOpen, 
  Download, 
  Search, 
  Filter, 
  CheckCircle2, 
  Clock, 
  Trash2, 
  Plus, 
  RefreshCw,
  Building,
  GraduationCap,
  Briefcase,
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { apiService } from '../services/api';
import { UPCOMING_BATCHES_DATA, COURSES_MASTER_CATALOG, COMPANY_INFO } from '../data/nodalbotData';
import { LeadSubmission, BatchSchedule } from '../types';

export const AdminPortalPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'leads' | 'batches' | 'courses' | 'settings'>('leads');
  const [leads, setLeads] = useState<any[]>([]);
  const [batches, setBatches] = useState<BatchSchedule[]>(UPCOMING_BATCHES_DATA);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedTypeFilter, setSelectedTypeFilter] = useState('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');

  // New batch modal state
  const [newBatchModal, setNewBatchModal] = useState(false);
  const [newBatchCourseId, setNewBatchCourseId] = useState(COURSES_MASTER_CATALOG[0].id);
  const [newBatchDate, setNewBatchDate] = useState('Dec 15, 2026');
  const [newBatchSchedule, setNewBatchSchedule] = useState('Sat & Sun (10:00 AM – 1:30 PM)');
  const [newBatchSeats, setNewBatchSeats] = useState(12);
  const [newBatchMode, setNewBatchMode] = useState<'Live Online' | 'Hybrid (Classroom + Online)' | 'Classroom'>('Live Online');

  useEffect(() => {
    loadLeads();
  }, []);

  const loadLeads = async () => {
    setIsLoading(true);
    try {
      const data = await apiService.getEnquiries();
      setLeads(data);
    } catch (err) {
      console.error('Failed to load leads:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStatusChange = async (leadId: string, newStatus: string) => {
    try {
      await apiService.updateEnquiryStatus(leadId, newStatus);
      setLeads(prev => prev.map(l => l.id === leadId ? { ...l, status: newStatus } : l));
    } catch (err) {
      console.error('Failed to update status:', err);
    }
  };

  const handleDeleteLead = async (leadId: string) => {
    if (!confirm('Are you sure you want to delete this enquiry record?')) return;
    try {
      await apiService.deleteEnquiry(leadId);
      setLeads(prev => prev.filter(l => l.id !== leadId));
    } catch (err) {
      console.error('Failed to delete lead:', err);
    }
  };

  const handleExportCSV = () => {
    if (leads.length === 0) {
      alert('No leads to export.');
      return;
    }

    const headers = ['ID', 'Type', 'Full Name', 'Email', 'Phone', 'Company/College', 'Topic/Course', 'Preferred Mode', 'Status', 'Date'];
    const rows = leads.map(l => [
      l.id,
      l.type,
      `"${l.fullName || ''}"`,
      l.email,
      `"${l.phone || ''}"`,
      `"${l.companyOrInstitution || ''}"`,
      `"${l.interestedTopicOrService || ''}"`,
      `"${l.preferredMode || ''}"`,
      l.status || 'NEW',
      l.createdAt || ''
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `NodalBot_Leads_Export_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCreateBatch = (e: React.FormEvent) => {
    e.preventDefault();
    const selCourse = COURSES_MASTER_CATALOG.find(c => c.id === newBatchCourseId) || COURSES_MASTER_CATALOG[0];
    const newSchedule: BatchSchedule = {
      id: `batch-${Date.now()}`,
      courseId: selCourse.id,
      courseTitle: selCourse.title,
      startDate: newBatchDate,
      schedule: newBatchSchedule,
      seatsLeft: Number(newBatchSeats),
      mode: newBatchMode,
      timing: 'As per cohort schedule',
      status: 'Open'
    };

    setBatches(prev => [newSchedule, ...prev]);
    setNewBatchModal(false);
  };

  // Filtered leads
  const filteredLeads = leads.filter((l) => {
    if (selectedTypeFilter !== 'ALL' && l.type !== selectedTypeFilter) return false;
    if (selectedStatusFilter !== 'ALL' && (l.status || 'NEW') !== selectedStatusFilter) return false;
    if (searchTerm.trim()) {
      const q = searchTerm.toLowerCase();
      const matchName = (l.fullName || '').toLowerCase().includes(q);
      const matchEmail = (l.email || '').toLowerCase().includes(q);
      const matchTopic = (l.interestedTopicOrService || '').toLowerCase().includes(q);
      if (!matchName && !matchEmail && !matchTopic) return false;
    }
    return true;
  });

  return (
    <div className="bg-nodal-bg min-h-screen text-nodal-text pt-28 pb-24">
      
      {/* Top Banner */}
      <section className="bg-nodal-navy border-b border-nodal-border py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-nodal-blue/20 border border-nodal-blue/30 flex items-center justify-center text-nodal-cyan">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-nodal-text font-display">
                NodalBot Technologies — Admin & CMS Console
              </h1>
              <span className="text-xs font-mono text-nodal-muted">
                Lead Pipeline • Cohort Management • System Telemetry
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleExportCSV}
              className="px-4 py-2 rounded-xl bg-nodal-surface hover:bg-nodal-card text-nodal-text text-xs font-semibold border border-nodal-border flex items-center gap-1.5 transition-all"
            >
              <Download className="w-4 h-4 text-nodal-cyan" /> Export CSV
            </button>
            <button
              onClick={loadLeads}
              className="px-3 py-2 rounded-xl bg-nodal-blue/20 hover:bg-nodal-blue/30 text-nodal-cyan text-xs font-mono flex items-center gap-1 border border-nodal-blue/30"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            </button>
          </div>
        </div>
      </section>

      {/* Summary KPI Cards */}
      <section className="py-8 bg-nodal-surface/40 border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-2xl bg-nodal-card border border-nodal-border">
            <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1">Total System Inquiries</span>
            <span className="text-2xl font-black text-white font-sans">{leads.length}</span>
            <span className="text-[10px] text-nodal-cyan font-mono block mt-1">9 Lead Streams Active</span>
          </div>

          <div className="p-4 rounded-2xl bg-nodal-card border border-nodal-border">
            <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1">Enterprise RFPs</span>
            <span className="text-2xl font-black text-nodal-violet font-sans">
              {leads.filter(l => l.type === 'corporate_training_rfp' || l.type === 'software_project_consultation').length}
            </span>
            <span className="text-[10px] text-nodal-muted font-mono block mt-1">High-Value Opportunities</span>
          </div>

          <div className="p-4 rounded-2xl bg-nodal-card border border-nodal-border">
            <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1">Live Active Batches</span>
            <span className="text-2xl font-black text-nodal-cyan font-sans">{batches.length}</span>
            <span className="text-[10px] text-emerald-400 font-mono block mt-1">Admissions In Progress</span>
          </div>

          <div className="p-4 rounded-2xl bg-nodal-card border border-nodal-border">
            <span className="text-[10px] font-mono uppercase text-nodal-muted block mb-1">Response Target SLA</span>
            <span className="text-2xl font-black text-emerald-400 font-sans">&lt; 2 Hours</span>
            <span className="text-[10px] text-nodal-muted font-mono block mt-1">Chennai Desk Verified</span>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="py-6 border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('leads')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-2 ${
              activeTab === 'leads'
                ? 'bg-nodal-blue text-white shadow-md shadow-nodal-blue/30'
                : 'bg-nodal-card text-nodal-muted hover:text-white border border-nodal-border'
            }`}
          >
            <Users className="w-4 h-4" /> Inquiries & Leads ({leads.length})
          </button>

          <button
            onClick={() => setActiveTab('batches')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-2 ${
              activeTab === 'batches'
                ? 'bg-nodal-blue text-white shadow-md shadow-nodal-blue/30'
                : 'bg-nodal-card text-nodal-muted hover:text-white border border-nodal-border'
            }`}
          >
            <Calendar className="w-4 h-4" /> Cohort Batch Scheduler ({batches.length})
          </button>

          <button
            onClick={() => setActiveTab('courses')}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold font-sans transition-all flex items-center gap-2 ${
              activeTab === 'courses'
                ? 'bg-nodal-blue text-white shadow-md shadow-nodal-blue/30'
                : 'bg-nodal-card text-nodal-muted hover:text-white border border-nodal-border'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Course Catalog ({COURSES_MASTER_CATALOG.length})
          </button>
        </div>
      </section>

      {/* Tab 1: Leads & Enquiries Management */}
      {activeTab === 'leads' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            {/* Filter Bar */}
            <div className="p-4 rounded-2xl bg-nodal-card border border-nodal-border flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 text-xs">
              
              <div className="relative flex-1 max-w-sm">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-nodal-muted" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Filter by name, email, or course..."
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-nodal-navy border border-nodal-border text-white placeholder:text-nodal-muted focus:outline-none focus:border-nodal-cyan text-xs"
                />
              </div>

              <div className="flex flex-wrap items-center gap-2">
                <select
                  value={selectedTypeFilter}
                  onChange={(e) => setSelectedTypeFilter(e.target.value)}
                  className="bg-nodal-navy text-white px-3 py-2 rounded-xl border border-nodal-border focus:outline-none cursor-pointer"
                >
                  <option value="ALL">All Inquiry Streams</option>
                  <option value="student_course_enquiry">Student Course Enquiry</option>
                  <option value="free_demo_registration">Free Demo Registration</option>
                  <option value="course_enrollment">Fast-Track Enrollment</option>
                  <option value="corporate_training_rfp">Corporate Training RFP</option>
                  <option value="college_partnership">College Partnership</option>
                  <option value="software_project_consultation">Software Project Consultation</option>
                  <option value="newsletter_subscription">Newsletter Subscription</option>
                </select>

                <select
                  value={selectedStatusFilter}
                  onChange={(e) => setSelectedStatusFilter(e.target.value)}
                  className="bg-nodal-navy text-white px-3 py-2 rounded-xl border border-nodal-border focus:outline-none cursor-pointer"
                >
                  <option value="ALL">All Statuses</option>
                  <option value="NEW">NEW</option>
                  <option value="CONTACTED">CONTACTED</option>
                  <option value="QUALIFIED">QUALIFIED</option>
                  <option value="PROPOSAL_SENT">PROPOSAL_SENT</option>
                  <option value="ENROLLED">ENROLLED</option>
                  <option value="CLOSED">CLOSED</option>
                </select>
              </div>

            </div>

            {/* Mobile Scroll Indicator */}
            <div className="md:hidden text-[11px] font-mono text-nodal-muted flex items-center justify-between px-1">
              <span>Showing {filteredLeads.length} records</span>
              <span>↔ Swipe table horizontally</span>
            </div>

            {/* Leads Table */}
            <div className="bg-nodal-card rounded-2xl border border-nodal-border overflow-hidden shadow-xl">
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs min-w-[700px]">
                  <thead className="bg-nodal-navy text-nodal-muted font-mono border-b border-nodal-border uppercase tracking-wider text-[10px]">
                    <tr>
                      <th className="p-3.5">Name / Contact</th>
                      <th className="p-3.5">Stream / Category</th>
                      <th className="p-3.5">Topic / Requirement</th>
                      <th className="p-3.5">Company / College</th>
                      <th className="p-3.5">Status</th>
                      <th className="p-3.5">Created At</th>
                      <th className="p-3.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-nodal-border text-nodal-muted">
                    {filteredLeads.length === 0 ? (
                      <tr>
                        <td colSpan={7} className="p-8 text-center text-nodal-muted font-mono">
                          No enquiry records found matching your filters.
                        </td>
                      </tr>
                    ) : (
                      filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-nodal-surface/80 transition-colors">
                          <td className="p-3.5">
                            <span className="block font-bold text-white font-sans">{lead.fullName}</span>
                            <span className="block text-nodal-muted font-mono text-[11px]">{lead.email}</span>
                            <span className="block text-nodal-cyan font-mono text-[11px]">{lead.phone}</span>
                          </td>
                          <td className="p-3.5">
                            <span className="inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-nodal-blue/15 text-nodal-cyan border border-nodal-blue/30 uppercase">
                              {(lead.type || 'ENQUIRY').replace(/_/g, ' ')}
                            </span>
                          </td>
                          <td className="p-3.5 max-w-xs">
                            <span className="block font-semibold text-white truncate">
                              {lead.interestedTopicOrService}
                            </span>
                            {lead.notesOrRequirements && (
                              <span className="block text-[11px] text-nodal-muted line-clamp-1 mt-0.5">
                                {lead.notesOrRequirements}
                              </span>
                            )}
                          </td>
                          <td className="p-3.5">
                            <span className="text-nodal-muted">
                              {lead.companyOrInstitution || '—'}
                            </span>
                          </td>
                          <td className="p-3.5">
                            <select
                              value={lead.status || 'NEW'}
                              onChange={(e) => handleStatusChange(lead.id, e.target.value)}
                              className={`px-2 py-1 rounded text-[10px] font-mono font-bold uppercase cursor-pointer border ${
                                (lead.status || 'NEW') === 'NEW'
                                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                                  : (lead.status || 'NEW') === 'ENROLLED'
                                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                                  : 'bg-nodal-blue/20 text-nodal-cyan border-nodal-blue/40'
                              }`}
                            >
                              <option value="NEW" className="bg-nodal-card">NEW</option>
                              <option value="CONTACTED" className="bg-nodal-card">CONTACTED</option>
                              <option value="QUALIFIED" className="bg-nodal-card">QUALIFIED</option>
                              <option value="PROPOSAL_SENT" className="bg-nodal-card">PROPOSAL_SENT</option>
                              <option value="ENROLLED" className="bg-nodal-card">ENROLLED</option>
                              <option value="CLOSED" className="bg-nodal-card">CLOSED</option>
                            </select>
                          </td>
                          <td className="p-3.5 font-mono text-[11px] text-nodal-muted">
                            {lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Today'}
                          </td>
                          <td className="p-3.5 text-right">
                            <button
                              onClick={() => handleDeleteLead(lead.id)}
                              className="p-1.5 text-nodal-muted hover:text-red-400 rounded-lg hover:bg-red-500/10 transition-colors"
                              title="Delete Record"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </section>
      )}

      {/* Tab 2: Batch Scheduler */}
      {activeTab === 'batches' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-nodal-text font-display">Active Upcoming Batches</h3>
                <span className="text-xs text-nodal-muted">Database-managed cohort dates reflected across the entire public website.</span>
              </div>
              <button
                onClick={() => setNewBatchModal(true)}
                className="px-4 py-2 rounded-xl bg-nodal-blue hover:bg-nodal-blue/90 text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-nodal-blue/30 self-start sm:self-auto"
              >
                <Plus className="w-4 h-4" /> Schedule New Batch
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {batches.map((batch) => (
                <div key={batch.id} className="p-6 rounded-2xl bg-nodal-card border border-nodal-border space-y-3">
                  <div className="flex items-center justify-between text-[10px] font-mono">
                    <span className="px-2 py-0.5 rounded bg-nodal-blue/15 text-nodal-cyan font-bold uppercase">
                      {batch.status}
                    </span>
                    <span className="text-nodal-muted">{batch.seatsLeft} Seats Left</span>
                  </div>

                  <h4 className="text-base font-bold text-nodal-text font-display">
                    {batch.courseTitle}
                  </h4>

                  <div className="text-xs text-nodal-muted space-y-1 font-mono">
                    <div>Start: <strong className="text-white">{batch.startDate}</strong></div>
                    <div>Schedule: {batch.schedule}</div>
                    <div>Delivery: {batch.mode}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* Tab 3: Courses Manager */}
      {activeTab === 'courses' && (
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-bold text-nodal-text font-display">Master Course Directory</h3>
                <span className="text-xs text-nodal-muted">All registered NodalBot Academy curricula and module outlines.</span>
              </div>
              <Link
                to="/academy"
                className="text-xs font-mono text-nodal-cyan hover:text-[#C56845] dark:text-[#E5A17D] flex items-center gap-1 font-bold self-start sm:self-auto"
              >
                Open Public Catalog <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {COURSES_MASTER_CATALOG.map((course) => (
                <div key={course.id} className="p-6 rounded-2xl bg-nodal-card border border-nodal-border flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-nodal-cyan uppercase font-bold block mb-1">
                      {course.domain} • {course.level}
                    </span>
                    <h4 className="text-lg font-bold text-nodal-text font-display">{course.title}</h4>
                    <p className="text-xs text-nodal-muted mt-2 line-clamp-2">{course.shortDescription}</p>
                    <div className="mt-3 text-[11px] font-mono text-nodal-muted">
                      {course.durationWeeks} Weeks • {course.totalHours} Hours • {course.modules.length} Modules
                    </div>
                  </div>
                  <div className="mt-4 pt-3 border-t border-nodal-border flex items-center justify-between text-xs">
                    <Link to={`/course/${course.slug}`} className="text-nodal-cyan font-semibold hover:underline">
                      View Syllabus Page →
                    </Link>
                    <span className="text-emerald-400 text-[10px] font-mono font-bold">STATUS: PUBLISHED</span>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      )}

      {/* New Batch Modal */}
      {newBatchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-nodal-card border border-nodal-blue/40 rounded-2xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto shadow-2xl space-y-4">
            <h3 className="text-lg font-bold text-nodal-text font-display">Schedule New Training Cohort</h3>
            
            <form onSubmit={handleCreateBatch} className="space-y-3 text-xs">
              <div>
                <label className="block font-mono text-nodal-muted mb-1">Select Program:</label>
                <select
                  value={newBatchCourseId}
                  onChange={(e) => setNewBatchCourseId(e.target.value)}
                  className="w-full p-2.5 rounded-xl bg-nodal-navy border border-nodal-border text-white"
                >
                  {COURSES_MASTER_CATALOG.map(c => (
                    <option key={c.id} value={c.id}>{c.title}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-mono text-nodal-muted mb-1">Start Date:</label>
                <input
                  type="text"
                  required
                  value={newBatchDate}
                  onChange={(e) => setNewBatchDate(e.target.value)}
                  placeholder="e.g., Dec 15, 2026"
                  className="w-full p-2.5 rounded-xl bg-nodal-navy border border-nodal-border text-white"
                />
              </div>

              <div>
                <label className="block font-mono text-nodal-muted mb-1">Weekly Schedule Timing:</label>
                <input
                  type="text"
                  required
                  value={newBatchSchedule}
                  onChange={(e) => setNewBatchSchedule(e.target.value)}
                  placeholder="e.g., Sat & Sun (10:00 AM – 1:30 PM IST)"
                  className="w-full p-2.5 rounded-xl bg-nodal-navy border border-nodal-border text-white"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block font-mono text-nodal-muted mb-1">Available Seats:</label>
                  <input
                    type="number"
                    min="1"
                    max="30"
                    value={newBatchSeats}
                    onChange={(e) => setNewBatchSeats(Number(e.target.value))}
                    className="w-full p-2.5 rounded-xl bg-nodal-navy border border-nodal-border text-white"
                  />
                </div>
                <div>
                  <label className="block font-mono text-nodal-muted mb-1">Mode:</label>
                  <select
                    value={newBatchMode}
                    onChange={(e) => setNewBatchMode(e.target.value as any)}
                    className="w-full p-2.5 rounded-xl bg-nodal-navy border border-nodal-border text-white"
                  >
                    <option value="Live Online">Live Online</option>
                    <option value="Hybrid (Classroom + Online)">Hybrid</option>
                    <option value="Classroom">Classroom</option>
                  </select>
                </div>
              </div>

              <div className="pt-3 flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-nodal-blue hover:bg-nodal-blue/90 text-white font-bold text-xs transition"
                >
                  Confirm & Publish Batch
                </button>
                <button
                  type="button"
                  onClick={() => setNewBatchModal(false)}
                  className="px-4 py-2.5 rounded-xl bg-nodal-surface text-nodal-muted hover:text-white border border-nodal-border text-xs transition"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
};
