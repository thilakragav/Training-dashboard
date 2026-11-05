import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface PageTransitionProps {
  children: React.ReactNode;
}

export const PageTransition: React.FC<PageTransitionProps> = ({ children }) => {
  const location = useLocation();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.classList.remove('page-enter-active');
    el.classList.add('page-enter');
    
    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('page-enter-active');
        el.classList.remove('page-enter');
      });
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return (
    <div ref={ref} className="page-enter-active">
      {children}
    </div>
  );
};

export default PageTransition;
