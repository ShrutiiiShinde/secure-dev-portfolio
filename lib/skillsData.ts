export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "programming-languages",
    category: "Programming Languages",
    description: "Core programming, scripting, database querying, and logic development",
    core: [
      "Python",
      "Java",
      "JavaScript",
      "SQL",
    ],
    familiar: [
      "HTML",
      "CSS",
    ],
  },
  {
    id: "data-tools",
    category: "Data & Tools",
    description: "Data analysis, business intelligence, database management, and version control",
    core: [
      "Microsoft Excel",
      "Power BI",
      "SQL Databases",
      "Git",
      "GitHub",
    ],
    familiar: [
      "VS Code",
      "Linux CLI",
    ],
  },
  {
    id: "security-tools",
    category: "Security Tools",
    description: "Penetration testing utilities, proxy interception, and network packet analysis",
    core: [
      "Burp Suite",
      "Kali Linux",
      "Nmap",
      "Wireshark",
    ],
    familiar: [
      "Linux Security Utilities",
    ],
  },
  {
    id: "security-domain",
    category: "Security",
    description: "Core cybersecurity domains, data protection, VAPT, and application testing",
    core: [
      "Information Security",
      "Data Security",
      "Web Application Security",
      "VAPT",
      "Security Testing",
    ],
    familiar: [
      "OWASP Top 10",
      "Vulnerability Validation",
      "Reconnaissance",
    ],
  },
];
