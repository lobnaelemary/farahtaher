import React, { useState, useEffect } from 'react';
import {
  X,
  TrendingUp,
  Award,
  Layers,
  Code2,
  Table as TableIcon,
  Sparkles,
  Target,
  Image as ImageIcon
} from 'lucide-react';
import { ProjectData } from '../types';

interface ProjectDetailModalProps {
  project: ProjectData | null;
  onClose: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose
}) => {
  const [copiedCode, setCopiedCode] = useState(false);

  // منع سكرول الصفحة الرئيسية خلف البوب أب تماماً
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sqlQuery) {
      navigator.clipboard.writeText(project.sqlQuery);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  // التحقق من وجود صور (سواء كانت نص واحد أو مصفوفة نصوص)
  const hasImages = project.image && (
    (typeof project.image === 'string' && project.image.trim() !== '') ||
    (Array.isArray(project.image) && project.image.length > 0)
  );

  return (
    <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-xl flex items-center justify-center p-3 md:p-6 lg:p-10 animate-fadeIn">
      
      {/* الصندوق الرئيسي للبوب أب */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[#0b0c0e] border border-[#C2A581]/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.9)] overflow-hidden flex flex-col isolate">
        
        {/* زر الإغلاق العائم بحرية في الزاوية */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 z-[100] p-2.5 rounded-xl bg-[#121418] border border-[#C2A581]/40 text-[#C2A581] hover:bg-[#C2A581] hover:text-[#0b0c0e] transition-all cursor-pointer shadow-lg"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Content Body الذي يحتوي على السكرول والمحتوى مترابطاً تحت بعضه */}
        <div className="p-6 md:p-8 lg:p-10 pt-16 md:pt-12 space-y-12 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] flex-1 bg-[#0b0c0e] relative z-10">
          
          {/* Main Title & Meta Header */}
          <div className="space-y-4 pt-2">
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#C2A581] font-mono">
              <span className="tracking-widest uppercase">CASE STUDY</span>
              <span>•</span>
              <span>{project.role}</span>
              {project.duration && (
                <>
                  <span>•</span>
                  <span>{project.duration}</span>
                </>
              )}
            </div>

            <h1 className="font-serif-classic text-2xl md:text-4xl lg:text-5xl font-bold text-[#f7efe3] leading-tight pr-10">
              {project.title}
            </h1>
            <p className="design-body text-base md:text-lg max-w-4xl">
              {project.subtitle}
            </p>

            {/* Tools Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className="design-caption px-3 py-1 text-xs rounded bg-[#121418] border border-[#C2A581]/25 text-[#dcd2c4]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Impact Metrics Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/30 shadow-inner">
            {project.impactMetrics.map((metric, idx) => (
              <div key={idx} className="text-center sm:text-left space-y-1">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <TrendingUp className="w-4 h-4 text-[#C2A581]" />
                  <span className="design-eyebrow text-xs uppercase">
                    {metric.label}
                  </span>
                </div>
                <div className="font-serif-display text-2xl md:text-3xl font-bold text-[#C2A581]">
                  {metric.value}
                </div>
                {metric.subtext && (
                  <div className="design-caption text-[11px]">
                    {metric.subtext}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* SECTION 1: DEEP DIVE OVERVIEW */}
          <div className="space-y-8">
            <div className="flex items-center gap-2 border-b border-[#C2A581]/20 pb-3">
              <Layers className="w-4 h-4 text-[#C2A581]" />
              <h2 className="design-h2 text-lg text-[#C2A581] uppercase tracking-wider">Deep Dive Overview</h2>
            </div>

            <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/20 space-y-2">
              <h3 className="design-h2 text-base">Executive Summary</h3>
              <p className="design-body text-sm md:text-base leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/30 hover:border-[#C2A581]/60 transition-all space-y-3">
                <div className="flex items-center gap-2 text-[#C2A581] font-serif-display font-semibold text-sm">
                  <Target className="w-4 h-4" />
                  <span>THE CHALLENGE</span>
                </div>
                <ul className="space-y-2 text-xs text-[#a8a399] leading-relaxed list-disc list-inside">
                  {project.businessProblem.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/30 hover:border-[#C2A581]/60 transition-all space-y-3">
                <div className="flex items-center gap-2 text-[#C2A581] font-serif-display font-semibold text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>THE SOLUTION</span>
                </div>
                <ul className="space-y-2 text-xs text-[#d0c9bd] leading-relaxed list-disc list-inside">
                  {project.solution.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/30 hover:border-[#C2A581]/60 transition-all space-y-3">
                <div className="flex items-center gap-2 text-[#C2A581] font-serif-display font-semibold text-sm">
                  <Award className="w-4 h-4" />
                  <span>THE IMPACT</span>
                </div>
                <ul className="space-y-2 text-xs text-[#b0a99e] leading-relaxed list-disc list-inside">
                  {project.impactPoints.map((item, i) => (
                    <li key={i} className="pl-1">{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* SECTION 2: SAMPLE DATA OUTPUT TABLE (إذا توفرت) */}
          {project.sampleData && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between border-b border-[#C2A581]/20 pb-3">
                <div className="flex items-center gap-2">
                  <TableIcon className="w-4 h-4 text-[#C2A581]" />
                  <h2 className="design-h2 text-lg text-[#C2A581] uppercase tracking-wider">Sample Data Output</h2>
                </div>
                <span className="design-caption text-[11px]">
                  {project.sampleData.rows.length} sample records
                </span>
              </div>
              <div className="overflow-x-auto rounded-xl border border-[#C2A581]/25 bg-[#0b0c0e]">
                <table className="w-full text-left text-xs font-mono">
                  <thead className="bg-[#121418] border-b border-[#C2A581]/20 text-[#C2A581]">
                    <tr>
                      {project.sampleData.headers.map((h, i) => (
                        <th key={i} className="py-3 px-4 font-semibold tracking-wider">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#14161d] text-[#ded7cb]">
                    {project.sampleData.rows.map((row, rIdx) => (
                      <tr key={rIdx} className="hover:bg-[#121418] transition-colors">
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="py-2.5 px-4 whitespace-nowrap">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION 3: SQL MODEL PIPELINE (إذا توفرت) */}
          {project.sqlQuery && (
            <div className="space-y-4 pt-4">
              <div className="flex items-center justify-between border-b border-[#C2A581]/20 pb-3">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#C2A581]" />
                  <h2 className="design-h2 text-lg text-[#C2A581] uppercase tracking-wider">SQL Model Pipeline</h2>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581]/20 transition-all cursor-pointer"
                >
                  {copiedCode ? <span className="text-[#C2A581]">Copied!</span> : <span>Copy SQL</span>}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/20 overflow-x-auto">
                <pre className="text-xs font-mono text-[#d6cdbf] leading-relaxed">
                  <code>{project.sqlQuery}</code>
                </pre>
              </div>
            </div>
          )}

          {/* SECTION 5: PROJECT VISUAL ASSET(S) (تدعم صورة واحدة أو عدة صور بدون قص object-contain) */}
          {hasImages && (
            <div className="space-y-4 pt-4 pb-2">
              <div className="flex items-center gap-2 border-b border-[#C2A581]/20 pb-3">
                <ImageIcon className="w-4 h-4 text-[#C2A581]" />
                <h2 className="design-h2 text-lg text-[#C2A581] uppercase tracking-wider">Project Visual Artifacts</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-6">
                {Array.isArray(project.image) ? (
                  project.image.map((imgSrc, idx) => (
                    <div key={idx} className="w-full bg-[#121418] rounded-2xl overflow-hidden border border-[#C2A581]/30 p-4 shadow-2xl flex items-center justify-center">
                      <img 
                        src={imgSrc} 
                        alt={`${project.title} - ${idx + 1}`}
                        className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                      />
                    </div>
                  ))
                ) : (
                  <div className="w-full bg-[#121418] rounded-2xl overflow-hidden border border-[#C2A581]/30 p-4 shadow-2xl flex items-center justify-center">
                    <img 
                      src={project.image as string} 
                      alt={project.title}
                      className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                    />
                  </div>
                )}
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};