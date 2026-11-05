import React, { useState } from 'react';
import { Layers, ArrowRight, ExternalLink, ShieldCheck, Cpu } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../../data/projectsData';
import { useLearning } from '../../context/LearningContext';
import { Link } from 'react-router-dom';

export const ProjectShowcase: React.FC = () => {
  const { openProjectModal } = useLearning();
  const [selectedDomain, setSelectedDomain] = useState<string>('All');

  const domains = ['All', 'AI Applications', 'Data Analytics', 'Data Engineering', 'Full-Stack'];

  const filteredProjects = selectedDomain === 'All' 
    ? SHOWCASE_PROJECTS 
    : SHOWCASE_PROJECTS.filter(p => p.domain === selectedDomain);

  return (
    <section id="projects-showcase" className="py-20 lg:py-28 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Capstones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Portfolio-Grade <span className="text-gradient">Projects You Build</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Move beyond superficial tutorial clones. Every project features real-world system architecture, data cleaning edge cases, and cloud deployment.
          </p>
        </div>

        {/* Domain Filter Pills */}
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2 justify-center p-1.5 bg-slate-900 border border-slate-800 rounded-2xl">
            {domains.map(dom => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                  selectedDomain === dom
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* Note on Transparency & Student Distinction */}
        <div className="mb-8 p-3.5 bg-slate-900/60 border border-slate-800 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>
              <strong>Project Distinction Policy:</strong> We clearly label student-completed capstones vs industry faculty specifications.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Student Capstone</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-400" />
              <span>Industry Blueprint</span>
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0F172A] border border-slate-800 hover:border-violet-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-violet-950/20 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-44 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.previewImageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  
                  {/* Badges on Image */}
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#0F172A]/90 text-cyan-300 border border-cyan-500/30 backdrop-blur-sm">
                      {project.domain}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold backdrop-blur-sm border ${
                      project.isStudentCapstone 
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' 
                        : 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                    }`}>
                      {project.isStudentCapstone ? 'Student Capstone' : 'Faculty Spec'}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Difficulty: <strong className="text-white">{project.difficulty}</strong></span>
                  </div>

                  <h3 className="text-base font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.problemStatement}
                  </p>

                  {/* Tech Badges */}
                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.slice(0, 3).map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 rounded">
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-500 rounded">
                        +{project.techStack.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="p-5 pt-0">
                <button
                  onClick={() => openProjectModal(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-800/90 hover:bg-violet-600 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition"
                >
                  <span>Explore Project Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="mt-12 text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-800 rounded-xl text-xs font-semibold transition"
          >
            <span>View Full Capstone Portfolio Directory</span>
            <ArrowRight className="w-4 h-4 text-blue-400" />
          </Link>
        </div>

      </div>
    </section>
  );
};
