import { useEffect, useRef } from 'react';

export function useScrollReveal() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );

    // Observe the element and all its .scroll-reveal children
    const revealEls = element.querySelectorAll('.scroll-reveal');
    revealEls.forEach((el) => observer.observe(el));
    if (element.classList.contains('scroll-reveal')) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}
