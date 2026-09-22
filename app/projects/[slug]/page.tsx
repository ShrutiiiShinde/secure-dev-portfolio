import { notFound } from "next/navigation";
import Link from "next/link";
import { projectsData } from "@/lib/projectsData";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Cpu,
  AlertTriangle,
  Lightbulb,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Shruti Vijay Shinde`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen py-16 lg:py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Back Link */}
        <div>
          <Button asChild variant="ghost" size="sm">
            <Link href="/#projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Header Block */}
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span>Security-First Software Engineering</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Action CTAs: GitHub Link & Live Demo (rendered conditionally if present) */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            {project.github && (
              <Button asChild size="lg" variant="default">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-5 h-5 mr-2 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View GitHub Source
                </a>
              </Button>
            )}

            {/* Rendered conditionally ONLY if link is present */}
            {project.link && (
              <Button asChild size="lg" variant="outline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-secondary" />
                  Live Demo
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* 🛡️ KEY DIFFERENTIATOR: Visually Distinct Security Highlights Section */}
        {project.securityHighlights && project.securityHighlights.length > 0 && (
          <div className="relative rounded-3xl border-2 border-primary/60 bg-gradient-to-br from-primary/10 via-background to-secondary/10 p-8 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden space-y-6">
            {/* Background Glow Effect */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-primary/30 pb-6 relative z-10">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-2xl border-2 border-primary/80 bg-primary/20 flex items-center justify-center text-primary shadow-lg shadow-primary/30">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
                    Security Highlights
                  </h2>
                  <p className="text-xs font-mono text-primary font-semibold mt-0.5">
                    Core Security Implementations & SDLC Controls
                  </p>
                </div>
              </div>

              <span className="self-start sm:self-center px-3.5 py-1 rounded-full bg-secondary/20 border border-secondary/40 text-secondary text-xs font-mono font-bold">
                KEY DIFFERENTIATOR
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 relative z-10">
              {project.securityHighlights.map((highlight) => (
                <div
                  key={highlight}
                  className="flex items-start space-x-3 bg-background/80 border border-muted-foreground/20 backdrop-blur-md p-4.5 rounded-2xl shadow-sm hover:border-primary/50 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-semibold text-foreground/90 leading-snug">
                    {highlight}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 1. Overview Section */}
        {project.overview && (
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-primary" />
              <span>Project Overview</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {project.overview}
            </p>
          </div>
        )}

        {/* 2. Key Features Section */}
        {project.features && project.features.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight flex items-center gap-2">
              <Cpu className="w-6 h-6 text-secondary" />
              <span>Key Features & Capabilities</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.features.map((feat) => (
                <div
                  key={feat}
                  className="p-5 rounded-2xl border border-muted/80 bg-muted/20 backdrop-blur-sm space-y-2"
                >
                  <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                    <span className="w-2 h-2 rounded-full bg-primary" />
                    <span>{feat}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 3. Tech Stack Section */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground tracking-tight flex items-center gap-2">
              <Code2 className="w-6 h-6 text-primary" />
              <span>Tech Stack Breakdown</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.techStack.map((stack) => (
                <div
                  key={stack.category}
                  className="p-6 rounded-2xl border border-muted/80 bg-muted/20 space-y-3"
                >
                  <h3 className="text-xs font-mono font-bold uppercase text-muted-foreground tracking-wider">
                    {stack.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 4. Architecture Section */}
        {project.architecture && (
          <div className="p-8 rounded-3xl border border-muted/80 bg-muted/20 space-y-4">
            <h2 className="text-2xl font-bold text-foreground flex items-center gap-2">
              <Layers className="w-6 h-6 text-secondary" />
              <span>System Architecture & Engineering Strategy</span>
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed">
              {project.architecture}
            </p>
          </div>
        )}

        {/* 5 & 6. Challenges & Lessons Learned Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Challenges */}
          {project.challenges && project.challenges.length > 0 && (
            <div className="p-8 rounded-3xl border border-warning/30 bg-warning/5 space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-warning" />
                <span>Technical Challenges</span>
              </h3>
              <ul className="space-y-3">
                {project.challenges.map((ch) => (
                  <li
                    key={ch}
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-warning mt-2 shrink-0" />
                    <span>{ch}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Lessons Learned */}
          {project.lessonsLearned && project.lessonsLearned.length > 0 && (
            <div className="p-8 rounded-3xl border border-secondary/30 bg-secondary/5 space-y-4">
              <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                <Lightbulb className="w-5 h-5 text-secondary" />
                <span>Lessons Learned</span>
              </h3>
              <ul className="space-y-3">
                {project.lessonsLearned.map((ll) => (
                  <li
                    key={ll}
                    className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex items-start gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 shrink-0" />
                    <span>{ll}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
