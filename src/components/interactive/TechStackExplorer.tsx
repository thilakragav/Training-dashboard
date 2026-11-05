import React, { useState } from 'react';
import { Database, Sparkles, Cloud, Code, BarChart3, Bot, Check, ArrowRight } from 'lucide-react';

interface TechItem {
  name: string;
  category: 'Data' | 'AI' | 'Cloud' | 'Software' | 'BI' | 'Automation';
  badge: string;
  description: string;
  nodalbotUsage: string;
}

export const TECH_STACK_ITEMS: TechItem[] = [
  // DATA
  { name: 'Azure Databricks', category: 'Data', badge: 'Lakehouse Engine', description: 'Unified data intelligence platform combining Apache Spark, Delta Lake, and Unity Catalog.', nodalbotUsage: 'Core platform for high-scale ETL, Delta Lake transformations, and streaming pipelines.' },
  { name: 'Apache Spark & PySpark', category: 'Data', badge: 'Distributed Compute', description: 'In-memory parallel processing engine for massive enterprise datasets.', nodalbotUsage: 'Writing distributed transformations and Medallion Lakehouse aggregations.' },
  { name: 'Azure Data Factory (ADF)', category: 'Data', badge: 'Cloud Orchestration', description: 'Serverless hybrid data integration service for automated ETL/ELT orchestration.', nodalbotUsage: 'Building parameterized ingestion pipelines, event-based triggers, and CDC data copying.' },
  { name: 'Delta Lake', category: 'Data', badge: 'Storage Layer', description: 'Open-source storage framework enabling ACID transactions and time travel on data lakes.', nodalbotUsage: 'Implementing Bronze-Silver-Gold Medallion architectures and liquid clustering.' },
  { name: 'Snowflake', category: 'Data', badge: 'Data Cloud', description: 'Elastic multi-cluster cloud data warehouse with zero-copy cloning and instant scaling.', nodalbotUsage: 'Analytical data marts, cross-cloud sharing, and analytical reporting backends.' },
  { name: 'Microsoft Fabric OneLake', category: 'Data', badge: 'Unified Analytics', description: 'All-in-one analytics solution covering data movement, data engineering, and real-time intelligence.', nodalbotUsage: 'Direct Lake integration with Power BI for zero-latency queries.' },

  // AI & GENAI
  { name: 'OpenAI GPT-4o & APIs', category: 'AI', badge: 'Foundation LLM', description: 'State-of-the-art multimodal reasoning models with JSON structured outputs.', nodalbotUsage: 'Enterprise document reasoning, summarization, and cognitive API integrations.' },
  { name: 'Claude API (Anthropic)', category: 'AI', badge: 'Reasoning & Coding', description: 'High-capability frontier models renowned for coding rigor, long context windows, and safety.', nodalbotUsage: 'Complex multi-document financial analysis and deep codebase auditing.' },
  { name: 'Model Context Protocol (MCP)', category: 'AI', badge: 'Open Standard', description: 'Anthropic open standard protocol connecting LLMs safely to local and cloud data sources.', nodalbotUsage: 'Developing custom Python and TypeScript MCP servers for database tools.' },
  { name: 'LangGraph & LangChain', category: 'AI', badge: 'Agent Orchestration', description: 'State-machine framework for orchestrating cyclical, multi-agent autonomous workflows.', nodalbotUsage: 'Multi-agent supervisor swarms, self-correcting RAG loops, and human-in-the-loop flows.' },
  { name: 'ChromaDB & Pinecone', category: 'AI', badge: 'Vector Databases', description: 'High-performance vector databases optimized for dense semantic embedding similarity.', nodalbotUsage: 'Storing high-dimensional chunk embeddings for enterprise semantic RAG retrieval.' },
  { name: 'Azure AI Foundry', category: 'AI', badge: 'Enterprise AI Hub', description: 'Unified enterprise studio for building, evaluating, and deploying generative AI apps.', nodalbotUsage: 'Deploying fine-tuned models with enterprise safety guardrails and SLA monitoring.' },

  // BUSINESS INTELLIGENCE
  { name: 'Microsoft Power BI', category: 'BI', badge: 'Visual Analytics', description: 'Market-leading self-service and enterprise business intelligence platform.', nodalbotUsage: 'Developing interactive C-suite executive cockpits, operational drill-throughs, and KPI reports.' },
  { name: 'Data Analysis Expressions (DAX)', category: 'BI', badge: 'Formula Language', description: 'Powerful formula expression language for calculating dynamic relational measures.', nodalbotUsage: 'Authoring complex time intelligence, cohort retention, and dynamic segmentation calculations.' },
  { name: 'Power Query (M-Code)', category: 'BI', badge: 'Data Transformation', description: 'Data preparation engine for connecting, combining, and refining data across hundreds of sources.', nodalbotUsage: 'Advanced ETL transformations, unpivoting, and API connector scripting.' },
  { name: 'Tableau Desktop & Server', category: 'BI', badge: 'Visual Storytelling', description: 'Intuitive data exploration and visual analytics platform.', nodalbotUsage: 'Designing executive story points, dual-axis dashboards, and Level of Detail (LOD) formulas.' },

  // RPA & AUTOMATION
  { name: 'Power Automate Cloud', category: 'Automation', badge: 'Cloud Flows', description: 'Cloud-based workflow service connecting Microsoft 365, Teams, SharePoint, and external APIs.', nodalbotUsage: 'Building automated approval flows, email triage bots, and scheduled synchronizations.' },
  { name: 'Power Automate Desktop', category: 'Automation', badge: 'Desktop RPA', description: 'Attended and unattended robotic software bots automating legacy desktop applications.', nodalbotUsage: 'Automating UI entry into legacy ERPs, web portals, and green-screen software.' },
  { name: 'UiPath Studio & Orchestrator', category: 'Automation', badge: 'Enterprise RPA', description: 'Enterprise automation suite for designing, deploying, and managing robot queues.', nodalbotUsage: 'Queue-based transactional processing and enterprise bot governance.' },
  { name: 'Azure AI Document Intelligence', category: 'Automation', badge: 'Cognitive OCR', description: 'Prebuilt and custom AI models extracting text, key-value pairs, and tables from documents.', nodalbotUsage: 'Automated invoice, receipt, and tax document extraction with high precision.' },

  // CLOUD & DEVOPS
  { name: 'Microsoft Azure', category: 'Cloud', badge: 'Enterprise Cloud', description: 'Comprehensive enterprise cloud platform with integrated identity (Entra ID) and hybrid services.', nodalbotUsage: 'Primary hosting environment for data lakehouses, AI APIs, and virtual networks.' },
  { name: 'Amazon Web Services (AWS)', category: 'Cloud', badge: 'Cloud Leader', description: 'Global cloud infrastructure offering flexible compute, storage, and serverless architectures.', nodalbotUsage: 'Multi-cloud deployments, S3 object lakes, and containerized microservices.' },
  { name: 'Docker Containers', category: 'Cloud', badge: 'Containerization', description: 'Standardized units of software packaging code and all dependencies for portable execution.', nodalbotUsage: 'Containerizing Python APIs, Node microservices, and MLOps inference workloads.' },
  { name: 'GitHub Actions', category: 'Cloud', badge: 'CI/CD Automation', description: 'Developer-first automation platform for building, testing, and deploying code directly from GitHub.', nodalbotUsage: 'Automated testing gates, zero-downtime rolling cloud releases, and Docker image registries.' },

  // SOFTWARE DEVELOPMENT
  { name: 'React & Vite', category: 'Software', badge: 'Frontend Standard', description: 'Declarative component-driven frontend library with lightning-fast HMR and bundling.', nodalbotUsage: 'Building responsive enterprise portals, admin dashboards, and consumer web applications.' },
  { name: 'Node.js & Express', category: 'Software', badge: 'Backend Runtime', description: 'Event-driven JavaScript runtime and minimalist web framework for high-concurrency APIs.', nodalbotUsage: 'Developing lightweight RESTful microservices, webhook receivers, and authentication brokers.' },
  { name: 'TypeScript', category: 'Software', badge: 'Type Safety', description: 'Statically typed superset of JavaScript providing enterprise-grade maintainability.', nodalbotUsage: 'Enforcing strict type contracts across all client applications and backend APIs.' },
  { name: 'Python & FastAPI', category: 'Software', badge: 'High-Speed API', description: 'Modern, asynchronous Python framework for building low-latency REST endpoints.', nodalbotUsage: 'Packaging machine learning models, RAG backends, and data science microservices.' },
  { name: 'PostgreSQL & Prisma ORM', category: 'Software', badge: 'Relational Database', description: 'Advanced open-source relational database combined with type-safe schema modeling.', nodalbotUsage: 'Transactional application data stores, structured logging, and user management.' }
];

export const TechStackExplorer: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Data' | 'AI' | 'Cloud' | 'Software' | 'BI' | 'Automation'>('All');

  const categories = [
    { id: 'All', label: 'All Technologies', icon: null },
    { id: 'Data', label: 'Data Engineering', icon: Database },
    { id: 'AI', label: 'AI & Generative AI', icon: Sparkles },
    { id: 'BI', label: 'Business Intelligence', icon: BarChart3 },
    { id: 'Automation', label: 'RPA & Automation', icon: Bot },
    { id: 'Cloud', label: 'Cloud & DevOps', icon: Cloud },
    { id: 'Software', label: 'Custom Software', icon: Code }
  ];

  const filteredItems = activeCategory === 'All' 
    ? TECH_STACK_ITEMS 
    : TECH_STACK_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-nodal-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C56845]/10 border border-[#C56845]/20 text-[#C56845] dark:text-[#E5A17D] font-mono text-xs uppercase tracking-widest mb-3">
            <Code className="w-3.5 h-3.5" /> Enterprise Stacks
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-nodal-text tracking-tight font-display">
            Technology <span className="text-gradient-electric">Stack Explorer</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            We exclusively teach and engineer with verified, industry-standard enterprise frameworks. Explore our operational technologies across data, intelligence, and cloud software.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isSelected = activeCategory === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-[#C56845] text-white shadow-lg shadow-sm border border-[#C56845] dark:border-[#E5A17D]'
                    : 'bg-nodal-card text-slate-400 hover:text-white border border-nodal-border hover:border-slate-700'
                }`}
              >
                {Icon && <Icon className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D]" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((tech) => (
            <div
              key={tech.name}
              className="p-6 rounded-2xl bg-nodal-card border border-nodal-border hover:border-blue-500/40 transition-all duration-300 hover:-translate-y-1 shadow-xl hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-blue-500/15 text-[#C56845] dark:text-[#E5A17D] border border-nodal-border">
                    {tech.badge}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 uppercase">
                    {tech.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-nodal-text font-display">
                  {tech.name}
                </h3>
                
                <p className="mt-2 text-xs text-nodal-muted leading-relaxed font-sans">
                  {tech.description}
                </p>
              </div>

              {/* NodalBot Application */}
              <div className="mt-5 pt-4 border-t border-nodal-border">
                <span className="text-[10px] font-mono uppercase text-slate-400 font-bold block mb-1">
                  NodalBot Application:
                </span>
                <p className="text-xs text-cyan-200/90 font-mono">
                  {tech.nodalbotUsage}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
