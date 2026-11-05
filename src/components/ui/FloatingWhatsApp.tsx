import React, { useState } from 'react';
import { MessageSquare, X, Send, Clock, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../../data/nodalbotData';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Data Engineering Course Syllabus');

  const topics = [
    'Data Engineering Course Syllabus',
    'Generative AI & Agentic AI Demo',
    'Power BI & DAX Training Enquiry',
    'Corporate Team Upskilling RFP',
    'College Workshop & FDP Partnership',
    'Software Consulting Discussion'
  ];

  const handleStartChat = () => {
    const text = encodeURIComponent(`Hello NodalBot Technologies! I would like more information on: "${selectedTopic}". Please connect with me.`);
    const cleanPhone = COMPANY_INFO.contact.whatsapp.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=${text}`, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 select-none">
      
      {/* Floating Card Popup */}
      {isOpen && (
        <div className="mb-3 w-80 sm:w-88 bg-[#091124] border-2 border-emerald-500/40 rounded-2xl shadow-2xl shadow-emerald-500/20 p-5 backdrop-blur-xl animate-fadeIn">
          
          {/* Card Header */}
          <div className="flex items-start justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400">
                <MessageSquare className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xs font-bold text-white font-sans">
                  NodalBot WhatsApp Desk
                </span>
                <span className="flex items-center gap-1 text-[10px] font-mono text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span> Online Now
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-slate-400 hover:text-white p-1 rounded-lg"
              aria-label="Close WhatsApp card"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Message Selector */}
          <div className="mt-4">
            <span className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-2 font-semibold">
              Select Your Enquiry:
            </span>
            <div className="space-y-1.5 max-h-40 overflow-y-auto pr-1">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`w-full text-left p-2 rounded-lg text-xs transition-all border ${
                    selectedTopic === t
                      ? 'bg-emerald-600/20 border-emerald-400 text-white font-semibold'
                      : 'bg-nodal-navy border-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-slate-800">
            <button
              onClick={handleStartChat}
              className="w-full py-2.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-emerald-600/30 transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" /> Start WhatsApp Chat
            </button>
            <div className="flex items-center justify-center gap-2 text-[10px] font-mono text-slate-400 mt-2">
              <Clock className="w-3 h-3 text-emerald-400" /> Mon – Sat: 9:00 AM – 7:30 PM IST
            </div>
          </div>

        </div>
      )}

      {/* Main Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white font-bold text-xs shadow-xl shadow-emerald-600/30 hover:scale-105 transition-all group"
        aria-label="Chat with NodalBot on WhatsApp"
      >
        <div className="relative">
          <MessageSquare className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
        </div>
        <span className="hidden sm:inline-block font-sans tracking-wide">
          Chat on WhatsApp
        </span>
      </button>

    </div>
  );
};
