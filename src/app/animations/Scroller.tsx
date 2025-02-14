"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { ReactNode, useRef } from "react";

interface ScollerPropTypes {
  children: ReactNode;
  className: string;
}

function Scroller({ children, className }: ScollerPropTypes) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.1], [0, 6]);

  return (
    <motion.div
      viewport={{
        once: true,
      }}
      ref={containerRef}
      id="box-card"
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default Scroller;
