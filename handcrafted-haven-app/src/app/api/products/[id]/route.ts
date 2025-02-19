import { NextResponse } from "next/server";
import { getProductById } from "@/app/lib/databaseActions";

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    // Desestructurar y esperar a que los params estén disponibles
    const { id } = await params; // Asegúrate de que params esté resuelto antes de acceder a 'id'
    console.log("Este es el id: " + id);

    // Consulta el producto en la base de datos
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