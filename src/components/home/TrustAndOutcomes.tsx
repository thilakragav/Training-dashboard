import React from 'react';
import { ShieldCheck, Award, CheckCircle2, Lock, FileCheck, Layers, Sparkles } from 'lucide-react';
import { INSTITUTE_TRUST_FACTS } from '../../data/workshopsData';
import { Link } from 'react-router-dom';

export const TrustAndOutcomes: React.FC = () => {
  return (
    <section className="py-20 bg-[#0F172A] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-300 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Integrity & Verification Standards</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Academic Trust Built on <span className="text-gradient">Real Verification</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            In an industry crowded with fabricated 100% placement guarantees and synthetic testimonials, Nexora Tech Academy stands for radical transparency, verifiable skills, and genuine engineering competence.
          </p>
        </div>

        {/* 4 Pillars of Institute Trust */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left mb-16">
          {INSTITUTE_TRUST_FACTS.map((fact, idx) => (
            <div
              key={idx}
              className="bg-[#131B2E] border border-slate-800 p-6 rounded-2xl space-y-3"
            >
              <span className="text-2xl font-black text-emerald-400 font-mono">
                {fact.value}
              </span>
              <h3 className="text-base font-bold text-white">
                {fact.label}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {fact.description}
              </p>
            </div>
          ))}
        </div>

        {/* Industry Tech Stack Alignment */}
        <div className="bg-[#0B0F19] border border-blue-500/20 rounded-3xl p-8 sm:p-10 shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                Curriculum Calibration
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Engineered for Modern Engineering Toolchains
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Our syllabi are calibrated against real production engineering requirements. We do not teach obsolete frameworks or toy examples. Every student works directly with the modern open-source and cloud infrastructure used by top technology companies.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>PyTorch & Torchvision</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Gemini API, RAG & Vector DBs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>React 19, TypeScript & Tailwind</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>PostgreSQL & Prisma ORM</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Apache Spark & Delta Lake</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Docker & Kubernetes Manifests</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#0F172A] p-6 rounded-2xl border border-slate-800 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Verifiable Certification</h4>
                  <p className="text-xs text-slate-400">Cryptographically verifiable credentials</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Certificates are issued strictly upon completing 100% of module lessons and passing the faculty capstone evaluation. Each credential features a permanent verification URL and QR code for employers.
              </p>

              <div className="pt-2">
                <Link
                  to="/portal/certificates"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition"
                >
                  <span>Preview Certificate Verification Format</span>
                </Link>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
