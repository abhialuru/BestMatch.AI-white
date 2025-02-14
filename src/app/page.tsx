import Try from "@/components/Try";
import TwoSec from "./animations/Twosec";
import Contact from "@/components/Contact";

function page() {
  return (
    <main className="w-full h-full">
      <TwoSec />
      <Try />
      <div className="w-full h-screen bg-[#1F1F1F]">
        <Contact />
      </div>
    </main>
  );
}

export default page;
