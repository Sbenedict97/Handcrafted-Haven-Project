import { NextResponse } from "next/server";
import { getProductById } from "@/app/lib/databaseActions";


export const GET = async (request: Request, { params }: { params: { id: string } }) => {
  try {
    const { id } = await params;


    const product = await getProductById(id);


    if (!product) {
      return NextResponse.json({ message: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product by ID:", error);
    return NextResponse.json({ error: "Failed to fetch product" }, { status: 500 });
  }
};