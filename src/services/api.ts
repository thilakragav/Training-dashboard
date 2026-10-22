import { Course, EnquirySubmission, User, Enrollment, Workshop, Certificate, Notification } from '../types';
import { COURSES_DATA } from '../data/coursesData';
import { UPCOMING_WORKSHOPS } from '../data/workshopsData';

// Storage keys for local persistence
const STORAGE_KEYS = {
  USER: 'nexora_user',
  TOKEN: 'nexora_token',
  ENROLLMENTS: 'nexora_enrollments',
  ENQUIRIES: 'nexora_enquiries',
  WORKSHOP_REGISTRATIONS: 'nexora_workshop_registrations',
  BOOKMARKS: 'nexora_bookmarks',
  NOTIFICATIONS: 'nexora_notifications',
  COURSES: 'nexora_courses_override'
};

// Initial default user for seamless instant demo access
export const DEMO_STUDENT: User = {
  id: 'usr-student-001',
  fullName: 'Aarav Patel',
  email: 'student@nexora.academy',
  role: 'STUDENT',
  phone: '+91 98765 43210',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  streakDays: 6,
  createdAt: '2026-09-01T10:00:00Z'
};

export const DEMO_ADMIN: User = {
  id: 'usr-admin-001',
  fullName: 'Dr. Vikramaditya Sen (Admin)',
  email: 'admin@nexora.academy',
  role: 'ADMIN',
  phone: '+91 98765 00000',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  streakDays: 14,
  createdAt: '2026-01-15T10:00:00Z'
};

const DEFAULT_ENROLLMENTS: Enrollment[] = [
  {
    id: 'enr-001',
    userId: 'usr-student-001',
    courseId: 'course-ai-ml',
    courseTitle: 'Artificial Intelligence & Machine Learning Specialization',
    courseCategory: 'AI & Machine Learning',
    enrolledAt: '2026-09-10T09:00:00Z',
    completionPercentage: 42,
    completedLessonIds: ['les-aiml-101', 'les-aiml-102', 'les-aiml-103', 'les-aiml-201'],
    status: 'IN_PROGRESS',
    lastAccessedLessonId: 'les-aiml-202',
    certificateEarned: false
  },
  {
    id: 'enr-002',
    userId: 'usr-student-001',
    courseId: 'course-genai',
    courseTitle: 'Generative AI & Enterprise Prompt Engineering',
    courseCategory: 'Generative AI',
    enrolledAt: '2026-10-01T14:30:00Z',
    completionPercentage: 100,
    completedLessonIds: ['les-genai-101', 'les-genai-102', 'les-genai-103', 'les-genai-201', 'les-genai-202', 'les-genai-203', 'les-genai-301', 'les-genai-302', 'les-genai-303', 'les-genai-401', 'les-genai-402', 'les-genai-403'],
    status: 'COMPLETED',
    lastAccessedLessonId: 'les-genai-403',
    certificateEarned: true
  }
];

const DEFAULT_NOTIFICATIONS: Notification[] = [
  {
    id: 'notif-1',
    title: 'Upcoming Live Mentoring Session',
    message: 'Your 1:1 code review session with Ananya Deshmukh starts tomorrow at 6:00 PM IST.',
    type: 'info',
    timestamp: '2 hours ago',
    read: false
  },
  {
    id: 'notif-2',
    title: 'Certificate Issued!',
    message: 'Congratulations! Your certificate for Generative AI & Enterprise Prompt Engineering has been verified and issued.',
    type: 'success',
    timestamp: '1 day ago',
    read: false
  },
  {
    id: 'notif-3',
    title: 'New Assignment Feedback',
    message: 'Score 95/100 on Lab 2: LightGBM Credit Risk Pipeline with SHAP values.',
    type: 'assignment',
    timestamp: '3 days ago',
    read: true
  }
];

export const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-genai-8472',
    certificateNumber: 'NEX-GENAI-2026-8472',
    userId: 'usr-student-001',
    studentName: 'Aarav Patel',
    courseId: 'course-genai',
    courseTitle: 'Generative AI & Enterprise Prompt Engineering',
    issueDate: 'October 15, 2026',
    grade: 'Distinction (Grade A+)',
    skillsVerified: [
      'Retrieval-Augmented Generation (RAG)',
      'Vector Databases & Semantic Embeddings',
      'Autonomous Multi-Agent Systems (LangGraph)',
      'Prompt Security & Anti-Hallucination Guardrails'
    ],
    verificationUrl: 'https://verify.nexora.academy/cert/NEX-GENAI-2026-8472'
  }
];

class ApiService {
  private isOnlineBackend: boolean = false;
  private backendBaseUrl: string = 'http://localhost:5000/api';

  constructor() {
    this.initStorage();
  }

  private initStorage() {
    if (typeof window === 'undefined') return;
    if (!localStorage.getItem(STORAGE_KEYS.ENROLLMENTS)) {
      localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(DEFAULT_ENROLLMENTS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS)) {
      localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(DEFAULT_NOTIFICATIONS));
    }
    if (!localStorage.getItem(STORAGE_KEYS.ENQUIRIES)) {
      const initialEnquiries: EnquirySubmission[] = [
        {
          id: 'enq-101',
          fullName: 'Kunal Singhania',
          email: 'kunal.s@example.com',
          phone: '+91 98200 11223',
          courseInterest: 'AI & Machine Learning Specialization',
          preferredMode: 'Hybrid (Classroom + Online)',
          qualification: 'B.Tech CS 4th Year',
          message: 'Interested in the upcoming weekend batch. Would like to discuss scholarship eligibility.',
          status: 'NEW',
          type: 'general_enquiry',
          createdAt: '2026-10-21T11:20:00Z'
        },
        {
          id: 'enq-102',
          fullName: 'Siddharth Verma',
          email: 'siddharth.v@example.com',
          phone: '+91 97110 44556',
          courseInterest: 'Full-Stack Web Development with React, Node.js & TypeScript',
          preferredMode: 'Live Online',
          qualification: 'Working Professional (QA Engineer)',
          message: 'Looking to transition into Full-Stack product development.',
          status: 'CONTACTED',
          type: 'counselling_booking',
          createdAt: '2026-10-20T16:45:00Z'
        }
      ];
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(initialEnquiries));
    }
  }

  // Courses
  async getCourses(): Promise<Course[]> {
    const custom = localStorage.getItem(STORAGE_KEYS.COURSES);
    if (custom) {
      try {
        return JSON.parse(custom);
      } catch (e) {
        console.error('Failed to parse cached courses', e);
      }
    }
    return COURSES_DATA;
  }

  async getCourseById(id: string): Promise<Course | undefined> {
    const courses = await this.getCourses();
    return courses.find(c => c.id === id || c.slug === id);
  }

  // Enquiries & Counselling
  async submitEnquiry(enquiry: Omit<EnquirySubmission, 'id' | 'createdAt' | 'status'>): Promise<{ success: boolean; id: string; message: string }> {
    const newEnquiry: EnquirySubmission = {
      ...enquiry,
      id: `enq-${Date.now()}`,
      status: 'NEW',
      createdAt: new Date().toISOString()
    };

    const existing: EnquirySubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
    existing.unshift(newEnquiry);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(existing));

    // Also attempt backend POST if available
    try {
      await fetch(`${this.backendBaseUrl}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newEnquiry)
      }).catch(() => null);
    } catch {}

    return {
      success: true,
      id: newEnquiry.id!,
      message: 'Your enquiry has been received! Our senior academic counsellor will reach out within 4 business hours.'
    };
  }

  async getEnquiries(): Promise<EnquirySubmission[]> {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
  }

  async updateEnquiryStatus(id: string, status: EnquirySubmission['status']): Promise<boolean> {
    const existing: EnquirySubmission[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENQUIRIES) || '[]');
    const updated = existing.map(item => item.id === id ? { ...item, status } : item);
    localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(updated));
    return true;
  }

  // Workshops
  async getWorkshops(): Promise<Workshop[]> {
    return UPCOMING_WORKSHOPS;
  }

  async registerWorkshop(workshopId: string, attendee: { fullName: string; email: string; phone: string }): Promise<{ success: boolean; message: string }> {
    const regs = JSON.parse(localStorage.getItem(STORAGE_KEYS.WORKSHOP_REGISTRATIONS) || '[]');
    regs.push({ workshopId, ...attendee, registeredAt: new Date().toISOString() });
    localStorage.setItem(STORAGE_KEYS.WORKSHOP_REGISTRATIONS, JSON.stringify(regs));

    return {
      success: true,
      message: 'Workshop seat reserved! The calendar invite and Zoom room credentials have been emailed to you.'
    };
  }

  // Student Enrollments & Progress
  async getEnrollments(userId: string): Promise<Enrollment[]> {
    const all: Enrollment[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENROLLMENTS) || '[]');
    return all.filter(e => e.userId === userId);
  }

  async enrollInCourse(userId: string, courseId: string): Promise<Enrollment> {
    const course = await this.getCourseById(courseId);
    if (!course) throw new Error('Course not found');

    const all: Enrollment[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENROLLMENTS) || '[]');
    const existing = all.find(e => e.userId === userId && e.courseId === courseId);
    if (existing) return existing;

    const newEnrollment: Enrollment = {
      id: `enr-${Date.now()}`,
      userId,
      courseId,
      courseTitle: course.title,
      courseCategory: course.category,
      enrolledAt: new Date().toISOString(),
      completionPercentage: 0,
      completedLessonIds: [],
      status: 'IN_PROGRESS',
      lastAccessedLessonId: course.modules[0]?.lessons[0]?.id,
      certificateEarned: false
    };

    all.push(newEnrollment);
    localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(all));
    return newEnrollment;
  }

  async updateLessonProgress(userId: string, courseId: string, lessonId: string, completed: boolean): Promise<Enrollment> {
    const all: Enrollment[] = JSON.parse(localStorage.getItem(STORAGE_KEYS.ENROLLMENTS) || '[]');
    let enrollment = all.find(e => e.userId === userId && e.courseId === courseId);

    if (!enrollment) {
      enrollment = await this.enrollInCourse(userId, courseId);
    }

    const course = await this.getCourseById(courseId);
    const totalLessons = course ? course.modules.flatMap(m => m.lessons).length : 10;

    let completedSet = new Set(enrollment.completedLessonIds);
    if (completed) {
      completedSet.add(lessonId);
    } else {
      completedSet.delete(lessonId);
    }

    const completedLessonIds = Array.from(completedSet);
    const completionPercentage = Math.min(100, Math.round((completedLessonIds.length / totalLessons) * 100));
    const isCompleted = completionPercentage >= 100;

    const updatedEnrollment: Enrollment = {
      ...enrollment,
      completedLessonIds,
      completionPercentage,
      status: isCompleted ? 'COMPLETED' : 'IN_PROGRESS',
      lastAccessedLessonId: lessonId,
      certificateEarned: isCompleted || enrollment.certificateEarned
    };

    const updatedAll = all.map(e => e.id === updatedEnrollment.id ? updatedEnrollment : e);
    localStorage.setItem(STORAGE_KEYS.ENROLLMENTS, JSON.stringify(updatedAll));
    return updatedEnrollment;
  }

  // Bookmarks
  getBookmarks(): string[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.BOOKMARKS) || '[]');
  }

  toggleBookmark(courseId: string): string[] {
    const bookmarks = this.getBookmarks();
    const index = bookmarks.indexOf(courseId);
    let updated: string[];
    if (index > -1) {
      updated = bookmarks.filter(id => id !== courseId);
    } else {
      updated = [...bookmarks, courseId];
    }
    localStorage.setItem(STORAGE_KEYS.BOOKMARKS, JSON.stringify(updated));
    return updated;
  }

  // Certificates
  getCertificates(userId: string): Certificate[] {
    const defaultCerts = DEFAULT_CERTIFICATES.filter(c => c.userId === userId);
    return defaultCerts;
  }

  // Notifications
  getNotifications(): Notification[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.NOTIFICATIONS) || '[]');
  }

  markNotificationAsRead(id: string): void {
    const notifs = this.getNotifications();
    const updated = notifs.map(n => n.id === id ? { ...n, read: true } : n);
    localStorage.setItem(STORAGE_KEYS.NOTIFICATIONS, JSON.stringify(updated));
  }
}

export const api = new ApiService();
