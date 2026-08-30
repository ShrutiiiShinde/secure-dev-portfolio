export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "product-comm",
    category: "Product & Communication",
    description: "Technical writing, audience engagement, public speaking, and problem solving",
    core: [
      "Technical Writing",
      "Content Creation",
      "Presentation",
      "Public Speaking",
    ],
    familiar: [
      "Audience Engagement",
      "Problem Solving",
      "Documentation",
    ],
  },
  {
    id: "technology",
    category: "Technology",
    description: "Programming languages, web technologies, and version control",
    core: [
      "Python",
      "Java",
      "JavaScript",
      "HTML / CSS",
      "SQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    familiar: [
      "Git",
      "GitHub",
      "REST APIs",
    ],
  },
  {
    id: "design-tools",
    category: "Design & Security Tools",
    description: "UI/UX design software, component libraries, and penetration testing tools",
    core: [
      "Figma",
      "shadcn/ui",
      "Framer Motion",
      "Power BI",
      "Burp Suite",
      "Kali Linux",
    ],
    familiar: [
      "Nmap",
      "Wireshark",
      "Linux Administration",
    ],
  },
];
