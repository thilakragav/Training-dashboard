import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../data/nodalbotData';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-nodal-border pb-6">
          <span className="text-xs font-mono font-bold text-nodal-cyan uppercase tracking-widest">
            Transparency & Compliance
          </span>
          <h1 className="text-3xl font-black text-white mt-1">Privacy Policy</h1>
          <p className="text-xs text-nodal-muted mt-1 font-mono">
            NodalBot Technologies Pvt Ltd • Chennai, Tamil Nadu, India • Effective Date: November 2026
          </p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-nodal-muted leading-relaxed font-sans">
          <p>
            At <strong>NodalBot Technologies</strong>, operating <strong>NodalBot Academy</strong> and <strong>NodalBot Digital Solutions</strong>, we prioritize the protection and security of personal and enterprise information submitted through our website.
          </p>

          <h3 className="text-base font-bold text-white">1. Information We Collect</h3>
          <p>
            We collect personal information necessary for educational enrollment, enterprise consulting proposals, and academic partnership arrangements. This includes your name, official or personal email address, telephone contact number, educational background, company or university affiliation, and project requirements.
          </p>

          <h3 className="text-base font-bold text-white">2. Purpose of Data Collection</h3>
          <p>
            Information collected is strictly utilized to respond to training enquiries, dispatch requested syllabi, schedule live demo sessions, prepare customized corporate proposals, and deliver software consulting advisory services.
          </p>

          <h3 className="text-base font-bold text-white">3. Third-Party Sharing Prohibition</h3>
          <p>
            NodalBot Technologies enforces a strict non-disclosure policy. We do not sell, rent, lease, or distribute visitor or client information to third-party advertisers or data brokers under any circumstances.
          </p>

          <h3 className="text-base font-bold text-white">4. Data Security & Storage</h3>
          <p>
            All submitted enquiries are stored in secure, encrypted cloud data repositories. Access is restricted to authorized personnel in our Chennai headquarters.
          </p>

          <h3 className="text-base font-bold text-white">5. Communication Preferences & Erasure</h3>
          <p>
            You may request deletion of your enquiry data or unsubscribe from our technology briefings at any time by contacting our data officer at <code>{COMPANY_INFO.contact.email}</code>.
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
