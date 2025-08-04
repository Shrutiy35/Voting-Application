// config/db.js
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URL);
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    process.exit(1); // exit app if DB fails
  }

  //  add event listeners (useful for debugging/monitoring)
  mongoose.connection.on("connected", () => {
    console.log("📶 MongoDB connected (event listener)");
  });

  mongoose.connection.on("error", (err) => {
    console.error("💥 MongoDB connection error (event listener):", err);
  });

  mongoose.connection.on("disconnected", () => {
    console.log("⚠️ MongoDB disconnected (event listener)");
  });
};

export default connectDB;
