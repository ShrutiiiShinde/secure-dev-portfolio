export type SkillCategory = {
  id: string;
  category: string; // e.g. "Development", "Cybersecurity"
  description: string;
  core: string[];
  familiar: string[];
};

export const skillsData: SkillCategory[] = [
  {
    id: "dev",
    category: "Development",
    description: "Modern frontend and web interface engineering",
    core: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS v4",
      "HTML5 / Semantic CSS3",
    ],
    familiar: [
      "Responsive Web Design",
      "Framer Motion",
      "shadcn/ui Component Systems",
      "Web Accessibility (WCAG)",
    ],
  },
  {
    id: "backend",
    category: "Backend",
    description: "Server-side logic, API endpoints, and auth controls",
    core: [
      "Node.js",
      "Express.js",
      "RESTful API Design",
      "JWT Authentication",
      "Server Components",
    ],
    familiar: [
      "Next.js Server Actions",
      "API Rate Limiting",
      "OAuth 2.0 Protocols",
      "Custom Middleware Controls",
    ],
  },
  {
    id: "database",
    category: "Database",
    description: "Structured and unstructured data persistence layer",
    core: ["MongoDB", "PostgreSQL", "SQL Querying", "Mongoose ORM"],
    familiar: ["Prisma ORM", "Redis In-Memory Caching", "At-Rest Data Encryption"],
  },
  {
    id: "security",
    category: "Cybersecurity",
    description: "Vulnerability assessment, pen-testing, and security auditing",
    core: [
      "Web Application VAPT",
      "OWASP Top 10 Auditing",
      "Burp Suite Pro",
      "Reconnaissance & Footprinting",
      "Vulnerability Validation",
    ],
    familiar: [
      "Nmap / Wireshark Traffic Analysis",
      "Metasploit Fundamentals",
      "Risk Assessment & Report Writing",
      "Responsible Disclosure",
    ],
  },
  {
    id: "networking",
    category: "Networking",
    description: "Network communication protocols, traffic analysis, and routing",
    core: [
      "HTTP / HTTPS Protocols",
      "TCP/IP Network Suite",
      "DNS & Domain Routing",
      "TLS / SSL Certificate Handshakes",
    ],
    familiar: [
      "Subnetting & CIDR Concepts",
      "Firewall Policy Configuration",
      "VPN & Proxy Tunneling",
    ],
  },
  {
    id: "secure-dev",
    category: "Secure Development",
    description: "Proactive security controls embedded across the SDLC",
    core: [
      "Threat Modeling",
      "Secure SDLC (SSDLC)",
      "Input Validation & Sanitization",
      "Security Headers (CSP, HSTS, X-Frame)",
    ],
    familiar: [
      "DevSecOps CI/CD Integration",
      "Static Code Analysis (SAST)",
      "Secrets Management",
      "Role-Based Access Control (RBAC)",
    ],
  },
];
