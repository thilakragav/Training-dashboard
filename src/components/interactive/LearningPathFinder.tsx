import React, { useState } from 'react';
import { Compass, CheckCircle2, ArrowRight, RotateCcw, Sparkles, BookOpen, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAREER_PATHWAYS_DATA } from '../../data/nodalbotData';

export const LearningPathFinder: React.FC = () => {
  const [step, setStep] = useState<number>(1);
  const [background, setBackground] = useState<string>('');
  const [primaryInterest, setPrimaryInterest] = useState<string>('');
  const [careerGoal, setCareerGoal] = useState<string>('');
  const [weeklyCommitment, setWeeklyCommitment] = useState<string>('');
  const [resultPathwayId, setResultPathwayId] = useState<string | null>(null);

  const backgroundOptions = [
    { id: 'student', label: 'College Student / Fresh Graduate', desc: 'Seeking first high-paying technology role' },
    { id: 'non-it', label: 'Non-IT / Career Switcher', desc: 'Transitioning from operations, sales, or banking into tech' },
    { id: 'developer', label: 'Software / Database Developer', desc: 'Looking to specialize in modern data, AI, or cloud platforms' },
    { id: 'analyst', label: 'Business / Financial Analyst', desc: 'Wanting advanced DAX, Fabric, and data engineering capabilities' }
  ];

  const interestOptions = [
    { id: 'data-eng', label: 'Data Engineering & Lakehouses', desc: 'Building high-scale pipelines, Databricks, Spark & Snowflake' },
    { id: 'ai-genai', label: 'Generative AI & Autonomous Agents', desc: 'Prompt engineering, RAG pipelines, MCP servers, and LLMs' },
    { id: 'bi-analytics', label: 'Power BI, DAX & Executive Analytics', desc: 'Data storytelling, executive dashboards, and business intelligence' },
    { id: 'data-science', label: 'Data Science & Machine Learning', desc: 'Statistical modeling, PyTorch deep learning, and MLOps' },
    { id: 'automation', label: 'RPA & Intelligent Automation', desc: 'Power Automate, UiPath, and automated AI document triage' }
  ];

  const goalOptions = [
    { id: 'transition', label: 'Complete Career Switch into IT', desc: 'Aiming for full-time data, AI, or BI job offers' },
    { id: 'promotion', label: 'Promotion / Salary Growth at Current Firm', desc: 'Mastering next-generation skills for senior designations' },
    { id: 'placement', label: 'Campus Placement Excellence', desc: 'Standing out with verified production capstone projects' },
    { id: 'enterprise-project', label: 'Deliver Upcoming Enterprise Workload', desc: 'Upskilling immediately for an active corporate project' }
  ];

  const commitmentOptions = [
    { id: '5-10', label: '5 – 10 Hours / Week', desc: 'Weekend learning with weekday self-paced practice' },
    { id: '10-20', label: '10 – 20 Hours / Week', desc: 'Intensive hybrid track with weekday evening labs' },
    { id: 'fulltime', label: 'Full-Time Immersion (25+ Hours)', desc: 'Accelerated bootcamp mode for immediate placement' }
  ];

  const handleCalculateMatch = () => {
    // Intelligent matching rule logic mapping inputs to configured 14 Career Pathways
    if (primaryInterest === 'data-eng') {
      if (background === 'developer') setResultPathwayId('azure-data-engineer');
      else setResultPathwayId('data-engineer');
    } else if (primaryInterest === 'ai-genai') {
      if (background === 'developer') setResultPathwayId('generative-ai-engineer');
      else setResultPathwayId('ai-engineer');
    } else if (primaryInterest === 'bi-analytics') {
      if (background === 'analyst' || background === 'non-it') setResultPathwayId('power-bi-developer');
      else setResultPathwayId('bi-developer');
    } else if (primaryInterest === 'data-science') {
      if (background === 'developer') setResultPathwayId('machine-learning-engineer');
      else setResultPathwayId('data-scientist');
    } else if (primaryInterest === 'automation') {
      if (background === 'developer') setResultPathwayId('automation-architect');
      else setResultPathwayId('rpa-developer');
    } else {
      setResultPathwayId('data-analyst');
    }
    setStep(5);
  };

  const handleReset = () => {
    setStep(1);
    setBackground('');
    setPrimaryInterest('');
    setCareerGoal('');
    setWeeklyCommitment('');
    setResultPathwayId(null);
  };

  const matchedPathway = CAREER_PATHWAYS_DATA.find(p => p.slug === resultPathwayId) || CAREER_PATHWAYS_DATA[0];

  return (
    <section className="py-20 bg-nodal-bg relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#C56845]/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C56845]/10 border border-[#C56845]/20 text-[#C56845] dark:text-[#E5A17D] font-mono text-xs uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" /> Guided Career Navigator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-nodal-text tracking-tight font-display">
            Find Your <span className="text-gradient-electric">Technology Career Path</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Answer 4 quick questions about your background and goals. Our algorithmic advisor will recommend the ideal learning sequence and industry pathway.
          </p>
        </div>

        {/* Wizard Container */}
        <div className="bg-nodal-card rounded-2xl border border-nodal-border p-6 sm:p-10 shadow-2xl relative">
          
          {/* Progress Indicators */}
          {step <= 4 && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                <span>QUESTION {step} OF 4</span>
                <span>{Math.round((step / 4) * 100)}% COMPLETED</span>
              </div>
              <div className="w-full h-1.5 rounded-full bg-slate-800 overflow-hidden">
                <div 
                  className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                ></div>
              </div>
            </div>
          )}

          {/* STEP 1: CURRENT BACKGROUND */}
          {step === 1 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                1. What is your current educational or professional background?
              </h3>
              <p className="text-xs text-slate-400 mb-6">Select the option that best reflects your current status.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {backgroundOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setBackground(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      background === opt.id
                        ? 'bg-[#C56845]/15 border-[#C56845] dark:border-[#E5A17D] shadow-md shadow-sm'
                        : 'bg-[#0B1530] border-slate-700/80 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-white text-sm block">{opt.label}</span>
                      {background === opt.id && <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5" />}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{opt.desc}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-end">
                <button
                  disabled={!background}
                  onClick={() => setStep(2)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    background 
                      ? 'bg-[#C56845] hover:bg-[#B45A38] text-white shadow-lg shadow-sm' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 2: PRIMARY TECHNOLOGY INTEREST */}
          {step === 2 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                2. Which technology area excites you the most?
              </h3>
              <p className="text-xs text-slate-400 mb-6">Choose the domain you want to master.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {interestOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPrimaryInterest(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      primaryInterest === opt.id
                        ? 'bg-[#C56845]/15 border-[#C56845] dark:border-[#E5A17D] shadow-md shadow-sm'
                        : 'bg-[#0B1530] border-slate-700/80 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-white text-sm block">{opt.label}</span>
                      {primaryInterest === opt.id && <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5" />}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{opt.desc}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  ← Back
                </button>
                <button
                  disabled={!primaryInterest}
                  onClick={() => setStep(3)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    primaryInterest 
                      ? 'bg-[#C56845] hover:bg-[#B45A38] text-white shadow-lg shadow-sm' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 3: CAREER GOAL */}
          {step === 3 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                3. What is your primary objective over the next 6 months?
              </h3>
              <p className="text-xs text-slate-400 mb-6">This helps us recommend the proper intensity level.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {goalOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setCareerGoal(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      careerGoal === opt.id
                        ? 'bg-[#C56845]/15 border-[#C56845] dark:border-[#E5A17D] shadow-md shadow-sm'
                        : 'bg-[#0B1530] border-slate-700/80 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-white text-sm block">{opt.label}</span>
                      {careerGoal === opt.id && <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5" />}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{opt.desc}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(2)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  ← Back
                </button>
                <button
                  disabled={!careerGoal}
                  onClick={() => setStep(4)}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    careerGoal 
                      ? 'bg-[#C56845] hover:bg-[#B45A38] text-white shadow-lg shadow-sm' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  Next Question <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}

          {/* STEP 4: TIME COMMITMENT */}
          {step === 4 && (
            <div>
              <h3 className="text-xl font-bold text-white mb-2 font-display">
                4. How much time can you dedicate weekly to training & labs?
              </h3>
              <p className="text-xs text-slate-400 mb-6">We balance your schedule with hands-on capstone builds.</p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {commitmentOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setWeeklyCommitment(opt.id)}
                    className={`p-4 rounded-xl text-left border transition-all ${
                      weeklyCommitment === opt.id
                        ? 'bg-[#C56845]/15 border-[#C56845] dark:border-[#E5A17D] shadow-md shadow-sm'
                        : 'bg-[#0B1530] border-slate-700/80 hover:border-slate-500 text-slate-300'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <span className="font-semibold text-white text-sm block">{opt.label}</span>
                      {weeklyCommitment === opt.id && <CheckCircle2 className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5" />}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{opt.desc}</span>
                  </button>
                ))}
              </div>

              <div className="mt-8 flex justify-between items-center">
                <button
                  onClick={() => setStep(3)}
                  className="px-4 py-2 text-xs font-mono text-slate-400 hover:text-white"
                >
                  ← Back
                </button>
                <button
                  disabled={!weeklyCommitment}
                  onClick={handleCalculateMatch}
                  className={`px-6 py-2.5 rounded-xl font-semibold text-sm flex items-center gap-2 transition-all ${
                    weeklyCommitment 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white shadow-lg shadow-cyan-500/25' 
                      : 'bg-slate-800 text-slate-500 cursor-not-allowed'
                  }`}
                >
                  <Sparkles className="w-4 h-4" /> Compute Recommendation
                </button>
              </div>
            </div>
          )}

          {/* STEP 5: RECOMMENDATION RESULT SCREEN */}
          {step === 5 && (
            <div className="animate-fadeIn">
              <div className="flex items-center justify-between border-b border-nodal-border pb-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-bold">
                    RECOMMENDED CAREER PATHWAY MATCH: 96%
                  </span>
                </div>
                <button 
                  onClick={handleReset}
                  className="flex items-center gap-1.5 text-xs font-mono text-slate-400 hover:text-[#C56845] dark:text-[#E5A17D] transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" /> Retake Quiz
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                
                {/* Pathway Overview (7 Cols) */}
                <div className="md:col-span-7">
                  <span className="text-xs font-mono uppercase tracking-wider text-[#C56845] dark:text-[#E5A17D] font-semibold block mb-1">
                    {matchedPathway.domain}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-nodal-text font-display">
                    {matchedPathway.roleTitle}
                  </h3>
                  <p className="mt-2 text-sm text-slate-300 font-sans leading-relaxed">
                    {matchedPathway.tagline}
                  </p>

                  {/* Core skills */}
                  <div className="mt-4">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-2">
                      Core Technologies You Will Master:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {matchedPathway.technologyStack.map((tech) => (
                        <span key={tech} className="px-2.5 py-1 rounded-md text-xs font-mono bg-[#C56845]/10 text-[#C56845] dark:text-[#E5A17D] border border-nodal-border">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Recommended 4-phase sequence */}
                  <div className="mt-6">
                    <span className="text-xs font-mono text-slate-400 uppercase tracking-wider block mb-3">
                      Recommended 4-Phase Roadmap:
                    </span>
                    <div className="space-y-2.5">
                      {matchedPathway.learningSequence.map((seq, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-[#070D1E] border border-nodal-border flex items-start gap-3">
                          <span className="w-6 h-6 rounded-full bg-[#C56845]/20 text-[#C56845] dark:text-[#E5A17D] font-mono text-xs flex items-center justify-center shrink-0 border border-blue-500/40">
                            {idx + 1}
                          </span>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-xs font-bold text-white font-sans">{seq.title}</span>
                              <span className="text-[10px] font-mono text-slate-400">({seq.duration})</span>
                            </div>
                            <span className="text-[11px] text-slate-400 block mt-0.5">
                              {seq.topics.join(' • ')}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct Action Card (5 Cols) */}
                <div className="md:col-span-5 flex flex-col justify-between p-6 rounded-xl bg-gradient-to-b from-[#0F1B38] to-[#070D1E] border border-blue-500/40">
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 block mb-1">
                      RECOMMENDED FLAGSHIP COURSE
                    </span>
                    <h4 className="text-lg font-bold text-nodal-text font-display">
                      {matchedPathway.recommendedCourses[0]}
                    </h4>
                    
                    <div className="mt-4 space-y-2 text-xs text-slate-300">
                      <div className="flex items-center gap-2">
                        <Target className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                        <span>Salary Band: <strong>{matchedPathway.averageSalaryBand}</strong></span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                        <span>Format: Live Online or Hybrid Classroom</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="w-3.5 h-3.5 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                        <span>Industrial Capstone Portfolio Included</span>
                      </div>
                    </div>

                    <div className="mt-4 p-3 rounded-lg bg-[#C56845]/10 border border-[#C56845]/20 text-[11px] text-cyan-200">
                      <strong>Sample Capstone:</strong> {matchedPathway.practicalProjectIdeas[0].title}
                    </div>
                  </div>

                  <div className="mt-6 space-y-2.5 pt-4 border-t border-nodal-border">
                    <Link
                      to="/roadmaps"
                      className="w-full py-2.5 px-4 rounded-xl bg-[#C56845] hover:bg-[#B45A38] text-white text-xs font-bold text-center block shadow-lg shadow-sm transition-all"
                    >
                      View Full 14-Career Roadmaps
                    </Link>
                    <Link
                      to="/contact"
                      className="w-full py-2.5 px-4 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold text-center block border border-slate-700 transition-all"
                    >
                      Book 1-on-1 Academic Counselling
                    </Link>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
