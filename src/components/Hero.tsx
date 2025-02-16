"use client";
import Fadeout from "@/app/animations/Fadeout";
import { motion, MotionValue, useTransform } from "motion/react";
import { ReactNode, useMemo } from "react";

function Words({ children }: { children: ReactNode }) {
  const letters = useMemo(() => {
    const text = String(children);
    return text?.split("");
  }, [children]);

  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-5xl"
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
}

function Hero() {
  return (
    <motion.main className="w-full h-screen flex justify-center items-center bg-[#1f1f1f]">
      <div className="max-w-xl tracking-tighter flex flex-col gap-5 mt-32">
        <Words>REVOLUTIONIZE YOUR SHOPPING EXPERIENCE</Words>
        <Fadeout className="text-[#9CA3AF] text-xl">
          AI-powered personalized product recommendations tailored to your
          unique needs.
        </Fadeout>
        <div className="w-full flex justify-center items-center">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              transition: {
                duration: 6,
              },
            }}
            className="w-28 bg-[#FF6600] py-2 rounded-full px-2 text-center hover:bg-[#FF4500]"
          >
            Get started
          </motion.button>
        </div>
      </div>
    </motion.main>
  );
}

export default Hero;
