"use client";
import { CircleSmall } from "lucide-react";
import React, { useState } from "react";

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

interface ChatbotPropType {
  recommendations: Category[];
  analysisId: string;
  routine: string;
  tips: string;
}

function Chatbot({
  recommendations,
  analysisId,
  routine,
  tips,
}: ChatbotPropType) {
  const [chatMessages, setChatMessages] = useState<
    { sender: string; message: string }[]
  >([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function messageToAI(Message: string, sessionId: string) {
    if (!Message.trim()) {
      console.log("Message is empty, not sending.");
      return;
    }

    try {
      const response = await fetch(
        "https://face-analysis-app.onrender.com/api/chat/message",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: Message,
            sessionId: sessionId,
            context: {
              routine: routine,
              products: recommendations.map((cat) => ({
                category: cat.category,
                products: cat.products.map((product) => ({
                  title: product.title,
                  price: product.price,
                  rating: product.rating,
                  reviews_count: product.reviews_count,
                })),
              })),
              tips: tips,
            },
          }),
        }
      );

      const data = await response.json();
      if (data.success) {
        setChatMessages((prev) => [
          ...prev,
          { sender: "AI", message: data.response },
        ]);
      } else {
        throw new Error(data.error || "Failed to get response");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      setChatMessages((prev) => [
        ...prev,
        {
          sender: "AI",
          message: "Sorry, there was an error processing your message.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSendMessage(e: React.FormEvent) {
    e.preventDefault();

    if (userMessage.trim()) {
      setChatMessages((prev) => [
        ...prev,
        { sender: "user", message: userMessage },
      ]);

      messageToAI(userMessage, analysisId);
      setUserMessage("");
    } else {
      console.log("User message is empty, not sending.");
    }
  }

  return (
    <div className="w-[95%] lg:w-[70vw] h-[70vh] bg-black mt-10 lg:mt-20 rounded-md flex flex-col">
      <div className="w-full text-white/75 border-b p-2 border-zinc-700 flex justify-between">
        <div>
          <p className="text-sm text-start">chat with</p>
          <p className="text-start flex gap-2 items-center">
            <span>
              <CircleSmall className="size-3 text-green-500 fill-current" />
            </span>
            AI Assistant
          </p>
        </div>
        <h3 className="text-lg h-full flex items-center font-bold text-[#FF4500]">
          BestMatch.AI
        </h3>
      </div>

      <div className="flex-grow overflow-y-auto p-2 scrollable-area">
        <div className="w-full">
          {chatMessages.map((msg, i) => (
            <div
              key={i}
              className={`h-fit m-1 p-1 ${
                msg.sender === "AI"
                  ? "float-left text-left bg-zinc-900 w-[75%] rounded-md"
                  : "float-right text-right w-[75%]"
              }`}
            >
              <strong>{msg.sender === "user" ? "You: " : "AI: "}</strong>
              {msg.message}
            </div>
          ))}
        </div>
      </div>

      <form
        onSubmit={handleSendMessage}
        className="w-full h-14 flex justify-between p-2 border-t mt-3 border-zinc-700"
      >
        <input
          type="text"
          className="w-full bg-[#1f1f1f] rounded-l-md outline-none focus:outline-none p-1 text-sm text-white/75"
          value={userMessage}
          onChange={(e) => setUserMessage(e.target.value)}
        />
        <button type="submit" className="p-2 bg-[#1f1f1f] rounded-r-md">
          send
        </button>
      </form>
    </div>
  );
}

export default Chatbot;
