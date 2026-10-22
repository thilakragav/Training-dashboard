import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { LearningProvider } from './context/LearningContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';

// Modals
import { EnquiryModal } from './components/modals/EnquiryModal';
import { CounsellingModal } from './components/modals/CounsellingModal';
import { WorkshopRegisterModal } from './components/modals/WorkshopRegisterModal';
import { ProjectDetailModal } from './components/modals/ProjectDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { CoursesPage } from './pages/CoursesPage';
import { CourseDetailsPage } from './pages/CourseDetailsPage';
import { CareerRoadmapsPage } from './pages/CareerRoadmapsPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { LearningLabPage } from './pages/LearningLabPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { StudentPortalPage } from './pages/StudentPortalPage';
import { StudentLearnPage } from './pages/StudentLearnPage';
import { StudentCertificatesPage } from './pages/StudentCertificatesPage';
import { AdminPortalPage } from './pages/AdminPortalPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { TermsPage } from './pages/TermsPage';

export const App: React.FC = () => {
  return (
    <Router>
      <AuthProvider>
        <LearningProvider>
          <ScrollToTop />
          <div className="flex flex-col min-h-screen bg-[#0B0F19] text-slate-100 selection:bg-blue-500/30 selection:text-blue-200">
            <Navbar />
            
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/courses" element={<CoursesPage />} />
                <Route path="/course/:id" element={<CourseDetailsPage />} />
                <Route path="/roadmaps" element={<CareerRoadmapsPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/learning-lab" element={<LearningLabPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
                {/* Student Area */}
                <Route path="/portal" element={<StudentPortalPage />} />
                <Route path="/portal/learn/:courseId" element={<StudentLearnPage />} />
                <Route path="/portal/certificates" element={<StudentCertificatesPage />} />
                
                {/* Admin Area */}
                <Route path="/admin" element={<AdminPortalPage />} />

                {/* Legal */}
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />

                {/* Fallback */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />

            {/* Global Interactive Modals */}
            <EnquiryModal />
            <CounsellingModal />
            <WorkshopRegisterModal />
            <ProjectDetailModal />
          </div>
        </LearningProvider>
      </AuthProvider>
    </Router>
  );
};

export default App;
