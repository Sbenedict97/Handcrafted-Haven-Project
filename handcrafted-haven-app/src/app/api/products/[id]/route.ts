import { NextResponse } from "next/server";
import { getProductById } from "@/app/lib/databaseActions";
import mongoose from "mongoose";


export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { id } = params;

    console.log("ID we get from the API:", id);


    const product = await getProductById(id);

    // console.log("ID we get in getProductById:", id);


    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
};