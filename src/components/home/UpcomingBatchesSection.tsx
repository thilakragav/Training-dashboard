import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2, MessageSquare } from 'lucide-react';
import { UPCOMING_BATCHES_DATA, COMPANY_INFO } from '../../data/nodalbotData';
import { BatchSchedule } from '../../types';

interface UpcomingBatchesSectionProps {
  onOpenLeadModal?: (type: string, courseTitle?: string) => void;
}

export const UpcomingBatchesSection: React.FC<UpcomingBatchesSectionProps> = ({ onOpenLeadModal }) => {
  const [filterMode, setFilterMode] = useState<string>('All');

  const filteredBatches = filterMode === 'All'
    ? UPCOMING_BATCHES_DATA
    : UPCOMING_BATCHES_DATA.filter(b => b.mode.toLowerCase().includes(filterMode.toLowerCase()));

  const handleWhatsApp = (courseTitle: string) => {
    const text = encodeURIComponent(`Hello NodalBot Technologies! I would like to enquire about the upcoming batch for: ${courseTitle}. Please share schedule and demo details.`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section className="py-20 bg-nodal-navy relative overflow-hidden border-t border-nodal-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 font-mono text-xs uppercase tracking-widest mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Schedules
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-nodal-text tracking-tight font-display">
              Upcoming Training <span className="text-gradient-electric">Batches & Cohorts</span>
            </h2>
            <p className="mt-2 text-nodal-muted text-sm max-w-xl">
              Small batch sizes (limited to 15 students) to ensure hands-on mentorship, live code debugging, and individual career coaching.
            </p>
          </div>

          {/* Mode Filter */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-nodal-surface border border-nodal-border self-start md:self-auto text-xs font-mono">
            {['All', 'Hybrid', 'Online'].map((mode) => (
              <button
                key={mode}
                onClick={() => setFilterMode(mode)}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  filterMode === mode
                    ? 'bg-[#C56845] text-white font-bold'
                    : 'text-nodal-muted hover:text-white'
                }`}
              >
                {mode === 'All' ? 'All Modes' : mode}
              </button>
            ))}
          </div>
        </div>

        {/* Batches Table / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBatches.map((batch) => (
            <div
              key={batch.id}
              className="p-6 rounded-2xl bg-nodal-card border border-nodal-border hover:border-[#C56845]/40 transition-all shadow-xl hover:shadow-2xl flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider border ${
                    batch.status === 'Filling Fast'
                      ? 'bg-amber-500/15 text-amber-300 border-amber-500/30'
                      : 'bg-emerald-500/15 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {batch.status}
                  </span>
                  <span className="text-[11px] font-mono text-[#C56845] dark:text-[#E5A17D] font-semibold">
                    {batch.seatsLeft} Seats Remaining
                  </span>
                </div>

                <h3 className="text-lg font-bold text-nodal-text font-display group-hover:text-[#C56845] dark:text-[#E5A17D] transition-colors">
                  {batch.courseTitle}
                </h3>

                <div className="mt-4 space-y-2 text-xs text-nodal-muted font-sans">
                  <div className="flex items-center gap-2.5">
                    <Calendar className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Starts: <strong className="text-white">{batch.startDate}</strong></span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{batch.schedule}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <Clock className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="font-mono text-nodal-muted">{batch.timing}</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>Format: <strong className="text-cyan-200">{batch.mode}</strong></span>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-6 pt-4 border-t border-nodal-border space-y-2">
                <button
                  onClick={() => onOpenLeadModal?.('free_demo_registration', batch.courseTitle)}
                  className="w-full py-2.5 px-4 rounded-xl bg-[#C56845] hover:bg-blue-500 text-white text-xs font-bold text-center block shadow-md shadow-blue-600/20 transition-all flex items-center justify-center gap-2"
                >
                  Book Free Demo Session <ArrowRight className="w-3.5 h-3.5" />
                </button>
                
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenLeadModal?.('course_enrollment', batch.courseTitle)}
                    className="w-full py-2 px-3 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] font-semibold text-center border border-slate-700 transition-all"
                  >
                    Enroll Now
                  </button>
                  <button
                    onClick={() => handleWhatsApp(batch.courseTitle)}
                    className="w-full py-2 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 text-[11px] font-semibold text-center border border-emerald-500/30 transition-all flex items-center justify-center gap-1"
                  >
                    <MessageSquare className="w-3 h-3 text-emerald-400" /> WhatsApp
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
