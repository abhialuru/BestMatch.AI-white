"use client";
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
          <div className="w-full md:w-1/2 pb-2">
            Name
            <input
              className="w-full border border-[#3B82F6] focus:outline-none focus:border-[#FF6600] px-2 py-1 mt-2 bg-[#1F1F1F] rounded-md"
              type="name"
              name="name"
              placeholder="Enter Your Name"
              required
            />
          </div>

          <div className="w-full md:w-1/2">
            Email
            <input
              className="w-full border border-[#3B82F6] focus:outline-none focus:border-[#FF6600] px-2 py-1 mt-2 bg-[#1F1F1F] rounded-md"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>

        <div className="h-26 py-1">
          Message
          <textarea
            className="w-full h-48 border border-[#3BB2F6] focus:outline-none focus:border-[#FF6600]  px-2 py-1 bg-[#1F1F1F] mt-2 rounded-md resize-none"
            name="Message"
            placeholder="Message..."
            required
          ></textarea>
        </div>

        <div className="flex justify-center p-4">
          <button
            className="bg-[#FF6600] hover:bg-[#FF4500] py-2 px-4 text-white text-center rounded-md"
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
