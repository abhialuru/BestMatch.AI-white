"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInPropTypes {
  children: ReactNode;
  x: number;
}

function FadeIn({ children, x }: FadeInPropTypes) {
  return (
    <motion.span
      initial={{ opacity: 0, x: x }}
      whileInView={{
        opacity: 1,
        x: 0,
        transition: { duration: 0.3, delay: 0.3, ease: "easeIn" },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}

export default FadeIn;
