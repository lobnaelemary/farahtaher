import React, { useRef } from 'react';
import {
  Mail,
  MapPin,
  Linkedin,
  GraduationCap,
  Briefcase,
  Award,
  ArrowRight,
  Download
} from 'lucide-react';
import { SectionId } from '../../types';
import { PERSONAL_INFO } from '../../data/portfolioData';
import { useGsapPageTransition } from '../../hooks/useGsapAnimations';

interface ExpertiseSectionProps {
  onNavigate: (section: SectionId) => void;
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ onNavigate }) => {
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
        className="p-6 sm:p-10 lg:p-12 rounded-2xl bg-[#0b0c0e] border border-[#C2A581]/30 shadow-2xl space-y-10"
        data-gsap="stagger"
      >
        {/* CV Header */}
        <div className="border-b border-[#C2A581]/25 pb-8 space-y-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h2 className="design-h2 text-gold">{PERSONAL_INFO.name}</h2>
              <p className="design-eyebrow mt-1 text-[#C2A581]">
                Data Analyst & Data Science Professional | Analytics Consultant
              </p>
            </div>

            <div className="space-y-1 design-caption">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C2A581]" />
                <span>{PERSONAL_INFO.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#C2A581]" />
                <span>{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>
          <p className="design-body text-sm leading-relaxed pt-2">
            {PERSONAL_INFO.bio}
          </p>
        </div>

        {/* Work Experience */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <Briefcase className="w-4 h-4 text-[#C2A581]" />
            <h3 className="design-eyebrow">PROFESSIONAL EXPERIENCE</h3>
          </div>

          <div className="space-y-8 border-l border-[#C2A581]/30 pl-6 ml-2">
            {[
              { title: 'Analytics Consultant & Solutions Lead', date: '2023 – Present', desc: 'Partner with enterprise leaders to transform complex data into executive decision models.' },
              { title: 'Senior Data Analyst', date: '2021 – 2023', desc: 'Led enterprise data modeling, SQL ETL transformations, and executive dashboard development.' },
              { title: 'Data Scientist', date: '2020 – 2021', desc: 'Formulated predictive machine learning models and operations research algorithms.' }
            ].map((exp, i) => (
              <div key={i} className="relative space-y-2">
                <span className="absolute -left-[31px] top-1.5 w-3 h-3 rounded-full bg-[#C2A581] border-2 border-[#0b0c0e]" />
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                  <h4 className="design-h3 text-[#f3ebde]">{exp.title}</h4>
                  <span className="design-caption text-[#C2A581]">{exp.date}</span>
                </div>
                <p className="design-body text-xs">{exp.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Research */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <GraduationCap className="w-4 h-4 text-[#C2A581]" />
            <h3 className="design-eyebrow">EDUCATION & RESEARCH</h3>
          </div>

          <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/20 space-y-2">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
              <h4 className="design-h3 text-[#f5ede0]">Master of Data Science & Analytics (M.Sc.)</h4>
              <span className="design-caption text-[#C2A581]">Toronto, Canada</span>
            </div>
            <p className="design-caption text-[#8e8a81]">Specialization: NLP & Advanced Visualization</p>
            <p className="design-body text-xs pt-1">
              Major Research Project: <em>Predicting Emergency Department Length of Stay Using Machine Learning.</em>
            </p>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="pt-4 flex justify-end">
          <button className="btn-secondary">
            <Download className="w-4 h-4" />
            <span>DOWNLOAD CV</span>
          </button>
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