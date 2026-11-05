import React, { useState } from 'react';
import { Database, Sparkles, Cloud, Code, BarChart3, Bot, ArrowRight, BookOpen, Briefcase, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ConstellationNode {
  id: string;
  name: string;
  category: 'Data' | 'AI' | 'Cloud' | 'Software' | 'BI' | 'Automation';
  icon: any;
  color: string;
  badgeColor: string;
  coords: { x: number; y: number };
  shortSummary: string;
  connectedAcademyCourse: {
    title: string;
    slug: string;
    domain: string;
  };
  connectedEnterpriseService: {
    title: string;
    slug: string;
    tagline: string;
  };
  keyTechnologies: string[];
}

export const CONSTELLATION_NODES: ConstellationNode[] = [
  {
    id: 'node-data',
    name: 'Data Engineering & Lakehouses',
    category: 'Data',
    icon: Database,
    color: '#0066FF',
    badgeColor: 'bg-[#0066FF]/20 text-[#00D2FF] border-[#0066FF]/30',
    coords: { x: 24, y: 30 },
    shortSummary: 'Distributed compute, Medallion Lakehouses, real-time streaming, and Delta Lake ACID storage.',
    connectedAcademyCourse: {
      title: 'Azure & Databricks Modern Data Engineering',
      slug: 'azure-databricks-spark-data-engineering',
      domain: 'Data Engineering'
    },
    connectedEnterpriseService: {
      title: 'Data Engineering & Modern Data Platforms',
      slug: 'data-engineering-modern-platforms',
      tagline: 'High-throughput pipelines, ETL modernization, and lakehouse governance.'
    },
    keyTechnologies: ['Azure Databricks', 'Apache Spark', 'Delta Lake', 'Snowflake', 'ADF', 'PySpark']
  },
  {
    id: 'node-ai',
    name: 'Artificial Intelligence & Generative AI',
    category: 'AI',
    icon: Sparkles,
    color: '#8B5CF6',
    badgeColor: 'bg-[#8B5CF6]/20 text-[#A78BFA] border-[#8B5CF6]/30',
    coords: { x: 76, y: 25 },
    shortSummary: 'Autonomous multi-agent swarms, Model Context Protocol (MCP), and production RAG pipelines.',
    connectedAcademyCourse: {
      title: 'Generative AI, Autonomous Agents & MCP Specialization',
      slug: 'generative-ai-agents-rag-mcp',
      domain: 'Artificial Intelligence & Generative AI'
    },
    connectedEnterpriseService: {
      title: 'Artificial Intelligence & Generative AI Solutions',
      slug: 'artificial-intelligence-generative-ai',
      tagline: 'Context-aware knowledge assistants, custom MCP tools, and autonomous agent swarms.'
    },
    keyTechnologies: ['OpenAI GPT-4o', 'Claude API', 'Model Context Protocol (MCP)', 'LangGraph', 'Pinecone', 'ChromaDB']
  },
  {
    id: 'node-bi',
    name: 'Business Intelligence & DAX',
    category: 'BI',
    icon: BarChart3,
    color: '#00D2FF',
    badgeColor: 'bg-[#00D2FF]/20 text-[#00D2FF] border-[#00D2FF]/30',
    coords: { x: 20, y: 72 },
    shortSummary: 'Executive dashboards, complex DAX calculations, Star Schema modeling, and Fabric Direct Lake.',
    connectedAcademyCourse: {
      title: 'Enterprise Power BI, DAX & Fabric Analytics',
      slug: 'enterprise-power-bi-dax-mastery',
      domain: 'Data Analytics & Business Intelligence'
    },
    connectedEnterpriseService: {
      title: 'Business Intelligence & Executive Dashboards',
      slug: 'business-intelligence-executive-dashboards',
      tagline: 'Star schema optimization, dynamic RLS, and real-time C-suite cockpits.'
    },
    keyTechnologies: ['Power BI', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Tableau', 'SQL Server']
  },
  {
    id: 'node-software',
    name: 'Custom Software & APIs',
    category: 'Software',
    icon: Code,
    color: '#6366F1',
    badgeColor: 'bg-[#6366F1]/20 text-[#A78BFA] border-[#6366F1]/30',
    coords: { x: 78, y: 70 },
    shortSummary: 'Microservice architectures, high-performance web platforms, and REST API development.',
    connectedAcademyCourse: {
      title: 'Full Stack Modern Web & Cloud Architecture',
      slug: 'full-stack-react-node-cloud',
      domain: 'Cloud & DevOps'
    },
    connectedEnterpriseService: {
      title: 'Custom Software & Web Application Development',
      slug: 'custom-software-web-applications',
      tagline: 'High-availability full-stack web applications, TypeScript microservices, and PostgreSQL backends.'
    },
    keyTechnologies: ['React 19', 'TypeScript', 'Node.js', 'PostgreSQL', 'Prisma', 'Tailwind CSS']
  },
  {
    id: 'node-automation',
    name: 'Robotic Process Automation (RPA)',
    category: 'Automation',
    icon: Bot,
    color: '#00D2FF',
    badgeColor: 'bg-[#00D2FF]/20 text-[#00D2FF] border-[#00D2FF]/30',
    coords: { x: 50, y: 50 },
    shortSummary: 'Attended & unattended bots, SAP/Citrix document processing, and AI document intelligence.',
    connectedAcademyCourse: {
      title: 'UiPath & Power Automate Intelligent RPA',
      slug: 'uipath-power-automate-intelligent-rpa',
      domain: 'Automation & RPA'
    },
    connectedEnterpriseService: {
      title: 'Robotic Process Automation & Workflow Systems',
      slug: 'robotic-process-automation-workflows',
      tagline: 'Zero-touch back-office automation, invoice OCR pipelines, and legacy ERP bridges.'
    },
    keyTechnologies: ['UiPath Studio', 'Power Automate', 'REFramework', 'Document Understanding', 'SAP Automation']
  },
  {
    id: 'node-cloud',
    name: 'Cloud Infrastructure & DevOps',
    category: 'Cloud',
    icon: Cloud,
    color: '#0066FF',
    badgeColor: 'bg-[#0066FF]/20 text-[#00D2FF] border-[#0066FF]/30',
    coords: { x: 50, y: 15 },
    shortSummary: 'Multi-cloud architectures, Kubernetes containerization, Terraform IaC, and CI/CD pipelines.',
    connectedAcademyCourse: {
      title: 'Azure Cloud Solutions & DevOps Engineering',
      slug: 'azure-cloud-solutions-architect',
      domain: 'Cloud & DevOps'
    },
    connectedEnterpriseService: {
      title: 'Cloud Architecture & DevOps Engineering',
      slug: 'cloud-architecture-devops-engineering',
      tagline: 'Terraform IaC, virtual network security, container orchestration, and zero-downtime cutovers.'
    },
    keyTechnologies: ['Microsoft Azure', 'AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions']
  }
];

export const TechnologyConstellation: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ConstellationNode>(CONSTELLATION_NODES[0]);

  return (
    <section className="py-20 sm:py-24 bg-nodal-navy relative overflow-hidden border-y border-nodal-border">
      {/* Background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0066FF]/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#6366F1]/10 blur-[100px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <span className="w-2 h-2 rounded-full bg-[#00D2FF] animate-ping"></span>
            Interactive Technology Constellation
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-nodal-text font-display">
            The NodalBot <span className="text-gradient-electric">Technology Constellation</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base text-nodal-muted font-sans max-w-2xl mx-auto">
            Every technology in our ecosystem is dual-faceted: master it through <strong className="text-[#00D2FF]">NodalBot Academy</strong>, or deploy it into your enterprise through <strong className="text-[#A78BFA]">NodalBot Digital Solutions</strong>.
          </p>
        </div>

        {/* Mobile Horizontal Pill Selector (< lg screens) */}
        <div className="lg:hidden mb-6 flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-none">
          {CONSTELLATION_NODES.map((node) => {
            const isSelected = selectedNode.id === node.id;
            const Icon = node.icon;
            return (
              <button
                key={node.id}
                onClick={() => setSelectedNode(node)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap shrink-0 transition-all ${
                  isSelected
                    ? 'bg-[#0066FF] text-white shadow-md shadow-[#0066FF]/30 border border-[#00D2FF]/50'
                    : 'bg-nodal-surface text-nodal-muted border border-nodal-border hover:text-nodal-text'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{node.category}: {node.name.split('&')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Constellation Grid (Interactive Visualizer on Left, Detail Card on Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Interactive Visual Network Canvas (7 Cols - hidden on small mobile if preferred, or scaled) */}
          <div className="lg:col-span-7 relative bg-nodal-surface rounded-2xl border border-nodal-border p-6 sm:p-8 shadow-2xl shadow-black/10 dark:shadow-black/60 overflow-hidden min-h-[380px] sm:min-h-[440px] flex items-center justify-center">
            
            {/* Tech grid background */}
            <div className="absolute inset-0 bg-tech-grid opacity-30"></div>
            <div className="absolute inset-0 bg-radial-at-c from-[#0066FF]/15 via-transparent to-transparent"></div>

            {/* SVG Connecting Lines between Nodes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
              <line x1="50" y1="50" x2="24" y2="30" stroke="rgba(0, 102, 255, 0.4)" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="50" y1="50" x2="76" y2="25" stroke="rgba(139, 92, 246, 0.4)" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              <line x1="50" y1="50" x2="20" y2="72" stroke="rgba(0, 210, 255, 0.4)" strokeWidth="0.75" />
              <line x1="50" y1="50" x2="78" y2="70" stroke="rgba(99, 102, 241, 0.4)" strokeWidth="0.75" />
              <line x1="50" y1="50" x2="50" y2="15" stroke="rgba(0, 102, 255, 0.4)" strokeWidth="0.75" strokeDasharray="1.5 1.5" />
              
              <line x1="24" y1="30" x2="50" y2="15" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
              <line x1="50" y1="15" x2="76" y2="25" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
              <line x1="76" y1="25" x2="78" y2="70" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
              <line x1="78" y1="70" x2="20" y2="72" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
              <line x1="20" y1="72" x2="24" y2="30" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.5" />
            </svg>

            {/* Render Nodes */}
            <div className="relative w-full h-[340px] sm:h-[380px]">
              {CONSTELLATION_NODES.map((node) => {
                const isSelected = selectedNode.id === node.id;
                const IconComponent = node.icon;
                
                return (
                  <div
                    key={node.id}
                    onClick={() => setSelectedNode(node)}
                    style={{
                      left: `${node.coords.x}%`,
                      top: `${node.coords.y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                    className={`absolute z-20 cursor-pointer group transition-all duration-300 ${
                      isSelected ? 'scale-110 z-30' : 'hover:scale-105'
                    }`}
                  >
                    <div 
                      className={`flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl backdrop-blur-md transition-all shadow-xl ${
                        isSelected 
                          ? 'bg-nodal-card border-2 border-[#00D2FF] shadow-[#00D2FF]/30' 
                          : 'bg-nodal-navy/90 border border-nodal-border hover:border-nodal-muted'
                      }`}
                    >
                      <div 
                        className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center transition-transform shrink-0 ${
                          isSelected ? 'scale-105' : 'group-hover:scale-105'
                        }`}
                        style={{ backgroundColor: `${node.color}25` }}
                      >
                        <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" style={{ color: node.color }} />
                      </div>
                      <div className="text-left whitespace-nowrap">
                        <span className="block text-[10px] sm:text-[11px] font-bold text-nodal-text leading-tight font-sans">
                          {node.name.split('&')[0]}
                        </span>
                        <span className="block text-[8px] sm:text-[9px] font-mono text-nodal-muted uppercase tracking-wider">
                          {node.category}
                        </span>
                      </div>
                    </div>

                    {isSelected && (
                      <span className="absolute -inset-1 rounded-xl bg-[#00D2FF]/20 blur-sm animate-pulse pointer-events-none"></span>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="absolute bottom-2.5 left-4 text-[10px] font-mono text-nodal-muted hidden sm:block">
              * Click any node to inspect connected Academy training & Consulting capabilities
            </div>
          </div>

          {/* Dynamic Dual-Facet Info Card (5 Cols) */}
          <div className="lg:col-span-5 bg-nodal-card rounded-2xl border border-nodal-border p-6 sm:p-8 shadow-2xl shadow-black/10 dark:shadow-black/60 relative flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider border font-semibold ${selectedNode.badgeColor}`}>
                  {selectedNode.category} PILLAR
                </span>
                <span className="text-xs font-mono text-nodal-muted">
                  Dual Capability
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl font-black text-nodal-text font-display leading-tight">
                {selectedNode.name}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-nodal-muted font-sans leading-relaxed">
                {selectedNode.shortSummary}
              </p>

              {/* Key Technologies Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {selectedNode.keyTechnologies.map((tech) => (
                  <span key={tech} className="px-2 py-0.5 rounded text-[10px] font-mono bg-nodal-surface text-nodal-muted border border-nodal-border">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 space-y-3.5">
                {/* FACET A: NODALBOT ACADEMY */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-nodal-surface border border-[#0066FF]/30 hover:border-[#00D2FF]/60 transition-colors">
                  <div className="flex items-center gap-2 text-[#00D2FF] text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <BookOpen className="w-3.5 h-3.5" />
                    NodalBot Academy Path
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-nodal-text font-display">
                    {selectedNode.connectedAcademyCourse.title}
                  </h4>
                  <p className="text-xs text-nodal-muted mt-1">
                    Hands-on production labs, real cloud sandboxes, and senior mentor code reviews.
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#00D2FF]">
                      Domain: {selectedNode.connectedAcademyCourse.domain}
                    </span>
                    <Link 
                      to={`/course/${selectedNode.connectedAcademyCourse.slug}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#00D2FF] hover:underline"
                    >
                      View Syllabus <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* FACET B: NODALBOT DIGITAL SOLUTIONS */}
                <div className="p-3.5 sm:p-4 rounded-xl bg-nodal-surface border border-[#6366F1]/30 hover:border-[#8B5CF6]/60 transition-colors">
                  <div className="flex items-center gap-2 text-[#A78BFA] text-xs font-mono font-bold uppercase tracking-wider mb-1">
                    <Briefcase className="w-3.5 h-3.5" />
                    Digital Solutions Practice
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-nodal-text font-display">
                    {selectedNode.connectedEnterpriseService.title}
                  </h4>
                  <p className="text-xs text-nodal-muted mt-1">
                    {selectedNode.connectedEnterpriseService.tagline}
                  </p>
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#A78BFA]">
                      Enterprise Architecture
                    </span>
                    <Link 
                      to={`/digital-solutions`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-[#A78BFA] hover:underline"
                    >
                      Consult Solutions <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation CTA */}
            <div className="mt-6 pt-4 border-t border-nodal-border flex items-center justify-between">
              <span className="text-xs text-nodal-muted">Need training or consulting?</span>
              <Link 
                to="/contact" 
                className="px-3.5 py-1.5 rounded-lg btn-primary text-xs"
              >
                <span>Connect With Us</span>
                <ExternalLink className="w-3 h-3 ml-1" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
