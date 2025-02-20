function Routine({ routine }: { routine: string }) {
  const [amRoutine, pmRoutine] = routine
    .split("PM")
    .map((section) => section.trim());

  function renderSteps(section: string) {
    const cleanedSection = section
      .replace(/^AM\n/, "")
      .replace(/^PM\n/, "")
      .trim();

    return cleanedSection
      .split("•")
      .filter((steps) => steps.trim() !== "")
      .map((steps, i) => (
        <li className="list-disc text-start" key={i}>
          {steps.trim()}
        </li>
      ));
  }

  return (
    <section className="w-full min-h-screen">
      <h1 className="text-2xl font-bold text-[#FF4500] mb-3 mt-10">
        Skin-care routine Analysis
      </h1>
      <div className="w-[90%]  max-h-[80%] shadow-lg shadow-black p-5 mx-auto flex flex-col gap-5 rounded-lg">
        <div className="w-full h-full flex flex-col gap-3">
          <h2 className="text-xl font-bold text-[#FF4500]">Morning Routine</h2>
          <ul className="flex flex-col gap-0.5 px-5">
            {renderSteps(amRoutine)}
          </ul>
        </div>
        <div className="w-full h-full flex flex-col gap-3">
          <h2 className="text-xl font-bold text-[#FF4500]">Night Routine</h2>
          <ul className="flex flex-col gap-0.5 px-5">
            {renderSteps(pmRoutine)}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Routine;
