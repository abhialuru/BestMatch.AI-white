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
      <div id="contact" className="w-full lg:h-screen bg-[#1f1f1f]">
        <Contact />
      </div>
      <Faq />
      <Footer />
    </main>
  );
}

export default page;
