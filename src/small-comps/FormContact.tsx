"use client";

import { form } from "motion/react-client";
import { useEffect, useState } from "react";

function FormContact() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <form className="max-w-2xl mx-auto ">
      <div className="flex flex-col md:flex-row md:space-x-2">
        <div className="w-full md:w-1/2 pb-2">
          Name
          <input
            className="w-full border  outline-none focus:bg-transparent px-2 py-1 mt-2 bg-[#1F1F1F] rounded-md"
            type="name"
            name="name"
            placeholder="Enter Your Name"
            required
          />
        </div>

        <div className="w-full md:w-1/2">
          Email
          <input
            className="w-full border-[#FF6600] border bg-[#1F1F1F] px-2 py-1 mt-2 rounded-md"
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
          className="w-full h-48 border-[#FF6600] border px-2 py-1 bg-[#1F1F1F] mt-2 rounded-md resize-none"
          name="Message"
          placeholder="Message..."
          required
        ></textarea>
      </div>
      <div className="flex justify-center p-4">
        <button
          className="bg-[#FF6600] py-2 px-4 text-white text-center rounded"
          type="submit"
        >
          send message
        </button>
      </div>
    </form>
    // <form className="max-w-2xl mx-auto">
    //   <div className="flex flex-col gap-2">
    //     <div className="w-full flex gap-3 justify-between">
    //       <div>
    //         <input
    //           className="bg-transparent border border-orange-600 outline-none rounded-lg mt-2 p-1"
    //           type="email"
    //           required
    //         />
    //       </div>
    //       <div>
    //         <input
    //           className="bg-transparent border border-orange-600 outline-none rounded-lg mt-2 p-1"
    //           type="text"
    //           required
    //         />
    //       </div>
    //     </div>
    //     <div>
    //       Email
    //       <textarea className="" required />
    //     </div>
    //   </div>
    // </form>
  );
}

export default FormContact;
