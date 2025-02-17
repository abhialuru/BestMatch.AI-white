import FadeButton from "@/app/animations/FadeButton";
import Fadeout from "@/app/animations/Fadeout";
import Words from "@/app/animations/Words";
import { motion } from "motion/react";

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
