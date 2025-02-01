import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes.js";
import coursesRoutes from "./routes/courseRoutes.js";
import cors from "cors"

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

//mongoDb connection
mongoose
  .connect(process.env.MONGODOURL)
  .then(() => console.log("Successfully connected to mongoDb"));

//Routes
app.use("/api/auth", authRoutes);
app.use("/api/courses", coursesRoutes);

//PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
