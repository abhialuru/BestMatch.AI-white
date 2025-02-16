"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

interface FaqanimPropType {
  question: string;
  ans: string;
}

function Faqanim({ question, ans }: FaqanimPropType) {
  const [isActive, setIsActive] = useState(false);

  const varients = {
    open: {
      height: 135,
    },
    closed: {
      height: 60,
    },
  };

  const Icon = isActive ? ChevronUp : ChevronDown;

  return (
    <div>
      <motion.div
        variants={varients}
        animate={isActive ? "open" : "closed"}
        initial="closed"
        className="w-full overflow-hidden p-5 border border-white rounded-lg"
      >
        <div className=" flex justify-between mb-2">
          <h3 className="text-lg lg:text-xl font-semibold">{question}</h3>
          <Icon
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <p className="text-[#9CA3AF] text-sm md:text-base">{ans}</p>
      </motion.div>
    </div>
  );
}

export default Faqanim;
