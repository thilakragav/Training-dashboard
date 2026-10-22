import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Building2, 
  Clock, 
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { api } from '../services/api';
import { COURSES_DATA } from '../data/coursesData';

export const ContactPage: React.FC = () => {
  const [activeFormType, setActiveFormType] = useState<'student_enquiry' | 'corporate_training'>('student_enquiry');

  // Form fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [courseInterest, setCourseInterest] = useState(COURSES_DATA[0].title);
  const [organization, setOrganization] = useState('');
  const [numberOfLearners, setNumberOfLearners] = useState('10-25 Employees');
  const [qualification, setQualification] = useState('College Student');
  const [message, setMessage] = useState('');
  const [consent, setConsent] = useState(true);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) newErrors.phone = '10-digit phone number is required';
    if (!consent) newErrors.consent = 'Consent is required to receive admissions guidance';
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
        courseInterest: activeFormType === 'corporate_training' ? `Corporate: ${organization}` : courseInterest,
        preferredMode: 'Hybrid (Classroom + Online)',
        qualification: activeFormType === 'corporate_training' ? `Org: ${organization} (${numberOfLearners})` : qualification,
        message,
        type: activeFormType === 'corporate_training' ? 'corporate_training' : 'general_enquiry'
      });
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'Submission failed. Please check network connectivity.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFullName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setOrganization('');
    setIsSuccess(false);
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Admissions & Support Desk</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Connect With <span className="text-gradient">Nexora Academy</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Whether you want to enroll in an upcoming batch, plan customized enterprise corporate upskilling, or schedule a campus visit, our team is at your service.
          </p>
        </div>

        {/* Contact Information & Channels Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Call Admissions</h3>
            <p className="text-xs text-slate-400">Toll-Free & Direct Line</p>
            <p className="text-xs font-mono font-semibold text-white pt-1">+91 98765 43210</p>
            <p className="text-[11px] text-slate-500">Mon - Sat: 9:00 AM - 8:00 PM IST</p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <MessageSquare className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Instant WhatsApp</h3>
            <p className="text-xs text-slate-400">Direct Chat with Counsellors</p>
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-xs font-semibold text-emerald-400 hover:underline pt-1"
            >
              Start WhatsApp Chat →
            </a>
            <p className="text-[11px] text-slate-500">Typically replies in 15 mins</p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-violet-500/10 text-violet-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Official Email</h3>
            <p className="text-xs text-slate-400">Curriculum & Verification</p>
            <p className="text-xs font-mono font-semibold text-white pt-1">admissions@nexora.academy</p>
            <p className="text-[11px] text-slate-500">Response guaranteed in 4 hrs</p>
          </div>

          <div className="bg-[#0F172A] border border-slate-800 p-6 rounded-2xl space-y-2">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-sm font-bold text-white">Main Tech Campus</h3>
            <p className="text-xs text-slate-400">Cyber Corridor, Outer Ring Rd</p>
            <p className="text-xs text-slate-300 pt-1">Bengaluru & Hyderabad, India</p>
            <p className="text-[11px] text-slate-500">Campus visits by appointment</p>
          </div>
        </div>

        {/* Main Interactive Form Box */}
        <div className="bg-[#0F172A] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl max-w-4xl mx-auto">
          
          {/* Form Switcher */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-900 border border-slate-800 rounded-2xl">
              <button
                type="button"
                onClick={() => {
                  setActiveFormType('student_enquiry');
                  resetForm();
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeFormType === 'student_enquiry'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Student Course Enquiry
              </button>
              <button
                type="button"
                onClick={() => {
                  setActiveFormType('corporate_training');
                  resetForm();
                }}
                className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition ${
                  activeFormType === 'corporate_training'
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Corporate & College Training
              </button>
            </div>
          </div>

          {isSuccess ? (
            <div className="py-10 text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Enquiry Received Successfully!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{fullName}</strong>. Your enquiry has been registered in our admissions system. Our academic lead will contact you at <strong className="text-blue-400">{phone}</strong>.
              </p>
              <button
                onClick={resetForm}
                className="px-6 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl text-xs font-semibold transition"
              >
                Submit Another Query
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.form && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-xl text-xs text-red-400 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  <span>{errors.form}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Your Full Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Ananya Roy"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
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
                    placeholder="ananya@example.com"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                  />
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                </div>

                {activeFormType === 'student_enquiry' ? (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Program of Interest
                    </label>
                    <select
                      value={courseInterest}
                      onChange={e => setCourseInterest(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                    >
                      {COURSES_DATA.map(c => (
                        <option key={c.id} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">
                      Organization / College Name <span className="text-rose-400">*</span>
                    </label>
                    <input
                      type="text"
                      value={organization}
                      onChange={e => setOrganization(e.target.value)}
                      placeholder="e.g. Infosys / RV College of Engg"
                      className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>
                )}
              </div>

              {activeFormType === 'corporate_training' && (
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">
                    Estimated Batch Size
                  </label>
                  <select
                    value={numberOfLearners}
                    onChange={e => setNumberOfLearners(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition"
                  >
                    <option value="5-15 Engineers">Small Team (5 - 15 Engineers)</option>
                    <option value="15-40 Engineers">Mid-Size Cohort (15 - 40 Engineers)</option>
                    <option value="50+ Batch">Campus Wide or Division Scale (50+ Learners)</option>
                  </select>
                </div>
              )}

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">
                  How can we assist you? (Optional)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="Share details about batch timings, EMI queries, prior coding background, or customized topics..."
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500 transition resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="contactConsent"
                  checked={consent}
                  onChange={e => setConsent(e.target.checked)}
                  className="mt-1 rounded bg-slate-900 border-slate-700 text-blue-500"
                />
                <label htmlFor="contactConsent" className="text-xs text-slate-400 leading-tight">
                  I agree to receive course brochures and consultation details via phone, email, or WhatsApp. We never sell or spam personal information.
                </label>
              </div>
              {errors.consent && <p className="text-rose-400 text-xs">{errors.consent}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl font-bold text-xs sm:text-sm shadow-xl shadow-blue-600/30 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>{isSubmitting ? 'Saving Enquiry...' : 'Submit Academic Enquiry'}</span>
              </button>
            </form>
          )}

        </div>

      </div>
    </div>
  );
};
