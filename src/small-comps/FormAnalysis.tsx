// "use client";
// import { useMutation } from "@tanstack/react-query";
// import { ChevronsDownUp, LockKeyhole, LockKeyholeOpen, X } from "lucide-react";
// import { motion } from "motion/react";
// import Image from "next/image";
// import Link from "next/link";
// import React, { useRef, useState } from "react";

// interface Product {
//   product_url: string;
//   price?: number;
//   rating?: number;
//   reviews_count?: number;
//   image_url?: string;
//   title?: string;
// }

// interface Category {
//   category: string;
//   products: Product[];
// }

// function FormAnalysis() {
//   const [imagePrev, setImagePrev] = useState<string | null>(null);
//   const [imageFile, setImageFile] = useState<File | null>(null); // Store the file here
//   const [price, setPrice] = useState("all");
//   const [recommendations, setRecommendations] = useState<Category[] | null>(
//     null
//   );
//   const [loading, setLoading] = useState(false);

//   const variants = {
//     open: {
//       height: "auto",
//       opacity: 1,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//     closed: {
//       height: 0,
//       opacity: 0,
//       transition: {
//         duration: 0.3,
//         ease: "easeInOut",
//       },
//     },
//   };

//   const inputRef = useRef<HTMLInputElement | null>(null);

//   function handleImagePreview(event: React.ChangeEvent<HTMLInputElement>) {
//     const file = event.target.files && event.target.files[0];

//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setImagePrev(imageUrl);
//       setImageFile(file);
//     }
//   }

//   function handleRemove() {
//     setImagePrev(null);
//     (document.getElementById("file-input") as HTMLInputElement).value = "";
//     setImageFile(null);
//     setRecommendations(null);
//   }

//   async function handleAnalyze(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     setLoading(true);
//     if (!imageFile || !price) {
//       alert("Please fill in all fields");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", imageFile);
//     formData.append("priceRange", price);

//     try {
//       const response = await fetch(
//         "https://face-analysis-app.onrender.com/api/analysis-recommendation/analyze",
//         {
//           method: "POST",
//           body: formData,
//         }
//       );
//       if (response.ok) {
//         const data = await response.json();
//         console.log("Success:", data);

//         if (data.recommendations) {
//           setRecommendations(data.recommendations);
//         }
//       } else {
//         console.error("Failed to submit the form");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//     } finally {
//       setLoading(false);
//     }
//   }

//   const [activeCategories, setActiveCategories] = useState<
//     Record<number, boolean>
//   >({
//     0: true,
//   });

//   const handleCategoryClick = (index: number) => {
//     setActiveCategories((prevState) => ({
//       ...prevState,
//       [index]: !prevState[index],
//     }));
//   };

//   return (
//     <>
//       <form onSubmit={handleAnalyze}>
//         <label>
//           <select
//             className="max-w-fit py-2 px-5 bg-black border border-gray-300 rounded-lg mb-5"
//             name="price-range"
//             value={price}
//             onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
//               setPrice(e.target.value)
//             }
//           >
//             <option>choose your price</option>
//             <option value="low">Low ($0-$5)</option>
//             <option value="medium">Medium ($5-$20)</option>
//             <option value="high">High ($20++)</option>
//           </select>
//         </label>
//         <div className="flex flex-col relative gap-5 justify-center items-center text-center">
//           <input
//             id="file-input"
//             ref={inputRef}
//             name="price"
//             type="file"
//             accept="image/*"
//             className="absolute z-50 pointer-events-none invisible"
//             onChange={handleImagePreview}
//           />
//           <button
//             className="bg-[#FF6600] hover:bg-[#FF4500] w-28 py-2 px-5 rounded-lg"
//             onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
//               e.preventDefault();
//               inputRef.current?.click();
//             }}
//           >
//             Upload
//           </button>
//           {imagePrev && (
//             <>
//               <div className="w-48 h-60 rounded-md relative">
//                 <Image
//                   src={imagePrev}
//                   className="w-full h-full rounded-md object-cover"
//                   alt="image"
//                   width={500}
//                   height={500}
//                 />
//                 <X
//                   onClick={handleRemove}
//                   className="absolute z-10 top-0 right-0 size-6 bg-black text-white cursor-pointer hover:scale-105"
//                 />
//               </div>
//             </>
//           )}
//           <button
//             disabled={loading}
//             type="submit"
//             className="bg-[#FF6600] w-32 py-2 px-8 rounded-lg hover:bg-[#FF4500]"
//           >
//             {loading ? "Generating..." : "Analyze"}
//           </button>
//         </div>
//       </form>
//       <div className="mt-5 w-full">
//         {recommendations && (
//           <div>
//             <h1 className="text-3xl font-bold text-orange-500 my-10">
//               Recommended Products
//             </h1>
//             <div className="flex flex-col gap-5">
//               {recommendations.map((category, i) => (
//                 <div
//                   className="w-full shadow-lg shadow-black rounded-lg text-start p-5"
//                   key={i}
//                 >
//                   <div
//                     onClick={() => handleCategoryClick(i)}
//                     className="w-full flex justify-between"
//                   >
//                     <h1 className="text-lg font-bold">{category.category}</h1>
//                     <ChevronsDownUp className="size-5" />
//                   </div>
//                   <motion.div
//                     variants={variants}
//                     animate={activeCategories[i] ? "open" : "closed"}
//                     initial="closed"
//                     className={`grid grid-cols-4 px-5 place-content-center gap-y-5 overflow-hidden ${
//                       activeCategories[i] && "pt-5"
//                     }`}
//                   >
//                     {category.products.map((products, i) => (
//                       <div
//                         className="border w-60 min-h-64 bg-white text-black rounded-lg flex flex-col justify-center p-5"
//                         key={i}
//                       >
//                         <Link href={products.product_url} target="_blank">
//                           <div className="size-36 mx-auto rounded-lg overflow-hidden">
//                             <Image
//                               className="w-full h-full object-cover rounded-lg hover:scale-110"
//                               src={products.image_url!}
//                               alt="product"
//                               width={500}
//                               height={500}
//                             />
//                           </div>
//                           <div className="flex flex-col gap-3 mx-auto">
//                             <h1 className="text-lg font-semibold line-clamp-2 mt-5 text-center">
//                               {products.title}
//                             </h1>
//                             {products.price && (
//                               <p className="text-sm text-gray-600 text-center">
//                                 ${products.price}
//                               </p>
//                             )}
//                           </div>
//                         </Link>
//                       </div>
//                     ))}
//                   </motion.div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default FormAnalysis;
