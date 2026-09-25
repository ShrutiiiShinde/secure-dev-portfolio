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
    "View and download the official resume of Shruti Shinde — Cybersecurity Researcher & B.Tech CSE Graduate.",
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
            View and download the official resume PDF of Shruti Shinde, updated with the latest VAPT experience, security research disclosures, and achievements.
          </p>
        </div>

        {/* 📄 EMBEDDED OFFICIAL LIVE PDF VIEWER CARD */}
        <div className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-4 sm:p-6 shadow-2xl space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-2">
            <div className="flex items-center gap-2">
              <FileText className="w-5 h-5 text-primary" />
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                Official Resume PDF Viewer
              </h2>
            </div>
            <div className="flex items-center gap-2">
              <Button asChild size="sm" variant="outline">
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2 text-primary" />
                  Open PDF in New Tab
                </a>
              </Button>
              <Button asChild size="sm" variant="default">
                <a href="/resume.pdf" download="Shruti_Shinde_Resume.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Download PDF
                </a>
              </Button>
            </div>
          </div>
          <div className="w-full overflow-hidden rounded-2xl border border-muted/60 bg-background/50 min-h-[550px] sm:min-h-[750px]">
            <iframe
              src="/resume.pdf"
              className="w-full h-[550px] sm:h-[750px] border-0"
              title="Shruti Shinde Official Resume PDF"
            />
          </div>
        </div>

        {/* 📄 INLINE RESPONSIVE WEB CV CARD */}
        <div className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-8 sm:p-12 shadow-2xl space-y-12 relative overflow-hidden">
          {/* Header Contact Block */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-muted/60">
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                SHRUTI SHINDE
              </h2>
              
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
                    Cybersecurity Intern – VAPT <span className="text-muted-foreground font-normal">| Rudra Tech Services</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    6 Months | On-site
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Conducted Vulnerability Assessment and Penetration Testing (VAPT) on web applications following industry-standard methodologies and OWASP Top 10 Vulnerabilities.</li>
                  <li>Prepared comprehensive security reports with risk assessments, proof of concepts, and remediation recommendations.</li>
                </ul>
              </div>

              {/* Entry 2: Cybersecurity Trainer */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Cybersecurity Trainer <span className="text-muted-foreground font-normal">| ThunderCipher</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    21 Aug 2026 – 31 Aug 2026 | 10 Days | Online
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Delivering live Web Application Security and OWASP Top 10 sessions for 50+ students.</li>
                  <li>Creating and presenting practical technical content, demonstrations, and hands-on exercises.</li>
                </ul>
              </div>

              {/* Entry 3: Guest Speaker - OWASP */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Guest Speaker <span className="text-muted-foreground font-normal">| OWASP Security Summit 2026 – Knight Secured</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    Sep 4, 2026 | Online
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Spoke on &ldquo;Authentication Failures: How Common Mistakes Lead to Account Compromise.&rdquo;</li>
                </ul>
              </div>

              {/* Entry 4: Guest Speaker - AxiomSecureCrafts */}
              <div className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-lg font-bold text-foreground">
                    Guest Speaker <span className="text-muted-foreground font-normal">| AxiomSecureCrafts (ASC)</span>
                  </h4>
                  <span className="text-xs font-mono text-secondary font-semibold">
                    20 Sep 2026 | Online
                  </span>
                </div>
                <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1.5 pt-2">
                  <li>Spoke on &ldquo;Broken Access Control&rdquo; (OWASP Top 10 A01:2021) focusing on authorization flaws, privilege escalation, and secure remediation.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: SECURITY RESEARCH */}
          <div className="space-y-4 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-secondary tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4" />
              <span>SECURITY RESEARCH</span>
            </h3>

            <div className="space-y-2 pl-4 border-l-2 border-secondary/30">
              <h4 className="text-base font-bold text-foreground">
                Responsible Vulnerability Disclosure
              </h4>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Recognized by <strong className="text-foreground">TU Delft (Netherlands)</strong>, <strong className="text-foreground">SiteConnect</strong>, and <strong className="text-foreground">PodBanter</strong> for responsible vulnerability disclosure.
              </p>
              <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-primary pt-1">
                <a
                  href="https://www.tudelft.nl/Hall-of-fame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  TU Delft: https://www.tudelft.nl/Hall-of-fame <ExternalLink className="w-3 h-3" />
                </a>
                <span>|</span>
                <a
                  href="https://siteconnect.io/security-hall-of-fame/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  SiteConnect: https://siteconnect.io/security-hall-of-fame/ <ExternalLink className="w-3 h-3" />
                </a>
                <span>|</span>
                <a
                  href="https://podbanter.com/security/hall-of-fame"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline flex items-center gap-1"
                >
                  PodBanter: https://podbanter.com/security/hall-of-fame <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Section 3: TECHNICAL WRITING */}
          <div className="space-y-3 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <BookOpen className="w-4 h-4" />
              <span>TECHNICAL WRITING</span>
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground">
              • Published Cybersecurity articles. • Medium:{" "}
              <a
                href="https://medium.com/@shrutishinde1319"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-mono hover:underline inline-flex items-center gap-1 ml-1"
              >
                https://medium.com/@shrutishinde1319
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

            <ul className="space-y-2.5 text-xs sm:text-sm text-muted-foreground">
              <li>
                <span className="font-semibold text-foreground">• Academic Excellence Award</span> – MGM University, SOET (2024–2025)
              </li>
              <li>
                <span className="font-semibold text-foreground">• Cisco Networking Academy</span>: Introduction to Cybersecurity
              </li>
            </ul>
          </div>

          {/* Section 5: TECHNICAL SKILLS */}
          <div className="space-y-4 pt-4 border-t border-muted/60">
            <h3 className="text-xs font-mono font-bold uppercase text-primary tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4" />
              <span>TECHNICAL SKILLS</span>
            </h3>

            <div className="grid grid-cols-1 gap-3.5 text-xs font-mono">
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-primary font-bold">Cybersecurity:</span>
                <p className="text-muted-foreground font-sans">Web Application Security, VAPT, Vulnerability Research, OWASP Top 10, Reconnaissance, Responsible Disclosure, Authentication Security, Report Writing</p>
              </div>
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-secondary font-bold">Tools:</span>
                <p className="text-muted-foreground font-sans">Burp Suite, Kali Linux, Nmap, Wireshark</p>
              </div>
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-primary font-bold">Programming:</span>
                <p className="text-muted-foreground font-sans">Java, JavaScript, SQL, HTML, CSS</p>
              </div>
              <div className="p-3.5 rounded-xl border border-muted/60 bg-background/50 space-y-1">
                <span className="text-secondary font-bold">Networking & Other:</span>
                <p className="text-muted-foreground font-sans">TCP/IP, HTTP/HTTPS, DNS, OSI Model | Other: Git, GitHub, MS Excel, MS PowerPoint</p>
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
                  B.Tech – CSE (IoT Cybersecurity & Blockchain Technology) <span className="text-muted-foreground font-normal">| School of Engineering and Technology MGM University</span>
                </h4>
              </div>
              <div className="text-left sm:text-right font-mono text-xs">
                <span className="text-secondary font-semibold">2022 – 2026</span>
                <p className="text-primary font-bold mt-0.5">CGPA: 9.15/10</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
