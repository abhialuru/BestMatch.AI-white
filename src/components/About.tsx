import { LockKeyhole, LucideIcon, Rocket, ShoppingCart } from "lucide-react";

interface CardCompTypes {
  head: string;
  para: string;
  Icon: LucideIcon;
}

function CardComp({ head, para, Icon }: CardCompTypes) {
  return (
    <div className="flex flex-col w-full lg:w-[30%] h-60 text-black justify-center items-center bg-gradient-to-tl from-white via-gray-300 to-white transition-transform duration-300 p-3 rounded-lg relative">
      <div className="size-24 rounded-full border border-black mx-auto flex justify-center items-center shadow-sm shadow-white">
        <Icon className="size-16" />
      </div>
      <h1 className="text-xl font-semibold text-center">{head}</h1>
      <p className="text-center">{para}</p>
    </div>
  );
}

function About() {
  return (
    <section
      id="about"
      className="w-full h-auto relative overflow-hidden flex flex-col items-center justify-center bg-zinc-950 p-14"
    >
      <div
        id="box-card"
        className="w-full h-full flex flex-col items-center justify-center"
      >
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-5">
            <h1 className="text-4xl tracking-tighter text-center text-white">
              About
            </h1>
            <p className="text-xl text-white/50 text-center tracking-wide">
              Discover how our AI-driven platform provides personalized product
              recommendations
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-5 mx-auto lg:mt-1">
            <CardComp
              head="AI-Powered"
              para="Advanced alogorthims for real-time analysis"
              Icon={Rocket}
            />

            <CardComp
              head="Personalized"
              para="Tailored recommendations to fit your needs"
              Icon={ShoppingCart}
            />

            <CardComp
              head="Secure"
              para="Privacy-focused, no data is stored."
              Icon={LockKeyhole}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
