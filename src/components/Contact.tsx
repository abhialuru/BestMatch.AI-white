"use client";
import FormContact from "@/small-comps/FormContact";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

function Contact() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.section
      style={{
        scale,
      }}
      ref={containerRef}
      className="w-full h-screen bg-black rounded-3xl"
    >
      <div className="flex flex-col justify-center text-center items-center gap-5 pt-20">
        <h1 className="text-5xl tracking-tighter text-center">Contact</h1>
        <p className="text-2xl text-[#9CA3AF]">
          Have questions or feedback? Reach out to us!
        </p>
      </div>
      <FormContact />
    </motion.section>
  );
}

export default Contact;
