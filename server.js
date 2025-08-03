import express from "express";
import { connectDB } from "./config/db.js";
import "dotenv/config";
import userRoutes from "./routes/userRoutes.js";
import candidateRoutes from "./routes/candidateRoutes.js";

//app config
const app = express();
const port = process.env.PORT || 3000;
// middleware
app.use(express.json());

// db connection
connectDB();

// Use the routers
app.use("/user", userRoutes);
app.use("/candidate", candidateRoutes);
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
