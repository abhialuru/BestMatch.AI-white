import Faqanim from "@/app/animations/Faqanim";

function Faq() {
  return (
    <section className="w-full h-[72%] p-10 sticky top-0">
      <div className="w-full grid grid-cols-2 mt-20">
        <div className="w-full flex flex-col gap-5 px-10">
          <h1 className="text-5xl">Frequently asked questions</h1>
          <p className="text-[#9CA3AF]">
            Got questions? We've got answers! In this section, we address the
            most common inquiries about BestMatch.AI
          </p>
        </div>
        <div className="w-full p-3 pl-4 flex flex-col gap-5">
          <Faqanim
            question="How does BestMatch.AI work?"
            ans="BestMatch.AI uses advanced AI to analyze your facial features and
          provide tailored product recommendations."
          />
          <Faqanim
            question="Is my data secure?"
            ans="Yes, all data processing is done on-device, and we do not store any personal data."
          />
        </div>
      </div>
    </section>
  );
}

export default Faq;
