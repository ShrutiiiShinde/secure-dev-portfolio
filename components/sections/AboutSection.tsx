"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  ShieldCheck,
  Trophy,
  BookOpen,
  Lock,
  CheckCircle2,
  Code2,
} from "lucide-react";

export default function AboutSection() {
  const factBadges = [
    {
      title: "B.Tech CSE (CGPA 9.24/10)",
      description: "MGM University (IoT Cybersecurity & Blockchain)",
      icon: GraduationCap,
      color: "text-primary border-primary/30 bg-primary/10",
    },
    {
      title: "VAPT & Security Experience",
      description: "Rudra Tech Services & ThunderCipher Trainer",
      icon: ShieldCheck,
      color: "text-secondary border-secondary/30 bg-secondary/10",
    },
    {
      title: "Hall of Fame Recognition",
      description: "TU Delft & SiteConnect Disclosures",
      icon: Trophy,
      color: "text-warning border-warning/30 bg-warning/10",
    },
    {
      title: "Technical Writer on Medium",
      description: "Authoring Cybersecurity & VAPT Insights",
      icon: BookOpen,
      color: "text-primary border-primary/30 bg-primary/10",
    },
  ];

  const philosophyPoints = [
    {
      title: "Security by Design",
      description:
        "Threat modeling and vulnerability prevention start at line one of code, not during post-production.",
    },
    {
      title: "Defense in Depth",
      description:
        "Multi-layered validation across API gateways, authorization controls, and encrypted data storage.",
    },
    {
      title: "DevSecOps Mindset",
      description:
        "Seamlessly integrating automated security checks into modern CI/CD pipelines.",
    },
  ];

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Background Decorative Blur */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-secondary/30 bg-secondary/10 text-secondary text-xs font-semibold uppercase tracking-wider">
            <Code2 className="w-3.5 h-3.5" />
            <span>About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Bridging Software Engineering &{" "}
            <span className="text-primary">Cybersecurity</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Combining full-stack web development skills with proactive security analysis to build resilient digital experiences.
          </p>
        </motion.div>

        {/* Top Grid: Story Narrative & Fact Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          {/* Left Column: Written Story Narrative */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-muted-foreground text-base sm:text-lg leading-relaxed"
          >
            <h3 className="text-2xl font-bold text-foreground tracking-tight">
              Hello, I&apos;m Shruti Shinde.
            </h3>

            <p>
              I am a Software Developer and Cybersecurity Specialist currently completing my B.Tech in CSE (IoT Cybersecurity & Blockchain Technology) at MGM University with a 9.24 CGPA.
            </p>

            <p>
              My experience spans hands-on Web Application Vulnerability Assessment & Penetration Testing (VAPT) at Rudra Tech Services, alongside delivering live web security and OWASP Top 10 training sessions for 50+ students at ThunderCipher.
            </p>

            <p>
              Rather than treating security as an after-the-fact checklist, I embed secure coding principles into every phase of the development lifecycle while sharing technical literature on Medium.
            </p>
          </motion.div>

          {/* Right Column: Fact Badges Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {factBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.title}
                  className="p-5 rounded-2xl border border-muted/80 bg-muted/20 backdrop-blur-sm hover:border-primary/50 transition-all space-y-3 group"
                >
                  <div
                    className={`w-10 h-10 rounded-xl border flex items-center justify-center ${badge.color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground group-hover:text-primary transition-colors">
                      {badge.title}
                    </h4>
                    <p className="text-xs text-muted-foreground mt-1">
                      {badge.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Distinct "Development Philosophy" Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative rounded-3xl border border-primary/40 bg-gradient-to-r from-muted/40 via-background to-muted/40 p-8 sm:p-10 shadow-2xl backdrop-blur-xl overflow-hidden"
        >
          {/* Top Decorative Accent Line */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-secondary to-primary" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-4 space-y-3">
              <div className="w-12 h-12 rounded-2xl border border-primary/40 bg-primary/10 flex items-center justify-center text-primary">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-extrabold text-foreground tracking-tight">
                Development Philosophy
              </h3>
              <p className="text-sm text-primary font-semibold font-mono">
                &ldquo;Security integrated into development, not bolted on afterward.&rdquo;
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {philosophyPoints.map((point) => (
                <div
                  key={point.title}
                  className="space-y-2 border-l-2 border-primary/50 pl-4"
                >
                  <div className="flex items-center gap-1.5 text-sm font-bold text-foreground">
                    <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />
                    <span>{point.title}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
