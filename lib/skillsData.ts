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
    description: "Web application penetration testing, vulnerability research, reconnaissance, and security audit reporting",
    core: [
      "Web Application Security",
      "VAPT",
      "Vulnerability Research",
      "OWASP Top 10",
      "Reconnaissance",
      "Responsible Disclosure",
      "Authentication Security",
      "Report Writing",
    ],
    familiar: [
      "Risk Assessment",
      "Proof of Concept (PoC)",
    ],
  },
  {
    id: "tools",
    category: "Tools",
    description: "Industry standard security analysis, Linux environments, and network traffic tools",
    core: [
      "Burp Suite",
      "Kali Linux",
      "Nmap",
      "Wireshark",
    ],
    familiar: [
      "Linux CLI",
      "Web Proxies",
    ],
  },
  {
    id: "programming",
    category: "Programming",
    description: "Core programming languages, web scripting, markup, and relational databases",
    core: [
      "Java",
      "JavaScript",
      "SQL",
      "HTML",
      "CSS",
    ],
    familiar: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    id: "networking-other",
    category: "Networking & Other",
    description: "Network communications, internet protocols, version control, and document preparation tools",
    core: [
      "TCP/IP",
      "HTTP/HTTPS",
      "DNS",
      "OSI Model",
      "Git",
      "GitHub",
      "MS Excel",
      "MS PowerPoint",
    ],
    familiar: [
      "Network Packet Analysis",
      "PowerBI",
    ],
  },
];
