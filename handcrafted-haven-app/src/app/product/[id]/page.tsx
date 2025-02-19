"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function ProductDetail() {
  const params = useParams();
  const id = params.id;

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    // Get product's data
    fetch(`/api/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found</div>;

  return (
    <main className="pl-4 pr-4">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 mt-5 p-10">
        {/* image and details */}
        <div className="w-2/6">
          <img
            src={product.image}
            alt={product.name}
            className="mx-auto w-full rounded-lg border-[--orange] border"
          />
        </div>
        <div className="w-1/2">
          <p className="text-3xl font-bold text-center mb-8 mx-auto">{product.name}</p>
          <p className="text-lg font-bold text-gray-800">{product.price.toFixed(2)}$</p>
          <p className="text-gray-600 mt-4">{product.longDescription}</p>

          {/* Ratings and reviews */}
          <div className="flex items-center mt-4">
            <span className="mr-2 text-orange-500 font-bold">
              {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-gray-700">({product.rating.toFixed(1)})</span>
          </div>
        </div>
      </div>
    </main>
  );
}