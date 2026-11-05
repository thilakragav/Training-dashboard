import { Course } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'course-ai-ml',
    slug: 'ai-and-machine-learning-specialization',
    title: 'Artificial Intelligence & Machine Learning Specialization',
    shortDescription: 'Master predictive modeling, statistical learning, deep neural architectures, computer vision, and NLP with industry-grade frameworks.',
    longDescription: 'An intensive, project-first program engineered to bridge the gap between algorithmic theory and production machine learning deployments. You will master supervised and unsupervised learning, mathematical foundations (calculus & linear algebra for ML), PyTorch neural architectures, model evaluation metrics, and end-to-end MLOps deployment on cloud infrastructure.',
    category: 'AI & Machine Learning',
    level: 'Intermediate',
    durationWeeks: 16,
    totalHours: 120,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['Python', 'NumPy', 'Pandas', 'Scikit-Learn', 'PyTorch', 'TensorFlow', 'OpenCV', 'MLflow', 'FastAPI', 'Docker'],
    publishedFee: {
      totalAmount: 48000,
      currency: 'INR',
      emiStartsAt: 4000,
      scholarshipAvailable: true
    },
    rating: 4.9,
    reviewCount: 142,
    enrolledStudentsCount: 380,
    badge: 'Flagship Career Track',
    highlights: [
      '12 Hands-on algorithmic labs & 2 industrial capstones',
      'PyTorch GPU-accelerated deep learning workshops',
      'Production API packaging with FastAPI & Docker',
      '1-on-1 code reviews by Senior Machine Learning Engineers'
    ],
    prerequisites: ['Foundational Python syntax or prior programming experience', 'High-school level linear algebra and probability basics'],
    targetAudience: ['Engineering & CS students seeking high-growth tech careers', 'Data analysts moving into predictive data modeling', 'Software developers transitioning to AI/ML engineering'],
    learningOutcomes: [
      'Architect, tune, and cross-validate supervised and unsupervised ML models with Scikit-Learn',
      'Design deep feedforward networks, CNNs, and recurrent neural architectures in PyTorch',
      'Perform rigorous feature engineering, outlier mitigation, and data leakage prevention',
      'Deploy low-latency inference endpoints with Docker and monitor drift with MLflow'
    ],
    capstoneProject: {
      title: 'Real-Time Medical Diagnostic Imaging Classifier & Triage API',
      description: 'Train a deep convolutional neural network with transfer learning on chest X-ray radiographs to detect pulmonary anomalies, wrapped into an asynchronous FastAPI microservice with automated test suites.',
      deliverables: [
        'Exploratory data analysis & augmentation pipeline',
        'Fine-tuned PyTorch ResNet-50 / EfficientNet model with ROC-AUC >= 0.94',
        'Containerized inference container with Swagger API documentation',
        'Model card detailing bias checks, latency benchmarks, and dataset provenance'
      ],
      techStack: ['PyTorch', 'Torchvision', 'FastAPI', 'Docker', 'MLflow', 'AWS S3']
    },
    instructor: {
      name: 'Dr. Vikramaditya Sen',
      title: 'Principal AI Researcher & Ex-Senior Data Scientist',
      experience: '12+ Years Industry & Research',
      companyBackground: 'Ex-Amazon Alexa AI, IIT Kharagpur Alum',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 15, 2026', schedule: 'Sat & Sun (10:00 AM - 1:30 PM)', seatsLeft: 6, mode: 'Hybrid (Classroom + Online)' },
      { startDate: 'Dec 01, 2026', schedule: 'Tue & Thu (7:00 PM - 9:30 PM)', seatsLeft: 12, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-aiml-1',
        moduleNumber: 1,
        title: 'Mathematical Foundations & Applied Python for ML',
        description: 'Vectorized computing, matrix operations, multivariate calculus gradients, probability distributions, and scientific computing stack.',
        durationHours: 20,
        learningObjectives: ['Vectorize operations with NumPy', 'Data wrangling with Pandas', 'Vector projections and eigenvalue applications'],
        handsOnLab: 'Lab 1: High-dimensional matrix operations and gradient descent simulator from scratch.',
        lessons: [
          { id: 'les-aiml-101', title: 'Vector Spaces & Matrix Transformations in Python', durationMinutes: 45, type: 'video' },
          { id: 'les-aiml-102', title: 'Analytical Gradients vs Computational Autograd', durationMinutes: 50, type: 'code-lab' },
          { id: 'les-aiml-103', title: 'Exploratory Data Profiling with Pandas & Seaborn', durationMinutes: 40, type: 'reading' }
        ]
      },
      {
        id: 'mod-aiml-2',
        moduleNumber: 2,
        title: 'Supervised Learning Algorithms & Diagnostic Validation',
        description: 'Linear models, logistic classification, decision trees, random forests, and gradient boosting (XGBoost/LightGBM).',
        durationHours: 35,
        learningObjectives: ['Implement cost functions and regularization (L1/L2)', 'Tune ensemble hyper-parameters via Bayesian search', 'Diagnose bias-variance tradeoff'],
        handsOnLab: 'Lab 2: Predicting credit default risk with calibrated LightGBM and SHAP explainability.',
        lessons: [
          { id: 'les-aiml-201', title: 'Generalized Linear Models & Logistic Regression', durationMinutes: 55, type: 'video' },
          { id: 'les-aiml-202', title: 'Ensemble Learning: Gradient Boosting Math', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-aiml-203', title: 'Cross-Validation & Data Leakage Prevention Patterns', durationMinutes: 45, type: 'quiz' }
        ]
      },
      {
        id: 'mod-aiml-3',
        moduleNumber: 3,
        title: 'Deep Learning Architectures with PyTorch',
        description: 'Tensors, backpropagation autograd engine, convolutional layers, transfer learning, and sequence attention.',
        durationHours: 40,
        learningObjectives: ['Build neural networks from scratch in PyTorch', 'Train CNNs with spatial convolutions and pooling', 'Fine-tune pretrained foundation weights'],
        handsOnLab: 'Lab 3: Transfer learning on Stanford Dogs dataset with Torchvision ResNet architectures.',
        lessons: [
          { id: 'les-aiml-301', title: 'PyTorch Tensors, CUDA Acceleration & Computational Graphs', durationMinutes: 50, type: 'video' },
          { id: 'les-aiml-302', title: 'Convolutional Feature Extractors & Pooling Mechanisms', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-aiml-303', title: 'Batch Normalization, Dropout & Learning Rate Schedulers', durationMinutes: 45, type: 'reading' }
        ]
      },
      {
        id: 'mod-aiml-4',
        moduleNumber: 4,
        title: 'Production Model Packaging & MLOps Deployment',
        description: 'Packaging trained artifacts into microservices, automated regression tests, Dockerization, and cloud inference serving.',
        durationHours: 25,
        learningObjectives: ['Serialize model weights safely (ONNX/TorchScript)', 'Build low-latency FastAPI endpoints', 'Containerize and monitor endpoints in production'],
        handsOnLab: 'Lab 4: Deploying a PyTorch model into a containerized FastAPI endpoint with latency under 80ms.',
        lessons: [
          { id: 'les-aiml-401', title: 'Model Serialization & Quantization for Inference', durationMinutes: 45, type: 'video' },
          { id: 'les-aiml-402', title: 'FastAPI Production Service with Validation Schemas', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-aiml-403', title: 'Docker Containerization & MLOps Observability', durationMinutes: 50, type: 'code-lab' }
        ]
      }
    ],
    faqs: [
      { question: 'Do I need prior advanced math knowledge to enroll?', answer: 'We cover the applied aspects of linear algebra, multivariable calculus, and probability in Module 1 with code visualizations so that theoretical concepts are immediately grounded in code.' },
      { question: 'What compute resources are provided?', answer: 'Enrolled students receive dedicated cloud GPU notebook environment credits to train deep learning models without needing personal high-end gaming laptops.' },
      { question: 'Will this prepare me for Machine Learning Engineer interviews?', answer: 'Yes. The syllabus focuses extensively on algorithmic coding, mathematical derivations, model evaluation trade-offs, and live system design questions common in tier-1 technical interviews.' }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-genai',
    slug: 'generative-ai-and-prompt-engineering',
    title: 'Generative AI & Enterprise Prompt Engineering',
    shortDescription: 'Master Large Language Models, Retrieval-Augmented Generation (RAG), LangChain, LlamaIndex, Vector Databases, and Multi-Agent Orchestration.',
    longDescription: 'Generative AI is transforming enterprise software architectures. This hands-on program teaches modern LLM application engineering: zero-shot/few-shot prompt refinement, structured JSON generation, semantic search with ChromaDB and Pinecone, hybrid search RAG pipelines, fine-tuning lightweight models, and building autonomous multi-agent workflows using LangGraph.',
    category: 'Generative AI',
    level: 'Intermediate',
    durationWeeks: 10,
    totalHours: 75,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Gemini API', 'OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB', 'Hugging Face', 'Python', 'FastAPI'],
    publishedFee: {
      totalAmount: 36000,
      currency: 'INR',
      emiStartsAt: 3000,
      scholarshipAvailable: true
    },
    rating: 4.95,
    reviewCount: 98,
    enrolledStudentsCount: 290,
    badge: 'High Industry Demand',
    highlights: [
      'Production RAG system development with hybrid search & rerankers',
      'Prompt evaluation metrics, token optimization, and hallucination reduction',
      'Multi-agent autonomous systems using LangGraph',
      'Industry-grade security: prompt injection defenses & guardrails'
    ],
    prerequisites: ['Basic Python familiarity (functions, dictionaries, API calls with requests or httpx)'],
    targetAudience: ['Software engineers building AI-driven features', 'Data scientists upgrading to modern LLM application stacks', 'Technical product managers wishing to build generative prototypes'],
    learningOutcomes: [
      'Master prompt engineering patterns: Chain-of-Thought, ReAct, and Self-Consistency',
      'Build end-to-end RAG systems using vector databases, embeddings, and context chunking',
      'Implement guardrails against prompt injection and data exfiltration',
      'Architect autonomous agent swarms with tool-calling capabilities'
    ],
    capstoneProject: {
      title: 'Enterprise Regulatory & Legal Compliance Assistant with Hybrid RAG',
      description: 'Design and deploy an intelligent legal question-answering agent capable of ingesting complex PDF contracts, extracting semantic clauses, referencing citations with strict anti-hallucination guardrails, and summarizing risk vectors.',
      deliverables: [
        'Document parsing and recursive chunking pipeline',
        'Hybrid dense-sparse retrieval system with cross-encoder reranking',
        'Guardrails layer validating response truthfulness against source chunks',
        'Interactive Streamlit or React frontend with source provenance links'
      ],
      techStack: ['Python', 'LangChain', 'ChromaDB', 'Gemini Pro API', 'FastAPI', 'Docker']
    },
    instructor: {
      name: 'Ananya Deshmukh',
      title: 'AI Solutions Architect & LLM Engineer',
      experience: '9+ Years Experience',
      companyBackground: 'Author of "Building Enterprise RAG", Ex-ThoughtWorks',
      avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 20, 2026', schedule: 'Mon & Wed (7:30 PM - 9:30 PM)', seatsLeft: 8, mode: 'Live Online' },
      { startDate: 'Dec 05, 2026', schedule: 'Sat & Sun (2:00 PM - 5:00 PM)', seatsLeft: 14, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-genai-1',
        moduleNumber: 1,
        title: 'LLM Foundations & Advanced Prompt Engineering',
        description: 'Transformer architectures, tokenization mechanisms, temperature sampling, few-shot prompting, and structured output formatting.',
        durationHours: 15,
        learningObjectives: ['Control model hallucination through prompt constraints', 'Enforce deterministic JSON schemas', 'Implement ReAct thought loops'],
        handsOnLab: 'Lab 1: Building a deterministic structured output extractor for unstructured financial receipts.',
        lessons: [
          { id: 'les-genai-101', title: 'Attention Mechanisms & Generative Architecture Fundamentals', durationMinutes: 45, type: 'video' },
          { id: 'les-genai-102', title: 'System Prompt Architecture & Few-Shot Demonstration Design', durationMinutes: 50, type: 'code-lab' },
          { id: 'les-genai-103', title: 'Enforcing JSON Schema & Function Calling with Gemini API', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-genai-2',
        moduleNumber: 2,
        title: 'Vector Embeddings, Semantic Search & Chunking Strategies',
        description: 'High-dimensional embeddings, similarity metrics (cosine/dot product), recursive document chunking, and metadata filtering.',
        durationHours: 20,
        learningObjectives: ['Select and evaluate dense embedding models', 'Design context-preserving chunking strategies', 'Implement vector search queries with ChromaDB'],
        handsOnLab: 'Lab 2: Comparative benchmark of chunking strategies across 50-page complex PDF tables and paragraphs.',
        lessons: [
          { id: 'les-genai-201', title: 'Semantic Embeddings Math & Dimensionality', durationMinutes: 40, type: 'video' },
          { id: 'les-genai-202', title: 'Recursive, Semantic & Hierarchical Chunking Techniques', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-genai-203', title: 'Vector Database Indexing & Filtering with Pinecone/Chroma', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-genai-3',
        moduleNumber: 3,
        title: 'Production RAG: Hybrid Search, Rerankers & Guardrails',
        description: 'Combining BM25 keyword search with dense vectors, reciprocal rank fusion, cross-encoder rerankers, and NeMo guardrails.',
        durationHours: 25,
        learningObjectives: ['Implement hybrid retrieval with BM25 + dense vectors', 'Utilize Cohere/BGE rerankers for top-K relevance', 'Audit outputs for hallucination and bias'],
        handsOnLab: 'Lab 3: Implementing a full hybrid RAG pipeline with cross-encoder reranking and source citation badges.',
        lessons: [
          { id: 'les-genai-301', title: 'Hybrid Retrieval Architecture & Reciprocal Rank Fusion', durationMinutes: 50, type: 'video' },
          { id: 'les-genai-302', title: 'Cross-Encoder Rerankers for Precision Context Slicing', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-genai-303', title: 'Guardrails & Prompt Injection Mitigation', durationMinutes: 45, type: 'quiz' }
        ]
      },
      {
        id: 'mod-genai-4',
        moduleNumber: 4,
        title: 'Autonomous Agents & Multi-Agent Systems',
        description: 'Tool use, external web searching, database query agents, memory management, and multi-agent coordination with LangGraph.',
        durationHours: 15,
        learningObjectives: ['Construct multi-agent cyclic state machines', 'Integrate custom API tools into LLM workflows', 'Manage short-term and persistent conversation state'],
        handsOnLab: 'Lab 4: Building a collaborative research agent team: one Researcher agent and one Editor agent that refine reports.',
        lessons: [
          { id: 'les-genai-401', title: 'Agentic Architectures: From Linear Chains to Graphs', durationMinutes: 45, type: 'video' },
          { id: 'les-genai-402', title: 'Building Multi-Agent Workflows with LangGraph', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-genai-403', title: 'Evaluation Frameworks (Ragas) & Continuous Monitoring', durationMinutes: 40, type: 'reading' }
        ]
      }
    ],
    faqs: [
      { question: 'What API keys or costs are required during the course?', answer: 'We provide pre-configured student API access to state-of-the-art Gemini and open-source models via local Ollama environments so there are zero surprise cloud billing expenses.' },
      { question: 'Is this just prompt tricks or real engineering?', answer: 'This is a serious software engineering program covering vector embeddings, retrieval algorithms, API orchestration, state machines, and latency optimization.' }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-data-analytics',
    slug: 'data-analytics-and-business-intelligence',
    title: 'Data Analytics & Business Intelligence Professional',
    shortDescription: 'Transform raw enterprise records into actionable executive intelligence with SQL, Advanced Power BI, Tableau, Excel modeling, and Python analytics.',
    longDescription: 'Designed for aspiring data analysts, business analysts, and decision-makers. You will learn to extract data with complex SQL joins and window functions, build robust dimensional data models (star and snowflake schemas), automate report refreshes, write DAX calculations in Power BI, and present compelling visual narratives.',
    category: 'Data Analytics',
    level: 'Beginner',
    durationWeeks: 12,
    totalHours: 90,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['SQL', 'PostgreSQL', 'Power BI', 'DAX', 'Tableau', 'Excel (Advanced)', 'Python (Pandas)', 'Power Query'],
    publishedFee: {
      totalAmount: 32000,
      currency: 'INR',
      emiStartsAt: 2700,
      scholarshipAvailable: true
    },
    rating: 4.88,
    reviewCount: 210,
    enrolledStudentsCount: 520,
    badge: 'Bestseller',
    highlights: [
      '15+ Interactive SQL case studies & real business datasets',
      'Advanced DAX calculated measures & time-intelligence calculations',
      'Complete portfolio with 4 interactive dashboards ready for GitHub and LinkedIn',
      'Interview preparation sessions covering product sense and SQL case rounds'
    ],
    prerequisites: ['Basic computer proficiency and comfort working with spreadsheet software'],
    targetAudience: ['Graduates looking for high-placement business analytics roles', 'Operations, finance, and marketing executives wanting data-driven power', 'Entry-level professionals transitioning into business intelligence'],
    learningOutcomes: [
      'Write multi-table relational SQL queries with CTEs, window functions, and aggregations',
      'Design dimensional schemas with fact and dimension tables for enterprise reporting',
      'Develop interactive Power BI reports with dynamic filtering, bookmarks, and DAX KPIs',
      'Perform exploratory data analysis in Python using Pandas, Seaborn, and Matplotlib'
    ],
    capstoneProject: {
      title: 'Global Omnichannel Retail Performance & Customer Lifetime Value (CLV) BI Suite',
      description: 'Analyze 2.4 million transactions across e-commerce and retail storefronts to uncover customer retention drops, product cohort profitability, and dynamic basket affinities.',
      deliverables: [
        'Normalized PostgreSQL database schema and automated ingestion scripts',
        'Executive Power BI Dashboard with drill-through pages and dynamic currency conversion',
        'RFM (Recency, Frequency, Monetary) customer segmentation matrix in Python',
        '10-minute recorded executive presentation slide deck with strategic recommendations'
      ],
      techStack: ['PostgreSQL', 'Power BI', 'DAX', 'Python', 'Pandas', 'Excel']
    },
    instructor: {
      name: 'Rohan Mehra',
      title: 'Head of Business Intelligence & Analytics',
      experience: '10+ Years in Analytics Consulting',
      companyBackground: 'Ex-Deloitte, Ex-Swiggy Analytics Lead',
      avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 18, 2026', schedule: 'Sat & Sun (9:00 AM - 12:00 PM)', seatsLeft: 5, mode: 'Hybrid (Classroom + Online)' },
      { startDate: 'Dec 02, 2026', schedule: 'Mon, Wed, Fri (8:00 PM - 9:30 PM)', seatsLeft: 16, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-da-1',
        moduleNumber: 1,
        title: 'Mastering SQL for Analytics & Data Extraction',
        description: 'Relational databases, grouping, complex multi-table joins, subqueries, CTEs, and window functions (ROW_NUMBER, RANK, LAG, LEAD).',
        durationHours: 30,
        learningObjectives: ['Write performant SQL queries against large tables', 'Utilize window functions for period-over-period delta calculations', 'Clean text and timestamp columns with SQL functions'],
        handsOnLab: 'Lab 1: Analyzing customer retention cohorts and month-over-month revenue growth using pure PostgreSQL CTEs.',
        lessons: [
          { id: 'les-da-101', title: 'Relational Schema Fundamentals & SELECT Queries', durationMinutes: 45, type: 'video' },
          { id: 'les-da-102', title: 'Advanced Filtering, Grouping & HAVING Clauses', durationMinutes: 50, type: 'code-lab' },
          { id: 'les-da-103', title: 'Window Functions in Action: Running Totals & Moving Averages', durationMinutes: 60, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-da-2',
        moduleNumber: 2,
        title: 'Data Modeling & ETL with Power Query',
        description: 'Extracting data from disparate sources, unpivoting columns, data type normalization, star schema design, and surrogate keys.',
        durationHours: 20,
        learningObjectives: ['Implement star and snowflake schemas', 'Transform messy spreadsheets with M code in Power Query', 'Prevent circular relationships and high-cardinality bottlenecks'],
        handsOnLab: 'Lab 2: Transforming 12 monthly CSV billing files into an automated star-schema data model in Power BI.',
        lessons: [
          { id: 'les-da-201', title: 'Star Schema Architecture vs Flat Tables', durationMinutes: 45, type: 'video' },
          { id: 'les-da-202', title: 'Power Query Transformations & Automated Cleansing', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-da-203', title: 'Relationship Cardinality & Cross-Filtering Direction', durationMinutes: 40, type: 'reading' }
        ]
      },
      {
        id: 'mod-da-3',
        moduleNumber: 3,
        title: 'Power BI Visualization & DAX Calculations',
        description: 'Row context vs filter context, CALCULATE mastery, time-intelligence functions (YTD, MTD, SAMEPERIODLASTYEAR), and UI layout UX.',
        durationHours: 25,
        learningObjectives: ['Write custom DAX measures for executive metrics', 'Construct responsive dashboards with page navigation and drill-throughs', 'Design accessible visual color hierarchies for stakeholders'],
        handsOnLab: 'Lab 3: Building a real-time sales pipeline dashboard with dynamic KPI cards, target gauges, and conditional formatting.',
        lessons: [
          { id: 'les-da-301', title: 'DAX Evaluation Context: Row vs Filter Context Deep Dive', durationMinutes: 55, type: 'video' },
          { id: 'les-da-302', title: 'Time Intelligence Functions in DAX', durationMinutes: 50, type: 'code-lab' },
          { id: 'les-da-303', title: 'Dashboard UX: Visual Hierarchy & Actionable Micro-Charts', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-da-4',
        moduleNumber: 4,
        title: 'Python for Exploratory Data Analysis',
        description: 'Loading CSVs and database queries into Pandas dataframes, outlier detection, statistical correlations, and Seaborn visual plots.',
        durationHours: 15,
        learningObjectives: ['Clean and impute missing data with Pandas', 'Visualize customer distributions and boxplots with Seaborn', 'Synthesize actionable insights from descriptive stats'],
        handsOnLab: 'Lab 4: Automated data profiling script generating executive HTML summary reports on product returns.',
        lessons: [
          { id: 'les-da-401', title: 'Pandas DataFrames, GroupBy & Pivot Tables', durationMinutes: 50, type: 'video' },
          { id: 'les-da-402', title: 'Visual Exploratory Analysis with Matplotlib & Seaborn', durationMinutes: 45, type: 'code-lab' },
          { id: 'les-da-403', title: 'Translating Statistical Insights into Strategic Business Decisions', durationMinutes: 40, type: 'reading' }
        ]
      }
    ],
    faqs: [
      { question: 'Do I need to be a programmer to learn Data Analytics?', answer: 'No. We start with spreadsheet data logic, build up through declarative SQL, and guide you through intuitive visual tools like Power BI and Tableau.' },
      { question: 'Will I get access to real corporate datasets?', answer: 'Yes, all case studies use anonymized enterprise datasets spanning retail, healthcare, fintech, and subscription SaaS products.' }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-data-eng',
    slug: 'data-engineering-with-python-and-pyspark',
    title: 'Data Engineering with Python, PySpark & Cloud Warehouses',
    shortDescription: 'Build resilient batch and streaming data pipelines, distributed Lakehouses with PySpark and Delta Lake, and automate workflows with Airflow.',
    longDescription: 'Master the engineering backbone of modern AI and analytics. You will learn distributed computing fundamentals with Apache Spark, data modeling on Snowflake and BigQuery, orchestrating multi-stage DAGs in Apache Airflow, streaming event data with Apache Kafka, and managing data quality with dbt.',
    category: 'Data Engineering',
    level: 'Advanced',
    durationWeeks: 14,
    totalHours: 105,
    deliveryMode: 'Live Online',
    technologiesCovered: ['Python', 'Apache Spark', 'PySpark', 'Delta Lake', 'Apache Airflow', 'Kafka', 'PostgreSQL', 'Snowflake', 'Docker'],
    publishedFee: {
      totalAmount: 45000,
      currency: 'INR',
      emiStartsAt: 3750,
      scholarshipAvailable: true
    },
    rating: 4.92,
    reviewCount: 88,
    enrolledStudentsCount: 240,
    badge: 'High Salary Potential',
    highlights: [
      'Distributed computing on real Spark clusters with multi-node setups',
      'Automated pipeline orchestration using Apache Airflow Directed Acyclic Graphs',
      'ACID transactions on data lakes with Delta Lake / Apache Iceberg',
      'Continuous data quality testing with dbt and Great Expectations'
    ],
    prerequisites: ['Proficiency in Python programming (OOP, file I/O)', 'Intermediate SQL knowledge (joins, aggregations)'],
    targetAudience: ['Software engineers transitioning into data platform engineering', 'ETL/BI developers upgrading from legacy tools to distributed Big Data', 'CS students aspiring to work at scale with Big Data technologies'],
    learningOutcomes: [
      'Construct high-throughput PySpark transformations with proper partitioning and broadcast joins',
      'Architect Lakehouse storage layers with ACID transactions and schema evolution',
      'Author robust Airflow DAGs with retries, SLA alerts, and dependency scheduling',
      'Stream real-time clickstream events into storage using Apache Kafka'
    ],
    capstoneProject: {
      title: 'Scalable Fintech Fraud Detection Lakehouse Pipeline',
      description: 'Ingest 10M+ simulated credit transactions per day via Kafka, transform and sanitize them with distributed PySpark, store them in Delta Lake tables, and feed low-latency feature stores.',
      deliverables: [
        'Real-time Kafka producer and consumer streaming application',
        'PySpark transformation pipeline enforcing medallion architecture (Bronze, Silver, Gold)',
        'Airflow orchestration DAG with slack notifications on pipeline degradation',
        'dbt model testing dimensional constraints and fresh record thresholds'
      ],
      techStack: ['Python', 'PySpark', 'Delta Lake', 'Apache Airflow', 'Kafka', 'Docker', 'PostgreSQL']
    },
    instructor: {
      name: 'Karthik Ramanathan',
      title: 'Staff Data Platform Engineer',
      experience: '11+ Years in Data Infrastructure',
      companyBackground: 'Ex-Walmart Global Tech, Apache Spark Contributor',
      avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 25, 2026', schedule: 'Tue & Thu (8:00 PM - 10:30 PM)', seatsLeft: 7, mode: 'Live Online' },
      { startDate: 'Dec 10, 2026', schedule: 'Sat & Sun (11:00 AM - 2:00 PM)', seatsLeft: 11, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-de-1',
        moduleNumber: 1,
        title: 'Distributed Computing Core & PySpark RDDs / DataFrames',
        description: 'Spark execution model, cluster managers, transformations vs actions, catalyst optimizer, and broadcast joins.',
        durationHours: 25,
        learningObjectives: ['Understand Spark memory management and shuffle partitions', 'Optimize join strategies using broadcast hints', 'Diagnose data skew in Spark UI'],
        handsOnLab: 'Lab 1: Processing a 50GB dataset using distributed PySpark and optimizing shuffle partition parameters.',
        lessons: [
          { id: 'les-de-101', title: 'Spark Architecture: Driver, Executors & Cluster Managers', durationMinutes: 50, type: 'video' },
          { id: 'les-de-102', title: 'PySpark DataFrame API & Vectorized Operations', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-de-103', title: 'Handling Data Skew, Repartitioning vs Coalesce', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-de-2',
        moduleNumber: 2,
        title: 'Lakehouse Architectures with Delta Lake & Parquet',
        description: 'Columnar storage formats, ACID transactions, transaction log mechanism, time travel, and upsert/merge logic.',
        durationHours: 25,
        learningObjectives: ['Implement Medallion Architecture (Bronze, Silver, Gold)', 'Perform schema evolution without breaking downstream readers', 'Execute Time-Travel queries to restore corrupted states'],
        handsOnLab: 'Lab 2: Building an incremental CDC (Change Data Capture) pipeline with Delta Lake MERGE operations.',
        lessons: [
          { id: 'les-de-201', title: 'Parquet Internals, Snappy Compression & Dictionary Encoding', durationMinutes: 45, type: 'video' },
          { id: 'les-de-202', title: 'Delta Lake ACID Protocols & Transaction Logs', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-de-203', title: 'Implementing Medallion Storage Patterns in Python', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-de-3',
        moduleNumber: 3,
        title: 'Workflow Orchestration with Apache Airflow',
        description: 'DAG definition, Operators, Sensors, XComs, TaskFlow API, dynamic task generation, and failure alerting.',
        durationHours: 30,
        learningObjectives: ['Write production-ready Python Airflow DAGs', 'Implement sensors for upstream data readiness verification', 'Manage backfills and idempotent task re-runs'],
        handsOnLab: 'Lab 3: Orchestrating an end-to-end ingestion, validation, and notification DAG running inside Docker.',
        lessons: [
          { id: 'les-de-301', title: 'Airflow Architecture: Scheduler, Webserver & Celery Workers', durationMinutes: 50, type: 'video' },
          { id: 'les-de-302', title: 'Authoring DAGs with the Modern TaskFlow API', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-de-303', title: 'Idempotency, Backfills & Production Alerting Mechanisms', durationMinutes: 45, type: 'quiz' }
        ]
      },
      {
        id: 'mod-de-4',
        moduleNumber: 4,
        title: 'Streaming Architectures with Apache Kafka',
        description: 'Publish-subscribe messaging, topics, partitions, consumer groups, retention policies, and Spark Structured Streaming.',
        durationHours: 25,
        learningObjectives: ['Set up Kafka brokers and multi-partition topics', 'Write real-time producers and consumer groups in Python', 'Process continuous streams with Spark Structured Streaming watermarks'],
        handsOnLab: 'Lab 4: Streaming clickstream analytics with tumbling window aggregations and Kafka sink.',
        lessons: [
          { id: 'les-de-401', title: 'Kafka Core: Topics, Partitions & Offset Commit Semantics', durationMinutes: 50, type: 'video' },
          { id: 'les-de-402', title: 'Python Kafka Producers & Consumer Groups with Retries', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-de-403', title: 'Spark Structured Streaming with Watermarking & State Stores', durationMinutes: 60, type: 'code-lab' }
        ]
      }
    ],
    faqs: [
      { question: 'Do we run Spark locally or in the cloud?', answer: 'You start with local multi-worker containerized setups to understand internals, and progress to cloud-managed clusters.' },
      { question: 'How is this different from a Data Science course?', answer: 'Data engineering focuses on pipeline reliability, streaming infrastructure, big data scalability, data modeling, and automated operations rather than statistical model training.' }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-fullstack',
    slug: 'full-stack-web-development-mern-and-nextjs',
    title: 'Full-Stack Web Development with React, Node.js & TypeScript',
    shortDescription: 'Build scalable modern web applications from scratch with React 19, TypeScript, Next.js, Node.js, Express, PostgreSQL, and Tailwind CSS.',
    longDescription: 'An industry-calibrated full-stack engineering boot camp. Learn modern front-end architectures with React, component design systems, state management, server-side rendering, and responsive styling. Pair that with enterprise backend development: RESTful and GraphQL APIs, JWT authentication, PostgreSQL with Prisma ORM, automated unit tests, and CI/CD deployment.',
    category: 'Full-Stack Development',
    level: 'Beginner',
    durationWeeks: 16,
    totalHours: 130,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker', 'Git'],
    publishedFee: {
      totalAmount: 42000,
      currency: 'INR',
      emiStartsAt: 3500,
      scholarshipAvailable: true
    },
    rating: 4.94,
    reviewCount: 310,
    enrolledStudentsCount: 650,
    badge: 'Most Popular',
    highlights: [
      'End-to-end full-stack projects built completely in TypeScript',
      'Database modeling with PostgreSQL, migrations, and Prisma ORM',
      'Production deployment workflows to AWS/Vercel with CI/CD GitHub Actions',
      'Comprehensive preparation for frontend and backend coding interviews'
    ],
    prerequisites: ['Basic familiarity with HTML, CSS, or any introductory programming logic'],
    targetAudience: ['College students seeking high-growth software engineering placements', 'Self-taught coders wanting structured production-grade practices', 'Backend or frontend developers aiming for true full-stack versatility'],
    learningOutcomes: [
      'Architect modular, accessible React interfaces with TypeScript and Tailwind CSS',
      'Build secure RESTful APIs with Express, JWT authentication, and rate limiting',
      'Design normalized PostgreSQL database schemas and execute queries via Prisma ORM',
      'Deploy full-stack applications with Docker, Nginx, and cloud platforms'
    ],
    capstoneProject: {
      title: 'Real-Time Collaborative Project Management & Issue Tracking SaaS',
      description: 'Build a production-ready Jira-like workspace with kanban boards, real-time WebSocket updates, multi-tenant authentication, role-based permissions, file attachments, and audit logs.',
      deliverables: [
        'Modern responsive UI with drag-and-drop kanban task cards',
        'Secure Express/TypeScript backend with refresh token rotation and RBAC',
        'PostgreSQL relational schema managed via Prisma migrations',
        'Automated CI/CD pipeline running unit tests on every pull request'
      ],
      techStack: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'Docker']
    },
    instructor: {
      name: 'Pooja Kashyap',
      title: 'Senior Staff Frontend Architect',
      experience: '8+ Years Full-Stack Engineering',
      companyBackground: 'Ex-Zomato, Frontend Lead & Open Source Maintainer',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 12, 2026', schedule: 'Mon to Fri (10:00 AM - 12:30 PM)', seatsLeft: 4, mode: 'Hybrid (Classroom + Online)' },
      { startDate: 'Dec 01, 2026', schedule: 'Sat & Sun (10:00 AM - 1:30 PM)', seatsLeft: 15, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-fs-1',
        moduleNumber: 1,
        title: 'Modern TypeScript, Clean DOM & Tailwind CSS Design Systems',
        description: 'Strict TypeScript typing, generics, utility types, modern CSS grid and flexbox, accessible component architectures, and Tailwind.',
        durationHours: 30,
        learningObjectives: ['Write type-safe TypeScript code without `any` escapes', 'Build responsive mobile-first layouts with Tailwind CSS', 'Implement accessible keyboard navigation and ARIA landmarks'],
        handsOnLab: 'Lab 1: Creating a reusable design system component library with buttons, dialogs, inputs, and dark mode.',
        lessons: [
          { id: 'les-fs-101', title: 'TypeScript Core: Interfaces, Generics & Discriminated Unions', durationMinutes: 50, type: 'video' },
          { id: 'les-fs-102', title: 'Tailwind CSS Design Systems & Layout Architecture', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-fs-103', title: 'Semantic HTML, Accessibility Standards & Focus Management', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-fs-2',
        moduleNumber: 2,
        title: 'React Architecture: Hooks, State & Component Patterns',
        description: 'React lifecycle, custom hooks, context API, component composition, optimistic updates, and performance optimization.',
        durationHours: 35,
        learningObjectives: ['Architect scalable React apps with clean folder structure', 'Build custom hooks for data fetching and debounce logic', 'Optimize renders using memo, useMemo, and useCallback'],
        handsOnLab: 'Lab 2: Interactive e-commerce catalog with search debouncing, URL query param syncing, and cart persistence.',
        lessons: [
          { id: 'les-fs-201', title: 'Modern React Fundamentals & Virtual DOM Reconciliation', durationMinutes: 50, type: 'video' },
          { id: 'les-fs-202', title: 'State Management Patterns: Context, Reducers & Custom Hooks', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-fs-203', title: 'Client-Side Routing & Protected Route Guards with React Router', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-fs-3',
        moduleNumber: 3,
        title: 'Backend Engineering: Node.js, Express & REST APIs',
        description: 'Event loop, asynchronous I/O, Express middleware, authentication with JWT and bcrypt, input validation with Zod, and error handling.',
        durationHours: 35,
        learningObjectives: ['Construct modular REST APIs with controllers and service layers', 'Secure authentication with HTTP-only cookies and JWTs', 'Validate all request bodies with Zod schemas'],
        handsOnLab: 'Lab 3: Building a complete authentication microservice with password reset tokens and email verification.',
        lessons: [
          { id: 'les-fs-301', title: 'Node.js Internals: Event Loop & Asynchronous Non-blocking I/O', durationMinutes: 45, type: 'video' },
          { id: 'les-fs-302', title: 'Express Routing, Middleware Architecture & Centralized Error Handling', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-fs-303', title: 'Authentication Patterns: JWTs, Refresh Tokens & Password Hashing', durationMinutes: 55, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-fs-4',
        moduleNumber: 4,
        title: 'Relational Database Engineering with PostgreSQL & Prisma',
        description: 'Relational modeling, migrations, one-to-many and many-to-many relations, query optimization, indexing, and Prisma transactions.',
        durationHours: 30,
        learningObjectives: ['Model complex relational database schemas', 'Write safe Prisma database queries with pagination and filtering', 'Deploy full-stack services with Docker and environment management'],
        handsOnLab: 'Lab 4: Database migration pipeline with seed data and multi-tenant isolation.',
        lessons: [
          { id: 'les-fs-401', title: 'Relational Database Design & Normalization Rules', durationMinutes: 50, type: 'video' },
          { id: 'les-fs-402', title: 'Prisma Schema Authoring, Migrations & Relationship Queries', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-fs-403', title: 'Dockerizing Full-Stack Apps & Continuous Deployment', durationMinutes: 50, type: 'code-lab' }
        ]
      }
    ],
    faqs: [
      { question: 'Why TypeScript instead of vanilla JavaScript?', answer: 'Top technology companies almost exclusively hire full-stack developers proficient in TypeScript. Learning it from day one makes you vastly more competitive.' },
      { question: 'Is the course project hosted live on the internet?', answer: 'Yes! Every student deploys their capstone to a custom public URL with a database so hiring managers can test the live application directly.' }
    ],
    isFeatured: true,
    isPublished: true
  },
  {
    id: 'course-sql-databases',
    slug: 'sql-and-relational-database-mastery',
    title: 'SQL & Relational Database Mastery (PostgreSQL & MySQL)',
    shortDescription: 'Master relational schema design, query optimization, indexing strategies, transactions, ACID properties, and database administration.',
    longDescription: 'SQL is the universal language of data and backend engineering. This focused program transforms you into a high-proficiency database specialist: from foundational CRUD operations to complex nested subqueries, CTEs, window functions, query execution plan analysis (EXPLAIN ANALYZE), B-Tree indexing strategies, and database concurrency controls.',
    category: 'Databases & SQL',
    level: 'Beginner',
    durationWeeks: 6,
    totalHours: 45,
    deliveryMode: 'Live Online',
    technologiesCovered: ['SQL', 'PostgreSQL', 'MySQL', 'DBeaver', 'pgAdmin', 'Database Indexing', 'EXPLAIN ANALYZE'],
    publishedFee: {
      totalAmount: 18000,
      currency: 'INR',
      emiStartsAt: 1500,
      scholarshipAvailable: false
    },
    rating: 4.9,
    reviewCount: 165,
    enrolledStudentsCount: 410,
    badge: 'Essential Tech Skill',
    highlights: [
      'Over 100+ graded query challenges across 5 industry database schemas',
      'Query optimization lab using EXPLAIN ANALYZE to reduce query runtimes by 90%',
      'Concurrency, isolation levels, and row-level locking deep dive',
      'Real interview test simulation covering challenging multi-step SQL queries'
    ],
    prerequisites: ['No prerequisites. Suitable for absolute beginners to databases.'],
    targetAudience: ['Anyone preparing for software or data technical interviews', 'QA engineers transitioning to database testing', 'Product managers and analysts needing direct data access'],
    learningOutcomes: [
      'Write multi-table joins, subqueries, and common table expressions (CTEs) effortlessly',
      'Calculate moving metrics, rank orders, and cohorts using window functions',
      'Optimize slow queries by interpreting execution plans and applying targeted indexes',
      'Design third-normal-form (3NF) database schemas with relational integrity constraints'
    ],
    capstoneProject: {
      title: 'High-Volume Streaming Music Platform Database Architecture & Tuning',
      description: 'Design and optimize a relational database for a Spotify-scale music streaming service supporting millions of plays, artist payouts, playlists, and user subscriptions.',
      deliverables: [
        'Complete Entity-Relationship Diagram (ERD) with relational constraints',
        'DDL scripts with table partitioning and foreign key cascades',
        'Benchmark test suite demonstrating query optimization with indexes and query rewrites',
        'Automated stored procedures for calculating monthly royalty distribution payouts'
      ],
      techStack: ['PostgreSQL', 'pgAdmin', 'DBeaver', 'SQL', 'EXPLAIN ANALYZE']
    },
    instructor: {
      name: 'Suresh Nambiar',
      title: 'Principal Database Architect & DBA',
      experience: '14+ Years in Database Systems',
      companyBackground: 'Ex-Oracle Systems Engineer, PostgreSQL Consultant',
      avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 22, 2026', schedule: 'Tue & Thu (7:00 PM - 8:30 PM)', seatsLeft: 9, mode: 'Live Online' },
      { startDate: 'Dec 08, 2026', schedule: 'Sat & Sun (4:00 PM - 6:00 PM)', seatsLeft: 18, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-sql-1',
        moduleNumber: 1,
        title: 'Relational Theory, Schema Design & Advanced Joins',
        description: 'First to third normal form, entity relationships, primary & foreign keys, INNER, LEFT, RIGHT, FULL OUTER, and CROSS joins.',
        durationHours: 15,
        learningObjectives: ['Normalize schemas to eliminate update anomalies', 'Construct multi-table queries joining 5+ tables', 'Handle NULL values safely with COALESCE and NULLIF'],
        handsOnLab: 'Lab 1: Designing an e-commerce order management schema from a raw denormalized invoice spreadsheet.',
        lessons: [
          { id: 'les-sql-101', title: 'Relational Modeling Principles & Normalization Rules', durationMinutes: 45, type: 'video' },
          { id: 'les-sql-102', title: 'Comprehensive Join Mechanics & Venn Logic', durationMinutes: 50, type: 'code-lab' },
          { id: 'les-sql-103', title: 'Aggregations, Grouping Sets & Rollup Operations', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-sql-2',
        moduleNumber: 2,
        title: 'Complex Subqueries, CTEs & Analytic Window Functions',
        description: 'Correlated vs uncorrelated subqueries, recursive CTEs, ranking (DENSE_RANK, NTILE), and value functions (FIRST_VALUE, NTH_VALUE).',
        durationHours: 15,
        learningObjectives: ['Deconstruct complex business questions into readable CTE steps', 'Calculate running balances and year-to-date accumulators', 'Query hierarchical organizational trees with recursive CTEs'],
        handsOnLab: 'Lab 2: Solving complex fraud patterns by analyzing user transaction sequences with LAG and LEAD.',
        lessons: [
          { id: 'les-sql-201', title: 'Common Table Expressions (CTEs) & Readability Best Practices', durationMinutes: 45, type: 'video' },
          { id: 'les-sql-202', title: 'Mastering Window Partitions and Frame Specifications', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-sql-203', title: 'Recursive SQL for Graph and Org-Chart Traversals', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-sql-3',
        moduleNumber: 3,
        title: 'Performance Optimization, Indexing & Concurrency',
        description: 'B-Tree, Hash, and GIN indexes, query planner mechanics, EXPLAIN ANALYZE interpretation, transaction isolation levels, and deadlock avoidance.',
        durationHours: 15,
        learningObjectives: ['Interpret Seq Scans vs Index Scans in EXPLAIN output', 'Design composite indexes matching WHERE and ORDER BY clauses', 'Manage ACID transactions and row-level locks safely'],
        handsOnLab: 'Lab 3: Refactoring a slow 4.5-second reporting query down to 42 milliseconds using targeted composite indexes.',
        lessons: [
          { id: 'les-sql-301', title: 'B-Tree Index Internals & Composite Index Column Ordering', durationMinutes: 50, type: 'video' },
          { id: 'les-sql-302', title: 'Analyzing Query Plans with EXPLAIN (ANALYZE, BUFFERS)', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-sql-303', title: 'Transactions, Isolation Levels (Read Committed vs Serializable)', durationMinutes: 45, type: 'quiz' }
        ]
      }
    ],
    faqs: [
      { question: 'Does this course teach MySQL or PostgreSQL?', answer: 'We use PostgreSQL as the primary production engine, while highlighting cross-platform compatibility differences with MySQL and Oracle.' },
      { question: 'Will I be able to practice queries in the browser?', answer: 'Yes! We provide interactive browser-based query playgrounds as well as guidance on installing pgAdmin and DBeaver locally.' }
    ],
    isFeatured: false,
    isPublished: true
  },
  {
    id: 'course-python-programming',
    slug: 'python-programming-for-technology-careers',
    title: 'Python Programming from Fundamentals to Industrial Automation',
    shortDescription: 'Build real-world software, automate repetitive tasks, scrape web portals, and master OOP and data structures with modern Python 3.12+.',
    longDescription: 'The definitive on-ramp to software engineering, data science, and cybersecurity. Starting from variables, control structures, and functional patterns, you will progress into object-oriented architecture, exception handling, working with REST APIs, multi-threading, file parsing, and web scraping with BeautifulSoup and Playwright.',
    category: 'Programming',
    level: 'Beginner',
    durationWeeks: 8,
    totalHours: 60,
    deliveryMode: 'Hybrid (Classroom + Online)',
    technologiesCovered: ['Python 3.12', 'OOP', 'Requests', 'BeautifulSoup', 'Playwright', 'Git', 'Pytest', 'Virtualenv'],
    publishedFee: {
      totalAmount: 22000,
      currency: 'INR',
      emiStartsAt: 1850,
      scholarshipAvailable: false
    },
    rating: 4.87,
    reviewCount: 185,
    enrolledStudentsCount: 490,
    badge: 'Foundational',
    highlights: [
      '50+ Coding drills focused on clean, idiomatic Pythonic style',
      'Automated testing practices with Pytest from Module 3 onwards',
      'Web scraping project handling dynamic JavaScript hydration with Playwright',
      'Direct preparation for college technical assessments and coding rounds'
    ],
    prerequisites: ['No prior programming background required. Absolute beginners welcome.'],
    targetAudience: ['First-year & second-year college students building solid software foundations', 'Non-IT graduates transitioning into technology roles', 'Professionals seeking to automate daily repetitive manual tasks'],
    learningOutcomes: [
      'Write clean, modular, and reusable Python scripts following PEP 8 standards',
      'Implement Object-Oriented Programming (OOP) classes, inheritance, and polymorphism',
      'Automate data scraping from interactive websites and parse JSON/CSV files',
      'Write automated unit test suites using the Pytest framework'
    ],
    capstoneProject: {
      title: 'Automated Multi-Source Tech Job Aggregator & Salary Intelligence Bot',
      description: 'Develop an automated Python bot that scrapes software engineering job listings across multiple career boards, cleans the text, extracts required technologies, and emails weekly customized summary digests.',
      deliverables: [
        'Robust multi-threaded scraper with rate-limiting and rotating user agents',
        'Data cleaning and regex extractor for tech skills (e.g. React, Python, AWS)',
        'CSV/SQLite local database storage with automatic deduplication',
        'HTML email dispatch service triggered via GitHub Actions cron schedule'
      ],
      techStack: ['Python', 'Playwright', 'BeautifulSoup', 'SQLite', 'Pytest', 'Git']
    },
    instructor: {
      name: 'Aditi Sharma',
      title: 'Senior Python Developer & Educator',
      experience: '7+ Years Development Experience',
      companyBackground: 'Python Software Foundation Member, Tech Speaker',
      avatarUrl: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 17, 2026', schedule: 'Mon, Wed, Fri (6:00 PM - 7:30 PM)', seatsLeft: 8, mode: 'Live Online' },
      { startDate: 'Dec 06, 2026', schedule: 'Sat & Sun (11:00 AM - 1:00 PM)', seatsLeft: 20, mode: 'Hybrid (Classroom + Online)' }
    ],
    modules: [
      {
        id: 'mod-py-1',
        moduleNumber: 1,
        title: 'Core Syntax, Data Structures & Pythonic Idioms',
        description: 'Variables, dynamic typing, lists, tuples, dictionaries, sets, comprehensions, functions, and args/kwargs.',
        durationHours: 20,
        learningObjectives: ['Utilize list and dictionary comprehensions for clean data filtering', 'Structure functions with default parameters and type hints', 'Handle edge cases with try-except blocks'],
        handsOnLab: 'Lab 1: Building an interactive command-line personal finance and expense ledger with CSV export.',
        lessons: [
          { id: 'les-py-101', title: 'Python Syntax, Memory References & Variable Scope', durationMinutes: 45, type: 'video' },
          { id: 'les-py-102', title: 'Mastering Collections: Lists, Tuples, Dicts, Sets & Comprehensions', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-py-103', title: 'Functional Concepts: Lambdas, Map, Filter & Generator Expressions', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-py-2',
        moduleNumber: 2,
        title: 'Object-Oriented Programming & Modular Architecture',
        description: 'Classes, instance vs class attributes, encapsulation, inheritance, magic dunder methods, and package imports.',
        durationHours: 20,
        learningObjectives: ['Design maintainable class hierarchies', 'Implement dunder methods (__str__, __repr__, __eq__)', 'Organize code into clean modular packages with virtual environments'],
        handsOnLab: 'Lab 2: Designing an OOP library management system with book reservation rules and loan tracking.',
        lessons: [
          { id: 'les-py-201', title: 'OOP Principles: Classes, Objects & The `self` Keyword', durationMinutes: 50, type: 'video' },
          { id: 'les-py-202', title: 'Inheritance, Abstract Base Classes & Polymorphism', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-py-203', title: 'Dunder Methods, Context Managers & Custom Exceptions', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-py-3',
        moduleNumber: 3,
        title: 'Web Scraping, API Integration & Automated Testing',
        description: 'HTTP requests with `requests` and `httpx`, DOM parsing with BeautifulSoup, headless browser automation with Playwright, and Pytest.',
        durationHours: 20,
        learningObjectives: ['Interact with third-party JSON REST APIs', 'Scrape JavaScript-rendered web pages reliably', 'Write automated unit tests using Pytest fixtures and mocks'],
        handsOnLab: 'Lab 3: Scraping live stock prices from a financial news portal and generating an alert when a threshold triggers.',
        lessons: [
          { id: 'les-py-301', title: 'REST API Consumption & JSON Handling in Python', durationMinutes: 45, type: 'video' },
          { id: 'les-py-302', title: 'Web Scraping with BeautifulSoup & Headless Playwright', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-py-303', title: 'Unit Testing with Pytest: Assertions, Fixtures & Parametrization', durationMinutes: 50, type: 'quiz' }
        ]
      }
    ],
    faqs: [
      { question: 'Will I be able to build projects on my own after this?', answer: 'Yes! The curriculum culminates in building a fully functional web scraper and automated job alert system for your portfolio.' },
      { question: 'Is Python suitable for someone with no math background?', answer: 'Absolutely. Python is famous for its readable syntax that reads like standard English, making it the ideal first programming language.' }
    ],
    isFeatured: false,
    isPublished: true
  },
  {
    id: 'course-cloud-devops',
    slug: 'cloud-computing-and-devops-engineering',
    title: 'Cloud Computing & DevOps Engineering (AWS, Docker & Kubernetes)',
    shortDescription: 'Master modern cloud infrastructure: Docker containers, Kubernetes orchestration, AWS cloud architectures, Terraform IaC, and CI/CD pipelines.',
    longDescription: 'High-availability software requires modern DevOps practices. This hands-on specialization teaches you to containerize microservices with Docker, manage container clusters with Kubernetes, provision cloud infrastructure declaratively using Terraform, configure secure VPC networks on AWS, and establish automated deployment pipelines with GitHub Actions.',
    category: 'Cloud & DevOps',
    level: 'Intermediate',
    durationWeeks: 14,
    totalHours: 100,
    deliveryMode: 'Live Online',
    technologiesCovered: ['AWS (EC2, S3, RDS, VPC)', 'Docker', 'Kubernetes (K8s)', 'Terraform', 'GitHub Actions', 'Linux / Bash', 'Prometheus', 'Grafana'],
    publishedFee: {
      totalAmount: 46000,
      currency: 'INR',
      emiStartsAt: 3800,
      scholarshipAvailable: true
    },
    rating: 4.91,
    reviewCount: 112,
    enrolledStudentsCount: 260,
    badge: 'Industry Essential',
    highlights: [
      'Production Kubernetes cluster management with real ingress controllers and services',
      'Infrastructure as Code (IaC) with Terraform for reproducible cloud deployments',
      'Zero-downtime CI/CD deployment pipelines using GitHub Actions',
      'Cloud monitoring and alerting setup with Prometheus and Grafana dashboards'
    ],
    prerequisites: ['Basic Linux command-line familiarity and general understanding of client-server web applications'],
    targetAudience: ['System administrators upgrading to cloud infrastructure engineering', 'Software developers seeking mastery over deployments and operations', 'Tech enthusiasts aiming for DevOps, SRE, or Cloud Architect roles'],
    learningOutcomes: [
      'Write optimized multi-stage Dockerfiles and compose multi-container stacks',
      'Deploy and scale resilient microservices across Kubernetes pods, services, and ingress',
      'Provision modular AWS cloud infrastructure (VPC, subnets, EC2, RDS) using Terraform',
      'Build automated CI/CD pipelines with linting, testing, image building, and deployment'
    ],
    capstoneProject: {
      title: 'Automated Multi-Region Microservices Cloud Infrastructure & CI/CD Pipeline',
      description: 'Architect a fault-tolerant AWS environment using Terraform, deploy a three-tier web application into an Amazon EKS Kubernetes cluster, configure automatic horizontal pod autoscaling (HPA), and integrate automated GitHub Actions deployment pipelines.',
      deliverables: [
        'Modular Terraform repository provisioning VPC, subnets, NAT gateways, and EKS',
        'Production Kubernetes manifest bundle (Deployments, Services, ConfigMaps, Ingress)',
        'GitHub Actions pipeline building Docker images and triggering GitOps rollouts',
        'Grafana dashboard monitoring CPU/memory metrics and HTTP 5xx error alerts'
      ],
      techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Prometheus', 'Grafana']
    },
    instructor: {
      name: 'Tanmay Bannerjee',
      title: 'Senior DevOps Architect & SRE Lead',
      experience: '12+ Years Cloud Infrastructure',
      companyBackground: 'AWS Certified Solutions Architect Professional, Ex-Cisco',
      avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80'
    },
    upcomingBatches: [
      { startDate: 'Nov 28, 2026', schedule: 'Tue & Thu (7:30 PM - 10:00 PM)', seatsLeft: 6, mode: 'Live Online' },
      { startDate: 'Dec 12, 2026', schedule: 'Sat & Sun (9:00 AM - 12:00 PM)', seatsLeft: 12, mode: 'Live Online' }
    ],
    modules: [
      {
        id: 'mod-cloud-1',
        moduleNumber: 1,
        title: 'Linux Systems Administration & Containerization with Docker',
        description: 'Bash scripting, process isolation, namespaces, cgroups, writing lean multi-stage Dockerfiles, and Docker Compose.',
        durationHours: 25,
        learningObjectives: ['Automate administrative tasks with Bash scripts', 'Build minimal container images under 50MB using multi-stage builds', 'Network multi-container services with Docker Compose'],
        handsOnLab: 'Lab 1: Containerizing a full-stack React and Node application with PostgreSQL database using Docker Compose.',
        lessons: [
          { id: 'les-cloud-101', title: 'Linux Fundamentals: File Permissions, Systemd & Networking', durationMinutes: 45, type: 'video' },
          { id: 'les-cloud-102', title: 'Docker Internals: Layers, Storage Drivers & Image Optimization', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-cloud-103', title: 'Multi-Stage Dockerfiles & Compose Orchestration', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-cloud-2',
        moduleNumber: 2,
        title: 'Container Orchestration with Kubernetes (K8s)',
        description: 'Control plane, worker nodes, Pods, Deployments, ReplicaSets, Services (ClusterIP/NodePort/LoadBalancer), and Ingress.',
        durationHours: 30,
        learningObjectives: ['Deploy applications declaratively via Kubernetes YAML manifests', 'Configure secrets and environment configuration via ConfigMaps', 'Implement rolling updates and zero-downtime rollbacks'],
        handsOnLab: 'Lab 2: Deploying a scalable microservice with horizontal pod autoscaler (HPA) responding to simulated traffic spikes.',
        lessons: [
          { id: 'les-cloud-201', title: 'Kubernetes Architecture: API Server, etcd, Kubelet & Kube-Proxy', durationMinutes: 50, type: 'video' },
          { id: 'les-cloud-202', title: 'Deployments, Services & Ingress Controllers', durationMinutes: 60, type: 'code-lab' },
          { id: 'les-cloud-203', title: 'Storage in K8s: PersistentVolumes, Claims & StatefulSets', durationMinutes: 50, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-cloud-3',
        moduleNumber: 3,
        title: 'AWS Cloud Architecture & Infrastructure as Code with Terraform',
        description: 'VPCs, public/private subnets, security groups, IAM roles, S3 buckets, and declarative infrastructure with Terraform.',
        durationHours: 25,
        learningObjectives: ['Design secure isolated cloud VPC networks', 'Write modular reusable Terraform configurations', 'Manage remote state storage and locking with S3 and DynamoDB'],
        handsOnLab: 'Lab 3: Provisioning an entire production AWS VPC with auto-scaling EC2 instances using clean Terraform modules.',
        lessons: [
          { id: 'les-cloud-301', title: 'AWS Core Networking: VPCs, Subnets, Route Tables & Gateways', durationMinutes: 50, type: 'video' },
          { id: 'les-cloud-302', title: 'Terraform Syntax: Providers, Resources, Variables & Outputs', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-cloud-303', title: 'Terraform State Management, Locking & Drift Detection', durationMinutes: 45, type: 'code-lab' }
        ]
      },
      {
        id: 'mod-cloud-4',
        moduleNumber: 4,
        title: 'CI/CD Automation & Cloud Observability',
        description: 'GitHub Actions workflow files, runner architecture, build artifacts, automated testing, and Prometheus/Grafana metric telemetry.',
        durationHours: 20,
        learningObjectives: ['Create automated GitHub Actions workflows triggered on commit', 'Push secured Docker images to container registries (ECR/DockerHub)', 'Configure metrics collection and latency alert rules in Grafana'],
        handsOnLab: 'Lab 4: Building a continuous deployment pipeline that automatically tests, builds, and deploys to Kubernetes on every Git push.',
        lessons: [
          { id: 'les-cloud-401', title: 'CI/CD Pipeline Design Principles & Branching Strategies', durationMinutes: 45, type: 'video' },
          { id: 'les-cloud-402', title: 'Authoring GitHub Actions Workflows for Testing & Deployment', durationMinutes: 55, type: 'code-lab' },
          { id: 'les-cloud-403', title: 'Observability: Metrics, Logs & Alerts with Prometheus/Grafana', durationMinutes: 50, type: 'quiz' }
        ]
      }
    ],
    faqs: [
      { question: 'Will I need an AWS account for this course?', answer: 'We guide you on creating an AWS Free Tier account, and provide sandbox cloud credits during intensive hands-on lab sessions.' },
      { question: 'Does this help with AWS certification?', answer: 'Yes, the curriculum strongly aligns with the objectives of AWS Certified Solutions Architect and Certified Kubernetes Administrator (CKA).' }
    ],
    isFeatured: false,
    isPublished: true
  }
];
