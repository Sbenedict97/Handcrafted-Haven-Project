import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL as string;

if (!MONGO_URL) {
  throw new Error("Missing MongoDB connection URL");
}

const connectionToDatabase = async () => {
  try {
    if (mongoose.connection.readyState === 1) {
      console.log("Already connected to database");
      return;
    }
    
    await mongoose.connect(MONGO_URL, {
      dbName: "handcraft1",
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Database connection error:", err);
    throw new Error("Failed to connect to MongoDB");
  }
};

export default connectionToDatabase;