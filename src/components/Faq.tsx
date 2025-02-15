import Faqanim from "@/app/animations/Faqanim";

function Faq() {
  return (
    <section className="w-full h-screen bg-[#1F1F1F] p-10">
      <div className="w-full h-full grid grid-cols-2 mt-20">
        <div className="w-full flex flex-col gap-5 px-10">
          <h1 className="text-5xl">Frequently asked questions</h1>
          <p className="text-[#9CA3AF]">
            Got questions? We've got answers! In this section, we address the
            most common inquiries about BestMatch.AI
          </p>
        </div>
        <div className="w-full p-3 pl-4 flex flex-col gap-5">
          <Faqanim />
          <Faqanim />
        </div>
      </div>
    </section>
  );
}

export default Faq;
