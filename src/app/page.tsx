import Try from "@/components/Try";
import TwoSec from "./animations/Twosec";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";

function page() {
  return (
    <main className="w-full h-full">
      <TwoSec />
      <Try />

      <div className="w-full h-screen bg-[#1f1f1f]">
        <Contact />
      </div>
      <div className="w-full h-screen relative top-0 z-50 bg-[#1F1F1F]">
        <Faq />
        <Footer />
      </div>
    </main>
  );
}

export default page;
