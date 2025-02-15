"use client";
import { ChevronDown, ChevronsUpDown, ChevronUp } from "lucide-react";
import { motion } from "motion/react";
import { ReactNode, useState } from "react";

// interface Faqanim{
//     children: ReactNode
// }

function Faqanim() {
  const [isActive, setIsActive] = useState(false);

  const varients = {
    open: {
      height: 120,
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
          <h3 className="text-xl font-semibold">How does BestMatch.AI work?</h3>
          <Icon
            className="cursor-pointer"
            onClick={() => setIsActive(!isActive)}
          />
        </div>
        <p>
          BestMatch.AI uses advanced AI to analyze your facial features and
          provide tailored product recommendations.
        </p>
      </motion.div>
    </div>
  );
}

export default Faqanim;
