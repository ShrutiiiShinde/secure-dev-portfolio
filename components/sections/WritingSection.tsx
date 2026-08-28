"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { articlesData } from "@/lib/articlesData";
import { BookOpen, ExternalLink, Clock, Calendar, ChevronDown, Sparkles, FileText } from "lucide-react";

export default function WritingSection() {
  // Store currently expanded article ID (defaults to first article)
  const [expandedId, setExpandedId] = useState<string>(articlesData[0]?.id || "art-1");

  const toggleArticle = (id: string) => {
    setExpandedId((prev) => (prev === id ? "" : id));
  };

  return (
    <section
      id="writing"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
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
            Explore cybersecurity write-ups and web penetration testing guides published on Medium. Click any title below to view full details.
          </p>
        </motion.div>

        {/* 📦 SINGLE COMPACT ACCORDION BLOCK */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-4 sm:p-6 shadow-2xl space-y-3"
        >
          {articlesData.map((article, idx) => {
            const isExpanded = expandedId === article.id;

            return (
              <div
                key={article.id}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isExpanded
                    ? "border-primary/60 bg-background/80 shadow-lg shadow-primary/10"
                    : "border-muted/60 bg-background/40 hover:border-primary/40 hover:bg-background/60"
                }`}
              >
                {/* Article Header (Title + Toggle Button) */}
                <button
                  type="button"
                  onClick={() => toggleArticle(article.id)}
                  className="w-full p-4 sm:p-5 flex items-center justify-between text-left gap-4 focus:outline-none focus:ring-2 focus:ring-primary/40 rounded-2xl"
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isExpanded
                          ? "bg-primary/20 text-primary border border-primary/30"
                          : "bg-muted/60 text-muted-foreground"
                      }`}
                    >
                      <FileText className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[10px] font-mono font-bold text-secondary uppercase px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/20">
                          Part {idx + 1}
                        </span>
                        <span className="text-xs font-mono text-muted-foreground hidden sm:inline-block">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-foreground hover:text-primary transition-colors leading-snug line-clamp-1">
                        {article.title}
                      </h3>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    <span className="text-xs font-mono text-muted-foreground hidden md:inline-block">
                      {article.readTime}
                    </span>
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 ${
                        isExpanded ? "rotate-180 bg-primary/20 text-primary" : "text-muted-foreground"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Expanded Article Body View */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-6 pt-2 space-y-5 border-t border-muted/40">
                        {/* Summary */}
                        <p className="text-sm text-muted-foreground leading-relaxed pt-2">
                          {article.summary}
                        </p>

                        {/* Metadata row */}
                        <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-muted-foreground">
                          <span className="flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5 text-primary" />
                            {article.readTime}
                          </span>
                          <span>•</span>
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-secondary" />
                            Published {article.date}
                          </span>
                        </div>

                        {/* Tags & Action Link */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-3 border-t border-muted/40">
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
                            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:bg-primary/90 transition-all shadow-md shrink-0"
                          >
                            <span>Read Article on Medium</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                          </a>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
