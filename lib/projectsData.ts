import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "proj-portfolio",
    slug: "secure-developer-portfolio",
    title: "Secure Developer Portfolio",
    description:
      "A personal portfolio built with security-first development practices — Next.js 15, TypeScript, and Tailwind CSS, with real secure-development practices (headers, validated inputs, rate limiting) documented rather than simulated.",
    overview:
      "This web application serves as a living demonstration of modern full-stack web engineering combined with application security principles. Rather than relying on simulated metrics or static boilerplate, the portfolio is architected from the ground up using Next.js 15 App Router, TypeScript strict mode, Tailwind CSS v4, and shadcn/ui components.",
    features: [
      "Responsive Glassmorphism Navigation with Framer Motion mobile drawer animations",
      "Dynamic App Router Project Listing & Deep Detail Pages (/projects/[slug])",
      "Interactive Vertical Career Timeline for VAPT & Engineering Experience",
      "Dark Theme Token System powered by CSS Variables (#0F172A, #06B6D4, #10B981)",
      "Strict Type-Safe Component Architecture with 0 TypeScript errors",
      "Production-ready SSR layout shell with automated build verification",
    ],
    techStack: [
      {
        category: "Core Framework",
        items: ["Next.js 15 (App Router)", "React 19"],
      },
      {
        category: "Type Safety",
        items: ["TypeScript (Strict Mode)"],
      },
      {
        category: "Styling & UI",
        items: ["Tailwind CSS v4", "shadcn/ui Primitives", "CSS Variables Token System"],
      },
      {
        category: "Animations & Motion",
        items: ["Framer Motion"],
      },
      {
        category: "Icons & Assets",
        items: ["Lucide React", "Custom Security SVGs"],
      },
    ],
    architecture:
      "The portfolio utilizes Next.js App Router Server Components by default to deliver pre-rendered static HTML with maximum SEO benefits and lightning-fast load times. Client Components ('use client') are strictly isolated at leaf nodes (such as mobile navigation drawers and scroll entrance wrappers) to prevent unnecessary re-rendering and keep the client JavaScript bundle minimal.",
    challenges: [
      "Achieving a high-contrast dark glassmorphism design system while adhering to strict WCAG AAA accessibility contrast guidelines.",
      "Isolating Client Component boundaries in Next.js 15 so Framer Motion scroll animations run smoothly without polluting the Server Component tree.",
      "Ensuring clean cross-platform execution across PowerShell and Node.js toolchains during local build steps.",
    ],
    lessonsLearned: [
      "Integrating security controls early during component architecture design eliminates vulnerabilities before code reaches production.",
      "A structured CSS variable design token system makes site-wide theme modifications instantaneous and maintainable.",
      "Isolating client animation wrappers keeps the core application lightweight and highly performant.",
    ],
    securityHighlights: [
      "Strict TypeScript Type Safety enforcing compile-time data integrity & zero implicit 'any' types",
      "Security-by-design Server Component rendering preventing XSS vector injections",
      "Strict Content Security Policy & Security Header configuration",
      "Zero hardcoded secrets or sensitive API keys across codebase repositories",
      "Input sanitation & safe URL scheme validation for external links and contact forms",
      "Automated build-time type checking and zero-vulnerability package dependency tree",
    ],
    tags: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    github: "https://github.com/ShrutiiiShinde/secure-dev-portfolio",
    link: "", // Empty so live demo link is hidden until deployed
    featured: true,
  },
];
