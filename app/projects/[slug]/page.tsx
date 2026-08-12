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
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
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
            <span>Secure Software Architecture</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-foreground tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
            {project.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap gap-4 pt-2">
            {project.github && (
              <Button asChild size="default" variant="default">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="w-4 h-4 mr-2 fill-current"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  View GitHub Source
                </a>
              </Button>
            )}

            {project.link && (
              <Button asChild size="default" variant="outline">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 mr-2 text-secondary" />
                  Live Demo / Details
                </a>
              </Button>
            )}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="p-6 rounded-2xl border border-muted/80 bg-muted/20 space-y-3">
          <h3 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider flex items-center gap-2">
            <Code2 className="w-4 h-4 text-primary" />
            <span>Technologies & Tools Used</span>
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Detailed Narrative */}
        {project.longDescription && (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-foreground">
              Project Overview
            </h2>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed whitespace-pre-line">
              {project.longDescription}
            </p>
          </div>
        )}

        {/* Security Features List */}
        {project.securityFeatures && (
          <div className="p-8 rounded-3xl border border-secondary/30 bg-secondary/5 space-y-6">
            <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
              <ShieldCheck className="w-6 h-6 text-secondary" />
              <span>Key Security Highlights</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.securityFeatures.map((feat) => (
                <div
                  key={feat}
                  className="flex items-start gap-3 bg-background/60 p-4 rounded-xl border border-muted"
                >
                  <CheckCircle2 className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-foreground">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
