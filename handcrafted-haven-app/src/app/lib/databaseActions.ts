import connectionToDatabase from "@/app/lib/database";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";


// Define product schema
const ProductSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  description: String,
  longDescription: String,
  image: String,
  rating: Number,
  category: String,
});

// Define product model
const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema, "productData");

// Get all products
export const getAllProducts = async () => {
  try {
    await connectionToDatabase(); // Call function that connects to the database
    return await Product.find({});
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error("Failed to fetch products");
  }
};

export const getProductById = async (id: string) => {
  try {
    await connectionToDatabase();

    // Vefiry if it is a valid id
    if (!ObjectId.isValid(id)) {
      console.error(`ID inválido proporcionado: ${id}`);
      return null;
    }

    // Convert to an object
    const objectId = new ObjectId(id);

    // Execute the consult using findById
    const product = await Product.findById(objectId);

    if (!product) {
      console.error(`Product not found with ID: ${id}`);
    }

    return product;
  } catch (err) {
    console.error("Error finding product by ID:", err);
    throw new Error("Error getting the product");
  }
};