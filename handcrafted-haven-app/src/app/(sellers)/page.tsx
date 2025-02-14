"use client";

import React, { useContext } from "react";
import { SellersContext, SellersProvider } from "@/app/context/SellersContext";
import { useSession } from "next-auth/react";

const SellersPageContent = () => {
  const { data: session } = useSession();
  const { sellers } = useContext(SellersContext);

  if (!session) {
    return <p>You must be logged in to view this page.</p>;
  }

  return (
    <div>
      <h1>Sellers</h1>
      {sellers.map((seller) => (
        <div key={seller.id}>
          <h2>{seller.name}</h2>
          <p>{seller.story}</p>
          <ul>
            {seller.products.map((product, index) => (
              <li key={index}>{product.description}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

// Here we involve the page in the context of Sellers
const SellersPage = () => (
  <SellersProvider>
    <SellersPageContent />
  </SellersProvider>
);

export default SellersPage;
