import React, { useState } from 'react';
import { Briefcase, ArrowRight, ShieldCheck, CheckCircle2, RotateCcw, Send, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DIGITAL_SOLUTIONS_SERVICES } from '../../data/nodalbotData';

export const SolutionDiscoveryEngine: React.FC = () => {
  const [selectedProblem, setSelectedProblem] = useState<string>('data-silos');
  const [selectedIndustry, setSelectedIndustry] = useState<string>('bfsi');
  const [selectedTech, setSelectedTech] = useState<string>('databricks');
  const [isGenerated, setIsGenerated] = useState<boolean>(true);

  const businessProblems = [
    { id: 'data-silos', label: 'Data Silos & Slow Analytical Reports', serviceId: 'service-data-engineering' },
    { id: 'manual-toil', label: 'Repetitive Manual Invoice & Data Entry Toil', serviceId: 'service-rpa-automation' },
    { id: 'genai-rag', label: 'Need for Secure Internal AI Knowledge Assistant', serviceId: 'service-artificial-intelligence' },
    { id: 'legacy-monolith', label: 'Outdated Monolithic Software Needing Modernization', serviceId: 'service-custom-software' },
    { id: 'slow-decisions', label: 'Executive Leadership Lacks Real-Time KPI Dashboards', serviceId: 'service-business-intelligence' },
    { id: 'cloud-costs', label: 'Spiraling Cloud Costs & Infrastructure Downtime', serviceId: 'service-cloud-architecture' }
  ];

  const industries = [
    { id: 'bfsi', label: 'Banking & Financial Services' },
    { id: 'healthcare', label: 'Healthcare & Life Sciences' },
    { id: 'retail', label: 'Retail & E-Commerce' },
    { id: 'logistics', label: 'Logistics & Supply Chain' },
    { id: 'manufacturing', label: 'Manufacturing & Industrial' },
    { id: 'education', label: 'Education & EdTech' }
  ];

  const techPreferences = [
    { id: 'databricks', label: 'Databricks & Spark' },
    { id: 'azure-fabric', label: 'Microsoft Azure & Fabric' },
    { id: 'power-bi', label: 'Power BI & DAX' },
    { id: 'openai-mcp', label: 'OpenAI, Claude & MCP' },
    { id: 'power-automate', label: 'Power Automate & UiPath' },
    { id: 'react-node', label: 'React, Node & Python' }
  ];

  // Resolve matching service
  const currentProblemObj = businessProblems.find(p => p.id === selectedProblem) || businessProblems[0];
  const matchedService = DIGITAL_SOLUTIONS_SERVICES.find(s => s.id === currentProblemObj.serviceId) || DIGITAL_SOLUTIONS_SERVICES[0];

  return (
    <section className="py-20 bg-nodal-navy relative overflow-hidden border-t border-nodal-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs uppercase tracking-widest mb-3">
            <Briefcase className="w-3.5 h-3.5" /> Enterprise Solution Configurator
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nodal-text tracking-tight font-display">
            Enterprise <span className="text-gradient-electric">Solution Discovery</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Select your primary business challenge, operating industry, and technology preference to generate an architectural recommendation and consultation blueprint.
          </p>
        </div>

        {/* 2-Column Discovery Interface */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Selectors (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* 1. Problem Selector */}
            <div className="bg-nodal-card rounded-2xl border border-nodal-border p-5 sm:p-6 shadow-xl">
              <label className="block text-xs font-mono uppercase tracking-wider text-[#C56845] dark:text-[#E5A17D] font-bold mb-3">
                1. Select Core Business Challenge
              </label>
              <div className="space-y-2">
                {businessProblems.map((prob) => (
                  <button
                    key={prob.id}
                    onClick={() => setSelectedProblem(prob.id)}
                    className={`w-full p-3 rounded-xl text-left border text-xs sm:text-sm font-semibold transition-all flex items-center justify-between ${
                      selectedProblem === prob.id
                        ? 'bg-[#C56845]/15 border-[#C56845] dark:border-[#E5A17D] text-white shadow-md shadow-blue-500/10'
                        : 'bg-[#0B1530] border-slate-700/60 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <span>{prob.label}</span>
                    {selectedProblem === prob.id && <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Industry Selector */}
            <div className="bg-nodal-card rounded-2xl border border-nodal-border p-5 sm:p-6 shadow-xl">
              <label className="block text-xs font-mono uppercase tracking-wider text-indigo-400 font-bold mb-3">
                2. Select Industry Vertical
              </label>
              <div className="grid grid-cols-2 gap-2">
                {industries.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setSelectedIndustry(ind.id)}
                    className={`p-2.5 rounded-lg text-left border text-xs font-medium transition-all ${
                      selectedIndustry === ind.id
                        ? 'bg-indigo-600/20 border-indigo-400 text-white font-bold'
                        : 'bg-[#0B1530] border-slate-700/60 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    {ind.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Technology Focus */}
            <div className="bg-nodal-card rounded-2xl border border-nodal-border p-5 sm:p-6 shadow-xl">
              <label className="block text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3">
                3. Technology Stack Preference
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {techPreferences.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setSelectedTech(t.id)}
                    className={`p-2.5 rounded-lg text-center border text-xs font-mono transition-all ${
                      selectedTech === t.id
                        ? 'bg-purple-600/20 border-purple-400 text-purple-200 font-bold'
                        : 'bg-[#0B1530] border-slate-700/60 hover:border-slate-500 text-slate-400'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Dynamic Architectural Solution Blueprint (6 Cols) */}
          <div className="lg:col-span-6 bg-gradient-to-b from-[#0F1B38] to-[#070D1E] rounded-2xl border-2 border-indigo-500/40 p-6 sm:p-8 shadow-2xl relative sticky top-24">
            
            <div className="flex items-center justify-between pb-4 border-b border-nodal-border">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
                <span className="text-xs font-mono uppercase tracking-widest text-[#C56845] dark:text-[#E5A17D] font-bold">
                  RECOMMENDED SOLUTION BLUEPRINT
                </span>
              </div>
              <span className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-2.5 py-0.5 rounded-full border border-slate-700">
                Service #{matchedService.serviceNumber}
              </span>
            </div>

            <div className="mt-5">
              <h3 className="text-2xl font-extrabold text-nodal-text font-display">
                {matchedService.title}
              </h3>
              <p className="text-xs text-indigo-300 font-mono mt-1">
                {matchedService.tagline}
              </p>
              <p className="mt-3 text-sm text-nodal-muted leading-relaxed font-sans">
                {matchedService.shortDescription}
              </p>
            </div>

            {/* Proposed Architecture Overview */}
            <div className="mt-5 p-4 rounded-xl bg-nodal-navy border border-nodal-border">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C56845] dark:text-[#E5A17D] font-bold uppercase mb-1">
                <Layers className="w-3.5 h-3.5" /> Tailored Architecture
              </div>
              <p className="text-xs text-nodal-muted leading-relaxed font-sans">
                {matchedService.solutionArchitectureOverview}
              </p>
            </div>

            {/* Concrete Deliverables */}
            <div className="mt-5">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2 font-semibold">
                Key Deliverables for Your Business:
              </span>
              <ul className="space-y-1.5 text-xs text-slate-300">
                {matchedService.keyCapabilities[0].deliverables.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Business Value Metrics */}
            <div className="mt-5 grid grid-cols-2 gap-3 pt-4 border-t border-nodal-border">
              {matchedService.businessValueMetrics.slice(0, 2).map((bvm, i) => (
                <div key={i} className="p-2.5 rounded-lg bg-[#C56845]/10 border border-[#C56845]/20">
                  <span className="block text-[10px] font-mono uppercase text-[#C56845] dark:text-[#E5A17D] font-bold">
                    {bvm.metric}
                  </span>
                  <span className="block text-xs font-semibold text-white mt-0.5">
                    {bvm.impact}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA to Schedule Discovery Consultation */}
            <div className="mt-6 pt-4 border-t border-nodal-border space-y-2.5">
              <Link
                to="/contact"
                className="w-full py-3 px-5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs sm:text-sm font-bold text-center block shadow-lg shadow-sm transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" /> Schedule a Free Initial Consultation
              </Link>
              <Link
                to="/digital-solutions"
                className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center block border border-slate-700 transition-all"
              >
                View Complete Engineering Capabilities
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
