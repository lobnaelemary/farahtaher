import React, { useState, useEffect, useRef } from 'react';
import {
  GraduationCap,
  BookOpen,
  BarChart3,
  Rocket,
  Crown,
  ArrowRight,
  Sparkles,
  ChevronRight,
  Code,
  Database,
  BarChart,
  Cloud,
  X
} from 'lucide-react';
import { SectionId } from '../../types';
import { PERSONAL_INFO, JOURNEY_TIMELINE, SKILLS_DATA } from '../../data/portfolioData';
import { useGsapPageTransition } from '../../hooks/useGsapAnimations';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const containerRef = useGsapPageTransition('about');
  const [activeMilestone, setActiveMilestone] = useState<number>(0);
  const [isSkillsModalOpen, setIsSkillsModalOpen] = useState<boolean>(false);
  const timelineIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const bioLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const circlesRef = useRef<(SVGCircleElement | null)[]>([]);
  const barsRef = useRef<(HTMLDivElement | null)[]>([]);

  // منع سكرول الصفحة الخلفية عند فتح البوب أب
  useEffect(() => {
    if (isSkillsModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isSkillsModalOpen]);

  const milestoneIcons = {
    GraduationCap: GraduationCap,
    BookOpen: BookOpen,
    BarChart3: BarChart3,
    Rocket: Rocket,
    Crown: Crown
  };

  const technicalCategories = [
    {
      title: 'Python Ecosystem',
      icon: Code,
      tools: ['Pandas', 'NumPy', 'Scikit-Learn', 'spaCy', 'NLTK', 'Plotly', 'PuLP', 'LightGBM', 'XGBoost', 'SHAP'],
      level: 'Advanced / Production',
      desc: 'Machine learning pipelines, Natural Language Processing (NLP), statistical modeling, and operational heuristics.'
    },
    {
      title: 'SQL & Data Warehousing',
      icon: Database,
      tools: ['Snowflake', 'PostgreSQL', 'MySQL', 'Window Functions', 'Recursive CTEs', 'Query Optimization', 'Data Modeling'],
      level: 'Expert',
      desc: 'Complex multi-source transformations, AML compliance rules, analytical models, and warehouse architectures.'
    },
    {
      title: 'Business Intelligence & Visualization',
      icon: BarChart,
      tools: ['Power BI (DAX)', 'Tableau', 'Sigma Computing', 'Advanced Excel', 'Executive KPI Dashboards', 'Heatmaps'],
      level: 'Expert',
      desc: 'Interactive decision-ready reporting, automated refresh pipelines, and drill-down executive scorecards.'
    },
    {
      title: 'Cloud, ETL & Automation Tools',
      icon: Cloud,
      tools: ['Alteryx Automated Workflows', 'Snowflake', 'AWS', 'Azure DevOps', 'Git', 'CI/CD Pipelines'],
      level: 'Advanced',
      desc: 'End-to-end data pipeline automation, vendor transition reconciliation, and governance frameworks.'
    }
  ];

  useEffect(() => {
    timelineIntervalRef.current = setInterval(() => {
      setActiveMilestone((prev) => (prev + 1) % JOURNEY_TIMELINE.length);
    }, 2500);

    return () => {
      if (timelineIntervalRef.current) clearInterval(timelineIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (bioLinesRef.current.length > 0) {
      gsap.fromTo(
        bioLinesRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power2.out',
          delay: 0.3
        }
      );
    }
  }, []);

  const strengthsCircularData = [
    { name: 'Strategic problem-solving', percentage: 95, color: '#C2A581' },
    { name: 'Executive-ready communication', percentage: 90, color: '#d4b995' },
    { name: 'Turning complex data into clear insights', percentage: 94, color: '#dfcaa7' },
    { name: 'Leading analytics projects end-to-end', percentage: 88, color: '#b2946c' },
    { name: 'Storytelling in data problems', percentage: 90, color: '#e5d1b5' },
    { name: 'Building trust through accuracy and clarity', percentage: 96, color: '#947653' }
  ];

  useEffect(() => {
    circlesRef.current.forEach((circle, i) => {
      if (circle) {
        const radius = 38;
        const circumference = 2 * Math.PI * radius;
        const targetPercentage = strengthsCircularData[i].percentage;
        const targetOffset = circumference - (targetPercentage / 100) * circumference;

        gsap.fromTo(
          circle,
          { strokeDashoffset: circumference },
          {
            strokeDashoffset: targetOffset,
            duration: 1.8,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: circle,
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        );
      }
    });
  }, []);

  useEffect(() => {
    barsRef.current.forEach((bar) => {
      if (bar) {
        const targetWidth = bar.getAttribute('data-width') || '0%';
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: targetWidth,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: bar,
              start: 'top 85%',
              toggleActions: 'play none none reset'
            }
          }
        );
      }
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => clearTimeout(timer);
  }, []);

  const bioSentences = [
    "I'm Farah, a Toronto-based Data Specialist with 3+ years of experience delivering analytical solutions across financial services, supply chain, transportation, and public-sector environments.",
    "I completed my Master of Data Science & Analytics, specializing in Natural Language Processing (NLP) and advanced data visualization.",
    "My work focuses on turning messy, fragmented data into clear, actionable insights that help organizations improve efficiency, strengthen decision-making, and achieve measurable results."
  ];

  return (
    <>
      <div ref={containerRef} className="space-y-16 lg:space-y-20 pb-8">
        {/* Top Header - تم إزالة أي مشكلة تخص السكرول أو التدفق */}
        <div className="space-y-6 pt-2" data-gsap="stagger">
          <div className="flex items-center gap-3">
            <span className="w-8 h-[1.5px] bg-[#C2A581]" />
            <span className="design-eyebrow">
              ABOUT ME
            </span>
          </div>

          <div className="space-y-4">
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-serif-display font-bold text-[#f9f3ea] tracking-tight uppercase">
              DRIVING IMPACT THROUGH DATA MASTERY.
            </h1>
            <p className="design-eyebrow text-[#C2A581] pt-2">
              I TURN DATA INTO MEANINGFUL INSIGHTS THAT DRIVE IMPACT AND SUSTAINABLE GROWTH.
            </p>
          </div>

          <div className="space-y-4 pt-4 max-w-4xl design-body text-base">
            {bioSentences.map((sentence, index) => (
              <p
                key={index}
                ref={(el) => (bioLinesRef.current[index] = el)}
                className="opacity-0"
              >
                {sentence}
              </p>
            ))}
          </div>
        </div>

        {/* MY JOURNEY TIMELINE */}
        <div className="space-y-6" data-gsap="stagger">
          <div className="flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#C2A581]" />
            <h2 className="design-h2 text-[#C2A581]">
              MY JOURNEY
            </h2>
          </div>

          <div className="p-6 md:p-10 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 relative overflow-hidden shadow-2xl">
            <div className="hidden md:block absolute top-[106px] left-12 right-12 h-[2px] bg-gradient-to-r from-[#C2A581]/30 via-[#C2A581] to-[#C2A581]/30 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-20">
              {JOURNEY_TIMELINE.map((item, idx) => {
                const Icon = milestoneIcons[item.iconName] || Crown;
                const isSelected = activeMilestone === idx;

                return (
                  <div
                    key={idx}
                    onClick={() => {
                      setActiveMilestone(idx);
                      if (timelineIntervalRef.current) clearInterval(timelineIntervalRef.current);
                    }}
                    className={`flex flex-col items-center text-center cursor-pointer transition-all duration-500 group relative z-20 ${
                      isSelected ? 'scale-105' : 'opacity-85 hover:opacity-100'
                    }`}
                  >
                    <span
                      className={`text-xs font-mono tracking-widest uppercase mb-4 px-3.5 py-1 rounded-full border transition-all duration-500 relative z-30 ${
                        isSelected
                          ? 'bg-[#0b0c0e] border-[#C2A581] text-[#fff] font-bold shadow-[0_0_20px_rgba(194,165,129,0.4)]'
                          : 'border-[#C2A581]/30 text-[#C5C0B5] bg-[#0b0c0e]'
                      }`}
                    >
                      {item.year}
                    </span>

                    <div
                      className={`w-14 h-14 rounded-full flex items-center justify-center border-2 transition-all duration-500 mb-4 relative z-30 ${
                        isSelected
                          ? 'border-[#C2A581] text-[#fff] shadow-[0_0_25px_#C2A581] bg-[#0b0c0e] scale-110'
                          : 'border-[#C2A581]/30 text-[#C2A581] group-hover:border-[#C2A581]/70 bg-[#0b0c0e]'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="design-h3 text-base mb-1.5 transition-colors duration-300">
                      {item.title}
                    </h3>
                    <div className="design-eyebrow text-xs mb-3 text-[#C2A581]">
                      {item.organization}
                    </div>
                    <p className="design-body text-xs leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* PROFESSIONAL STRENGTHS */}
        <div className="p-6 md:p-10 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 space-y-10 shadow-2xl" data-gsap="stagger">
          <div className="space-y-3 text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-3">
              <span className="w-6 h-[1px] bg-[#C2A581]" />
              <h2 className="design-h2 text-[#C2A581]">
                PROFESSIONAL STRENGTHS
              </h2>
            </div>
            <p className="design-body text-sm">
              Core leadership and collaborative values brought to every project engagement
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-2">
            {strengthsCircularData.map((item, idx) => {
              const radius = 38;
              const circumference = 2 * Math.PI * radius;

              return (
                <div 
                  key={idx}
                  className="flex flex-col items-center justify-center text-center space-y-4 group px-2"
                >
                  <div className="relative w-28 h-28 flex items-center justify-center">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke="#16181F"
                        strokeWidth="8"
                        fill="transparent"
                      />
                      <circle
                        ref={(el) => (circlesRef.current[idx] = el)}
                        cx="56"
                        cy="56"
                        r={radius}
                        stroke={item.color}
                        strokeWidth="8"
                        strokeDasharray={circumference}
                        strokeDashoffset={circumference}
                        strokeLinecap="round"
                        fill="transparent"
                        className="transition-transform duration-300 group-hover:scale-105 origin-center"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                      <span className="text-xl font-bold font-mono text-[#f5ebd8]">{item.percentage}%</span>
                    </div>
                  </div>

                  <span className="design-body text-xs sm:text-sm text-center font-medium leading-relaxed max-w-[260px]">
                    {item.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* TECHNICAL CAPABILITIES */}
        <div className="gold-card p-6 md:p-10 rounded-2xl space-y-8 bg-[#0b0c0e] shadow-2xl" data-gsap="stagger">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C2A581]" />
              <h2 className="design-h2 text-[#C2A581]">
                TECHNICAL CAPABILITIES
              </h2>
            </div>
            <p className="design-caption text-[#C5C0B5] pl-9">
              Core tool proficiencies & technical expertise
            </p>
          </div>

          <div className="space-y-6">
            {SKILLS_DATA.slice(0, 4).map((skill, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[#E5DDD0] font-semibold text-sm">{skill.name}</span>
                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="text-gold font-bold">{skill.level}%</span>
                    <span className="text-[10px] text-[#E5DDD0] px-2.5 py-0.5 rounded bg-[#16181F] border border-[#C2A581]/30 font-semibold">
                      {skill.tag}
                    </span>
                  </div>
                </div>

                <div className="w-full h-2.5 rounded-full bg-[#16181F] overflow-hidden">
                  <div
                    ref={(el) => (barsRef.current[idx] = el)}
                    data-width={`${skill.level}%`}
                    className="h-full rounded-full bg-gradient-to-r from-[#947653] via-[#C2A581] to-[#dfcaa7]"
                    style={{ width: '0%' }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* زر VIEW ALL SKILLS & TOOLS بالستايل الممحاط (Outlined) */}
          <button
            onClick={() => setIsSkillsModalOpen(true)}
            className="flex items-center justify-between gap-4 w-full px-7 py-4 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] hover:bg-[#C2A581] text-[#C2A581] hover:text-[#0b0c0e] font-sans font-bold text-xs tracking-widest uppercase transition-all duration-300 cursor-pointer group shadow-sm mt-4"
          >
            <span>VIEW ALL SKILLS & TOOLS</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>

        {/* MY PHILOSOPHY */}
        <div className="gold-card p-6 md:p-10 rounded-2xl relative overflow-hidden space-y-8 bg-[#0b0c0e] shadow-2xl" data-gsap="stagger">
          <div className="absolute right-0 bottom-0 w-64 h-64 pointer-events-none opacity-20 bg-gradient-to-tl from-[#C2A581] via-transparent to-transparent rounded-full blur-2xl" />

          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-3">
              <span className="w-6 h-[1px] bg-[#C2A581]" />
              <h2 className="design-h2 text-[#C2A581]">
                MY PHILOSOPHY
              </h2>
            </div>

            <div className="flex items-start gap-4">
              <span className="font-serif-classic text-5xl sm:text-6xl text-gold font-bold leading-none select-none">
                “
              </span>
              <blockquote className="font-serif-classic text-lg sm:text-xl text-[#f3ebde] italic leading-snug pt-2">
                Data is more than numbers—it’s the story behind every decision.
              </blockquote>
            </div>

            <div className="border-l-2 border-[#C2A581]/40 pl-5 py-1">
              <p className="design-body text-base">
                {PERSONAL_INFO.philosophy}
              </p>
            </div>
          </div>

          <div className="pt-6 border-t border-[#C2A581]/20 flex flex-wrap items-center justify-between gap-4 relative z-10">
            <div className="flex items-center gap-2 text-xs text-[#D5D0C5] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C2A581]" />
              <span>Executive-Ready Dashboards</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#D5D0C5] font-mono">
              <span className="w-2 h-2 rounded-full bg-[#C2A581]" />
              <span>Proven $1M+ Savings Impact</span>
            </div>
          </div>
        </div>

        {/* Bottom Final Contextual CTA Section - تم جعل زر START A CONVERSATION باللون الذهبي الممتلئ (Solid Gold) مطاباقاً لباقي الصفحات */}
        <div className="mt-12 pt-6 pb-2 flex flex-col items-center justify-center text-center space-y-4" data-gsap="stagger">
          <span className="design-eyebrow">
            READY TO COLLABORATE?
          </span>
          <h2 className="design-h2 text-xl sm:text-2xl text-[#f9f3ea]">
            Ready to shape your next data-driven chapter?
          </h2>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-2 flex items-center gap-3 px-8 py-4 rounded-xl bg-[#C2A581] hover:bg-[#d4b995] text-[#0b0c0e] font-sans font-bold text-xs tracking-widest uppercase transition-all shadow-[0_0_30px_rgba(194,165,129,0.4)] hover:scale-105 cursor-pointer group"
          >
            <span>START A CONVERSATION</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </button>
        </div>
      </div>

      {/* Technical Capabilities POPUP Modal */}
      {isSkillsModalOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-4xl max-h-[85vh] bg-[#0b0c0e] border border-[#C2A581]/40 rounded-3xl shadow-2xl overflow-hidden flex flex-col isolate">
            
            <div className="flex items-center justify-between px-6 sm:px-8 py-5 border-b border-[#C2A581]/20 bg-[#0b0c0e] z-50 shrink-0 shadow-lg">
              <div className="flex items-center gap-3">
                <span className="w-8 h-[1.5px] bg-[#C2A581]" />
                <span className="design-eyebrow">
                  TECHNICAL CAPABILITIES
                </span>
              </div>
              <button
                onClick={() => setIsSkillsModalOpen(false)}
                className="p-2 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581] hover:text-[#0b0c0e] transition-all cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1 bg-[#0b0c0e] relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {technicalCategories.map((cat, idx) => {
                  const Icon = cat.icon;
                  return (
                    <div 
                      key={idx} 
                      className="gold-card p-5 rounded-2xl space-y-3.5 flex flex-col justify-between bg-[#111317] border border-[#C2A581]/20"
                    >
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="p-2 rounded-xl bg-[#121418] border border-[#C2A581]/25 text-[#C2A581] shadow-inner">
                              <Icon className="w-4 h-4" />
                            </div>
                            <h3 className="font-serif-classic text-base font-bold text-[#f5ebd8]">
                              {cat.title}
                            </h3>
                          </div>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#C2A581]/15 border border-[#C2A581]/30 text-gold uppercase font-bold">
                            {cat.level}
                          </span>
                        </div>

                        <p className="design-body text-xs">
                          {cat.desc}
                        </p>
                      </div>

                      <div className="pt-2.5 border-t border-[#C2A581]/20">
                        <div className="design-caption uppercase tracking-wider mb-1.5 text-[#C5C0B5]">
                          Core Technologies & Frameworks:
                        </div>
                        <div className="flex flex-wrap gap-1.5">
                          {cat.tools.map((tool, tIdx) => (
                            <span
                              key={tIdx}
                              className="text-[11px] font-mono px-2 py-0.5 rounded-lg bg-[#16181F] border border-[#C2A581]/25 text-[#E5DDD0] font-medium"
                            >
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};