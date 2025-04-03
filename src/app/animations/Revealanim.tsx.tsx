"use client";

import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Try from "@/components/Try";
import Image from "next/image";

// Register the ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function Home() {
  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: "#main",
        start: "60% 60%",
        end: "100% 50%",
        scrub: 1, // Make the animation scrub (tied to scroll position)
        pin: true, // Pin the #main element while scrolling
      },
    });

    // Animate #top and #bottom
    timeline.to("#top", { top: "-50%" }).to("#bottom", { bottom: "-50%" }, 0);

    // Move the h1 elements inside #top and #bottom
    // Animating #bottom-h with translateY at the same time
    gsap.fromTo(
      "#center-h",
      {
        scale: 0.3,
      },
      {
        scale: 1,
        // scrollTrigger: {
        //   trigger: "#center-h", // The element to watch for entering the viewport
        //   start: "top 80%", // When the top of the element is 80% from the top of the viewport
        //   end: "bottom 20%", // The element should scale as long as it's in this range
        //   scrub: true, // Makes the animation smooth and follows the scroll position
        //   markers: false, // Set to true to see the markers (for debugging)
        // },
      }
    );
  }, []);

  return (
    <>
      <div id="main" className="w-full h-screen relative overflow-hidden">
        <div
          id="top"
          className="w-full bg-black h-[50vh] absolute z-50 top-[0%] overflow-hidden"
        >
          <div id="top-h" className="text-white">
            <div className="w-full mt-10 p-5 flex justify-around">
              <h2 className="p-10 text-5xl font-thin">HOW DOES IT WORK ?</h2>
              <Image
                src="/AI-BestMatch.jpg"
                alt="AI-Image"
                className="w-56 object-contain"
                width={500}
                height={500}
              />
            </div>
            <h1 className="w-fit text-8xl font-bold text-white absolute top-[100%] left-[50%] translate-x-[-50%] translate-y-[-50%] overflow-hidden">
              TRY IT!
            </h1>
          </div>
        </div>
        <Try />
        <div
          id="bottom"
          className="w-full h-[50vh] bg-black absolute bottom-[0%] overflow-hidden"
        >
          <div className="w-full flex justify-between px-10">
            <Image
              src="/AI-BestMatch.3.jpg"
              alt="AI-Image"
              className="w-56 object-contain"
              width={500}
              height={500}
            />
            <h2 className="max-w-2xl font-thin text-2xl mt-20 pt-10">
              JUST UPLOAD YOUR PROFILE, LET OUR AI ANALYZE AND RECOMMEND BEST
              PRODUCTS FOR YOU.
            </h2>
          </div>
          <h1
            id="bottom-h"
            className="w-fit text-8xl font-bold absolute z-50 top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          >
            TRY IT!
          </h1>
        </div>
      </div>
    </>
  );
}

export default Home;
