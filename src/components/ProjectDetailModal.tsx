import React, { useState } from 'react';
import {
  X,
  CheckCircle2,
  Copy,
  Check,
  TrendingUp,
  Award,
  Layers,
  Code2,
  Table as TableIcon,
  Sparkles,
  ExternalLink,
  Target
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
  const [activeTab, setActiveTab] = useState<'overview' | 'data' | 'query' | 'visuals'>('overview');

  if (!project) return null;

  const handleCopyCode = () => {
    if (project.sqlQuery) {
      navigator.clipboard.writeText(project.sqlQuery);
      setCopiedCode(true);
      setTimeout(() => setCopiedCode(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-xl flex justify-center p-3 md:p-6 lg:p-10 animate-fadeIn">
      <div className="relative w-full max-w-6xl bg-[#0b0c0e] border border-[#C2A581]/30 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden my-auto">
        
        {/* Top Header Bar with Close Button */}
        <div className="flex items-center justify-end px-6 py-4 bg-[#0b0c0e] border-b border-[#C2A581]/15">
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581] hover:text-[#0b0c0e] transition-all cursor-pointer"
            title="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 md:p-8 lg:p-10 space-y-8 max-h-[82vh] overflow-y-auto bg-[#0b0c0e]">
          
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

            <h1 className="font-serif-classic text-2xl md:text-4xl lg:text-5xl font-bold text-[#f7efe3] leading-tight">
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

          {/* Impact Metrics Banner - تم التأكد من درجات الأسود والذهبي الخالصة */}
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

          {/* Interactive Navigation Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-[#C2A581]/20 pb-3">
            <button
              onClick={() => setActiveTab('overview')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'overview'
                  ? 'bg-[#C2A581]/20 text-[#f5ecd9] border border-[#C2A581]/50'
                  : 'text-[#8c887f] hover:text-[#dfd7ca] hover:bg-[#121418]'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Deep Dive Overview</span>
            </button>

            {project.sampleData && (
              <button
                onClick={() => setActiveTab('data')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'data'
                    ? 'bg-[#C2A581]/20 text-[#f5ecd9] border border-[#C2A581]/50'
                    : 'text-[#8c887f] hover:text-[#dfd7ca] hover:bg-[#121418]'
                }`}
              >
                <TableIcon className="w-3.5 h-3.5" />
                <span>Sample Data Output</span>
              </button>
            )}

            {project.sqlQuery && (
              <button
                onClick={() => setActiveTab('query')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                  activeTab === 'query'
                    ? 'bg-[#C2A581]/20 text-[#f5ecd9] border border-[#C2A581]/50'
                    : 'text-[#8c887f] hover:text-[#dfd7ca] hover:bg-[#121418]'
                }`}
              >
                <Code2 className="w-3.5 h-3.5" />
                <span>SQL Model Pipeline</span>
              </button>
            )}

            <button
              onClick={() => setActiveTab('visuals')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold tracking-wider uppercase transition-all cursor-pointer ${
                activeTab === 'visuals'
                  ? 'bg-[#C2A581]/20 text-[#f5ecd9] border border-[#C2A581]/50'
                  : 'text-[#8c887f] hover:text-[#dfd7ca] hover:bg-[#121418]'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Architecture</span>
            </button>
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-8 animate-fadeIn">
              <div className="p-5 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/20 space-y-2">
                <h3 className="design-h2 text-lg">
                  Executive Summary
                </h3>
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
                      <li key={i} className="pl-1">
                        {item}
                      </li>
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
                      <li key={i} className="pl-1">
                        {item}
                      </li>
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
                      <li key={i} className="pl-1">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SAMPLE DATA OUTPUT TABLE */}
          {activeTab === 'data' && project.sampleData && (
            <div className="space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between">
                <h3 className="design-h2 text-base">
                  Engineered Output Dataset (Live Transformation Schema)
                </h3>
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

          {/* TAB 3: SQL CODE VIEWER */}
          {activeTab === 'query' && project.sqlQuery && (
            <div className="space-y-3 animate-fadeIn">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-[#C2A581]" />
                  <h3 className="design-h2 text-base">
                    Production CTE Query Model
                  </h3>
                </div>
                <button
                  onClick={handleCopyCode}
                  className="flex items-center gap-1.5 px-3 py-1 text-xs font-mono rounded bg-[#121418] border border-[#C2A581]/30 text-[#C2A581] hover:bg-[#C2A581]/20 transition-all cursor-pointer"
                >
                  {copiedCode ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#C2A581]" />
                      <span className="text-[#C2A581]">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy SQL</span>
                    </>
                  )}
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/20 overflow-x-auto">
                <pre className="text-xs font-mono text-[#d6cdbf] leading-relaxed">
                  <code>{project.sqlQuery}</code>
                </pre>
              </div>
            </div>
          )}

          {/* TAB 4: INTERACTIVE ARCHITECTURE */}
          {activeTab === 'visuals' && (
            <div className="space-y-6 animate-fadeIn">
              <div className="p-6 rounded-xl bg-[#0b0c0e] border border-[#C2A581]/25 space-y-4">
                <h3 className="design-h2 text-base">
                  Architecture & Workflow Pipeline
                </h3>
                <p className="design-body text-xs">
                  Enterprise-grade pipeline processing and secure data transformation architecture.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};