import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Shield } from "lucide-react";
import HeroVisual from "./HeroVisual";
import HeroEntrance from "./HeroEntrance";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 lg:py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content & CTAs */}
          <div className="lg:col-span-7 space-y-8 text-left">
            {/* Subtle Security Badge */}
            <HeroEntrance delay={0.05}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-wide">
                <Shield className="w-3.5 h-3.5" />
                <span>Secure SDLC & Full-Stack Engineering</span>
              </div>
            </HeroEntrance>

            {/* Title */}
            <HeroEntrance delay={0.15}>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.15]">
                Developer with a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-primary">
                  Security Mindset
                </span>
              </h1>
            </HeroEntrance>

            {/* Subtitle */}
            <HeroEntrance delay={0.25}>
              <p className="text-base sm:text-lg text-muted-foreground max-w-2xl font-normal leading-relaxed">
                I design, develop, and secure modern web applications while
                applying secure development practices throughout the software
                development lifecycle.
              </p>
            </HeroEntrance>

            {/* Three CTA Buttons */}
            <HeroEntrance delay={0.35}>
              <div className="flex flex-wrap items-center gap-4 pt-2">
                {/* 1. View Projects (Primary CTA) */}
                <Button asChild size="lg" variant="default">
                  <Link href="#projects">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </Button>

                {/* 2. Download Resume (Outline CTA) */}
                <Button asChild size="lg" variant="outline">
                  <a href="/resume.pdf" download="Shruti_Shinde_Resume.pdf">
                    <Download className="w-4 h-4 mr-1 text-secondary" />
                    Download Resume
                  </a>
                </Button>

                {/* 3. Contact Me (Ghost/Outline CTA) */}
                <Button asChild size="lg" variant="ghost">
                  <Link href="#contact">
                    <Mail className="w-4 h-4 mr-1 text-primary" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </HeroEntrance>
          </div>

          {/* Right Column: Secure Architecture Visual Animation */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
