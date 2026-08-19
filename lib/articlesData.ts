import { Article } from "@/types";

export const articlesData: Article[] = [
  {
    id: "art-1",
    title: "Understanding OWASP Top 10: A Developer's Practical Guide to Web Security",
    summary:
      "A comprehensive deep-dive into the OWASP Top 10 vulnerabilities — covering SQL Injection, XSS, Broken Access Control, and SSRF with real-world code examples and remediation strategies.",
    readTime: "6 min read",
    date: "Aug 2024",
    category: "Application Security",
    tags: ["OWASP Top 10", "Web VAPT", "Secure Coding", "AppSec"],
    mediumUrl: "https://medium.com/@shrutishinde1319",
  },
  {
    id: "art-2",
    title: "Why Security Belongs in the Development Cycle, Not After Deployment",
    summary:
      "Exploring DevSecOps principles and threat modeling. Why fixing security flaws during architecture design costs 100x less than patching production vulnerabilities.",
    readTime: "4 min read",
    date: "Jul 2024",
    category: "DevSecOps",
    tags: ["DevSecOps", "SSDLC", "Threat Modeling", "Software Security"],
    mediumUrl: "https://medium.com/@shrutishinde1319",
  },
  {
    id: "art-3",
    title: "Step-by-Step Guide to Conducting Web Application Vulnerability Assessments (VAPT)",
    summary:
      "An end-to-end breakdown of conducting web application security audits — from reconnaissance and Burp Suite payload interception to risk scoring and remediation report writing.",
    readTime: "8 min read",
    date: "Jun 2024",
    category: "Penetration Testing",
    tags: ["VAPT", "Burp Suite", "Ethical Hacking", "Bug Bounty"],
    mediumUrl: "https://medium.com/@shrutishinde1319",
  },
];
