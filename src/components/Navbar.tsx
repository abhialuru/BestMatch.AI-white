import React from "react";

function Navbar() {
  return (
    <nav className="w-full h-14 font-semibold mt-5  text-black">
      <div
        className="w-64 h-96 -bottom-20 right-0 -z-10 bg-gradient-to-l  from-gray-200 via-gray-300 to-gray-500 absolute transform -rotate-[56deg]"
        style={{ clipPath: "polygon(50% 0%, 20% 100%, 80% 100%)" }}
      />
      <div
        className="w-64 h-96 -top-20 left-0 -z-10 bg-gradient-to-l from-gray-200 via-gray-300 to-gray-500 absolute transform rotate-[115deg]"
        style={{ clipPath: "polygon(50% 0%, 20% 100%, 80% 100%)" }}
      />
      <div className="w-full h-full flex justify-between items-center p-8 px-20">
        <h3 className="text-black font-bold text-lg">BESTMATCH.AI</h3>
        <ul className="flex gap-14">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <button className="bg-black w-28 border border-black text-white p-1 rounded-3xl">
          Try it
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
