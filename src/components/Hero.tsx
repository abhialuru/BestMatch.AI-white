"use client";
import FadeButton from "@/app/animations/FadeButton";
import Fadeout from "@/app/animations/Fadeout";
import { motion } from "motion/react";
import { ReactNode, useMemo } from "react";

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
              duration: 0.3,
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

function Hero() {
  return (
    <motion.main className="w-full h-screen flex justify-center items-center bg-[#1f1f1f]">
      <div className="w-full lg:max-w-2xl tracking-tighter flex flex-col gap-5 mt-32 p-5 text-center lg:text-start">
        <Words>REVOLUTIONIZE YOUR SHOPPING EXPERIENCE</Words>
        <p>
          <Fadeout className="text-[#9CA3AF] text-xl">
            AI-powered personalized product recommendations tailored to your
            unique needs.
          </Fadeout>
        </p>
        <div className="w-full flex justify-center items-center">
          <FadeButton content="Get started" />
        </div>
      </div>
    </motion.main>
  );
}

export default Hero;
