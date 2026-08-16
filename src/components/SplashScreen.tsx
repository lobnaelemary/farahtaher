import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

interface SplashScreenProps {
  onComplete: () => void;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const logoWrapperRef = useRef<HTMLDivElement | null>(null);
  const typographyRef = useRef<HTMLDivElement | null>(null);
  const glowRef = useRef<HTMLDivElement | null>(null);
  const [isSkipped, setIsSkipped] = useState(false);

  useEffect(() => {
    if (!containerRef.current || !logoWrapperRef.current || !typographyRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          onComplete();
        }
      });

      tl.fromTo(
        logoWrapperRef.current,
        { scale: 1.8, opacity: 0 },
        { scale: 1.0, opacity: 1, duration: 1.4, ease: 'power2.out' }
      )
      .fromTo(
        typographyRef.current,
        { y: 25, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power2.out' },
        '-=1.0'
      )
      .fromTo(
        glowRef.current,
        { scale: 0.5, opacity: 0 },
        { scale: 1.2, opacity: 0.8, duration: 1.2, ease: 'power2.out' },
        '<'
      )
      .to({}, { duration: 1.8 }) 

      .to(typographyRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.in'
      })

      // ضبط الإحداثيات بدقة متناهية لتستقر جوة النافبار/السايدبار مباشرة
      .to(logoWrapperRef.current, {
        scale: 0.24,
        x: () => {
          const isLargeScreen = window.innerWidth >= 1024;
          return isLargeScreen ? -window.innerWidth / 2 + 48 : 0;
        },
        y: () => {
          const isLargeScreen = window.innerWidth >= 1024;
          return isLargeScreen ? -window.innerHeight / 2 + 52 : -window.innerHeight / 2 + 40;
        },
        duration: 1.1,
        ease: 'power3.inOut'
      }, '<')
      .to(
        glowRef.current,
        {
          opacity: 0,
          scale: 0.4,
          duration: 0.5,
          ease: 'power2.in'
        },
        '-=0.8'
      )
      .to(
        containerRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut'
        },
        '-=0.4'
      );
    }, containerRef);

    return () => ctx.revert();
  }, [onComplete]);

  const handleSkip = () => {
    if (isSkipped) return;
    setIsSkipped(true);
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: 'power2.out',
        onComplete: () => onComplete()
      });
    } else {
      onComplete();
    }
  };

  return (
    <div
      ref={containerRef}
      id="splash-screen-overlay"
      onClick={handleSkip}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#0b0c0e] text-center select-none cursor-pointer overflow-hidden"
    >
      {/* Background Radial Glow & Ambient Particles */}
      <div
        ref={glowRef}
        className="absolute w-[700px] h-[700px] rounded-full pointer-events-none opacity-0"
        style={{
          background: 'radial-gradient(circle, rgba(194, 165, 129, 0.25) 0%, rgba(194, 165, 129, 0.06) 45%, transparent 70%)',
          filter: 'blur(40px)'
        }}
      />

      {/* Geometric background grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#C2A5810a_1px,transparent_1px),linear-gradient(to_bottom,#C2A5810a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Main Centered Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center space-y-12 px-6">
        {/* Logo */}
        <div ref={logoWrapperRef} className="w-32 h-32 sm:w-40 sm:h-40 flex items-center justify-center opacity-0">
          <img
            src="/assets/img/logo.png"
            alt="Farah Taher Logo"
            className="w-full h-full object-contain drop-shadow-[0_0_40px_rgba(194,165,129,0.6)]"
          />
        </div>

        {/* Typography Layout */}
<div ref={typographyRef} className="flex flex-col items-center space-y-2 opacity-0">
  {/* الاسم بحجم ضخم وخط مميز جداً */}
  <h1 className="text-4xl sm:text-6xl font-serif-display font-black tracking-[0.15em] uppercase text-[#f9f3ea]">
    FARAH TAHER
  </h1>
  
  {/* المهنة بحجم أصغر بكتير وبخط رفيع لتبرز الاسم */}
  <div className="flex items-center gap-3 pt-1">
    <span className="w-8 h-[1px] bg-[#C2A581]/50" />
    <p className="font-sans text-sm sm:text-base text-[#C2A581] tracking-[0.3em] uppercase font-light">
      Analytics Consultant
    </p>
    <span className="w-8 h-[1px] bg-[#C2A581]/50" />
  </div>
</div>
      </div>
    </div>
  );
};