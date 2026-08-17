"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/lib/validations/contact";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Mail,
  Send,
  ShieldCheck,
  MapPin,
  BookOpen,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from "lucide-react";

export default function ContactSection() {
  const [serverMessage, setServerMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    mode: "onTouched",
  });

  const onSubmit = async (data: ContactFormData) => {
    setServerMessage(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setServerMessage({
          type: "error",
          text: result.message || result.error || "Failed to send message. Please try again.",
        });
        return;
      }

      setServerMessage({
        type: "success",
        text: result.message || "Thank you! Your message has been sent successfully.",
      });
      reset();
    } catch (err) {
      console.error("Network error submitting contact form:", err);
      setServerMessage({
        type: "error",
        text: "Network connection error. Please check your connection and try again.",
      });
    }
  };

  return (
    <section
      id="contact"
      className="relative py-20 lg:py-32 border-t border-muted/40 bg-background overflow-hidden"
    >
      {/* Radial Background Glow */}
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
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground">
            Let&apos;s Connect & <span className="text-primary">Collaborate</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto">
            Have a project in mind, a security inquiry, or an engineering role? Send me a message below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="p-8 rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl space-y-6">
              <h3 className="text-2xl font-bold text-foreground">
                Contact Information
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Open for full-stack software development opportunities, vulnerability assessments, and technical writing collaborations.
              </p>

              <div className="space-y-4 pt-2">
                {/* Location */}
                <div className="flex items-center space-x-4 p-4 rounded-2xl border border-muted/60 bg-background/50">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">Location</span>
                    <p className="text-sm font-semibold text-foreground">India</p>
                  </div>
                </div>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl border border-muted/60 bg-background/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0 group-hover:scale-105 transition-transform">
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                    </svg>
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">LinkedIn</span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                {/* Medium Articles */}
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-2xl border border-muted/60 bg-background/50 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-muted-foreground">Technical Writing</span>
                    <p className="text-sm font-semibold text-foreground group-hover:text-secondary transition-colors">
                      Read Articles on Medium
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Small Security Note */}
            <div className="flex items-center space-x-3 p-4 rounded-2xl border border-secondary/30 bg-secondary/5 text-xs text-secondary font-medium">
              <ShieldCheck className="w-5 h-5 shrink-0" />
              <span>This form is protected using secure development practices.</span>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-8 sm:p-10 rounded-3xl border border-muted/80 bg-muted/20 backdrop-blur-xl relative overflow-hidden">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                {/* 🛡️ Honeypot Field (Invisible to humans, triggers spam drop if filled by bots) */}
                <div aria-hidden="true" className="hidden opacity-0 w-0 h-0 overflow-hidden pointer-events-none absolute">
                  <label htmlFor="website">Leave this field blank</label>
                  <input
                    id="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    {...register("website")}
                  />
                </div>

                {/* Form Header */}
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">
                    Send a Message
                  </h3>
                  <p className="text-xs font-mono text-muted-foreground">
                    Server-validated & rate-limited Route Handler (/api/contact)
                  </p>
                </div>

                {/* Server Response Notification Banner */}
                {serverMessage && (
                  <div
                    className={`p-4 rounded-2xl border text-sm font-medium flex items-center space-x-3 ${
                      serverMessage.type === "success"
                        ? "border-secondary/40 bg-secondary/10 text-secondary"
                        : "border-red-500/50 bg-red-500/10 text-red-400"
                    }`}
                  >
                    {serverMessage.type === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 shrink-0" />
                    )}
                    <span>{serverMessage.text}</span>
                  </div>
                )}

                {/* Name & Email Fields Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-xs font-mono font-semibold uppercase text-foreground"
                    >
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Shruti Shinde"
                      {...register("name")}
                      className={`w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                        errors.name
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 bg-red-500/5"
                          : "border-muted/80 focus:border-primary focus:ring-1 focus:ring-primary/50"
                      }`}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.name.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-xs font-mono font-semibold uppercase text-foreground"
                    >
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="shruti@example.com"
                      {...register("email")}
                      className={`w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                        errors.email
                          ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 bg-red-500/5"
                          : "border-muted/80 focus:border-primary focus:ring-1 focus:ring-primary/50"
                      }`}
                    />
                    {errors.email && (
                      <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1.5">
                        <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                        <span>{errors.email.message}</span>
                      </p>
                    )}
                  </div>
                </div>

                {/* Subject Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-xs font-mono font-semibold uppercase text-foreground"
                  >
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Project Inquiry / Security Audit"
                    {...register("subject")}
                    className={`w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none transition-colors ${
                      errors.subject
                        ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 bg-red-500/5"
                        : "border-muted/80 focus:border-primary focus:ring-1 focus:ring-primary/50"
                    }`}
                  />
                  {errors.subject && (
                    <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.subject.message}</span>
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-xs font-mono font-semibold uppercase text-foreground"
                  >
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Hello Shruti, I'd like to discuss..."
                    {...register("message")}
                    className={`w-full px-4 py-3 rounded-xl border bg-background/60 text-foreground text-sm placeholder:text-muted-foreground/60 focus:outline-none transition-colors resize-y ${
                      errors.message
                        ? "border-red-500/80 focus:border-red-500 focus:ring-1 focus:ring-red-500/50 bg-red-500/5"
                        : "border-muted/80 focus:border-primary focus:ring-1 focus:ring-primary/50"
                    }`}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-xs text-red-400 font-medium mt-1.5">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.message.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto font-semibold"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {/* Required Security Note */}
                <p className="text-xs text-muted-foreground text-center sm:text-left pt-2 border-t border-muted/50">
                  🔒 <span className="font-semibold text-foreground">Security Note:</span> This form is protected using secure development practices.
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
