import React, { useRef } from 'react';
import {
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Wrench,
  ArrowRight
} from 'lucide-react';
import { SectionId } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useGsapPageTransition } from '../../hooks/useGsapAnimations';

interface ExpertiseSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onNavigate }) => {
  // Initialize GSAP page transition hook for the expertise section container
  const containerRef = useGsapPageTransition('expertise');
  const printRef = useRef<HTMLDivElement | null>(null);

  return (
    <div ref={containerRef} className="space-y-12 lg:space-y-16 pb-4">
      {/* Header with Eyebrow, Main Heading, and Subheading */}
      <div className="space-y-4 pt-2" data-gsap="stagger">
        <div className="flex items-center gap-3">
          <span className="w-8 h-[1.5px] bg-[#C2A581]" />
          <span className="design-eyebrow">CURRICULUM VITAE</span>
        </div>
        <div className="space-y-2">
          <h1 className="design-h1">RESUME & EXPERIENCE</h1>
          <p className="design-body max-w-2xl">
            A comprehensive overview of professional leadership, academic research, and technical core competencies.
          </p>
        </div>
      </div>

      {/* Printable / Viewable Resume Card */}
      <div
        ref={printRef}
        className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 shadow-2xl space-y-12"
        data-gsap="stagger"
      >
        {/* CV Header */}
        <div className="border-b border-[#C2A581]/25 pb-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-serif-display font-bold text-[#C2A581] uppercase tracking-wide">
                {PERSONAL_INFO.name}
              </h2>
              <p className="design-eyebrow text-[#C2A581] tracking-[0.1em]">
                DATA ANALYST & DATA SCIENCE PROFESSIONAL | ANALYTICS CONSULTANT
              </p>
            </div>

            <div className="space-y-2 design-caption">
              <div className="flex items-center gap-3 text-[#C2A581]">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="text-[#f5ebd8]">{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-3 text-[#C2A581]">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="text-[#f5ebd8]">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
          <p className="design-body text-sm leading-relaxed w-full pt-2">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-[#C2A581]" />
            <h3 className="design-eyebrow">PROFESSIONAL EXPERIENCE</h3>
          </div>
          <div className="space-y-10 border-l border-[#C2A581]/30 pl-6 ml-2">
            {[
              { title: 'Analytics Consultant & Solutions Lead', date: '2026 – Present', desc: 'Partner with enterprise leaders to transform complex data into executive decision models.' },
              { title: 'Data Analyst', date: '2023 – 2026', desc: 'Led enterprise data modeling, SQL ETL transformations, and executive dashboard development.' },
            ].map((exp, i) => (
              <div key={i} className="relative space-y-2">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
                <div className="flex flex-row items-center justify-between gap-4">
                  <h4 className="design-h3 text-[#f3ebde]">{exp.title}</h4>
                  <span className="design-caption text-[#C2A581] shrink-0">{exp.date}</span>
                </div>
                <p className="design-body text-xs leading-relaxed w-full">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Research */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-4 h-4 text-[#C2A581]" />
            <h3 className="design-eyebrow">EDUCATION & ACADEMIC BACKGROUND</h3>
          </div>
          <div className="space-y-10 border-l border-[#C2A581]/30 pl-6 ml-2">
            {/* Master Degree */}
            <div className="relative space-y-3">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
              <div className="flex flex-row items-center justify-between gap-4">
                <h4 className="design-h3 text-[#f5ede0]">Master of Data Science & Analytics (M.Sc.)</h4>
                <span className="design-caption text-[#C2A581] shrink-0">2025 – 2026</span>
              </div>
              <div className="space-y-1.5 pt-1">
                <p className="design-caption text-[#C5C0B5] font-semibold">Toronto Metropolitan University | Toronto, Canada</p>
                <p className="design-body text-xs text-[#ded7cb]">Specialization: NLP & Advanced Visualization</p>
                <p className="design-body text-xs text-[#ded7cb] leading-relaxed">Major Research Project: Predicting Emergency Department Length of Stay Using Machine Learning.</p>
              </div>
            </div>

            {/* Postgraduate */}
            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
              <div className="flex flex-row items-center justify-between gap-4">
                <h4 className="design-h3 text-[#f5ede0]">Postgraduate Certificate – Data Analytics</h4>
                <span className="design-caption text-[#C2A581] shrink-0">2023 – 2024</span>
              </div>
              <p className="design-caption text-[#C5C0B5]">New Brunswick Community College</p>
            </div>

            {/* Bachelor */}
            <div className="relative space-y-2">
              <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
              <div className="flex flex-row items-center justify-between gap-4">
                <h4 className="design-h3 text-[#f5ede0]">Bachelor of Business Informatics (Business IT Management)</h4>
                <span className="design-caption text-[#C2A581] shrink-0">2007 – 2011</span>
              </div>
              <p className="design-caption text-[#C5C0B5]">German University in Cairo (GUC)</p>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Wrench className="w-4 h-4 text-[#C2A581]" />
            <h3 className="design-eyebrow">TECHNICAL SKILLS</h3>
          </div>
          <div className="space-y-10 border-l border-[#C2A581]/30 pl-6 ml-2">
            {[
              { label: 'Languages', val: 'SQL, Python (Pandas, NumPy, Scikit-learn)' },
              { label: 'Visualization', val: 'Power BI, Tableau, Advanced Excel' },
              { label: 'Databases & Tools', val: 'Snowflake, Alteryx, Azure DevOps, AWS' },
              { label: 'Analytics', val: 'KPI Reporting, Dashboard Development, Business Performance Analysis, Forecasting, Data Validation, ETL Automation, Regression, Clustering, Feature Engineering' }
            ].map((skill, i) => (
              <div key={i} className="relative space-y-2">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
                <h4 className="design-h3 text-[#f3ebde]">{skill.label}</h4>
                <p className="design-body text-xs text-[#ded7cb] leading-relaxed w-full">{skill.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-8 pt-6 flex flex-col items-center justify-center text-center space-y-3" data-gsap="stagger">
        <span className="design-eyebrow">READY TO COLLABORATE?</span>
        <h2 className="design-h2 text-xl sm:text-2xl text-[#f9f3ea]">
          Let's discuss how data expertise can drive your next project forward.
        </h2>
        <button onClick={() => onNavigate('contact')} className="btn-primary mt-2">
          <span>START A CONVERSATION</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};