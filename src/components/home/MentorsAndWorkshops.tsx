import React from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  GraduationCap, 
  MessageSquare,
  ShieldCheck
} from 'lucide-react';
import { FACULTY_MENTORS, UPCOMING_WORKSHOPS } from '../../data/workshopsData';
import { useLearning } from '../../context/LearningContext';

export const MentorsAndWorkshops: React.FC = () => {
  const { openWorkshopModal, openCounsellingModal } = useLearning();

  return (
    <section id="mentors-workshops" className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>Senior Industry Faculty</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Learn From <span className="text-gradient">Practitioners, Not Lecturers</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Direct mentorship, architectural reviews, and live pair programming from senior engineers who build production systems at scale.
          </p>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          {FACULTY_MENTORS.map((mentor) => (
            <div
              key={mentor.id}
              className="bg-[#0F172A] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-blue-950/30 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="relative mb-4">
                  <img
                    src={mentor.avatarUrl}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-2xl object-cover border-2 border-blue-500/30 shadow-md shadow-blue-500/10"
                  />
                  <span className="absolute bottom-0 right-0 px-2 py-0.5 rounded-md bg-blue-600 text-[10px] font-bold text-white font-mono">
                    {mentor.experienceYears}+ Yrs
                  </span>
                </div>

                <h3 className="text-base font-bold text-white">{mentor.name}</h3>
                <p className="text-xs text-blue-400 font-medium">{mentor.role}</p>
                <p className="text-[11px] text-slate-400 mt-1 font-mono">{mentor.companyBackground}</p>

                <p className="text-xs text-slate-400 mt-3 line-clamp-3 leading-relaxed">
                  {mentor.bio}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                <div className="text-[11px] text-slate-400">
                  <span className="text-slate-500 block">Weekly Office Hours:</span>
                  <span className="font-semibold text-slate-300">{mentor.officeHours}</span>
                </div>
                <button
                  onClick={openCounsellingModal}
                  className="w-full mt-2 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition"
                >
                  Book 1:1 Discussion
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Live Workshops Box */}
        <div className="bg-[#131B2E] border border-cyan-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl text-left">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between pb-6 border-b border-slate-800 gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Upcoming Open Masterclasses
              </span>
              <h3 className="text-2xl font-bold text-white mt-1">
                Free Weekend Coding Workshops & Architecture Clinics
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Zero-cost 2-hour technical deep dives. Attend live on Zoom, participate in Q&A, and receive starter repositories.
              </p>
            </div>
            <button
              onClick={openCounsellingModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 rounded-xl text-xs font-semibold whitespace-nowrap transition"
            >
              <Sparkles className="w-4 h-4 text-violet-400" />
              <span>Book 1:1 Mentorship Instead</span>
            </button>
          </div>

          {/* Workshop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {UPCOMING_WORKSHOPS.map((ws) => (
              <div
                key={ws.id}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 hover:border-cyan-500/40 transition"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                    <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {ws.date}</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-semibold font-mono text-[10px]">
                      FREE
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-white line-clamp-2">{ws.title}</h4>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">{ws.subtitle}</p>

                  <div className="mt-4 pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-1">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{ws.time} ({ws.duration})</span>
                    </div>
                    <div className="text-slate-400 text-[11px]">
                      Led by <strong className="text-white">{ws.instructorName}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span>Seats Registered:</span>
                    <span className="font-mono text-cyan-400 font-bold">{ws.seatsRegistered} / {ws.seatsTotal}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-3">
                    <div 
                      className="h-full bg-cyan-500 rounded-full" 
                      style={{ width: `${(ws.seatsRegistered / ws.seatsTotal) * 100}%` }}
                    />
                  </div>

                  <button
                    onClick={() => openWorkshopModal(ws)}
                    className="w-full py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-cyan-600/20 transition flex items-center justify-center gap-1.5"
                  >
                    <span>Reserve Free Seat</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
