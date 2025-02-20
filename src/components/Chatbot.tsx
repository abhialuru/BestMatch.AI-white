"use client";
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
      // Check if the passed Message is empty
      console.log("Message is empty, not sending.");
      return; // Early return to prevent the request
    }

    console.log("Sending message to AI:", Message);
    console.log("Sending routine to AI:", routine);

    console.log({
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
    });

    // ...rest of the code

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
      console.log(data);

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

    console.log("User message before sending:", userMessage); // Debugging line

    if (userMessage.trim()) {
      // Ensure the message is not empty
      setChatMessages((prev) => [
        ...prev,
        { sender: "user", message: userMessage },
      ]);

      messageToAI(userMessage, analysisId); // Ensure you're passing the message here
      setUserMessage(""); // Clear the input after sending the message
    } else {
      console.log("User message is empty, not sending.");
    }
  }

  return (
    <div className="mt-20 w-full h-screen">
      <div className="border size-[60%] rounded-md mx-auto flex flex-col">
        <div className="flex flex-grow">
          <div>
            {chatMessages.map((msg, i) => (
              <div
                key={i}
                className={`m-1 p-1 ${
                  msg.sender === "AI" ? "text-left bg-zinc-800" : "text-right"
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
          className="w-full h-9 flex justify-between"
        >
          <input
            type="text"
            className="w-full bg-transparent border"
            value={userMessage}
            onChange={(e) => setUserMessage(e.target.value)}
          />

          <button type="submit" className="border p-2 ">
            send
          </button>
        </form>
      </div>
    </div>
  );
}

export default Chatbot;
