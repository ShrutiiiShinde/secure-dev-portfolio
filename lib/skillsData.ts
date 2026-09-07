export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "cybersecurity",
    category: "Cybersecurity",
    description: "Vulnerability research, VAPT methodology, OWASP Top 10, and authentication security",
    core: [
      "Web Application Security",
      "VAPT",
      "Vulnerability Research",
      "OWASP Top 10",
    ],
    familiar: [
      "Reconnaissance",
      "Responsible Disclosure",
      "Authentication Security",
      "Report Writing",
    ],
  },
  {
    id: "security-tools",
    category: "Security Tools",
    description: "Industry standard penetration testing, proxy interception, and network auditing utilities",
    core: [
      "Burp Suite",
      "Kali Linux",
      "Nmap",
      "Wireshark",
    ],
    familiar: [
      "Linux Security Tools",
      "Web Proxies",
    ],
  },
  {
    id: "programming",
    category: "Programming",
    description: "Software engineering, script writing, database querying, and markup languages",
    core: [
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    familiar: [
      "TypeScript",
      "Next.js",
      "Python",
    ],
  },
  {
    id: "networking-other",
    category: "Networking & Other",
    description: "Core networking protocols, version control systems, and productivity suites",
    core: [
      "TCP/IP",
      "HTTP / HTTPS",
      "DNS",
      "OSI Model",
    ],
    familiar: [
      "Git",
      "GitHub",
      "MS Excel",
      "MS PowerPoint",
    ],
  },
];
