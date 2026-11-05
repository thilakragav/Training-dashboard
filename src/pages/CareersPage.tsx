import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Send, 
  Upload, 
  Sparkles, 
  GraduationCap, 
  Building,
  ShieldCheck,
  X
} from 'lucide-react';
import { CAREER_OPENINGS_DATA, COMPANY_INFO } from '../data/nodalbotData';
import { CareerJob } from '../types';

export const CareersPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<CareerJob | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [resumeNotes, setResumeNotes] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [filterDivision, setFilterDivision] = useState<string>('All');

  const filteredJobs = filterDivision === 'All'
    ? CAREER_OPENINGS_DATA
    : CAREER_OPENINGS_DATA.filter(j => j.division.includes(filterDivision));

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) return;
    setIsSubmitted(true);
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="careers-job" />
      
      {/* Hero */}
      <section className="relative py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Briefcase className="w-3.5 h-3.5" /> Work With NodalBot Technologies
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Build the Future of <span className="text-gradient-electric block mt-1">Tech Education & Software.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Join our multidisciplinary engineering teams in Chennai, India. We are hiring senior instructors, full-stack AI developers, BI architects, and ambitious graduate technology interns.
          </p>
        </div>
      </section>

      {/* Division Filter */}
      <section className="py-6 bg-nodal-navy border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3 overflow-x-auto pb-1 scrollbar-none">
          <span className="text-xs font-mono text-nodal-muted whitespace-nowrap">Filter By Division:</span>
          {['All', 'Academy', 'Digital Solutions', 'Operations'].map((div) => (
            <button
              key={div}
              onClick={() => setFilterDivision(div)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                filterDivision === div
                  ? 'bg-[#0066FF] text-white font-bold shadow-md shadow-[#0066FF]/30 border border-[#00D2FF]/40'
                  : 'bg-nodal-surface text-nodal-muted hover:text-white border border-nodal-border'
              }`}
            >
              {div === 'All' ? 'All Openings' : div}
            </button>
          ))}
        </div>
      </section>

      {/* Main Jobs Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className="p-6 sm:p-8 rounded-3xl bg-nodal-surface border border-nodal-border hover:border-[#0066FF]/50 transition-all shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-xs font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF]/15 text-[#00D2FF] border border-[#0066FF]/30 uppercase font-bold text-[10px]">
                      {job.division}
                    </span>
                    <span className="text-emerald-400 font-semibold">{job.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-nodal-text font-display">
                    {job.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-nodal-muted">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#00D2FF]" /> {job.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-[#A78BFA]" /> {job.experienceRequired}
                    </span>
                  </div>

                  <p className="mt-4 text-xs text-nodal-muted font-sans leading-relaxed">
                    {job.summary}
                  </p>

                  <div className="mt-5">
                    <span className="text-xs font-mono uppercase text-nodal-muted block mb-2 font-semibold">
                      Key Responsibilities:
                    </span>
                    <ul className="space-y-1.5 text-xs text-nodal-muted">
                      {job.responsibilities.slice(0, 3).map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-nodal-border flex items-center justify-between">
                  <button
                    onClick={() => {
                      setSelectedJob(job);
                      setIsSubmitted(false);
                    }}
                    className="btn-primary text-xs py-2 px-5"
                  >
                    Apply for this Role
                  </button>
                  <span className="text-[11px] font-mono text-slate-500">Chennai HQ</span>
                </div>
              </div>
            ))}
          </div>

          {/* Technology Internship Highlight */}
          <div className="mt-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-nodal-surface to-nodal-card border border-[#00D2FF]/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div className="max-w-2xl">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#00D2FF] block mb-1">
                STUDENTS & FRESH GRADUATES
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-nodal-text font-display">
                NodalBot Technology Internship Program
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-nodal-muted font-sans leading-relaxed">
                Work alongside senior data engineers and full-stack AI developers on live client projects. Gain production git history, mentor code reviews, and fast-track employment opportunities.
              </p>
            </div>

            <button
              onClick={() => {
                const internJob = CAREER_OPENINGS_DATA.find(j => j.id === 'job-tech-internship') || CAREER_OPENINGS_DATA[0];
                setSelectedJob(internJob);
                setIsSubmitted(false);
              }}
              className="btn-primary text-xs py-3 px-6 whitespace-nowrap"
            >
              Apply for Internship
            </button>
          </div>

        </div>
      </section>

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-xl bg-nodal-surface border-2 border-[#0066FF]/40 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto text-left">
            
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-nodal-muted hover:text-white bg-nodal-card border border-nodal-border"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-nodal-text font-display">
                  Application Received!
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-nodal-muted max-w-sm mx-auto">
                  Thank you for applying for <strong>{selectedJob.title}</strong>. Our engineering hiring panel will review your profile and reach out within 3 business days.
                </p>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="mt-6 btn-primary text-xs"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <span className="text-[10px] font-mono uppercase text-[#00D2FF] font-bold block mb-1">
                  JOB APPLICATION
                </span>
                <h3 className="text-xl font-bold text-nodal-text font-display pr-8">
                  {selectedJob.title}
                </h3>
                <span className="text-xs font-mono text-nodal-muted block mt-0.5">
                  {selectedJob.division} • {selectedJob.location}
                </span>

                <form onSubmit={handleApplySubmit} className="mt-6 space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g., Ananya Deshmukh"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="ananya@gmail.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 97899 76268"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                      LinkedIn Profile / GitHub / Portfolio URL
                    </label>
                    <input
                      type="url"
                      value={portfolioUrl}
                      onChange={(e) => setPortfolioUrl(e.target.value)}
                      placeholder="https://linkedin.com/in/... or github.com/..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                      Brief Cover Note / Relevant Tech Projects
                    </label>
                    <textarea
                      rows={3}
                      value={resumeNotes}
                      onChange={(e) => setResumeNotes(e.target.value)}
                      placeholder="Highlight your key hands-on skills, tools, or prior achievements..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full btn-primary py-3 px-4 text-xs uppercase tracking-wider"
                    >
                      <Send className="w-3.5 h-3.5 mr-2" /> Submit Application
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>
        </div>
      )}

    </div>
  );
};
