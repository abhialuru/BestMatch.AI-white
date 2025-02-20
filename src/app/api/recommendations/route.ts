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

interface RecommendationsResponse {
  recommendations: Category[];
}

async function fetchRecommendations(
  imageFile: File | null,
  price: string
): Promise<RecommendationsResponse> {
  if (!imageFile || !price) {
    throw new Error("Missing required fields");
  }

  const formData = new FormData();
  formData.append("image", imageFile);
  formData.append("priceRange", price);

  const response = await fetch(
    "https://face-analysis-app.onrender.com/api/analysis-recommendation/analyze",
    {
      method: "POST",
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch recommendations");
  }

  return await response.json();
}
