"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ShieldCheck, CheckCircle2, Award } from "lucide-react";
import { Experience } from "@/types";

// Reusable experience data list matching official resume
const experiences: Experience[] = [
  {
    id: "exp-2",
    role: "Cybersecurity Trainer",
    company: "ThunderCipher",
    location: "On-site",
    period: "21 Aug 2026 – 31 Aug 2026",
    type: "Ongoing",
    description:
      "Delivering live Web Application Security and OWASP Top 10 sessions for 50+ students, creating and presenting practical technical content, demonstrations, and hands-on exercises.",
    responsibilities: [
      "Live Web Security & OWASP Top 10 Instruction",
      "Interactive Hands-on Lab Exercises",
      "Demonstrations for 50+ Students",
      "Technical Content Creation",
    ],
    skills: [
      "Cybersecurity Instruction",
      "OWASP Top 10",
      "Web Security",
      "Technical Presentations",
    ],
  },
  {
    id: "exp-1",
    role: "Cybersecurity Intern – VAPT",
    company: "Rudra Tech Services",
    location: "On-site",
    period: "6 Months",
    type: "Internship",
    description:
      "Analyzed web applications to identify, investigate, and validate technical and security issues using Python, Linux, and security tools. Documented findings with detailed analysis, proof of concepts, and recommended solutions.",
    responsibilities: [
      "Web Application VAPT Analysis",
      "Vulnerability Validation & Investigation",
      "Python & Linux Security Tooling",
      "Detailed POC & Risk Documentation",
      "Remediation Recommendations",
    ],
    skills: [
      "VAPT",
      "Python",
      "Linux",
      "POC Documentation",
      "Security Auditing",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4 mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career Path</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Professional <span className="text-primary">Experience</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Practical application of web application security, cybersecurity training, threat assessments, and vulnerability analysis.
          </p>
        </motion.div>

        {/* Vertical Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 md:left-8 top-3 bottom-3 w-0.5 bg-gradient-to-b from-primary via-secondary to-muted/30" />

          {/* Timeline Entries List */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Glowing Node Marker on Timeline */}
                <div className="absolute left-4 md:left-8 top-6 -translate-x-1/2 w-6 h-6 rounded-full border-2 border-primary bg-background shadow-lg shadow-primary/40 flex items-center justify-center z-10 group">
                  <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
                </div>

                {/* Main Experience Card */}
                <div className="relative rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl p-6 sm:p-8 hover:border-primary/50 transition-all shadow-xl space-y-6 group">
                  {/* Card Header: Role & Metadata */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-muted/50 pb-5">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="px-2.5 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary text-xs font-mono font-semibold">
                          {exp.type}
                        </span>
                        <span className="text-xs text-muted-foreground font-mono flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-primary" />
                          {exp.period}
                        </span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-foreground mt-2 group-hover:text-primary transition-colors">
                        {exp.role}
                      </h3>
                      <p className="text-sm text-primary font-semibold mt-0.5">
                        {exp.company} <span className="text-xs text-muted-foreground font-mono">({exp.location})</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1 text-xs font-mono text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-xl self-start sm:self-center">
                      <ShieldCheck className="w-4 h-4 text-primary" />
                      <span>{exp.type === "Ongoing" ? "Security Training" : "Security VAPT"}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Core Responsibilities */}
                  <div className="space-y-3">
                    <h4 className="text-xs font-mono font-semibold text-foreground uppercase tracking-wider flex items-center gap-1.5">
                      <Award className="w-3.5 h-3.5 text-secondary" />
                      <span>Key Highlights & Deliverables:</span>
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {exp.responsibilities.map((resp) => (
                        <div
                          key={resp}
                          className="flex items-center gap-2 text-xs sm:text-sm text-foreground/90 bg-background/50 border border-muted/60 p-2.5 rounded-xl"
                        >
                          <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                          <span className="font-medium">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technical Skills / Tools Tags */}
                  <div className="pt-2 flex flex-wrap items-center gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 rounded-lg text-xs font-mono bg-muted/60 text-muted-foreground border border-muted-foreground/20 hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
