"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/lib/skillsData";
import {
  Code2,
  Server,
  Database,
  ShieldCheck,
  Network,
  Lock,
  Cpu,
  CheckCircle,
  Bookmark,
} from "lucide-react";

const getCategoryIcon = (category: string) => {
  switch (category) {
    case "Development":
      return <Code2 className="w-6 h-6 text-primary" />;
    case "Backend":
      return <Server className="w-6 h-6 text-primary" />;
    case "Database":
      return <Database className="w-6 h-6 text-primary" />;
    case "Cybersecurity":
      return <ShieldCheck className="w-6 h-6 text-secondary" />;
    case "Networking":
      return <Network className="w-6 h-6 text-primary" />;
    case "Secure Development":
      return <Lock className="w-6 h-6 text-secondary" />;
    default:
      return <Cpu className="w-6 h-6 text-primary" />;
  }
};

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Subtle Ambient Radial Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Skills & <span className="text-primary">Tooling</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Categorized by practical expertise — focused on core proficiencies and working technical knowledge without arbitrary numerical scales.
          </p>
        </motion.div>

        {/* 6 Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((cat, idx) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="h-full flex flex-col justify-between rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-7 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 relative overflow-hidden group">
                <div className="space-y-6">
                  {/* Category Header */}
                  <div className="flex items-center space-x-3 pb-4 border-b border-muted/50">
                    <div className="w-12 h-12 rounded-2xl border border-primary/30 bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      {getCategoryIcon(cat.category)}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                        {cat.category}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">
                        {cat.description}
                      </p>
                    </div>
                  </div>

                  {/* Group 1: Core Skills */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-primary uppercase tracking-wider">
                      <CheckCircle className="w-3.5 h-3.5 text-primary" />
                      <span>Core Proficiency</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.core.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1.5 rounded-xl text-xs font-mono font-semibold bg-primary/15 text-primary border border-primary/30 shadow-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Group 2: Familiar Skills */}
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                      <Bookmark className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Familiar Knowledge</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {cat.familiar.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 rounded-lg text-xs font-mono bg-muted/60 text-muted-foreground border border-muted-foreground/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
