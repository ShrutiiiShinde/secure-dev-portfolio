import Link from "next/link";
import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-muted/50 bg-background/50 backdrop-blur-sm mt-auto py-10 px-4 sm:px-6 lg:px-8 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 text-center">
        {/* Social Media Links */}
        <div className="flex items-center justify-center space-x-6">
          {/* GitHub Icon */}
          <a
            href="https://github.com/ShrutiiiShinde"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            aria-label="GitHub"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>

          {/* LinkedIn Icon */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            aria-label="LinkedIn"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          {/* Medium Icon */}
          <a
            href="https://medium.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            aria-label="Medium"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42c1.87 0 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
            </svg>
          </a>

          {/* Email Icon */}
          <a
            href="mailto:shrutishinde1319@gmail.com"
            className="p-2.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted/50 transition-all"
            aria-label="Email"
          >
            <svg
              className="w-5 h-5 fill-none stroke-current stroke-2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Tech Stack & Security Notice */}
        <div className="space-y-2 text-muted-foreground max-w-md">
          <p className="font-medium text-foreground/90">
            Built with:{" "}
            <span className="text-primary font-mono text-xs">Next.js</span>,{" "}
            <span className="text-secondary font-mono text-xs">TypeScript</span>,{" "}
            <span className="text-primary font-mono text-xs">Tailwind CSS</span>
          </p>

          <Link
            href="/security"
            className="inline-flex items-center justify-center gap-1.5 text-xs text-secondary hover:text-foreground hover:underline transition-colors font-medium"
          >
            <ShieldCheck className="w-4 h-4 text-secondary inline-block" />
            <span>Built using modern secure development practices. Explore Security Architecture →</span>
          </Link>
        </div>

        {/* Copyright Divider & Line */}
        <div className="w-full max-w-xs border-t border-muted/40 pt-4 text-xs text-muted-foreground/70">
          © {currentYear} Shruti Vijay Shinde. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
