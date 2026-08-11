// Export global custom types for the portfolio application

export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
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
