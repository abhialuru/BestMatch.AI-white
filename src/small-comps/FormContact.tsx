"use client";
import Boxanim from "@/app/animations/Boxanim";
import { useEffect, useState } from "react";

function FormContact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="w-full lg:w-[60%] mx-auto">
      <form className="w-full mx-auto">
        <div className="flex flex-col md:flex-row md:space-x-2">
          <Boxanim initialY={-100} className="w-full md:w-1/2 pb-2">
            Name
            <input
              className="w-full border border-zinc-900 text-black px-2 py-1 mt-2 rounded-md placeholder:text-black/70"
              type="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </Boxanim>
          <Boxanim initialY={-100} className="w-full md:w-1/2">
            Email
            <input
              className="w-full px-2 py-1 mt-2 border border-zinc-900 rounded-md"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </Boxanim>
        </div>

        <Boxanim initialY={100} className="h-26 py-1">
          Message
          <textarea
            className="w-full h-48 border border-zinc-900 px-2 py-1 mt-2 rounded-md resize-none"
            name="Message"
            placeholder="Message..."
            required
          ></textarea>
        </Boxanim>

        <div className="flex justify-center p-4">
          <button
            className="bg-zinc-900 text-white hover:bg- py-2 px-4 text-center rounded-md"
            type="submit"
          >
            send message
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormContact;
