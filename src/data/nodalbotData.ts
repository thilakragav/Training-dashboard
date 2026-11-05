import {
  Course,
  CareerPathway,
  DigitalSolutionService,
  IndustrySolution,
  EngagementModel,
  CorporateProgram,
  CollegeProgram,
  ResourceArticle,
  CareerJob,
  BatchSchedule
} from '../types';

export const COMPANY_INFO = {
  name: 'NodalBot Technologies',
  shortName: 'NodalBot',
  tagline: 'Intelligence in Learning. Innovation in Engineering.',
  alternateTagline: 'Think Beyond Technology. Build What Comes Next.',
  vision: 'To empower individuals, organizations, and institutions through practical technology education and innovative digital solutions.',
  mission: 'Deliver industry-relevant technology training and scalable software solutions that enable career advancement, business transformation, and digital innovation.',
  philosophy: 'We bridge the chasm between theoretical education and enterprise execution. In our Academy, students build production-grade architectures. In our Digital Solutions division, we engineer scalable, reliable systems for modern global enterprises.',
  headquarters: {
    city: 'Chennai',
    state: 'Tamil Nadu',
    country: 'India',
    address: 'Tech Innovation Hub, OMR IT Expressway, Chennai, Tamil Nadu 600096, India',
    geoLabel: 'OMR IT Corridor, Chennai',
  },
  contact: {
    email: 'contact@nodalbot.com',
    supportEmail: 'support@nodalbot.com',
    corporateEmail: 'corporate@nodalbot.com',
    phone: '+91 97899 76268',
    whatsapp: '+91 97899 76268',
    hours: 'Monday – Saturday: 9:00 AM – 7:30 PM IST',
  },
  social: {
    linkedin: 'https://linkedin.com/company/nodalbot-technologies',
    github: 'https://github.com/nodalbot-technologies',
    twitter: 'https://twitter.com/nodalbot_tech',
    youtube: 'https://youtube.com/@nodalbot_technologies',
  },
  stats: {
    learningDomains: 6,
    careerPathways: 14,
    enterpriseServices: 6,
    industriesSupported: 8,
    handsOnProjects: '30+',
    liveBatchesUpcoming: '12+',
  }
};

export const LEARNING_DOMAINS_INFO = [
  {
    id: 'data-engineering',
    title: 'Data Engineering',
    code: 'DOMAIN 01',
    description: 'Build robust data pipelines, modern lakehouses, scalable distributed processing engines, and enterprise data warehouses.',
    technologies: ['SQL', 'Advanced SQL', 'Python', 'ETL/ELT', 'Azure Data Factory', 'Azure Databricks', 'Apache Spark', 'PySpark', 'Microsoft Fabric', 'Snowflake', 'Data Warehousing', 'Data Modeling', 'Delta Lake', 'AWS Data Engineering', 'GCP Data Engineering'],
    icon: 'Database',
    accentColor: 'from-blue-600 to-cyan-500',
    popularCourseSlug: 'azure-databricks-spark-data-engineering'
  },
  {
    id: 'data-analytics-bi',
    title: 'Data Analytics & Business Intelligence',
    code: 'DOMAIN 02',
    description: 'Transform complex organizational data into clear interactive dashboards, high-impact stories, and self-service analytics models.',
    technologies: ['Advanced Excel', 'SQL Analytics', 'Power BI', 'DAX', 'Tableau', 'BI Architecture', 'Data Visualization', 'Dashboard Design', 'Data Storytelling', 'Power Query', 'Microsoft Fabric Analytics', 'Qlik Sense', 'AWS QuickSight'],
    icon: 'BarChart3',
    accentColor: 'from-cyan-500 to-blue-600',
    popularCourseSlug: 'enterprise-power-bi-dax-mastery'
  },
  {
    id: 'data-science-ml',
    title: 'Data Science & Machine Learning',
    code: 'DOMAIN 03',
    description: 'Formulate predictive algorithms, perform deep statistical inference, engineer machine learning pipelines, and deploy operational MLOps architectures.',
    technologies: ['Python', 'Statistics', 'EDA', 'Data Cleaning', 'Feature Engineering', 'Machine Learning', 'Deep Learning', 'NLP', 'Predictive Analytics', 'Time Series', 'Computer Vision', 'Model Deployment', 'MLOps'],
    icon: 'Cpu',
    accentColor: 'from-indigo-600 to-violet-500',
    popularCourseSlug: 'applied-data-science-mlops'
  },
  {
    id: 'ai-generative-ai',
    title: 'Artificial Intelligence & Generative AI',
    code: 'DOMAIN 04',
    description: 'Engineer custom RAG architectures, orchestrate autonomous multi-agent systems, leverage Model Context Protocol (MCP), and deploy LLMs.',
    technologies: ['AI Fundamentals', 'Generative AI', 'Prompt Engineering', 'LLMs', 'RAG', 'Vector Databases', 'AI Agents', 'Agentic AI', 'OpenAI API', 'Azure AI Foundry', 'Copilot Studio', 'Workflow Automation', 'MCP', 'LLMOps', 'AI Security & Governance'],
    icon: 'Sparkles',
    accentColor: 'from-violet-600 to-purple-500',
    popularCourseSlug: 'generative-ai-agents-rag-mcp'
  },
  {
    id: 'rpa-automation',
    title: 'RPA & Automation',
    code: 'DOMAIN 05',
    description: 'Automate manual enterprise processes, digitize document flows with AI OCR, and orchestrate low-code and robotic bots.',
    technologies: ['RPA Fundamentals', 'Power Automate Cloud', 'Power Automate Desktop', 'UiPath', 'IDP', 'Azure AI Document Intelligence', 'OCR', 'API Automation', 'Enterprise Workflow Automation', 'AI-Powered RPA'],
    icon: 'Workflow',
    accentColor: 'from-blue-500 to-indigo-600',
    popularCourseSlug: 'microsoft-power-automate-uipath-rpa'
  },
  {
    id: 'cloud-software',
    title: 'Cloud & Software Technologies',
    code: 'DOMAIN 06',
    description: 'Construct resilient cloud-native architectures, containerized microservices, high-throughput REST APIs, and automated DevOps CI/CD pipelines.',
    technologies: ['Microsoft Azure', 'AWS', 'Google Cloud', 'Git', 'GitHub', 'Docker', 'DevOps Fundamentals', 'REST API Development', 'Python Application Development', 'Cloud Architecture Fundamentals', 'Software Development Fundamentals'],
    icon: 'Cloud',
    accentColor: 'from-sky-500 to-blue-700',
    popularCourseSlug: 'cloud-native-devops-architecture'
  }
];

export const UPCOMING_BATCHES_DATA: BatchSchedule[] = [
  {
    id: 'batch-de-01',
    courseId: 'course-data-eng-master',
    courseTitle: 'Azure & Databricks Modern Data Engineering',
    startDate: 'Nov 15, 2026',
    schedule: 'Saturday & Sunday (Weekend Intensive)',
    timing: '10:00 AM – 1:30 PM IST',
    seatsLeft: 6,
    mode: 'Hybrid (Classroom + Online)',
    status: 'Filling Fast'
  },
  {
    id: 'batch-pbi-01',
    courseId: 'course-power-bi-dax',
    courseTitle: 'Enterprise Power BI, DAX & Fabric Analytics',
    startDate: 'Nov 21, 2026',
    schedule: 'Tue & Thu Evenings (Weekday Live)',
    timing: '7:30 PM – 9:30 PM IST',
    seatsLeft: 8,
    mode: 'Live Online',
    status: 'Open'
  },
  {
    id: 'batch-genai-01',
    courseId: 'course-genai-agents',
    courseTitle: 'Generative AI, Autonomous Agents & MCP Specialization',
    startDate: 'Nov 28, 2026',
    schedule: 'Saturday & Sunday (Weekend Intensive)',
    timing: '2:30 PM – 6:00 PM IST',
    seatsLeft: 4,
    mode: 'Live Online',
    status: 'Filling Fast'
  },
  {
    id: 'batch-ds-01',
    courseId: 'course-applied-mlops',
    courseTitle: 'Applied Data Science, Deep Learning & MLOps',
    startDate: 'Dec 05, 2026',
    schedule: 'Mon, Wed, Fri (Weekday Evenings)',
    timing: '7:00 PM – 9:00 PM IST',
    seatsLeft: 10,
    mode: 'Hybrid (Classroom + Online)',
    status: 'Open'
  },
  {
    id: 'batch-rpa-01',
    courseId: 'course-power-automate-rpa',
    courseTitle: 'Enterprise RPA & Intelligent Automation (Power Automate & UiPath)',
    startDate: 'Dec 12, 2026',
    schedule: 'Saturday & Sunday (Weekend)',
    timing: '10:00 AM – 1:00 PM IST',
    seatsLeft: 9,
    mode: 'Live Online',
    status: 'Open'
  },
  {
    id: 'batch-cloud-01',
    courseId: 'course-cloud-devops',
    courseTitle: 'Azure & AWS Cloud Architecture with Docker & DevOps',
    startDate: 'Dec 19, 2026',
    schedule: 'Saturday & Sunday (Weekend)',
    timing: '2:00 PM – 5:00 PM IST',
    seatsLeft: 12,
    mode: 'Live Online',
    status: 'Open'
  }
];

export const COURSES_MASTER_CATALOG: Course[] = [
  {
    id: 'course-data-eng-master',
    slug: 'azure-databricks-spark-data-engineering',
    title: 'Azure & Databricks Modern Data Engineering',
    shortDescription: 'Master Azure Data Factory, Databricks, Apache Spark, Delta Lake, Snowflake, and Microsoft Fabric in an enterprise pipeline curriculum.',
    longDescription: 'A production-grade, project-centric curriculum designed to transition students and engineers into high-impact Data Engineers. Learn how to architect ELT pipelines, handle real-time streaming with Apache Spark and PySpark, structure Lakehouse storage with Delta Lake and Medallion Architecture (Bronze-Silver-Gold), and optimize distributed compute in Azure and Snowflake.',
    domain: 'Data Engineering',
    level: 'Intermediate',
    durationWeeks: 14,
    totalHours: 110,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['SQL', 'Python', 'Azure Data Factory', 'Azure Databricks', 'Apache Spark', 'PySpark', 'Microsoft Fabric', 'Snowflake', 'Delta Lake', 'Azure Data Lake Storage Gen2', 'Git'],
    badge: 'Flagship Career Track',
    highlights: [
      'Architect real-world Medallion Lakehouses with Delta Lake and PySpark',
      'Orchestrate 10+ dynamic parameterized ADF pipelines with triggers and alert webhooks',
      'Data warehousing optimization with Snowflake clustering and zero-copy cloning',
      'Integration with Microsoft Fabric OneLake and Synapse Data Engineering'
    ],
    prerequisites: ['Basic SQL querying knowledge', 'Basic Python fundamentals (loops, functions, dictionaries)'],
    targetAudience: [
      'SQL / Database Developers looking to become modern Data Engineers',
      'Software engineers transitioning into data platform engineering',
      'Graduates with computer science or engineering backgrounds'
    ],
    learningOutcomes: [
      'Construct scalable ETL/ELT pipelines in Azure Data Factory with automated monitoring',
      'Write optimized PySpark transformations on multi-node Databricks clusters',
      'Design modern Medallion data architectures enforcing schema evolution and ACID transactions',
      'Model dimension and fact tables in Snowflake and Microsoft Fabric for analytical reporting'
    ],
    capstoneProject: {
      title: 'End-to-End Enterprise E-Commerce Lakehouse & Telemetry Platform',
      description: 'Ingest clickstream events and relational transactional data using ADF into Azure Data Lake Storage, transform in Databricks with PySpark across Bronze/Silver/Gold tiers, and publish aggregated metrics to Snowflake and Power BI.',
      deliverables: [
        'Parameterized Azure Data Factory ingestion pipeline with retry logic',
        'Production Databricks PySpark notebook suite implementing SCD Type 2 dimensions',
        'Delta Lake table layout optimized with Z-Ordering and liquid clustering',
        'Cost governance and data quality validation framework'
      ],
      techStack: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'Delta Lake', 'Snowflake', 'Azure Key Vault']
    },
    instructor: {
      name: 'Thilak Ragav M',
      title: 'Principal Data Architect & Lead Instructor',
      experience: 'Senior Enterprise Data Engineering & AI Practitioner',
      companyBackground: 'NodalBot Technologies Technology Advisory',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[0]
    ],
    modules: [
      {
        id: 'mod-de-01',
        moduleNumber: 1,
        title: 'Modern SQL & Relational Data Modeling for Data Engineering',
        description: 'Advanced joins, window functions, CTEs, indexing strategies, partition schemes, and dimensional modeling.',
        durationHours: 18,
        learningObjectives: ['Complex Analytical SQL', 'Window Functions & Ranking', 'Star and Snowflake Schemas', 'Query Performance Tuning'],
        lessons: [
          { id: 'les-de-1', title: 'Window Functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD)', durationMinutes: 90, type: 'video' },
          { id: 'les-de-2', title: 'Common Table Expressions and Recursive Queries', durationMinutes: 75, type: 'code-lab' },
          { id: 'les-de-3', title: 'Dimensional Modeling: Fact Tables, Slowly Changing Dimensions (SCD 1, 2, 3)', durationMinutes: 90, type: 'reading' }
        ],
        handsOnLab: 'Design a Dimensional Retail Schema and Write Analytical Queries with Advanced Partitioning'
      },
      {
        id: 'mod-de-02',
        moduleNumber: 2,
        title: 'Python for Data Engineers & Cloud Storage Fundamentals',
        description: 'Object-oriented Python for data processing, pandas, PyArrow, parquet storage, and Azure Data Lake Gen2 integration.',
        durationHours: 20,
        learningObjectives: ['Pandas for ETL', 'Parquet vs CSV Benchmarks', 'Blob & ADLS Gen2 APIs', 'Automated Ingestion Scripts'],
        lessons: [
          { id: 'les-de-4', title: 'Python Packaging, Virtual Environments, and Azure SDK', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-de-5', title: 'Columnar File Formats: Parquet, ORC, and Avro Internals', durationMinutes: 75, type: 'reading' }
        ],
        handsOnLab: 'Build an automated Python ingestion worker pulling REST APIs into ADLS Gen2 storage containers'
      },
      {
        id: 'mod-de-03',
        moduleNumber: 3,
        title: 'Azure Data Factory (ADF) Orchestration & Pipeline Engineering',
        description: 'Linked services, datasets, activities, data flows, triggers, tumbling windows, parameterization, and CI/CD.',
        durationHours: 24,
        learningObjectives: ['ADF Copy Activity & Mapping Data Flows', 'Pipeline Parameterization', 'Event-Driven Triggers', 'Monitoring & Alerting'],
        lessons: [
          { id: 'les-de-6', title: 'Building Metadata-Driven Ingestion Pipelines in ADF', durationMinutes: 90, type: 'code-lab' },
          { id: 'les-de-7', title: 'Mapping Data Flows for No-Code Transformations', durationMinutes: 80, type: 'video' }
        ],
        handsOnLab: 'Implement a multi-source data ingestion pipeline with automated Slack/Email alert notifications on failure'
      },
      {
        id: 'mod-de-04',
        moduleNumber: 4,
        title: 'Azure Databricks, Apache Spark & Delta Lake Architecture',
        description: 'Spark architecture, RDDs, DataFrames, PySpark transformations, Delta Lake ACID transactions, and Medallion Architecture.',
        durationHours: 28,
        learningObjectives: ['Spark Execution Engine Internals', 'PySpark Transformations & Actions', 'Delta Lake Time Travel & Merges', 'Medallion Lakehouse'],
        lessons: [
          { id: 'les-de-8', title: 'Spark Catalyst Optimizer and Tungsten Engine Mechanics', durationMinutes: 85, type: 'reading' },
          { id: 'les-de-9', title: 'PySpark DataFrame Operations on Multi-Gigabyte Datasets', durationMinutes: 100, type: 'code-lab' },
          { id: 'les-de-10', title: 'Delta Lake ACID Transactions, Time Travel & Upserts (MERGE INTO)', durationMinutes: 95, type: 'code-lab' }
        ],
        handsOnLab: 'Construct a 3-stage Bronze to Gold streaming ingestion pipeline with schema enforcement'
      },
      {
        id: 'mod-de-05',
        moduleNumber: 5,
        title: 'Cloud Warehousing with Snowflake & Microsoft Fabric',
        description: 'Snowflake virtual warehouses, clustering, Time Travel, zero-copy cloning, OneLake integration, and production deployment.',
        durationHours: 20,
        learningObjectives: ['Snowflake Architecture', 'Snowpipe Auto-Ingest', 'Microsoft Fabric Lakehouse & Synapse', 'Production Data Quality'],
        lessons: [
          { id: 'les-de-11', title: 'Configuring Snowflake Stages, File Formats, and Snowpipe', durationMinutes: 80, type: 'code-lab' },
          { id: 'les-de-12', title: 'Microsoft Fabric OneLake Architecture and Shortcuts', durationMinutes: 75, type: 'video' }
        ],
        handsOnLab: 'Deploy an automated Snowpipe ingestion queue and connect it to a Power BI Semantic Model'
      }
    ],
    faqs: [
      {
        question: 'Do I need prior experience with Azure or Databricks to join?',
        answer: 'No prior cloud experience is required. We start with foundational SQL and Python concepts before diving systematically into Azure, Databricks, and Spark architectures.'
      },
      {
        question: 'Does this course prepare me for official cloud certifications?',
        answer: 'Yes! The syllabus aligns closely with industry certifications including Microsoft Certified: Azure Data Engineer Associate (DP-203) and Databricks Certified Associate Developer for Apache Spark.'
      },
      {
        question: 'What kind of support is provided for hands-on labs?',
        answer: 'You will receive dedicated cloud sandbox guidance, downloadable step-by-step lab guides, GitHub code templates, and 1:1 mentor code reviews on every assignment.'
      }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-power-bi-dax',
    slug: 'enterprise-power-bi-dax-mastery',
    title: 'Enterprise Power BI, DAX & Fabric Analytics',
    shortDescription: 'Master Power BI Desktop, complex DAX formulas, Power Query ETL, dimensional modeling, Microsoft Fabric OneLake, and executive storytelling.',
    longDescription: 'Turn raw corporate numbers into intuitive, high-impact executive decision systems. This comprehensive program covers relational data modeling, complex DAX calculations (CALCULATE, time intelligence, iterator functions), advanced Power Query M-code transformations, report design best practices, row-level security (RLS), and Microsoft Fabric Direct Lake mode.',
    domain: 'Data Analytics & Business Intelligence',
    level: 'Beginner',
    durationWeeks: 10,
    totalHours: 80,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Power BI Desktop', 'DAX', 'Power Query (M)', 'SQL', 'Microsoft Fabric', 'Excel', 'Tableau Overview', 'Direct Lake'],
    badge: 'High Industry Demand',
    highlights: [
      'Deep dive into DAX evaluation contexts (Row vs Filter context)',
      '15+ Interactive executive dashboard templates built from scratch',
      'Enterprise Row-Level Security (RLS) and Power BI Service administration',
      'Integration with Microsoft Fabric Semantic Models'
    ],
    prerequisites: ['Basic familiarity with Microsoft Excel or spreadsheets'],
    targetAudience: [
      'Business Analysts, Financial Analysts, and Reporting Professionals',
      'Graduates wanting to launch high-paying Business Intelligence careers',
      'Operations and marketing managers seeking self-service analytics skills'
    ],
    learningOutcomes: [
      'Design clean Star Schema models optimized for lightning-fast DAX queries',
      'Write advanced DAX measures including Time Intelligence, Dynamic Segmentation, and Ranking',
      'Build aesthetically polished executive dashboards following human-centric design rules',
      'Deploy and administer Power BI Service workspaces, scheduled refreshes, and RLS'
    ],
    capstoneProject: {
      title: 'Global Supply Chain & Financial Performance Executive Cockpit',
      description: 'Build a multi-page C-suite executive dashboard for a multinational retail distributor tracking revenue, inventory turnover, freight variance, customer churn, and profitability with dynamic currency toggles.',
      deliverables: [
        'Star-schema data model with 5 Dimension tables and 2 Fact tables',
        'Over 40 custom DAX calculated measures and KPIs',
        'Interactive drill-through and bookmark-driven scenario analysis pages',
        'Published Power BI report with dynamic Role-Based Security'
      ],
      techStack: ['Power BI', 'DAX', 'Power Query', 'SQL Server', 'Fabric Direct Lake']
    },
    instructor: {
      name: 'NodalBot BI Faculty Team',
      title: 'Senior BI Architects & Power BI Certified Experts',
      experience: '10+ Years Enterprise BI Consulting',
      companyBackground: 'NodalBot Digital Solutions BI Division',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[1]
    ],
    modules: [
      {
        id: 'mod-pbi-01',
        moduleNumber: 1,
        title: 'Power Query & Data Transformation Architecture',
        description: 'Connecting to multiple sources, data profiling, merging, appending, unpivoting, and M-code customization.',
        durationHours: 16,
        learningObjectives: ['ETL in Power Query', 'Unpivoting & Reshaping Data', 'Handling Dirty Data', 'Custom M Functions'],
        lessons: [
          { id: 'les-pbi-1', title: 'Data Cleaning Best Practices and Query Folding', durationMinutes: 75, type: 'code-lab' },
          { id: 'les-pbi-2', title: 'Creating Reusable M-Functions for Custom API Ingestion', durationMinutes: 60, type: 'video' }
        ],
        handsOnLab: 'Clean and standardize a 12-month messy Excel financial ledger dataset'
      },
      {
        id: 'mod-pbi-02',
        moduleNumber: 2,
        title: 'Data Modeling & Relationship Engineering',
        description: 'Star schemas, relationship cardinalities (1:*, *:1), active vs inactive relationships, cross-filter direction.',
        durationHours: 16,
        learningObjectives: ['Star vs Snowflake Models', 'Surrogate Keys', 'Bi-Directional Filtering Pitfalls', 'Role-Playing Dimensions'],
        lessons: [
          { id: 'les-pbi-3', title: 'Structuring Dimensional Models that Avoid Many-to-Many Traps', durationMinutes: 80, type: 'reading' }
        ],
        handsOnLab: 'Construct an enterprise Star Schema linking Sales, Returns, Customer, Store, and Date tables'
      },
      {
        id: 'mod-pbi-03',
        moduleNumber: 3,
        title: 'DAX Deep Dive: Context, Iterators & Time Intelligence',
        description: 'Evaluation context, CALCULATE, FILTER, ALL, ALLEXCEPT, SUMX, AVERAGEX, YTD, QTD, MoM Growth calculations.',
        durationHours: 24,
        learningObjectives: ['Filter Context Mechanics', 'CALCULATE Modifier Functions', 'Time Intelligence Functions', 'Dynamic Segmentation'],
        lessons: [
          { id: 'les-pbi-4', title: 'Mastering the CALCULATE Function & Context Transition', durationMinutes: 90, type: 'code-lab' },
          { id: 'les-pbi-5', title: 'Building Rolling 12-Month & Year-Over-Year Growth Measures', durationMinutes: 85, type: 'code-lab' }
        ],
        handsOnLab: 'Develop 25 critical business KPI measures for an e-commerce retail enterprise'
      },
      {
        id: 'mod-pbi-04',
        moduleNumber: 4,
        title: 'Executive Visualizations, UX & Power BI Service Administration',
        description: 'Visual hierarchy, custom tooltips, drill-throughs, bookmarks, workspace security, and scheduled cloud gateway refreshes.',
        durationHours: 24,
        learningObjectives: ['Dashboard Design Psychology', 'Bookmarks & Navigation Controls', 'Power BI Service Admin', 'Row-Level Security (RLS)'],
        lessons: [
          { id: 'les-pbi-6', title: 'Designing Accessible, High-Contrast Executive Dashboards', durationMinutes: 70, type: 'video' },
          { id: 'les-pbi-7', title: 'Configuring Dynamic Row-Level Security with USERPRINCIPALNAME()', durationMinutes: 75, type: 'code-lab' }
        ],
        handsOnLab: 'Build, secure, and publish a complete multi-tier executive dashboard to Power BI Cloud'
      }
    ],
    faqs: [
      {
        question: 'Is Power BI free to download and use for learning?',
        answer: 'Yes! Power BI Desktop is completely free to install and use on Windows. We also guide you on accessing free Power BI Service developer accounts for cloud publishing.'
      },
      {
        question: 'Does this course cover Tableau as well?',
        answer: 'While the primary focus is in-depth Power BI and DAX mastery, we include a comparative module highlighting Tableau architecture, workbook calculations, and dashboard translation.'
      }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-genai-agents',
    slug: 'generative-ai-agents-rag-mcp',
    title: 'Generative AI, Autonomous Agents & MCP Specialization',
    shortDescription: 'Build production RAG pipelines, autonomous multi-agent systems, Model Context Protocol (MCP) servers, and enterprise LLM applications.',
    longDescription: 'The enterprise AI revolution is moving beyond simple prompt engineering to autonomous Agentic AI and context-aware systems. Learn how to architect end-to-end Retrieval-Augmented Generation (RAG) with vector databases, orchestrate multi-agent workflows, implement Anthropic Model Context Protocol (MCP) clients and servers, deploy with Azure AI Foundry, and enforce strict LLM security and evaluation metrics.',
    domain: 'Artificial Intelligence & Generative AI',
    level: 'Advanced',
    durationWeeks: 12,
    totalHours: 96,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Python', 'OpenAI API', 'Claude API', 'LangChain', 'LlamaIndex', 'Model Context Protocol (MCP)', 'ChromaDB', 'Pinecone', 'Azure AI Foundry', 'Copilot Studio', 'Docker', 'FastAPI'],
    badge: 'Next-Gen Frontier',
    highlights: [
      'Architect production RAG systems with hybrid search, re-ranking, and chunking strategies',
      'Build custom Model Context Protocol (MCP) servers exposing database tools to AI',
      'Autonomous multi-agent orchestration for complex multi-step workflows',
      'Enterprise LLM evaluation with Ragas, hallucination benchmarks, and guardrails'
    ],
    prerequisites: ['Proficiency in Python programming (OOP, async/await, APIs)', 'Basic familiarity with REST APIs and JSON data structures'],
    targetAudience: [
      'Software engineers and full-stack developers integrating GenAI into production products',
      'Data scientists expanding into LLMOps and autonomous agent architectures',
      'Technology architects designing enterprise AI roadmaps'
    ],
    learningOutcomes: [
      'Construct high-precision RAG architectures with semantic chunking and re-ranking',
      'Author custom MCP tools and servers connecting LLMs safely to internal databases',
      'Orchestrate autonomous agent swarms with memory, tool calling, and self-correction',
      'Implement enterprise guardrails (NeMo Guardrails, input sanitization, PII masking)'
    ],
    capstoneProject: {
      title: 'Enterprise Multi-Agent Financial Research & Audit Knowledge Assistant',
      description: 'An autonomous multi-agent system powered by MCP that ingest SEC 10-K filings, queries internal ERP SQL databases via an MCP tool, conducts cross-document risk analysis, and synthesizes structured compliance reports with verbatim citations.',
      deliverables: [
        'Production RAG pipeline with hybrid dense-sparse vector search in Pinecone/Chroma',
        'Custom MCP server written in Python/FastAPI exposing SQL analytics and document parsers',
        'Multi-agent debate and validation loop minimizing hallucination to < 1%',
        'Containerized Docker microservice with Swagger documentation'
      ],
      techStack: ['Python', 'LangGraph', 'Model Context Protocol (MCP)', 'OpenAI GPT-4o', 'ChromaDB', 'FastAPI', 'Docker']
    },
    instructor: {
      name: 'NodalBot AI Engineering Group',
      title: 'Lead AI Scientists & Solutions Engineers',
      experience: 'Generative AI & Enterprise Agent Deployments',
      companyBackground: 'NodalBot Digital Solutions AI Lab',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[2]
    ],
    modules: [
      {
        id: 'mod-ai-01',
        moduleNumber: 1,
        title: 'LLM Foundations, Embeddings & Vector Databases',
        description: 'Transformer mechanics, tokenization, embeddings geometry, vector distance metrics, dense vs sparse retrieval, and Chroma/Pinecone setups.',
        durationHours: 18,
        learningObjectives: ['Embedding Generation & Cosine Similarity', 'Vector DB Indexing (HNSW, IVFFlat)', 'Token Cost Management', 'Structured Output via JSON Schemas'],
        lessons: [
          { id: 'les-ai-1', title: 'Vector Space Geometry and High-Dimensional Embeddings', durationMinutes: 75, type: 'reading' },
          { id: 'les-ai-2', title: 'Setting Up and Querying Vector Stores with Metadata Filtering', durationMinutes: 90, type: 'code-lab' }
        ],
        handsOnLab: 'Build a semantic document search engine with hybrid BM25 and vector ranking'
      },
      {
        id: 'mod-ai-02',
        moduleNumber: 2,
        title: 'Production Retrieval-Augmented Generation (RAG)',
        description: 'Semantic chunking, recursive character splitting, parent-child retrieval, contextual compression, Cohere re-ranking, and Ragas evaluation.',
        durationHours: 24,
        learningObjectives: ['Advanced Document Chunking', 'Hybrid Dense-Sparse Search', 'Re-Ranking with Cross-Encoders', 'RAG Evaluation Metrics (Faithfulness, Relevancy)'],
        lessons: [
          { id: 'les-ai-3', title: 'Building a Production PDF Parsing & Ingestion Pipeline', durationMinutes: 80, type: 'code-lab' },
          { id: 'les-ai-4', title: 'Evaluating RAG Output with Ragas and Ground Truth Datasets', durationMinutes: 85, type: 'code-lab' }
        ],
        handsOnLab: 'Construct a hallucination-resistant RAG system with automated citation tracking'
      },
      {
        id: 'mod-ai-03',
        moduleNumber: 3,
        title: 'Model Context Protocol (MCP) & Tool Calling',
        description: 'Understanding the Model Context Protocol architecture, resources, tools, prompts, building Python and TypeScript MCP servers, and Claude integration.',
        durationHours: 26,
        learningObjectives: ['Model Context Protocol Specifications', 'Authoring Secure Custom MCP Servers', 'Connecting LLMs to Filesystems & Databases', 'MCP Client-Host Communication'],
        lessons: [
          { id: 'les-ai-5', title: 'Deep Dive: The Model Context Protocol (MCP) Architecture', durationMinutes: 80, type: 'reading' },
          { id: 'les-ai-6', title: 'Coding a SQLite & Web Search MCP Server from Scratch', durationMinutes: 105, type: 'code-lab' }
        ],
        handsOnLab: 'Create an MCP server that provides SQL execution and schema inspection tools to an AI desktop client'
      },
      {
        id: 'mod-ai-04',
        moduleNumber: 4,
        title: 'Autonomous Multi-Agent Systems & Enterprise LLMOps',
        description: 'Agent loops (ReAct, Plan-and-Execute), LangGraph stateful workflows, human-in-the-loop approvals, Azure AI Foundry, and security guardrails.',
        durationHours: 28,
        learningObjectives: ['State Machines with LangGraph', 'Multi-Agent Delegation Patterns', 'Enterprise Safety & PII Masking', 'Deploying Scalable Agent APIs'],
        lessons: [
          { id: 'les-ai-7', title: 'Orchestrating a Multi-Agent Software Development Team', durationMinutes: 95, type: 'code-lab' },
          { id: 'les-ai-8', title: 'Deploying GenAI Microservices to Azure AI Foundry with Monitoring', durationMinutes: 85, type: 'video' }
        ],
        handsOnLab: 'Deploy a full-stack AI Assistant application with multi-agent research tools and streaming responses'
      }
    ],
    faqs: [
      {
        question: 'Does this course teach Model Context Protocol (MCP)?',
        answer: 'Yes! NodalBot is an early pioneer in incorporating official Model Context Protocol (MCP) server and client engineering into our core AI curriculum.'
      },
      {
        question: 'What hardware or GPU setup do I need?',
        answer: 'No expensive local GPUs are required. The course utilizes enterprise API endpoints (OpenAI, Claude, Azure AI) and cloud sandboxes accessible from any standard modern laptop.'
      }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-applied-mlops',
    slug: 'applied-data-science-mlops',
    title: 'Applied Data Science, Deep Learning & MLOps',
    shortDescription: 'Master statistical machine learning, PyTorch deep neural networks, computer vision, NLP, and automated MLOps pipelines with MLflow and Docker.',
    longDescription: 'Go from exploratory data analysis to production algorithmic microservices. Master supervised learning, random forests, XGBoost, mathematical foundations, PyTorch deep learning architectures, time-series forecasting, and CI/CD MLOps model registry workflows.',
    domain: 'Data Science & Machine Learning',
    level: 'Intermediate',
    durationWeeks: 14,
    totalHours: 110,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['Python', 'Scikit-Learn', 'PyTorch', 'XGBoost', 'LightGBM', 'OpenCV', 'Hugging Face', 'MLflow', 'FastAPI', 'Docker'],
    badge: 'End-to-End Specialization',
    highlights: [
      'Comprehensive mathematical foundations (Linear Algebra, Calculus, Statistics for ML)',
      'PyTorch computer vision and deep sequence modeling',
      'Hyperparameter optimization with Optuna and Bayesian tuning',
      'Packaging models as low-latency REST APIs with Docker and MLflow'
    ],
    prerequisites: ['Solid Python programming skills', 'College-level basic mathematics (matrices, derivatives, probability)'],
    targetAudience: [
      'Data analysts looking to transition into machine learning modeling',
      'Engineers wanting to deploy deep learning systems into enterprise software'
    ],
    learningOutcomes: [
      'Clean, engineer, and cross-validate tabular and image datasets without data leakage',
      'Train gradient boosted trees and evaluate with ROC-AUC, precision-recall, and SHAP values',
      'Build PyTorch CNNs and transfer learning image classifiers',
      'Track model experiments and deploy containerized inference servers'
    ],
    capstoneProject: {
      title: 'High-Frequency Financial Fraud & Anomaly Detection Pipeline',
      description: 'Build a production anomaly detection and classification pipeline for credit card transactions with severe class imbalance, complete with real-time FastAPI scoring and model drift monitoring.',
      deliverables: [
        'Imbalanced data handling pipeline with SMOTE, Tomek links, and XGBoost',
        'SHAP explainability dashboard showing feature contribution per prediction',
        'MLflow model registry tracking 15+ training runs and hyperparameter sweeps',
        'FastAPI microservice handling 1,000 requests/sec with latency benchmarking'
      ],
      techStack: ['Python', 'Scikit-Learn', 'XGBoost', 'MLflow', 'FastAPI', 'Docker', 'Streamlit']
    },
    instructor: {
      name: 'NodalBot Data Science Faculty',
      title: 'Senior Data Scientists & Machine Learning Engineers',
      experience: 'Ex-Tier 1 Tech Product Teams',
      companyBackground: 'NodalBot Technologies ML Practice',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[3]
    ],
    modules: [
      {
        id: 'mod-ds-01',
        moduleNumber: 1,
        title: 'Exploratory Data Analysis, Feature Engineering & Statistical Inference',
        description: 'Hypothesis testing, distributions, missing value imputation, encoding categorical features, and outlier handling.',
        durationHours: 24,
        learningObjectives: ['A/B Testing & p-values', 'Feature Engineering at Scale', 'Data Leakage Mitigation', 'Correlation vs Causation'],
        lessons: [
          { id: 'les-ds-1', title: 'Rigorous Feature Selection and Collinearity Diagnostics', durationMinutes: 80, type: 'code-lab' }
        ],
        handsOnLab: 'Conduct comprehensive EDA on an imbalanced healthcare patient dataset'
      },
      {
        id: 'mod-ds-02',
        moduleNumber: 2,
        title: 'Supervised & Unsupervised Machine Learning Algorithms',
        description: 'Regression, classification, decision trees, random forests, gradient boosting (XGBoost/LightGBM), clustering (K-Means, DBSCAN), and PCA.',
        durationHours: 32,
        learningObjectives: ['Tree Ensemble Mechanics', 'Gradient Boosting Math', 'Dimensionality Reduction', 'Model Explainability (SHAP/LIME)'],
        lessons: [
          { id: 'les-ds-2', title: 'Tuning XGBoost with Optuna Bayesian Optimization', durationMinutes: 90, type: 'code-lab' }
        ],
        handsOnLab: 'Build a high-precision customer churn predictor with explainable SHAP force plots'
      },
      {
        id: 'mod-ds-03',
        moduleNumber: 3,
        title: 'Deep Learning with PyTorch & Transfer Learning',
        description: 'Neural network math, backpropagation, CNNs, image augmentation, transfer learning with ResNet, and Hugging Face Transformers.',
        durationHours: 28,
        learningObjectives: ['PyTorch Tensors & Autograd', 'Convolutional Architectures', 'Transfer Learning', 'Transformer Attention Mechanics'],
        lessons: [
          { id: 'les-ds-3', title: 'Fine-Tuning a Vision Model with PyTorch on Custom Images', durationMinutes: 95, type: 'code-lab' }
        ],
        handsOnLab: 'Train an industrial defect detection classifier with transfer learning'
      },
      {
        id: 'mod-ds-04',
        moduleNumber: 4,
        title: 'Production MLOps, Model Serving & Monitoring',
        description: 'Experiment tracking with MLflow, containerization with Docker, low-latency API packaging with FastAPI, and data drift detection.',
        durationHours: 26,
        learningObjectives: ['MLflow Model Registry', 'FastAPI Asynchronous Inference', 'Dockerizing ML Pipelines', 'Data and Concept Drift Monitoring'],
        lessons: [
          { id: 'les-ds-4', title: 'Deploying Containerized PyTorch Models to Production Clouds', durationMinutes: 85, type: 'video' }
        ],
        handsOnLab: 'Package and deploy the financial fraud model into a Docker container with automated healthchecks'
      }
    ],
    faqs: [
      {
        question: 'How much math is required for this course?',
        answer: 'We teach the practical intuition behind gradients, loss functions, and probability matrices rather than requiring abstract mathematical proofs.'
      }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-power-automate-rpa',
    slug: 'microsoft-power-automate-uipath-rpa',
    title: 'Enterprise RPA & Intelligent Automation (Power Automate & UiPath)',
    shortDescription: 'Master Power Automate Cloud, Power Automate Desktop, UiPath, Intelligent Document Processing (IDP), and AI Document Intelligence.',
    longDescription: 'Enterprises spend millions on repetitive manual data entry, invoice reconciliation, and cross-application copy-pasting. Learn how to design enterprise robotic process automations that combine cloud flows, unattended desktop bots, AI OCR document understanding, and error-handling loops.',
    domain: 'RPA & Automation',
    level: 'Beginner',
    durationWeeks: 8,
    totalHours: 64,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Power Automate Cloud', 'Power Automate Desktop', 'UiPath Studio', 'Azure AI Document Intelligence', 'OCR', 'Excel Automation', 'REST API Connectors'],
    badge: 'Rapid Automation Track',
    highlights: [
      'Build end-to-end invoice extraction pipelines using AI Document Intelligence',
      'Orchestrate attended and unattended bots with Power Automate Desktop',
      'Enterprise bot governance, credential lockers, and error recovery',
      'UiPath Studio workflow automation and Orchestrator queue management'
    ],
    prerequisites: ['Basic logical thinking and spreadsheet familiarity'],
    targetAudience: [
      'Operations teams, IT support engineers, and business process analysts',
      'Software developers looking to specialize in high-demand RPA consulting'
    ],
    learningOutcomes: [
      'Build scheduled and event-driven cloud flows connecting Outlook, SharePoint, and Teams',
      'Develop desktop automation bots navigating legacy Windows applications and web forms',
      'Extract structured data from unstructured invoices and receipts with Azure AI Document Intelligence',
      'Deploy bots to enterprise queues with automated exception handling'
    ],
    capstoneProject: {
      title: 'Automated Multi-Vendor Accounts Payable & Invoice Processing Bot',
      description: 'An automated robotic process that monitors a shared email inbox for incoming PDF invoices, extracts structured line-items via Azure AI Document Intelligence, validates totals against ERP records, and enters data into a legacy desktop accounting ERP.',
      deliverables: [
        'Power Automate Cloud flow for email attachment triage and cloud storage',
        'Azure AI Document Intelligence custom model extracting vendor, line items, and tax',
        'Power Automate Desktop robot executing data entry into legacy ERP forms',
        'Audit trail spreadsheet logging processed, flagged, and failed invoices'
      ],
      techStack: ['Power Automate Cloud', 'Power Automate Desktop', 'Azure AI Document Intelligence', 'Excel', 'Outlook']
    },
    instructor: {
      name: 'NodalBot RPA Practice Lead',
      title: 'Senior Intelligent Automation Consultant',
      experience: '8+ Years Robotic Process Automation Architecture',
      companyBackground: 'NodalBot Digital Solutions Automation Team',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[4]
    ],
    modules: [
      {
        id: 'mod-rpa-01',
        moduleNumber: 1,
        title: 'Power Automate Cloud Flows & API Integrations',
        description: 'Triggers, actions, dynamic content, expressions, conditions, loops, approvals, and Microsoft 365 integrations.',
        durationHours: 16,
        learningObjectives: ['Cloud Flow Architecture', 'Handling Expressions & JSON in Power Automate', 'Automated Email & Teams Alerts', 'Multi-Level Approval Workflows'],
        lessons: [
          { id: 'les-rpa-1', title: 'Designing High-Reliability Cloud Flows with Try-Catch Scopes', durationMinutes: 75, type: 'code-lab' }
        ],
        handsOnLab: 'Create an automated employee onboarding approval workflow across SharePoint and Teams'
      },
      {
        id: 'mod-rpa-02',
        moduleNumber: 2,
        title: 'Power Automate Desktop & UI Element Automation',
        description: 'Web automation, desktop application recording, selector tuning, Excel manipulation, and credential management.',
        durationHours: 18,
        learningObjectives: ['Desktop UI Selectors & Robustness', 'Web Form Scraping & Automation', 'Handling Dialogs and Popups', 'Unattended Desktop Bot Execution'],
        lessons: [
          { id: 'les-rpa-2', title: 'Automating Legacy Windows Software with Desktop Recording', durationMinutes: 80, type: 'code-lab' }
        ],
        handsOnLab: 'Build a desktop robot that inputs bulk rows from an Excel file into a legacy desktop app'
      },
      {
        id: 'mod-rpa-03',
        moduleNumber: 3,
        title: 'Intelligent Document Processing (IDP) & Azure AI Document Intelligence',
        description: 'Prebuilt receipt/invoice models, custom extraction models, OCR confidence scoring, and unstructured PDF handling.',
        durationHours: 16,
        learningObjectives: ['OCR Principles and Key-Value Pair Extraction', 'Azure AI Document Intelligence Setup', 'Validating Extracted Data Against Business Rules'],
        lessons: [
          { id: 'les-rpa-3', title: 'Connecting AI Document Intelligence to Power Automate Flows', durationMinutes: 85, type: 'code-lab' }
        ],
        handsOnLab: 'Build an automated PDF expense parser extracting receipt amounts into an approval portal'
      },
      {
        id: 'mod-rpa-04',
        moduleNumber: 4,
        title: 'UiPath Fundamentals & Enterprise Bot Governance',
        description: 'UiPath Studio workflows, variables, arguments, Orchestrator queues, and exception handling best practices.',
        durationHours: 14,
        learningObjectives: ['UiPath Studio vs Power Automate', 'Queue-Based Transaction Processing', 'Enterprise Security & Governance'],
        lessons: [
          { id: 'les-rpa-4', title: 'Building a Transactional Queue Bot in UiPath Studio', durationMinutes: 90, type: 'code-lab' }
        ],
        handsOnLab: 'Deploy a UiPath bot processing customer status change requests from a cloud queue'
      }
    ],
    faqs: [
      {
        question: 'Do I need a paid license to learn Power Automate or UiPath?',
        answer: 'No! Microsoft provides free access to Power Automate Desktop for Windows users, and UiPath offers a free Community Edition that includes full Studio and Orchestrator capabilities.'
      }
    ],
    isFeatured: false,
    isPublished: true
  },
  {
    id: 'course-cloud-devops',
    slug: 'cloud-native-devops-architecture',
    title: 'Azure & AWS Cloud Architecture with Docker & DevOps',
    shortDescription: 'Master cloud computing fundamentals, Azure and AWS infrastructure, Docker containerization, CI/CD pipelines, and microservices.',
    longDescription: 'Modern software is engineered for the cloud. Learn how to architect, provision, and maintain secure, highly available cloud workloads across Azure and AWS. Master Git version control, Docker containers, Kubernetes basics, Linux administration, and automated GitHub Actions CI/CD pipelines.',
    domain: 'Cloud & Software Technologies',
    level: 'Beginner',
    durationWeeks: 10,
    totalHours: 80,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Microsoft Azure', 'AWS', 'Linux', 'Git', 'GitHub Actions', 'Docker', 'Kubernetes Basics', 'Terraform Basics', 'REST APIs'],
    badge: 'Enterprise Infrastructure',
    highlights: [
      'Multi-cloud foundational comparison: Azure vs AWS core services',
      'Containerizing Python and Node.js microservices with Docker',
      'Automated CI/CD pipelines deploying code on git push',
      'Cloud security, IAM roles, and networking fundamentals (VPC, Subnets)'
    ],
    prerequisites: ['Basic computer operating system understanding'],
    targetAudience: [
      'Software developers looking to master production deployments',
      'IT administrators transitioning into Cloud and DevOps engineering'
    ],
    learningOutcomes: [
      'Configure secure virtual networks, subnets, and security groups in Azure and AWS',
      'Write optimized Dockerfiles and orchestrate multi-container apps with Docker Compose',
      'Build automated GitHub Actions workflows running automated tests and cloud deployments',
      'Design fault-tolerant, auto-scaling cloud architectures'
    ],
    capstoneProject: {
      title: 'Automated Multi-Region Web Microservices Deployment on Azure & AWS',
      description: 'Architect a containerized Python/Node web application with an automated GitHub Actions pipeline deploying to Azure App Services / AWS ECS with zero-downtime rolling updates.',
      deliverables: [
        'Multi-stage Dockerfile optimized for security and small footprint',
        'GitHub Actions workflow running unit tests, linting, and Docker container publishing',
        'Cloud infrastructure setup with load balancers and auto-scaling rules',
        'CloudWatch/Azure Monitor telemetry dashboard tracking CPU, memory, and error rates'
      ],
      techStack: ['Azure', 'AWS', 'Docker', 'GitHub Actions', 'Linux', 'Nginx']
    },
    instructor: {
      name: 'NodalBot Cloud Infrastructure Team',
      title: 'Senior Cloud Solutions Architects',
      experience: '12+ Years Enterprise Cloud Migrations',
      companyBackground: 'NodalBot Digital Solutions Cloud Division',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      UPCOMING_BATCHES_DATA[5]
    ],
    modules: [
      {
        id: 'mod-cld-01',
        moduleNumber: 1,
        title: 'Linux Systems & Git Version Control Mastery',
        description: 'Bash scripting, file permissions, SSH keys, process management, Git branching strategies, rebasing, and GitHub workflows.',
        durationHours: 16,
        learningObjectives: ['Linux CLI Fluency', 'SSH & Server Security', 'Trunk-Based Git Workflows', 'Managing Conflicts and Pull Requests'],
        lessons: [
          { id: 'les-cld-1', title: 'Essential Linux Command-Line and Shell Automation', durationMinutes: 75, type: 'code-lab' }
        ],
        handsOnLab: 'Set up an automated Linux cron task and secure an SSH server configuration'
      },
      {
        id: 'mod-cld-02',
        moduleNumber: 2,
        title: 'Cloud Foundations: Azure & AWS Core Architectures',
        description: 'Virtual machines, VPC/VNet networking, subnets, route tables, IAM roles, object storage (S3/Blob), and load balancers.',
        durationHours: 24,
        learningObjectives: ['Cloud Computing Shared Responsibility Model', 'Designing Secure VPC/VNet Subnets', 'IAM Least-Privilege Policies', 'Storage Tiers & Lifecycle Policies'],
        lessons: [
          { id: 'les-cld-2', title: 'Architecting a Multi-Tier Web Application on Azure & AWS', durationMinutes: 80, type: 'video' }
        ],
        handsOnLab: 'Provision a secured virtual network with public/private subnets and a bastion host'
      },
      {
        id: 'mod-cld-03',
        moduleNumber: 3,
        title: 'Docker Containerization & Compose Orchestration',
        description: 'Container architecture vs VMs, Dockerfile caching, multi-stage builds, volumes, networks, and Docker Compose.',
        durationHours: 20,
        learningObjectives: ['Building Lightweight Secure Containers', 'Docker Networking Mechanics', 'Managing Multi-Container Stacks with Compose'],
        lessons: [
          { id: 'les-cld-3', title: 'Writing Production Multi-Stage Dockerfiles for Python and Node', durationMinutes: 85, type: 'code-lab' }
        ],
        handsOnLab: 'Containerize a full-stack application (frontend + API + database) using Docker Compose'
      },
      {
        id: 'mod-cld-04',
        moduleNumber: 4,
        title: 'DevOps CI/CD Automation with GitHub Actions',
        description: 'Pipeline syntax, self-hosted vs cloud runners, environment secrets, automated testing, and zero-downtime deployments.',
        durationHours: 20,
        learningObjectives: ['CI/CD Pipeline Design', 'Automated Testing Gates', 'Deploying Containers to Azure & AWS', 'Rollback Strategies'],
        lessons: [
          { id: 'les-cld-4', title: 'Building an Automated Continuous Deployment Pipeline with GitHub Actions', durationMinutes: 90, type: 'code-lab' }
        ],
        handsOnLab: 'Build an end-to-end CI/CD workflow deploying a container on code merge'
      }
    ],
    faqs: [
      {
        question: 'Do I get free access to Azure and AWS for practice?',
        answer: 'Yes! Both Azure and AWS offer 12-month free tiers for new accounts. We provide strict cost-management instructions so you never incur accidental charges during labs.'
      }
    ],
    isFeatured: false,
    isPublished: true
  }
];

// The 14 Specific Career Pathways
export const CAREER_PATHWAYS_DATA: CareerPathway[] = [
  {
    id: 'path-data-analyst',
    slug: 'data-analyst',
    roleTitle: 'Data Analyst',
    tagline: 'Transform raw corporate data into actionable business insights and statistical dashboards.',
    domain: 'Data Analytics & Business Intelligence',
    targetAudience: ['Fresh graduates in engineering, commerce, mathematics', 'Operations and sales professionals wanting high-growth tech roles'],
    requiredSkills: ['SQL Querying', 'Advanced Excel', 'Data Cleaning', 'Power BI or Tableau', 'Descriptive Statistics', 'Data Storytelling'],
    learningSequence: [
      { phase: 'Phase 1: Foundations', title: 'Advanced Excel & Business Math', duration: '2 Weeks', topics: ['XLOOKUP, INDEX/MATCH', 'Pivot Tables & Power Query', 'Descriptive Statistics', 'Data Cleaning'] },
      { phase: 'Phase 2: Relational Querying', title: 'SQL for Data Analytics', duration: '3 Weeks', topics: ['Multi-table Joins', 'Window Functions', 'Subqueries & CTEs', 'Aggregations'] },
      { phase: 'Phase 3: Visualization', title: 'Power BI & Dashboard Design', duration: '4 Weeks', topics: ['Data Modeling', 'Essential DAX Measures', 'Visual Storytelling', 'Publishing Reports'] },
      { phase: 'Phase 4: Capstone', title: 'Industry Portfolio Capstone', duration: '2 Weeks', topics: ['End-to-End Business Analysis', 'Executive Summary Deck', 'Interview Prep'] }
    ],
    recommendedCourses: ['Enterprise Power BI, DAX & Fabric Analytics'],
    technologyStack: ['Excel', 'SQL', 'Power BI', 'Tableau', 'Power Query'],
    practicalProjectIdeas: [
      { title: 'Global Superstore Sales & Churn Analytics', description: 'Analyze 50,000 multi-regional retail transactions to identify unprofitable product categories and shipping bottlenecks.', technologies: ['Excel', 'SQL', 'Power BI'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Power BI Data Analyst Associate (PL-300)'],
    careerOpportunities: ['Junior Data Analyst', 'Business Data Analyst', 'Reporting Specialist', 'Marketing Analyst'],
    averageSalaryBand: '₹4.5L – ₹8.5L LPA (India) / $65K – $90K (US)'
  },
  {
    id: 'path-bi-developer',
    slug: 'bi-developer',
    roleTitle: 'Business Intelligence Developer',
    tagline: 'Architect dimensional models, automated ETL workflows, and enterprise reporting platforms.',
    domain: 'Data Analytics & Business Intelligence',
    targetAudience: ['Data analysts moving into technical architecture', 'Database engineers interested in analytics systems'],
    requiredSkills: ['Dimensional Modeling', 'Complex DAX & M-Code', 'SQL Optimization', 'Power BI Service Admin', 'Data Warehousing Fundamentals'],
    learningSequence: [
      { phase: 'Phase 1: Database Architecture', title: 'Advanced SQL & Data Warehousing', duration: '3 Weeks', topics: ['Star Schemas', 'Slowly Changing Dimensions', 'Indexing & Query Plans'] },
      { phase: 'Phase 2: Power BI Mastery', title: 'Deep DAX & Power Query Engineering', duration: '4 Weeks', topics: ['Filter Context Mechanics', 'CALCULATE Mastery', 'Query Folding in M'] },
      { phase: 'Phase 3: Enterprise Platform', title: 'Power BI Service & Governance', duration: '2 Weeks', topics: ['Row-Level Security (RLS)', 'Gateway Configuration', 'Fabric Direct Lake'] },
      { phase: 'Phase 4: Capstone', title: 'Enterprise BI Deployment', duration: '2 Weeks', topics: ['Multi-Department Reporting Suite', 'Performance Tuning'] }
    ],
    recommendedCourses: ['Enterprise Power BI, DAX & Fabric Analytics'],
    technologyStack: ['Power BI', 'DAX', 'SQL Server', 'Power Query', 'Fabric'],
    practicalProjectIdeas: [
      { title: 'Enterprise Supply Chain & Logistics Control Tower', description: 'Design a dimensional data warehouse and Power BI dashboard tracking on-time-in-full (OTIF) fulfillment across 12 distribution centers.', technologies: ['SQL Server', 'DAX', 'Power BI'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Power BI Data Analyst Associate (PL-300)', 'Microsoft Fabric Analytics Engineer (DP-600)'],
    careerOpportunities: ['BI Developer', 'Senior BI Analyst', 'Reporting Architect', 'BI Consultant'],
    averageSalaryBand: '₹6L – ₹14L LPA (India) / $85K – $115K (US)'
  },
  {
    id: 'path-power-bi-developer',
    slug: 'power-bi-developer',
    roleTitle: 'Power BI Developer',
    tagline: 'Specialize in Microsoft Power BI ecosystems, Fabric OneLake, and high-performance DAX.',
    domain: 'Data Analytics & Business Intelligence',
    targetAudience: ['Professionals focused specifically on the Microsoft BI ecosystem'],
    requiredSkills: ['Power BI Desktop', 'Advanced DAX', 'Power Query M', 'Row-Level Security', 'Fabric Semantic Models'],
    learningSequence: [
      { phase: 'Phase 1: Data Modeling', title: 'Star Schema & Data Shaping', duration: '2 Weeks', topics: ['Relational Cardinality', 'Data Cleaning in M', 'Role-Playing Dimensions'] },
      { phase: 'Phase 2: DAX Formulas', title: 'Calculated Measures & Time Intelligence', duration: '4 Weeks', topics: ['CALCULATE, FILTER, ALL', 'Rolling Averages & YoY Growth', 'Dynamic Segmenting'] },
      { phase: 'Phase 3: Executive UX', title: 'Custom Tooltips, Drill-Through & RLS', duration: '2 Weeks', topics: ['Human-Centric Dashboard UI', 'Dynamic RLS with Security Tables'] },
      { phase: 'Phase 4: Capstone', title: 'Published Cloud Solution', duration: '2 Weeks', topics: ['Automated Refresh', 'Fabric Direct Lake Integration'] }
    ],
    recommendedCourses: ['Enterprise Power BI, DAX & Fabric Analytics'],
    technologyStack: ['Power BI', 'DAX', 'M-Language', 'Microsoft Fabric', 'SQL'],
    practicalProjectIdeas: [
      { title: 'SaaS Subscription & Customer Lifetime Value (LTV) Cockpit', description: 'Build an executive dashboard tracking monthly recurring revenue (MRR), cohort retention, and churn forecasting.', technologies: ['Power BI', 'DAX', 'SQL'] }
    ],
    suggestedCertifications: ['Microsoft PL-300', 'Microsoft DP-600'],
    careerOpportunities: ['Power BI Developer', 'Power BI Consultant', 'Senior Analytics Specialist'],
    averageSalaryBand: '₹6L – ₹13L LPA (India) / $80K – $110K (US)'
  },
  {
    id: 'path-tableau-developer',
    slug: 'tableau-developer',
    roleTitle: 'Tableau Developer',
    tagline: 'Master Tableau Desktop, Tableau Prep, complex Level of Detail (LOD) calculations, and visual storytelling.',
    domain: 'Data Analytics & Business Intelligence',
    targetAudience: ['Data visualization enthusiasts seeking roles in multinational corporations using Salesforce / Tableau'],
    requiredSkills: ['Tableau Desktop', 'Tableau Prep', 'LOD Expressions (FIXED, INCLUDE, EXCLUDE)', 'SQL', 'Interactive Dashboards'],
    learningSequence: [
      { phase: 'Phase 1: Prep & Data Joining', title: 'Tableau Prep Builder & Data Cleaning', duration: '2 Weeks', topics: ['Pivoting, Aggregations', 'Joins & Blends', 'Cleaning Dirty Data'] },
      { phase: 'Phase 2: Calculations', title: 'Tableau Calculations & LOD Expressions', duration: '3 Weeks', topics: ['Table Calculations', 'FIXED, INCLUDE, EXCLUDE', 'Parameters'] },
      { phase: 'Phase 3: Advanced UI', title: 'Dashboard Actions & Visual Storytelling', duration: '3 Weeks', topics: ['Set Actions, Parameter Actions', 'Dual-Axis Charts', 'Story Points'] },
      { phase: 'Phase 4: Capstone', title: 'Tableau Server Publishing', duration: '2 Weeks', topics: ['Extract Optimization', 'Permissions & Security'] }
    ],
    recommendedCourses: ['Enterprise Power BI, DAX & Fabric Analytics'],
    technologyStack: ['Tableau Desktop', 'Tableau Prep', 'SQL', 'Tableau Server'],
    practicalProjectIdeas: [
      { title: 'Healthcare Patient Triage & Bed Utilization Dashboard', description: 'Visualize emergency room admissions, patient wait times, and ICU bed occupancy across hospital networks.', technologies: ['Tableau', 'Tableau Prep', 'SQL'] }
    ],
    suggestedCertifications: ['Tableau Certified Data Analyst'],
    careerOpportunities: ['Tableau Developer', 'Visual Analytics Specialist', 'BI Consultant'],
    averageSalaryBand: '₹6L – ₹13L LPA (India) / $80K – $115K (US)'
  },
  {
    id: 'path-data-engineer',
    slug: 'data-engineer',
    roleTitle: 'Data Engineer',
    tagline: 'Design and build the foundational pipelines, distributed compute engines, and data lakes that power modern AI.',
    domain: 'Data Engineering',
    targetAudience: ['Software engineers, backend developers, SQL developers, CS freshers'],
    requiredSkills: ['SQL & Advanced SQL', 'Python', 'ETL/ELT Architecture', 'Apache Spark / PySpark', 'Data Warehousing', 'Cloud Storage'],
    learningSequence: [
      { phase: 'Phase 1: Core Systems', title: 'Advanced SQL, Python & Data Structures', duration: '3 Weeks', topics: ['Complex Queries', 'Python for File Processing', 'Parquet & Columnar Storage'] },
      { phase: 'Phase 2: Distributed Processing', title: 'Apache Spark & PySpark', duration: '4 Weeks', topics: ['Spark Architecture', 'DataFrames API', 'Partitioning Strategies'] },
      { phase: 'Phase 3: Lakehouse Engineering', title: 'Delta Lake & Cloud Warehousing', duration: '4 Weeks', topics: ['Medallion Architecture', 'ACID Transactions in Lakehouses', 'Snowflake / BigQuery'] },
      { phase: 'Phase 4: Production Capstone', title: 'End-to-End Orchestrated Pipeline', duration: '3 Weeks', topics: ['Workflow Orchestration', 'Data Quality Testing', 'CI/CD for Data'] }
    ],
    recommendedCourses: ['Azure & Databricks Modern Data Engineering'],
    technologyStack: ['Python', 'SQL', 'Apache Spark', 'Delta Lake', 'Snowflake', 'Airflow', 'Azure/AWS'],
    practicalProjectIdeas: [
      { title: 'High-Volume Financial Transactions Streaming Pipeline', description: 'Stream simulated credit card transactions into an Apache Spark cluster and generate real-time hourly aggregation rollups.', technologies: ['PySpark', 'Delta Lake', 'Kafka', 'Python'] }
    ],
    suggestedCertifications: ['Databricks Certified Associate Developer for Apache Spark', 'Snowflake SnowPro Core'],
    careerOpportunities: ['Data Engineer', 'Big Data Engineer', 'ETL Developer', 'Data Platform Engineer'],
    averageSalaryBand: '₹7L – ₹18L LPA (India) / $95K – $140K (US)'
  },
  {
    id: 'path-azure-data-engineer',
    slug: 'azure-data-engineer',
    roleTitle: 'Azure Data Engineer',
    tagline: 'Specialize in Microsoft Azure data platforms, ADF pipelines, Databricks, and Synapse Analytics.',
    domain: 'Data Engineering',
    targetAudience: ['Engineers focused on enterprise Microsoft cloud ecosystems'],
    requiredSkills: ['Azure Data Factory', 'Azure Databricks', 'Azure Data Lake Storage Gen2', 'PySpark', 'Microsoft Fabric', 'Azure Synapse'],
    learningSequence: [
      { phase: 'Phase 1: Azure Storage & ADF', title: 'ADLS Gen2 & Data Factory Orchestration', duration: '3 Weeks', topics: ['Linked Services & Datasets', 'Mapping Data Flows', 'Tumbling Window Triggers'] },
      { phase: 'Phase 2: Databricks & Spark', title: 'PySpark on Azure Databricks', duration: '4 Weeks', topics: ['Databricks Clusters & Notebooks', 'Delta Live Tables', 'Performance Optimization'] },
      { phase: 'Phase 3: Synapse & Fabric', title: 'Enterprise Lakehouse & OneLake', duration: '4 Weeks', topics: ['Dedicated SQL Pools', 'Serverless Queries', 'Fabric Integration'] },
      { phase: 'Phase 4: Capstone', title: 'Production Enterprise Azure Pipeline', duration: '3 Weeks', topics: ['Key Vault Security', 'Cost Optimization', 'DP-203 Review'] }
    ],
    recommendedCourses: ['Azure & Databricks Modern Data Engineering'],
    technologyStack: ['Azure Data Factory', 'Azure Databricks', 'PySpark', 'ADLS Gen2', 'Delta Lake', 'Microsoft Fabric'],
    practicalProjectIdeas: [
      { title: 'Multi-Tier Healthcare Analytics Platform on Azure', description: 'Ingest hospital EHR and billing data with ADF into ADLS Gen2, transform via Databricks Medallion pipelines, and publish to Synapse.', technologies: ['ADF', 'Azure Databricks', 'Delta Lake', 'Synapse'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Azure Data Engineer Associate (DP-203)', 'Microsoft Fabric Analytics Engineer (DP-600)'],
    careerOpportunities: ['Azure Data Engineer', 'Senior Azure Cloud Data Specialist', 'Data Platform Consultant'],
    averageSalaryBand: '₹8L – ₹20L LPA (India) / $105K – $150K (US)'
  },
  {
    id: 'path-databricks-engineer',
    slug: 'databricks-engineer',
    roleTitle: 'Databricks Engineer',
    tagline: 'Master the unified analytics platform combining Apache Spark, Delta Lake, Unity Catalog, and MLflow.',
    domain: 'Data Engineering',
    targetAudience: ['Data engineers and data scientists seeking mastery of the Databricks Lakehouse platform'],
    requiredSkills: ['Apache Spark', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Delta Live Tables (DLT)', 'Databricks Workflows'],
    learningSequence: [
      { phase: 'Phase 1: Spark Internals', title: 'Distributed Compute Architecture', duration: '3 Weeks', topics: ['Catalyst Optimizer', 'Tungsten Execution', 'DataFrames & SQL API'] },
      { phase: 'Phase 2: Delta Lake Mastery', title: 'ACID Lakehouse Storage', duration: '3 Weeks', topics: ['Time Travel', 'Z-Ordering & Liquid Clustering', 'Merge & Upsert Operations'] },
      { phase: 'Phase 3: Governance & Orchestration', title: 'Unity Catalog & Delta Live Tables', duration: '4 Weeks', topics: ['Data Governance & Lineage', 'Declarative Pipelines with DLT', 'Databricks Workflows'] },
      { phase: 'Phase 4: Capstone', title: 'Enterprise Databricks Lakehouse', duration: '2 Weeks', topics: ['Multi-Hop Architecture', 'Cost Governance'] }
    ],
    recommendedCourses: ['Azure & Databricks Modern Data Engineering'],
    technologyStack: ['Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'Unity Catalog', 'Python'],
    practicalProjectIdeas: [
      { title: 'Global Telecommunications Churn Lakehouse with Delta Live Tables', description: 'Build a production declarative pipeline in Databricks DLT with automated data quality expectations.', technologies: ['Databricks', 'PySpark', 'Delta Live Tables', 'Unity Catalog'] }
    ],
    suggestedCertifications: ['Databricks Certified Associate Developer for Apache Spark', 'Databricks Certified Data Engineer Associate / Professional'],
    careerOpportunities: ['Databricks Engineer', 'Lakehouse Architect', 'Lead Big Data Engineer'],
    averageSalaryBand: '₹9L – ₹22L LPA (India) / $115K – $165K (US)'
  },
  {
    id: 'path-data-scientist',
    slug: 'data-scientist',
    roleTitle: 'Data Scientist',
    tagline: 'Solve complex business problems through predictive statistical modeling, experiment design, and algorithmic innovation.',
    domain: 'Data Science & Machine Learning',
    targetAudience: ['Engineers, analysts, and STEM graduates passionate about mathematics, algorithms, and business strategy'],
    requiredSkills: ['Python', 'Statistical Inference', 'Scikit-Learn', 'Feature Engineering', 'Supervised & Unsupervised ML', 'Data Visualization'],
    learningSequence: [
      { phase: 'Phase 1: Mathematical Foundations', title: 'Statistics, Probability & Linear Algebra', duration: '3 Weeks', topics: ['Hypothesis Testing', 'Probability Distributions', 'Matrix Operations', 'EDA'] },
      { phase: 'Phase 2: Machine Learning', title: 'Classical & Tree-Based Algorithms', duration: '5 Weeks', topics: ['Linear/Logistic Regression', 'Random Forests', 'XGBoost & LightGBM', 'Cross-Validation'] },
      { phase: 'Phase 3: Advanced Analytics', title: 'Time Series & Explainable AI', duration: '3 Weeks', topics: ['ARIMA & Prophet', 'Clustering Techniques', 'SHAP & LIME Values'] },
      { phase: 'Phase 4: Capstone', title: 'Industry Predictive Product', duration: '3 Weeks', topics: ['End-to-End Business Formulation', 'Interactive Streamlit Demo'] }
    ],
    recommendedCourses: ['Applied Data Science, Deep Learning & MLOps'],
    technologyStack: ['Python', 'Pandas', 'Scikit-Learn', 'XGBoost', 'Statsmodels', 'Streamlit'],
    practicalProjectIdeas: [
      { title: 'Predictive Customer Lifetime Value & Churn Mitigation Engine', description: 'Develop a statistical risk classification model predicting subscriber churn probability 60 days in advance.', technologies: ['Python', 'Scikit-Learn', 'LightGBM', 'SHAP'] }
    ],
    suggestedCertifications: ['Google Cloud Certified Professional Data Scientist', 'AWS Certified Machine Learning - Specialty'],
    careerOpportunities: ['Data Scientist', 'Applied Scientist', 'Decision Scientist', 'Quantitative Analyst'],
    averageSalaryBand: '₹8L – ₹19L LPA (India) / $100K – $145K (US)'
  },
  {
    id: 'path-ml-engineer',
    slug: 'machine-learning-engineer',
    roleTitle: 'Machine Learning Engineer',
    tagline: 'Bridge the divide between experimental data science models and robust, scalable production software systems.',
    domain: 'Data Science & Machine Learning',
    targetAudience: ['Software engineers transitioning into ML, data scientists wanting strong production engineering skills'],
    requiredSkills: ['Production Python', 'PyTorch / TensorFlow', 'MLflow', 'FastAPI', 'Docker', 'Model Serving', 'CI/CD for ML'],
    learningSequence: [
      { phase: 'Phase 1: Algorithmic Rigor', title: 'Advanced ML & Deep Learning', duration: '4 Weeks', topics: ['PyTorch Foundations', 'CNNs & Sequence Models', 'Model Optimization'] },
      { phase: 'Phase 2: Model Packaging', title: 'FastAPI & Microservices', duration: '3 Weeks', topics: ['Asynchronous Endpoints', 'Pydantic Validation', 'Latency Optimization'] },
      { phase: 'Phase 3: MLOps Infrastructure', title: 'Docker, MLflow & Model Registries', duration: '4 Weeks', topics: ['Experiment Tracking', 'Containerization', 'Data Drift Detection'] },
      { phase: 'Phase 4: Capstone', title: 'High-Throughput ML Serving Pipeline', duration: '3 Weeks', topics: ['Automated Pipeline Testing', 'Cloud Deployment'] }
    ],
    recommendedCourses: ['Applied Data Science, Deep Learning & MLOps'],
    technologyStack: ['PyTorch', 'Scikit-Learn', 'FastAPI', 'Docker', 'MLflow', 'Kubernetes'],
    practicalProjectIdeas: [
      { title: 'Low-Latency Real-Time Fraud Scoring Engine with Docker and FastAPI', description: 'Deploy an asynchronous REST API serving XGBoost predictions with < 15ms response latency.', technologies: ['FastAPI', 'Docker', 'XGBoost', 'MLflow'] }
    ],
    suggestedCertifications: ['AWS Certified Machine Learning - Specialty', 'Google Cloud Professional Machine Learning Engineer'],
    careerOpportunities: ['Machine Learning Engineer', 'MLOps Engineer', 'AI Platform Engineer'],
    averageSalaryBand: '₹9L – ₹24L LPA (India) / $115K – $165K (US)'
  },
  {
    id: 'path-ai-engineer',
    slug: 'ai-engineer',
    roleTitle: 'AI Engineer',
    tagline: 'Engineer state-of-the-art intelligent software powered by foundation models, computer vision, and cognitive APIs.',
    domain: 'Artificial Intelligence & Generative AI',
    targetAudience: ['Full-stack and backend developers building AI-first consumer and enterprise applications'],
    requiredSkills: ['Python & TypeScript', 'OpenAI & Claude APIs', 'Computer Vision / NLP', 'Vector Search', 'Prompt Engineering', 'FastAPI'],
    learningSequence: [
      { phase: 'Phase 1: Foundation Models', title: 'API Integration & Embeddings', duration: '3 Weeks', topics: ['Prompt Architecture', 'Structured Output', 'Vector Geometry'] },
      { phase: 'Phase 2: Perception & Vision', title: 'Computer Vision & Speech APIs', duration: '3 Weeks', topics: ['OpenCV Basics', 'Whisper Speech-to-Text', 'Multimodal LLMs'] },
      { phase: 'Phase 3: Application Engineering', title: 'Full-Stack AI Integration', duration: '4 Weeks', topics: ['Streaming UI Responses', 'Caching with Redis', 'Cost Optimization'] },
      { phase: 'Phase 4: Capstone', title: 'Production AI Software System', duration: '2 Weeks', topics: ['End-to-End Multimodal Web App', 'Evaluation Guardrails'] }
    ],
    recommendedCourses: ['Generative AI, Autonomous Agents & MCP Specialization'],
    technologyStack: ['Python', 'OpenAI API', 'FastAPI', 'ChromaDB', 'React', 'Docker'],
    practicalProjectIdeas: [
      { title: 'Multimodal Video Triage & Audio Search Engine', description: 'Transcribe, summarize, and semantically index hours of lecture videos with interactive natural language Q&A.', technologies: ['OpenAI Whisper', 'GPT-4o', 'ChromaDB', 'FastAPI'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Azure AI Engineer Associate (AI-102)'],
    careerOpportunities: ['AI Engineer', 'AI Software Developer', 'Cognitive Solutions Engineer'],
    averageSalaryBand: '₹9L – ₹22L LPA (India) / $115K – $160K (US)'
  },
  {
    id: 'path-genai-engineer',
    slug: 'generative-ai-engineer',
    roleTitle: 'Generative AI Engineer',
    tagline: 'Architect enterprise RAG pipelines, autonomous multi-agent swarms, Model Context Protocol tools, and LLMOps.',
    domain: 'Artificial Intelligence & Generative AI',
    targetAudience: ['Senior developers, AI engineers, and tech architects leading enterprise GenAI initiatives'],
    requiredSkills: ['Advanced RAG Architectures', 'Model Context Protocol (MCP)', 'Multi-Agent Frameworks (LangGraph)', 'Vector Databases (Pinecone/Chroma)', 'Guardrails & Evaluation'],
    learningSequence: [
      { phase: 'Phase 1: Advanced Retrieval', title: 'Production RAG Architecture', duration: '3 Weeks', topics: ['Semantic Chunking', 'Hybrid Dense-Sparse Search', 'Cross-Encoder Re-Ranking'] },
      { phase: 'Phase 2: Interoperability', title: 'Model Context Protocol (MCP)', duration: '3 Weeks', topics: ['MCP Client/Server Protocol', 'Authoring Custom MCP Tools', 'Enterprise Database Connectors'] },
      { phase: 'Phase 3: Agent Swarms', title: 'Autonomous Multi-Agent Systems', duration: '4 Weeks', topics: ['LangGraph State Machines', 'Self-Correction Loops', 'Human-in-the-Loop'] },
      { phase: 'Phase 4: Capstone', title: 'Enterprise Copilot & LLMOps Platform', duration: '2 Weeks', topics: ['Ragas Benchmarking', 'NeMo Guardrails', 'Azure AI Foundry Deployment'] }
    ],
    recommendedCourses: ['Generative AI, Autonomous Agents & MCP Specialization'],
    technologyStack: ['Python', 'LangGraph', 'Model Context Protocol (MCP)', 'Pinecone', 'Azure AI Foundry', 'Docker'],
    practicalProjectIdeas: [
      { title: 'Autonomous Multi-Agent SEC Financial Auditor with Custom MCP Database Tools', description: 'Build an autonomous agent cluster that ingests regulatory filings, queries ERP databases via an MCP server, and generates verified risk reports.', technologies: ['Python', 'LangGraph', 'MCP', 'Pinecone', 'OpenAI'] }
    ],
    suggestedCertifications: ['Microsoft AI-102', 'AWS Certified AI Practitioner'],
    careerOpportunities: ['Generative AI Engineer', 'Agentic AI Architect', 'Lead LLM Solutions Engineer'],
    averageSalaryBand: '₹12L – ₹28L LPA (India) / $130K – $185K (US)'
  },
  {
    id: 'path-rpa-developer',
    slug: 'rpa-developer',
    roleTitle: 'RPA Developer',
    tagline: 'Automate manual enterprise processes and build unattended bots with Power Automate and UiPath.',
    domain: 'RPA & Automation',
    targetAudience: ['Process analysts, software freshers, and operations staff wanting technical automation careers'],
    requiredSkills: ['Power Automate Desktop', 'Power Automate Cloud', 'UiPath Studio', 'OCR Extraction', 'Excel Automation', 'Error Handling'],
    learningSequence: [
      { phase: 'Phase 1: Cloud Automations', title: 'Power Automate Cloud Flows', duration: '2 Weeks', topics: ['Automated Triggers', 'Approval Flows', 'SharePoint & Office 365'] },
      { phase: 'Phase 2: Desktop Robotics', title: 'Power Automate Desktop', duration: '3 Weeks', topics: ['UI Selectors', 'Web & Windows Automation', 'Handling Exceptions'] },
      { phase: 'Phase 3: Intelligent OCR', title: 'Azure AI Document Intelligence & UiPath', duration: '2 Weeks', topics: ['Invoice & Receipt Extraction', 'UiPath Studio Basics'] },
      { phase: 'Phase 4: Capstone', title: 'Full Accounts Payable Automated Robot', duration: '1 Week', topics: ['End-to-End Process Bot', 'Audit Logging'] }
    ],
    recommendedCourses: ['Enterprise RPA & Intelligent Automation (Power Automate & UiPath)'],
    technologyStack: ['Power Automate Cloud', 'Power Automate Desktop', 'UiPath', 'Azure AI Document Intelligence', 'Excel'],
    practicalProjectIdeas: [
      { title: 'End-to-End Invoice Processing and ERP Data Entry Bot', description: 'Monitor inbox for vendor invoices, extract tabular line items with AI Document Intelligence, and post entries into an accounting portal.', technologies: ['Power Automate', 'Azure AI Document Intelligence', 'Excel'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Power Platform App Maker / Developer (PL-100 / PL-400)', 'UiPath Certified RPA Associate (UiRPA)'],
    careerOpportunities: ['RPA Developer', 'Intelligent Automation Specialist', 'Power Platform Consultant'],
    averageSalaryBand: '₹5L – ₹12L LPA (India) / $75K – $105K (US)'
  },
  {
    id: 'path-automation-architect',
    slug: 'automation-architect',
    roleTitle: 'Automation Architect',
    tagline: 'Design holistic enterprise automation strategies combining low-code RPA, AI agents, and custom APIs.',
    domain: 'RPA & Automation',
    targetAudience: ['Senior RPA developers, solutions architects, and enterprise process transformation leaders'],
    requiredSkills: ['Enterprise Automation Strategy', 'Power Platform Governance', 'AI Document Processing', 'API & Hybrid Integrations', 'CoE Setup'],
    learningSequence: [
      { phase: 'Phase 1: Enterprise Strategy', title: 'Automation Center of Excellence (CoE)', duration: '2 Weeks', topics: ['Bot Governance', 'Security & DLP Policies', 'Infrastructure Sizing'] },
      { phase: 'Phase 2: Hybrid Systems', title: 'Combining RPA with AI Agents & APIs', duration: '3 Weeks', topics: ['API-First Automation', 'Autonomous Exception Handling with LLMs'] },
      { phase: 'Phase 3: Scalable Orchestration', title: 'UiPath Orchestrator & Power Platform ALM', duration: '2 Weeks', topics: ['Environment Management', 'Solution Packaging', 'High-Density Robots'] },
      { phase: 'Phase 4: Capstone', title: 'Enterprise Digital Transformation Blueprint', duration: '1 Week', topics: ['Multi-Department Automation Roadmap', 'ROI Calculation'] }
    ],
    recommendedCourses: ['Enterprise RPA & Intelligent Automation (Power Automate & UiPath)'],
    technologyStack: ['Power Automate', 'UiPath Orchestrator', 'Azure AI', 'REST APIs', 'Power Platform CoE'],
    practicalProjectIdeas: [
      { title: 'Enterprise Claims Processing Orchestration Architecture', description: 'Design a hybrid automation architecture processing 100,000 monthly insurance claims using RPA bots, AI triage, and human audit queues.', technologies: ['UiPath', 'Power Automate', 'Azure AI', 'SQL'] }
    ],
    suggestedCertifications: ['UiPath Certified Professional Automation Architect', 'Microsoft Power Platform Solution Architect (PL-600)'],
    careerOpportunities: ['Automation Architect', 'Head of RPA / Intelligent Automation', 'Enterprise Solutions Architect'],
    averageSalaryBand: '₹14L – ₹30L LPA (India) / $135K – $185K (US)'
  },
  {
    id: 'path-cloud-data-architect',
    slug: 'cloud-data-architect',
    roleTitle: 'Cloud Data Architect',
    tagline: 'Spearhead enterprise data platform blueprints, multi-cloud migrations, governance, and lakehouse strategies.',
    domain: 'Cloud & Software Technologies',
    targetAudience: ['Senior data engineers, database administrators, and IT managers moving into strategic technology leadership'],
    requiredSkills: ['Multi-Cloud Data Architecture (Azure / AWS / GCP)', 'Lakehouse Design', 'Data Governance (Unity Catalog / Purview)', 'Cost Optimization', 'Disaster Recovery'],
    learningSequence: [
      { phase: 'Phase 1: Multi-Cloud Principles', title: 'Cloud Infrastructure & Networking', duration: '3 Weeks', topics: ['VPC/VNet Peering', 'Hybrid Cloud Connectivity', 'Identity & Access (IAM)'] },
      { phase: 'Phase 2: Lakehouse & Warehouse', title: 'Modern Data Platform Blueprints', duration: '4 Weeks', topics: ['Databricks vs Snowflake vs BigQuery', 'Medallion Architecture', 'Direct Lake & BI Acceleration'] },
      { phase: 'Phase 3: Governance & Security', title: 'Enterprise Data Governance', duration: '3 Weeks', topics: ['Microsoft Purview', 'Databricks Unity Catalog', 'FinOps & Cost Allocation'] },
      { phase: 'Phase 4: Capstone', title: 'Enterprise Cloud Migration & Platform Blueprint', duration: '2 Weeks', topics: ['Legacy Teradata/Oracle Migration Plan', 'Executive Presentation'] }
    ],
    recommendedCourses: ['Azure & Databricks Modern Data Engineering', 'Azure & AWS Cloud Architecture with Docker & DevOps'],
    technologyStack: ['Azure', 'AWS', 'Databricks', 'Snowflake', 'Microsoft Fabric', 'Terraform'],
    practicalProjectIdeas: [
      { title: 'Multi-Petabyte On-Premises Oracle to Azure Lakehouse Migration Blueprint', description: 'Design a comprehensive migration and cutover architecture for a banking client moving 500TB of historical data to Databricks and Snowflake.', technologies: ['Azure', 'Databricks', 'Snowflake', 'Terraform'] }
    ],
    suggestedCertifications: ['Microsoft Certified: Azure Solutions Architect Expert (AZ-305)', 'Databricks Certified Solutions Architect', 'Snowflake SnowPro Advanced Architect'],
    careerOpportunities: ['Cloud Data Architect', 'Principal Data Solutions Architect', 'Director of Data Platforms'],
    averageSalaryBand: '₹18L – ₹40L LPA (India) / $150K – $220K (US)'
  }
];

// The 6 Core Digital Solutions Services
export const DIGITAL_SOLUTIONS_SERVICES: DigitalSolutionService[] = [
  {
    id: 'service-custom-software',
    slug: 'custom-software-development',
    serviceNumber: '01',
    title: 'Custom Software Development',
    tagline: 'Engineering resilient, scalable digital products and modern cloud-native web applications.',
    shortDescription: 'We design and develop bespoke enterprise web applications, high-performance APIs, internal process tools, and modernize legacy software with clean, testable codebases.',
    fullOverview: 'In an era where technology defines competitive advantage, off-the-shelf software often constrains innovation. NodalBot Digital Solutions engineers high-throughput, maintainable software architectures tailored to your business workflows. From customer-facing web platforms to secure microservice backends, our engineering teams build for high concurrency, zero downtime, and long-term scalability.',
    businessChallenges: [
      'Legacy software monolithic systems that are costly to maintain and impossible to scale',
      'Fragmented operational workflows conducted across spreadsheets and disconnected third-party tools',
      'Slow development velocity caused by technical debt and lack of modern automated testing',
      'Security and compliance vulnerabilities in aging software infrastructure'
    ],
    proposedSolution: 'A modern, modular engineering approach leveraging decoupled frontends (React / Next.js), performant backends (Node.js / Express / Python / Go), and containerized microservices orchestrated on reliable cloud infrastructure.',
    solutionArchitectureOverview: 'Microservices architecture with API Gateway, JWT/OAuth2 role-based security, Redis caching layer, event-driven message queues (RabbitMQ/Kafka), and automated CI/CD deployment pipelines.',
    keyCapabilities: [
      {
        title: 'Modern Web & Enterprise Applications',
        description: 'Responsive, accessible, high-performance web applications built with React, Vite, Next.js, and TypeScript.',
        deliverables: ['Custom Web Application', 'Role-Based Admin Console', 'Interactive Reporting Dashboards', 'Design System Components']
      },
      {
        title: 'API Development & Ecosystem Integration',
        description: 'RESTful and GraphQL API services engineered for sub-100ms response times and bulletproof security.',
        deliverables: ['Documented OpenAPI / Swagger Specs', 'Rate-Limited API Gateway', 'OAuth2 / SSO Authentication', 'Automated Postman Test Suites']
      },
      {
        title: 'Legacy Application Modernization',
        description: 'Deconstruct unwieldy on-premises monoliths into lightweight, containerized cloud microservices with zero operational downtime.',
        deliverables: ['Architecture Modernization Audit', 'Database Migration Scripts', 'Strangler Fig Decoupling Plan', 'Cloud-Native Containerization']
      }
    ],
    businessValueMetrics: [
      { metric: 'Development Velocity', impact: '3x faster feature rollouts with automated CI/CD and modular codebases' },
      { metric: 'System Uptime', impact: '99.95% availability guaranteed through fault-tolerant cloud container clustering' },
      { metric: 'Operational Efficiency', impact: '40% reduction in manual data processing through unified business process apps' }
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Redis', 'Azure', 'AWS', 'GitHub Actions'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'Discovery & System Blueprint', summary: 'Deep dive into user journeys, domain boundaries, data models, and non-functional scalability requirements.' },
      { stage: 'Stage 2', name: 'Agile Sprint Execution', summary: 'Two-week iterative sprints delivering functional, fully tested increments backed by automated test suites.' },
      { stage: 'Stage 3', name: 'Security & Performance Hardening', summary: 'Penetration testing, OWASP compliance verification, load testing, and database query optimization.' },
      { stage: 'Stage 4', name: 'Deployment & SLA Support', summary: 'Production release with automated monitoring, alerting, telemetry dashboards, and 24/7 incident response.' }
    ],
    applicableIndustries: ['Healthcare', 'BFSI', 'Retail & E-Commerce', 'Logistics', 'Manufacturing', 'Education'],
    sampleCaseStudy: {
      clientType: 'Logistics Fleet Management Provider (Conceptual Architecture)',
      challenge: 'Client operated an aging on-premises desktop dispatch system that struggled with peak shipment loads and lacked mobile driver accessibility.',
      solution: 'NodalBot engineered a cloud-native React and Node.js microservice dispatch platform integrated with real-time GPS telemetry and automated driver dispatch queues.',
      outcomes: [
        'Reduced shipment scheduling latency from 45 minutes to under 30 seconds',
        'Enabled real-time GPS tracking for 500+ fleet vehicles with zero server crashes during holiday surges',
        'Eliminated paper manifests, saving an estimated 120 hours of manual data entry every week'
      ]
    }
  },
  {
    id: 'service-data-engineering',
    slug: 'data-engineering-modern-platforms',
    serviceNumber: '02',
    title: 'Data Engineering & Modern Data Platforms',
    tagline: 'Engineering high-throughput data pipelines, cloud lakehouses, and governance frameworks.',
    shortDescription: 'We build enterprise ETL/ELT data pipelines, modern Medallion Lakehouses on Databricks and Snowflake, and unify fragmented company data into high-performance analytical assets.',
    fullOverview: 'Data is only valuable when it is accessible, fresh, clean, and reliable. NodalBot Digital Solutions designs modern data platforms that handle high-velocity ingestion from transactional databases, third-party APIs, and IoT devices. We implement Medallion Lakehouses (Bronze-Silver-Gold) that enforce strict data quality, schema evolution, and millisecond analytical querying.',
    businessChallenges: [
      'Data locked in silos across legacy ERPs, CRM databases, marketing tools, and Excel files',
      'Fragile overnight batch jobs that fail silently and take hours to recover',
      'High cloud compute costs caused by unoptimized queries and poor storage partitioning',
      'Lack of centralized governance, resulting in inconsistent metric definitions across teams'
    ],
    proposedSolution: 'A modern, unified Lakehouse architecture leveraging Azure Data Factory / AWS Glue for automated ingestion, Databricks / Spark for distributed transformation, and Delta Lake / Snowflake for high-speed reporting.',
    solutionArchitectureOverview: 'Multi-hop Medallion Architecture: Raw streaming ingestion into Bronze delta tables, schema validation and deduplication into Silver, and dimensional business aggregates into Gold.',
    keyCapabilities: [
      {
        title: 'Automated ETL & ELT Pipelines',
        description: 'Robust, parameterized ingestion pipelines with automated failure retries, error alerting, and data quality gates.',
        deliverables: ['Production ADF / Airflow DAGs', 'Automated Error Alerting Webhooks', 'CDC (Change Data Capture) Workflows', 'Metadata-Driven Ingestion Engine']
      },
      {
        title: 'Lakehouse & Warehouse Architecture',
        description: 'Design and landing of Delta Lake, Snowflake, and Microsoft Fabric lakehouses that eliminate dual storage costs.',
        deliverables: ['Medallion Architecture Blueprint', 'Z-Ordered / Clustered Tables', 'Time Travel & Audit Capability', 'Zero-Copy Clone Environments']
      },
      {
        title: 'Data Quality & Unified Governance',
        description: 'Implement automated schema validation, anomaly detection on incoming rows, and data cataloging via Unity Catalog or Purview.',
        deliverables: ['Data Quality Threshold Rules', 'Data Lineage Graphs', 'Role-Based Column Masking', 'Catalog Data Dictionary']
      }
    ],
    businessValueMetrics: [
      { metric: 'Pipeline Latency', impact: 'Reduced from 24-hour overnight batches to near-real-time 15-minute syncs' },
      { metric: 'Cloud Storage & Compute Cost', impact: 'Up to 35% savings via intelligent Delta Lake clustering and query tuning' },
      { metric: 'Data Reliability', impact: '99.8% clean data assurance via automated anomaly rejection gates' }
    ],
    technologies: ['Azure Data Factory', 'Azure Databricks', 'Apache Spark', 'PySpark', 'Delta Lake', 'Snowflake', 'Microsoft Fabric', 'SQL', 'Python', 'AWS S3 / ADLS Gen2'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'Data Landscape Audit', summary: 'Inventory all transactional sources, data volumes, ingestion frequencies, and target reporting needs.' },
      { stage: 'Stage 2', name: 'Architecture Blueprint', summary: 'Design Medallion layers, schema definitions, storage partitioning, and compute cluster sizing.' },
      { stage: 'Stage 3', name: 'Pipeline Development & Validation', summary: 'Develop parameterized ingestion scripts, data quality checks, and benchmark query performance.' },
      { stage: 'Stage 4', name: 'Cutover & Monitoring', summary: 'Production migration, historic data backfill, automated telemetry alerts, and knowledge transfer.' }
    ],
    applicableIndustries: ['Retail & E-Commerce', 'BFSI', 'Healthcare', 'Manufacturing', 'Logistics'],
    sampleCaseStudy: {
      clientType: 'Multi-Brand E-Commerce Retailer (Conceptual Architecture)',
      challenge: 'Client had 14 regional Shopify stores and an ERP database. Nightly sales reports took 6 hours to run and frequently reported conflicting revenue figures.',
      solution: 'NodalBot deployed an automated Azure Data Factory and Databricks Lakehouse architecture standardizing all transactions into a unified Delta Lake.',
      outcomes: [
        'Reporting refresh time slashed from 6 hours to under 8 minutes',
        'Unified customer lifetime value (LTV) view across all 14 regional storefronts',
        'Eliminated data discrepancy across marketing, finance, and logistics departments'
      ]
    }
  },
  {
    id: 'service-business-intelligence',
    slug: 'business-intelligence-executive-dashboards',
    serviceNumber: '03',
    title: 'Business Intelligence & Executive Dashboards',
    tagline: 'Transforming enterprise data into intuitive, real-time executive decision cockpits.',
    shortDescription: 'We design high-impact Power BI and Tableau reporting platforms, craft complex DAX calculations, build clean star schemas, and empower self-service analytics.',
    fullOverview: 'Organizations generate vast amounts of data, yet decision-makers frequently wait days for manual Excel rollups. NodalBot Digital Solutions creates human-centered, interactive Business Intelligence platforms. We architect semantic data models, implement advanced DAX calculations, and build intuitive dashboards that enable leaders to drill from company-wide KPIs down to individual customer transactions in seconds.',
    businessChallenges: [
      'Leadership relies on conflicting, static Excel reports that take days to assemble',
      'Slow dashboard rendering times (30+ seconds) caused by poor data modeling and messy DAX',
      'Lack of granular security controls, risking unauthorized access to sensitive financial figures',
      'Low organizational adoption due to overly complex, cluttered visualization layouts'
    ],
    proposedSolution: 'Enterprise Power BI and Tableau implementations built on optimized Star Schema data models, performant DAX/LOD measures, and dynamic Row-Level Security (RLS).',
    solutionArchitectureOverview: 'Direct Lake / Import semantic models connected to Gold analytical data marts, utilizing star schemas with surrogate keys and centralized DAX calculation groups.',
    keyCapabilities: [
      {
        title: 'Executive Cockpits & Operational Dashboards',
        description: 'Clean, high-contrast, visually engaging dashboard suites designed for C-level executives and departmental managers.',
        deliverables: ['Executive Summary KPI Board', 'Detailed Operational Drill-Throughs', 'Mobile-Responsive BI Layouts', 'Custom Bookmark Navigation']
      },
      {
        title: 'Advanced DAX & Semantic Modeling',
        description: 'High-performance DAX formulas for complex financial calculations, cohort retention, time intelligence, and dynamic currency conversions.',
        deliverables: ['Star Schema Dimensional Models', 'Centralized DAX Calculation Groups', 'What-If Scenario Modeling', 'Query Plan Optimization']
      },
      {
        title: 'BI Governance & Security Architecture',
        description: 'Implement dynamic Row-Level Security (RLS), enterprise workspace lifecycles, and scheduled automated cloud refreshes.',
        deliverables: ['Dynamic RLS Security Rules', 'Deployment Pipeline Stages (Dev/Test/Prod)', 'Automated Gateway Refreshes', 'Power BI Admin Training']
      }
    ],
    businessValueMetrics: [
      { metric: 'Decision Turnaround', impact: 'Reduced from 3 business days to immediate real-time dashboard inspection' },
      { metric: 'Dashboard Query Speed', impact: 'Under 2 seconds page render time via optimized Star Schemas and DAX' },
      { metric: 'Data Security', impact: '100% compliant role-based data partitioning via dynamic Row-Level Security' }
    ],
    technologies: ['Power BI Desktop', 'Power BI Service', 'DAX', 'Power Query (M)', 'Microsoft Fabric', 'Tableau Desktop', 'Tableau Server', 'SQL Server'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'KPI & Wireframe Alignment', summary: 'Interview executive stakeholders to define core metrics, targets, and wireframe report layouts.' },
      { stage: 'Stage 2', name: 'Data Model Engineering', summary: 'Build clean Star Schema tables, surrogate keys, and write optimized DAX calculation measures.' },
      { stage: 'Stage 3', name: 'Visual Design & Interactivity', summary: 'Implement human-centric visual hierarchy, tooltips, drill-throughs, and responsive mobile layouts.' },
      { stage: 'Stage 4', name: 'Security & Workspace Launch', summary: 'Configure Row-Level Security, automated gateway refreshes, and conduct end-user enablement workshops.' }
    ],
    applicableIndustries: ['BFSI', 'Retail & E-Commerce', 'Healthcare', 'Manufacturing', 'Travel & Hospitality'],
    sampleCaseStudy: {
      clientType: 'Private Healthcare Hospital Network (Conceptual Architecture)',
      challenge: 'Executive team lacked real-time visibility into bed occupancy, doctor utilization, and operating theater delays across 6 hospital locations.',
      solution: 'NodalBot engineered a unified Power BI executive cockpit with automated 30-minute gateway refreshes and role-based doctor access.',
      outcomes: [
        'Enabled hospital administrators to monitor bed occupancy and patient triage in real time',
        'Reduced patient transfer bottlenecks by 22% through predictive bed turnover dashboards',
        'Replaced 40+ manual weekly Excel sheets with a single source of verified truth'
      ]
    }
  },
  {
    id: 'service-artificial-intelligence',
    slug: 'artificial-intelligence-generative-ai',
    serviceNumber: '04',
    title: 'Artificial Intelligence & Generative AI Solutions',
    tagline: 'Engineering enterprise AI agents, context-aware RAG pipelines, and intelligent automation.',
    shortDescription: 'We develop custom Generative AI applications, autonomous multi-agent systems, Model Context Protocol (MCP) integrations, and intelligent document extraction engines.',
    fullOverview: 'Generative AI has evolved from novelty chatbots into mission-critical enterprise infrastructure. NodalBot Digital Solutions engineers production AI systems that integrate directly into your proprietary databases, documents, and business tools. Utilizing advanced RAG, autonomous agent swarms, and official Model Context Protocol (MCP) servers, we build AI solutions that operate securely within your enterprise guardrails.',
    businessChallenges: [
      'Knowledge workers spend hours searching through thousands of PDF policies, contracts, and technical manuals',
      'Generic public AI models hallucinate, lack access to internal private data, and pose intellectual property risks',
      'Difficulty connecting LLMs to internal SQL databases, ERP systems, and cloud APIs safely',
      'Lack of evaluation frameworks to measure AI accuracy, safety, and operational token costs'
    ],
    proposedSolution: 'Enterprise RAG pipelines with semantic chunking and re-ranking, custom Model Context Protocol (MCP) servers providing safe tool access, and multi-agent systems orchestrating complex analytical tasks.',
    solutionArchitectureOverview: 'Client Frontend -> API Gateway -> LangGraph Agent Orchestrator -> Custom MCP Server (Internal SQL / Docs) -> Vector Database (Pinecone/Chroma) -> Foundation Model -> Enterprise Guardrails.',
    keyCapabilities: [
      {
        title: 'Enterprise RAG & Document Assistants',
        description: 'Context-aware AI knowledge assistants grounded on internal documents with exact page citations and zero hallucination.',
        deliverables: ['Custom Document Parsing Engine', 'Hybrid Dense-Sparse Vector Search', 'Verbatim Citation Footnotes', 'Contextual Re-Ranking Pipeline']
      },
      {
        title: 'Autonomous AI Agents & MCP Integrations',
        description: 'Develop custom Model Context Protocol (MCP) servers that enable AI agents to execute database queries, parse files, and perform actions safely.',
        deliverables: ['Custom Python / TypeScript MCP Servers', 'Multi-Agent LangGraph Workflows', 'Role-Based Tool Permissions', 'Human-in-the-Loop Approval Queues']
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        description: 'Automated extraction of key-value pairs, tables, and handwritten notes from unstructured PDFs, forms, and scanned receipts.',
        deliverables: ['Custom Azure AI Document Models', 'Table & Line-Item Extractor', 'Confidence Score Thresholds', 'Automated Exception Flagging']
      }
    ],
    businessValueMetrics: [
      { metric: 'Information Retrieval Time', impact: 'Reduced from 25 minutes per query to under 5 seconds with semantic RAG' },
      { metric: 'Document Extraction Speed', impact: '90% faster processing of invoices, contracts, and claims forms' },
      { metric: 'Hallucination Rate', impact: 'Maintained below 0.5% through strict cross-encoder verification and citations' }
    ],
    technologies: ['OpenAI GPT-4o', 'Claude API', 'Model Context Protocol (MCP)', 'LangChain / LangGraph', 'ChromaDB', 'Pinecone', 'Azure AI Foundry', 'Python', 'FastAPI', 'Docker'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'Feasibility & Data Assessment', summary: 'Audit source document formats, assess data security requirements, and establish accuracy benchmarks.' },
      { stage: 'Stage 2', name: 'Prototype & RAG Tuning', summary: 'Build working prototype with semantic chunking, vector indexing, and evaluate retrieval precision with Ragas.' },
      { stage: 'Stage 3', name: 'MCP & Agent Integration', summary: 'Develop custom MCP servers connecting the agent to internal databases and business software.' },
      { stage: 'Stage 4', name: 'Hardening & Deployment', summary: 'Implement guardrails (PII masking, prompt injection defense), rate limiting, and cloud deployment.' }
    ],
    applicableIndustries: ['BFSI', 'Healthcare', 'Insurance', 'Legal & Compliance', 'Retail', 'Education'],
    sampleCaseStudy: {
      clientType: 'Commercial Insurance Underwriter (Conceptual Architecture)',
      challenge: 'Underwriters spent 4 hours reading complex 100-page property inspection reports and policy riders to calculate risk scores for commercial applicants.',
      solution: 'NodalBot engineered an enterprise RAG assistant with custom MCP tools connecting directly to insurance rate calculators and internal policy databases.',
      outcomes: [
        'Underwriting policy review time cut by 65% with instantaneous clause comparisons',
        'Provided underwriters with exact page and clause citations for every extracted risk factor',
        'Protected proprietary policy guidelines through on-tenant Azure AI deployment'
      ]
    }
  },
  {
    id: 'service-rpa-automation',
    slug: 'rpa-intelligent-automation',
    serviceNumber: '05',
    title: 'RPA & Intelligent Automation',
    tagline: 'Eliminating repetitive manual toil through software robots, AI extraction, and workflow orchestration.',
    shortDescription: 'We automate high-volume business workflows using Microsoft Power Automate, UiPath, and Azure AI Document Intelligence, delivering rapid ROI and error-free execution.',
    fullOverview: 'Manual data entry, invoice processing, and repetitive copy-pasting across systems waste thousands of employee hours annually and introduce costly human errors. NodalBot Digital Solutions creates Intelligent Automation systems that combine low-code robotic bots, attended desktop automation, and cognitive AI. Our automation architectures connect modern cloud platforms with legacy on-premises applications seamlessly.',
    businessChallenges: [
      'Back-office teams overwhelmed by repetitive, manual data entry across disconnected systems',
      'High operational error rates in invoice reconciliations, customer onboarding, and claims processing',
      'Legacy software without modern REST APIs, forcing employees to manually type data between screens',
      'Slow business process turnaround times affecting customer satisfaction and SLA compliance'
    ],
    proposedSolution: 'Intelligent Process Automation combining Power Automate Cloud flows for API triggers, Power Automate Desktop / UiPath for legacy UI automation, and Azure AI Document Intelligence for OCR extraction.',
    solutionArchitectureOverview: 'Event-driven triggers (Email/Webhook) -> AI Document Intelligence parsing -> Queue management -> Unattended Desktop Bots -> Enterprise ERP entry -> Audit notification.',
    keyCapabilities: [
      {
        title: 'Robotic Desktop & Web Automation',
        description: 'Deploy software robots that navigate complex legacy Windows applications, desktop screens, and web portals without modifying backend code.',
        deliverables: ['Unattended Robotic Process Bots', 'Robust UI Selector Hierarchies', 'Exception Recovery Subroutines', 'Bot Credential Vault Setup']
      },
      {
        title: 'Intelligent Document Processing (IDP)',
        description: 'Extract tables, line-items, invoices, and purchase orders from scanned PDFs and images with AI confidence thresholds.',
        deliverables: ['Custom Document Extraction Models', 'Automated Data Validation Rules', 'Human-in-the-Loop Review Portal', 'Audit Trail Logging']
      },
      {
        title: 'Enterprise Workflow Orchestration',
        description: 'End-to-end multi-tier approval flows, automated status notifications, and cross-application syncs across Microsoft 365, Salesforce, and ERPs.',
        deliverables: ['Power Automate Cloud Flows', 'SharePoint / Teams Integration', 'Dynamic Multi-Approver Sequences', 'Real-Time Bot Run Monitoring']
      }
    ],
    businessValueMetrics: [
      { metric: 'Process Speed', impact: '85% faster transaction execution compared to manual data entry' },
      { metric: 'Error Rate', impact: 'Reduced human data-entry errors to virtually zero in invoice entry' },
      { metric: 'Direct ROI', impact: 'Full automation investment recouped within 4 to 6 months of deployment' }
    ],
    technologies: ['Microsoft Power Automate Cloud', 'Microsoft Power Automate Desktop', 'UiPath Studio', 'UiPath Orchestrator', 'Azure AI Document Intelligence', 'Excel Automation', 'REST APIs'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'Process Discovery & PDD', summary: 'Shadow process owners to document standard operating procedures and author the Process Definition Document (PDD).' },
      { stage: 'Stage 2', name: 'Solution Design & Prototyping', summary: 'Author the Solution Design Document (SDD), establish exception paths, and build proof-of-concept bots.' },
      { stage: 'Stage 3', name: 'Bot Development & UAT', summary: 'Develop attended and unattended bots with robust selectors, test in staging with historical edge cases.' },
      { stage: 'Stage 4', name: 'Production Deployment & Hypercare', summary: 'Deploy bots to enterprise queues, configure automated run logs, and provide 30-day hypercare support.' }
    ],
    applicableIndustries: ['BFSI', 'Insurance', 'Healthcare', 'Logistics', 'Retail', 'Manufacturing'],
    sampleCaseStudy: {
      clientType: 'National Logistics & Freight Forwarder (Conceptual Architecture)',
      challenge: 'Staff manually processed 1,200 freight delivery bills of lading weekly by downloading emails, re-typing container numbers, and updating an old green-screen mainframe.',
      solution: 'NodalBot deployed an intelligent RPA solution that extracts bill of lading metadata via AI OCR and automatically keys entries into the mainframe software.',
      outcomes: [
        'Automated 92% of all incoming bills of lading with zero human intervention',
        'Reduced customer billing cycle from 4 business days to under 2 hours',
        'Freed 5 full-time operations employees to focus on customer relationship management'
      ]
    }
  },
  {
    id: 'service-cloud-architecture',
    slug: 'cloud-architecture-modernization',
    serviceNumber: '06',
    title: 'Cloud Architecture & Enterprise Migration',
    tagline: 'Designing resilient multi-cloud foundations, microservices, and secure infrastructure.',
    shortDescription: 'We architect, migrate, and optimize enterprise workloads on Microsoft Azure and AWS, ensuring maximum security, automated DevOps, and cost efficiency.',
    fullOverview: 'Migrating to the cloud is not just about moving virtual machines—it is about unlocking elasticity, global availability, and rapid software delivery. NodalBot Digital Solutions assists organizations in modernizing their cloud architectures. From multi-region network topologies and zero-trust security postures to infrastructure-as-code and container orchestration, we engineer cloud foundations that scale effortlessly.',
    businessChallenges: [
      'High on-premises datacenter hardware refresh costs and limited disaster recovery capabilities',
      'Uncontrolled cloud billing spikes caused by overprovisioned virtual machines and unmanaged resources',
      'Security risks stemming from open network ports, loose IAM credentials, and lack of encryption',
      'Slow manual infrastructure provisioning delaying new software project launches'
    ],
    proposedSolution: 'A modern cloud architecture leveraging infrastructure-as-code (Terraform), secure virtual network segmentation, container orchestration (Docker / Kubernetes), and automated CI/CD pipelines.',
    solutionArchitectureOverview: 'Hub-and-spoke virtual network topology with Azure Firewall / AWS Transit Gateway, private endpoints for databases, automated Terraform provisioning, and centralized CloudWatch / Azure Monitor logging.',
    keyCapabilities: [
      {
        title: 'Cloud Migration & Modernization Blueprint',
        description: 'End-to-end cloud adoption plans covering lift-and-shift, re-platforming, and re-architecting legacy workloads.',
        deliverables: ['Cloud Readiness Assessment', 'Total Cost of Ownership (TCO) Analysis', 'Network Topology Blueprint', 'Phased Cutover Roadmap']
      },
      {
        title: 'Infrastructure as Code (IaC) & DevOps CI/CD',
        description: 'Automate entire multi-environment cloud setups using Terraform and deploy code via GitHub Actions with zero manual intervention.',
        deliverables: ['Reusable Terraform Modules', 'Automated GitHub Actions Workflows', 'Multi-Stage Environment Isolation', 'Automated Security Scanners']
      },
      {
        title: 'Cloud FinOps & Cost Optimization',
        description: 'Deep audit of existing cloud spend, eliminating zombie assets, rightsizing compute, and leveraging reserved instances.',
        deliverables: ['Cloud Spend Audit Report', 'Automated Resource Shutdown Scripts', 'Reserved Instance Purchasing Plan', 'Cost Allocation Tagging Strategy']
      }
    ],
    businessValueMetrics: [
      { metric: 'Cloud Infrastructure Cost', impact: 'Average 28% monthly cost reduction achieved via rightsizing and FinOps' },
      { metric: 'Deployment Frequency', impact: 'From monthly manual releases to multiple automated daily cloud deployments' },
      { metric: 'Disaster Recovery RTO', impact: 'Recovery Time Objective reduced to < 15 minutes through automated IaC recovery' }
    ],
    technologies: ['Microsoft Azure', 'Amazon Web Services (AWS)', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Linux', 'Nginx'],
    deliveryApproach: [
      { stage: 'Stage 1', name: 'Workload & Network Assessment', summary: 'Audit existing server inventory, dependencies, throughput needs, and compliance parameters.' },
      { stage: 'Stage 2', name: 'Landing Zone Architecture', summary: 'Establish secure Hub-and-Spoke networks, IAM policies, encryption keys, and Terraform templates.' },
      { stage: 'Stage 3', name: 'Pilot Migration & Testing', summary: 'Migrate initial non-critical workload, test disaster recovery cutover, and benchmark performance.' },
      { stage: 'Stage 4', name: 'Production Cutover & FinOps', summary: 'Execute production migration during maintenance window, verify data integrity, and activate cost monitoring.' }
    ],
    applicableIndustries: ['BFSI', 'Healthcare', 'Retail', 'Logistics', 'Education', 'Manufacturing'],
    sampleCaseStudy: {
      clientType: 'Financial Technology SaaS Startup (Conceptual Architecture)',
      challenge: 'Client experienced frequent server timeouts during market opening hours and was paying $18,000/month on unmanaged AWS EC2 virtual machines.',
      solution: 'NodalBot re-architected the stack into containerized Docker services running on auto-scaling clusters with Terraform automation.',
      outcomes: [
        'Automated scaling from 2 to 20 containers during market opening spikes with zero latency delay',
        'Reduced monthly cloud bill by 34% by replacing overprovisioned VMs with auto-scaling compute',
        'Standardized infrastructure deployments across Development, Staging, and Production'
      ]
    }
  }
];

// The 8 Industry Solutions
export const INDUSTRY_SOLUTIONS_DATA: IndustrySolution[] = [
  {
    id: 'ind-healthcare',
    slug: 'healthcare',
    industryName: 'Healthcare & Life Sciences',
    tagline: 'Secure medical data platforms, patient triage AI, and clinical workflow automation.',
    description: 'Healthcare organizations face strict regulatory compliance (HIPAA), siloed electronic health records (EHR), and mounting administrative burdens. NodalBot delivers secure data pipelines and cognitive AI solutions that protect patient privacy while improving clinical decision support.',
    dataEngineeringUseCases: [
      'Ingesting FHIR and HL7 medical data feeds into compliant cloud lakehouses',
      'Unifying diagnostic lab results, billing records, and patient histories into clean analytical marts',
      'Automated de-identification and masking of Protected Health Information (PHI)'
    ],
    aiAndGenAIUseCases: [
      'RAG-based clinical guidelines assistant for medical practitioners',
      'Automated medical transcription and clinical notes summarization',
      'Computer vision assistance for preliminary radiology and pathology scan triage'
    ],
    biAndAnalyticsUseCases: [
      'Real-time emergency department bed occupancy and wait-time dashboards',
      'Surgical theater utilization and doctor scheduling optimization',
      'Patient readmission risk scoring and pharmacy inventory forecasting'
    ],
    automationUseCases: [
      'Automated medical insurance prior-authorization request filing',
      'Patient appointment booking and automated SMS/WhatsApp reminders',
      'Claims verification and billing dispute resolution bots'
    ],
    keyOutcomes: ['35% faster patient admission processing', 'Zero PHI compliance leaks', 'Real-time hospital bed allocation visibility']
  },
  {
    id: 'ind-bfsi',
    slug: 'banking-financial-services',
    industryName: 'Banking & Financial Services (BFSI)',
    tagline: 'Algorithmic fraud detection, regulatory compliance reporting, and automated loan processing.',
    description: 'Financial institutions must balance rapid customer onboarding with strict anti-money laundering (AML), fraud detection, and regulatory reporting. NodalBot engineers low-latency data platforms and AI systems that ensure accuracy, auditability, and speed.',
    dataEngineeringUseCases: [
      'Real-time financial transaction ingestion handling thousands of transactions per second',
      'Modern Lakehouses unifying core banking legacy databases with modern mobile app events',
      'Automated regulatory audit trail generation with strict data lineage'
    ],
    aiAndGenAIUseCases: [
      'Machine learning anomaly detection algorithms for instant credit card fraud prevention',
      'Autonomous financial analyst agents synthesizing quarterly SEC filings and research',
      'Intelligent customer support copilots resolving account and transfer inquiries'
    ],
    biAndAnalyticsUseCases: [
      'Executive dashboards for capital adequacy, liquidity ratios, and credit risk exposure',
      'Branch performance and ATM cash depletion monitoring cockpits',
      'Wealth management portfolio performance tracking with scenario modeling'
    ],
    automationUseCases: [
      'End-to-end KYC document verification and government ID cross-matching',
      'Automated loan application processing and credit score retrieval',
      'Trade reconciliation and multi-currency ledger balance verification'
    ],
    keyOutcomes: ['99.99% transaction reporting reliability', 'Sub-second fraudulent pattern flagging', '4x faster loan eligibility screening']
  },
  {
    id: 'ind-insurance',
    slug: 'insurance',
    industryName: 'Insurance',
    tagline: 'Intelligent claims document processing, actuarial analytics, and automated underwriting.',
    description: 'From policy administration to complex multi-party claims adjudication, insurance providers manage vast quantities of paper forms and unstructured reports. NodalBot streamlines the entire policyholder lifecycle with intelligent automation and predictive risk models.',
    dataEngineeringUseCases: [
      'Consolidating legacy policy management systems and telematics vehicle sensors',
      'Building scalable analytical warehouses for actuarial loss ratio modeling',
      'Automated ingestion of public meteorological and property geospatial datasets'
    ],
    aiAndGenAIUseCases: [
      'RAG assistants analyzing complex 80-page commercial property inspection reports',
      'Computer vision models evaluating vehicle accident damage from uploaded photos',
      'Policyholder contract understanding assistants highlighting coverage limits'
    ],
    biAndAnalyticsUseCases: [
      'Claims severity, settlement turnaround times, and litigation tracking dashboards',
      'Underwriter loss-ratio monitoring by geographic region and product line',
      'Customer policy renewal and churn propensity prediction dashboards'
    ],
    automationUseCases: [
      'Automated first notice of loss (FNOL) intake from email, app, or web',
      'OCR extraction of repair estimates, hospital bills, and police incident reports',
      'Straight-through processing for standard low-value claims'
    ],
    keyOutcomes: ['60% reduction in claims turnaround time', 'High-accuracy OCR on handwritten forms', 'Improved loss ratio forecasting']
  },
  {
    id: 'ind-retail',
    slug: 'retail-ecommerce',
    industryName: 'Retail & E-Commerce',
    tagline: 'Omnichannel customer intelligence, inventory optimization, and dynamic pricing.',
    description: 'Modern retail requires bridging the gap between physical storefronts and digital e-commerce channels. NodalBot builds modern data lakes and predictive AI platforms that unify inventory, marketing spend, and customer lifetime value.',
    dataEngineeringUseCases: [
      'Real-time streaming ingestion of clickstream telemetry and point-of-sale (POS) receipts',
      'Unifying multiple regional storefronts into a centralized Delta Lake',
      'Automated daily catalog synchronization across third-party marketplaces (Amazon, Flipkart)'
    ],
    aiAndGenAIUseCases: [
      'Personalized product recommendation algorithms based on collaborative filtering',
      'Generative AI catalog product description and marketing copy generation',
      'Visual search enabling shoppers to find products using smartphone photos'
    ],
    biAndAnalyticsUseCases: [
      'Omnichannel gross merchandise value (GMV), margin, and return rate cockpits',
      'Cohort retention and customer lifetime value (LTV) analytics in Power BI',
      'Store-level footfall vs conversion rate comparative analytics'
    ],
    automationUseCases: [
      'Automated supplier purchase order generation when inventory drops below safety thresholds',
      'Competitor price scraping and automated dynamic repricing rules',
      'Returns processing and instant refund approval workflows'
    ],
    keyOutcomes: ['Unified single customer view across channels', '20% reduction in inventory stockouts', 'Real-time sales margin visibility']
  },
  {
    id: 'ind-manufacturing',
    slug: 'manufacturing',
    industryName: 'Manufacturing & Industrial',
    tagline: 'IoT sensor telemetry, predictive maintenance, and supply chain visibility.',
    description: 'Manufacturing plants require uninterrupted equipment availability, strict quality control, and synchronized supply chains. NodalBot integrates IoT sensor data with enterprise ERPs to predict machine failures before costly downtime occurs.',
    dataEngineeringUseCases: [
      'High-frequency IoT sensor telemetry ingestion from factory floor PLCs',
      'Time-series data storage in optimized Parquet and Delta Lake formats',
      'Data integration between Manufacturing Execution Systems (MES) and SAP ERP'
    ],
    aiAndGenAIUseCases: [
      'Predictive machine maintenance algorithms forecasting vibration and thermal anomalies',
      'Computer vision surface defect inspection on automated assembly lines',
      'AI equipment manual assistant helping field technicians troubleshoot error codes'
    ],
    biAndAnalyticsUseCases: [
      'Overall Equipment Effectiveness (OEE), availability, and performance dashboards',
      'Scrap rate, rework cost, and batch quality variance tracking',
      'Factory energy consumption and carbon emission telemetry'
    ],
    automationUseCases: [
      'Automated maintenance work order ticket creation in ERP upon sensor threshold breach',
      'Vendor raw material delivery confirmation and barcode scanning automation',
      'Shift handover reporting and automated compliance logging'
    ],
    keyOutcomes: ['Up to 30% reduction in unplanned equipment downtime', 'Automated OEE calculation', 'Real-time visual defect detection']
  },
  {
    id: 'ind-logistics',
    slug: 'logistics-supply-chain',
    industryName: 'Logistics & Supply Chain',
    tagline: 'Fleet telemetry, warehouse robotics automation, and dynamic route optimization.',
    description: 'Global supply chains demand end-to-end milestone visibility, freight cost management, and rapid documentation turnaround. NodalBot builds real-time logistics control towers and automated dispatch systems.',
    dataEngineeringUseCases: [
      'Real-time GPS vehicle location and temperature sensor ingestion',
      'Unifying carrier EDI feeds, shipping manifests, and customs declaration databases',
      'Data lakehouse storage supporting millions of package tracking events daily'
    ],
    aiAndGenAIUseCases: [
      'Dynamic route optimization algorithms considering traffic, weather, and toll costs',
      'Predictive estimated time of arrival (ETA) calculation with machine learning',
      'AI assistant summarizing customs regulations and international tariff schedules'
    ],
    biAndAnalyticsUseCases: [
      'On-Time-In-Full (OTIF) customer delivery performance dashboards',
      'Fleet fuel efficiency, idle time, and driver safety analytics',
      'Warehouse bin utilization and pick-pack-ship throughput cockpits'
    ],
    automationUseCases: [
      'Automated Bill of Lading (BoL) and commercial invoice extraction using AI OCR',
      'Automated customs documentation pre-clearing with freight forwarders',
      'Driver proof-of-delivery reconciliation and automated client billing'
    ],
    keyOutcomes: ['Under 2-hour billing turnaround on proof-of-delivery', 'Real-time shipment milestone visibility', 'Reduced route fuel costs']
  },
  {
    id: 'ind-education',
    slug: 'education-edtech',
    industryName: 'Education & EdTech',
    tagline: 'Student engagement analytics, adaptive learning algorithms, and institutional workflow automation.',
    description: 'Universities and digital education platforms must improve graduation outcomes, personalize student learning, and streamline admissions. NodalBot engineers scalable learning platforms and institutional analytics.',
    dataEngineeringUseCases: [
      'Centralizing student information systems (SIS), LMS clickstreams, and assessment databases',
      'Building longitudinal student progress data warehouses for accreditation reporting',
      'Secure data partitioning for multi-campus university networks'
    ],
    aiAndGenAIUseCases: [
      'Personalized AI tutoring assistants answering student code and math questions 24/7',
      'Automated programming assignment grading and structural feedback',
      'Predictive student dropout risk detection identifying students needing academic intervention'
    ],
    biAndAnalyticsUseCases: [
      'Institutional enrollment, retention, and graduation rate executive dashboards',
      'Course completion velocity and quiz score distribution heatmaps',
      'Faculty workload, research grant allocation, and alumni donation tracking'
    ],
    automationUseCases: [
      'Automated student application triage and transcript OCR verification',
      'Automated certificate generation, verification, and LinkedIn badge issuance',
      'Fee payment reconciliation and automated SMS reminder flows'
    ],
    keyOutcomes: ['24/7 personalized student AI mentoring', 'Instant automated assignment feedback', 'Comprehensive accreditation audit readiness']
  },
  {
    id: 'ind-travel',
    slug: 'travel-hospitality',
    industryName: 'Travel & Hospitality',
    tagline: 'Dynamic room pricing, guest preference analytics, and automated reservation management.',
    description: 'Hotels, airlines, and tour operators operate on perishable inventory with fluctuating demand. NodalBot designs revenue management data platforms and automated guest experience workflows.',
    dataEngineeringUseCases: [
      'Real-time flight and hotel booking reservation stream ingestion',
      'Centralizing third-party OTA (Booking.com, Expedia) feeds with direct website bookings',
      'Historical occupancy and competitor rate trend data warehouse'
    ],
    aiAndGenAIUseCases: [
      'Dynamic pricing algorithms optimizing room rates based on local events and demand',
      'Multilingual guest concierge chatbot handling room service and itinerary questions',
      'Customer review sentiment analysis highlighting maintenance or service issues'
    ],
    biAndAnalyticsUseCases: [
      'RevPAR (Revenue Per Available Room), ADR, and occupancy rate executive cockpits',
      'Food & beverage margin analysis and waste reduction analytics',
      'Guest loyalty tier progression and spend distribution reports'
    ],
    automationUseCases: [
      'Automated mobile check-in verification and digital room key distribution',
      'OTA commission reconciliation against bank deposit statements',
      'Automated post-stay feedback collection and positive review routing'
    ],
    keyOutcomes: ['Increased RevPAR via dynamic pricing', 'Instant multilingual guest service', 'Automated reservation synchronization']
  }
];

// The 6 Business Engagement Models
export const BUSINESS_ENGAGEMENT_MODELS: EngagementModel[] = [
  {
    id: 'model-fixed-price',
    title: 'Fixed-Price Projects',
    tagline: 'Clearly scoped technology deliverables with agreed milestones and guaranteed delivery budgets.',
    bestFor: 'Projects with well-defined requirements, proof-of-concept (PoC) builds, standalone dashboard implementations, or custom tool migrations.',
    characteristics: [
      'Comprehensive initial discovery and architectural specification phase',
      'Defined milestone deliverables with formal acceptance criteria',
      'No surprise budget overruns—NodalBot assumes execution scope responsibility',
      'Dedicated project manager and milestone status reporting'
    ],
    governance: 'Weekly milestone reviews, formal sign-off demos, and guaranteed post-launch warranty.',
    pricingStructure: 'Milestone-based payment schedule tied to concrete verified deliverables.'
  },
  {
    id: 'model-time-and-material',
    title: 'Time & Material (T&M)',
    tagline: 'Flexible agile engineering for evolving scopes, continuous platform enhancement, and complex R&D.',
    bestFor: 'Agile software development, ongoing data platform maintenance, Generative AI experimentation, and projects where scope evolves iteratively.',
    characteristics: [
      'Maximum flexibility to pivot features and priorities sprint by sprint',
      'Transparent hourly or daily timesheets for deployed engineers',
      'Direct communication with senior full-stack, data, and AI engineers',
      'Continuous integration and bi-weekly release cycles'
    ],
    governance: 'Sprint planning every 2 weeks, daily standups, and shared task tracking boards (Jira/Linear).',
    pricingStructure: 'Billed monthly based on approved engineer hours and agreed rate cards.'
  },
  {
    id: 'model-dedicated-teams',
    title: 'Dedicated Development Teams',
    tagline: 'A seamless, full-time extension of your internal engineering leadership.',
    bestFor: 'Mid-to-large enterprises and growing tech companies looking to rapidly scale their software, data, or AI development capacity without local hiring friction.',
    characteristics: [
      'Hand-picked senior engineers, data architects, and QA specialists assigned exclusively to your company',
      'Engineers align with your timezone, communication tools (Slack/Teams), and internal repository',
      'High retention and long-term institutional knowledge retention',
      'Option to scale team size up or down with 30 days notice'
    ],
    governance: 'Managed directly by your engineering leads or with a co-managed NodalBot delivery director.',
    pricingStructure: 'Fixed monthly fee per full-time engineer (FTE).'
  },
  {
    id: 'model-tech-consulting',
    title: 'Technology Consulting & Advisory',
    tagline: 'Strategic architectural guidance, cloud migration audits, and AI readiness blueprints.',
    bestFor: 'CTOs, CIOs, and business leaders seeking expert external guidance on enterprise architecture, cloud FinOps, vendor tool selection, or Generative AI roadmaps.',
    characteristics: [
      'High-impact senior advisory by principal architects with 10+ years experience',
      'Vendor-agnostic evaluations comparing Azure vs AWS vs Databricks vs Snowflake',
      'Thorough audits of existing software architecture, security, and technical debt',
      'Actionable executive roadmap presentation with executive summary deliverables'
    ],
    governance: 'Structured workshops, stakeholder interviews, and executive readout presentation.',
    pricingStructure: 'Packaged advisory fee or retainer model.'
  },
  {
    id: 'model-poc-accelerator',
    title: 'Proof of Concept (PoC) Accelerator',
    tagline: 'Validate high-risk technology ideas and Generative AI feasibility in 2 to 4 weeks.',
    bestFor: 'Organizations wanting to demonstrate internal ROI for a custom AI agent, automated pipeline, or dashboard before committing to enterprise-scale deployment.',
    characteristics: [
      'Rapid prototype development using real customer sample data in a secure sandbox',
      'Clear evaluation benchmarks assessing accuracy, speed, and business impact',
      'Executive presentation demonstrating the functional system to internal decision-makers',
      'Reusable code and architecture blueprint ready for phase-2 production scaling'
    ],
    governance: 'Accelerated 2-to-4 week turnaround with weekly interactive demo builds.',
    pricingStructure: 'Fixed accelerator package fee.'
  },
  {
    id: 'model-support-maintenance',
    title: 'Application Support & Maintenance',
    tagline: '24/7 reliability, proactive monitoring, patch management, and SLA-backed bug fixes.',
    bestFor: 'Businesses needing peace of mind that their mission-critical web applications, data pipelines, and automation bots continue running without disruption.',
    characteristics: [
      'Guaranteed Service Level Agreement (SLA) response and resolution times',
      'Proactive telemetry monitoring, certificate renewal, and database vacuuming',
      'Regular security vulnerability patches and dependency updates',
      'Monthly system health and uptime performance reports'
    ],
    governance: 'Dedicated ticketing system with severity-based escalation matrices (Severity 1 to 4).',
    pricingStructure: 'Tiered monthly maintenance retainer tailored to workload criticality.'
  }
];

// Corporate Training Programs (B2B)
export const CORPORATE_TRAINING_PROGRAMS: CorporateProgram[] = [
  {
    id: 'corp-de-bootcamp',
    title: 'Enterprise Data Engineering Bootcamp',
    targetAudience: 'Database Developers, Legacy ETL Teams, Software Engineers',
    focusAreas: ['Azure Data Factory', 'Azure Databricks', 'Apache Spark / PySpark', 'Delta Lake', 'Snowflake', 'Medallion Architecture'],
    durationOptions: '3 Weeks Intensive (Full-Time) or 8 Weeks (Weekend/Evening)',
    outcome: 'Equip internal development teams to build, optimize, and maintain modern cloud lakehouse architectures.'
  },
  {
    id: 'corp-genai-enterprise',
    title: 'Enterprise Generative AI & Autonomous Agents',
    targetAudience: 'Product Engineers, Software Architects, Technology Leaders',
    focusAreas: ['Production RAG Architectures', 'Model Context Protocol (MCP)', 'LangGraph Multi-Agent Workflows', 'Azure AI Foundry', 'LLM Guardrails'],
    durationOptions: '2 to 4 Weeks Custom Corporate Track',
    outcome: 'Train engineering groups to integrate secure, context-aware foundation models directly into enterprise software.'
  },
  {
    id: 'corp-bi-powerbi',
    title: 'Business Intelligence & Power BI Executive Mastery',
    targetAudience: 'Business Analysts, Financial Reporting Teams, Department Leads',
    focusAreas: ['Dimensional Modeling', 'Complex DAX & Time Intelligence', 'Power Query (M)', 'Microsoft Fabric Analytics', 'Row-Level Security (RLS)'],
    durationOptions: '1 Week Intensive or 4 Weeks Flexible Track',
    outcome: 'Transform spreadsheet-reliant departments into self-service analytics powerhouses with automated Power BI dashboards.'
  },
  {
    id: 'corp-rpa-automation',
    title: 'Intelligent Automation & RPA Accelerator',
    targetAudience: 'Operations Staff, Business Process Analysts, IT Support Teams',
    focusAreas: ['Power Automate Cloud', 'Power Automate Desktop', 'UiPath Studio', 'Azure AI Document Intelligence', 'Bot Governance'],
    durationOptions: '2 Weeks Hands-On Workshop',
    outcome: 'Empower operational teams to automate repetitive back-office data entry and invoice extraction tasks.'
  },
  {
    id: 'corp-cloud-devops',
    title: 'Cloud-Native Architecture & DevOps Practices',
    targetAudience: 'Backend Developers, System Administrators, QA Engineers',
    focusAreas: ['Microsoft Azure', 'AWS', 'Docker Containers', 'Kubernetes Basics', 'GitHub Actions CI/CD', 'Infrastructure as Code (Terraform)'],
    durationOptions: '3 Weeks Customized Workshop',
    outcome: 'Accelerate software release velocity and establish reliable, containerized cloud infrastructure.'
  },
  {
    id: 'corp-ds-mlops',
    title: 'Applied Data Science & Production MLOps',
    targetAudience: 'Statistical Analysts, Quantitative Modelers, Software Engineers',
    focusAreas: ['Python Machine Learning', 'PyTorch Neural Networks', 'MLflow Tracking', 'FastAPI Inference Serving', 'Model Drift Detection'],
    durationOptions: '4 to 6 Weeks Comprehensive Track',
    outcome: 'Bridge the divide between experimental Jupyter notebooks and robust, containerized model microservices.'
  },
  {
    id: 'corp-ai-awareness',
    title: 'AI Awareness & Executive Decision-Making',
    targetAudience: 'C-Suite, Vice Presidents, Directors, Department Heads',
    focusAreas: ['GenAI Capabilities & Limitations', 'ROI Evaluation Frameworks', 'Data Governance & Ethical AI', 'Building an AI Roadmap'],
    durationOptions: '1 to 2 Day Intensive Executive Masterclass',
    outcome: 'Enable non-technical business leaders to evaluate AI opportunities, mitigate risks, and author strategic innovation plans.'
  },
  {
    id: 'corp-custom-assessments',
    title: 'Customized Technical Skills Assessment & Benchmarking',
    targetAudience: 'HR Leaders, L&D Directors, Talent Acquisition Teams',
    focusAreas: ['Coding Challenge Design', 'Data Engineering Assessments', 'Role-Based Skill Matrices', 'Pre/Post-Training Competency Scoring'],
    durationOptions: 'Ongoing Service / Custom Engagement',
    outcome: 'Measure baseline skill proficiencies, identify technical gaps, and verify concrete post-training capability growth.'
  }
];

export const CORPORATE_DELIVERY_MODELS = [
  { title: 'Instructor-Led Live Virtual', description: 'Interactive, real-time online training with live code walkthroughs, sandbox labs, and instant Q&A sessions.' },
  { title: 'Onsite Corporate Training', description: 'Intensive face-to-face instruction conducted at your company premises or headquarters across India and global offices.' },
  { title: 'Hybrid Delivery', description: 'Combines onsite kickoff masterclasses with guided virtual project mentoring and code reviews.' },
  { title: 'Weekend Bootcamps', description: 'Structured weekend-only training designed for busy working engineering teams who cannot interrupt weekday project delivery.' },
  { title: 'Intensive 2-3 Day Hackathons', description: 'High-energy, focused technology workshops culminating in a working prototype capstone.' },
  { title: 'Customized Multi-Week Upskilling', description: 'Tailored 4-to-12 week transformation curricula aligned directly to your upcoming client projects and tech stack.' }
];

// College and University Partnerships
export const COLLEGE_PARTNERSHIP_PROGRAMS: CollegeProgram[] = [
  {
    id: 'col-fdp',
    title: 'Faculty Development Programs (FDP)',
    targetYear: 'Faculty & Professors in Computer Science, IT, AI, and Data Science',
    format: '3-to-5 Day Intensive Hands-On Workshop',
    topicsCovered: ['Modern Data Engineering (Databricks, Spark)', 'Generative AI & LLM Architecture', 'Model Context Protocol', 'Industrial MLOps'],
    institutionalBenefits: ['Align academic teaching with live IT industry standards', 'Faculty research and publication guidance', 'Hands-on industry tools access']
  },
  {
    id: 'col-student-workshops',
    title: 'Student Technical Workshops & Bootcamps',
    targetYear: '2nd, 3rd, and Final Year Engineering / Arts & Science Students',
    format: '2-to-3 Day Immersive Weekend Sessions',
    topicsCovered: ['Data Analytics with Power BI', 'Python for Data Science', 'Building Your First AI Agent', 'Cloud Computing on Azure'],
    institutionalBenefits: ['High student participation and enthusiasm', 'Immediate tangible portfolio projects', 'Certificate of industrial training']
  },
  {
    id: 'col-final-year-projects',
    title: 'Final-Year Project Guidance & Mentorship',
    targetYear: 'Final Year B.E. / B.Tech / MCA / M.Sc Students',
    format: 'Semester-Long Guided Mentorship',
    topicsCovered: ['End-to-End Problem Formulation', 'Architecture Design & GitHub Code Review', 'Cloud Deployment & Swagger API', 'Project Report & Viva Preparation'],
    institutionalBenefits: ['Eliminates generic copied projects', 'Produces genuine, deployable software capstones', 'Boosts campus placement statistics']
  },
  {
    id: 'col-internship-training',
    title: 'Internship-Oriented Training & Industry Experience',
    targetYear: 'Pre-Final and Final Year Students',
    format: '4-to-8 Week Hybrid Internship Track',
    topicsCovered: ['Production Git Workflows', 'Live Client Problem Statements', 'Code Reviews by Senior Engineers', 'Professional Communication & Standups'],
    institutionalBenefits: ['Direct internship experience letters', 'Demonstrated corporate readiness', 'Stronger resume differentiation for campus drives']
  },
  {
    id: 'col-placement-readiness',
    title: 'Placement Readiness & Technical Interview Prep',
    targetYear: 'Students preparing for campus recruitment drives',
    format: '4-Week Intensive Masterclass',
    topicsCovered: ['Advanced SQL Technical Rounds', 'System Design Basics', 'Live Coding Assessment Practice', 'Mock Technical Interviews with Feedback'],
    institutionalBenefits: ['Significantly higher placement conversion rates in Tier-1 IT services and product firms']
  },
  {
    id: 'col-industry-expert-sessions',
    title: 'Industry Expert Guest Lectures & Technology Seminars',
    targetYear: 'All Department Students & Faculty',
    format: 'Half-Day Seminar / Guest Lecture',
    topicsCovered: ['Career Trends in Data & AI', 'The Future of Agentic AI and Automation', 'Navigating the Global IT Job Market in 2026'],
    institutionalBenefits: ['Direct exposure to working industry leaders', 'Inspires students on modern tech career pathways']
  }
];

// Knowledge Hub Resources / Articles
export const RESOURCE_ARTICLES_DATA: ResourceArticle[] = [
  {
    id: 'art-de-lakehouse-architecture',
    slug: 'medallion-lakehouse-architecture-databricks-delta-lake',
    title: 'Architecting an Enterprise Medallion Lakehouse on Databricks & Delta Lake',
    excerpt: 'Explore how to design Bronze, Silver, and Gold delta layers that guarantee schema evolution, ACID transactions, and sub-second analytical querying.',
    category: 'Data Engineering',
    readTime: '8 min read',
    publishedDate: 'Nov 02, 2026',
    author: {
      name: 'Thilak Ragav M',
      role: 'Principal Data Architect',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Databricks', 'Delta Lake', 'PySpark', 'Lakehouse', 'Azure'],
    contentMarkdown: `
# Architecting an Enterprise Medallion Lakehouse on Databricks & Delta Lake

Modern organizations cannot afford the complexity and synchronization latency of maintaining separate, disconnected data lakes and analytical data warehouses. The **Medallion Lakehouse Architecture** pioneered by Delta Lake provides a unified storage layer where both streaming ingestion and BI aggregations thrive.

### The Three Tiers of Medallion Architecture

1. **Bronze Tier (Raw Ingestion):**
   - Retains the raw, immutable history of incoming events.
   - Appended with minimal transformation, preserving source schema.
   - Enables complete pipeline replay and auditing if downstream business logic changes.

2. **Silver Tier (Filtered, Cleaned, Augmented):**
   - Deduplicates incoming rows based on natural business keys.
   - Enforces schema constraints and cleans invalid null values.
   - Structures data into standardized entity tables ready for cross-domain joins.

3. **Gold Tier (Business-Level Aggregates):**
   - Star Schema dimensional models optimized for reporting tools like Power BI and Tableau.
   - Pre-computed KPIs, daily rollups, and customer lifetime metrics.
   - Maximizes query performance with Liquid Clustering and Z-Ordering.

### Why Delta Lake is Essential
Unlike plain parquet files, Delta Lake introduces a transaction log (**_delta_log**) that grants full ACID transaction guarantees. This eliminates corrupt partial reads when concurrent pipelines append data while executive dashboards query the same table.
    `
  },
  {
    id: 'art-ai-mcp-protocol',
    slug: 'understanding-model-context-protocol-mcp-for-ai-engineers',
    title: 'Model Context Protocol (MCP): The New Standard for Connecting LLMs to Enterprise Systems',
    excerpt: 'An in-depth technical exploration of Anthropic’s open Model Context Protocol (MCP) and how it replaces fragmented plugin architectures with standardized tool calling.',
    category: 'Generative AI',
    readTime: '10 min read',
    publishedDate: 'Oct 28, 2026',
    author: {
      name: 'NodalBot AI Research Team',
      role: 'AI Solutions Engineers',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['MCP', 'Model Context Protocol', 'Generative AI', 'AI Agents', 'Claude'],
    contentMarkdown: `
# Model Context Protocol (MCP): The New Standard for Connecting LLMs to Enterprise Systems

For years, AI developers faced an $N \\times M$ integration problem: connecting every new LLM model to every internal database, Git repository, API, and file system required custom wrappers and bespoke function-calling schemas.

The **Model Context Protocol (MCP)** solves this by establishing a universal, open standard for how AI applications expose context, tools, and prompts to models.

### Key Building Blocks of MCP

- **Resources:** Standardized data sources that provide context to the model (e.g., reading a local file, inspecting database schemas).
- **Tools:** Actionable endpoints that the model can call to execute code, execute SQL queries, or trigger webhooks with human-in-the-loop controls.
- **Prompts:** Pre-engineered templates that guide the AI agent on how to interact with the connected system.

By decoupling the model from the integration logic, an enterprise can author an **MCP Database Server** once in Python or TypeScript, and instantly make it accessible to Claude, ChatGPT, Cursor, and custom internal agent swarms.
    `
  },
  {
    id: 'art-bi-dax-optimization',
    slug: 'optimizing-dax-measures-power-bi-star-schemas',
    title: 'Mastering DAX Evaluation Contexts & Star Schema Performance Optimization',
    excerpt: 'Learn why star schemas outperform flat wide tables in Power BI, how the CALCULATE function transitions context, and tips to eliminate slow visual rendering.',
    category: 'Business Intelligence',
    readTime: '7 min read',
    publishedDate: 'Oct 19, 2026',
    author: {
      name: 'NodalBot BI Practice',
      role: 'Enterprise BI Consultants',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Power BI', 'DAX', 'Star Schema', 'Data Modeling', 'Business Intelligence'],
    contentMarkdown: `
# Mastering DAX Evaluation Contexts & Star Schema Performance Optimization

Many Power BI reports suffer from slow visual refresh times not because the dataset is too large, but because of poor relational modeling and unoptimized DAX measures.

### The Golden Rule: Star Schemas Always Win
In relational databases, flat tables may seem simpler, but the Power BI **VertiPaq** in-memory columnar engine is engineered specifically for Star Schemas. 

- Keep your **Fact Tables** narrow: only numerical keys and measurable quantities (Revenue, Quantity, Cost).
- Keep descriptive attributes inside **Dimension Tables** (Customer Name, Geography, Product Category).
- This drastically maximizes VertiPaq column compression and enables lightning-fast dictionary lookups.

### Demystifying Filter Context vs Row Context
The most common source of calculation bugs in DAX is confusing **Row Context** (evaluating one row at a time in calculated columns or iterator functions like SUMX) with **Filter Context** (the active filters applied by slicers, report filters, and visual coordinates). 

Using the \`CALCULATE()\` function initiates **Context Transition**, turning row context into an equivalent filter context, which is the foundational secret behind powerful Time Intelligence calculations.
    `
  },
  {
    id: 'art-career-roadmap-2026',
    slug: 'how-to-become-a-data-engineer-in-2026-comprehensive-roadmap',
    title: 'How to Become an In-Demand Data Engineer in 2026: The Complete Roadmap',
    excerpt: 'A pragmatic, step-by-step career blueprint covering the exact tools, SQL patterns, distributed engines, and cloud platforms required to land top engineering roles.',
    category: 'Career Guidance',
    readTime: '9 min read',
    publishedDate: 'Oct 12, 2026',
    author: {
      name: 'NodalBot Academy Mentorship Team',
      role: 'Career Strategy Advisors',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    tags: ['Career Guide', 'Data Engineering', 'Azure', 'Databricks', 'Roadmap'],
    contentMarkdown: `
# How to Become an In-Demand Data Engineer in 2026: The Complete Roadmap

As companies accelerate their AI and analytics adoption, the demand for qualified Data Engineers continues to outpace available talent. While AI models generate headlines, they cannot function without reliable, governed data pipelines engineered underneath them.

### Step 1: SQL and Python Foundations (Month 1)
Do not skip the fundamentals. Master window functions (ROW_NUMBER, DENSE_RANK, LAG, LEAD), common table expressions (CTEs), and query optimization. In Python, focus on object-oriented programming, file parsing, and pandas.

### Step 2: Distributed Processing with Apache Spark (Month 2)
Modern data engineering operates at gigabyte-to-terabyte scale. Master Spark cluster mechanics, lazy evaluation, PySpark DataFrame APIs, and partition pruning.

### Step 3: Cloud Lakehouse Architecture (Month 3)
Specialize in a primary cloud ecosystem—Azure Data Factory and Azure Databricks represent the most common enterprise combination, followed by AWS (S3, Glue, EMR) and Snowflake.

### Step 4: Capstone Portfolio & Production CI/CD (Month 4)
Build and deploy a real-world end-to-end data pipeline on GitHub with automated testing, parameterization, and cost governance. Recruiters evaluate proof of capability over generic certificates.
    `
  }
];

// Open Career Openings
export const CAREER_OPENINGS_DATA: CareerJob[] = [
  {
    id: 'job-senior-de-trainer',
    title: 'Senior Data Engineering Technical Instructor',
    division: 'NodalBot Academy',
    location: 'Chennai, Tamil Nadu, India (Hybrid / Onsite)',
    type: 'Full-Time',
    experienceRequired: '4 – 8 Years Enterprise Experience',
    summary: 'Lead high-impact training cohorts in Modern Data Engineering, Azure Data Factory, Databricks, Apache Spark, and Snowflake for working professionals and corporate enterprise clients.',
    responsibilities: [
      'Deliver engaging, hands-on live lectures and code-along architectural workshops',
      'Design industrial capstone projects reflecting real enterprise data challenges',
      'Provide 1:1 code reviews and technical mentoring to career transitioners',
      'Continuously update curriculum based on emerging cloud features (Fabric, Delta Lake, Snowflake)'
    ],
    requirements: [
      'Strong hands-on production experience with SQL, Python, PySpark, and Azure/AWS data platforms',
      'Passion for teaching, mentorship, and clear technical communication',
      'Prior corporate or institutional training experience is preferred but not mandatory'
    ]
  },
  {
    id: 'job-fullstack-ai-engineer',
    title: 'Senior Full-Stack & Generative AI Engineer',
    division: 'NodalBot Digital Solutions',
    location: 'Chennai, Tamil Nadu, India (Hybrid)',
    type: 'Full-Time',
    experienceRequired: '3 – 6 Years',
    summary: 'Architect and develop production web applications, custom Model Context Protocol (MCP) servers, enterprise RAG systems, and responsive frontends for our consulting clients.',
    responsibilities: [
      'Build scalable web applications using React, TypeScript, Node.js, and Python FastAPI',
      'Engineer custom RAG pipelines and autonomous multi-agent systems using LangGraph and vector stores',
      'Author robust custom MCP servers exposing database tools to AI workflows',
      'Participate in sprint planning and client technical discovery sessions'
    ],
    requirements: [
      'Proficiency in React, TypeScript, Python, REST APIs, and Docker',
      'Demonstrated experience building and evaluating Generative AI / LLM applications',
      'Strong database design skills in PostgreSQL and cloud environments'
    ]
  },
  {
    id: 'job-powerbi-consultant',
    title: 'Power BI & Business Intelligence Solutions Consultant',
    division: 'NodalBot Digital Solutions',
    location: 'Chennai, Tamil Nadu, India (Hybrid)',
    type: 'Full-Time',
    experienceRequired: '3 – 6 Years',
    summary: 'Design executive dashboards, author complex DAX formulas, build dimensional data models, and deliver BI transformation projects for national and international enterprise clients.',
    responsibilities: [
      'Consult directly with C-level stakeholders to translate business goals into intuitive visual KPI dashboards',
      'Optimize relational data models and write performant DAX calculations',
      'Implement Row-Level Security (RLS) and administer Power BI Service workspaces',
      'Conduct client training and handover sessions upon project completion'
    ],
    requirements: [
      'Deep expertise in Power BI Desktop, DAX, Power Query (M), and Star Schema modeling',
      'Eye for clean, human-centered UI/UX visual hierarchy and dashboard design',
      'Microsoft PL-300 or DP-600 certification is a strong plus'
    ]
  },
  {
    id: 'job-tech-internship',
    title: 'Technology Graduate Intern (Data, AI & Software)',
    division: 'Operations',
    location: 'Chennai, Tamil Nadu, India (Onsite / Hybrid)',
    type: 'Internship',
    experienceRequired: 'Freshers / Final Year Students (2025 – 2027 Batches)',
    summary: 'Immersive 3-to-6 month internship program for ambitious students looking to work on real-world data pipelines, AI applications, and corporate software consulting projects under senior mentorship.',
    responsibilities: [
      'Assist senior engineers in building sample data pipelines, documentation, and test suites',
      'Support the development of interactive learning lab modules and technical tutorials',
      'Participate in internal hackathons and client proof-of-concept builds',
      'Top-performing interns will be eligible for full-time engineering offers upon graduation'
    ],
    requirements: [
      'Degree in Computer Science, IT, AI, Data Science, or related engineering discipline',
      'Demonstrated academic projects or GitHub repositories in Python, SQL, or React',
      'Strong problem-solving attitude and hunger to learn modern enterprise technologies'
    ]
  }
];
