import Fadeout from "@/app/animations/Fadeout";
import FadeoutH from "@/app/animations/FadeoutH";

function Navbar() {
  return (
    <nav className="w-full hidden md:block h-16 fixed z-10 top-10 bg-transparent">
      <div className="w-[85%] mx-auto h-full bg-[#1F1F1F]/15 backdrop-blur-lg top-10 flex items-center justify-center rounded-full">
        <div className="w-full h-full flex justify-between items-center px-8 py-2">
          <FadeoutH className="text-2xl font-sans font-semibold">
            Bestmatch.AI
          </FadeoutH>
          <div className="w-[50%] h-full flex items-center justify-between gap-">
            <Fadeout className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]">
              Home
            </Fadeout>
            <Fadeout className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]">
              About
            </Fadeout>
            <Fadeout className="w-28 text-center py-2 p-1 rounded-full hover:bg-[#FF6600]">
              Contact
            </Fadeout>
            <Fadeout className="w-28 text-center py-2 p-1 rounded-full bg-[#FF6600] hover:bg-[#FF4500]">
              Try it
            </Fadeout>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
