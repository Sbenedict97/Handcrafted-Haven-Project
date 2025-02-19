import { NextResponse } from "next/server";
import connectionToDatabase from "@/app/lib/database";

export async function GET() {
  try {
    await connectionToDatabase();
    return NextResponse.json({ message: "Database connected successfully!" });
  } catch (error) {
    return NextResponse.json({ error: "Database connection failed" }, { status: 500 });
  }
}