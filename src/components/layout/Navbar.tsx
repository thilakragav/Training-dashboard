import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  BookOpen, 
  Compass, 
  Building, 
  GraduationCap, 
  Briefcase, 
  Layers, 
  ArrowRight, 
  Sparkles,
  Send,
  ExternalLink
} from 'lucide-react';
import { NodalBotLogo } from '../ui/NodalBotLogo';
import { ThemeToggle } from '../ui/ThemeToggle';

interface NavbarProps {
  onOpenLeadModal?: (type: string, initialTopic?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenLeadModal }) => {
  const location = useLocation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  
  // Desktop dropdown state
  const [academyOpen, setAcademyOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);

  // Mobile accordion state ('academy' | 'solutions' | null)
  const [mobileSubmenu, setMobileSubmenu] = useState<'academy' | 'solutions' | null>(null);

  const academyDropdownRef = useRef<HTMLDivElement>(null);
  const solutionsDropdownRef = useRef<HTMLDivElement>(null);

  // Handle sticky blur on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileDrawerOpen(false);
    setAcademyOpen(false);
    setSolutionsOpen(false);
    setMobileSubmenu(null);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileDrawerOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileDrawerOpen]);

  // Close desktop dropdowns on outside click or Escape key
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        academyDropdownRef.current && 
        !academyDropdownRef.current.contains(event.target as Node)
      ) {
        setAcademyOpen(false);
      }
      if (
        solutionsDropdownRef.current && 
        !solutionsDropdownRef.current.contains(event.target as Node)
      ) {
        setSolutionsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setAcademyOpen(false);
        setSolutionsOpen(false);
        setMobileDrawerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  // Route active helper
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const isAcademyActive = () => {
    return (
      isActive('/academy') || 
      isActive('/courses') || 
      isActive('/course') || 
      isActive('/roadmaps') || 
      isActive('/career-paths') || 
      isActive('/corporate-training') || 
      isActive('/college-training')
    );
  };

  const isSolutionsActive = () => {
    return (
      isActive('/digital-solutions') || 
      isActive('/industry-solutions')
    );
  };

  const handleGetStartedClick = () => {
    if (onOpenLeadModal) {
      onOpenLeadModal('student_course_enquiry', 'Get Started with NodalBot');
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF8F4]/95 dark:bg-[#25231F]/95 backdrop-blur-md border-b border-nodal-border shadow-warm-sm py-3' 
          : 'bg-[#F5F0E8]/85 dark:bg-[#25231F]/85 backdrop-blur-sm border-b border-nodal-border/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="flex items-center group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C56845] rounded-lg"
          aria-label="NodalBot Technologies Home"
        >
          <NodalBotLogo size="md" showTagline={false} />
        </Link>

        {/* Desktop Navigation (Items 1 through 6) */}
        <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
          
          {/* 1. Home */}
          <Link
            to="/"
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              location.pathname === '/' 
                ? 'text-[#C56845] dark:text-[#E5A17D] bg-[#F0E2D7] dark:bg-[#37332D] font-medium' 
                : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/50 font-normal'
            }`}
          >
            Home
          </Link>

          {/* 2. About */}
          <Link
            to="/about"
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isActive('/about') 
                ? 'text-[#C56845] dark:text-[#E5A17D] bg-[#F0E2D7] dark:bg-[#37332D] font-medium' 
                : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/50 font-normal'
            }`}
          >
            About
          </Link>

          {/* 3. Academy Dropdown */}
          <div 
            ref={academyDropdownRef}
            className="relative"
            onMouseEnter={() => setAcademyOpen(true)}
            onMouseLeave={() => setAcademyOpen(false)}
          >
            <button
              onClick={() => setAcademyOpen(!academyOpen)}
              aria-expanded={academyOpen}
              aria-haspopup="true"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                isAcademyActive() || academyOpen ? 'text-nodal-cyan bg-nodal-blue/15 border border-nodal-cyan/40 shadow-sm' : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/70'
              }`}
            >
              <span>Academy</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${academyOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Academy Dropdown Menu */}
            {academyOpen && (
              <div 
                className="absolute top-full left-0 mt-1.5 w-[380px] rounded-2xl bg-nodal-surface border border-nodal-border p-3 shadow-2xl shadow-black/80 backdrop-blur-xl animate-fade-in z-50"
                role="menu"
              >
                <div className="px-3 py-2 border-b border-nodal-border mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#C56845] dark:text-[#E5A17D]">
                    NodalBot Academy
                  </span>
                  <span className="text-[10px] text-nodal-muted font-mono">Education Division</span>
                </div>

                <div className="space-y-1">
                  {/* All Courses */}
                  <Link
                    to="/academy"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#C56845]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C56845]/15 border border-[#C56845]/25 flex items-center justify-center text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <BookOpen className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-cyan transition-colors">
                        All Courses
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        6 technical domains: Data Engineering, AI/GenAI, BI, RPA & Cloud.
                      </p>
                    </div>
                  </Link>

                  {/* Career Roadmaps */}
                  <Link
                    to="/roadmaps"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#C56845]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C56845]/15 border border-[#C56845]/25 flex items-center justify-center text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Compass className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-cyan transition-colors">
                        Career Roadmaps
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        14 calibrated career pathways from beginner to enterprise tech lead.
                      </p>
                    </div>
                  </Link>

                  {/* Corporate Training */}
                  <Link
                    to="/corporate-training"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#C56845]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C56845]/15 border border-[#C56845]/25 flex items-center justify-center text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-cyan transition-colors">
                        Corporate Training
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        Custom team bootcamps, enterprise RFPs, and production skill assessments.
                      </p>
                    </div>
                  </Link>

                  {/* College Training */}
                  <Link
                    to="/college-training"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#C56845]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#C56845]/15 border border-[#C56845]/25 flex items-center justify-center text-[#C56845] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-cyan transition-colors">
                        College Training
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        University MOUs, Faculty Development Programs (FDP), & student hackathons.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 4. Solutions Dropdown */}
          <div 
            ref={solutionsDropdownRef}
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              aria-expanded={solutionsOpen}
              aria-haspopup="true"
              className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 flex items-center gap-1.5 ${
                isSolutionsActive() || solutionsOpen ? 'text-nodal-violet bg-nodal-violet/15 border border-nodal-violet/40 shadow-sm' : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/70'
              }`}
            >
              <span>Solutions</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${solutionsOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Solutions Dropdown Menu */}
            {solutionsOpen && (
              <div 
                className="absolute top-full left-0 mt-1.5 w-[380px] rounded-2xl bg-nodal-surface border border-nodal-border p-3 shadow-2xl shadow-black/80 backdrop-blur-xl animate-fade-in z-50"
                role="menu"
              >
                <div className="px-3 py-2 border-b border-nodal-border mb-2 flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#8F4F35] dark:text-[#E5A17D]">
                    NodalBot Digital Solutions
                  </span>
                  <span className="text-[10px] text-nodal-muted font-mono">Engineering Division</span>
                </div>

                <div className="space-y-1">
                  {/* Digital Solutions */}
                  <Link
                    to="/digital-solutions"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#8F4F35]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#8F4F35]/15 border border-[#8F4F35]/25 flex items-center justify-center text-[#8F4F35] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Briefcase className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-violet transition-colors">
                        Digital Solutions
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        Enterprise software, data platforms, AI agents, cloud architectures & RPA.
                      </p>
                    </div>
                  </Link>

                  {/* Industry Solutions */}
                  <Link
                    to="/industry-solutions"
                    role="menuitem"
                    className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-nodal-card border border-transparent hover:border-[#8F4F35]/30 transition-all group"
                  >
                    <div className="w-9 h-9 rounded-lg bg-[#8F4F35]/15 border border-[#8F4F35]/25 flex items-center justify-center text-[#8F4F35] dark:text-[#E5A17D] shrink-0 mt-0.5 group-hover:scale-105 transition-transform">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1 text-sm font-bold text-nodal-text group-hover:text-nodal-violet transition-colors">
                        Industry Solutions
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-nodal-muted mt-0.5">
                        Domain blueprints for BFSI, Healthcare, Retail, Logistics & SaaS sectors.
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* 5. Resources */}
          <Link
            to="/resources"
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isActive('/resources') 
                ? 'text-white bg-[#0066FF]/15 border border-[#0066FF]/40 shadow-sm' 
                : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/70'
            }`}
          >
            Resources
          </Link>

          {/* 6. Contact */}
          <Link
            to="/contact"
            className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
              isActive('/contact') 
                ? 'text-white bg-[#0066FF]/15 border border-[#0066FF]/40 shadow-sm' 
                : 'text-nodal-muted hover:text-nodal-text hover:bg-nodal-surface/70'
            }`}
          >
            Contact
          </Link>

        </nav>

        {/* 7. Get Started (Primary CTA on Desktop) & Theme Switcher */}
        <div className="hidden lg:flex items-center gap-2.5">
          <ThemeToggle />
          
          <button
            onClick={handleGetStartedClick}
            className="btn-primary"
            aria-label="Get Started with NodalBot"
          >
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-1.5" />
          </button>
        </div>

        {/* Mobile Hamburger & Quick CTA */}
        <div className="flex lg:hidden items-center gap-2">
          <ThemeToggle />

          <button
            onClick={handleGetStartedClick}
            className="px-3.5 py-2 rounded-xl text-xs font-bold text-white bg-[#C56845] shadow-sm flex items-center gap-1"
          >
            <span>Get Started</span>
          </button>

          <button
            onClick={() => setMobileDrawerOpen(true)}
            className="p-2.5 rounded-xl text-nodal-text hover:text-nodal-blue bg-nodal-surface border border-nodal-border hover:border-nodal-blue/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C56845]"
            aria-label="Open mobile navigation"
            aria-expanded={mobileDrawerOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

      </div>

      {/* =========================================================================
          FULL-FEATURED MOBILE NAVIGATION DRAWER
          ========================================================================= */}
      {mobileDrawerOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Drawer"
        >
          {/* Backdrop overlay */}
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileDrawerOpen(false)}
            aria-hidden="true"
          />

          {/* Right-Side Slide-Over Drawer Container */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-nodal-surface border-l border-nodal-border h-full flex flex-col justify-between shadow-2xl z-10 animate-slide-left overflow-hidden">
            
            {/* Drawer Header */}
            <div className="p-4 sm:p-5 border-b border-nodal-border flex items-center justify-between bg-nodal-surface">
              <Link 
                to="/" 
                onClick={() => setMobileDrawerOpen(false)}
                className="flex items-center"
              >
                <NodalBotLogo size="sm" showTagline={false} />
              </Link>
              
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  onClick={() => setMobileDrawerOpen(false)}
                  className="p-2 rounded-xl text-nodal-muted hover:text-nodal-text bg-nodal-card border border-nodal-border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C56845]"
                  aria-label="Close mobile navigation"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Scrollable Navigation Body */}
            <div className="flex-1 overflow-y-auto px-4 py-5 space-y-2">
              
              {/* Home */}
              <Link
                to="/"
                onClick={() => setMobileDrawerOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
                  location.pathname === '/' 
                    ? 'text-nodal-cyan bg-nodal-blue/15 border border-nodal-blue/30' : 'text-nodal-text hover:bg-nodal-card'
                }`}
              >
                <span>Home</span>
                <ArrowRight className="w-4 h-4 text-nodal-muted" />
              </Link>

              {/* About */}
              <Link
                to="/about"
                onClick={() => setMobileDrawerOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
                  isActive('/about') 
                    ? 'text-nodal-cyan bg-nodal-blue/15 border border-nodal-blue/30' : 'text-nodal-text hover:bg-nodal-card'
                }`}
              >
                <span>About</span>
                <ArrowRight className="w-4 h-4 text-nodal-muted" />
              </Link>

              {/* Academy Accordion */}
              <div className="rounded-xl border border-nodal-border overflow-hidden bg-nodal-surface/60">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'academy' ? null : 'academy')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-nodal-text hover:bg-nodal-card transition-colors min-h-[48px]"
                  aria-expanded={mobileSubmenu === 'academy'}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#00D2FF]"></span>
                    <span>Academy</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-nodal-muted transition-transform duration-200 ${mobileSubmenu === 'academy' ? 'rotate-180 text-[#C56845] dark:text-[#E5A17D]' : ''}`} />
                </button>

                {mobileSubmenu === 'academy' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 bg-nodal-surface border-t border-nodal-border/70 animate-fade-in">
                    <Link
                      to="/academy"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <BookOpen className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                      <span>All Courses</span>
                    </Link>

                    <Link
                      to="/roadmaps"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <Compass className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                      <span>Career Roadmaps (14 Paths)</span>
                    </Link>

                    <Link
                      to="/corporate-training"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <Building className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                      <span>Corporate Training</span>
                    </Link>

                    <Link
                      to="/college-training"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <GraduationCap className="w-4 h-4 text-[#C56845] dark:text-[#E5A17D] shrink-0" />
                      <span>College Training</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Solutions Accordion */}
              <div className="rounded-xl border border-nodal-border overflow-hidden bg-nodal-surface/60">
                <button
                  onClick={() => setMobileSubmenu(mobileSubmenu === 'solutions' ? null : 'solutions')}
                  className="w-full flex items-center justify-between px-4 py-3 text-base font-bold text-nodal-text hover:bg-nodal-card transition-colors min-h-[48px]"
                  aria-expanded={mobileSubmenu === 'solutions'}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
                    <span>Solutions</span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-nodal-muted transition-transform duration-200 ${mobileSubmenu === 'solutions' ? 'rotate-180 text-[#8B5CF6]' : ''}`} />
                </button>

                {mobileSubmenu === 'solutions' && (
                  <div className="px-3 pb-3 pt-1 space-y-1 bg-nodal-surface border-t border-nodal-border/70 animate-fade-in">
                    <Link
                      to="/digital-solutions"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <Briefcase className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>Digital Solutions</span>
                    </Link>

                    <Link
                      to="/industry-solutions"
                      onClick={() => setMobileDrawerOpen(false)}
                      className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-semibold text-nodal-muted hover:text-nodal-text hover:bg-nodal-card transition-colors min-h-[44px]"
                    >
                      <Layers className="w-4 h-4 text-[#8B5CF6] shrink-0" />
                      <span>Industry Solutions (8 Sectors)</span>
                    </Link>
                  </div>
                )}
              </div>

              {/* Resources */}
              <Link
                to="/resources"
                onClick={() => setMobileDrawerOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
                  isActive('/resources') 
                    ? 'text-nodal-cyan bg-nodal-blue/15 border border-nodal-blue/30' : 'text-nodal-text hover:bg-nodal-card'
                }`}
              >
                <span>Resources</span>
                <ArrowRight className="w-4 h-4 text-nodal-muted" />
              </Link>

              {/* Contact */}
              <Link
                to="/contact"
                onClick={() => setMobileDrawerOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all min-h-[48px] ${
                  isActive('/contact') 
                    ? 'text-nodal-cyan bg-nodal-blue/15 border border-nodal-blue/30' : 'text-nodal-text hover:bg-nodal-card'
                }`}
              >
                <span>Contact</span>
                <ArrowRight className="w-4 h-4 text-nodal-muted" />
              </Link>

            </div>

            {/* Mobile Drawer Bottom Action CTA */}
            <div className="p-4 sm:p-5 border-t border-nodal-border bg-nodal-bg space-y-3 pb-safe">
              <button
                onClick={() => {
                  setMobileDrawerOpen(false);
                  handleGetStartedClick();
                }}
                className="w-full py-3.5 px-4 rounded-xl text-sm font-bold text-white bg-[#C56845] shadow-lg shadow-[#0066FF]/30 flex items-center justify-center gap-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <div className="text-center">
                <span className="text-[11px] font-mono text-nodal-muted">
                  Chennai, Tamil Nadu, India • Mon–Sat 9AM–7:30PM
                </span>
              </div>
            </div>

          </div>
        </div>
      )}

    </header>
  );
};
