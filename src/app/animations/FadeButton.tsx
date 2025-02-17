"use client";

import { motion } from "motion/react";

function FadeButton({ content }: { content: string }) {
  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          duration: 6,
        },
      }}
      className="w-28 bg-[#FF6600] py-2 rounded-full px-2 text-center hover:bg-[#FF4500]"
    >
      {content}
    </motion.button>
  );
}

export default FadeButton;
