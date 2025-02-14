import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectionToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MongoURL as string, {
      // useNewUrlParser: true,
      // useUnifiedTopology: true,
    });
    console.log("Connected to db");
  } catch (err) {
    console.log("Database connection error:", err);
  }
};

export default connectionToDatabase;
