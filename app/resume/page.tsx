import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Download,
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Award,
  ShieldCheck,
  Code2,
  Printer,
  Mail,
  MapPin,
  ExternalLink,
} from "lucide-react";

export const metadata = {
  title: "Resume | Shruti Vijay Shinde",
  description:
    "View and download the professional resume of Shruti Vijay Shinde — Full-Stack Developer & Cybersecurity VAPT Specialist.",
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
              <a href="/resume.pdf" download="Shruti_Vijay_Shinde_Resume.pdf">
                <Download className="w-4 h-4 mr-2 text-primary" />
                Download PDF
              </a>
            </Button>
          </div>
        </div>

        {/* Page Title */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight">
            Professional <span className="text-primary">Resume</span>
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl">
            A comprehensive overview of engineering experience, security audits, technical skillsets, and academic certifications.
          </p>
        </div>

        {/* 📄 INLINE INTERACTIVE RESUME VIEWER CARD */}
        <div className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl space-y-12 relative overflow-hidden">
          {/* Header Contact Block */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-muted/60">
            <div className="space-y-2">
              <h2 className="text-3xl font-extrabold text-foreground tracking-tight">
                Shruti Vijay Shinde
              </h2>
              <p className="text-base font-semibold text-primary">
                Software Developer & Cybersecurity VAPT Specialist
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground pt-1">
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-secondary" />
                  India
                </span>
                <span>•</span>
                <span className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-primary" />
                  shindeshrutivijay@gmail.com
                </span>
                <span>•</span>
                <a
                  href="https://github.com/ShrutiiiShinde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors flex items-center gap-1"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  github.com/ShrutiiiShinde
                </a>
              </div>
            </div>

            <Button asChild size="default" variant="default" className="shrink-0">
              <a href="/resume.pdf" download="Shruti_Vijay_Shinde_Resume.pdf">
                <Download className="w-4 h-4 mr-2" />
                Download Resume PDF
              </a>
            </Button>
          </div>

          {/* Section 1: Executive Summary */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Executive Summary</span>
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Software Developer with a specialized background in Cybersecurity and Vulnerability Assessment & Penetration Testing (VAPT). Proven expertise in full-stack web architecture using Next.js 15, TypeScript, and Tailwind CSS, coupled with hands-on experience identifying OWASP Top 10 vulnerabilities, conducting risk assessments, and authoring technical security literature on Medium.
            </p>
          </div>

          {/* Section 2: Work Experience */}
          <div className="space-y-6">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              <span>Professional Experience</span>
            </h3>

            <div className="space-y-6 pl-4 border-l-2 border-primary/30">
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Cybersecurity Intern – VAPT
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    6 Months Internship
                  </span>
                </div>
                <p className="text-xs font-mono text-muted-foreground">
                  Vulnerability Assessment & Security Division
                </p>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Executed comprehensive Web Application Vulnerability Assessment & Penetration Testing (VAPT) across REST API endpoints.</li>
                  <li>Validated OWASP Top 10 risks including SQL Injection, Cross-Site Scripting (XSS), and Broken Access Control.</li>
                  <li>Authored detailed security audit & risk assessment reports with actionable remediation recommendations.</li>
                  <li>Engaged in reconnaissance, footprinting, and ethical security testing under strict compliance standards.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Technical Skills Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>Technical Skills & Tools</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl border border-muted/60 bg-background/50 space-y-2">
                <span className="text-xs font-mono font-semibold text-primary">Development & Core</span>
                <p className="text-xs text-muted-foreground">Next.js 15, React 19, TypeScript, JavaScript (ES6+), Tailwind CSS v4, HTML5/CSS3</p>
              </div>
              <div className="p-4 rounded-2xl border border-muted/60 bg-background/50 space-y-2">
                <span className="text-xs font-mono font-semibold text-secondary">Cybersecurity & VAPT</span>
                <p className="text-xs text-muted-foreground">Web VAPT, OWASP Top 10, Burp Suite Pro, Nmap, Wireshark, Risk Assessment</p>
              </div>
              <div className="p-4 rounded-2xl border border-muted/60 bg-background/50 space-y-2">
                <span className="text-xs font-mono font-semibold text-primary">Backend & Storage</span>
                <p className="text-xs text-muted-foreground">Node.js, Express.js, REST APIs, JWT Auth, MongoDB, PostgreSQL</p>
              </div>
              <div className="p-4 rounded-2xl border border-muted/60 bg-background/50 space-y-2">
                <span className="text-xs font-mono font-semibold text-secondary">DevSecOps & Controls</span>
                <p className="text-xs text-muted-foreground">GitHub Actions CI/CD, CodeQL (SAST), Gitleaks, Upstash Redis Rate Limiting, Resend</p>
              </div>
            </div>
          </div>

          {/* Section 4: Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-muted/60">
            {/* Education */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                <span>Education</span>
              </h3>
              <div>
                <h4 className="text-sm font-bold text-foreground">Bachelor of Computer Science / Cybersecurity</h4>
                <p className="text-xs text-muted-foreground mt-0.5">Specialized in Application Security & SSDLC</p>
                <p className="text-xs font-mono text-secondary mt-1 font-semibold">First Class Distinction</p>
              </div>
            </div>

            {/* Certifications */}
            <div className="space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase text-secondary tracking-wider flex items-center gap-2">
                <Award className="w-4 h-4" />
                <span>Certifications & Honors</span>
              </h3>
              <ul className="space-y-1.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Security Hall of Fame Recognition</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Responsible Vulnerability Disclosure Awards</span>
                </li>
                <li className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                  <span>Cisco CyberOps & Network Security Certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
