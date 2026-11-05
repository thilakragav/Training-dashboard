import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  GraduationCap, 
  BookOpen, 
  Users, 
  Award, 
  CheckCircle2, 
  Send, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Sparkles,
  Building
} from 'lucide-react';
import { COLLEGE_PARTNERSHIP_PROGRAMS, COMPANY_INFO } from '../data/nodalbotData';
import { LeadModal } from '../components/modals/LeadModal';

export const CollegeTrainingPage: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('College Partnership MOU');

  const openCollegeModal = (topic: string = '') => {
    setSelectedTopic(topic || 'Institutional Academic Partnership');
    setModalOpen(true);
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="college" />
      
      {/* Hero */}
      <section className="relative py-20 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[600px] h-[250px] bg-[#6366F1]/15 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#6366F1]/10 border border-[#6366F1]/30 text-[#A78BFA] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <GraduationCap className="w-3.5 h-3.5" /> Higher Education Partnerships & University MOU Programs
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Bridge Academic Learning <span className="text-gradient-electric block mt-1">With Industry Technology.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Partner with NodalBot Technologies to elevate student campus placements, deliver Faculty Development Programs (FDP), guide authentic final-year engineering capstones, and run hands-on technology bootcamps.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openCollegeModal('Institutional Partnership MOU Enquiry')}
              className="btn-solutions py-3.5 px-7 text-xs uppercase tracking-wider"
            >
              <Send className="w-4 h-4 mr-2" /> Partner With NodalBot
            </button>
            <a
              href="#programs"
              className="btn-secondary text-xs"
            >
              Explore Academic Programs
            </a>
          </div>

          {/* Quick Metrics */}
          <div className="mt-12 pt-8 border-t border-nodal-border grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div>
              <span className="block text-2xl font-black text-white font-sans">FDP Excellence</span>
              <span className="text-xs text-nodal-muted font-mono">Faculty Skill Upgrades</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#00D2FF] font-sans">Zero Plagiarism</span>
              <span className="text-xs text-nodal-muted font-mono">Original Capstone Projects</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-[#A78BFA] font-sans">Tier-1 Placements</span>
              <span className="text-xs text-nodal-muted font-mono">Industry Ready Portfolios</span>
            </div>
            <div>
              <span className="block text-2xl font-black text-white font-sans">MOU Framework</span>
              <span className="text-xs text-nodal-muted font-mono">Formal Academic MoU</span>
            </div>
          </div>

        </div>
      </section>

      {/* 12 Academic Programs Portfolio */}
      <section id="programs" className="py-20 bg-nodal-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A78BFA] block mb-2">
              INSTITUTIONAL COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text font-display">
              Comprehensive Academic Programs
            </h2>
            <p className="mt-2 text-nodal-muted text-sm">
              Customized workshops and bootcamps for engineering colleges, arts & science colleges, and universities across India.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COLLEGE_PARTNERSHIP_PROGRAMS.map((prog) => (
              <div
                key={prog.id}
                className="p-6 sm:p-7 rounded-2xl bg-nodal-surface border border-[#6366F1]/25 hover:border-[#8B5CF6] transition-all shadow-xl flex flex-col justify-between text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-[#6366F1]/15 text-[#A78BFA] border border-[#6366F1]/30 font-bold uppercase truncate max-w-[200px]">
                      {prog.targetYear}
                    </span>
                    <span className="text-nodal-muted whitespace-nowrap">
                      {prog.format}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-nodal-text font-display">
                    {prog.title}
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {prog.topicsCovered.map((topic, i) => (
                      <span key={i} className="px-2 py-0.5 rounded-md bg-nodal-navy border border-nodal-border text-[11px] text-nodal-muted font-mono">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-nodal-navy border border-nodal-border text-xs text-nodal-muted">
                    <strong className="text-[#00D2FF]">Institutional Impact:</strong> {prog.institutionalBenefits[0]}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-nodal-border flex items-center justify-between">
                  <button
                    onClick={() => openCollegeModal(prog.title)}
                    className="text-xs font-bold text-[#A78BFA] hover:underline flex items-center gap-1"
                  >
                    Partner on This Program →
                  </button>
                  <span className="text-[10px] font-mono text-slate-500">MOU Backed</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* College MOU Proposal Section */}
      <section className="py-20 bg-nodal-bg border-t border-nodal-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="p-8 sm:p-12 rounded-3xl bg-nodal-surface border-2 border-[#6366F1]/40 shadow-2xl space-y-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#A78BFA] block">
              ACADEMIC ALLIANCE DESK
            </span>

            <h2 className="text-2xl sm:text-4xl font-black text-nodal-text font-display">
              Sign an Institutional MOU With NodalBot Technologies
            </h2>

            <p className="text-sm text-nodal-muted font-sans max-w-2xl mx-auto leading-relaxed">
              We collaborate with college principals, department heads, and training coordinators to structure structured semester bootcamps, guest lectures, hackathons, and placement enhancement.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => openCollegeModal('Institutional MOU Partnership')}
                className="w-full sm:w-auto btn-solutions py-3.5 px-8 text-xs"
              >
                <Send className="w-4 h-4 mr-2" /> Submit Institutional MOU Request
              </button>
              <a
                href={`mailto:${COMPANY_INFO.contact.corporateEmail || COMPANY_INFO.contact.email}`}
                className="w-full sm:w-auto btn-secondary text-xs"
              >
                Contact Academic Lead
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Lead Modal */}
      <LeadModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        streamType="college_partnership"
        initialTopic={selectedTopic}
      />

    </div>
  );
};
