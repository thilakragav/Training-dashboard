import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { ThemeProvider } from './context/ThemeContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { FloatingWhatsApp } from './components/ui/FloatingWhatsApp';
import { LeadModal } from './components/modals/LeadModal';
import { PageTransition } from './components/layout/PageTransition';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { AcademyPage } from './pages/AcademyPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { CareerRoadmapsPage } from './pages/CareerRoadmapsPage';
import { CorporateTrainingPage } from './pages/CorporateTrainingPage';
import { CollegeTrainingPage } from './pages/CollegeTrainingPage';
import { DigitalSolutionsPage } from './pages/DigitalSolutionsPage';
import { IndustrySolutionsPage } from './pages/IndustrySolutionsPage';
import { ResourcesPage } from './pages/ResourcesPage';
import { CareersPage } from './pages/CareersPage';
import { ContactPage } from './pages/ContactPage';
import { AdminPortalPage } from './pages/AdminPortalPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { StudentLearnPage } from './pages/StudentLearnPage';
import { StudentCertificatesPage } from './pages/StudentCertificatesPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  const [globalModalOpen, setGlobalModalOpen] = useState(false);
  const [globalModalType, setGlobalModalType] = useState<any>('student_course_enquiry');
  const [globalModalTopic, setGlobalModalTopic] = useState('');

  const openGlobalModal = (type: any = 'student_course_enquiry', initialTopic: string = '') => {
    setGlobalModalType(type);
    setGlobalModalTopic(initialTopic);
    setGlobalModalOpen(true);
  };

  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <LearningProvider>
            <ScrollToTop />
            
            <div className="flex flex-col min-h-screen bg-nodal-bg text-nodal-text selection:bg-nodal-blue/35 selection:text-nodal-cyan transition-colors duration-250">
              {/* Sticky Header Navigation */}
              <Navbar onOpenLeadModal={openGlobalModal} />

              {/* Main Application Route Content */}
              <main className="flex-1">
                <PageTransition>
                <Routes>
                {/* 1. Homepage */}
                <Route path="/" element={<HomePage />} />

                {/* 2. About NodalBot */}
                <Route path="/about" element={<AboutPage />} />

                {/* 3. NodalBot Academy Hub & Course Catalog */}
                <Route path="/academy" element={<AcademyPage />} />
                <Route path="/courses" element={<AcademyPage />} />
                <Route path="/course/:id" element={<CourseDetailsPage />} />

                {/* 4. 14 Career Pathways */}
                <Route path="/roadmaps" element={<CareerRoadmapsPage />} />
                <Route path="/career-paths" element={<CareerRoadmapsPage />} />

                {/* 5. Corporate Training (B2B) */}
                <Route path="/corporate-training" element={<CorporateTrainingPage />} />

                {/* 6. College Partnerships (Academia) */}
                <Route path="/college-training" element={<CollegeTrainingPage />} />

                {/* 7. NodalBot Digital Solutions (Enterprise Engineering) */}
                <Route path="/digital-solutions" element={<DigitalSolutionsPage />} />

                {/* 8. Industry Solutions */}
                <Route path="/industry-solutions" element={<IndustrySolutionsPage />} />

                {/* 9. Resources & Knowledge Hub */}
                <Route path="/resources" element={<ResourcesPage />} />

                {/* 10. Careers & Internships */}
                <Route path="/careers" element={<CareersPage />} />

                {/* 11. Contact Page */}
                <Route path="/contact" element={<ContactPage />} />

                {/* 12. Student Workspace & Authentication */}
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/portal" element={<StudentPortalPage />} />
                <Route path="/portal/learn/:courseId" element={<StudentLearnPage />} />
                <Route path="/portal/certificates" element={<StudentCertificatesPage />} />

                {/* 13. Admin & Content Management Console */}
                <Route path="/admin" element={<AdminPortalPage />} />

                {/* Legal Pages */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
                </PageTransition>
            </main>

            {/* Enterprise Global Footer */}
            <Footer />

            {/* Floating Verified WhatsApp Control */}
            <FloatingWhatsApp />

            {/* Global Lead & RFP Modal */}
            <LeadModal
              isOpen={globalModalOpen}
              onClose={() => setGlobalModalOpen(false)}
              streamType={globalModalType}
              initialTopic={globalModalTopic}
            />
          </div>
        </LearningProvider>
      </AuthProvider>
    </ThemeProvider>
  </Router>
  );
};

export default App;
