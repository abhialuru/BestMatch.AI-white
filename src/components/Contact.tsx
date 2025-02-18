"use client";
import Textanim from "@/app/animations/Textanim";
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
      id="contact"
      className="w-full min-w-fit lg:h-screen bg-black rounded-3xl py-10 lg:p-1 px-5"
    >
      <div className="flex flex-col justify-center text-center items-center gap-5 lg:pt-16 mb-3">
        <Textanim>
          <h1 className="text-4xl tracking-tighter text-center">Contact</h1>
        </Textanim>
        <Textanim>
          <p className="text-xl text-[#9CA3AF]">
            Have questions or feedback? Reach out to us!
          </p>
        </Textanim>
      </div>
      <FormContact />
    </motion.section>
  );
}

export default Contact;
