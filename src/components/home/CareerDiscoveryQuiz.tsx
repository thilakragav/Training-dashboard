import React, { useState } from 'react';
import { 
  Compass, 
  ArrowRight, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  BookOpen, 
  Code, 
  Layers, 
  Calendar,
  MessageSquare
} from 'lucide-react';
import { CAREER_DISCOVERY_QUESTIONS, CAREER_PATHS_DATABASE } from '../../data/careerPathsData';
import { CareerPathRecommendation } from '../../types';
import { useLearning } from '../../context/LearningContext';
import { COURSES_DATA } from '../../data/coursesData';
import { Link } from 'react-router-dom';

export const CareerDiscoveryQuiz: React.FC = () => {
  const { openCounsellingModal } = useLearning();

  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, string>>({});
  const [accumulatedScores, setAccumulatedScores] = useState<Record<string, number>>({
    'gen-ai': 0,
    'ai-ml': 0,
    'full-stack': 0,
    'data-analyst': 0,
    'data-engineer': 0,
    'cloud-devops': 0
  });

  const [recommendation, setRecommendation] = useState<CareerPathRecommendation | null>(null);

  const totalSteps = CAREER_DISCOVERY_QUESTIONS.length;
  const currentQuestion = CAREER_DISCOVERY_QUESTIONS[currentStep];

  const handleSelectOption = (value: string, weights: Record<string, number>) => {
    const updatedAnswers = { ...selectedAnswers, [currentQuestion.id]: value };
    setSelectedAnswers(updatedAnswers);

    // Update weights
    const newScores = { ...accumulatedScores };
    Object.entries(weights).forEach(([roleId, pts]) => {
      newScores[roleId] = (newScores[roleId] || 0) + pts;
    });
    setAccumulatedScores(newScores);

    // If next step exists
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Calculate top role
      let bestRole = 'full-stack';
      let highestPts = -1;
      Object.entries(newScores).forEach(([roleId, pts]) => {
        if (pts > highestPts) {
          highestPts = pts;
          bestRole = roleId;
        }
      });

      const matched = CAREER_PATHS_DATABASE[bestRole] || CAREER_PATHS_DATABASE['full-stack'];
      setRecommendation(matched);
    }
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setAccumulatedScores({
      'gen-ai': 0,
      'ai-ml': 0,
      'full-stack': 0,
      'data-analyst': 0,
      'data-engineer': 0,
      'cloud-devops': 0
    });
    setRecommendation(null);
  };

  return (
    <section id="career-discovery" className="py-20 lg:py-28 bg-[#0F172A] border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Interactive Tech Career Matcher</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Find Your <span className="text-gradient">Tech Career Path</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Answer 5 quick questions about your background, interests, and availability to receive an algorithmically matched learning roadmap and project sequence.
          </p>
        </div>

        {/* Quiz Container */}
        <div className="bg-[#131B2E] border border-blue-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          
          {recommendation ? (
            /* Result View */
            <div className="space-y-8 animate-fadeIn text-left">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Personalized Recommendation Ready</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                    {recommendation.roleTitle}
                  </h3>
                  <p className="text-sm text-cyan-300 mt-1">{recommendation.tagline}</p>
                </div>
                <div className="px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-center">
                  <span className="block text-2xl font-black text-emerald-400">{recommendation.matchScore}%</span>
                  <span className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Match Score</span>
                </div>
              </div>

              {/* Description & Market Demand */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-3">
                  <h4 className="text-sm font-bold text-slate-200">Why this path fits your profile:</h4>
                  <p className="text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                    {recommendation.description}
                  </p>
                </div>
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-slate-200">Industry Outlook:</h4>
                  <div className="bg-slate-900/60 p-4 rounded-xl border border-slate-800 space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400">Market Demand:</span>
                      <p className="font-semibold text-emerald-400 mt-0.5">{recommendation.marketDemand}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Estimated Duration:</span>
                      <p className="font-semibold text-white mt-0.5">{recommendation.estimatedWeeks} Weeks of Guided Study</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Recommended Core Skills */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Code className="w-4 h-4 text-blue-400" /> Core Skills You Will Master
                </h4>
                <div className="flex flex-wrap gap-2">
                  {recommendation.coreSkills.map(skill => (
                    <span key={skill} className="px-3 py-1.5 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Suggested Sequence */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-violet-400" /> Suggested Learning Sequence
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {recommendation.suggestedSequence.map((step, idx) => (
                    <div key={idx} className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl text-xs text-slate-300 flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-blue-600/30 text-blue-400 flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Recommended Courses to Enroll */}
              <div className="space-y-3">
                <h4 className="text-sm font-bold text-slate-200 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-cyan-400" /> Recommended Matching Programs
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {recommendation.recommendedCourses.map(courseId => {
                    const c = COURSES_DATA.find(item => item.id === courseId);
                    if (!c) return null;
                    return (
                      <div key={c.id} className="p-4 bg-slate-900 border border-slate-800 rounded-xl flex items-center justify-between">
                        <div>
                          <p className="text-xs font-bold text-white line-clamp-1">{c.title}</p>
                          <p className="text-[11px] text-slate-400">{c.level} • {c.durationWeeks} Weeks • {c.deliveryMode}</p>
                        </div>
                        <Link
                          to={`/course/${c.slug}`}
                          className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg transition"
                        >
                          View
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  onClick={handleRestart}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-slate-300 rounded-xl text-xs font-semibold transition"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restart Assessment
                </button>

                <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={openCounsellingModal}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white rounded-xl text-xs font-semibold shadow-lg shadow-violet-600/30 transition"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    Book Free 1:1 Counselling for this Track
                  </button>
                  <Link
                    to="/courses"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition"
                  >
                    Explore Courses
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            /* Question Steps View */
            <div className="space-y-8 text-left">
              
              {/* Progress Tracker */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>Question {currentStep + 1} of {totalSteps}</span>
                  <span className="font-mono text-cyan-400 font-bold">
                    {Math.round(((currentStep + 1) / totalSteps) * 100)}% Completed
                  </span>
                </div>
                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 transition-all duration-300 rounded-full"
                    style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div>
                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                  Step 0{currentStep + 1}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-1">
                  {currentQuestion.title}
                </h3>
                <p className="text-sm text-slate-400 mt-1">
                  {currentQuestion.subtitle}
                </p>
              </div>

              {/* Options Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {currentQuestion.options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(opt.value, opt.weight)}
                    className="p-4 rounded-2xl bg-slate-900/90 hover:bg-blue-950/40 border border-slate-800 hover:border-blue-500/50 transition-all duration-200 text-left group flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors">
                          {opt.label}
                        </span>
                        <ArrowRight className="w-4 h-4 text-slate-600 group-hover:text-blue-400 group-hover:translate-x-1 transition-all" />
                      </div>
                      {opt.description && (
                        <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                          {opt.description}
                        </p>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Back / Skip / Restart */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
                {currentStep > 0 ? (
                  <button
                    onClick={() => setCurrentStep(currentStep - 1)}
                    className="text-slate-400 hover:text-white transition"
                  >
                    ← Previous Question
                  </button>
                ) : (
                  <span className="text-slate-500">Takes less than 60 seconds</span>
                )}

                <button
                  onClick={openCounsellingModal}
                  className="text-violet-400 hover:text-violet-300 font-medium transition"
                >
                  Need human guidance? Book counselling →
                </button>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
};
