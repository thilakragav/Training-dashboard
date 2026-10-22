import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  MessageSquare,
  ShieldCheck,
  Award
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, YoutubeIcon } from '../ui/BrandIcons';
import { COURSES_DATA } from '../../data/coursesData';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  return (
    <footer className="bg-[#070A11] border-t border-slate-800 text-slate-400 text-sm">
      {/* Top Banner */}
      <div className="border-b border-slate-800/60 bg-gradient-to-r from-blue-950/30 via-slate-900 to-indigo-950/30 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 rounded-2xl bg-blue-600/15 border border-blue-500/30 text-blue-400 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">Nexora Academic Excellence & Verifiability Pledge</h4>
              <p className="text-xs text-slate-400 max-w-xl">
                We maintain zero fictitious statistics, fabricated placement records, or synthetic corporate affiliations. All curriculum milestones are verified through genuine project code deliverables.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/courses"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition"
            >
              Browse Syllabus
            </Link>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 rounded-xl text-xs font-semibold transition flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" /> Direct WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left">
          
          {/* Col 1: Institute Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-violet-600 flex items-center justify-center text-white border border-blue-400/30">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <span className="text-lg font-black tracking-tight text-white font-sans">NEXORA</span>
                <span className="block text-[10px] tracking-widest font-semibold uppercase text-slate-400 -mt-1 font-mono">
                  TECH ACADEMY
                </span>
              </div>
            </Link>
            <p className="text-xs text-slate-400 leading-relaxed pr-6">
              Nexora Tech Academy is an elite modern technology institute equipping college students, ambitious graduates, and career changers with industrial-grade AI, Data Science, Full-Stack, and Cloud competencies through production capstones.
            </p>

            <div className="pt-2 text-xs space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Tech Knowledge Campus, Cyber Hub Corridor, Bengaluru & Hyderabad | Global Virtual Campus</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>Admissions Toll-Free: +91 98765 43210 / +91 80 4123 9800</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>admissions@nexora.academy | contact@nexora.academy</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition" aria-label="GitHub">
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition" aria-label="LinkedIn">
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition" aria-label="Twitter">
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition" aria-label="YouTube">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Specializations</h5>
            <ul className="space-y-2 text-xs">
              {COURSES_DATA.slice(0, 5).map(c => (
                <li key={c.id}>
                  <Link to={`/course/${c.slug}`} className="hover:text-blue-400 transition">
                    {c.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/courses" className="text-blue-400 font-semibold hover:underline">
                  View All 8 Programs →
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Career Resources */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Resources</h5>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/roadmaps" className="hover:text-blue-400 transition">Career Roadmaps</Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-blue-400 transition">Portfolio Showcase</Link>
              </li>
              <li>
                <Link to="/learning-lab" className="hover:text-blue-400 transition">Interactive Learning Lab</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-400 transition">Pedagogy & Faculty</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-400 transition">Book 1:1 Counselling</Link>
              </li>
              <li>
                <Link to="/portal" className="hover:text-blue-400 transition">Student Learning Portal</Link>
              </li>
              <li>
                <Link to="/admin" className="hover:text-amber-400 transition">Admin Control Panel</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div className="space-y-3">
            <h5 className="text-xs font-bold text-white uppercase tracking-wider font-mono">Tech Insights</h5>
            <p className="text-xs text-slate-400 leading-relaxed">
              Receive weekly curated architectural case studies, SQL tips, and upcoming open masterclasses directly in your inbox.
            </p>
            {subscribed ? (
              <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-emerald-400 text-xs flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                <span>Subscribed! Check your inbox for the AI Architecture Primer.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletterEmail}
                    onChange={e => setNewsletterEmail(e.target.value)}
                    placeholder="Enter student or work email"
                    required
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                  />
                  <button
                    type="submit"
                    className="absolute right-1.5 top-1.5 p-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition"
                    aria-label="Subscribe"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-[10px] text-slate-500">Zero spam. Unsubscribe anytime with 1 click.</p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 NEXORA TECH ACADEMY. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/privacy" className="hover:text-slate-300 transition">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-slate-300 transition">Terms of Enrollment</Link>
            <span className="flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              Enterprise Grade Training
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
