import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { 
  MapPin, 
  Mail, 
  Phone, 
  MessageSquare, 
  Clock, 
  Send, 
  CheckCircle2, 
  ShieldCheck, 
  Building 
} from 'lucide-react';
import { LinkedinIcon, GithubIcon, TwitterIcon, YoutubeIcon } from '../components/ui/SocialIcons';
import { COMPANY_INFO } from '../data/nodalbotData';
import { apiService } from '../services/api';

export const ContactPage: React.FC = () => {
  const [enquiryType, setEnquiryType] = useState('student_course_enquiry');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [companyOrCollege, setCompanyOrCollege] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const enquiryTypes = [
    { id: 'student_course_enquiry', label: 'Student Course Enquiry' },
    { id: 'free_demo_registration', label: 'Book a Free Demo Class' },
    { id: 'corporate_training_rfp', label: 'Corporate Team Training' },
    { id: 'college_partnership', label: 'College FDP / Workshop' },
    { id: 'software_project_consultation', label: 'Software / AI Consulting' }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setErrorMessage('Please fill in your name, email, and phone number.');
      return;
    }

    setIsSubmitting(true);
    setErrorMessage('');

    try {
      await apiService.submitEnquiry({
        type: enquiryType as any,
        fullName: fullName.trim(),
        email: email.trim(),
        phone: phone.trim(),
        companyOrInstitution: companyOrCollege.trim() || undefined,
        interestedTopicOrService: subject.trim() || 'General Business Enquiry',
        notesOrRequirements: message.trim() || undefined,
        contactConsent: true,
        sourcePage: '/contact',
        createdAt: new Date().toISOString()
      });
      setIsSuccess(true);
    } catch (err) {
      console.error(err);
      setErrorMessage('An unexpected error occurred. Please try again or WhatsApp us.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hello NodalBot Technologies! I am reaching out from your Contact page regarding: ${subject || 'General Enquiry'}.`);
    window.open(`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}?text=${text}`, '_blank');
  };

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="contact" />
      
      {/* Hero */}
      <section className="relative py-16 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <Mail className="w-3.5 h-3.5" /> Direct Communications & Headquarters Desk
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Start a Conversation <span className="text-gradient-electric block mt-1">With NodalBot Technologies.</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-2xl mx-auto leading-relaxed">
            Whether you want to enroll in an upcoming academy batch, request a corporate upskilling proposal, or architect an enterprise AI solution, our advisors are here to assist.
          </p>
        </div>
      </section>

      {/* Main Grid: Form on Left, Contact Details on Right */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Form Column (7 Cols) */}
            <div className="lg:col-span-7 bg-nodal-surface rounded-3xl border border-[#0066FF]/30 p-6 sm:p-10 shadow-2xl text-left">
              
              {isSuccess ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-nodal-text font-display">
                    Message Delivered!
                  </h3>
                  <p className="mt-2 text-sm text-nodal-muted max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{fullName}</strong>. A designated technology advisor will review your enquiry and respond to <strong>{email}</strong> or <strong>{phone}</strong> within 2 business hours.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <button
                      onClick={handleWhatsApp}
                      className="px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-600/30"
                    >
                      Connect on WhatsApp Now
                    </button>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-5 py-2.5 rounded-xl btn-secondary text-xs"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-1">
                      DIRECT INQUIRY DESK
                    </span>
                    <h2 className="text-2xl font-bold text-nodal-text font-display">
                      Send a Message to Our Chennai HQ
                    </h2>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-300">
                      {errorMessage}
                    </div>
                  )}

                  {/* Enquiry Category Selector */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1.5 font-semibold">
                      Nature of Your Inquiry:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {enquiryTypes.map((t) => (
                        <button
                          type="button"
                          key={t.id}
                          onClick={() => setEnquiryType(t.id)}
                          className={`p-2.5 rounded-xl text-left text-xs font-mono transition-all border ${
                            enquiryType === t.id
                              ? 'bg-[#0066FF]/25 border-[#00D2FF] text-[#00D2FF] font-bold'
                              : 'bg-nodal-card border-nodal-border text-nodal-muted hover:text-white'
                          }`}
                        >
                          {t.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Rajesh Kumar"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Official / Personal Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="rajesh@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  {/* Phone and Organization */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+91 97899 76268"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                        Company / University (Optional)
                      </label>
                      <input
                        type="text"
                        value={companyOrCollege}
                        onChange={(e) => setCompanyOrCollege(e.target.value)}
                        placeholder="e.g. Infosys, TCS, SRM Univ"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                      Subject / Course of Interest
                    </label>
                    <input
                      type="text"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="e.g. Azure Data Engineering Batch or Generative AI Consulting"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-mono uppercase text-nodal-muted mb-1">
                      Message / Project Scope Details
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Please describe your background, team requirements, or project details..."
                      className="w-full px-3.5 py-2.5 rounded-xl bg-nodal-card border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF] resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full btn-primary py-3.5 px-6 text-xs uppercase tracking-wider disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <span>Transmitting Message...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" /> Send Direct Inquiry
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}

            </div>

            {/* Contact Details & Location Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-left">
              
              {/* HQ Card */}
              <div className="p-6 sm:p-8 rounded-3xl bg-nodal-surface border border-nodal-border space-y-6 shadow-xl">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#00D2FF] block mb-1">
                    GLOBAL HEADQUARTERS
                  </span>
                  <h3 className="text-2xl font-black text-nodal-text font-display">
                    Chennai, Tamil Nadu, India
                  </h3>
                  <p className="mt-2 text-xs text-nodal-muted leading-relaxed font-sans">
                    Situated on the OMR IT Expressway in Chennai—India's primary SaaS and technology talent corridor.
                  </p>
                </div>

                <div className="space-y-4 text-xs text-nodal-muted font-sans">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#00D2FF] shrink-0 mt-0.5" />
                    <div>
                      <strong className="block text-white">Registered Address:</strong>
                      <span className="text-nodal-muted">{COMPANY_INFO.headquarters.address}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-[#00D2FF] shrink-0" />
                    <div>
                      <strong className="block text-white">Official Email:</strong>
                      <a href={`mailto:${COMPANY_INFO.contact.email}`} className="text-[#00D2FF] hover:underline">
                        {COMPANY_INFO.contact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-[#00D2FF] shrink-0" />
                    <div>
                      <strong className="block text-white">Direct Phone:</strong>
                      <a href={`tel:${COMPANY_INFO.contact.phone.replace(/[^0-9+]/g, '')}`} className="text-nodal-muted hover:text-white">
                        {COMPANY_INFO.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                    <div>
                      <strong className="block text-white">WhatsApp Verified Business:</strong>
                      <a href={`https://wa.me/${COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '')}`} target="_blank" rel="noopener noreferrer" className="text-emerald-400 font-mono hover:underline">
                        {COMPANY_INFO.contact.whatsapp}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#A78BFA] shrink-0" />
                    <div>
                      <strong className="block text-white">Operating Hours:</strong>
                      <span className="text-nodal-muted">{COMPANY_INFO.contact.hours}</span>
                    </div>
                  </div>
                </div>

                {/* Social Profiles */}
                <div className="pt-4 border-t border-nodal-border">
                  <span className="text-xs font-mono uppercase text-nodal-muted font-bold block mb-3">
                    Official Social Networks:
                  </span>
                  <div className="flex items-center gap-3">
                    <a href={COMPANY_INFO.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-nodal-card hover:bg-[#0066FF] text-nodal-muted hover:text-white border border-nodal-border transition-colors" aria-label="LinkedIn">
                      <LinkedinIcon className="w-4 h-4" />
                    </a>
                    <a href={COMPANY_INFO.social.github} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-nodal-card hover:bg-slate-700 text-nodal-muted hover:text-white border border-nodal-border transition-colors" aria-label="GitHub">
                      <GithubIcon className="w-4 h-4" />
                    </a>
                    <a href={COMPANY_INFO.social.twitter} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-nodal-card hover:bg-sky-500 text-nodal-muted hover:text-white border border-nodal-border transition-colors" aria-label="Twitter">
                      <TwitterIcon className="w-4 h-4" />
                    </a>
                    <a href={COMPANY_INFO.social.youtube} target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-xl bg-nodal-card hover:bg-red-600 text-nodal-muted hover:text-white border border-nodal-border transition-colors" aria-label="YouTube">
                      <YoutubeIcon className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Instant WhatsApp Action Box */}
              <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-950/40 to-nodal-surface border border-emerald-500/30 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-emerald-300 block">
                    Prefer Instant Messaging?
                  </span>
                  <span className="text-[11px] text-nodal-muted font-mono block mt-0.5">
                    Live tech advisors online Mon–Sat
                  </span>
                </div>
                <button
                  onClick={handleWhatsApp}
                  className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-600/30"
                >
                  <MessageSquare className="w-3.5 h-3.5" /> Chat
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
