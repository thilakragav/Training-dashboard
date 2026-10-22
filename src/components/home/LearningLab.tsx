import React, { useState } from 'react';
import { 
  FlaskConical, 
  Database, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  RotateCcw, 
  BookOpen, 
  Code2, 
  Copy, 
  Check, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';
import { SQL_QUIZ_QUESTIONS, PROMPT_IMPROVEMENT_SAMPLES, PYTHON_QUIZ_QUESTIONS } from '../../data/learningLabData';
import { Link } from 'react-router-dom';

export const LearningLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'sql' | 'prompt' | 'python'>('sql');

  // --- SQL Quiz State ---
  const [sqlAnswers, setSqlAnswers] = useState<Record<number, number>>({});
  const [sqlSubmitted, setSqlSubmitted] = useState<Record<number, boolean>>({});

  // --- AI Prompt Refiner State ---
  const [activePromptSampleIndex, setActivePromptSampleIndex] = useState(0);
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [simulatedExecution, setSimulatedExecution] = useState(false);

  // --- Python Quiz State ---
  const [pythonAnswers, setPythonAnswers] = useState<Record<number, number>>({});
  const [pythonSubmitted, setPythonSubmitted] = useState<Record<number, boolean>>({});

  // SQL Quiz Handlers
  const handleSqlOptionSelect = (qIdx: number, optionIdx: number) => {
    if (sqlSubmitted[qIdx]) return;
    setSqlAnswers({ ...sqlAnswers, [qIdx]: optionIdx });
    setSqlSubmitted({ ...sqlSubmitted, [qIdx]: true });
  };

  const resetSqlQuiz = () => {
    setSqlAnswers({});
    setSqlSubmitted({});
  };

  const sqlScore = Object.entries(sqlSubmitted).reduce((acc, [idxStr, isSub]) => {
    if (!isSub) return acc;
    const qIdx = parseInt(idxStr);
    return acc + (sqlAnswers[qIdx] === SQL_QUIZ_QUESTIONS[qIdx].correctIndex ? 1 : 0);
  }, 0);

  // Python Quiz Handlers
  const handlePythonOptionSelect = (qIdx: number, optionIdx: number) => {
    if (pythonSubmitted[qIdx]) return;
    setPythonAnswers({ ...pythonAnswers, [qIdx]: optionIdx });
    setPythonSubmitted({ ...pythonSubmitted, [qIdx]: true });
  };

  const resetPythonQuiz = () => {
    setPythonAnswers({});
    setPythonSubmitted({});
  };

  const pythonScore = Object.entries(pythonSubmitted).reduce((acc, [idxStr, isSub]) => {
    if (!isSub) return acc;
    const qIdx = parseInt(idxStr);
    return acc + (pythonAnswers[qIdx] === PYTHON_QUIZ_QUESTIONS[qIdx].correctIndex ? 1 : 0);
  }, 0);

  // Prompt Copy
  const handleCopyPrompt = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2000);
  };

  const currentPrompt = PROMPT_IMPROVEMENT_SAMPLES[activePromptSampleIndex];

  return (
    <section id="learning-lab" className="py-20 lg:py-28 bg-[#0F172A] border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold mb-3">
            <FlaskConical className="w-3.5 h-3.5" />
            <span>Interactive Code Playground</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Try a Skill <span className="text-gradient">Before You Enroll</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Test your current aptitude or experience our code-first pedagogy firsthand. No sign-up or credit card required.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex p-1.5 bg-slate-900 border border-slate-800 rounded-2xl gap-1">
            <button
              onClick={() => setActiveTab('sql')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'sql'
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Database className="w-4 h-4" />
              <span>1. Relational SQL Lab</span>
            </button>
            <button
              onClick={() => setActiveTab('prompt')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'prompt'
                  ? 'bg-violet-600 text-white shadow-lg shadow-violet-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>2. AI Prompt Refiner</span>
            </button>
            <button
              onClick={() => setActiveTab('python')}
              className={`flex items-center gap-2 px-4 sm:px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition ${
                activeTab === 'python'
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/30'
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }`}
            >
              <Terminal className="w-4 h-4" />
              <span>3. Python Logic Quiz</span>
            </button>
          </div>
        </div>

        {/* --- ACTIVITY 1: SQL QUIZ --- */}
        {activeTab === 'sql' && (
          <div className="bg-[#131B2E] border border-blue-500/20 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fadeIn text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Activity 01 • Instant Diagnostic
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Relational SQL & Query Execution Challenge
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Test your understanding of multi-table joins, window functions, and indexing mechanics.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                  <span className="text-slate-400">Score: </span>
                  <span className="font-bold text-emerald-400 font-mono">{sqlScore} / {SQL_QUIZ_QUESTIONS.length}</span>
                </div>
                <button
                  onClick={resetSqlQuiz}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition"
                  title="Reset Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Questions List */}
            <div className="space-y-8 mt-6">
              {SQL_QUIZ_QUESTIONS.map((q, qIdx) => {
                const isAnswered = sqlSubmitted[qIdx];
                const selectedOption = sqlAnswers[qIdx];
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-blue-500/15 text-blue-300">
                        {q.topic}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">Question {qIdx + 1} of {SQL_QUIZ_QUESTIONS.length}</span>
                    </div>

                    <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                      {q.question}
                    </p>

                    {/* Code Snippet Box */}
                    {q.codeSnippet && (
                      <div className="bg-[#0B0F19] p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto">
                        <pre>{q.codeSnippet}</pre>
                      </div>
                    )}

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700';

                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                          } else if (selectedOption === optIdx) {
                            btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                          } else {
                            btnStyle = 'bg-slate-900/30 border-slate-800/60 text-slate-600 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handleSqlOptionSelect(qIdx, optIdx)}
                            className={`p-3.5 rounded-xl border text-left text-xs transition duration-150 flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                            )}
                            {isAnswered && selectedOption === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation Box */}
                    {isAnswered && (
                      <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                        isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' : 'bg-slate-900 border-blue-500/30 text-slate-300'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>{isCorrect ? 'Correct! Detailed Explanation:' : 'Explanation & Correct Answer:'}</span>
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Recommendation Footer */}
            {Object.keys(sqlSubmitted).length === SQL_QUIZ_QUESTIONS.length && (
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-950/60 to-indigo-950/60 border border-blue-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">
                    You scored {sqlScore} / {SQL_QUIZ_QUESTIONS.length}!
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {sqlScore >= 3 
                      ? 'Solid foundation! You are ready for our advanced Data Analytics or Data Engineering tracks.'
                      : 'Good effort! Master these concepts completely in our SQL & Relational Database Mastery program.'}
                  </p>
                </div>
                <Link
                  to="/course/sql-and-relational-database-mastery"
                  className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
                >
                  View SQL Curriculum →
                </Link>
              </div>
            )}
          </div>
        )}

        {/* --- ACTIVITY 2: AI PROMPT REFINER --- */}
        {activeTab === 'prompt' && (
          <div className="bg-[#131B2E] border border-violet-500/25 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fadeIn text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-violet-400 uppercase tracking-widest">
                  Activity 02 • Enterprise LLM Engineering
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  AI Prompt Refiner & Output Benchmark
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Compare naive zero-shot prompts against production-engineered prompts with system constraints and schemas.
                </p>
              </div>

              {/* Sample Switcher */}
              <div className="flex items-center gap-2">
                {PROMPT_IMPROVEMENT_SAMPLES.map((sample, idx) => (
                  <button
                    key={sample.id}
                    onClick={() => {
                      setActivePromptSampleIndex(idx);
                      setSimulatedExecution(false);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                      activePromptSampleIndex === idx
                        ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                        : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    Case 0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 space-y-6">
              {/* Task Title & Domain */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs text-violet-400 font-semibold">{currentPrompt.domain}</span>
                  <h4 className="text-lg font-bold text-white mt-0.5">{currentPrompt.taskTitle}</h4>
                </div>
              </div>

              {/* Side-by-Side Prompt Comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Left: Weak Prompt */}
                <div className="p-5 bg-slate-900/80 border border-rose-500/20 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
                      <XCircle className="w-4 h-4" /> Naive / Weak Prompt
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/10 text-rose-300">
                      Unconstrained
                    </span>
                  </div>

                  <div className="p-3 bg-[#0B0F19] border border-slate-800 rounded-xl font-mono text-xs text-slate-300">
                    "{currentPrompt.initialWeakPrompt}"
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400">Identified Vulnerabilities & Gaps:</span>
                    <ul className="mt-2 space-y-1 text-xs text-rose-300">
                      {currentPrompt.weakPromptIssues.map((issue, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <span className="text-rose-400 font-bold">•</span>
                          <span>{issue}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Sample Weak Output */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400">Typical LLM Response (Generic / Surface-level):</span>
                    <div className="mt-2 p-3 bg-slate-950/80 border border-slate-800/80 rounded-xl text-xs text-slate-400 font-mono whitespace-pre-wrap">
                      {currentPrompt.beforeSampleOutput}
                    </div>
                  </div>
                </div>

                {/* Right: Engineered Prompt */}
                <div className="p-5 bg-slate-900/80 border border-violet-500/30 rounded-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-violet-400 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4" /> Production Engineered Prompt
                    </span>
                    <button
                      onClick={() => handleCopyPrompt(currentPrompt.optimizedEngineeredPrompt)}
                      className="inline-flex items-center gap-1 px-2.5 py-1 bg-violet-600/20 hover:bg-violet-600/30 text-violet-300 border border-violet-500/30 rounded-lg text-xs transition"
                    >
                      {copiedPrompt ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedPrompt ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="p-3.5 bg-[#0B0F19] border border-violet-500/25 rounded-xl font-mono text-xs text-cyan-200 whitespace-pre-wrap max-h-48 overflow-y-auto">
                    {currentPrompt.optimizedEngineeredPrompt}
                  </div>

                  <div>
                    <span className="text-xs font-semibold text-slate-400">Techniques Applied:</span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {currentPrompt.techniquesUsed.map((tech, idx) => (
                        <span key={idx} className="px-2 py-0.5 rounded bg-violet-500/15 border border-violet-500/25 text-violet-300 text-[11px] font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* High Quality Output */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400">Engineered Production Output Preview:</span>
                    <div className="mt-2 p-3.5 bg-slate-950 border border-slate-800 rounded-xl text-xs text-slate-300 font-mono whitespace-pre-wrap max-h-56 overflow-y-auto">
                      {currentPrompt.afterSampleOutput}
                    </div>
                  </div>
                </div>

              </div>

              {/* Pro Tip Callout */}
              <div className="p-4 bg-violet-950/40 border border-violet-500/30 rounded-2xl flex items-start gap-3 text-xs text-violet-200">
                <Lightbulb className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Pro Tip from Faculty: </strong>
                  {currentPrompt.proTip}
                </div>
              </div>

              {/* Course CTA */}
              <div className="pt-4 flex items-center justify-between border-t border-slate-800 text-xs">
                <span className="text-slate-400">Want to master RAG, LangGraph, and Vector Databases?</span>
                <Link
                  to="/course/generative-ai-and-prompt-engineering"
                  className="px-4 py-2 bg-violet-600 hover:bg-violet-500 text-white rounded-xl font-semibold transition"
                >
                  Explore Generative AI Specialization →
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* --- ACTIVITY 3: PYTHON CODING QUIZ --- */}
        {activeTab === 'python' && (
          <div className="bg-[#131B2E] border border-emerald-500/25 rounded-3xl p-6 sm:p-8 shadow-2xl animate-fadeIn text-left">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-slate-800 gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest">
                  Activity 03 • Pythonic Engineering Logic
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white mt-1">
                  Python Programming & Data Structures Quiz
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Evaluate your familiarity with comprehensions, mutable arguments, dict merges, and generator memory performance.
                </p>
              </div>

              <div className="flex items-center gap-3">
                <div className="px-3.5 py-1.5 bg-slate-900 border border-slate-800 rounded-xl text-xs">
                  <span className="text-slate-400">Score: </span>
                  <span className="font-bold text-emerald-400 font-mono">{pythonScore} / {PYTHON_QUIZ_QUESTIONS.length}</span>
                </div>
                <button
                  onClick={resetPythonQuiz}
                  className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl hover:bg-slate-800 transition"
                  title="Reset Quiz"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Questions Grid */}
            <div className="space-y-8 mt-6">
              {PYTHON_QUIZ_QUESTIONS.map((q, qIdx) => {
                const isAnswered = pythonSubmitted[qIdx];
                const selectedOption = pythonAnswers[qIdx];
                const isCorrect = selectedOption === q.correctIndex;

                return (
                  <div key={q.id} className="p-5 sm:p-6 bg-slate-900/80 border border-slate-800 rounded-2xl space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded bg-emerald-500/15 text-emerald-300">
                        {q.topic}
                      </span>
                      <span className="text-xs text-slate-500 font-mono">Question {qIdx + 1} of {PYTHON_QUIZ_QUESTIONS.length}</span>
                    </div>

                    <p className="text-sm font-semibold text-slate-100 leading-relaxed">
                      {q.question}
                    </p>

                    {q.codeSnippet && (
                      <div className="bg-[#0B0F19] p-3.5 rounded-xl border border-slate-800 font-mono text-xs text-emerald-300 overflow-x-auto">
                        <pre>{q.codeSnippet}</pre>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {q.options.map((opt, optIdx) => {
                        let btnStyle = 'bg-slate-900/60 border-slate-800 text-slate-300 hover:border-slate-700';

                        if (isAnswered) {
                          if (optIdx === q.correctIndex) {
                            btnStyle = 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-semibold';
                          } else if (selectedOption === optIdx) {
                            btnStyle = 'bg-rose-500/20 border-rose-500 text-rose-300';
                          } else {
                            btnStyle = 'bg-slate-900/30 border-slate-800/60 text-slate-600 opacity-60';
                          }
                        }

                        return (
                          <button
                            key={optIdx}
                            disabled={isAnswered}
                            onClick={() => handlePythonOptionSelect(qIdx, optIdx)}
                            className={`p-3.5 rounded-xl border text-left text-xs transition duration-150 flex items-center justify-between ${btnStyle}`}
                          >
                            <span>{opt}</span>
                            {isAnswered && optIdx === q.correctIndex && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 ml-2" />
                            )}
                            {isAnswered && selectedOption === optIdx && optIdx !== q.correctIndex && (
                              <XCircle className="w-4 h-4 text-rose-400 flex-shrink-0 ml-2" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {isAnswered && (
                      <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-fadeIn ${
                        isCorrect ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-200' : 'bg-slate-900 border-emerald-500/30 text-slate-300'
                      }`}>
                        <div className="flex items-center gap-1.5 font-bold mb-1">
                          <Lightbulb className="w-4 h-4 text-amber-400" />
                          <span>{isCorrect ? 'Well Done! Code Explanation:' : 'Concept Explanation:'}</span>
                        </div>
                        <p>{q.explanation}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Recommendation Footer */}
            {Object.keys(pythonSubmitted).length === PYTHON_QUIZ_QUESTIONS.length && (
              <div className="mt-8 p-6 bg-gradient-to-r from-emerald-950/60 to-slate-900 border border-emerald-500/30 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-base font-bold text-white">
                    Python Logic Score: {pythonScore} / {PYTHON_QUIZ_QUESTIONS.length}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1">
                    {pythonScore >= 3 
                      ? 'Exceptional logical acumen! You are primed to master PySpark Data Engineering or PyTorch Machine Learning.'
                      : 'Solid start! Strengthen your object-oriented code, automation, and Pytest skills with our foundational course.'}
                  </p>
                </div>
                <Link
                  to="/course/python-programming-for-technology-careers"
                  className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-semibold whitespace-nowrap transition"
                >
                  View Python Course →
                </Link>
              </div>
            )}
          </div>
        )}

      </div>
    </section>
  );
};
