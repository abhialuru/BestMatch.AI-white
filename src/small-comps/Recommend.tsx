"use client";
import { ChevronsDownUp } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
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

interface recommendProps {
  recommendations: Category[];
}

function Recommend({ recommendations }: recommendProps) {
  const [activeCategories, setActiveCategories] = useState<
    Record<number, boolean>
  >({
    0: true,
  });

  const handleCategoryClick = (index: number) => {
    setActiveCategories((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const variants = {
    open: {
      height: "auto",
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    closed: {
      height: 0,
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="mt-5 w-full">
      <div>
        <h1 className="text-3xl font-bold text-black my-10">
          Recommended Products
        </h1>
        <div className="flex flex-col gap-5">
          {recommendations.map((category, i) => (
            <div
              className="w-full shadow-lg shadow-black rounded-lg text-start p-5"
              key={i}
            >
              <div
                onClick={() => handleCategoryClick(i)}
                className="w-full flex justify-between"
              >
                <h1 className="text-lg font-bold">{category.category}</h1>
                <ChevronsDownUp className="size-5" />
              </div>
              <motion.div
                variants={variants}
                animate={activeCategories[i] ? "open" : "closed"}
                initial="closed"
                className={`flex flex-col items-center md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 px-5 place-content-center gap-y-5 overflow-hidden ${
                  activeCategories[i] && "pt-5"
                }`}
              >
                {category.products.map((products, i) => (
                  <div
                    className="border w-60 min-h-64 bg-white text-black rounded-lg flex flex-col justify-center p-5"
                    key={i}
                  >
                    <Link href={products.product_url} target="_blank">
                      <div className="size-36 mx-auto rounded-lg overflow-hidden">
                        <Image
                          className="w-full h-full object-cover rounded-lg hover:scale-110"
                          src={products.image_url!}
                          alt="product"
                          width={500}
                          height={500}
                        />
                      </div>
                      <div className="flex flex-col gap-3 mx-auto">
                        <h1 className="text-lg font-semibold line-clamp-2 mt-5 text-center">
                          {products.title}
                        </h1>
                        {products.price && (
                          <p className="text-sm text-gray-600 text-center">
                            ${products.price}
                          </p>
                        )}
                      </div>
                    </Link>
                  </div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recommend;
