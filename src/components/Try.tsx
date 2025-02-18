import FadeoutH from "@/app/animations/FadeoutH";
import FormAnalysis from "@/small-comps/FormAnalysis";

function Try() {
  return (
    <section id="try" className="w-full min-h-screen p-10 bg-[#1F1F1F]">
      <div className="flex flex-col justify-center text-center items-center gap-5 mt-20">
        <FadeoutH className="text-5xl tracking-tighter text-center">
          <span>Try it</span>
        </FadeoutH>
        <FadeoutH className="text-2xl text-[#9CA3AF]">
          <span>
            Let our AI analyze your features and recommend the best products for
            you.
          </span>
        </FadeoutH>
        <FormAnalysis />
      </div>
    </section>
  );
}

export default Try;
