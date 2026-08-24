export interface Project {
  id: string;
  number: string;
  title: string;
  type: string;
  technologies: string[];
  description: string;
  keyOutcomes: string[];
  githubUrl?: string;
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: SkillItem[];
}

export interface Certificate {
  id: string;
  title: string;
  provider?: string;
  category: string;
  imagePath: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  category: string;
  description: string;
  imagePath?: string;
  badge?: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel?: string;
}
