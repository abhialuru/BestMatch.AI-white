"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface TextanimPropTypes {
  children: ReactNode;
}

function Textanim({ children }: TextanimPropTypes) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 30 }}
      whileInView={{
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: 0.5, ease: "easeIn" },
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.span>
  );
}

export default Textanim;
