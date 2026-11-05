import { PageBackground } from '../components/backgrounds/PageBackground';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Search, 
  Clock, 
  Calendar, 
  ArrowRight, 
  Download, 
  Tag, 
  X, 
  Sparkles,
  Share2,
  CheckCircle2
} from 'lucide-react';
import { RESOURCE_ARTICLES_DATA, COURSES_MASTER_CATALOG, COMPANY_INFO } from '../data/nodalbotData';
import { ResourceArticle } from '../types';

export const ResourcesPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [readingArticle, setReadingArticle] = useState<ResourceArticle | null>(null);

  const categories = [
    'All',
    'Data Engineering',
    'Generative AI',
    'Business Intelligence',
    'Career Guidance'
  ];

  const filteredArticles = RESOURCE_ARTICLES_DATA.filter((art) => {
    if (selectedCategory !== 'All' && art.category !== selectedCategory) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = art.title.toLowerCase().includes(q);
      const matchExcerpt = art.excerpt.toLowerCase().includes(q);
      const matchTag = art.tags.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchExcerpt && !matchTag) return false;
    }
    return true;
  });

  return (
    <div className="bg-nodal-bg min-h-screen text-slate-100 pt-28 pb-24">
      <PageBackground variant="resources" />
      
      {/* Hero Header */}
      <section className="relative py-16 bg-tech-grid overflow-hidden border-b border-nodal-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0066FF]/10 border border-[#0066FF]/30 text-[#00D2FF] font-mono text-xs uppercase tracking-widest mb-4 font-bold">
            <BookOpen className="w-3.5 h-3.5" /> NodalBot Knowledge Hub & Technical Guides
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-nodal-text tracking-tight font-display">
            Engineering Insights & <span className="text-gradient-electric">Learning Resources</span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-nodal-muted font-sans max-w-3xl mx-auto leading-relaxed">
            Architectural pattern deep dives, Model Context Protocol tutorials, Medallion Lakehouse benchmarks, and pragmatic technology career advice.
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <section className="py-6 bg-nodal-navy border-b border-nodal-border sticky top-16 z-30 backdrop-blur-md bg-nodal-navy/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#0066FF] text-white font-bold shadow-md shadow-[#0066FF]/30 border border-[#00D2FF]/40'
                    : 'bg-nodal-surface text-nodal-muted hover:text-white border border-nodal-border'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-nodal-muted" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search tutorials, topics..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-nodal-surface border border-nodal-border text-white text-xs placeholder:text-slate-500 focus:outline-none focus:border-[#0066FF]"
            />
          </div>

        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <div
                key={article.id}
                className="p-6 rounded-2xl bg-nodal-surface border border-nodal-border hover:border-[#0066FF]/40 transition-all duration-300 hover:-translate-y-1 shadow-xl flex flex-col justify-between group text-left"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 text-[10px] font-mono">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#0066FF]/15 text-[#00D2FF] border border-[#0066FF]/30 uppercase font-bold">
                      {article.category}
                    </span>
                    <span className="text-nodal-muted flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {article.readTime}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-nodal-text font-display group-hover:text-[#00D2FF] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="mt-3 text-xs text-nodal-muted font-sans leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {article.tags.map(t => (
                      <span key={t} className="px-2 py-0.5 rounded text-[10px] font-mono bg-nodal-card text-nodal-muted border border-nodal-border">
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-nodal-border flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <img
                      src={article.author.avatarUrl}
                      alt={article.author.name}
                      className="w-7 h-7 rounded-full object-cover border border-nodal-border"
                    />
                    <div className="text-[11px] font-mono text-nodal-muted">
                      {article.author.name}
                    </div>
                  </div>

                  <button
                    onClick={() => setReadingArticle(article)}
                    className="text-[#00D2FF] hover:underline font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Read Guide →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Downloadable Syllabi & Guides Section */}
          <div className="mt-20 p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-nodal-surface to-nodal-card border border-[#0066FF]/30 shadow-2xl text-left">
            <div className="max-w-3xl">
              <span className="text-xs font-mono font-bold uppercase text-[#00D2FF] tracking-wider block mb-2">
                FREE LEARNING ASSETS
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-nodal-text font-display">
                Official Curriculum Syllabi & Course Blueprints
              </h2>
              <p className="mt-3 text-xs sm:text-sm text-nodal-muted font-sans leading-relaxed">
                Download structured curriculum documents for our flagship programs to compare module objectives, lab requirements, and capstone specifications.
              </p>

              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                {COURSES_MASTER_CATALOG.slice(0, 4).map((c) => (
                  <Link
                    key={c.id}
                    to={`/course/${c.slug}`}
                    className="p-3.5 rounded-xl bg-nodal-navy border border-nodal-border hover:border-[#00D2FF]/50 flex items-center justify-between text-xs transition-colors group"
                  >
                    <span className="font-semibold text-white group-hover:text-[#00D2FF] truncate pr-2">
                      {c.title}
                    </span>
                    <Download className="w-4 h-4 text-[#00D2FF] shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Reading Article Modal */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in text-left">
          <div className="relative w-full max-w-3xl bg-nodal-surface border-2 border-[#0066FF]/40 rounded-3xl p-6 sm:p-10 shadow-2xl max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setReadingArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-xl text-nodal-muted hover:text-white bg-nodal-card border border-nodal-border"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#00D2FF] mb-2 pr-8">
              <span>{readingArticle.category}</span>
              <span>•</span>
              <span>{readingArticle.readTime}</span>
              <span>•</span>
              <span>{readingArticle.publishedDate}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-nodal-text font-display leading-tight">
              {readingArticle.title}
            </h2>

            <div className="flex items-center gap-3 my-4 py-3 border-y border-nodal-border text-xs">
              <img
                src={readingArticle.author.avatarUrl}
                alt={readingArticle.author.name}
                className="w-9 h-9 rounded-full object-cover border border-nodal-border"
              />
              <div>
                <span className="block font-bold text-white">{readingArticle.author.name}</span>
                <span className="block text-nodal-muted font-mono text-[10px]">{readingArticle.author.role}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none text-nodal-muted text-xs sm:text-sm font-sans leading-relaxed space-y-4">
              <div className="whitespace-pre-line font-sans">
                {readingArticle.contentMarkdown}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-nodal-border flex items-center justify-between">
              <span className="text-xs text-nodal-muted">NodalBot Technologies Research Hub</span>
              <button
                onClick={() => setReadingArticle(null)}
                className="btn-primary text-xs py-2 px-5"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};
