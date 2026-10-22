import React, { useState } from 'react';
import { Compass, BookOpen, Layers, Award, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const HowItWorks: React.FC = () => {
  const [selectedStep, setSelectedStep] = useState<number>(1);

  const steps = [
    {
      step: 1,
      title: 'Discover Your Learning Path',
      icon: Compass,
      color: 'from-blue-500 to-cyan-500',
      badge: 'Step 01 • Calibration',
      description: 'Take our algorithmic career discovery assessment or speak with an academic counsellor to map out the exact curriculum aligned with your target role and schedule.',
      deliverables: [
        'Personalized skill matrix breakdown',
        'Transparent prerequisites check',
        'Custom weekly study roadmap'
      ]
    },
    {
      step: 2,
      title: 'Learn Through Guided Lessons',
      icon: BookOpen,
      color: 'from-cyan-500 to-teal-500',
      badge: 'Step 02 • Core Mastery',
      description: 'Engage with code-first lessons, interactive browser sandboxes, and recorded deep dives. Every module strips away fluff and grounds theory in production code.',
      deliverables: [
        'Weekly live instructor debugging labs',
        'Interactive coding drills with immediate checks',
        'Downloadable cheatsheets and starter boilerplates'
      ]
    },
    {
      step: 3,
      title: 'Build Practical Projects',
      icon: Layers,
      color: 'from-violet-500 to-purple-500',
      badge: 'Step 03 • Industrial Capstones',
      description: 'Construct end-to-end applications solving actual business problems. Write unit tests, containerize with Docker, and deploy live to cloud hosting with clean documentation.',
      deliverables: [
        'Production GitHub repositories with CI/CD',
        'Live public deployment URLs',
        '1:1 line-by-line faculty code reviews'
      ]
    },
    {
      step: 4,
      title: 'Showcase & Launch Your Career',
      icon: Award,
      color: 'from-indigo-500 to-blue-600',
      badge: 'Step 04 • Career Acceleration',
      description: 'Polish your technical portfolio, earn cryptographic verifiable course certificates, undergo rigorous mock technical interview rounds, and access hiring networks.',
      deliverables: [
        'Verifiable certificate with QR verification',
        'System design & live coding interview prep',
        'Alumni networking & direct hiring partner referrals'
      ]
    }
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#0F172A] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            Structured Pedagogy
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mt-2">
            How Learning Works at <span className="text-gradient">Nexora</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            A proven, four-stage journey from zero to portfolio-ready software engineer or data specialist.
          </p>
        </div>

        {/* 4 Steps Interactive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 text-left">
          {steps.map((s) => {
            const Icon = s.icon;
            const isSelected = selectedStep === s.step;

            return (
              <div
                key={s.step}
                onClick={() => setSelectedStep(s.step)}
                className={`cursor-pointer rounded-2xl p-6 border transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#131B2E] border-blue-500 shadow-xl shadow-blue-500/10 -translate-y-1'
                    : 'bg-[#0B0F19] border-slate-800 hover:border-slate-700'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${s.color} flex items-center justify-center text-white shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-slate-700 font-mono">
                      0{s.step}
                    </span>
                  </div>

                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                    {s.badge}
                  </span>

                  <h3 className="text-lg font-bold text-white mt-3">
                    {s.title}
                  </h3>

                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Deliverables Checklist */}
                <div className="mt-6 pt-4 border-t border-slate-800 space-y-2">
                  <span className="text-[11px] font-semibold text-slate-300">Key Outcomes:</span>
                  <ul className="space-y-1.5 text-xs text-slate-400">
                    {s.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 p-6 bg-[#131B2E] border border-blue-500/20 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
          <div>
            <h4 className="text-sm font-bold text-white">Ready to begin Stage 1?</h4>
            <p className="text-xs text-slate-400 mt-0.5">Explore our complete course catalog or test your knowledge in the learning lab.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/courses"
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition"
            >
              Explore Programs
            </Link>
            <Link
              to="/roadmaps"
              className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
            >
              View Full Roadmaps
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
