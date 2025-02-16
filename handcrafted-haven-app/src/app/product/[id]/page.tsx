"use client";

import { useParams } from 'next/navigation';
import { products } from '@/app/lib/data';
import { useState } from 'react';

export default function ProductDetail() {
    const params = useParams(); // Get the route params
    const id = params.id; // Get the id
    const product = products.find((product) => product.id === Number(id)); // Find the product by id

    const [rating, setRating] = useState<number>(0); // Estado para la calificación
    const [review, setReview] = useState<string>(''); // Estado para el texto de la reseña

//   const handleRating = (newRating: number) => {
//     setRating(newRating);
//   };

//   const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//     setReview(e.target.value);
//   };

//   const submitReview = () => {
//     alert('Reseña enviada!');
//     // Aquí podrías agregar la lógica para guardar la reseña en una base de datos
//   };
  if (!id) return <div>Loading...</div>;
  if (!product) return <div>Product not found</div>; // Si el producto no existe

  return (
    <main className="pl-4 pr-4">
      <div className="flex justify-center items-center flex-col lg:flex-row gap-8 mt-5 p-10">
        {/* Image and product's details */}
        <div className="w-2/6">
          <img src={product.image} alt={product.name} className="mx-auto w-full rounded-lg border-[--orange] border" />
        </div>
        <div className="w-1/2">
            <p className="text-3xl font-bold text-center mb-8 mx-auto">{product.name}</p>
            <p className="text-lg font-bold text-gray-800">{product.price.toFixed(2)}$</p>
            <p className="text-gray-600 mt-4">{product.longDescription}</p>

          {/* Starts reviews */}
          <div className="flex items-center mt-4">
            <span className="mr-2 text-orange-500 font-bold">
              {"★".repeat(Math.floor(product.rating))}{"☆".repeat(5 - Math.floor(product.rating))}
            </span>
            <span className="text-gray-700">({product.rating.toFixed(1)})</span>
          </div>

          {/* Starts rating */}
          <div className="mt-6">
            <h3 className="font-bold">Rate this product:</h3>
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  className={`mr-2 ${rating >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                //   onClick={() => handleRating(star)}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Form to leave a review */}
      <div className="w-[80%] mx-auto mt-8 p-10">
        <h2 className="text-2xl font-bold">Leave a review</h2>
        <textarea
          value={review}
        //   onChange={handleReviewChange}
          className="w-full mt-4 p-2 border border-gray-300 rounded-md"
          placeholder="Escribe tu reseña aquí..."
        ></textarea>
        <button
        //   onClick={submitReview}
          className="mt-4 p-2 bg-[--orange] rounded-md"
        >
          Send Review
        </button>
      </div>
    </main>
  );
}