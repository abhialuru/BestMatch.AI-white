"use client";
import Textanim from "@/app/animations/Textanim";
import FormContact from "@/small-comps/FormContact";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

function Contact() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  // State to track whether the scale is 1
  const [isScaled, setIsScaled] = useState(false);

  // Use effect to update the state based on the scale value
  useEffect(() => {
    // Subscribe to the scale value and update state accordingly
    const unsubscribe = scale.onChange((value) => {
      if (value === 1) {
        setIsScaled(true);
      } else {
        setIsScaled(false);
      }
    });

    // Cleanup the subscription on unmount
    return () => unsubscribe();
  }, [scale]);

  return (
    <motion.section
      style={{
        scale,
      }}
      ref={containerRef}
      id="contact"
      className={`w-full min-w-fit lg:h-screen bg-gradient-to-tr from-zinc-400 via-slate-100 to-slate-100 text-black ${
        isScaled ? "rounded-none" : "rounded-3xl"
      } py-10 lg:p-1 px-5`}
    >
      <div className="flex flex-col justify-center text-center items-center gap-5 lg:pt-16 mb-3">
        <Textanim>
          <h1 className="text-4xl tracking-tighter text-center">Contact</h1>
        </Textanim>
        <Textanim>
          <p className="text-xl text-black/50">
            Have questions or feedback? Reach out to us!
          </p>
        </Textanim>
      </div>
      <FormContact />
    </motion.section>
  );
}

export default Contact;
