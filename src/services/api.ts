import { Course, LeadSubmission, User, Enrollment, Certificate, Notification } from '../types';
import { COURSES_MASTER_CATALOG, UPCOMING_BATCHES_DATA } from '../data/nodalbotData';

const API_BASE_URL = (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

const STORAGE_KEYS = {
  USER: 'nodalbot_user',
  TOKEN: 'nodalbot_token',
  ENQUIRIES: 'nodalbot_leads',
  BATCHES: 'nodalbot_batches'
};

// Demo user profiles
export const DEMO_STUDENT: User = {
  id: 'usr-student-001',
  fullName: 'Aarav Patel',
  email: 'student@nodalbot.com',
  role: 'STUDENT',
  phone: '+91 98765 43210',
  avatarUrl: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80',
  streakDays: 8,
  createdAt: '2026-09-01T10:00:00Z'
};

export const DEMO_ADMIN: User = {
  id: 'usr-admin-001',
  fullName: 'NodalBot Administrator',
  email: 'admin@nodalbot.com',
  role: 'ADMIN',
  phone: '+91 97899 76268',
  avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
  streakDays: 21,
  createdAt: '2026-01-15T10:00:00Z'
};

export const DEFAULT_CERTIFICATES: Certificate[] = [
  {
    id: 'cert-de-8472',
    certificateNumber: 'NODAL-DE-2026-8472',
    userId: 'usr-student-001',
    studentName: 'Aarav Patel',
    courseId: 'course-data-eng-master',
    courseTitle: 'Azure & Databricks Modern Data Engineering',
    issueDate: 'October 15, 2026',
    grade: 'A+ (Exemplary Production Capstone)',
    skillsVerified: ['Azure Databricks', 'Apache Spark', 'Delta Lake', 'PySpark', 'ADF', 'Snowflake'],
    verificationUrl: 'https://nodalbot.com/verify/NODAL-DE-2026-8472'
  }
];

// Initial sample leads for immediate admin dashboard visibility
const INITIAL_DEMO_LEADS: LeadSubmission[] = [
  {
    id: 'lead-001',
    type: 'corporate_training_rfp',
    fullName: 'Ananya Deshmukh',
    email: 'ananya.d@hcltech.com',
    phone: '+91 98412 87654',
    companyOrInstitution: 'HCLTech Global Delivery',
    designation: 'Senior L&D Manager',
    interestedTopicOrService: 'Enterprise Data Engineering Bootcamp (Databricks & Spark)',
    preferredMode: 'Hybrid (Classroom + Online)',
    teamOrStudentCount: '25 Senior Engineers',
    notesOrRequirements: 'Looking to upskill our legacy SQL development team on Azure Databricks Medallion Architecture and PySpark for an upcoming retail banking client migration.',
    contactConsent: true,
    status: 'PROPOSAL_SENT',
    createdAt: new Date(Date.now() - 24 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-002',
    type: 'software_project_consultation',
    fullName: 'David Sterling',
    email: 'd.sterling@vanguardlogistics.co.uk',
    phone: '+44 7911 123456',
    companyOrInstitution: 'Vanguard Freight UK',
    designation: 'Chief Technology Officer',
    interestedTopicOrService: 'Custom Software & RAG Knowledge Assistant',
    preferredMode: 'Live Online',
    notesOrRequirements: 'We want to build a custom multi-agent RAG system connecting to our SQL transport databases and parsing PDF international customs tariffs.',
    contactConsent: true,
    status: 'QUALIFIED',
    createdAt: new Date(Date.now() - 48 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-003',
    type: 'college_partnership',
    fullName: 'Dr. K. Swaminathan',
    email: 'dean.computing@annauniv.edu',
    phone: '+91 94440 23456',
    companyOrInstitution: 'College of Engineering, Anna University',
    designation: 'Dean, Computing Sciences',
    interestedTopicOrService: 'Faculty Development Program (FDP) & Student AI Bootcamp',
    preferredMode: 'Hybrid (Classroom + Online)',
    teamOrStudentCount: '150 3rd Year Students + 20 Faculty',
    notesOrRequirements: 'Inviting NodalBot industry instructors for a 3-day Generative AI and Model Context Protocol workshop for our faculty and students.',
    contactConsent: true,
    status: 'NEW',
    createdAt: new Date(Date.now() - 12 * 3600 * 1000).toISOString()
  },
  {
    id: 'lead-004',
    type: 'free_demo_registration',
    fullName: 'Siddharth Raman',
    email: 'siddharth.r@gmail.com',
    phone: '+91 98840 98765',
    interestedTopicOrService: 'Azure & Databricks Modern Data Engineering',
    preferredMode: 'Live Online',
    notesOrRequirements: 'Currently working as a database developer with 3 years experience. Want to attend the weekend demo session.',
    contactConsent: true,
    status: 'CONTACTED',
    createdAt: new Date(Date.now() - 6 * 3600 * 1000).toISOString()
  }
];

class ApiService {
  private getLocalLeads(): LeadSubmission[] {
    try {
      const stored = localStorage.getItem(STORAGE_KEYS.ENQUIRIES);
      if (stored) return JSON.parse(stored);
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(INITIAL_DEMO_LEADS));
      return INITIAL_DEMO_LEADS;
    } catch {
      return INITIAL_DEMO_LEADS;
    }
  }

  private saveLocalLeads(leads: LeadSubmission[]) {
    try {
      localStorage.setItem(STORAGE_KEYS.ENQUIRIES, JSON.stringify(leads));
    } catch (e) {
      console.warn('LocalStorage save error:', e);
    }
  }

  // 1. Submit Enquiry / Lead
  async submitEnquiry(payload: LeadSubmission): Promise<{ success: boolean; id: string }> {
    const newId = `lead-${Date.now()}`;
    const fullLead: LeadSubmission = {
      ...payload,
      id: newId,
      status: 'NEW',
      createdAt: payload.createdAt || new Date().toISOString()
    };

    // Always update local cache for zero-latency client state
    const current = this.getLocalLeads();
    this.saveLocalLeads([fullLead, ...current]);

    // Attempt live backend REST call if server is accessible
    try {
      const res = await fetch(`${API_BASE_URL}/enquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(fullLead)
      });
      if (res.ok) {
        const data = await res.json();
        return { success: true, id: data.id || newId };
      }
    } catch (err) {
      console.log('Backend not reachable; stored lead locally:', fullLead);
    }

    return { success: true, id: newId };
  }

  // 2. Get All Enquiries
  async getEnquiries(): Promise<LeadSubmission[]> {
    try {
      const res = await fetch(`${API_BASE_URL}/enquiries`);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          this.saveLocalLeads(data);
          return data;
        }
      }
    } catch {
      // Fallback to local
    }
    return this.getLocalLeads();
  }

  // 3. Update Enquiry Status
  async updateEnquiryStatus(leadId: string, newStatus: string): Promise<boolean> {
    const leads = this.getLocalLeads();
    const updated = leads.map(l => l.id === leadId ? { ...l, status: newStatus as any } : l);
    this.saveLocalLeads(updated);

    try {
      await fetch(`${API_BASE_URL}/enquiries/${leadId}/status`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
    } catch {}

    return true;
  }

  // 4. Delete Enquiry
  async deleteEnquiry(leadId: string): Promise<boolean> {
    const leads = this.getLocalLeads();
    const updated = leads.filter(l => l.id !== leadId);
    this.saveLocalLeads(updated);

    try {
      await fetch(`${API_BASE_URL}/enquiries/${leadId}`, {
        method: 'DELETE'
      });
    } catch {}

    return true;
  }

  // 5. Get Courses
  async getCourses(): Promise<Course[]> {
    return COURSES_MASTER_CATALOG;
  }

  // 6. Get Batches
  async getBatches() {
    return UPCOMING_BATCHES_DATA;
  }

  // Legacy student context helpers & aliases
  async getEnrollments(userId?: string): Promise<Enrollment[]> {
    return [
      {
        id: 'enr-de-001',
        userId: userId || 'usr-student-001',
        courseId: 'course-data-eng-master',
        courseTitle: 'Azure & Databricks Modern Data Engineering',
        enrolledAt: '2026-09-01T10:00:00Z',
        completedLessonIds: ['mod-1-les-1', 'mod-1-les-2', 'mod-2-les-1'],
        completionPercentage: 65,
        lastAccessedAt: '2026-10-30T14:30:00Z',
        status: 'IN_PROGRESS'
      }
    ];
  }

  getBookmarks(): string[] {
    try {
      const saved = localStorage.getItem('nodalbot_bookmarks');
      return saved ? JSON.parse(saved) : ['course-data-eng-master', 'course-agentic-ai'];
    } catch {
      return ['course-data-eng-master'];
    }
  }

  toggleBookmark(courseId: string): string[] {
    const current = this.getBookmarks();
    const updated = current.includes(courseId)
      ? current.filter(id => id !== courseId)
      : [...current, courseId];
    try {
      localStorage.setItem('nodalbot_bookmarks', JSON.stringify(updated));
    } catch {}
    return updated;
  }

  async enrollInCourse(userId: string, courseId: string): Promise<Enrollment> {
    const enrollment: Enrollment = {
      id: `enr-${Date.now()}`,
      userId,
      courseId,
      courseTitle: 'Enrolled Course',
      enrolledAt: new Date().toISOString(),
      completedLessonIds: [],
      completionPercentage: 0,
      lastAccessedAt: new Date().toISOString(),
      status: 'IN_PROGRESS'
    };
    return enrollment;
  }

  async updateLessonProgress(userId: string, courseId: string, lessonId: string, completed: boolean): Promise<Enrollment> {
    return {
      id: 'enr-updated',
      userId,
      courseId,
      courseTitle: 'Updated Course',
      enrolledAt: '2026-09-01T10:00:00Z',
      completedLessonIds: completed ? [lessonId] : [],
      completionPercentage: completed ? 50 : 25,
      lastAccessedAt: new Date().toISOString(),
      status: 'IN_PROGRESS'
    };
  }

  async registerWorkshop(workshopIdOrData: any, attendeeData?: any): Promise<any> {
    const data = attendeeData || (typeof workshopIdOrData === 'object' ? workshopIdOrData : {});
    const workshopId = typeof workshopIdOrData === 'string' ? workshopIdOrData : data.workshopId;
    return this.submitEnquiry({
      type: 'free_demo_registration',
      fullName: data.fullName || 'Workshop Attendee',
      email: data.email || '',
      phone: data.phone || 'N/A',
      interestedTopicOrService: data.workshopTitle || `Workshop ID: ${workshopId || 'General'}`,
      contactConsent: true,
      notesOrRequirements: `Registered for workshop: ${workshopId || 'General'}`,
      sourcePage: '/workshops'
    });
  }

  async getCertificates(): Promise<Certificate[]> {
    return DEFAULT_CERTIFICATES;
  }

  getNotifications(): Notification[] {
    return [
      {
        id: 'notif-1',
        title: 'New Databricks Lab Available',
        message: 'Delta Live Tables pipeline capstone lab has been updated with Spark 3.5 optimizations.',
        timestamp: '2 hours ago',
        read: false,
        type: 'info'
      },
      {
        id: 'notif-2',
        title: 'Upcoming Weekend Live Batch',
        message: 'Your next live mentoring session starts Saturday at 10:00 AM IST.',
        timestamp: '1 day ago',
        read: true,
        type: 'success'
      }
    ];
  }
}

export const apiService = new ApiService();
export const api = apiService;
