"use client";
import { motion } from "motion/react";
import React, { ReactNode, useMemo } from "react";

const Words = ({ children }: { children: ReactNode }) => {
  const letters = useMemo(() => {
    const text = String(children);
    return text?.split("");
  }, [children]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-4xl md:text-5xl"
    >
      {letters.map((letter, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: i * 0.1,
            },
          }}
          key={i}
          className="hover:text-[#FF6600] cursor-pointer"
        >
          {letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};

export default Words;
