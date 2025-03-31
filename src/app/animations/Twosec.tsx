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
    <div ref={containerRef} className="w-full min-h-[200vh] relative">
      <Hero />
      <div className="w-full min-h-fit [background:radial-gradient(125%_125%_at_50%_90%,#000_50%,#FF6600_100%)]">
        <About scrollYProgress={scrollYProgress} />
      </div>
    </div>
  );
}

export default TwoSec;
