import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  GraduationCap, 
  Menu, 
  X, 
  Compass, 
  BookOpen, 
  Layers, 
  FlaskConical, 
  PhoneCall, 
  User as UserIcon, 
  LogOut, 
  ShieldAlert, 
  ChevronDown,
  Sparkles
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useLearning } from '../../context/LearningContext';

export const Navbar: React.FC = () => {
  const location = useLocation();
  const { user, isAuthenticated, isAdmin, logout, switchToDemoStudent, switchToDemoAdmin } = useAuth();
  const { openCounsellingModal } = useLearning();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setUserDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Courses', path: '/courses' },
    { name: 'Career Roadmaps', path: '/roadmaps' },
    { name: 'Projects', path: '/projects' },
    { name: 'Free Lab', path: '/learning-lab', badge: 'Interactive' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0B0F19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3' 
          : 'bg-[#0B0F19]/60 backdrop-blur-sm border-b border-slate-800/40 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <Link to="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-violet-500 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300 border border-blue-400/30">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div className="text-left">
            <span className="block text-base sm:text-lg font-black tracking-tight text-white group-hover:text-blue-400 transition-colors font-sans">
              NEXORA
            </span>
            <span className="block text-[10px] tracking-widest font-semibold uppercase text-slate-400 -mt-1 font-mono">
              TECH ACADEMY
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-1.5 rounded-lg text-xs xl:text-sm font-medium transition-all duration-200 relative ${
                isActive(link.path)
                  ? 'text-white bg-blue-600/15 border border-blue-500/30 font-semibold'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {link.name}
              {link.badge && (
                <span className="ml-1.5 px-1.5 py-0.5 text-[9px] font-bold rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 uppercase tracking-wider">
                  {link.badge}
                </span>
              )}
            </Link>
          ))}
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Quick Counselling booking trigger */}
          <button
            onClick={openCounsellingModal}
            className="text-xs font-semibold text-slate-300 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800/80 transition flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Book Counselling</span>
          </button>

          {/* User Auth or Dropdown */}
          {isAuthenticated && user ? (
            <div className="relative">
              <button
                onClick={() => setUserDropdownOpen(!userDropdownOpen)}
                className="flex items-center gap-2 pl-2 pr-3 py-1.5 bg-slate-900 border border-slate-700 hover:border-slate-600 rounded-xl transition text-left"
              >
                <img 
                  src={user.avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=200&q=80'} 
                  alt={user.fullName} 
                  className="w-7 h-7 rounded-lg object-cover border border-blue-400/30"
                />
                <div className="text-left leading-tight hidden xl:block">
                  <div className="text-xs font-bold text-white max-w-[100px] truncate">{user.fullName}</div>
                  <div className="text-[10px] text-blue-400 font-mono">{user.role}</div>
                </div>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {userDropdownOpen && (
                <div className="absolute right-0 mt-2 w-56 bg-[#0F172A] border border-slate-800 rounded-2xl shadow-2xl p-2 z-50 text-left animate-fadeIn">
                  <div className="p-2 border-b border-slate-800 mb-1">
                    <p className="text-xs font-bold text-white">{user.fullName}</p>
                    <p className="text-[11px] text-slate-400 truncate">{user.email}</p>
                    <div className="mt-1 inline-block px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-500/20 text-blue-300">
                      Streak: {user.streakDays} Days 🔥
                    </div>
                  </div>

                  {user.role === 'STUDENT' ? (
                    <Link
                      to="/portal"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-200 hover:bg-slate-800 rounded-xl transition"
                    >
                      <UserIcon className="w-4 h-4 text-blue-400" />
                      Student Portal Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/admin"
                      className="flex items-center gap-2 px-3 py-2 text-xs font-medium text-amber-300 hover:bg-slate-800 rounded-xl transition"
                    >
                      <ShieldAlert className="w-4 h-4 text-amber-400" />
                      Admin Control Panel
                    </Link>
                  )}

                  <div className="border-t border-slate-800/80 my-1 pt-1">
                    <button
                      onClick={switchToDemoStudent}
                      className="w-full text-left px-3 py-1.5 text-[11px] text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
                    >
                      Switch to Demo Student
                    </button>
                    <button
                      onClick={switchToDemoAdmin}
                      className="w-full text-left px-3 py-1.5 text-[11px] text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition"
                    >
                      Switch to Demo Admin
                    </button>
                    <button
                      onClick={logout}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-xs text-rose-400 hover:bg-rose-500/10 rounded-lg transition mt-1"
                    >
                      <LogOut className="w-3.5 h-3.5" />
                      Sign Out
                    </button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <Link
              to="/login"
              className="text-xs font-medium text-slate-300 hover:text-white px-3 py-2 rounded-xl hover:bg-slate-800 transition"
            >
              Student Login
            </Link>
          )}

          {/* Prominent "Explore Courses" button */}
          <Link
            to="/courses"
            className="px-4 py-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white font-semibold text-xs xl:text-sm rounded-xl shadow-md shadow-blue-600/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Explore Courses
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            to="/courses"
            className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg"
          >
            Courses
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white bg-slate-900 border border-slate-800 rounded-xl"
            aria-label="Toggle mobile navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-[#0F172A] border-b border-slate-800 shadow-2xl p-5 max-h-[85vh] overflow-y-auto animate-fadeIn text-left">
          <div className="space-y-1 mb-4">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3.5 py-2.5 rounded-xl text-sm font-medium transition ${
                  isActive(link.path)
                    ? 'bg-blue-600/20 text-blue-400 font-semibold border border-blue-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{link.name}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-800 space-y-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openCounsellingModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 bg-violet-600/20 border border-violet-500/40 text-violet-300 rounded-xl text-xs font-semibold"
            >
              <Sparkles className="w-4 h-4" /> Book Free 1-on-1 Counselling
            </button>

            {isAuthenticated && user ? (
              <div className="bg-slate-900 p-3 rounded-xl border border-slate-800 space-y-2">
                <div className="flex items-center gap-3">
                  <img src={user.avatarUrl} alt="" className="w-9 h-9 rounded-lg object-cover" />
                  <div>
                    <p className="text-xs font-bold text-white">{user.fullName}</p>
                    <p className="text-[11px] text-blue-400 font-mono">{user.role}</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-2 pt-1">
                  <Link
                    to={user.role === 'ADMIN' ? '/admin' : '/portal'}
                    className="py-2 text-center text-xs font-semibold bg-blue-600 text-white rounded-lg"
                  >
                    Go to Portal
                  </Link>
                  <button
                    onClick={logout}
                    className="py-2 text-center text-xs font-medium bg-slate-800 text-rose-400 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/login"
                className="w-full block py-2.5 text-center text-xs font-semibold bg-slate-800 text-slate-200 rounded-xl"
              >
                Student / Admin Login
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
