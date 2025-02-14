import FormAnalysis from "@/small-comps/FormAnalysis";

function Try() {
  return (
    <section className="w-full h-screen p-10 bg-[#1F1F1F]">
      <div className="flex flex-col justify-center text-center items-center gap-5 mt-20">
        <h1 className="text-5xl tracking-tighter text-center">Try it</h1>
        <p className="text-2xl text-[#9CA3AF]">
          Let our AI analyze your features and recommend the best products for
          you.
        </p>
        <FormAnalysis />
      </div>
    </section>
  );
}

export default Try;
