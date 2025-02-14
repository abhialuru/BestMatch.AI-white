"use client";

import { X } from "lucide-react";
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
      <select
        className="px-5 py-2 max-w-fit bg-black border border-gray-300 rounded-md mb-3"
        name=""
        id=""
      >
        <option>choose your price</option>
        <option value="50">0-100$</option>
        <option value="140">100-200$</option>
        <option value="270">200-300$</option>
      </select>

      <div className="flex flex-col relative gap-5 justify-center items-center text-center">
        <input
          ref={inputRef}
          id="file-input"
          name="price"
          type="file"
          accept="image/*"
          onChange={handleImagePreview}
        />
        <button
          className="bg-[#FF6600] hover:bg-[#FF4500] w-28 py-2 px-5 rounded-lg mt-3"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            inputRef.current?.click();
          }}
        >
          Upload
        </button>
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
        <button className="bg-[#FF6600] w-28 py-2 px-5 rounded-lg hover:bg-[#FF4500]">
          Analyze
        </button>
      </div>
    </form>
  );
}

export default FormAnalysis;
