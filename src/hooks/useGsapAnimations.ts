import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useGsapPageTransition = (dependency: any) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade and slide in content smoothly
      gsap.fromTo(
        containerRef.current,
        {
          opacity: 0,
          y: 24,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power3.out',
        }
      );

      // Stagger elements with data-gsap="stagger"
      const staggerElements = containerRef.current?.querySelectorAll('[data-gsap="stagger"]');
      if (staggerElements && staggerElements.length > 0) {
        gsap.fromTo(
          staggerElements,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: 'power2.out',
            delay: 0.1,
          }
        );
      }

      // Animate progress bars with data-gsap="progress"
      const progressBars = containerRef.current?.querySelectorAll('[data-gsap="progress"]');
      if (progressBars && progressBars.length > 0) {
        progressBars.forEach((bar) => {
          const width = (bar as HTMLElement).getAttribute('data-width') || '100%';
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: width,
              duration: 1.2,
              ease: 'power3.inOut',
              delay: 0.3,
            }
          );
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [dependency]);

  return containerRef;
};
