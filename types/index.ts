// Export global custom types for the portfolio application

export type TechStackCategory = {
  category: string; // e.g. "Framework", "Language", "Styling"
  items: string[];
};

export type Project = {
  id: string;
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  overview?: string;
  features?: string[];
  techStack?: TechStackCategory[];
  architecture?: string;
  challenges?: string[];
  lessonsLearned?: string[];
  securityHighlights?: string[];
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  securityFeatures?: string[];
  featured?: boolean;
};

export type Experience = {
  id: string;
  role: string;
  company: string;
  location?: string;
  period: string;
  type?: string; // e.g., "Internship", "Full-time"
  description: string;
  responsibilities: string[];
  skills: string[];
};
