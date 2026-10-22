import React, { createContext, useContext, useState, useEffect } from 'react';
import { Course, Enrollment, ShowcaseProject, Workshop } from '../types';
import { api } from '../services/api';
import { useAuth } from './AuthContext';
import confetti from 'canvas-confetti';

interface LearningContextType {
  enrollments: Enrollment[];
  bookmarks: string[];
  isLoading: boolean;
  enrollInCourse: (courseId: string) => Promise<Enrollment>;
  toggleLessonCompleted: (courseId: string, lessonId: string, completed: boolean) => Promise<void>;
  isLessonCompleted: (courseId: string, lessonId: string) => boolean;
  toggleBookmark: (courseId: string) => void;
  isBookmarked: (courseId: string) => boolean;
  
  // Global modal triggers
  enquiryModalCourse: Course | null;
  isEnquiryModalOpen: boolean;
  openEnquiryModal: (course?: Course | null) => void;
  closeEnquiryModal: () => void;

  isCounsellingModalOpen: boolean;
  openCounsellingModal: () => void;
  closeCounsellingModal: () => void;

  selectedWorkshop: Workshop | null;
  isWorkshopModalOpen: boolean;
  openWorkshopModal: (workshop: Workshop) => void;
  closeWorkshopModal: () => void;

  selectedProject: ShowcaseProject | null;
  isProjectModalOpen: boolean;
  openProjectModal: (project: ShowcaseProject) => void;
  closeProjectModal: () => void;
}

const LearningContext = createContext<LearningContextType | undefined>(undefined);

export const LearningProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Modals state
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquiryModalCourse, setEnquiryModalCourse] = useState<Course | null>(null);

  const [isCounsellingModalOpen, setIsCounsellingModalOpen] = useState(false);

  const [isWorkshopModalOpen, setIsWorkshopModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null);

  useEffect(() => {
    const loadUserData = async () => {
      setIsLoading(true);
      if (user) {
        const userEnrollments = await api.getEnrollments(user.id);
        setEnrollments(userEnrollments);
      } else {
        setEnrollments([]);
      }
      setBookmarks(api.getBookmarks());
      setIsLoading(false);
    };

    loadUserData();
  }, [user]);

  const enrollInCourse = async (courseId: string): Promise<Enrollment> => {
    if (!user) throw new Error('You must be logged in to enroll');
    const enrollment = await api.enrollInCourse(user.id, courseId);
    setEnrollments(prev => {
      const exists = prev.some(e => e.id === enrollment.id);
      return exists ? prev.map(e => e.id === enrollment.id ? enrollment : e) : [...prev, enrollment];
    });

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {}

    return enrollment;
  };

  const toggleLessonCompleted = async (courseId: string, lessonId: string, completed: boolean) => {
    if (!user) return;
    const updated = await api.updateLessonProgress(user.id, courseId, lessonId, completed);
    setEnrollments(prev => prev.map(e => e.courseId === courseId ? updated : e));

    if (completed && updated.completionPercentage === 100) {
      try {
        confetti({
          particleCount: 120,
          spread: 90,
          origin: { y: 0.5 }
        });
      } catch {}
    }
  };

  const isLessonCompleted = (courseId: string, lessonId: string): boolean => {
    const enr = enrollments.find(e => e.courseId === courseId);
    return enr ? enr.completedLessonIds.includes(lessonId) : false;
  };

  const toggleBookmark = (courseId: string) => {
    const updated = api.toggleBookmark(courseId);
    setBookmarks(updated);
  };

  const isBookmarked = (courseId: string) => bookmarks.includes(courseId);

  const openEnquiryModal = (course?: Course | null) => {
    setEnquiryModalCourse(course || null);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
    setEnquiryModalCourse(null);
  };

  const openCounsellingModal = () => setIsCounsellingModalOpen(true);
  const closeCounsellingModal = () => setIsCounsellingModalOpen(false);

  const openWorkshopModal = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsWorkshopModalOpen(true);
  };
  const closeWorkshopModal = () => {
    setIsWorkshopModalOpen(false);
    setSelectedWorkshop(null);
  };

  const openProjectModal = (project: ShowcaseProject) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };
  const closeProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <LearningContext.Provider
      value={{
        enrollments,
        bookmarks,
        isLoading,
        enrollInCourse,
        toggleLessonCompleted,
        isLessonCompleted,
        toggleBookmark,
        isBookmarked,
        enquiryModalCourse,
        isEnquiryModalOpen,
        openEnquiryModal,
        closeEnquiryModal,
        isCounsellingModalOpen,
        openCounsellingModal,
        closeCounsellingModal,
        selectedWorkshop,
        isWorkshopModalOpen,
        openWorkshopModal,
        closeWorkshopModal,
        selectedProject,
        isProjectModalOpen,
        openProjectModal,
        closeProjectModal
      }}
    >
      {children}
    </LearningContext.Provider>
  );
};

export const useLearning = () => {
  const context = useContext(LearningContext);
  if (!context) {
    throw new Error('useLearning must be used within a LearningProvider');
  }
  return context;
};
