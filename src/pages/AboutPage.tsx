import React from 'react';
import { 
  GraduationCap, 
  ShieldCheck, 
  Award, 
  Users, 
  MapPin, 
  Target, 
  HeartHandshake, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { FACULTY_MENTORS } from '../data/workshopsData';
import { useLearning } from '../context/LearningContext';

export const AboutPage: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Our Origin & Philosophy</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Built for Engineers. <span className="text-gradient">Engineered for Truth.</span>
          </h1>
          <p className="mt-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            Nexora Tech Academy was founded by senior technology architects frustrated by traditional rote IT institutes that teach outdated syntax and make deceptive placement promises.
          </p>
        </div>

        {/* 3 Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#0F172A] border border-blue-500/20 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Production-First Pedagogy</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              We teach modern engineering practices from day one: strict TypeScript types, git branching, Docker containers, automated tests, and cloud deployments.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-violet-500/20 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-violet-600/20 text-violet-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Zero Fabricated Claims</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              No artificial 100% placement pledges. No synthetic student testimonials. We focus on building undeniable GitHub portfolios that prove your competence.
            </p>
          </div>

          <div className="bg-[#0F172A] border border-emerald-500/20 p-8 rounded-3xl space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center">
              <HeartHandshake className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-white">Direct 1:1 Senior Mentorship</h3>
            <p className="text-xs text-slate-300 leading-relaxed">
              Every learner is paired with a seasoned staff engineer who conducts weekly live code reviews, architecture critiques, and mock interview drills.
            </p>
          </div>
        </div>

        {/* Physical & Virtual Campus Facilities */}
        <div className="bg-[#131B2E] border border-slate-800 rounded-3xl p-8 sm:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest">
                Campuses & Infrastructure
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                Hybrid Learning Centers & High-Compute Virtual Labs
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Whether you study in-person at our Bengaluru / Hyderabad facilities or attend live remotely via our global virtual classroom, you get dedicated cloud GPU compute for training neural networks and distributed clusters for Spark pipelines.
              </p>

              <div className="space-y-2 text-xs text-slate-300 pt-2">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>High-speed gigabit workstations with dual monitor setups</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Cloud GPU notebook environments (zero local GPU required)</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Collaborative hackathon zones and private interview recording booths</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="h-64 sm:h-80 rounded-2xl overflow-hidden border border-slate-700 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
                  alt="Nexora Tech Academy Campus"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Lead Faculty Spotlight */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-white">Meet the Academic Council</h2>
            <p className="text-xs text-slate-400 mt-1">Our instructors actively build production software and maintain open-source projects.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACULTY_MENTORS.map(m => (
              <div key={m.id} className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-3">
                <img src={m.avatarUrl} alt={m.name} className="w-16 h-16 rounded-xl object-cover border border-blue-500/30" />
                <div>
                  <h4 className="text-sm font-bold text-white">{m.name}</h4>
                  <p className="text-xs text-blue-400">{m.role}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{m.companyBackground}</p>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-8 bg-gradient-to-r from-blue-950/60 to-slate-900 border border-blue-500/30 rounded-3xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Have questions about our training philosophy?</h3>
            <p className="text-xs text-slate-300 mt-1">Visit our campus or schedule a virtual session with our dean of academics.</p>
          </div>
          <button
            onClick={openCounsellingModal}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
          >
            Book Free Campus Consultation
          </button>
        </div>

      </div>
    </div>
  );
};
