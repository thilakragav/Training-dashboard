export type SkillLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
export type DeliveryMode = 'Live Online' | 'Hybrid (Classroom + Online)' | 'Classroom';
export type CourseCategory = 
  | 'AI & Machine Learning'
  | 'Generative AI'
  | 'Data Analytics'
  | 'Data Engineering'
  | 'Full-Stack Development'
  | 'Databases & SQL'
  | 'Programming'
  | 'Cloud & DevOps';

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
  handsOnLab: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  category: CourseCategory;
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
  rating: number;
  reviewCount: number;
  enrolledStudentsCount: number;
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
  upcomingBatches: {
    startDate: string;
    schedule: string;
    seatsLeft: number;
    mode: DeliveryMode;
  }[];
  modules: CourseModule[];
  faqs: { question: string; answer: string }[];
  isFeatured?: boolean;
  isPublished?: boolean;
}

export interface CareerPathRecommendation {
  roleId: string;
  roleTitle: string;
  matchScore: number;
  tagline: string;
  description: string;
  marketDemand: string;
  recommendedCourses: string[]; // Course IDs
  coreSkills: string[];
  sampleProject: string;
  suggestedSequence: string[];
  estimatedWeeks: number;
}

export interface CareerQuizAnswers {
  skillLevel: string;
  preferredSubject: string;
  interests: string[];
  careerGoal: string;
  weeklyHours: string;
}

export interface ShowcaseProject {
  id: string;
  title: string;
  domain: 'Data Analytics' | 'AI Applications' | 'Data Engineering' | 'Full-Stack';
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

export interface EnquirySubmission {
  id?: string;
  fullName: string;
  email: string;
  phone: string;
  courseInterest: string;
  preferredMode: DeliveryMode | 'Any';
  qualification: string;
  message?: string;
  preferredDate?: string;
  preferredTimeSlot?: string;
  type: 'general_enquiry' | 'counselling_booking' | 'workshop_registration' | 'corporate_training';
  status?: 'NEW' | 'CONTACTED' | 'ENROLLED' | 'CLOSED';
  createdAt?: string;
}

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
  courseCategory: string;
  enrolledAt: string;
  completionPercentage: number;
  completedLessonIds: string[];
  status: 'IN_PROGRESS' | 'COMPLETED';
  lastAccessedLessonId?: string;
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
