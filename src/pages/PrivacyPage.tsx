import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            Transparency & Compliance
          </span>
          <h1 className="text-3xl font-black text-white mt-1">Privacy Policy</h1>
          <p className="text-xs text-slate-400 mt-1">Effective Date: October 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            At <strong>Nexora Tech Academy</strong>, we respect your privacy and are committed to protecting the personal data of our prospective and enrolled students.
          </p>

          <h3 className="text-base font-bold text-white">1. Information We Collect</h3>
          <p>
            We collect only necessary information required for academic onboarding: your name, email address, telephone contact number, educational background, and course interests. We never ask for or store payment card details directly; all transactions are processed through PCI-DSS compliant gateways.
          </p>

          <h3 className="text-base font-bold text-white">2. How We Use Student Data</h3>
          <p>
            Contact information is utilized solely to dispatch course brochures, schedule requested 1-on-1 career counselling sessions, provide access to cloud code environments, and transmit verifiable certificates upon course completion.
          </p>

          <h3 className="text-base font-bold text-white">3. Third-Party Sharing Prohibition</h3>
          <p>
            We strictly enforce a zero-spam and zero-data-brokering policy. Your contact numbers and emails are never sold or leased to third-party marketing entities.
          </p>

          <h3 className="text-base font-bold text-white">4. Data Erasure Rights</h3>
          <p>
            You have the right to request deletion of your enquiry data or student account at any time by emailing <code>privacy@nexora.academy</code>.
          </p>
        </div>

        <div className="pt-6 border-t border-slate-800">
          <Link to="/" className="text-xs font-semibold text-blue-400 hover:underline">
            ← Return to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};
