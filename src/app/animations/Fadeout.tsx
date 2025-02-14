"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeoutPropTypes {
  children: ReactNode;
  className: string;
}

function Fadeout({ children, className }: FadeoutPropTypes) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 6,
        },
      }}
      className={className}
    >
      {children}
    </motion.p>
  );
}

export default Fadeout;
