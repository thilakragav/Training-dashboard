import React, { useState, useEffect } from 'react';
import { X, Calendar, Clock, CheckCircle2, User, Mail, Phone, Users } from 'lucide-react';
import { useLearning } from '../../context/LearningContext';
import { api } from '../../services/api';

export const WorkshopRegisterModal: React.FC = () => {
  const { isWorkshopModalOpen, closeWorkshopModal, selectedWorkshop } = useLearning();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWorkshopModal();
    };
    if (isWorkshopModalOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isWorkshopModalOpen, closeWorkshopModal]);

  if (!isWorkshopModalOpen || !selectedWorkshop) return null;

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
      await api.registerWorkshop(selectedWorkshop.id, { fullName, email, phone });
      setIsSuccess(true);
    } catch {
      setErrors({ form: 'Registration failed. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0F172A] border border-cyan-500/30 rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-[#141C33]">
          <div>
            <span className="text-xs font-semibold text-cyan-400 tracking-wider uppercase">Live Masterclass Registration</span>
            <h2 className="text-lg font-bold text-white line-clamp-1">{selectedWorkshop.title}</h2>
          </div>
          <button 
            onClick={closeWorkshopModal}
            className="p-2 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto">
          {isSuccess ? (
            <div className="py-6 text-center space-y-4">
              <div className="w-16 h-16 bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-white">Seat Confirmed!</h3>
              <p className="text-slate-300 text-sm leading-relaxed max-w-sm mx-auto">
                Your seat has been reserved for <span className="text-white font-medium">{selectedWorkshop.title}</span> on <span className="text-cyan-400 font-medium">{selectedWorkshop.date} ({selectedWorkshop.time})</span>.
              </p>
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-left text-xs text-slate-300 space-y-1">
                <div><strong className="text-white">Instructor:</strong> {selectedWorkshop.instructorName} ({selectedWorkshop.instructorRole})</div>
                <div><strong className="text-white">Access Link:</strong> Calendar invite dispatched to {email}</div>
              </div>
              <button
                onClick={closeWorkshopModal}
                className="w-full px-5 py-2.5 bg-cyan-600 hover:bg-cyan-500 text-white rounded-xl font-medium text-sm transition"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-left">
              <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-cyan-400" /> {selectedWorkshop.date}</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-cyan-400" /> {selectedWorkshop.time}</span>
                </div>
                <div className="flex items-center justify-between pt-1 border-t border-slate-800/80 text-slate-400">
                  <span>Instructor: <strong className="text-white">{selectedWorkshop.instructorName}</strong></span>
                  <span className="text-emerald-400 font-semibold">{selectedWorkshop.isFree ? '100% Free Entry' : 'Paid Entry'}</span>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="text"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    placeholder="e.g. Sneha Roy"
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                {errors.fullName && <p className="text-rose-400 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
                  <input
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="sneha@example.com"
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition"
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
                    className="w-full pl-9 pr-3.5 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-sm focus:outline-none focus:border-cyan-500 transition"
                  />
                </div>
                {errors.phone && <p className="text-rose-400 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 pt-1">
                <Users className="w-4 h-4 text-cyan-400" />
                <span>{selectedWorkshop.seatsTotal - selectedWorkshop.seatsRegistered} seats left out of {selectedWorkshop.seatsTotal} total seats.</span>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-semibold text-sm shadow-lg shadow-cyan-600/25 transition disabled:opacity-50 mt-2"
              >
                {isSubmitting ? 'Reserving...' : 'Reserve Free Masterclass Seat'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
