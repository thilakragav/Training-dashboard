import React, { useState, useMemo } from 'react';
import { Search, Filter, SlidersHorizontal, BookOpen } from 'lucide-react';
import { COURSES_DATA } from '../../data/coursesData';
import { CourseCard } from './CourseCard';
import { CourseCategory, SkillLevel } from '../../types';

interface FeaturedCoursesProps {
  initialCategory?: string;
  isFullCatalog?: boolean;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({ 
  initialCategory = 'All',
  isFullCatalog = false 
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [selectedLevel, setSelectedLevel] = useState<string>('All');
  const [selectedMode, setSelectedMode] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'rating' | 'duration' | 'priceAsc' | 'priceDesc'>('rating');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Generative AI',
    'Data Analytics',
    'Data Engineering',
    'Full-Stack Development',
    'Databases & SQL',
    'Programming',
    'Cloud & DevOps'
  ];

  const levels = ['All', 'Beginner', 'Intermediate', 'Advanced'];
  const modes = ['All', 'Live Online', 'Hybrid (Classroom + Online)'];

  const filteredCourses = useMemo(() => {
    return COURSES_DATA.filter(course => {
      // Category match
      if (selectedCategory !== 'All' && course.category !== selectedCategory) {
        return false;
      }
      // Level match
      if (selectedLevel !== 'All' && course.level !== selectedLevel) {
        return false;
      }
      // Delivery mode match
      if (selectedMode !== 'All' && course.deliveryMode !== selectedMode) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesTitle = course.title.toLowerCase().includes(query);
        const matchesDesc = course.shortDescription.toLowerCase().includes(query);
        const matchesTech = course.technologiesCovered.some(t => t.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesTech) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'duration') return b.durationWeeks - a.durationWeeks;
      if (sortBy === 'priceAsc') return (a.publishedFee?.totalAmount || 0) - (b.publishedFee?.totalAmount || 0);
      if (sortBy === 'priceDesc') return (b.publishedFee?.totalAmount || 0) - (a.publishedFee?.totalAmount || 0);
      return 0;
    });
  }, [searchQuery, selectedCategory, selectedLevel, selectedMode, sortBy]);

  return (
    <section id="courses-section" className="py-20 bg-[#0B0F19] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-300 text-xs font-semibold mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Industrial Tech Catalog</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Specialized <span className="text-gradient">Technology Programs</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Every curriculum is engineered around verified industry capstones, live debugging sessions, and 1:1 mentor code reviews.
          </p>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="bg-[#0F172A] border border-slate-800 rounded-2xl p-4 mb-8 shadow-xl space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by topic, framework, or skill (e.g. PyTorch, React, SQL, RAG)..."
                className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-xs sm:text-sm focus:outline-none focus:border-blue-500 transition"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-2.5 text-xs text-slate-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Level Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">Level:</span>
              <select
                value={selectedLevel}
                onChange={e => setSelectedLevel(e.target.value)}
                className="px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
              >
                {levels.map(lvl => (
                  <option key={lvl} value={lvl}>{lvl === 'All' ? 'All Skill Levels' : lvl}</option>
                ))}
              </select>
            </div>

            {/* Mode Filter */}
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-400 font-mono hidden sm:inline">Mode:</span>
              <select
                value={selectedMode}
                onChange={e => setSelectedMode(e.target.value)}
                className="px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
              >
                {modes.map(m => (
                  <option key={m} value={m}>{m === 'All' ? 'All Delivery Modes' : m}</option>
                ))}
              </select>
            </div>

            {/* Sorting */}
            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5 text-slate-400" />
              <select
                value={sortBy}
                onChange={e => setSortBy(e.target.value as any)}
                className="px-3 py-2 bg-slate-900 border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-blue-500"
              >
                <option value="rating">Top Rated Faculty</option>
                <option value="duration">Duration (Longest First)</option>
                <option value="priceAsc">Fee (Low to High)</option>
                <option value="priceDesc">Fee (High to Low)</option>
              </select>
            </div>
          </div>

          {/* Category Horizontal Scroll Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 no-scrollbar text-left">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count & Active Filters Indicator */}
        <div className="flex items-center justify-between text-xs text-slate-400 mb-6">
          <span>Showing <strong className="text-white">{filteredCourses.length}</strong> technology programs</span>
          {(selectedCategory !== 'All' || selectedLevel !== 'All' || selectedMode !== 'All' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedMode('All');
                setSearchQuery('');
              }}
              className="text-blue-400 hover:underline"
            >
              Reset all filters
            </button>
          )}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="py-16 text-center bg-[#0F172A] border border-slate-800 rounded-3xl p-8 max-w-lg mx-auto space-y-4">
            <div className="w-12 h-12 bg-slate-800 text-slate-400 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white">No courses match your criteria</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Try clearing search terms or selecting 'All' in the category filters. Or speak directly with our counsellors to explore custom curricula.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSelectedLevel('All');
                setSelectedMode('All');
                setSearchQuery('');
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-xl transition"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
