import Try from "@/components/Try";
import TwoSec from "./animations/Twosec";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Foot from "@/components/Foot";

function page() {
  return (
    <main className="w-full h-full">
      <TwoSec />
      <Try />
      <div className="w-full lg:h-screen bg-[#1f1f1f]">
        <Contact />
      </div>
      <Faq />
      <Foot />
    </main>
  );
}

export default page;
