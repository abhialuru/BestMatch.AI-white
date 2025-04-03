import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Try from "@/components/Try";
import Revealanim from "./animations/Revealanim.tsx";

function page() {
  return (
    <div>
      <div className="w-full h-screen bg-slate-100 z-10 relative overflow-hidden">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Revealanim />
      <Contact />
      <div className="w-full h-auto">
        <Faq />
        <Footer />
      </div>
    </div>
  );
}

export default page;
