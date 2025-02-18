"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface BoxanimPropsTypes {
  children: ReactNode;
  initialY: number;
  className: string;
}

function Boxanim({ children, initialY, className }: BoxanimPropsTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Boxanim;
