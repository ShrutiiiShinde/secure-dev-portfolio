"use client";

import { motion } from "framer-motion";

interface HeroEntranceProps {
  children: React.ReactNode;
  delay?: number;
}

export default function HeroEntrance({ children, delay = 0 }: HeroEntranceProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.45,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
