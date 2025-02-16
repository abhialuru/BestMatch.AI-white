"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface BoxanimPropsTypes {
  children: ReactNode;
  initialY: number;
  finalY: number;
}

function Boxanim({ children, initialY, finalY }: BoxanimPropsTypes) {
  return (
    <motion.div
      initial={{ opacity: 0, y: initialY }}
      whileInView={{
        opacity: 1,
        y: finalY,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export default Boxanim;
