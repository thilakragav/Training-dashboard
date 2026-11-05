import React, { useState } from 'react';
import { 
  Award, 
  ShieldCheck, 
  Printer, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  GraduationCap, 
  QrCode,
  ArrowLeft
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { api, DEFAULT_CERTIFICATES } from '../services/api';
import { Link } from 'react-router-dom';

export const StudentCertificatesPage: React.FC = () => {
  const { user } = useAuth();
  const [selectedCert, setSelectedCert] = useState(DEFAULT_CERTIFICATES[0]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-nodal-bg pt-28 pb-20 text-left">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Navigation and Top Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              to="/portal"
              className="p-2 bg-nodal-surface border border-nodal-border hover:border-nodal-blue/40 text-nodal-text rounded-xl transition"
            >
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div>
              <span className="text-xs font-mono font-bold text-nodal-cyan uppercase tracking-widest">
                Student Credentials & Badges
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-white">
                Verifiable Certificates
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="px-4 py-2 bg-nodal-surface hover:bg-nodal-card text-nodal-text border border-nodal-border rounded-xl text-xs font-semibold transition flex items-center gap-2"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
          </div>
        </div>

        {/* Certificate Printable Canvas */}
        <div className="p-1 sm:p-2 bg-gradient-to-br from-nodal-blue/30 via-nodal-card to-nodal-violet/30 rounded-3xl shadow-2xl">
          <div className="bg-nodal-surface border-4 border-nodal-border rounded-2xl p-6 sm:p-14 relative overflow-hidden space-y-8 text-center">
            
            {/* Background Watermark Crest */}
            <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
              <GraduationCap className="w-[600px] h-[600px] text-white" />
            </div>

            {/* Certificate Header */}
            <div className="space-y-3 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-nodal-blue via-nodal-violet to-nodal-purple flex items-center justify-center text-white mx-auto shadow-xl shadow-nodal-blue/25 border border-nodal-cyan/40">
                <GraduationCap className="w-10 h-10" />
              </div>
              <h2 className="text-xl sm:text-2xl font-black tracking-widest text-white uppercase font-display">
                NODALBOT TECHNOLOGIES
              </h2>
              <p className="text-xs tracking-widest uppercase font-mono text-nodal-cyan font-semibold">
                Institute of Advanced Technology & Applied Systems
              </p>
            </div>

            {/* Certificate Body Text */}
            <div className="space-y-4 max-w-2xl mx-auto relative z-10">
              <span className="text-xs uppercase tracking-widest text-nodal-muted font-mono">
                This is to officially certify that
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-nodal-text font-serif tracking-tight border-b-2 border-nodal-border pb-2 max-w-lg mx-auto">
                {selectedCert.studentName}
              </h3>
              <p className="text-xs sm:text-sm text-nodal-muted leading-relaxed">
                has successfully fulfilled all curriculum requirements, code lab evaluations, and deployed the industrial capstone project for the intensive specialization in
              </p>
              <h4 className="text-xl sm:text-2xl font-bold text-gradient">
                {selectedCert.courseTitle}
              </h4>
              <p className="text-xs text-emerald-400 font-mono font-semibold">
                Awarded with: {selectedCert.grade}
              </p>
            </div>

            {/* Verified Skills Grid */}
            <div className="max-w-xl mx-auto pt-2 relative z-10">
              <span className="text-[10px] font-mono uppercase font-bold text-nodal-muted tracking-wider block mb-2">
                Demonstrated Industrial Competencies Verified:
              </span>
              <div className="flex flex-wrap justify-center gap-1.5">
                {selectedCert.skillsVerified.map(s => (
                  <span key={s} className="px-3 py-1 rounded bg-nodal-card border border-nodal-border text-nodal-muted text-[11px] font-medium">
                    ✓ {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer with Signatures & QR Code */}
            <div className="pt-8 border-t border-nodal-border grid grid-cols-1 sm:grid-cols-3 gap-6 items-end relative z-10 text-left">
              
              {/* Left: Issue Date & Cert ID */}
              <div className="space-y-1 text-xs text-nodal-muted">
                <p>Issue Date: <strong className="text-white">{selectedCert.issueDate}</strong></p>
                <p>Certificate ID: <strong className="font-mono text-nodal-cyan">{selectedCert.certificateNumber}</strong></p>
                <div className="flex items-center gap-1.5 text-emerald-400 text-[11px] pt-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Publicly Verified Credential</span>
                </div>
              </div>

              {/* Center: QR Code Mockup */}
              <div className="text-center flex flex-col items-center justify-center">
                <div className="w-20 h-20 bg-white p-1.5 rounded-xl border border-nodal-border shadow-md flex items-center justify-center">
                  <QrCode className="w-full h-full text-slate-900" />
                </div>
                <span className="text-[9px] font-mono text-nodal-muted mt-1">Scan to Verify</span>
              </div>

              {/* Right: Lead Faculty Sign-off */}
              <div className="sm:text-right space-y-1 text-xs text-nodal-muted">
                <p className="font-serif italic text-base text-slate-200">Vikramaditya Sen</p>
                <p className="text-white font-bold">Dr. Vikramaditya Sen</p>
                <p className="text-[10px] text-nodal-muted">Academic Director, NodalBot Academy</p>
              </div>

            </div>

          </div>
        </div>

        {/* Verification Link Share Box */}
        <div className="bg-nodal-surface border border-nodal-border rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-white">Public Verification URL for Employers & LinkedIn:</h4>
            <p className="text-xs font-mono text-nodal-cyan">{selectedCert.verificationUrl}</p>
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(selectedCert.verificationUrl);
              alert('Verification URL copied to clipboard!');
            }}
            className="px-4 py-2 bg-nodal-blue hover:bg-nodal-blue/90 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
          >
            Copy Credential URL
          </button>
        </div>

      </div>
    </div>
  );
};
