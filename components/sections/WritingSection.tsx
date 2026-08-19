"use client";

import { motion } from "framer-motion";
import { articlesData } from "@/lib/articlesData";
import { BookOpen, ExternalLink, Clock, Calendar, Sparkles } from "lucide-react";

export default function WritingSection() {
  return (
    <section
      id="writing"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Technical Writing & Insights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Articles & <span className="text-primary">Publications</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Demystifying web application security, secure coding standards, and vulnerability assessment practices published on Medium.
          </p>
        </motion.div>

        {/* Responsive Grid of Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articlesData.map((article, idx) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div className="group h-full flex flex-col justify-between rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-7 transition-all duration-300 hover:-translate-y-2 hover:border-primary/60 hover:shadow-2xl hover:shadow-primary/20 relative overflow-hidden">
                {/* Visual Cover Banner Placeholder */}
                <div className="w-full h-40 rounded-2xl bg-gradient-to-br from-primary/20 via-background to-secondary/20 border border-primary/20 p-5 flex flex-col justify-between mb-6 relative overflow-hidden group-hover:border-primary/50 transition-colors">
                  <div className="flex items-center justify-between z-10">
                    <span className="px-2.5 py-1 rounded-full bg-background/80 border border-primary/30 text-primary font-mono text-[10px] font-bold uppercase">
                      {article.category}
                    </span>
                    <Sparkles className="w-4 h-4 text-primary opacity-60 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="z-10 font-mono text-xs font-bold text-foreground/80 flex items-center justify-between">
                    <span>Medium Publication</span>
                    <BookOpen className="w-4 h-4 text-secondary" />
                  </div>
                </div>

                <div className="space-y-4">
                  {/* Article Metadata (Read Time & Date) */}
                  <div className="flex items-center space-x-4 text-xs font-mono text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      {article.readTime}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-secondary" />
                      {article.date}
                    </span>
                  </div>

                  {/* Title & Short Summary */}
                  <div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight line-clamp-2">
                      <a
                        href={article.mediumUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {article.title}
                      </a>
                    </h3>
                    <p className="text-sm text-muted-foreground mt-2.5 leading-relaxed line-clamp-3">
                      {article.summary}
                    </p>
                  </div>
                </div>

                {/* Bottom Section: Tags & Read Article Button */}
                <div className="pt-6 space-y-4 border-t border-muted/50 mt-6">
                  <div className="flex flex-wrap gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-primary/10 text-primary border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={article.mediumUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-xs font-semibold text-primary group-hover:text-foreground transition-colors pt-1"
                  >
                    <span>Read Article on Medium</span>
                    <ExternalLink className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
