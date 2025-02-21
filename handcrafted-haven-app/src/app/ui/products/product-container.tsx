'use client';

import { useEffect, useState } from "react";
import ProductCard from "./product-card";
import Link from "next/link";

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
}

export default function ProductContainer() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/api/products");
        const data = await response.json();
        if (response.ok) {
          setProducts(data);
        } else {
          setError("Failed to load products");
        }
      } catch (err) {
        setError("An error occurred while fetching products");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  console.log("This are the products: " + products)

  return (
    <>
      {products.map((product) => (
        <Link href={`/product/${product._id}`} key={product._id}>
          <ProductCard
            key={product._id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
            rating={product.rating}
          />
        </Link>
      ))}
    </>
  );
}