import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Clock, 
  Signal, 
  MapPin, 
  Bookmark, 
  BookmarkCheck, 
  ArrowRight, 
  Star, 
  FileText, 
  MessageSquare,
  Users
} from 'lucide-react';
import { Course } from '../../types';
import { useLearning } from '../../context/LearningContext';

interface CourseCardProps {
  course: Course;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const { isBookmarked, toggleBookmark, openEnquiryModal } = useLearning();
  const bookmarked = isBookmarked(course.id);

  return (
    <div className="group relative bg-[#0F172A] border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-950/40 hover:-translate-y-1 flex flex-col justify-between text-left">
      
      {/* Top Meta & Badges */}
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-blue-500/15 text-blue-400 border border-blue-500/25">
              {course.category}
            </span>
            {course.badge && (
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/15 text-amber-300 border border-amber-500/30">
                {course.badge}
              </span>
            )}
          </div>

          <button
            onClick={() => toggleBookmark(course.id)}
            aria-label={bookmarked ? 'Remove bookmark' : 'Bookmark course'}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition"
          >
            {bookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-blue-400 fill-blue-400" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Title */}
        <Link to={`/course/${course.slug}`}>
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors line-clamp-2">
            {course.title}
          </h3>
        </Link>

        {/* Description */}
        <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
          {course.shortDescription}
        </p>

        {/* Course Specs Pill Row */}
        <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-3 gap-2 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5 truncate">
            <Signal className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="truncate">{course.level}</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <Clock className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="truncate">{course.durationWeeks} Weeks</span>
          </div>
          <div className="flex items-center gap-1.5 truncate">
            <MapPin className="w-3.5 h-3.5 text-blue-400 flex-shrink-0" />
            <span className="truncate">{course.deliveryMode.split(' ')[0]}</span>
          </div>
        </div>

        {/* Technologies Covered Badges */}
        <div className="mt-4">
          <div className="flex flex-wrap gap-1.5">
            {course.technologiesCovered.slice(0, 4).map(tech => (
              <span key={tech} className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 rounded">
                {tech}
              </span>
            ))}
            {course.technologiesCovered.length > 4 && (
              <span className="px-2 py-0.5 bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-400 rounded">
                +{course.technologiesCovered.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Pricing & CTA Actions */}
      <div className="mt-6 pt-4 border-t border-slate-800">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            {course.publishedFee ? (
              <div>
                <span className="text-lg font-black text-white">
                  ₹{course.publishedFee.totalAmount.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-slate-400 ml-1.5">
                  (or ₹{course.publishedFee.emiStartsAt}/mo EMI)
                </span>
              </div>
            ) : (
              <span className="text-xs text-slate-400">Fee on Consultation</span>
            )}
          </div>

          <div className="flex items-center gap-1 text-xs text-amber-400 font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{course.rating}</span>
            <span className="text-slate-500 text-[10px]">({course.reviewCount})</span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <Link
            to={`/course/${course.slug}`}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white rounded-xl text-xs font-semibold transition"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View Syllabus</span>
          </Link>
          <button
            onClick={() => openEnquiryModal(course)}
            className="flex items-center justify-center gap-1 px-3 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold shadow-md shadow-blue-600/25 transition"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Enquire Now</span>
          </button>
        </div>
      </div>

    </div>
  );
};
