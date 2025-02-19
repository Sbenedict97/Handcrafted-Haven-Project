import { NextResponse } from "next/server";
import { getAllProducts } from "@/app/lib/databaseActions";

export const GET = async () => {
  try {
    // Get all products
    const products = await getAllProducts();
    
    if (products.length === 0) {
      return NextResponse.json({ message: "No products found" }, { status: 404 });
    }

    return NextResponse.json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
  }
};