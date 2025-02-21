import { NextResponse } from "next/server";
import { getProductById } from "@/app/lib/databaseActions";


export const GET = async (request: Request, context: { params: { id: string } }) => {
  try {
    const { id } = context.params;
    console.log("ID we get from the API:", id);

    const product = await getProductById(id);
    if (!product) {
      return NextResponse.json({ message: 'Product not found' }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error fetching product:", error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
};