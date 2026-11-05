import { ShowcaseProject } from '../types';

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'proj-1',
    title: 'Autonomous Healthcare Triage & Diagnostic Imaging API',
    domain: 'AI Applications',
    difficulty: 'Advanced',
    techStack: ['PyTorch', 'Torchvision', 'FastAPI', 'Docker', 'MLflow', 'AWS S3'],
    problemStatement: 'Emergency departments face severe bottlenecks triaging acute thoracic radiographs, where delay in detecting pulmonary anomalies (e.g. pneumothorax, severe consolidation) directly degrades patient outcomes.',
    solutionArchitecture: 'A deep convolutional neural network using transfer learning (ResNet-50) fine-tuned on anonymized chest X-ray scans. Packaged into an asynchronous FastAPI microservice with automated batching, GPU inference acceleration, and telemetry tracking in MLflow.',
    expectedDeliverables: [
      'Data augmentation and class-imbalance rebalancing pipeline',
      'PyTorch model achieving 0.94+ ROC-AUC on validation split',
      'Asynchronous REST API with OpenAPI documentation and sub-80ms response time',
      'Containerized deployment manifest and automated test suite'
    ],
    industryUseCases: ['Hospital triage acceleration', 'Remote clinical diagnostic assistance', 'Radiology second-opinion workflows'],
    isStudentCapstone: false,
    previewImageUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/nexora-academy/diagnostic-imaging-api'
  },
  {
    id: 'proj-2',
    title: 'Enterprise Regulatory Contract RAG Assistant',
    domain: 'AI Applications',
    difficulty: 'Intermediate',
    techStack: ['Gemini API', 'LangChain', 'ChromaDB', 'Python', 'Streamlit', 'FastAPI'],
    problemStatement: 'Corporate legal and compliance teams spend hundreds of hours manually verifying vendor contracts against evolving data privacy and liability guidelines.',
    solutionArchitecture: 'A hybrid Retrieval-Augmented Generation (RAG) system utilizing recursive Markdown/PDF chunking, dense OpenAI/Gemini embeddings stored in ChromaDB, cross-encoder reranking, and NeMo guardrails to prevent hallucinations and cite exact paragraph coordinates.',
    expectedDeliverables: [
      'Multi-format document ingestion pipeline with table preservation',
      'Hybrid dense-sparse vector retriever with Reciprocal Rank Fusion',
      'Deterministic JSON audit output with source citation verification',
      'Interactive compliance dashboard allowing clause comparisons'
    ],
    industryUseCases: ['Fintech procurement reviews', 'HIPAA/GDPR compliance audits', 'Vendor risk assessments'],
    isStudentCapstone: false,
    previewImageUrl: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/nexora-academy/enterprise-rag-assistant'
  },
  {
    id: 'proj-3',
    title: 'Global Retail Customer Lifetime Value (CLV) & Retention BI Suite',
    domain: 'Data Analytics',
    difficulty: 'Intermediate',
    techStack: ['PostgreSQL', 'Power BI', 'DAX', 'Python', 'Pandas', 'Excel'],
    problemStatement: 'An omnichannel retailer with 2.4M transactions had poor visibility into churn rates across marketing channels and could not identify repeat high-value purchase cohorts.',
    solutionArchitecture: 'A dimensional star schema hosted on PostgreSQL feeding an automated Power BI executive dashboard with calculated DAX measures for CLV, customer acquisition cost (CAC) payback periods, and cohort retention decay curves.',
    expectedDeliverables: [
      'Normalized star-schema database with fact and dimension tables',
      'Interactive Power BI report with dynamic filtering and drill-throughs',
      'Python RFM segmentation script classifying customers into 6 actionable tiers',
      '12-page executive summary outlining recommended retention marketing campaigns'
    ],
    industryUseCases: ['E-commerce retention optimization', 'SaaS subscription health monitoring', 'Retail inventory demand forecasting'],
    isStudentCapstone: true,
    previewImageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://dashboards.nexora.academy/retail-clv'
  },
  {
    id: 'proj-4',
    title: 'B2B SaaS Revenue Operations & Churn Predictor',
    domain: 'Data Analytics',
    difficulty: 'Beginner',
    techStack: ['SQL', 'Tableau', 'Excel', 'Python', 'Seaborn'],
    problemStatement: 'SaaS account executives lacked proactive warning signals before enterprise customers canceled annual subscriptions at renewal dates.',
    solutionArchitecture: 'Aggregated product telemetry and customer support ticket logs using SQL window functions, identifying behavioral drop-offs and displaying real-time health scores in Tableau.',
    expectedDeliverables: [
      'Relational database extraction script with CTEs and window partitions',
      'Interactive Tableau workbook with renewal countdowns and health indicators',
      'Customer risk matrix alerting account managers 90 days before contract expiry'
    ],
    industryUseCases: ['B2B SaaS customer success', 'Subscription renewal management'],
    isStudentCapstone: true,
    previewImageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-5',
    title: 'Fintech Real-Time Fraud Detection Lakehouse Pipeline',
    domain: 'Data Engineering',
    difficulty: 'Advanced',
    techStack: ['PySpark', 'Delta Lake', 'Apache Kafka', 'Airflow', 'PostgreSQL', 'Docker'],
    problemStatement: 'Processing high-frequency card payment streams (10M+ events/day) with low-latency anomaly detection while maintaining ACID compliance for financial audit trails.',
    solutionArchitecture: 'Kafka message broker ingesting transaction streams, PySpark streaming job evaluating rule-based velocity limits, writing to Medallion Delta Lake architecture with automated Airflow orchestration and data quality checks.',
    expectedDeliverables: [
      'Multi-partition Kafka producer and consumer cluster configuration',
      'Distributed PySpark streaming pipeline with watermark windowing',
      'Delta Lake Bronze/Silver/Gold storage layer with time-travel query capability',
      'Airflow DAG managing daily compaction, vacuuming, and dbt data tests'
    ],
    industryUseCases: ['Payment gateway fraud screening', 'Stock market algorithmic telemetry', 'IoT sensor data streaming'],
    isStudentCapstone: false,
    previewImageUrl: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/nexora-academy/pyspark-fraud-lakehouse'
  },
  {
    id: 'proj-6',
    title: 'Automated Multi-Source E-Commerce ETL & Warehouse Sync',
    domain: 'Data Engineering',
    difficulty: 'Intermediate',
    techStack: ['Python', 'PostgreSQL', 'Apache Airflow', 'dbt', 'Docker', 'AWS S3'],
    problemStatement: 'Disparate sales data scattered across Shopify, Amazon, and ERP systems causing manual daily synchronization headaches and delayed sales reports.',
    solutionArchitecture: 'Idempotent Airflow DAG pulling API endpoints, staging JSON in S3 data lake, loading into PostgreSQL data warehouse, and running dbt transformation models with automated schema validation tests.',
    expectedDeliverables: [
      'Modular Python API extractors with exponential backoff retries',
      'Airflow TaskFlow DAG with failure alerting webhooks',
      'dbt project with documentation, lineage graph, and uniqueness constraints'
    ],
    industryUseCases: ['Omnichannel retail reporting', 'Supply chain inventory synchronization'],
    isStudentCapstone: true,
    previewImageUrl: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'proj-7',
    title: 'Real-Time Collaborative Project Management SaaS (DevSprint)',
    domain: 'Full-Stack',
    difficulty: 'Intermediate',
    techStack: ['React 19', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Tailwind CSS', 'WebSockets'],
    problemStatement: 'Remote engineering teams require seamless agile collaboration with instant board synchronization, role permissions, and sprint analytics.',
    solutionArchitecture: 'A full-stack TypeScript application featuring optimistic UI updates, drag-and-drop kanban boards, bi-directional WebSocket event sync, JWT authentication with refresh cookies, and normalized PostgreSQL persistence with Prisma ORM.',
    expectedDeliverables: [
      'Fluid React front-end with drag-and-drop task manipulation',
      'Secure Express backend with role-based access control (Admin, Member, Viewer)',
      'WebSocket server broadcasting real-time task movement across concurrent tabs',
      'Automated GitHub Actions CI/CD deploying to Docker and cloud hosting'
    ],
    industryUseCases: ['Agile software management', 'Creative agency task tracking', 'Enterprise sprint planning'],
    isStudentCapstone: true,
    previewImageUrl: 'https://images.unsplash.com/photo-1618401471353-b98aedd04e11?auto=format&fit=crop&w=800&q=80',
    demoUrl: 'https://devsprint.nexora.academy',
    githubUrl: 'https://github.com/nexora-academy/devsprint-saas'
  },
  {
    id: 'proj-8',
    title: 'High-Throughput E-Commerce Microservices Platform',
    domain: 'Full-Stack',
    difficulty: 'Advanced',
    techStack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Stripe API'],
    problemStatement: 'High-traffic flash sales crash traditional monolithic shopping carts due to database connection saturation and uncoordinated stock reservations.',
    solutionArchitecture: 'Distributed microservices architecture utilizing Redis distributed locks for inventory consistency, asynchronous payment webhooks with Stripe, server-side rendered catalog pages for SEO, and PostgreSQL database transactions.',
    expectedDeliverables: [
      'High-performance Next.js store front with server-side rendering',
      'Inventory service with atomic Redis stock reservation',
      'Secure Stripe payment processing with idempotency keys',
      'Order history dashboard with PDF invoice generation'
    ],
    industryUseCases: ['High-volume e-commerce flash sales', 'Event ticketing platforms'],
    isStudentCapstone: false,
    previewImageUrl: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/nexora-academy/microservices-ecommerce'
  }
];
