import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  Code2,
  Mail,
  Phone,
  FolderGit2,
  ExternalLink,
  BookOpen,
} from "lucide-react";

export const metadata = {
  title: "Resume | Shruti Shinde",
  description:
    "View and download the official resume of Shruti Shinde — Cyber Security Researcher & Software Developer.",
};

export default function ResumePage() {
  return (
    <main className="min-h-screen py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Back Navigation & Action CTAs Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>

          <div className="flex flex-wrap items-center gap-3">
            <Button asChild variant="outline" size="sm" className="hidden sm:inline-flex">
              <a href="/resume.pdf" download="Shruti_Shinde_Resume.pdf">
                <Download className="w-4 h-4 mr-2 text-primary" />
                Download Official PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Page Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Official Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Curriculum <span className="text-primary">Vitae</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A comprehensive breakdown of VAPT experience, cybersecurity instruction, projects, achievements, and technical skillsets matching the official resume.
          </p>
        </div>

        {/* 📄 INLINE INTERACTIVE RESUME VIEWER CARD */}
        <div className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl space-y-12 relative overflow-hidden">
          {/* Header Contact Block */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-muted/60">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                SHRUTI SHINDE
              </h2>
              <p className="text-base font-semibold text-primary">
                Cyber Security Researcher & Software Developer
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-mono text-muted-foreground pt-1">
                <a
                  href="mailto:shrutishinde1319@gmail.com"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  shrutishinde1319@gmail.com
                </a>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-secondary" />
                  (+91) 8262804360
                </span>
                <span>•</span>
                <a
                  href="https://www.linkedin.com/in/shrutishinde19/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-primary" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                  </svg>
                  linkedin.com/in/shrutishinde19
                </a>
                <span>•</span>
                <a
                  href="https://medium.com/@shrutishinde1319"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <BookOpen className="w-3.5 h-3.5 text-secondary" />
                  medium.com/@shrutishinde1319
                </a>
                <span>•</span>
                <a
                  href="https://github.com/ShrutiiiShinde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 hover:text-primary transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-primary" />
                  github.com/ShrutiiiShinde
                </a>
              </div>
            </div>

            <Button asChild size="default" variant="default" className="shrink-0">
              <a href="/resume.pdf" download="Shruti_Shinde_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume PDF
              </a>
            </Button>
          </div>

          {/* Section 1: EXPERIENCE */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>EXPERIENCE</span>
            </h3>

            <div className="space-y-8 pl-4 border-l-2 border-primary/30">
              {/* Entry 1: Cybersecurity Intern – VAPT */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Cybersecurity Intern – VAPT <span className="text-muted-foreground font-normal">| Rudra Tech Services (On-site)</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    6 Months | On-site
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Conducted Vulnerability assessments and Penetration Testing of web applications and analyzed application behavior, workflows, and risks.</li>
                  <li>Translated technical findings into clear reports with business impact, evidence, and actionable recommendations.</li>
                </ul>
              </div>

              {/* Entry 2: Cybersecurity Trainer */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Cybersecurity Trainer <span className="text-muted-foreground font-normal">| ThunderCipher (Remote / Online)</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    10-Day OWASP Program | Completed
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Delivered a 10-day hands-on Web Application Security and OWASP Top 10 training program for 50+ students.</li>
                  <li>Created and presented practical technical content, demonstrations, and hands-on lab exercises.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: PROJECT */}
          <div className="space-y-4 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <FolderGit2 className="w-4 h-4" />
              <span>PROJECT</span>
            </h3>

            <div className="p-5 rounded-2xl border border-muted/80 bg-background/50 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h4 className="text-base font-bold text-foreground">
                  Secure Developer Portfolio <span className="text-xs font-mono text-secondary ml-2 font-normal">| In Progress</span>
                </h4>
                <a
                  href="https://github.com/ShrutiiiShinde/secure-dev-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-mono text-primary hover:underline inline-flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  GitHub Repository
                </a>
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1">
                <li>Building a user-focused portfolio with Next.js, TypeScript, Tailwind CSS, shadcn/ui, and Framer Motion.</li>
                <li>Implementing secure contact forms, server-side validation, rate limiting, spam protection, and production security headers.</li>
              </ul>
            </div>
          </div>

          {/* Section 3: TECHNICAL WRITING */}
          <div className="space-y-3 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>TECHNICAL WRITING</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              • Publish practical technical articles on Medium, simplifying complex technology and cybersecurity concepts for learners.{" "}
              <a
                href="https://medium.com/@shrutishinde1319"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-mono hover:underline inline-flex items-center gap-1 ml-1"
              >
                medium.com/@shrutishinde1319
                <ExternalLink className="w-3 h-3" />
              </a>
            </p>
          </div>

          {/* Section 4: ACHIEVEMENTS & RECOGNITION */}
          <div className="space-y-4 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-secondary tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>ACHIEVEMENTS & RECOGNITION</span>
            </h3>

            <ul className="space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="space-y-1">
                <div className="font-semibold text-foreground">
                  • Hall of Fame – TU Delft (Netherlands) & SiteConnect
                </div>
                <p className="text-xs text-muted-foreground pl-3">
                  Recognized for responsible vulnerability disclosure.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-primary pl-3">
                  <a
                    href="https://www.tudelft.nl/Hall-of-fame"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    TU Delft Hall of Fame <ExternalLink className="w-3 h-3" />
                  </a>
                  <span>|</span>
                  <a
                    href="https://siteconnect.io/security-hall-of-fame/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline flex items-center gap-1"
                  >
                    SiteConnect Hall of Fame <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </li>
              <li>
                <span className="font-semibold text-foreground">• Academic Excellence Award</span> – MGM University, SOET (2024–2025)
              </li>
            </ul>
          </div>

          {/* Section 5: TECHNICAL SKILLS */}
          <div className="space-y-4 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>TECHNICAL SKILLS</span>
            </h3>

            <div className="grid grid-cols-1 gap-4 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-primary font-bold">Product & Communication:</span>
                <p className="text-muted-foreground font-sans">Technical Writing, Content Creation, Presentation, Public Speaking, Audience Engagement, Problem Solving, Documentation</p>
              </div>
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-secondary font-bold">Technology:</span>
                <p className="text-muted-foreground font-sans">Python, Java, JavaScript, HTML, CSS, SQL, Next.js, TypeScript, Tailwind CSS, Git, GitHub</p>
              </div>
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-primary font-bold">Design & Tools:</span>
                <p className="text-muted-foreground font-sans">Figma, shadcn/ui, Framer Motion, Power BI, Burp Suite, Kali Linux</p>
              </div>
            </div>
          </div>

          {/* Section 6: EDUCATION */}
          <div className="space-y-3 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <GraduationCap className="w-4 h-4" />
              <span>EDUCATION</span>
            </h3>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <div>
                <h4 className="text-sm font-bold text-foreground">
                  B.Tech – CSE (IoT Cybersecurity & Blockchain Technology)
                </h4>
                <p className="text-xs text-muted-foreground mt-0.5">
                  MGM University
                </p>
              </div>
              <div className="text-left sm:text-right font-mono text-xs">
                <span className="text-secondary font-semibold">2022 – 2026</span>
                <p className="text-primary font-bold mt-0.5">CGPA: 9.15 / 10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
