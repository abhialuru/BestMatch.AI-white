"use client";
import Textanim from "@/app/animations/Textanim";
import Recommend from "@/small-comps/Recommend";
import Routine from "@/small-comps/Routine";
import { Droplet, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import Chatbot from "./Chatbot";

interface Product {
  product_url: string;
  price?: number;
  rating?: number;
  reviews_count?: number;
  image_url?: string;
  title?: string;
}

interface Category {
  category: string;
  products: Product[];
}

function Try() {
  const [imagePrev, setImagePrev] = useState<string | null>(null);
  const [imageFile, setImageFile] = useState<File | null>(null); // Store the file here
  const [price, setPrice] = useState("all");
  const [recommendations, setRecommendations] = useState<Category[] | null>(
    null
  );
  const [loading, setLoading] = useState(false);
  const [analysisId, setAnalysisId] = useState<string | null>(null); // Added state for analysisId
  const [routine, setRoutine] = useState(null);
  const [tips, setTips] = useState<string | null>(null);

  const inputRef = useRef<HTMLInputElement | null>(null);

  function handleImagePreview(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImagePrev(imageUrl);
      setImageFile(file);
    }
  }

  function handleRemove() {
    setImagePrev(null);
    (document.getElementById("file-input") as HTMLInputElement).value = "";
    setImageFile(null);
    setRecommendations(null);
    setRoutine(null);
  }

  async function handleAnalyze(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!imageFile || !price) {
      alert("Please fill in all fields");
      return;
    }

    setLoading(true);

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("priceRange", price);

    try {
      const response = await fetch(
        "https://face-analysis-app.onrender.com/api/analysis-recommendation/analyze",
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        const data = await response.json();
        console.log("Success:", data);

        if (data.recommendations) {
          setRecommendations(data.recommendations);
        }
        if (data.analysisId) {
          setAnalysisId(data.analysisId); // Save the analysisId to state
        }
      } else {
        console.error("Failed to submit the form");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  }

  const pollAIResults = async (analysisId: string) => {
    let attempts = 0;
    const maxAttempts = 60;

    const interval = setInterval(async () => {
      try {
        attempts++;
        const response = await fetch(
          `https://face-analysis-app.onrender.com/api/analysis-recommendation/ai-results/${analysisId}`
        );
        const result = await response.json();
        console.log("Polling response:", result);

        if (result.success && result.complete) {
          console.log("Received complete data:", result);
          clearInterval(interval); // Stop polling when complete
          setRoutine(result.routine.routine);
          setTips(result.tips);
        }

        if (attempts >= maxAttempts) {
          clearInterval(interval); // Stop polling after max attempts
          console.log("Polling timed out"); // Log timeout
        }
      } catch (err) {
        clearInterval(interval); // Stop polling on error
        console.error("Error polling AI results:", err); // Log error
      }
    }, 2000);
  };

  useEffect(() => {
    if (analysisId) {
      pollAIResults(analysisId);
    }
  }, [analysisId]);

  return (
    <section
      id="try"
      className="w-full min-h-screen p-5 lg:p-14 bg-gradient-to-l from-slate-100 via-slate-100 to-zinc-400 text-white relative"
    >
      <div className="flex flex-col justify-center text-center items-center gap-5">
        <h1 className="text-4xl tracking-tighter text-center text-black">
          Try it
        </h1>
        <p className="text-xl text-black/50">
          Let our AI analyze your features and recommend the best products for
          you.
        </p>
        <form onSubmit={handleAnalyze} className="mt-10">
          <label>
            <select
              className=" w-40 py-4 border bg-black text-white rounded-md focus:outline-none mb-5"
              name="price-range"
              value={price}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                setPrice(e.target.value)
              }
            >
              <option>choose your option </option>

              <option value="low">Low ($0 - $5)</option>
              <option value="medium">Medium ($5 - $20)</option>
              <option value="high">High ($20++)</option>
            </select>
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
            <button
              className="bg-black hover:scale-105 w-40 px-5 py-3 rounded-lg"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                e.preventDefault();
                inputRef.current?.click();
              }}
            >
              Upload
            </button>
            {imagePrev && (
              <>
                <div className="w-48 h-60 rounded-md relative">
                  <Image
                    src={imagePrev}
                    className="w-full h-full rounded-md object-cover"
                    alt="image"
                    width={500}
                    height={500}
                  />
                  <X
                    onClick={handleRemove}
                    className="absolute z-10 top-0 right-0 size-6 bg-black text-white cursor-pointer hover:scale-105"
                  />
                </div>
              </>
            )}
            <button
              disabled={loading}
              type="submit"
              className={`bg-black  w-40 px-5 py-3 rounded-lg hover:scale-105 ${
                loading && "pointer-events-none bg-gray-600"
              }`}
            >
              {loading ? "Generating..." : "Analyze"}
            </button>
          </div>
        </form>
        {routine && <Routine routine={routine} />}
        {recommendations && <Recommend recommendations={recommendations} />}
        {recommendations && analysisId && routine && (
          <Chatbot
            recommendations={recommendations}
            analysisId={analysisId}
            routine={routine}
            tips={tips!}
          />
        )}
      </div>
    </section>
  );
}

export default Try;
