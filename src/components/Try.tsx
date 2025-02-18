"use client";
import Textanim from "@/app/animations/Textanim";
import FormAnalysis from "@/small-comps/FormAnalysis";

function Try() {
  return (
    <section id="try" className="w-full min-h-screen p-10 bg-[#1F1F1F]">
      <div className="flex flex-col justify-center text-center items-center gap-5 mt-20">
        <Textanim>
          <h1 className="text-4xl tracking-tighter text-center">Try it</h1>
        </Textanim>
        <Textanim>
          <p className="text-xl text-[#9CA3AF]">
            Let our AI analyze your features and recommend the best products for
            you.
          </p>
        </Textanim>
        <FormAnalysis />
      </div>
    </section>
  );
}

export default Try;
