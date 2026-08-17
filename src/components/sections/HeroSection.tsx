import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Sparkles,
  ChevronRight,
  BarChart2,
  Brain,
  TrendingUp,
  ShieldCheck,
  Truck,
  Building2,
  Boxes,
  RotateCcw
} from 'lucide-react';
import { SectionId, ProjectData } from '../../types';
import { PERSONAL_INFO, IMPACT_STATS, PROJECTS, CORE_PILLARS, INDUSTRY_EXPERTISE } from '../../data/portfolioData';
import { useGsapPageTransition } from '../../hooks/useGsapAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface HeroSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenProject: (project: ProjectData) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onNavigate,
  onOpenProject
}) => {
  const containerRef = useGsapPageTransition('hero');
  const verticalsContainerRef = useRef<HTMLDivElement | null>(null);
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const pillarsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [flippedCards, setFlippedCards] = useState<Record<string, boolean>>({});

  const toggleCard = (id: string) => {
    setFlippedCards(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const industryIcons: Record<string, React.ComponentType<{ className?: string }>> = {
    financial: ShieldCheck,
    'supply-chain': Boxes,
    transportation: Truck,
    'public-sector': Building2
  };

  const techTools = [
    'POWER BI', 'PYTHON', 'TABLEAU', 'SQL', 'ALTERYX', 'SNOWFLAKE', 'SIGMA', 'MACHINE LEARNING'
  ];

  useEffect(() => {
    if (marqueeRef.current) {
      const content = marqueeRef.current.querySelector('.marquee-content') as HTMLElement;
      if (content) {
        const totalWidth = content.scrollWidth / 2;
        gsap.to(content, {
          x: -totalWidth,
          duration: 30,
          ease: 'linear',
          repeat: -1
        });
      }
    }

    if (verticalsContainerRef.current) {
      const cards = verticalsContainerRef.current.querySelectorAll('.vertical-card');
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.95 },
        {
          y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: verticalsContainerRef.current, start: 'top 85%' }
        }
      );
    }

    // تأثير التكبير والظهور تدريجياً مع السكرول لكل بند رأسي
    pillarsRef.current.forEach((card) => {
      if (card) {
        gsap.fromTo(
          card,
          { scale: 0.75, opacity: 0.1, y: 60 },
          {
            scale: 1,
            opacity: 1,
            y: 0,
            ease: 'none',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              end: 'top 45%',
              scrub: 0.5,
            }
          }
        );
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={containerRef} className="space-y-16 lg:space-y-24 pb-12">
      {/* Top Hero Section */}
      <div className="space-y-0 pt-2">
        
        {/* الهيرو: الصورة بجانب النص حتى في شاشات الموبايل والتابلت والديسك توب */}
        <div className="flex flex-row items-center justify-between gap-4 sm:gap-8">
          
          <div className="flex-1 flex flex-col justify-center space-y-4 sm:space-y-6 py-2" data-gsap="stagger">
            <div className="flex items-center gap-3">
              <span className="w-8 sm:w-10 h-[2px] bg-[#C2A581]" />
              <span className="design-eyebrow tracking-[0.2em] sm:tracking-[0.3em]">HELLO, I'M</span>
            </div>

            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-3xl sm:text-5xl lg:text-7xl font-serif-display font-bold text-[#f9f3ea] tracking-tight uppercase leading-none">
                FARAH <br />
                <span className="gold-gradient-text">TAHER</span>
              </h1>
              <div className="pt-1">
                <span className="inline-block text-[10px] sm:text-xs font-mono tracking-[0.15em] sm:tracking-[0.2em] text-[#C2A581] border-b border-[#C2A581]/40 pb-1 uppercase font-semibold">
                  ANALYTICS CONSULTANT & DATA SPECIALIST
                </span>
              </div>
            </div>

            <p className="design-body max-w-xl text-xs sm:text-base lg:text-lg leading-relaxed text-[#d5d0c5]">
              {PERSONAL_INFO.heroTagline}{' '}
              <span className="text-[#f5ebd8] font-medium">
                Transforming complex, multi-source data into clear insights, automated workflows, and measurable business impact.
              </span>
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('projects')}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-7 py-3 sm:py-4 rounded-xl bg-[#C2A581] hover:bg-[#d4b995] text-[#0b0c0e] font-sans font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase shadow-[0_0_30px_rgba(194,165,129,0.35)] hover:scale-105 transition-all duration-300 cursor-pointer group"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={() => onNavigate('contact')}
                className="flex items-center justify-between gap-3 sm:gap-4 px-5 sm:px-7 py-3 sm:py-4 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] hover:bg-[#C2A581] text-[#C2A581] hover:text-[#0b0c0e] font-sans font-bold text-[10px] sm:text-xs tracking-[0.15em] uppercase transition-all duration-300 cursor-pointer group shadow-sm"
              >
                <span>LET'S CONNECT</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover:translate-x-1.5" />
              </button>
            </div>
          </div>

          {/* الصورة بجانب النص تماماً في كافة المقاسات */}
          <div className="w-[130px] sm:w-[240px] md:w-[320px] lg:w-[420px] shrink-0 flex flex-col justify-end items-end relative" data-gsap="stagger">
            <div className="absolute inset-0 bg-gradient-to-t from-[#C2A581]/10 via-transparent to-transparent rounded-3xl blur-3xl pointer-events-none" />
<div className="relative w-full h-[360px] sm:h-[400px] md:h-[450px] lg:h-[580px] flex items-end justify-center">              <img 
                src="/assets/img/farah taher.png" 
                alt="Farah Taher Portrait" 
                className="w-full h-full object-contain object-bottom drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
                onError={(e) => { (e.target as HTMLElement).style.display = 'none'; }}
              />
            </div>
          </div>
        </div>

        {/* Marquee Ticker - تم جعله بعرض الشاشة بالكامل */}
        <div ref={marqueeRef} className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden py-4 border-y border-[#C2A581]/30 bg-[#0b0c0e]/95 backdrop-blur-md z-20 shadow-2xl whitespace-nowrap mt-10">
          <div className="marquee-content flex w-max space-x-12 items-center">
            {[...techTools, ...techTools, ...techTools, ...techTools].map((tool, index) => (
              <div key={index} className="flex items-center space-x-12 shrink-0">
                <span className="design-caption tracking-[0.3em] text-[#C2A581] uppercase font-bold text-xs">
                  {tool}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C2A581]/60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact At A Glance */}
      <div className="space-y-6 pt-4" data-gsap="stagger">
        <div className="flex items-center justify-between border-b border-[#C2A581]/20 pb-3">
          <div className="flex items-center gap-3">
            <BarChart2 className="w-5 h-5 text-[#C2A581]" />
            <h2 className="design-h2 text-[#ede5d8]">
              IMPACT AT A GLANCE
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {IMPACT_STATS.map((stat, idx) => (
            <div key={idx} className="gold-card p-6 rounded-2xl relative overflow-hidden group bg-[#0b0c0e] border border-[#C2A581]/20 hover:border-[#C2A581]/50 transition-all duration-300 shadow-xl">
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#C2A581]/5 rounded-bl-full pointer-events-none group-hover:bg-[#C2A581]/15 transition-all" />
              <div className="text-3xl sm:text-4xl font-bold text-[#C2A581] mb-1.5 font-sans tracking-tight">
                {stat.value}
              </div>
              <div className="design-eyebrow text-[#f5ebd8] tracking-wider">
                {stat.label}
              </div>
              <div className="design-caption mt-1 text-[#a39d91]">
                {stat.sub}
              </div>
            </div>
          ))}
        </div>

        {/* Visual Charts Grid - تم تحديث الشارت بحذف الشهور واستبدالها بمراحل تطور عامة */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 pt-2">
          <div className="lg:col-span-7 gold-card p-6 md:p-8 rounded-2xl space-y-4 bg-[#0b0c0e] border border-[#C2A581]/20 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="design-eyebrow text-[#C2A581]">
                BUSINESS IMPACT OVER TIME
              </h3>
              <p className="design-caption mt-1 text-[#a39d91]">
                Measurable operational efficiency and ROI growth
              </p>
            </div>

            <div className="h-44 w-full relative pt-2">
              <svg viewBox="0 0 500 130" className="w-full h-full overflow-visible">
                <defs>
                  <linearGradient id="lineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#C2A581" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#C2A581" stopOpacity="0.0" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="15" x2="500" y2="15" stroke="#1d2028" strokeDasharray="3 3" />
                <line x1="0" y1="55" x2="500" y2="55" stroke="#1d2028" strokeDasharray="3 3" />
                <line x1="0" y1="95" x2="500" y2="95" stroke="#1d2028" strokeDasharray="3 3" />
                <path d="M 20 95 Q 60 88, 100 80 T 180 75 T 260 52 T 340 38 T 420 25 T 480 15 L 480 120 L 20 120 Z" fill="url(#lineGrad)" />
                <path d="M 20 95 Q 60 88, 100 80 T 180 75 T 260 52 T 340 38 T 420 25 T 480 15" fill="none" stroke="#C2A581" strokeWidth="3.5" strokeLinecap="round" />
                {[
                  { cx: 20, cy: 95 }, { cx: 100, cy: 80 }, { cx: 180, cy: 75 },
                  { cx: 260, cy: 52 }, { cx: 340, cy: 38 }, { cx: 420, cy: 25 }, { cx: 480, cy: 15 }
                ].map((pt, i) => (
                  <g key={i} className="cursor-pointer group">
                    <circle cx={pt.cx} cy={pt.cy} r="4.5" fill="#C2A581" className="transition-all group-hover:r-7" />
                    <circle cx={pt.cx} cy={pt.cy} r="9" fill="rgba(194,165,129,0.25)" />
                  </g>
                ))}
              </svg>
            </div>

            {/* سطر إضافي ونقاط تجميلية متناسقة لملء الفراغ وجعل الكارت متوازناً تماماً */}
            <div className="pt-3 border-t border-[#C2A581]/15 flex items-center justify-between px-2">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C2A581]" />
                <span className="text-[11px] font-mono tracking-widest text-[#a39d91] uppercase">Continuous Growth Trajectory</span>
              </div>
            
            </div>
          </div>

          <div className="lg:col-span-5 gold-card p-6 md:p-8 rounded-2xl space-y-4 flex flex-col justify-between bg-[#0b0c0e] border border-[#C2A581]/20 shadow-xl">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="design-eyebrow text-[#C2A581]">CORE COMPETENCIES</h3>
                <Brain className="w-4 h-4 text-[#C2A581]" />
              </div>
              <p className="design-caption mt-1 text-[#a39d91]">Core analytical pillars & technical focus areas</p>
            </div>

            <div className="space-y-3.5 design-caption">
              {[
                { name: 'Data Analysis & Processing', level: '95%' },
                { name: 'Executive Dashboards & BI', level: '90%' },
                { name: 'Machine Learning & NLP', level: '88%' },
                { name: 'SQL & Data Modeling', level: '92%' }
              ].map((skill, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex justify-between text-xs text-[#f5ebd8] font-medium">
                    <span>{skill.name}</span>
                    <span className="text-[#C2A581] font-bold">{skill.level}</span>
                  </div>
                  <div className="w-full h-2 bg-[#121418] rounded-full overflow-hidden border border-[#C2A581]/10">
                    <div className="h-full bg-gradient-to-r from-[#947653] via-[#C2A581] to-[#dfcaa7] rounded-full transition-all duration-700" style={{ width: skill.level }} />
                  </div>
                </div>
              ))}
            </div>

            <button
              onClick={() => onNavigate('about')}
              className="w-full mt-2 py-4 px-6 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] hover:bg-[#C2A581] text-[#C2A581] hover:text-[#0b0c0e] font-sans font-bold text-xs tracking-[0.16em] uppercase transition-all duration-300 cursor-pointer flex items-center justify-between group shadow-sm"
            >
              <span>VIEW ALL SKILLS & TOOLS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Industry Verticals & Services */}
      <div className="space-y-6 pt-4" data-gsap="stagger">
        <div className="flex items-center gap-3">
          <TrendingUp className="w-4 h-4 text-[#C2A581]" />
          <h2 className="design-h2 text-[#ede5d8]">INDUSTRY VERTICALS & SERVICES</h2>
        </div>

        <div ref={verticalsContainerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {INDUSTRY_EXPERTISE.map((ind) => {
            const Icon = industryIcons[ind.id] || ShieldCheck;
            const isFlipped = !!flippedCards[ind.id];

            return (
              <div 
                key={ind.id} 
                className="vertical-card h-[350px] [perspective:1000px] cursor-pointer"
                onClick={() => toggleCard(ind.id)}
              >
                <div className={`relative w-full h-full duration-700 [transform-style:preserve-3d] rounded-2xl shadow-2xl transition-all ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] p-6 rounded-2xl flex flex-col justify-between bg-[#0b0c0e] border border-[#C2A581]/25 transition-all duration-500 hover:border-[#C2A581]/70 hover:shadow-[0_15px_35px_rgba(0,0,0,0.7),0_0_25px_rgba(194,165,129,0.25)] group">
                    <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                      <div className="p-4 rounded-2xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] shadow-inner group-hover:bg-[#C2A581] group-hover:text-[#0b0c0e] transition-all duration-300 scale-100 group-hover:scale-110">
                        <Icon className="w-8 h-8" />
                      </div>
                      <h3 className="design-h3 text-[#f5ebd8] group-hover:text-[#C2A581] transition-colors duration-300">
                        {ind.title}
                      </h3>
                    </div>
                    <div className="w-full py-3 px-4 rounded-xl border border-[#C2A581]/30 bg-[#121418] flex items-center justify-between text-xs font-sans font-bold tracking-wider group-hover:bg-[#C2A581] transition-all duration-300">
                      <span className="text-[#C2A581] group-hover:text-[#0b0c0e] transition-colors duration-300">SEE SERVICES</span>
                      <ArrowRight className="w-4 h-4 text-[#C2A581] group-hover:text-[#0b0c0e] transition-all duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>

                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] p-6 rounded-2xl flex flex-col justify-start bg-[#0b0c0e] border border-[#C2A581]/50 shadow-2xl">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between border-b border-[#C2A581]/20 pb-3">
                        <span className="design-eyebrow text-[#C2A581]">CORE SERVICES</span>
                        <RotateCcw className="w-4 h-4 text-[#C2A581]" />
                      </div>
                      <ul className="space-y-3 design-body text-xs pt-2">
                        {ind.items.slice(0, 4).map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <span className="text-[#C2A581] font-bold mt-0.5">•</span>
                            <span className="line-clamp-2 text-[#ded7cb] leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        <div className="max-w-5xl mx-auto p-8 md:p-10 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 mt-12">
          <div className="space-y-3 text-left">
            <span className="design-eyebrow text-[#C2A581]">MEASURABLE VALUE</span>
            <p className="design-body text-base md:text-lg text-[#f5ebd8] font-light leading-relaxed">
              Ready to see our strategic impact in action? Discover how these specialized services translate into transformative real-world growth.
            </p>
          </div>
          <button
            onClick={() => onNavigate('projects')}
            className="flex items-center justify-between gap-4 px-8 py-4 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] hover:bg-[#C2A581] text-[#C2A581] hover:text-[#0b0c0e] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer shrink-0 group shadow-sm"
          >
            <span>EXPLORE PORTFOLIO PROJECTS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      <div className="text-center space-y-2 mb-8 pt-8">
        <span className="design-eyebrow text-[#C2A581]">MY CORE APPROACH</span>
        <h2 className="design-h2 text-[#f9f3ea]">
          How I Deliver Value
        </h2>
      </div>

      {/* Strategic Value Pillars */}
      <div className="max-w-4xl mx-auto space-y-6 pt-2">
        {CORE_PILLARS.map((pillar, idx) => (
          <div 
            key={idx} 
            ref={(el) => (pillarsRef.current[idx] = el)}
            className="pillar-card p-6 md:p-8 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6 hover:border-[#C2A581]/70 transition-all duration-300"
          >
            <div className="flex items-center gap-6">
              <div className="space-y-1.5">
                <div className="design-eyebrow text-[#C2A581]">
                  {pillar.title}
                </div>
                <p className="design-body text-sm md:text-base text-[#d5d0c5] leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="pt-6 flex justify-center">
          <button
            onClick={() => onNavigate('expertise')}
            className="flex items-center justify-between gap-4 px-7 py-3.5 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] hover:bg-[#C2A581] text-[#C2A581] hover:text-[#0b0c0e] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer group shadow-sm"
          >
            <span>EXPLORE MY EXPERTISE</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 pt-6 pb-4 flex flex-col items-center justify-center text-center space-y-4" data-gsap="stagger">
        <span className="design-eyebrow text-[#C2A581]">READY TO DRIVE IMPACT?</span>
        <h2 className="design-h2 text-[#f9f3ea] text-xl sm:text-2xl">
          Let's turn your data into measurable results.
        </h2>
        <button
          onClick={() => onNavigate('contact')}
          className="mt-2 flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C2A581] hover:bg-[#d4b995] text-[#0b0c0e] font-sans font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(194,165,129,0.4)] hover:scale-105 cursor-pointer group"
        >
          <span>LET'S CONNECT</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
};