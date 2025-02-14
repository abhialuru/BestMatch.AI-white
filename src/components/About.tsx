"use client";
import { LockKeyhole, LucideIcon, Rocket, ShoppingCart } from "lucide-react";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

interface CardCompTypes {
  head: string;
  para: string;
  Icon: LucideIcon;
}

interface AboutPropsType {
  scrollYProgess: MotionValue<number>;
}

function CardComp({ head, para, Icon }: CardCompTypes) {
  return (
    <div className="flex flex-col w-full lg:w-[30%] h-60 justify-center items-center bg-[#1F1F1F] transition-transform duration-300 p-3 rounded-lg">
      <div className="size-24 rounded-full border mx-auto flex justify-center items-center shadow-sm shadow-white">
        <Icon className="size-16" />
      </div>
      <h1 className="text-xl font-semibold text-center">{head}</h1>
      <p className="text-center">{para}</p>
    </div>
  );
}

function About({ scrollYProgess }: AboutPropsType) {
  const scale = useTransform(scrollYProgess, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgess, [0, 1], [-10, 0]);

  return (
    <motion.section
      style={{
        scale,
        rotate,
      }}
      className="w-full h-screen flex flex-col items-center justify-center bg-black"
    >
      <div
        id="box-card"
        className="w-full h-full flex flex-col items-center justify-center mt-15"
      >
        <div className="flex flex-col gap-5">
          <h1 className="text-5xl tracking-tighter text-center">About</h1>
          <p className="text-2xl text-[#9CA3AF] text-center tracking-tighter">
            Discover how our AI-driven platform provides personalized product
            recommendations
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mx-auto lg:mt-15">
            <CardComp
              head="AI-Powered"
              para="Advanced alogorthims for real-time analysis"
              Icon={Rocket}
            />

            <CardComp
              head="Personalized"
              para="Tailored recommendations to fit your needs"
              Icon={ShoppingCart}
            />

            <CardComp
              head="Secure"
              para="Privacy-focused, no data is stored."
              Icon={LockKeyhole}
            />
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
