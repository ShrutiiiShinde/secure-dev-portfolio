import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-portfolio",
    slug: "secure-developer-portfolio",
    title: "Secure Developer Portfolio",
    description:
      "A personal portfolio built with security-first development practices — Next.js 15, TypeScript, and Tailwind CSS, with real secure-development practices (headers, validated inputs, rate limiting) documented rather than simulated.",
    longDescription:
      "This portfolio website itself is engineered with security-by-design principles. Built using Next.js 15 App Router, TypeScript strict mode, Tailwind CSS, and shadcn/ui components, it features a clean responsive architecture, strict security headers, validated inputs, and a modular design token system.",
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/ShrutiiiShinde/secure-dev-portfolio",
    featured: true,
    securityFeatures: [
      "Security-by-design architecture & SSR",
      "Strict TypeScript type safety",
      "Modular design token CSS variable system",
      "Input validation & security headers",
    ],
  },
];
