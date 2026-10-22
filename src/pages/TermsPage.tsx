import React from 'react';
import { Link } from 'react-router-dom';

export const TermsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="border-b border-slate-800 pb-6">
          <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
            Academic Terms
          </span>
          <h1 className="text-3xl font-black text-white mt-1">Terms of Enrollment</h1>
          <p className="text-xs text-slate-400 mt-1">Effective Date: October 2026</p>
        </div>

        <div className="space-y-6 text-xs sm:text-sm text-slate-300 leading-relaxed">
          <p>
            Welcome to <strong>Nexora Tech Academy</strong>. By enrolling in any program or participating in our open learning masterclasses, you agree to these transparent terms.
          </p>

          <h3 className="text-base font-bold text-white">1. Honest Academic Standards</h3>
          <p>
            Certificates of completion are issued strictly to students who independently submit assignments, achieve passing scores on graded code labs, and deploy the required capstone application. Plagiarism or submission of unreviewed third-party code results in credential forfeiture.
          </p>

          <h3 className="text-base font-bold text-white">2. 7-Day Refund Policy</h3>
          <p>
            If within 7 days of the official batch start date you feel the teaching methodology or pacing is unsuitable, you may request a 100% refund without dispute.
          </p>

          <h3 className="text-base font-bold text-white">3. Intellectual Property of Student Work</h3>
          <p>
            All capstone source code and portfolio applications built by students remain 100% the intellectual property of the respective student. Nexora Tech Academy retains no copyright claim over student projects.
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
