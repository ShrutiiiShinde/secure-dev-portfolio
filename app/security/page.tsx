import { SECURITY_HEADERS } from "@/lib/securityConfig";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  ArrowLeft,
  Terminal,
  CheckCircle2,
  AlertTriangle,
  MailCheck,
  Hourglass,
  FileCheck2,
  Sparkles,
} from "lucide-react";

export const metadata = {
  title: "Security Architecture | Shruti Vijay Shinde",
  description:
    "Explore the active HTTP security headers, contact form controls, and secure development architecture engineered into this portfolio.",
};

export default function SecurityPage() {
  return (
    <main className="min-h-screen py-16 lg:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Navigation */}
        <div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
        </div>

        {/* Page Header */}
        <div className="space-y-6 text-center sm:text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Security-by-Design Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            Security <span className="text-primary">Architecture</span> & Controls
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            This portfolio isn&apos;t just a visual resume — it is a production-grade web application engineered with strict HTTP security headers, zero-trust server validation, rate limiting, and privacy controls.
          </p>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 1: Active HTTP Security Headers (Actual Config)       */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-primary font-mono text-xs uppercase font-bold tracking-wider">
              <Terminal className="w-4 h-4" />
              <span>next.config.ts Configuration</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Active HTTP Security Headers
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              The following headers are configured in [`next.config.ts`](file:///c:/Users/User/Documents/Shruti_Portfolio/next.config.ts) and attached to every HTTP response emitted by this server.
            </p>
          </div>

          {/* Grid of Actual Configured Headers */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SECURITY_HEADERS.map((header) => (
              <div
                key={header.key}
                className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-7 flex flex-col justify-between space-y-6 hover:border-primary/50 transition-colors group"
              >
                <div className="space-y-4">
                  {/* Category & Header Name */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 text-[11px] font-mono font-bold">
                      {header.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      Active
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-mono font-bold text-foreground group-hover:text-primary transition-colors">
                      {header.key}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                      {header.purpose}
                    </p>
                  </div>

                  {/* Header Raw Code Value */}
                  <div className="p-3.5 rounded-xl bg-background/80 border border-muted/80 font-mono text-[11px] text-foreground/90 break-all select-all">
                    <span className="text-secondary font-bold">header:</span>{" "}
                    {header.value}
                  </div>
                </div>

                {/* Threat Mitigation Note */}
                <div className="pt-4 border-t border-muted/50 flex items-start space-x-2 text-xs text-secondary font-medium">
                  <ShieldCheck className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{header.mitigation}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 2: Contact Form Real Security Controls                */}
        {/* ------------------------------------------------------------- */}
        <div className="space-y-8 pt-8 border-t border-muted/50">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-secondary font-mono text-xs uppercase font-bold tracking-wider">
              <Lock className="w-4 h-4" />
              <span>Route Handler (/api/contact)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Contact Form Security Controls
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl">
              How contact submissions are protected against spam, DoS attacks, and data leakage across client and server layers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Control 1: Zero-Trust Server Validation */}
            <div className="p-7 rounded-3xl border border-primary/30 bg-primary/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Zero-Trust Server Validation
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Client-side validation can be bypassed by malicious actors sending raw API calls. The Route Handler at <code className="text-xs font-mono text-primary bg-primary/10 px-1.5 py-0.5 rounded">/api/contact</code> re-evaluates every payload using Zod schemas on the server before processing.
              </p>
            </div>

            {/* Control 2: Upstash Redis Rate Limiting */}
            <div className="p-7 rounded-3xl border border-secondary/30 bg-secondary/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                <Hourglass className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Upstash Redis Rate Limiting
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Submissions are rate-limited to 5 requests per 10-minute window per IP address using Upstash serverless Redis sliding windows. This prevents Denial of Service (DoS) and automated endpoint spam.
              </p>
            </div>

            {/* Control 3: Honeypot Spam Protection */}
            <div className="p-7 rounded-3xl border border-warning/30 bg-warning/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-warning/10 border border-warning/20 flex items-center justify-center text-warning">
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Honeypot Bot Trap
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                An invisible trap field (<code className="text-xs font-mono text-warning bg-warning/10 px-1.5 py-0.5 rounded">website</code>) is hidden from human visitors via CSS. Automated scraping bots automatically fill this field, causing the server to silently drop the spam without processing.
              </p>
            </div>

            {/* Control 4: Data Minimization & Privacy */}
            <div className="p-7 rounded-3xl border border-primary/30 bg-primary/5 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                <MailCheck className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-foreground">
                Data Minimization & Resend Delivery
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Contact messages are dispatched directly via Resend transactional email without storing Personally Identifiable Information (PII) on a web database server, eliminating data breach liabilities and SQL injection vectors.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------- */}
        {/* SECTION 3: Secure Development Philosophy Closing Statement    */}
        {/* ------------------------------------------------------------- */}
        <div className="relative rounded-3xl border-2 border-primary/60 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 sm:p-12 shadow-2xl space-y-6 text-center sm:text-left overflow-hidden">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-mono font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>SECURE DEVELOPMENT PHILOSOPHY</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-foreground tracking-tight">
                “Security integrated into development, not bolted on afterward.”
              </h2>

              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Application security is an architectural requirement that begins at line one of code. By combining strict TypeScript type safety, server-side data validation, automated linting, security headers, and threat modeling throughout the software development lifecycle, software can be delivered robust, performant, and secure by design.
              </p>
            </div>

            <Button asChild size="lg" className="shrink-0 font-semibold">
              <Link href="/#contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
