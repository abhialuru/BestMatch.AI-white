"use client";
import About from "@/components/About";
import Hero from "@/components/Hero";
import { useScroll } from "motion/react";
import { useRef } from "react";

function TwoSec() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="w-full h-[200vh] relative bg-[#1f1f1f]">
      <Hero />
      <About scrollYProgress={scrollYProgress} />
    </div>
  );
}

export default TwoSec;
