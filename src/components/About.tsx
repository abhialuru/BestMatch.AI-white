"use client";
import Textanim from "@/app/animations/Textanim";
import { LockKeyhole, LucideIcon, Rocket, ShoppingCart } from "lucide-react";
import { motion, MotionValue, useTransform } from "motion/react";

interface CardCompTypes {
  head: string;
  para: string;
  Icon: LucideIcon;
}

interface AboutPropsType {
  scrollYProgress: MotionValue<number>;
}

function CardComp({ head, para, Icon }: CardCompTypes) {
  return (
    <div className="flex flex-col w-full lg:w-[30%] h-60 justify-center items-center p-3 rounded-lg [background:radial-gradient(125%_125%_at_50%_10%,#000_50%,#FF6600_100%)]">
      <div className="size-24 rounded-full border border-black mx-auto flex justify-center items-center ">
        <Icon className="size-16" />
      </div>
      <h1 className="text-xl font-semibold text-center">{head}</h1>
      <p className="text-center">{para}</p>
    </div>
  );
}

function About({ scrollYProgress }: AboutPropsType) {
  const scale = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.section
      style={{
        scale,
        rotate,
      }}
      id="about"
      className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center p-5"
    >
      <div
        id="box-card"
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-10">
          <Textanim>
            <h1 className="text-4xl tracking-tighter text-center">About</h1>
          </Textanim>
          <Textanim>
            <p className="text-xl text-[#9CA3AF] text-center tracking-wide">
              Discover how our AI-driven platform provides personalized product
              recommendations
            </p>
          </Textanim>
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
