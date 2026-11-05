import { Workshop } from '../types';

export interface MentorProfile {
  id: string;
  name: string;
  role: string;
  specialization: string;
  experienceYears: number;
  companyBackground: string;
  bio: string;
  avatarUrl: string;
  linkedinUrl?: string;
  officeHours: string;
}

export const FACULTY_MENTORS: MentorProfile[] = [
  {
    id: 'mentor-1',
    name: 'Dr. Vikramaditya Sen',
    role: 'Lead AI & Machine Learning Faculty',
    specialization: 'Deep Learning, PyTorch & Computer Vision',
    experienceYears: 12,
    companyBackground: 'Ex-Amazon Alexa AI, Ph.D. IIT Kharagpur',
    bio: 'Pioneered conversational neural architectures and computer vision inference pipelines. Passionate about de-mystifying tensor mathematics for hands-on software developers.',
    avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    officeHours: 'Tuesdays & Thursdays (5:00 PM - 7:00 PM)'
  },
  {
    id: 'mentor-2',
    name: 'Ananya Deshmukh',
    role: 'Director of GenAI Curriculum',
    specialization: 'LLM Systems, RAG & Vector Search',
    experienceYears: 9,
    companyBackground: 'Ex-ThoughtWorks Principal Consultant',
    bio: 'Author of open-source RAG evaluation toolkits and advisor to multiple AI startups. Specializes in building enterprise-grade multi-agent autonomous swarms.',
    avatarUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80',
    officeHours: 'Wednesdays & Saturdays (6:00 PM - 8:00 PM)'
  },
  {
    id: 'mentor-3',
    name: 'Rohan Mehra',
    role: 'Principal Analytics Instructor',
    specialization: 'Advanced SQL, Power BI & Dimensional Modeling',
    experienceYears: 10,
    companyBackground: 'Ex-Deloitte Analytics, Ex-Swiggy Lead',
    bio: 'Has architected executive BI dashboards for Fortune 500 enterprises. Dedicated to transforming students into analytical storytellers who solve high-stakes business questions.',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
    officeHours: 'Mondays & Fridays (4:00 PM - 6:00 PM)'
  },
  {
    id: 'mentor-4',
    name: 'Pooja Kashyap',
    role: 'Head of Full-Stack Engineering',
    specialization: 'React 19, TypeScript, Next.js & Express Architecture',
    experienceYears: 8,
    companyBackground: 'Ex-Zomato Frontend Staff Architect',
    bio: 'Expert in modern React component patterns, web performance optimization, and clean architectural design systems. Maintains several popular open-source packages.',
    avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80',
    officeHours: 'Wednesdays & Sundays (3:00 PM - 5:00 PM)'
  }
];

export const UPCOMING_WORKSHOPS: Workshop[] = [
  {
    id: 'ws-1',
    title: 'Building Production RAG Systems with Hybrid Vector Search',
    subtitle: 'Zero to deployed semantic retrieval system with anti-hallucination guardrails',
    instructorName: 'Ananya Deshmukh',
    instructorRole: 'Director of GenAI Curriculum',
    date: 'Saturday, Nov 07, 2026',
    time: '4:00 PM - 6:30 PM IST',
    duration: '2.5 Hours',
    seatsTotal: 150,
    seatsRegistered: 124,
    topics: [
      'Why simple vector similarity fails on complex corporate PDFs',
      'Implementing hybrid search (BM25 + embeddings) with Reciprocal Rank Fusion',
      'Cross-encoder rerankers for pinpoint precision',
      'Live code demo: Building an open-source contract query assistant'
    ],
    prerequisites: 'Basic Python syntax knowledge',
    isFree: true
  },
  {
    id: 'ws-2',
    title: 'Mastering SQL Window Functions for Tier-1 Tech Interviews',
    subtitle: 'Solve tricky cohort, running balance, and ranking interview problems live',
    instructorName: 'Rohan Mehra',
    instructorRole: 'Principal Analytics Instructor',
    date: 'Wednesday, Nov 11, 2026',
    time: '7:30 PM - 9:30 PM IST',
    duration: '2.0 Hours',
    seatsTotal: 200,
    seatsRegistered: 182,
    topics: [
      'Deconstructing ROW_NUMBER, RANK, and DENSE_RANK in edge cases',
      'Solving month-over-month retention cohorts using LAG/LEAD',
      'Frame clauses (ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW)',
      'Live mock SQL technical interview round simulation'
    ],
    prerequisites: 'Foundational SELECT, WHERE, and JOIN knowledge',
    isFree: true
  },
  {
    id: 'ws-3',
    title: 'Dockerizing Full-Stack Applications for Zero-Downtime Deploys',
    subtitle: 'Containerize React, Node, and PostgreSQL into production-grade multi-stage images',
    instructorName: 'Tanmay Bannerjee',
    instructorRole: 'Senior DevOps Architect',
    date: 'Sunday, Nov 15, 2026',
    time: '11:00 AM - 1:30 PM IST',
    duration: '2.5 Hours',
    seatsTotal: 120,
    seatsRegistered: 98,
    topics: [
      'Writing multi-stage Dockerfiles that reduce image sizes by 80%',
      'Setting up Docker Compose networks with environment secret isolation',
      'Database healthchecks and migration execution order',
      'Deploying to a live cloud VPS with automatic SSL certificates'
    ],
    prerequisites: 'Basic command line familiarity',
    isFree: true
  }
];

export const INSTITUTE_TRUST_FACTS = [
  {
    label: 'Hands-On Capstone Guarantee',
    value: '100% Practical',
    description: 'Every program culminates in a portfolio project with source code on GitHub and live URL.'
  },
  {
    label: 'Instructor-Led Live Mentoring',
    value: '1:1 Weekly Slots',
    description: 'Direct code reviews and architecture debugging with senior industry practitioners.'
  },
  {
    label: 'Verified Syllabus Quality',
    value: 'Updated Monthly',
    description: 'Curriculum calibrated directly against technical job descriptions and modern industry tools.'
  },
  {
    label: 'Career Transition Support',
    value: 'Lifetime Alumni Access',
    description: 'Resume review, mock technical interviews, and alumni hiring network access.'
  }
];
