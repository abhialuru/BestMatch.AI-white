"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeoutPropTypes {
  children: ReactNode;
  className: string;
}

function FadeoutH({ children, className }: FadeoutPropTypes) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 100 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        delay: 0.5,
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}

export default FadeoutH;
