import { PrismaClient, RoleType, SkillLevel, DeliveryMode, EnquiryStatus, EnquiryType } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding Nexora Tech Academy database with demonstration data...');

  // 1. Roles
  const studentRole = await prisma.role.upsert({
    where: { name: RoleType.STUDENT },
    update: {},
    create: {
      name: RoleType.STUDENT,
      description: 'Enrolled student with classroom and lab access'
    }
  });

  const adminRole = await prisma.role.upsert({
    where: { name: RoleType.ADMIN },
    update: {},
    create: {
      name: RoleType.ADMIN,
      description: 'System and academic administrator'
    }
  });

  const instructorRole = await prisma.role.upsert({
    where: { name: RoleType.INSTRUCTOR },
    update: {},
    create: {
      name: RoleType.INSTRUCTOR,
      description: 'Course faculty and curriculum mentor'
    }
  });

  // 2. Users (Demo Student and Demo Admin)
  const passwordHash = await bcrypt.hash('DemoPassword2026!', 10);

  const demoStudent = await prisma.user.upsert({
    where: { email: 'student@nexora.academy' },
    update: {},
    create: {
      email: 'student@nexora.academy',
      passwordHash,
      fullName: 'Aarav Patel (Demo Student)',
      phone: '+91 98765 43210',
      avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
      roleId: studentRole.id,
      profile: {
        create: {
          educationLevel: 'B.Tech CS Final Year',
          collegeOrCompany: 'National Institute of Technology',
          targetCareerPath: 'Generative AI & LLM Solutions Engineer',
          streakDays: 6,
          bio: 'Aspiring AI engineer passionate about building enterprise RAG systems and autonomous agent swarms.'
        }
      }
    }
  });

  const demoAdmin = await prisma.user.upsert({
    where: { email: 'admin@nexora.academy' },
    update: {},
    create: {
      email: 'admin@nexora.academy',
      passwordHash,
      fullName: 'Dr. Vikramaditya Sen (Demo Admin)',
      phone: '+91 98765 00000',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
      roleId: adminRole.id
    }
  });

  // 3. Flagship Course: Generative AI & Enterprise Prompt Engineering
  const genAiCourse = await prisma.course.upsert({
    where: { slug: 'generative-ai-and-prompt-engineering' },
    update: {},
    create: {
      slug: 'generative-ai-and-prompt-engineering',
      title: 'Generative AI & Enterprise Prompt Engineering',
      shortDescription: 'Master Large Language Models, Retrieval-Augmented Generation (RAG), LangChain, LlamaIndex, Vector Databases, and Multi-Agent Orchestration.',
      longDescription: 'An intensive, project-first program engineered to bridge the gap between foundation models and enterprise software architectures. Master semantic search, hybrid retrieval, and multi-agent cyclic graphs with LangGraph.',
      category: 'Generative AI',
      level: SkillLevel.INTERMEDIATE,
      durationWeeks: 10,
      totalHours: 75,
      deliveryMode: DeliveryMode.LIVE_ONLINE,
      technologies: ['Gemini API', 'OpenAI API', 'LangChain', 'LlamaIndex', 'Pinecone', 'ChromaDB', 'Python', 'FastAPI'],
      feeTotal: 36000.00,
      feeCurrency: 'INR',
      emiStartsAt: 3000.00,
      isScholarshipAvail: true,
      rating: 4.95,
      reviewCount: 98,
      enrolledCount: 290,
      badge: 'High Industry Demand',
      highlights: [
        'Production RAG system development with hybrid search & rerankers',
        'Prompt evaluation metrics, token optimization, and hallucination reduction',
        'Multi-agent autonomous systems using LangGraph',
        'Industry-grade security: prompt injection defenses & guardrails'
      ],
      prerequisites: ['Basic Python familiarity (functions, dictionaries, requests)'],
      targetAudience: ['Software engineers building AI-driven features', 'Data scientists upgrading to modern LLM application stacks'],
      learningOutcomes: [
        'Master prompt engineering patterns: Chain-of-Thought and ReAct',
        'Build end-to-end RAG systems using vector databases and context chunking',
        'Implement guardrails against prompt injection and data exfiltration'
      ],
      capstoneTitle: 'Enterprise Regulatory Contract RAG Assistant',
      capstoneDesc: 'Design and deploy an intelligent legal question-answering agent capable of ingesting complex PDF contracts, citing exact clauses, and enforcing anti-hallucination guardrails.',
      capstoneTechStack: ['Python', 'LangChain', 'ChromaDB', 'Gemini Pro API', 'FastAPI', 'Docker'],
      instructorName: 'Ananya Deshmukh',
      instructorTitle: 'AI Solutions Architect & LLM Engineer',
      instructorBio: 'Author of "Building Enterprise RAG", Ex-ThoughtWorks Principal Consultant.',
      instructorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
      isFeatured: true,
      isPublished: true,
      modules: {
        create: [
          {
            moduleNumber: 1,
            title: 'LLM Foundations & Advanced Prompt Engineering',
            description: 'Transformer architectures, tokenization mechanisms, few-shot prompting, and structured output formatting.',
            durationHours: 15,
            learningObjectives: ['Control model hallucination through prompt constraints', 'Enforce deterministic JSON schemas'],
            handsOnLab: 'Lab 1: Building a deterministic structured output extractor for unstructured financial receipts.',
            lessons: {
              create: [
                {
                  lessonNumber: 1,
                  title: 'Attention Mechanisms & Generative Architecture Fundamentals',
                  durationMinutes: 45,
                  type: 'VIDEO',
                  codeSnippet: '# Attention calculation demonstration in Python'
                },
                {
                  lessonNumber: 2,
                  title: 'System Prompt Architecture & Few-Shot Demonstration Design',
                  durationMinutes: 50,
                  type: 'CODE_LAB',
                  codeSnippet: '# Few-shot prompt builder with Gemini API'
                }
              ]
            }
          },
          {
            moduleNumber: 2,
            title: 'Vector Embeddings, Semantic Search & Chunking Strategies',
            description: 'High-dimensional embeddings, similarity metrics, recursive document chunking, and metadata filtering.',
            durationHours: 20,
            learningObjectives: ['Select and evaluate dense embedding models', 'Design context-preserving chunking strategies'],
            handsOnLab: 'Lab 2: Comparative benchmark of chunking strategies across 50-page complex PDF tables and paragraphs.',
            lessons: {
              create: [
                {
                  lessonNumber: 1,
                  title: 'Semantic Embeddings Math & Dimensionality',
                  durationMinutes: 40,
                  type: 'VIDEO'
                },
                {
                  lessonNumber: 2,
                  title: 'Vector Database Indexing & Filtering with Pinecone/Chroma',
                  durationMinutes: 50,
                  type: 'CODE_LAB'
                }
              ]
            }
          }
        ]
      }
    }
  });

  // 4. Sample Enquiries
  await prisma.enquiry.createMany({
    data: [
      {
        fullName: 'Kunal Singhania',
        email: 'kunal.s@example.com',
        phone: '+91 98200 11223',
        courseInterest: 'AI & Machine Learning Specialization',
        preferredMode: 'Hybrid (Classroom + Online)',
        qualification: 'B.Tech CS 4th Year',
        message: 'Interested in the upcoming weekend batch. Would like to discuss scholarship eligibility.',
        status: EnquiryStatus.NEW,
        type: EnquiryType.GENERAL_ENQUIRY
      },
      {
        fullName: 'Siddharth Verma',
        email: 'siddharth.v@example.com',
        phone: '+91 97110 44556',
        courseInterest: 'Full-Stack Web Development with React, Node.js & TypeScript',
        preferredMode: 'Live Online',
        qualification: 'Working Professional (QA Engineer)',
        message: 'Looking to transition into Full-Stack product development.',
        status: EnquiryStatus.CONTACTED,
        type: EnquiryType.COUNSELLING_BOOKING
      }
    ]
  });

  // 5. Sample Live Masterclass
  await prisma.workshop.upsert({
    where: { id: 'ws-demo-001' },
    update: {},
    create: {
      id: 'ws-demo-001',
      title: 'Building Production RAG Systems with Hybrid Vector Search',
      subtitle: 'Zero to deployed semantic retrieval system with anti-hallucination guardrails',
      instructorName: 'Ananya Deshmukh',
      instructorRole: 'Director of GenAI Curriculum',
      scheduledDate: new Date('2026-11-07T16:00:00Z'),
      duration: '2.5 Hours',
      seatsTotal: 150,
      seatsRegistered: 124,
      topics: [
        'Why simple vector similarity fails on complex corporate PDFs',
        'Implementing hybrid search (BM25 + embeddings) with Reciprocal Rank Fusion',
        'Cross-encoder rerankers for pinpoint precision'
      ],
      isFree: true
    }
  });

  // 6. Sample Enrollment & Certificate for Demo Student
  await prisma.enrollment.upsert({
    where: {
      userId_courseId: {
        userId: demoStudent.id,
        courseId: genAiCourse.id
      }
    },
    update: {},
    create: {
      userId: demoStudent.id,
      courseId: genAiCourse.id,
      completionPercentage: 100,
      status: 'COMPLETED',
      enrolledAt: new Date('2026-09-01T10:00:00Z'),
      completedAt: new Date('2026-10-15T10:00:00Z')
    }
  });

  await prisma.certificate.upsert({
    where: { certificateNumber: 'NEX-GENAI-2026-8472' },
    update: {},
    create: {
      certificateNumber: 'NEX-GENAI-2026-8472',
      userId: demoStudent.id,
      courseId: genAiCourse.id,
      grade: 'Distinction (Grade A+)',
      skillsVerified: [
        'Retrieval-Augmented Generation (RAG)',
        'Vector Databases & Semantic Embeddings',
        'Autonomous Multi-Agent Systems (LangGraph)',
        'Prompt Security & Anti-Hallucination Guardrails'
      ],
      verificationUrl: 'https://verify.nexora.academy/cert/NEX-GENAI-2026-8472'
    }
  });

  console.log('✅ Demonstration database seeded successfully!');
  console.log('Demo Student: student@nexora.academy / DemoPassword2026!');
  console.log('Demo Admin:   admin@nexora.academy   / DemoPassword2026!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
