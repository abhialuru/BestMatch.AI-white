"use client";
import { motion } from "motion/react";
import { ReactNode, useRef } from "react";

function TextReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef(null);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default TextReveal;
