// Type definitions for section identifiers
export type SectionId = 'home' | 'about' | 'expertise' | 'projects' | 'resume' | 'contact';

// Type definitions for project categories
export type ProjectCategory = 'all' | 'financial' | 'supply-chain' | 'transportation' | 'public-sector' | 'ml' | 'optimization';

// Interface for individual project impact metrics
export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

// Interface for comprehensive project data and case studies
export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  tools: string[];
  role: string;
  duration?: string;
  image?: string | string[];
  impactMetrics: ProjectMetric[];
  overview: string;
  businessProblem: string[];
  solution: string[];
  keyComponents?: string[];
  impactPoints: string[];
  sqlQuery?: string;
  sampleData?: {
    headers: string[];
    rows: (string | number)[][];
  };
  chartType?: 'aml-table' | 'pos-pipeline' | 'powerbi-driver' | 'tableau-absence' | 'ml-shap' | 'vrp-comparison';
  accentColor?: string;
  featured?: boolean;
}

// Interface for technical skills and proficiency levels
export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'technical' | 'tools' | 'libraries';
  tag?: string;
}

// Interface for professional journey milestones
export interface JourneyMilestone {
  year: string;
  title: string;
  organization?: string;
  description: string;
  iconName: 'GraduationCap' | 'BookOpen' | 'BarChart3' | 'Rocket' | 'Crown';
}

// Interface for industry expertise and service sectors
export interface IndustryExpertise {
  id: string;
  title: string;
  iconName: string;
  items: string[];
}