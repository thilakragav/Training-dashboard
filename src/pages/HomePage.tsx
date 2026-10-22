import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { CareerDiscoveryQuiz } from '../components/home/CareerDiscoveryQuiz';
import { FeaturedCourses } from '../components/home/FeaturedCourses';
import { LearningLab } from '../components/home/LearningLab';
import { ProjectShowcase } from '../components/home/ProjectShowcase';
import { HowItWorks } from '../components/home/HowItWorks';
import { MentorsAndWorkshops } from '../components/home/MentorsAndWorkshops';
import { TrustAndOutcomes } from '../components/home/TrustAndOutcomes';
import { FinalCtaSection } from '../components/home/FinalCtaSection';

export const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0F19]">
      <HeroSection />
      <CareerDiscoveryQuiz />
      <FeaturedCourses />
      <LearningLab />
      <ProjectShowcase />
      <HowItWorks />
      <MentorsAndWorkshops />
      <TrustAndOutcomes />
      <FinalCtaSection />
    </div>
  );
};
