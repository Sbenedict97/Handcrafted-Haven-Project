"use client"; // This ensures that the Context will only be used on the client

import React, { createContext, useState } from "react";

export const SellersContext = createContext(null);

export const SellersProvider = ({ children }) => {
  const [sellers, setSellers] = useState([
    {
      id: 1,
      name: "John",
      story: "I started selling crafts...",
      products: [{ name: "Wood Sculpture", description: "Unique hand-carved piece." }],
    },
  ]);

  console.log("Sellers state:", sellers); // Debug:

  const addProductDescription = (sellerId: number, description: string) => {
    setSellers((prevSellers) =>
      prevSellers.map((seller) =>
        seller.id === sellerId
          ? { ...seller, products: [...seller.products, { name: "New Product", description }] }
          : seller
      )
    );
  };

  return (
    <SellersContext.Provider value={{ sellers, addProductDescription }}>
      {children}
    </SellersContext.Provider>
  );
};
