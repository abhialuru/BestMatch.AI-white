"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion"; // Ensure you're using framer-motion
import { useState } from "react";
import Textanim from "./Textanim";

interface FaqanimPropType {
  question: string;
  ans: string;
}

function Faqanim({ question, ans }: FaqanimPropType) {
  const [isActive, setIsActive] = useState(false);

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  const Icon = isActive ? ChevronUp : ChevronDown;

  return (
    <div>
      <div className="w-full overflow-hidden p-5 border border-black rounded-lg">
        <div
          onClick={() => setIsActive(!isActive)}
          className="flex justify-between"
        >
          <h1 className="text-lg lg:text-xl font-semibold">{question}</h1>
          <Icon className="cursor-pointer" />
        </div>
        <motion.div
          variants={variants}
          animate={isActive ? "open" : "closed"}
          initial="closed"
          className="overflow-hidden"
        >
          <p className="text-black/50 md:text-base mt-2">{ans}</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Faqanim;
