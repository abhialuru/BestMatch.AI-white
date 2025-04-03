import { MoveRight } from "lucide-react";

function Hero() {
  return (
    <main className="w-full h-[calc(100vh-3.5rem)] text-black flex justify-center items-center">
      <div className="w-full max-w-2xl h-[70%] flex flex-col items-center gap-10 mt-20">
        <h1 className="text-5xl font-semibold text-center">
          Revolutionize your shopping experience
        </h1>
        <p className="max-w-md text-lg text-black/50 text-center">
          AI-powered personalized product recommendations tailored to your
          unique needs.
        </p>
        <div className="w-44 bg-black p-3 rounded-3xl flex justify-center items-center gap-5">
          <button className="text-white">Get started</button>
          <MoveRight className="text-white" />
        </div>
      </div>
    </main>
  );
}

export default Hero;
