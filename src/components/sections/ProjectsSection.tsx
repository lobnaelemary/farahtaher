import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowRight,
  Brain,
  Truck,
  Building2,
  Boxes,
  Layers,
  DollarSign,
  Box,
  GraduationCap,
  LayoutDashboard
} from 'lucide-react';
import { SectionId, ProjectCategory, ProjectData } from '../../types';
import { PROJECTS } from '../../data/portfolioData';
import { useGsapPageTransition } from '../../hooks/useGsapAnimations';
import gsap from 'gsap';

interface ProjectsSectionProps {
  onNavigate: (section: SectionId) => void;
  onOpenProject: (project: ProjectData) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onNavigate,
  onOpenProject
}) => {
  // Initialize GSAP page transition hook for the projects section container
  const containerRef = useGsapPageTransition('projects');
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const pulseAnimsRef = useRef<gsap.core.Tween[]>([]);

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'financial', label: 'FINANCIAL SERVICES' },
    { id: 'supply-chain', label: 'SUPPLY CHAIN' },
    { id: 'transportation', label: 'TRANSPORTATION' },
    { id: 'public-sector', label: 'PUBLIC SECTOR' },
    { id: 'ml', label: 'MACHINE LEARNING' },
    { id: 'optimization', label: 'OPTIMIZATION' }
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  const getProjectIcon = (category: ProjectCategory) => {
    switch (category) {
      case 'financial':
        return DollarSign;      
      case 'supply-chain':
        return Box;            
      case 'transportation':
        return Truck;          
      case 'public-sector':
        return GraduationCap;   
      case 'ml':
        return Brain;            
      case 'optimization':
        return LayoutDashboard; 
      default:
        return Layers;
    }
  };

  // Manage pulsing pulse animations for project impact metrics
  useEffect(() => {
    pulseAnimsRef.current.forEach((anim) => anim.kill());
    pulseAnimsRef.current = [];

    cardsRef.current.forEach((card) => {
      if (!card) return;
      const metricEl = card.querySelector('.card-metric');
      if (metricEl) {
        const tween = gsap.to(metricEl, {
          scale: 1.08,
          duration: 0.7,
          repeat: -1,
          yoyo: true,
          ease: 'power1.inOut',
          transformOrigin: 'left center'
        });
        pulseAnimsRef.current.push(tween);
      }
    });

    return () => {
      pulseAnimsRef.current.forEach((anim) => anim.kill());
    };
  }, [filteredProjects]);

  // Handle card mouse enter animations
  const handleCardMouseEnter = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card.querySelector('.card-title'), {
      y: -2,
      color: '#C2A581',
      duration: 0.3,
      ease: 'power2.out'
    });
    
    const metricEl = card.querySelector('.card-metric');
    const anim = pulseAnimsRef.current[index];
    if (anim) anim.pause();
    
    gsap.to(metricEl, {
      scale: 1.12,
      transformOrigin: 'left center',
      duration: 0.3,
      ease: 'power2.out'
    });
  };

  // Handle card mouse leave animations
  const handleCardMouseLeave = (index: number) => {
    const card = cardsRef.current[index];
    if (!card) return;
    
    gsap.to(card.querySelector('.card-title'), {
      y: 0,
      color: '#f5ede0',
      duration: 0.3,
      ease: 'power2.out'
    });
    
    const metricEl = card.querySelector('.card-metric');
    const anim = pulseAnimsRef.current[index];
    
    gsap.to(metricEl, {
      scale: 1,
      duration: 0.3,
      onComplete: () => {
        if (anim) anim.resume();
      }
    });
  };

  return (
    <div ref={containerRef} className="pb-4 space-y-12">
      {/* Top Header */}
      <div className="space-y-4 pt-2" data-gsap="stagger">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1.5px] bg-[#C2A581]" />
          <span className="design-eyebrow">
            PROVEN RESULTS
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="design-h1 text-[#f9f3ea]">
            FEATURED CASE STUDIES & IMPACT
          </h1>
          <p className="design-body max-w-3xl">
            Explore how enterprise leaders achieved verified cost savings, streamlined operations, and scalable automated intelligence.
          </p>
        </div>
      </div>

      {/* Filter Category Tabs */}
      <div className="flex flex-wrap gap-2.5 pt-2" data-gsap="stagger">
        {categories.map((cat) => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-mono font-medium tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                isSelected
                  ? 'bg-[#C2A581] text-[#0b0c0e] font-bold shadow-[0_0_20px_rgba(194,165,129,0.4)] scale-105'
                  : 'bg-[#0b0c0e] border border-[#C2A581]/25 text-[#9e998e] hover:text-[#f0e8dc] hover:border-[#C2A581]/60 hover:bg-[#121418]'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-2" data-gsap="stagger">
        {filteredProjects.map((project, idx) => {
          const Icon = getProjectIcon(project.category);
          return (
            <div
              key={project.id}
              ref={(el) => (cardsRef.current[idx] = el)}
              onMouseEnter={() => handleCardMouseEnter(idx)}
              onMouseLeave={() => handleCardMouseLeave(idx)}
              onClick={() => onOpenProject(project)}
              className="group relative gold-card rounded-2xl overflow-hidden cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5),0_0_15px_rgba(194,165,129,0.2)] bg-[#0b0c0e] border border-[#C2A581]/20"
            >
              <div className="p-5 sm:p-6 space-y-5 flex-1 flex flex-col justify-between">
                
                {/* Top Section */}
                <div className="space-y-3.5">
                  <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#C2A581]/15 rounded-full blur-3xl group-hover:bg-[#C2A581]/30 transition-all duration-500 pointer-events-none" />

                  <div className="flex items-center justify-between gap-2 relative z-10">
                    <div className="p-2.5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/30 text-[#C2A581] shadow-inner group-hover:scale-110 transition-transform duration-300 shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="bg-[#0b0c0e]/90 border border-[#C2A581]/35 px-2.5 py-1 rounded-full text-[#ded5c6] font-mono uppercase tracking-wider text-[9px] text-right shrink-0">
                      {project.categoryLabel}
                    </span>
                  </div>

                  <div className="relative z-10 flex items-end justify-between gap-3 pt-1">
                    <div>
                      <span className="design-eyebrow block text-[10px] mb-0.5">
                        PRIMARY IMPACT
                      </span>
                      <span className="card-metric text-3xl font-bold text-[#C2A581] tracking-tight block font-sans">
                        {project.impactMetrics[0]?.value || '100%'}
                      </span>
                    </div>
                    <span className="design-caption text-right max-w-[150px] leading-tight shrink-0 pb-0.5 text-[#C5C0B5]">
                      {project.impactMetrics[0]?.label}
                    </span>
                  </div>
                </div>

                {/* Middle Section: Title & Subtitle */}
                <div className="space-y-2">
                  <h3 className="card-title design-h3 text-[#f5ede0] transition-colors duration-300 leading-snug">
                    {project.title}
                  </h3>
                  <p className="design-body text-xs line-clamp-3 leading-relaxed">
                    {project.subtitle}
                  </p>
                </div>

                {/* Bottom Section: Tools + Explore Button */}
                <div className="space-y-4 pt-2">
                  <div className="flex items-center flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, toolIdx) => (
                      <span
                        key={toolIdx}
                        className="design-caption text-[10px] px-2 py-0.5 rounded bg-[#0b0c0e] border border-[#C2A581]/20 text-[#d4cbb8]"
                      >
                        {tool}
                      </span>
                    ))}
                    {project.tools.length > 3 && (
                      <span className="design-caption text-[10px] text-[#C2A581]">
                        +{project.tools.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Explore Button */}
                  <div className="pt-1">
                    <div className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-[#C2A581]/40 bg-[#0b0c0e] text-[#C2A581] group-hover:bg-[#C2A581] group-hover:text-[#0b0c0e] group-hover:border-[#C2A581] transition-all duration-300 shadow-sm cursor-pointer">
                      <span className="text-[11px] font-bold font-mono tracking-widest uppercase text-[#C2A581] group-hover:text-[#0b0c0e] transition-colors">
                        EXPLORE CASE STUDY
                      </span>
                      <ArrowRight className="w-4 h-4 text-[#C2A581] group-hover:text-[#0b0c0e] transition-all duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Final Contextual CTA Section */}
      <div className="mt-8 pt-6 pb-2 flex flex-col items-center justify-center text-center space-y-3" data-gsap="stagger">
        <span className="design-eyebrow">
          SCALE YOUR PERFORMANCE
        </span>
        <h2 className="design-h2 text-xl sm:text-2xl text-[#f9f3ea]">
          Ready to achieve measurable ROI and efficiency?
        </h2>
        
        <button
          onClick={() => onNavigate('contact')}
          className="btn-primary mt-2"
        >
          <span>DRIVE IMPACT IN YOUR PROJECT</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
        </button>
      </div>
    </div>
  );
};