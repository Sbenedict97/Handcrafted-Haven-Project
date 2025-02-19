import { NextResponse } from "next/server";
import { getProductById } from "@/app/lib/databaseActions";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    
    const { id } = params;
    console.log("Este es el id: " + id);

    const product = await getProductById(id);

    if (!product) {
      return NextResponse.json({ error: "Producto no encontrado" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Error al obtener el producto:", error);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}