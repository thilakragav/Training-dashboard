import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/nodalbotData';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-nodal-border pb-6">
          <span className="text-xs font-mono font-bold text-nodal-cyan uppercase tracking-widest">
            Legal Terms of Service & Admissions
          </span>
          <h1 className="text-3xl font-black text-white mt-1">Terms & Conditions</h1>
          <p className="text-xs text-nodal-muted mt-1 font-mono">
            NodalBot Technologies Pvt Ltd • Chennai, India • Last Updated: November 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-nodal-muted leading-relaxed font-sans">
          <p>
            Welcome to the official website of <strong>NodalBot Technologies</strong>. By browsing this website, booking demo sessions, enrolling in NodalBot Academy cohorts, or commissioning software consulting projects, you agree to comply with and be bound by the following terms.
          </p>

          <h3 className="text-base font-bold text-white">1. Dual Division Operational Framework</h3>
          <p>
            NodalBot Technologies operates two distinct business branches: (a) <strong>NodalBot Academy</strong>, providing professional training, upskilling, and academic partnerships; and (b) <strong>NodalBot Digital Solutions</strong>, delivering enterprise software, data engineering, and AI consulting services.
          </p>

          <h3 className="text-base font-bold text-white">2. Training Programs & Admissions</h3>
          <p>
            Academy enrollments are subject to batch seat availability (maximum 15 students per cohort). Course syllabi, schedules, and cloud sandboxes are provided solely for the registered student's educational use and may not be redistributed without written consent.
          </p>

          <h3 className="text-base font-bold text-white">3. Intellectual Property Rights</h3>
          <p>
            All proprietary curriculum material, software architecture diagrams, website text, custom logos, and code templates are the intellectual property of NodalBot Technologies Pvt Ltd.
          </p>

          <h3 className="text-base font-bold text-white">4. Software Consulting & Commercial Engagements</h3>
          <p>
            Digital Solutions consulting contracts are governed by mutually agreed Statements of Work (SOW), Master Services Agreements (MSA), and milestone acceptance criteria.
          </p>

          <h3 className="text-base font-bold text-white">5. Governing Law & Jurisdiction</h3>
          <p>
            These terms are governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts in Chennai, Tamil Nadu, India.
          </p>
        </div>

        <div className="pt-6 border-t border-nodal-border">
          <Link to="/" className="text-xs font-semibold text-nodal-cyan hover:underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
