import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { NodalBotLogo } from '../ui/NodalBotLogo';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon } from '../ui/SocialIcons';
import { COMPANY_INFO, LEARNING_DOMAINS_INFO, DIGITAL_SOLUTIONS_SERVICES } from '../../data/nodalbotData';
import { apiService } from '../../services/api';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;

    setIsSubmitting(true);
    try {
      await apiService.submitEnquiry({
        type: 'newsletter_subscription' as any,
        fullName: 'Newsletter Subscriber',
        email: newsletterEmail.trim(),
        phone: 'N/A',
        interestedTopicOrService: 'Weekly Technology & Engineering Briefing',
        contactConsent: true,
        sourcePage: window.location.pathname,
        createdAt: new Date().toISOString()
      });
      setNewsletterSuccess(true);
      setNewsletterEmail('');
    } catch (err) {
      console.error('Newsletter submission failed:', err);
      setNewsletterSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-nodal-navy text-nodal-muted border-t border-nodal-border relative z-20">
      
      {/* Top Banner: Newsletter / Tech Briefing */}
      <div className="border-b border-nodal-border bg-nodal-surface/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            <div className="lg:col-span-7 text-left space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase tracking-widest text-nodal-cyan block">
                NODALBOT ENGINEERING BRIEFING
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-nodal-text font-display">
                Stay Ahead of Data, AI & Cloud Architecture Shifts
              </h3>
              <p className="text-xs sm:text-sm text-nodal-muted max-w-xl">
                Weekly architectural deep dives, Model Context Protocol updates, PySpark optimization notes, and batch announcements directly in your inbox. No spam.
              </p>
            </div>

            <div className="lg:col-span-5">
              {newsletterSuccess ? (
                <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center gap-2.5 text-emerald-400 text-xs font-semibold">
                  <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                  <span>Subscribed! Welcome to the NodalBot Technology Briefing.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your work or personal email..."
                    className="flex-1 px-4 py-3 rounded-xl bg-nodal-card border border-nodal-border text-nodal-text text-xs placeholder:text-nodal-muted focus:outline-none focus:border-nodal-blue transition-colors"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-3 rounded-xl btn-primary text-xs shrink-0 disabled:opacity-50"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5 ml-1.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Main 4-Column Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 text-left">
          
          {/* Col 1: Brand & Headquarters (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <NodalBotLogo size="md" showTagline={true} />
            
            <p className="text-xs sm:text-sm text-nodal-muted leading-relaxed font-sans pr-4">
              NodalBot Technologies bridges the gap between high-level technology education and scalable enterprise digital engineering. Empowering talent and engineering innovation across global markets.
            </p>

            <div className="space-y-2.5 text-xs text-nodal-muted font-sans pt-1">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-nodal-cyan shrink-0 mt-0.5" />
                <span>
                  <strong className="text-nodal-text">Headquarters:</strong> {COMPANY_INFO.headquarters.address}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-nodal-cyan shrink-0" />
                <a href={`mailto:${COMPANY_INFO.contact.email}`} className="hover:text-nodal-cyan transition-colors">
                  {COMPANY_INFO.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-nodal-cyan shrink-0" />
                <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="hover:text-nodal-cyan transition-colors">
                  {COMPANY_INFO.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={COMPANY_INFO.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-nodal-surface hover:bg-nodal-blue border border-nodal-border hover:border-transparent flex items-center justify-center text-nodal-muted hover:text-white transition-all shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-nodal-surface hover:bg-slate-700 border border-nodal-border hover:border-transparent flex items-center justify-center text-nodal-muted hover:text-white transition-all shadow-sm"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.social.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-nodal-surface hover:bg-sky-500 border border-nodal-border hover:border-transparent flex items-center justify-center text-nodal-muted hover:text-white transition-all shadow-sm"
                aria-label="Twitter / X"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a 
                href={COMPANY_INFO.social.youtube} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-xl bg-nodal-surface hover:bg-red-600 border border-nodal-border hover:border-transparent flex items-center justify-center text-nodal-muted hover:text-white transition-all shadow-sm"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: NodalBot Academy (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nodal-cyan">
              NodalBot Academy
            </span>
            <ul className="space-y-2 text-xs">
              {LEARNING_DOMAINS_INFO.map(dom => (
                <li key={dom.id}>
                  <Link 
                    to={`/academy?domain=${encodeURIComponent(dom.title)}`}
                    className="text-nodal-muted hover:text-nodal-cyan transition-colors block"
                  >
                    {dom.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/roadmaps" className="text-nodal-cyan hover:underline font-semibold flex items-center gap-1">
                  <span>14 Career Pathways</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/corporate-training" className="text-nodal-muted hover:text-nodal-text font-medium block">
                  Corporate Upskilling (B2B)
                </Link>
              </li>
              <li>
                <Link to="/college-training" className="text-nodal-muted hover:text-nodal-text font-medium block">
                  College FDP & Bootcamps
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Digital Solutions (3 Cols) */}
          <div className="lg:col-span-3 space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nodal-violet">
              Digital Solutions
            </span>
            <ul className="space-y-2 text-xs">
              {DIGITAL_SOLUTIONS_SERVICES.map(srv => (
                <li key={srv.id}>
                  <Link 
                    to={`/digital-solutions#${srv.slug}`}
                    className="text-nodal-muted hover:text-nodal-violet transition-colors block"
                  >
                    {srv.title}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link to="/industry-solutions" className="text-nodal-violet hover:underline font-semibold flex items-center gap-1">
                  <span>8 Industry Solutions</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-nodal-muted hover:text-nodal-text font-medium block">
                  Enterprise Consulting & Discovery
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Company, Careers & Legal (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <span className="block text-xs font-mono font-bold uppercase tracking-wider text-nodal-text">
              Company
            </span>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/about" className="text-nodal-muted hover:text-nodal-text transition-colors">
                  About NodalBot
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-nodal-text font-semibold hover:text-nodal-cyan transition-colors flex items-center gap-1.5">
                  <span>Careers</span>
                  <span className="px-1.5 py-0.5 rounded text-[9px] font-mono bg-nodal-blue/15 text-nodal-cyan border border-nodal-blue/30">
                    Hiring
                  </span>
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-nodal-muted hover:text-nodal-text transition-colors">
                  Resources & Guides
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-nodal-muted hover:text-nodal-text transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="text-nodal-muted hover:text-nodal-cyan font-mono text-[11px] transition-colors">
                  Admin Portal
                </Link>
              </li>
              <li className="pt-3 border-t border-nodal-border">
                <Link to="/privacy" className="text-nodal-muted hover:text-nodal-text transition-colors text-[11px] block">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-nodal-muted hover:text-nodal-text transition-colors text-[11px] block">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="mt-12 pt-8 border-t border-nodal-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-nodal-muted">
          <div>
            © {new Date().getFullYear()} NodalBot Technologies Pvt Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-3 text-[11px]">
            <span>Intelligence in Learning. Innovation in Engineering.</span>
            <span>•</span>
            <span>Chennai, Tamil Nadu, India</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
