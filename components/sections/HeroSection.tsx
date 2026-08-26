import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Mail, Shield } from "lucide-react";
import HeroEntrance from "./HeroEntrance";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Glow Overlay */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-gradient-to-tr from-primary/15 via-secondary/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Subtle Security Badge */}
          <HeroEntrance delay={0.05}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-sm">
              <Shield className="w-4 h-4" />
              <span>Secure SDLC & Full-Stack Engineering</span>
            </div>
          </HeroEntrance>

          {/* Title */}
          <HeroEntrance delay={0.15}>
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.15]">
              Shruti Shinde&apos;s{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                Portfolio
              </span>
            </h1>
          </HeroEntrance>

          {/* Subtitle */}
          <HeroEntrance delay={0.25}>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl font-normal leading-relaxed">
              I design, develop, and secure modern web applications while
              applying secure development practices throughout the software
              development lifecycle.
            </p>
          </HeroEntrance>

          {/* Three CTA Buttons */}
          <HeroEntrance delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              {/* 1. View Projects (Primary CTA) */}
              <Button asChild size="lg" variant="default">
                <Link href="#projects">
                  View Projects
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </Button>

              {/* 2. View Resume (Outline CTA linking to /resume) */}
              <Button asChild size="lg" variant="outline">
                <Link href="/resume">
                  <FileText className="w-4 h-4 mr-1.5 text-secondary" />
                  View Resume
                </Link>
              </Button>

              {/* 3. Contact Me (Ghost CTA) */}
              <Button asChild size="lg" variant="ghost">
                <Link href="#contact">
                  <Mail className="w-4 h-4 mr-1 text-primary" />
                  Contact Me
                </Link>
              </Button>
            </div>
          </HeroEntrance>
        </div>
      </div>
    </section>
  );
}
