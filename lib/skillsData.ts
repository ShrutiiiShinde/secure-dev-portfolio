export type SkillCategory = {
  id: string;
  category: string;
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "programming",
    category: "Programming",
    description: "Core programming languages and query languages",
    core: ["Python", "Java", "JavaScript", "SQL"],
    familiar: ["TypeScript", "Bash / Shell Scripting"],
  },
  {
    id: "app-web",
    category: "Application & Web",
    description: "Modern web frameworks, frontend structure, and APIs",
    core: ["HTML", "CSS", "Next.js", "TypeScript", "REST APIs"],
    familiar: ["React", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
  },
  {
    id: "tools",
    category: "Development Tools",
    description: "Environment tooling, version control, and OS platforms",
    core: ["Git", "GitHub", "VS Code", "Linux"],
    familiar: ["GitHub Actions CI/CD", "Dependabot", "CodeQL"],
  },
  {
    id: "security-tools",
    category: "Security Tools & VAPT",
    description: "Penetration testing suites, vulnerability scanners, and security distros",
    core: ["Burp Suite", "Nmap", "Wireshark", "Kali Linux"],
    familiar: ["Web VAPT", "OWASP Top 10 Auditing", "PoC Documentation", "Reconnaissance"],
  },
  {
    id: "networking",
    category: "Networking",
    description: "Network communication protocols, DNS, and architectural models",
    core: ["TCP/IP", "HTTP/HTTPS", "DNS", "OSI Model"],
    familiar: ["TLS/SSL Protocols", "Packet Inspection", "Perimeter Firewalls"],
  },
  {
    id: "secure-dev",
    category: "Secure Development",
    description: "Proactive security controls embedded across the SDLC",
    core: ["Threat Modeling", "Secure SDLC (SSDLC)", "Zero-Trust Server Validation", "HTTP Security Headers"],
    familiar: ["Upstash Redis Rate Limiting", "Honeypot Bot Protection", "Data Minimization"],
  },
];
