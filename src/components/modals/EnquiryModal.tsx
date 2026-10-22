import React, { useState, useEffect } from 'react';
import { X, Send, CheckCircle2, MessageSquare, AlertCircle } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';
import { COURSES_DATA } from '../../data/coursesData';
import { api } from '../../services/api';
import { DeliveryMode } from '../../types';

export const EnquiryModal: React.FC = () => {
  const { isEnquiryModalOpen, closeEnquiryModal, enquiryModalCourse } = useLearning();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseInterest, setCourseInterest] = useState('');
  const [preferredMode, setPreferredMode] = useState<DeliveryMode | 'Any'>('Any');
  const [qualification, setQualification] = useState('College Student');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (enquiryModalCourse) {
      setCourseInterest(enquiryModalCourse.title);
    } else if (COURSES_DATA.length > 0) {
      setCourseInterest(COURSES_DATA[0].title);
    }
    setErrors({});
    setIsSuccess(false);
  }, [enquiryModalCourse, isEnquiryModalOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeEnquiryModal();
    };
    if (isEnquiryModalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isEnquiryModalOpen, closeEnquiryModal]);

  if (!isEnquiryModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Please enter your full name';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email address is required';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) newErrors.phone = '10-digit phone number is required';
    if (!courseInterest) newErrors.courseInterest = 'Please select a course of interest';
    if (!consent) newErrors.consent = 'Please consent to receiving academic consultation details';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await api.submitEnquiry({
        fullName,
        email,
        phone,
        courseInterest,
        preferredMode,
        qualification,
        message,
        type: 'general_enquiry'
      });
      setIsSuccess(true);
    } catch (err) {
      setErrors({ form: 'An unexpected error occurred while saving your enquiry. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hello Nexora Tech Academy Admissions! I am interested in enrolling in ${courseInterest || 'a tech program'}. Could you share syllabus and batch details? My name is ${fullName || 'a prospective student'}.`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-xl bg-[#0F172A] border border-blue-500/20 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#131B2E]">
          <div>
            <span className="text-xs font-semibold text-blue-400 tracking-wider uppercase">Admissions & Enquiries</span>
            <h2 id="modal-title" className="text-xl font-bold text-white">
              {enquiryModalCourse ? `Enquire for ${enquiryModalCourse.title}` : 'Speak with an Academic Advisor'}
            </h2>
          </div>
          <button 
            onClick={closeEnquiryModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Enquiry Submitted Successfully!</h3>
              <p className="text-slate-300 max-w-md mx-auto text-sm leading-relaxed">
                Thank you, <span className="text-white font-medium">{fullName}</span>. Your details for <span className="text-blue-400 font-medium">{courseInterest}</span> have been routed to our admissions faculty. Expect a call/email within 4 business hours.
              </p>
              
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-medium text-sm transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat Instantly on WhatsApp
                </a>
                <button
                  onClick={closeEnquiryModal}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-medium text-sm transition"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              {errors.form && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Priya Sharma"
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="e.g. priya@example.com"
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Current Background
                  </label>
                  <select
                    value={qualification}
                    onChange={e => setQualification(e.target.value)}
                    className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="College Student">College Student (Engineering / IT / BCA / MCA)</option>
                    <option value="Fresh Graduate">Fresh Graduate Looking for Placement</option>
                    <option value="Working Tech Professional">Working Tech Professional (1-4 Yrs)</option>
                    <option value="Non-Tech Career Switcher">Non-IT Professional Career Switcher</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Program of Interest <span className="text-rose-400">*</span>
                </label>
                <select
                  value={courseInterest}
                  onChange={e => setCourseInterest(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition"
                >
                  {COURSES_DATA.map(c => (
                    <option key={c.id} value={c.title}>
                      {c.title} ({c.level} - {c.durationWeeks} Wks)
                    </option>
                  ))}
                </select>
                {errors.courseInterest && <p className="text-rose-400 text-xs mt-1">{errors.courseInterest}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Preferred Delivery Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Live Online', 'Hybrid (Classroom + Online)', 'Any'] as const).map(mode => (
                    <button
                      type="button"
                      key={mode}
                      onClick={() => setPreferredMode(mode)}
                      className={`px-3 py-2 text-xs rounded-xl border text-center transition font-medium ${
                        preferredMode === mode 
                          ? 'bg-blue-600/20 border-blue-500 text-blue-300' 
                          : 'bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      {mode === 'Hybrid (Classroom + Online)' ? 'Hybrid' : mode}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  Questions or Special Requirements (Optional)
                </label>
                <textarea
                  rows={2}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Ask about batch timings, EMI options, syllabus details, or scholarship eligibility..."
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  className="mt-1 rounded bg-slate-900 border-slate-700 text-blue-500 focus:ring-0"
                />
                <label htmlFor="consent" className="text-xs text-slate-400 leading-tight">
                  I agree to receive course syllabus updates and academic counselling via call, email, or WhatsApp. Nexora Tech Academy values privacy and never shares contact data.
                </label>
              </div>
              {errors.consent && <p className="text-rose-400 text-xs">{errors.consent}</p>}

              <div className="pt-3 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-blue-600/25 transition disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? 'Submitting Enquiry...' : 'Submit Course Enquiry'}
                </button>
                <a
                  href={`https://wa.me/919876543210?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 hover:bg-slate-700 text-emerald-400 border border-emerald-500/30 rounded-xl font-medium text-sm transition"
                >
                  <MessageSquare className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
