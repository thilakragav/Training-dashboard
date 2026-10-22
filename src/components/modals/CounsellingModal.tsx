import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Phone, Mail, Sparkles } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';
import { api } from '../../services/api';

export const CounsellingModal: React.FC = () => {
  const { isCounsellingModalOpen, closeCounsellingModal } = useLearning();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [targetCareer, setTargetCareer] = useState('AI & Machine Learning Engineer');
  const [preferredDate, setPreferredDate] = useState('Tomorrow');
  const [preferredTimeSlot, setPreferredTimeSlot] = useState('5:00 PM - 5:30 PM');
  const [currentStatus, setCurrentStatus] = useState('College Final Year');

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeCounsellingModal();
    };
    if (isCounsellingModalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCounsellingModalOpen, closeCounsellingModal]);

  if (!isCounsellingModalOpen) return null;

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required';
    if (!phone.trim() || phone.replace(/\D/g, '').length < 10) newErrors.phone = '10-digit phone number is required';
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
        courseInterest: `1-on-1 Counselling: ${targetCareer}`,
        preferredMode: 'Live Online',
        qualification: currentStatus,
        message: `Booked session for ${preferredDate} at ${preferredTimeSlot}. Goal: ${targetCareer}`,
        preferredDate,
        preferredTimeSlot,
        type: 'counselling_booking'
      });
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'Booking submission failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F172A] border border-violet-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#141C33]">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-violet-500/20 text-violet-400 flex items-center justify-center">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs font-semibold text-violet-400 tracking-wider uppercase">Free Career Mentorship</span>
              <h2 className="text-lg font-bold text-white">Book 1-on-1 Academic Counselling</h2>
            </div>
          </div>
          <button 
            onClick={closeCounsellingModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-violet-500/20 text-violet-400 border border-violet-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Counselling Session Confirmed!</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                We have reserved a 30-minute private video session for <span className="text-white font-medium">{fullName}</span> on <span className="text-violet-400 font-medium">{preferredDate} ({preferredTimeSlot})</span>. A senior tech mentor will analyze your resume and map out your roadmap.
              </p>
              <div className="p-4 bg-slate-900 border border-slate-800 rounded-xl text-left text-xs text-slate-300 space-y-1">
                <div><strong className="text-white">Mentor Topic:</strong> {targetCareer} Transition</div>
                <div><strong className="text-white">Format:</strong> 1:1 Google Meet / Zoom link emailed to {email}</div>
                <div><strong className="text-white">Fee:</strong> 100% Free Consultation (Zero Sales Pressure)</div>
              </div>
              <button
                onClick={closeCounsellingModal}
                className="w-full px-5 py-2.5 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-medium text-sm transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <p className="text-xs text-slate-300 leading-relaxed">
                Connect with our senior faculty to review your background, evaluate career paths, and plan portfolio-grade projects suited to your timeline.
              </p>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Target Tech Career Path</label>
                <select
                  value={targetCareer}
                  onChange={e => setTargetCareer(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                >
                  <option value="Generative AI & LLM Solutions Engineer">Generative AI & LLM Solutions Engineer</option>
                  <option value="AI & Machine Learning Engineer">AI & Machine Learning Engineer</option>
                  <option value="Full-Stack Web Developer (React + Node)">Full-Stack Web Developer (React + Node)</option>
                  <option value="Data Analyst & BI Specialist">Data Analyst & BI Specialist</option>
                  <option value="Data Engineer (PySpark & Airflow)">Data Engineer (PySpark & Airflow)</option>
                  <option value="Cloud Architect & DevOps Engineer">Cloud Architect & DevOps Engineer</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" /> Preferred Day
                  </label>
                  <select
                    value={preferredDate}
                    onChange={e => setPreferredDate(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                  >
                    <option value="Today (Evening)">Today (Evening)</option>
                    <option value="Tomorrow">Tomorrow</option>
                    <option value="This Saturday">This Saturday</option>
                    <option value="This Sunday">This Sunday</option>
                    <option value="Next Week">Next Week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-violet-400" /> Time Slot (IST)
                  </label>
                  <select
                    value={preferredTimeSlot}
                    onChange={e => setPreferredTimeSlot(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                  >
                    <option value="11:00 AM - 11:30 AM">11:00 AM - 11:30 AM</option>
                    <option value="2:00 PM - 2:30 PM">2:00 PM - 2:30 PM</option>
                    <option value="5:00 PM - 5:30 PM">5:00 PM - 5:30 PM</option>
                    <option value="7:30 PM - 8:00 PM">7:30 PM - 8:00 PM</option>
                    <option value="8:30 PM - 9:00 PM">8:30 PM - 9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Rahul Sharma"
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                  />
                </div>
                {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="email"
                      value={email}
                      onChange={e => setEmail(e.target.value)}
                      placeholder="rahul@example.com"
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                    />
                  </div>
                  {errors.email && <p className="text-rose-400 text-xs mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Phone / WhatsApp</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      placeholder="+91 98765 43210"
                      className="w-full pl-9 pr-3 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-violet-500 transition"
                    />
                  </div>
                  {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-violet-600/30 transition disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Confirming Booking...' : 'Confirm Free 1-on-1 Counselling Slot'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
