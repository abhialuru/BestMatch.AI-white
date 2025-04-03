import FadeIn from "@/app/animations/FadeIn";
import Faqanim from "@/app/animations/Faqanim";
import Textanim from "@/app/animations/Textanim";

function Faq() {
  return (
    <section className="w-full min-h-fit pt-5 md:px-10 md:pt-10 flex flex-col bg-slate-100 text-black">
      <div className="w-full flex flex-col lg:grid grid-cols-2 lg:mt-14 gap-5 flex-grow">
        <div className="w-full flex flex-col gap-5 px-10">
          <FadeIn x={-30}>
            <h1 className="text-3xl lg:text-5xl">Frequently asked questions</h1>
          </FadeIn>
          <FadeIn x={-30}>
            <p className="text-black/50">
              Got questions? We've got answers! In this section, we address the
              most common inquiries about BestMatch.AI
            </p>
          </FadeIn>
        </div>
        <div className="w-full p-3 pl-4 flex flex-col gap-5">
          <FadeIn x={30}>
            <Faqanim
              question="How does BestMatch.AI work?"
              ans="BestMatch.AI uses advanced AI to analyze your facial features and
          provide tailored product recommendations."
            />
          </FadeIn>
          <FadeIn x={30}>
            <Faqanim
              question="Is my data secure?"
              ans="Yes, all data processing is done on-device, and we do not store any personal data."
            />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Faq;
