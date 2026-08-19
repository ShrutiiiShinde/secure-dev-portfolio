"use client";

import { motion } from "framer-motion";
import { achievementsData } from "@/lib/achievementsData";
import { Trophy, Award, CheckCircle2, Star } from "lucide-react";

export default function AchievementsSection() {
  return (
    <section
      id="achievements"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Radial Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Trophy className="w-3.5 h-3.5" />
            <span>Honors & Certifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Key <span className="text-secondary">Achievements</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Recognitions in vulnerability disclosure, security research, academic excellence, and industry certifications.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative border-l-2 border-secondary/30 ml-4 sm:ml-8 md:ml-12 space-y-12 pl-6 sm:pl-10">
          {achievementsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative group"
            >
              {/* Timeline Node Marker */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-background border-2 border-secondary group-hover:border-primary group-hover:scale-125 transition-all flex items-center justify-center shadow-md shadow-secondary/20">
                <Star className="w-3 h-3 text-secondary group-hover:text-primary transition-colors" />
              </div>

              {/* Achievement Card */}
              <div className="rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-7 hover:border-secondary/60 hover:shadow-2xl hover:shadow-secondary/10 transition-all duration-300 space-y-5">
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-muted/50">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20 text-xs font-mono font-bold mb-2">
                      {item.badge}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-extrabold text-foreground group-hover:text-secondary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-muted-foreground mt-0.5">
                      {item.organization}
                    </p>
                  </div>

                  <span className="self-start sm:self-center px-3.5 py-1.5 rounded-full bg-background/80 border border-muted text-xs font-mono font-semibold text-foreground/80 shrink-0">
                    {item.period}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                {/* Highlights List */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase text-foreground/80 tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-secondary" />
                    <span>Highlights & Impact</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {item.highlights.map((hl) => (
                      <li
                        key={hl}
                        className="flex items-start space-x-2 text-xs sm:text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
