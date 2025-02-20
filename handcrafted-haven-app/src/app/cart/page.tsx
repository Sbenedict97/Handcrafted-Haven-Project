"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavBar from '@/app/ui/nav/navBar'; 

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function loadCartItems() {
      try {
        const response = await fetch("http://localhost:3000/cart"); 
        if (response.ok) {
          const data = await response.json();
          setCartItems(data);
        } else {
          console.error("Error loading cart items:", response.status);
          
        }
      } catch (error) {
        console.error("Error loading cart items:", error);
        
      }
    }

    loadCartItems();
  }, []); 

  return (
    <div className="bg-white font-montserrat min-h-screen">
      <NavBar /> 
      <main className="container mx-auto p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Shopping Cart</h2>
        <div className="space-y-4">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item._id} className="border p-4 rounded-lg shadow-md flex justify-between items-center"> 
                <div>
                  <h3 className="font-bold">{item.name}</h3>
                  <p>${item.price}</p>
                </div>
                <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600">Remove</button> 
              </div>
            ))
          ) : (
            <p>Your cart is currently empty.</p>
          )}
        </div>
      </main>
      <footer className="bg-gray-700 text-white p-4 mt-10">
        <div className="container mx-auto flex justify-between">
          <p>&copy; 2025 WDD430 Team Project</p>
          <Link href="/customer-service" className="hover:text-orange-400"> 
            Customer Service
          </Link>
        </div>
      </footer>
    </div>
  );
}