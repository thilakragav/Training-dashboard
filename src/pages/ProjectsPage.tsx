import React, { useState } from 'react';
import { Layers, ArrowRight, ShieldCheck, Search } from 'lucide-react';
import { SHOWCASE_PROJECTS } from '../data/projectsData';
import { useLearning } from '../context/LearningContext';

export const ProjectsPage: React.FC = () => {
  const { openProjectModal } = useLearning();
  const [selectedDomain, setSelectedDomain] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const domains = ['All', 'AI Applications', 'Data Analytics', 'Data Engineering', 'Full-Stack'];

  const filteredProjects = SHOWCASE_PROJECTS.filter(project => {
    if (selectedDomain !== 'All' && project.domain !== selectedDomain) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = project.title.toLowerCase().includes(q);
      const matchTech = project.techStack.some(t => t.toLowerCase().includes(q));
      const matchDesc = project.problemStatement.toLowerCase().includes(q);
      if (!matchTitle && !matchTech && !matchDesc) return false;
    }
    return true;
  });

  return (
    <div className="min-h-screen bg-[#0B0F19] pt-28 pb-20 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-300 text-xs font-semibold mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Portfolio Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Capstone <span className="text-gradient">Projects Gallery</span>
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Inspect real architecture specifications, data schemas, and deployment topologies built by institute students and faculty.
          </p>
        </div>

        {/* Search & Domain Filter Toolbar */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search by technology (e.g. PyTorch, Kafka, React, Docker)..."
              className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-violet-500 transition"
            />
          </div>

          <div className="flex flex-wrap gap-1.5">
            {domains.map(dom => (
              <button
                key={dom}
                onClick={() => setSelectedDomain(dom)}
                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                  selectedDomain === dom
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {dom}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#0F172A] border border-slate-800 hover:border-violet-500/40 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden border-b border-slate-800">
                  <img
                    src={project.previewImageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A] via-transparent to-transparent" />
                  
                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-[#0F172A]/90 text-cyan-300 border border-cyan-500/30">
                      {project.domain}
                    </span>
                    <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold border ${
                      project.isStudentCapstone 
                        ? 'bg-emerald-950/80 text-emerald-300 border-emerald-500/30' 
                        : 'bg-purple-950/80 text-purple-300 border-purple-500/30'
                    }`}>
                      {project.isStudentCapstone ? 'Verified Student Capstone' : 'Faculty Spec'}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <span className="text-[11px] text-slate-400">
                    Difficulty: <strong className="text-white">{project.difficulty}</strong>
                  </span>

                  <h3 className="text-lg font-bold text-white group-hover:text-violet-400 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                    {project.problemStatement}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {project.techStack.map(tech => (
                      <span key={tech} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <button
                  onClick={() => openProjectModal(project)}
                  className="w-full flex items-center justify-center gap-1.5 py-2.5 bg-slate-800 hover:bg-violet-600 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition"
                >
                  <span>Inspect System Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
