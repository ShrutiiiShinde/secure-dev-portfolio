"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Server, Cpu, Key, Database } from "lucide-react";

export default function HeroVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="relative w-full max-w-lg mx-auto aspect-square flex items-center justify-center p-4"
    >
      {/* Radial Gradient Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-secondary/15 to-transparent rounded-full blur-3xl opacity-60 pointer-events-none" />

      {/* Main Glassmorphic Container Card */}
      <div className="relative w-full h-full rounded-3xl border border-muted/80 bg-background/60 backdrop-blur-xl p-6 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Subtle Decorative Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #F8FAFC 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Header Bar of Diagram */}
        <div className="flex items-center justify-between z-10 border-b border-muted/50 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
            <span className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
              Secure System Architecture
            </span>
          </div>
          <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-semibold">
            TLS 1.3 ENCRYPTED
          </span>
        </div>

        {/* SVG Flow Connecting Lines & Node Network */}
        <div className="relative flex-1 my-4 flex items-center justify-center">
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 400 240"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Connecting Paths */}
            {/* Left (Client) to Center (API Gateway) */}
            <path
              d="M 80 120 L 200 120"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-40"
            />
            {/* Center (API Gateway) to Top Right (Auth Vault) */}
            <path
              d="M 200 120 L 320 60"
              stroke="var(--secondary)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-40"
            />
            {/* Center (API Gateway) to Bottom Right (Encrypted DB) */}
            <path
              d="M 200 120 L 320 180"
              stroke="var(--primary)"
              strokeWidth="2"
              strokeDasharray="4 4"
              className="opacity-40"
            />

            {/* Framer Motion Animated Glowing Data Packets along paths */}
            {/* Motion Packet 1: Left to Center */}
            <motion.circle
              cx="80"
              cy="120"
              r="4"
              fill="var(--primary)"
              animate={{ cx: [80, 200] }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Motion Packet 2: Center to Top Right */}
            <motion.circle
              cx="200"
              cy="120"
              r="4"
              fill="var(--secondary)"
              animate={{ cx: [200, 320], cy: [120, 60] }}
              transition={{
                duration: 2.6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.4,
              }}
            />
            {/* Motion Packet 3: Center to Bottom Right */}
            <motion.circle
              cx="200"
              cy="120"
              r="4"
              fill="var(--primary)"
              animate={{ cx: [200, 320], cy: [120, 180] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />
          </svg>

          {/* Node 1: Client Web App (Left) */}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 z-10 flex flex-col items-center">
            <div className="w-14 h-14 rounded-2xl border border-muted bg-background/90 flex items-center justify-center shadow-lg group hover:border-primary transition-colors">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <span className="text-[11px] font-mono text-muted-foreground mt-1.5">
              Client App
            </span>
          </div>

          {/* Node 2: Central Secure API Gateway (Center) */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
            <motion.div
              animate={{
                boxShadow: [
                  "0 0 15px rgba(6, 182, 212, 0.2)",
                  "0 0 30px rgba(6, 182, 212, 0.4)",
                  "0 0 15px rgba(6, 182, 212, 0.2)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="w-20 h-20 rounded-3xl border-2 border-primary/80 bg-background/95 flex items-center justify-center shadow-xl relative"
            >
              <ShieldCheck className="w-10 h-10 text-primary" />
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-secondary border-2 border-background flex items-center justify-center">
                <Lock className="w-2.5 h-2.5 text-background" />
              </span>
            </motion.div>
            <span className="text-xs font-semibold text-foreground mt-2">
              API Gateway
            </span>
            <span className="text-[10px] font-mono text-primary font-medium">
              OAuth2 / Zero Trust
            </span>
          </div>

          {/* Node 3: Auth Vault (Top Right) */}
          <div className="absolute right-2 top-4 z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl border border-muted bg-background/90 flex items-center justify-center shadow-md">
              <Key className="w-5 h-5 text-secondary" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground mt-1">
              Auth Vault
            </span>
          </div>

          {/* Node 4: Encrypted DB (Bottom Right) */}
          <div className="absolute right-2 bottom-4 z-10 flex flex-col items-center">
            <div className="w-12 h-12 rounded-xl border border-muted bg-background/90 flex items-center justify-center shadow-md">
              <Database className="w-5 h-5 text-primary" />
            </div>
            <span className="text-[10px] font-mono text-muted-foreground mt-1">
              Encrypted DB
            </span>
          </div>
        </div>

        {/* Footer Security Badges */}
        <div className="z-10 flex items-center justify-between pt-3 border-t border-muted/50 text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center space-x-1.5">
            <Server className="w-3.5 h-3.5 text-primary" />
            <span>OWASP Compliant</span>
          </div>
          <div className="flex items-center space-x-1.5 text-secondary">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Secure SDLC</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
