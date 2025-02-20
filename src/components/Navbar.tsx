"use client";
import Fadeout from "@/app/animations/Fadeout";
import { AlignRight } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const varients = {
    open: {
      height: 170,
    },
    closed: {
      height: 40,
    },
  };

  return (
    <nav className="w-full  lg:block min-h-16 fixed z-50 top-5 lg:top-10 bg-transparent">
      <div className="w-[85%] mx-auto h-full bg-black/30 backdrop-blur-lg top-10 flex items-center justify-center rounded-3xl lg:rounded-full p-4 lg:p-1">
        <div className="w-full lg:h-full hidden lg:flex justify-between lg:items-center lg:px-8 py-2">
          <Fadeout className="text-xl font-bold text-gradient-r from-white via-gray-950 to-white">
            Bestmatch.AI
          </Fadeout>
          <AlignRight
            className="size-5 lg:hidden"
            onClick={() => setIsMenu(!isMenu)}
          />
          <div className="w-[50%] h-full  flex items-center justify-between gap-2">
            <Link
              className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]"
              href="/"
            >
              <Fadeout className="w-full">Home</Fadeout>
            </Link>
            <Link
              className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]"
              href="#about"
            >
              <Fadeout className="w-full">About</Fadeout>
            </Link>
            <Link
              className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]"
              href="#contact"
            >
              <Fadeout className="w-full">Contact</Fadeout>
            </Link>
            <Link
              className="w-28 text-center py-2 p-1 rounded-full bg-[#FF6600] hover:bg-[#FF4500]"
              href="#try"
            >
              <Fadeout className="w-full">Try it</Fadeout>
            </Link>
          </div>
        </div>
        <motion.div
          variants={varients}
          animate={isMenu ? "open" : "closed"}
          initial="closed"
          className="w-full overflow-hidden  lg:h-full flex flex-col lg:hidden justify-between lg:items-center lg:px-8 py-2"
        >
          <div className="w-full flex justify-between items-center">
            <h1>BestMatch.AI</h1>
            <AlignRight
              onClick={() => setIsMenu(!isMenu)}
              className="size-5 cursor-pointer"
            />
          </div>
          <ul className="mx-auto flex flex-col gap-2 mt-2 text-center pb-2 text-gray-300">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="#about">About</Link>
            </li>
            <li>
              <Link href="#try">Try it</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </motion.div>
      </div>
    </nav>
  );
}

export default Navbar;
