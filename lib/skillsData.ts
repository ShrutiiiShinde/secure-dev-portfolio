export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "security-tools",
    category: "Security Tools",
    description: "Industry standard security analysis, penetration testing, and proxy interception tools",
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
    id: "pentest-skills",
    category: "Pentest Skills",
    description: "Web application vulnerability assessment, reconnaissance, and report writing",
    core: [
      "Web Application VAPT",
      "Recon",
      "OWASP Top 10",
      "VAPT Report Writing",
      "PowerBI",
    ],
    familiar: [
      "Proof of Concept (PoC)",
      "Risk Assessment",
    ],
  },
  {
    id: "programming-languages",
    category: "Programming Languages",
    description: "Software development, web technologies, scripting, databases, and version control",
    core: [
      "Python",
      "Java",
      "JavaScript",
      "HTML",
      "CSS",
      "SQL",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Git",
      "GitHub",
    ],
    familiar: [
      "REST APIs",
    ],
  },
  {
    id: "networking",
    category: "Networking",
    description: "Core networking protocols, web security communication, and architectural models",
    core: [
      "TCP/IP",
      "HTTP / HTTPS",
      "DNS",
      "OSI Model",
    ],
    familiar: [
      "Network Packet Analysis",
    ],
  },
];
