export type SectionId = 'home' | 'about' | 'expertise' | 'projects' | 'resume' | 'contact';

export type ProjectCategory = 'all' | 'financial' | 'supply-chain' | 'transportation' | 'public-sector' | 'ml' | 'optimization';

export interface ProjectMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  categoryLabel: string;
  tools: string[];
  role: string;
  duration?: string;
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

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  category: 'technical' | 'tools' | 'libraries';
  tag?: string;
}

export interface JourneyMilestone {
  year: string;
  title: string;
  organization?: string;
  description: string;
  iconName: 'GraduationCap' | 'BookOpen' | 'BarChart3' | 'Rocket' | 'Crown';
}

export interface IndustryExpertise {
  id: string;
  title: string;
  iconName: string;
  items: string[];
}
