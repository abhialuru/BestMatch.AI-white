import Try from "@/components/Try";
import TwoSec from "./animations/Twosec";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";

function page() {
  return (
    <main className="w-full h-full overflow-hidden">
      <TwoSec />
      <Try />
      <div className="w-full h-screen relative bg-[#1F1F1F]">
        <Contact />
      </div>
      <Faq />
    </main>
  );
}

export default page;
