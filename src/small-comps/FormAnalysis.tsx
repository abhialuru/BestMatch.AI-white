"use client";
import TextReveal from "@/app/animations/TextReveal";
import { X } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, useState } from "react";

function FormAnalysis() {
  const [imagePrev, setImagePrev] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleImagePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePrev(imageUrl);
    }
  }

  function handleRemove() {
    setImagePrev(null);
    (document.getElementById("file-input") as HTMLInputElement).value = "";
  }

  return (
    <form>
      <label>
        <motion.select
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            delay: 0.5,
          }}
          className="max-w-fit py-2 px-5 bg-black border border-gray-300 rounded-lg mb-5"
          name=""
          id=""
        >
          <option>choose your price</option>
          <option value="50">0-100$</option>
          <option value="140">100-200$</option>
          <option value="270">200-300$</option>
        </motion.select>
      </label>
      <div className="flex flex-col relative gap-5 justify-center items-center text-center">
        <input
          id="file-input"
          ref={inputRef}
          name="price"
          type="file"
          accept="image/*"
          className="absolute z-50 pointer-events-none invisible"
          onChange={handleImagePreview}
        />
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            delay: 0.5,
          }}
          className="bg-[#FF6600] hover:bg-[#FF4500] w-28 py-2 px-5 rounded-lg"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            inputRef.current?.click();
          }}
        >
          Upload
        </motion.button>
        {imagePrev && (
          <>
            <div className="w-28 h-40 relative">
              <Image
                src={imagePrev}
                className="w-full h-full object-contain"
                alt="image"
                width={500}
                height={500}
              />
              <X
                onClick={handleRemove}
                className="absolute z-10 top-0 right-0 size-6 bg-red-500 text-white cursor-pointer"
              />
            </div>
          </>
        )}
        <motion.button
          initial={{ opacity: 0, y: 100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            type: "spring",
            delay: 0.5,
          }}
          className="bg-[#FF6600] w-28 py-2 px-5 rounded-lg hover:bg-[#FF4500]"
        >
          Analyze
        </motion.button>
      </div>
    </form>
  );
}

export default FormAnalysis;
