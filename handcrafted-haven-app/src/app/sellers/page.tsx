import React from 'react';
import NavBar from "@/app/ui/nav/navBar";


const sellers = [
  {
    id: 1,
    craftsman: "John Smith",
    bio: "Experienced woodworker with a passion for creating unique handmade furniture.",
    story: "I started woodworking 10 years ago, inspired by my grandfather's craftsmanship. Each piece I create tells a story of dedication and art.",
    crafts: [
      { item: "Handcrafted Coffee Table", price: 250, description: "A beautiful and sturdy coffee table made from reclaimed wood." },
      { item: "Wooden Wall Clock", price: 75, description: "Elegant wall clock crafted from oak, adding a rustic touch to any home." },
    ],
  },
  {
    id: 2,
    craftswoman: "Emily Johnson",
    bio: "Ceramic artist specializing in minimalist and functional pottery.",
    story: "Clay has been my canvas for over 15 years. I create pottery that brings warmth and beauty to everyday life.",
    crafts: [
      { item: "Ceramic Vase", price: 60, description: "A sleek, minimalist vase perfect for modern interiors." },
      { item: "Handmade Dinner Set", price: 120, description: "A complete dinner set with a unique, hand-glazed finish." },
    ],
  },
  {
    id: 3,
    craftsman: "Michael Brown",
    bio: "Jewelry designer creating timeless pieces with natural gemstones.",
    story: "I design jewelry inspired by nature and history, turning raw materials into treasures.",
    crafts: [
      { item: "Silver Pendant Necklace", price: 90, description: "A delicate silver pendant with a polished moonstone centerpiece." },
      { item: "Gemstone Earrings", price: 45, description: "Elegant earrings with hand-selected gemstones." },
    ],
  },
  {
    id: 4,
    craftswoman: "Sophia Davis",
    bio: "Textile artist weaving modern designs with traditional techniques.",
    story: "I weave contemporary patterns while preserving the beauty of traditional textiles.",
    crafts: [
      { item: "Handwoven Scarf", price: 35, description: "A cozy scarf made with ethically sourced wool." },
      // { item: "Decorative Wall Hanging", price: 80, description: "A vibrant wall hanging with intricate geometric patterns." },
    ],
  },
  {
    id: 5,
    craftsman: "David Wilson",
    bio: "Leather craftsman making durable and stylish accessories.",
    story: "Leatherworking is my art, creating pieces that last a lifetime and tell their own stories.",
    crafts: [
      { item: "Leather Wallet", price: 50, description: "A handcrafted wallet with multiple card slots and a sleek design." },
      // { item: "Handmade Belt", price: 70, description: "A durable leather belt with a classic brass buckle." },
    ],
  },
];

export default function SellersPage() {
  return (
    <div className="bg-white text-black min-h-screen">
      <NavBar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-2">Sellers</h1>
        <p className="text-lg text-gray-600 mb-6">Discover the stories and craftsmanship of our talented artisans.</p>
        {sellers.map((seller) => (
          <div key={seller.id} className="mb-8 p-4 bg-gray-800 text-white rounded-lg hover:shadow-lg border border-gray-700">
            <h2 className="text-2xl font-semibold">{seller.craftsman}</h2>
            <h2 className="text-2xl font-semibold">{seller.craftswoman}</h2>
            <p className="text-gray-400">ID: {seller.id}</p>
            <p className="mt-2">{seller.bio}</p>
            <p className="mt-2 italic">{seller.story}</p>
            <h3 className="mt-4 font-medium">Crafts:</h3>
            <ul className="list-disc list-inside">
              {seller.crafts.map((craft, index) => (
                <li key={index}>
                  <strong>{craft.item}</strong> - ${craft.price}
                  <p className="text-gray-300 text-sm">{craft.description}</p>
                </li>
              ))}
            </ul>
          </div> 
        ))} 
      </div>
    </div>
  );
}

