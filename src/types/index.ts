export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type DeliveryMode = 'Live Online' | 'Hybrid (Classroom + Online)' | 'Classroom' | 'Self-Paced with Mentorship';

export type LearningDomain = 
  | 'Data Engineering'
  | 'Data Analytics & Business Intelligence'
  | 'Data Science & Machine Learning'
  | 'Artificial Intelligence & Generative AI'
  | 'RPA & Automation'
  | 'Cloud & Software Technologies';

export type CourseCategory = LearningDomain | string;

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  type: 'video' | 'reading' | 'code-lab' | 'quiz';
  completed?: boolean;
  content?: string;
  codeSnippet?: string;
  resourceUrls?: { name: string; url: string }[];
}

export interface CourseModule {
  id: string;
  moduleNumber: number;
  title: string;
  description: string;
  durationHours: number;
  learningObjectives: string[];
  lessons: Lesson[];
  handsOnLab?: string;
}

export interface BatchSchedule {
  id?: string;
  courseId?: string;
  courseTitle?: string;
  startDate: string;
  schedule: string;
  seatsLeft: number;
  mode: DeliveryMode;
  timing?: string;
  status?: 'Filling Fast' | 'Open' | 'Waitlist';
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  domain?: LearningDomain;
  category?: CourseCategory;
  level: SkillLevel;
  durationWeeks: number;
  totalHours: number;
  deliveryMode: DeliveryMode;
  technologiesCovered: string[];
  publishedFee?: {
    totalAmount: number;
    currency: string;
    emiStartsAt?: number;
    scholarshipAvailable?: boolean;
  };
  rating?: number;
  reviewCount?: number;
  enrolledStudentsCount?: number;
  badge?: string;
  highlights: string[];
  prerequisites: string[];
  targetAudience: string[];
  learningOutcomes: string[];
  capstoneProject: {
    title: string;
    description: string;
    deliverables: string[];
    techStack: string[];
  };
  instructor: {
    name: string;
    title: string;
    experience: string;
    companyBackground: string;
    avatarUrl: string;
  };
  upcomingBatches: BatchSchedule[];
  modules: CourseModule[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
  isPublished?: boolean;
}

// 14 Specific Career Pathways from Master Prompt
export interface CareerPathway {
  id: string;
  slug: string;
  roleTitle: string;
  tagline: string;
  domain: LearningDomain;
  targetAudience: string[];
  requiredSkills: string[];
  learningSequence: {
    phase: string;
    title: string;
    duration: string;
    topics: string[];
  }[];
  recommendedCourses: string[];
  technologyStack: string[];
  practicalProjectIdeas: {
    title: string;
    description: string;
    technologies: string[];
  }[];
  suggestedCertifications: string[];
  careerOpportunities: string[];
  averageSalaryBand?: string;
}

export interface CareerPathRecommendation {
  roleId: string;
  roleTitle: string;
  matchScore: number;
  tagline: string;
  description: string;
  marketDemand: string;
  recommendedCourses: string[];
  coreSkills: string[];
  sampleProject: string;
  suggestedSequence: string[];
  estimatedWeeks: number;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  domain: string;
  difficulty: SkillLevel;
  techStack: string[];
  problemStatement: string;
  solutionArchitecture: string;
  expectedDeliverables: string[];
  industryUseCases: string[];
  isStudentCapstone: boolean;
  githubUrl?: string;
  demoUrl?: string;
  previewImageUrl: string;
}

export interface LearningLabQuizQuestion {
  id: string;
  question: string;
  codeSnippet?: string;
  options: string[];
  correctIndex: number;
  explanation: string;
  topic: string;
}

export interface PromptImprovementSample {
  id: string;
  domain: string;
  taskTitle: string;
  initialWeakPrompt: string;
  weakPromptIssues: string[];
  optimizedEngineeredPrompt: string;
  techniquesUsed: string[];
  beforeSampleOutput: string;
  afterSampleOutput: string;
  proTip: string;
}

// 6 Digital Solutions Services
export interface DigitalSolutionService {
  id: string;
  slug: string;
  serviceNumber: string;
  title: string;
  tagline: string;
  shortDescription: string;
  fullOverview: string;
  businessChallenges: string[];
  proposedSolution: string;
  solutionArchitectureOverview: string;
  keyCapabilities: {
    title: string;
    description: string;
    deliverables: string[];
  }[];
  businessValueMetrics: {
    metric: string;
    impact: string;
  }[];
  technologies: string[];
  deliveryApproach: {
    stage: string;
    name: string;
    summary: string;
  }[];
  applicableIndustries: string[];
  sampleCaseStudy: {
    clientType: string;
    challenge: string;
    solution: string;
    outcomes: string[];
  };
}

// 8 Industry Solutions
export interface IndustrySolution {
  id: string;
  slug: string;
  industryName: string;
  tagline: string;
  description: string;
  dataEngineeringUseCases: string[];
  aiAndGenAIUseCases: string[];
  biAndAnalyticsUseCases: string[];
  automationUseCases: string[];
  keyOutcomes: string[];
}

// 6 Business Engagement Models
export interface EngagementModel {
  id: string;
  title: string;
  tagline: string;
  bestFor: string;
  characteristics: string[];
  governance: string;
  pricingStructure: string;
}

// Corporate Training Program
export interface CorporateProgram {
  id: string;
  title: string;
  targetAudience: string;
  focusAreas: string[];
  durationOptions: string;
  outcome: string;
}

// College Partnership Program
export interface CollegeProgram {
  id: string;
  title: string;
  targetYear: string;
  format: string;
  topicsCovered: string[];
  institutionalBenefits: string[];
}

// Lead Generation & Enquiries (9 distinct streams)
export type LeadStreamType = 
  | 'student_course_enquiry'
  | 'free_demo_registration'
  | 'course_enrollment'
  | 'workshop_registration'
  | 'corporate_training_rfp'
  | 'college_partnership'
  | 'software_project_consultation'
  | 'callback_request'
  | 'newsletter_subscription'
  | 'general_enquiry'
  | 'counselling_booking';

export interface LeadSubmission {
  id?: string;
  type: LeadStreamType;
  fullName: string;
  email: string;
  phone: string;
  courseInterest?: string;
  targetRole?: string;
  currentBackground?: string;
  companyOrInstitution?: string;
  designation?: string;
  interestedTopicOrService?: string;
  preferredMode?: DeliveryMode | 'Any';
  qualification?: string;
  teamOrStudentCount?: string;
  projectBudgetBand?: string;
  projectTimeline?: string;
  expectedDate?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  notesOrRequirements?: string;
  message?: string;
  sourcePage?: string;
  contactConsent?: boolean;
  status?: 'NEW' | 'CONTACTED' | 'QUALIFIED' | 'PROPOSAL_SENT' | 'ENROLLED' | 'CLOSED';
  createdAt?: string;
}

export type EnquirySubmission = LeadSubmission;

// Knowledge Hub Article
export interface ResourceArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 
    | 'Data Engineering'
    | 'Data Science & AI'
    | 'Business Intelligence'
    | 'Generative AI'
    | 'RPA & Automation'
    | 'Cloud Architecture'
    | 'Career Guidance';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  tags: string[];
  contentMarkdown: string;
  downloadableSyllabusLink?: string;
}

// Career Opening
export interface CareerJob {
  id: string;
  title: string;
  division: 'NodalBot Academy' | 'NodalBot Digital Solutions' | 'Operations';
  location: string;
  type: 'Full-Time' | 'Part-Time / Contract' | 'Internship';
  experienceRequired: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
}

// Workshop item
export interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  instructorName: string;
  instructorRole: string;
  date: string;
  time: string;
  duration: string;
  seatsTotal: number;
  seatsRegistered: number;
  topics: string[];
  prerequisites: string;
  isFree: boolean;
}

// User / Admin Profile
export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'STUDENT' | 'ADMIN';
  phone?: string;
  avatarUrl?: string;
  streakDays: number;
  createdAt: string;
}

export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  courseTitle: string;
  courseDomain?: LearningDomain;
  courseCategory?: string;
  enrolledAt: string;
  completionPercentage: number;
  completedLessonIds: string[];
  status: 'IN_PROGRESS' | 'COMPLETED';
  lastAccessedLessonId?: string;
  lastAccessedAt?: string;
  certificateEarned?: boolean;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  userId: string;
  studentName: string;
  courseId: string;
  courseTitle: string;
  issueDate: string;
  grade: string;
  skillsVerified: string[];
  verificationUrl: string;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'alert' | 'assignment';
  timestamp: string;
  read: boolean;
}
