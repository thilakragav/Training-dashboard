import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, Send, ShieldCheck, Phone, Mail, Building, Users, Clock, Calendar, Sparkles } from 'lucide-react';
import { LeadStreamType, LeadSubmission } from '../../types';
import { COMPANY_INFO } from '../../data/nodalbotData';
import { apiService } from '../../services/api';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  streamType?: LeadStreamType;
  initialTopic?: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  streamType = 'student_course_enquiry',
  initialTopic = ''
}) => {
  const [currentType, setCurrentType] = useState<LeadStreamType>(streamType);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyOrInstitution, setCompanyOrInstitution] = useState('');
  const [designation, setDesignation] = useState('');
  const [interestedTopic, setInterestedTopic] = useState(initialTopic);
  const [preferredMode, setPreferredMode] = useState<'Live Online' | 'Hybrid (Classroom + Online)' | 'Classroom' | 'Any'>('Live Online');
  const [teamOrStudentCount, setTeamOrStudentCount] = useState('');
  const [projectBudgetBand, setProjectBudgetBand] = useState('');
  const [notesOrRequirements, setNotesOrRequirements] = useState('');
  const [contactConsent, setContactConsent] = useState(true);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    setCurrentType(streamType);
    setInterestedTopic(initialTopic);
    setIsSuccess(false);
    setErrorMsg('');
  }, [streamType, initialTopic, isOpen]);

  if (!isOpen) return null;

  const getModalTitleAndDescription = () => {
    switch (currentType) {
      case 'free_demo_registration':
        return {
          title: 'Book a Free Live Demo Session',
          subtitle: 'Experience our live interactive coding sandboxes and speak directly with senior engineering instructors.'
        };
      case 'course_enrollment':
        return {
          title: 'Fast-Track Course Enrollment',
          subtitle: 'Secure your seat in our upcoming small-batch cohort with 1:1 code reviews and capstone portfolio projects.'
        };
      case 'corporate_training_rfp':
        return {
          title: 'Request a Customized Corporate Training Proposal',
          subtitle: 'Upskill your engineering and analytics teams with tailored enterprise curricula on Azure, Databricks, AI, and Power BI.'
        };
      case 'college_partnership':
        return {
          title: 'Partner With NodalBot for Academic Excellence',
          subtitle: 'Faculty Development Programs, student industry bootcamps, and semester project guidance for colleges and universities.'
        };
      case 'software_project_consultation':
        return {
          title: 'Schedule a Free Software & AI Consultation',
          subtitle: 'Discuss your data pipeline, Generative AI agent, custom application, or automation requirements with our principal architects.'
        };
      case 'callback_request':
        return {
          title: 'Request a Quick Technology Callback',
          subtitle: 'Leave your details and a NodalBot technology advisor will contact you within 2 business hours.'
        };
      default:
        return {
          title: 'Course & Technology Enquiry',
          subtitle: 'Receive complete syllabus outlines, batch dates, lab schedules, and fee structures.'
        };
    }
  };

  const { title, subtitle } = getModalTitleAndDescription();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMsg('Please fill in your name, email, and phone number.');
      return;
    }
    if (!contactConsent) {
      setErrorMsg('Please confirm contact consent to proceed.');
      return;
    }

    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const payload: LeadSubmission = {
        type: currentType,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        companyOrInstitution: companyOrInstitution.trim() || undefined,
        designation: designation.trim() || undefined,
        interestedTopicOrService: interestedTopic || 'General Technology Enquiry',
        preferredMode: preferredMode,
        teamOrStudentCount: teamOrStudentCount || undefined,
        projectBudgetBand: projectBudgetBand || undefined,
        notesOrRequirements: notesOrRequirements.trim() || undefined,
        contactConsent: true,
        sourcePage: window.location.pathname,
        createdAt: new Date().toISOString()
      };

      await apiService.submitEnquiry(payload as any);
      setIsSuccess(true);
    } catch (err: any) {
      console.error('Lead submission error:', err);
      setErrorMsg('An unexpected error occurred. Please try again or WhatsApp us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(`Hi NodalBot Technologies! I just submitted an enquiry regarding "${interestedTopic || title}". Please connect with me on WhatsApp.`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-2xl bg-nodal-surface border-2 border-[#0066FF]/40 rounded-2xl p-5 sm:p-8 shadow-2xl shadow-[#0066FF]/20 max-h-[90vh] overflow-y-auto text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-xl text-slate-400 hover:text-white bg-nodal-card border border-nodal-border hover:border-slate-500 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {isSuccess ? (
          /* SUCCESS CONFIRMATION STATE */
          <div className="text-center py-6 sm:py-8">
            <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto mb-4 animate-bounce">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            
            <h3 className="text-2xl font-black text-white font-display">
              Enquiry Submitted Successfully!
            </h3>
            
            <p className="mt-2 text-sm text-slate-300 max-w-md mx-auto font-sans leading-relaxed">
              Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry regarding <strong className="text-[#00D2FF]">{interestedTopic || 'NodalBot Technologies'}</strong> has been registered with our team.
            </p>

            <div className="mt-6 p-4 rounded-xl bg-nodal-navy border border-nodal-border text-left max-w-md mx-auto text-xs text-slate-300 space-y-2">
              <div className="flex items-center gap-2 font-mono text-[#00D2FF] font-bold uppercase">
                <Clock className="w-4 h-4" /> What Happens Next:
              </div>
              <p>1. Our technical advisor reviews your requirements and checks batch seat availability.</p>
              <p>2. We will contact you at <strong>{email}</strong> or <strong>{phone}</strong> within 2 to 4 business hours.</p>
              <p>3. You will receive the detailed syllabus and free demo link via WhatsApp/Email.</p>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={handleWhatsAppDirect}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
              >
                Chat on WhatsApp Now
              </button>
              <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl btn-secondary text-xs"
              >
                Done / Close
              </button>
            </div>
          </div>
        ) : (
          /* FORM SUBMISSION STATE */
          <div>
            <div className="mb-6 pr-8">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#0066FF]/15 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-[10px] uppercase tracking-wider mb-2 font-bold">
                <Sparkles className="w-3 h-3 text-[#00D2FF]" /> NodalBot Direct Enquiry System
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-display">
                {title}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-300 font-sans">
                {subtitle}
              </p>
            </div>

            {errorMsg && (
              <div className="mb-5 p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g., Rajesh Kumar"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g., rajesh@company.com"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Phone and Interested Topic */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g., +91 97899 76268"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Program / Service of Interest
                  </label>
                  <input
                    type="text"
                    value={interestedTopic}
                    onChange={(e) => setInterestedTopic(e.target.value)}
                    placeholder="e.g., Azure Databricks, Generative AI"
                    className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                  />
                </div>
              </div>

              {/* Corporate & College Specific Fields */}
              {(currentType === 'corporate_training_rfp' || currentType === 'college_partnership' || currentType === 'software_project_consultation') && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Organization / University Name
                    </label>
                    <input
                      type="text"
                      value={companyOrInstitution}
                      onChange={(e) => setCompanyOrInstitution(e.target.value)}
                      placeholder="e.g., Infosys Ltd / Anna University"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                      Estimated Team / Student Count
                    </label>
                    <input
                      type="text"
                      value={teamOrStudentCount}
                      onChange={(e) => setTeamOrStudentCount(e.target.value)}
                      placeholder="e.g., 10 – 25 participants"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors"
                    />
                  </div>
                </div>
              )}

              {/* Training Delivery Mode */}
              {(currentType === 'student_course_enquiry' || currentType === 'free_demo_registration' || currentType === 'course_enrollment' || currentType === 'corporate_training_rfp') && (
                <div>
                  <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                    Preferred Training Mode
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(['Live Online', 'Hybrid (Classroom + Online)', 'Any'] as const).map((mode) => (
                      <button
                        type="button"
                        key={mode}
                        onClick={() => setPreferredMode(mode)}
                        className={`py-2 px-3 rounded-lg text-xs font-mono text-center border transition-all ${
                          preferredMode === mode
                            ? 'bg-[#0066FF]/25 border-[#00D2FF] text-[#00D2FF] font-bold'
                            : 'bg-nodal-card border-nodal-border text-slate-400 hover:text-white'
                        }`}
                      >
                        {mode}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Message / Requirements */}
              <div>
                <label className="block text-xs font-mono uppercase text-slate-400 mb-1">
                  Specific Requirements / Questions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={notesOrRequirements}
                  onChange={(e) => setNotesOrRequirements(e.target.value)}
                  placeholder="Tell us about your background, career goals, project scope, or preferred batch timing..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Contact Consent Checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={contactConsent}
                  onChange={(e) => setContactConsent(e.target.checked)}
                  className="mt-0.5 rounded border-slate-700 text-[#0066FF] focus:ring-0 bg-nodal-card"
                />
                <label htmlFor="consent" className="text-[11px] text-slate-400 leading-tight">
                  I agree to receive communications regarding course details, schedules, and proposals from NodalBot Technologies via WhatsApp, Phone, or Email. Your details will never be shared with third parties.
                </label>
              </div>

              {/* Submit Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 btn-primary py-3 px-5 text-xs uppercase tracking-wider disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Submitting Request...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 mr-2" /> Submit Enquiry & Get Details
                    </>
                  )}
                </button>
              </div>

              <div className="flex items-center justify-center gap-4 text-[10px] font-mono text-slate-500 pt-2">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#00D2FF]" /> 100% Privacy Protected
                </span>
                <span>•</span>
                <span>Response within 2 hours</span>
                <span>•</span>
                <span>Chennai HQ Support</span>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
