"use client";
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
    <>
      <div className="size-24 rounded-full border mx-auto flex justify-center items-center shadow-sm shadow-white">
        <Icon className="size-16" />
      </div>
      <h1 className="text-xl font-semibold text-center">{head}</h1>
      <p className="text-center">{para}</p>
    </>
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
      className="w-full min-h-screen relative overflow-hidden flex flex-col items-center justify-center bg-black p-5"
    >
      <div
        id="box-card"
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-10">
          <h1 className="text-5xl tracking-tighter text-center">About</h1>
          <p className="text-xl text-[#9CA3AF] text-center tracking-wide">
            Discover how our AI-driven platform provides personalized product
            recommendations
          </p>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mx-auto lg:mt-15">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{}}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="flex flex-col w-full lg:w-[30%] lg:h-60 justify-center items-center bg-[#1F1F1F] transition-transform duration-300 p-3 rounded-lg"
            >
              <CardComp
                head="AI-Powered"
                para="Advanced alogorthims for real-time analysis"
                Icon={Rocket}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{}}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="flex flex-col w-full lg:w-[30%] lg:h-60 justify-center items-center bg-[#1F1F1F] transition-transform duration-300 p-3 rounded-lg"
            >
              <CardComp
                head="Personalized"
                para="Tailored recommendations to fit your needs"
                Icon={ShoppingCart}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{}}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: 0.3,
              }}
              viewport={{ once: true }}
              className="flex flex-col w-full lg:w-[30%] lg:h-60 justify-center items-center bg-[#1F1F1F] transition-transform duration-300 p-3 rounded-lg"
            >
              <CardComp
                head="Secure"
                para="Privacy-focused, no data is stored."
                Icon={LockKeyhole}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default About;
