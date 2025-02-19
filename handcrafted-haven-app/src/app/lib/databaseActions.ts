import mongoose from "mongoose";

// Define product schema
const ProductSchema = new mongoose.Schema({
  _id: String,
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
    return await Product.find({});
  } catch (err) {
    console.error("Error fetching products:", err);
    throw new Error("Failed to fetch products");
  }
};

// Get product by ID
export const getProductById = async (id: string) => {
  try {
    return await Product.findOne({ _id: id });
  } catch (err) {
    console.error("Error fetching product by ID:", err);
    throw new Error("Failed to fetch product");
  }
};