import { CareerPathRecommendation } from '../types';

export interface QuizQuestionOption {
  label: string;
  value: string;
  description?: string;
  weight: Record<string, number>; // maps roleId to points
}

export interface QuizQuestion {
  id: string;
  stepNumber: number;
  title: string;
  subtitle: string;
  options: QuizQuestionOption[];
}

export const CAREER_DISCOVERY_QUESTIONS: QuizQuestion[] = [
  {
    id: 'skill-level',
    stepNumber: 1,
    title: 'What is your current technical background?',
    subtitle: 'This helps us calibrate the right starting point for your learning curve.',
    options: [
      {
        label: 'Complete Beginner / Non-IT',
        value: 'beginner',
        description: 'No prior programming experience. Looking for a guided, step-by-step foundation.',
        weight: { 'data-analyst': 3, 'full-stack': 3, 'ai-ml': 1, 'data-engineer': 1, 'cloud-devops': 1 }
      },
      {
        label: 'College Student (Engineering / CS / IT / Math)',
        value: 'college',
        description: 'Have studied basic C/C++/Java/Python or databases in coursework.',
        weight: { 'full-stack': 3, 'ai-ml': 3, 'data-analyst': 2, 'data-engineer': 2, 'gen-ai': 3 }
      },
      {
        label: 'Working Professional in Tech (1-4 Years)',
        value: 'working-tech',
        description: 'Working in QA, support, junior dev, or operations and looking to upskill.',
        weight: { 'gen-ai': 3, 'data-engineer': 3, 'cloud-devops': 3, 'ai-ml': 2, 'full-stack': 2 }
      },
      {
        label: 'Non-Tech Professional Seeking Career Switch',
        value: 'career-switch',
        description: 'Working in sales, finance, operations, or design and want to enter technology.',
        weight: { 'data-analyst': 4, 'full-stack': 2, 'gen-ai': 2, 'ai-ml': 1, 'cloud-devops': 1 }
      }
    ]
  },
  {
    id: 'preferred-subject',
    stepNumber: 2,
    title: 'Which core technical domain excites you most?',
    subtitle: 'Choose the area where you would genuinely enjoy spending hours problem-solving.',
    options: [
      {
        label: 'Building Web & Interactive Digital Products',
        value: 'web-products',
        description: 'Creating user interfaces, responsive web apps, APIs, and client-facing software.',
        weight: { 'full-stack': 5, 'cloud-devops': 2 }
      },
      {
        label: 'Large Language Models, Intelligent Agents & Generative AI',
        value: 'genai-llm',
        description: 'Prompt engineering, RAG pipelines, fine-tuning, and automated agent workflows.',
        weight: { 'gen-ai': 5, 'ai-ml': 3 }
      },
      {
        label: 'Business Dashboards, Metrics & Strategic Data Insights',
        value: 'business-intelligence',
        description: 'Turning raw numbers into compelling executive visualizations, SQL queries, and KPIs.',
        weight: { 'data-analyst': 5, 'data-engineer': 1 }
      },
      {
        label: 'Big Data Infrastructure, Pipelines & Lakehouses',
        value: 'data-pipelines',
        description: 'Handling massive distributed data streams with Spark, Kafka, and cloud warehouses.',
        weight: { 'data-engineer': 5, 'cloud-devops': 2 }
      },
      {
        label: 'Machine Learning Models & Predictive Algorithms',
        value: 'ml-algorithms',
        description: 'Computer vision, natural language processing, neural networks, and mathematical modeling.',
        weight: { 'ai-ml': 5, 'gen-ai': 3 }
      }
    ]
  },
  {
    id: 'interests',
    stepNumber: 3,
    title: 'What type of daily work sounds most fulfilling to you?',
    subtitle: 'Think about how you prefer your workday challenges to look.',
    options: [
      {
        label: 'Shipping features that end-users see and interact with immediately',
        value: 'user-facing',
        weight: { 'full-stack': 4, 'data-analyst': 2 }
      },
      {
        label: 'Designing automated pipelines that quietly power entire companies reliably',
        value: 'backend-infra',
        weight: { 'data-engineer': 4, 'cloud-devops': 4 }
      },
      {
        label: 'Inventing autonomous AI bots and natural language tools that feel like magic',
        value: 'ai-creation',
        weight: { 'gen-ai': 4, 'ai-ml': 4 }
      },
      {
        label: 'Uncovering hidden revenue trends and advising leadership on strategic bets',
        value: 'insights-story',
        weight: { 'data-analyst': 4, 'data-engineer': 2 }
      }
    ]
  },
  {
    id: 'career-goal',
    stepNumber: 4,
    title: 'What is your primary milestone for the next 6-12 months?',
    subtitle: 'We tailor the project intensity and career coaching around your main goal.',
    options: [
      {
        label: 'Land my first high-paying tech job / campus placement',
        value: 'first-job',
        weight: { 'full-stack': 3, 'data-analyst': 3, 'ai-ml': 2 }
      },
      {
        label: 'Accelerate salary growth and transition into cutting-edge AI / GenAI',
        value: 'salary-boost',
        weight: { 'gen-ai': 4, 'ai-ml': 3, 'data-engineer': 3 }
      },
      {
        label: 'Transition from non-tech or service company into high-growth product startups',
        value: 'product-switch',
        weight: { 'full-stack': 3, 'data-engineer': 3, 'gen-ai': 3 }
      },
      {
        label: 'Gain practical hands-on portfolio projects to pass technical interviews',
        value: 'interview-prep',
        weight: { 'full-stack': 2, 'data-analyst': 2, 'cloud-devops': 2, 'ai-ml': 2 }
      }
    ]
  },
  {
    id: 'weekly-hours',
    stepNumber: 5,
    title: 'How many hours can you dedicate each week?',
    subtitle: 'Realistic consistency beats intense sporadic studying every time.',
    options: [
      {
        label: '6 to 10 Hours / Week (Evenings & Weekends)',
        value: 'part-time',
        weight: { 'data-analyst': 2, 'gen-ai': 2 }
      },
      {
        label: '12 to 20 Hours / Week (Balanced High-Focus)',
        value: 'medium',
        weight: { 'full-stack': 2, 'ai-ml': 2, 'data-engineer': 2 }
      },
      {
        label: '25+ Hours / Week (Full Immersion Boot Camp Mode)',
        value: 'full-time',
        weight: { 'ai-ml': 3, 'data-engineer': 3, 'full-stack': 3 }
      }
    ]
  }
];

export const CAREER_PATHS_DATABASE: Record<string, CareerPathRecommendation> = {
  'gen-ai': {
    roleId: 'gen-ai',
    roleTitle: 'Generative AI & LLM Solutions Engineer',
    matchScore: 96,
    tagline: 'Architect intelligent agents, retrieval systems, and multimodal enterprise AI.',
    description: 'Generative AI engineers bridge foundation models and enterprise software. They develop production RAG (Retrieval-Augmented Generation) pipelines, implement vector search databases, automate multi-agent workflows, and enforce security guardrails against hallucinations and prompt injection.',
    marketDemand: 'Extremely High (Highest salary growth in tech for 2026)',
    recommendedCourses: ['course-genai', 'course-ai-ml', 'course-python-programming'],
    coreSkills: ['Prompt Engineering & System Prompts', 'Retrieval-Augmented Generation (RAG)', 'Vector DBs (Chroma, Pinecone)', 'LangChain & LangGraph', 'Gemini & OpenAI API Tool Calling', 'FastAPI Microservices'],
    sampleProject: 'Autonomous Regulatory Compliance Assistant with Multimodal PDF Ingestion & Hybrid RAG',
    suggestedSequence: [
      'Month 1: Advanced Python, Asynchronous Requests & Prompt Engineering Fundamentals',
      'Month 2: Vector Embeddings, Chunking Strategies & Vector Database Indexing',
      'Month 3: Production RAG, Cross-Encoder Rerankers & Anti-Hallucination Guardrails',
      'Month 4: Autonomous Multi-Agent Swarms with LangGraph & Cloud Inference Deployment'
    ],
    estimatedWeeks: 12
  },
  'ai-ml': {
    roleId: 'ai-ml',
    roleTitle: 'Machine Learning & Computer Vision Engineer',
    matchScore: 94,
    tagline: 'Design predictive models, neural architectures, and intelligent vision systems.',
    description: 'Machine Learning Engineers build and train mathematical models that learn from historical data. They master supervised and unsupervised learning, mathematical optimization, deep neural networks with PyTorch, and deploy low-latency inference pipelines.',
    marketDemand: 'Very High (Core to autonomous systems, fintech, healthcare)',
    recommendedCourses: ['course-ai-ml', 'course-genai', 'course-python-programming'],
    coreSkills: ['Python, NumPy & Pandas', 'Scikit-Learn Algorithms', 'Deep Learning with PyTorch', 'Convolutional & Transformer Networks', 'Model Evaluation & Tuning', 'MLOps & Docker Deployment'],
    sampleProject: 'Real-Time Medical Diagnostic Imaging Classifier & Triage API',
    suggestedSequence: [
      'Month 1: Applied Linear Algebra, Calculus & Exploratory Data Analysis in Python',
      'Month 2: Classical Machine Learning: Regression, Classification, Ensembles (XGBoost)',
      'Month 3: Deep Learning Foundations: PyTorch Tensors, CNNs & Transfer Learning',
      'Month 4: Model Serving with FastAPI, Docker, and MLflow Observability'
    ],
    estimatedWeeks: 16
  },
  'full-stack': {
    roleId: 'full-stack',
    roleTitle: 'Full-Stack Software Engineer (React + Node.js)',
    matchScore: 95,
    tagline: 'Build end-to-end web applications, modern interactive UIs, and robust backend APIs.',
    description: 'Full-Stack Developers build complete digital products from frontend interfaces to relational database architectures. They master React, TypeScript, Node.js, Express, PostgreSQL, and modern DevOps deployment pipelines.',
    marketDemand: 'Consistently Strong (The most open job postings across tech)',
    recommendedCourses: ['course-fullstack', 'course-sql-databases', 'course-cloud-devops'],
    coreSkills: ['TypeScript & Modern JavaScript', 'React 19 & Component Architecture', 'Tailwind CSS & Responsive UX', 'Node.js & Express REST APIs', 'PostgreSQL & Prisma ORM', 'Docker & CI/CD Deployment'],
    sampleProject: 'Real-Time Collaborative Project Management SaaS with WebSockets',
    suggestedSequence: [
      'Month 1: Modern TypeScript, Semantic HTML, CSS Grid/Flexbox & Tailwind Systems',
      'Month 2: React Component Hierarchy, Hooks, State Management & React Router',
      'Month 3: Node.js, Express RESTful APIs, JWT Authentication & Security Middleware',
      'Month 4: PostgreSQL Relational Modeling with Prisma & Production Docker Deployment'
    ],
    estimatedWeeks: 16
  },
  'data-analyst': {
    roleId: 'data-analyst',
    roleTitle: 'Data Analyst & Business Intelligence Specialist',
    matchScore: 93,
    tagline: 'Transform raw enterprise records into high-impact executive visual dashboards.',
    description: 'Data Analysts bridge business strategy and numerical evidence. They master advanced SQL queries, data modeling, Power BI interactive reports with DAX calculations, and exploratory Python analytics to guide leadership decisions.',
    marketDemand: 'High (Required in every modern enterprise: retail, finance, healthcare)',
    recommendedCourses: ['course-data-analytics', 'course-sql-databases', 'course-python-programming'],
    coreSkills: ['Advanced Relational SQL & Joins', 'Window Functions & CTEs', 'Power BI & DAX Measures', 'Star Schema Data Modeling', 'Python (Pandas & Seaborn)', 'Executive Storytelling & Presentation'],
    sampleProject: 'Global Retail Customer Lifetime Value (CLV) & Cohort Retention BI Suite',
    suggestedSequence: [
      'Month 1: SQL Mastery: Filtering, Joins, Aggregations, Window Functions & CTEs',
      'Month 2: Data Modeling, Power Query Cleansing & Star Schema Architectures',
      'Month 3: Power BI Dashboards, DAX Calculation Logic & Visual Storytelling',
      'Month 4: Exploratory Data Analysis with Python (Pandas/Seaborn) & Portfolio Capstone'
    ],
    estimatedWeeks: 12
  },
  'data-engineer': {
    roleId: 'data-engineer',
    roleTitle: 'Data Platform & Distributed Pipeline Engineer',
    matchScore: 91,
    tagline: 'Build scalable Lakehouses, distributed PySpark jobs, and automated Airflow DAGs.',
    description: 'Data Engineers create the robust, fault-tolerant infrastructure that delivers clean data to data scientists and dashboards. They work with Apache Spark, Kafka event streaming, Delta Lake ACID tables, and Airflow orchestration.',
    marketDemand: 'Very High (Major talent shortage across enterprise tech)',
    recommendedCourses: ['course-data-eng', 'course-sql-databases', 'course-cloud-devops'],
    coreSkills: ['Distributed Computing with PySpark', 'Delta Lake ACID Protocols', 'Apache Airflow Workflow DAGs', 'Apache Kafka Streaming', 'PostgreSQL & Cloud Data Warehouses', 'Docker & CI/CD Pipelines'],
    sampleProject: 'Scalable Fintech Fraud Detection Lakehouse Pipeline (10M+ events/day)',
    suggestedSequence: [
      'Month 1: Advanced Python & Distributed Spark RDD / DataFrame Optimizations',
      'Month 2: Delta Lake & Medallion Architecture (Bronze, Silver, Gold Layers)',
      'Month 3: Workflow Orchestration with Apache Airflow DAGs & Data Quality Tests',
      'Month 4: Real-Time Event Streaming with Apache Kafka & Feature Stores'
    ],
    estimatedWeeks: 14
  },
  'cloud-devops': {
    roleId: 'cloud-devops',
    roleTitle: 'Cloud Architect & DevOps Infrastructure Specialist',
    matchScore: 92,
    tagline: 'Containerize microservices, orchestrate Kubernetes clusters, and automate AWS IaC.',
    description: 'DevOps engineers ensure software systems run reliably 24/7 at scale. They master Docker containers, Kubernetes pod orchestration, AWS cloud networking, Terraform Infrastructure as Code, and GitHub Actions CI/CD.',
    marketDemand: 'Very High (Crucial for all high-availability cloud companies)',
    recommendedCourses: ['course-cloud-devops', 'course-fullstack', 'course-python-programming'],
    coreSkills: ['Linux Systems & Bash Scripting', 'Docker Multi-Stage Containerization', 'Kubernetes Clusters & Ingress', 'AWS Networking (VPC, Subnets, EC2)', 'Terraform Infrastructure as Code', 'Prometheus & Grafana Telemetry'],
    sampleProject: 'Automated Multi-Region Microservices Cloud Infrastructure & CI/CD Pipeline',
    suggestedSequence: [
      'Month 1: Linux System Administration, Bash Scripting & Docker Containerization',
      'Month 2: Kubernetes Manifests, Pod Scheduling, Services & Ingress Controllers',
      'Month 3: Declarative Cloud Provisioning on AWS using Modular Terraform',
      'Month 4: Automated CI/CD Pipelines with GitHub Actions & Grafana Observability'
    ],
    estimatedWeeks: 14
  }
};
