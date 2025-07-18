import express from "express";
import productRoutes from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoute.js";
import connectDb from "./config/database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDb();
app.use("/product", productRoutes);
app.use("/auth", authRoutes);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Port started successfully at http://localhost:${PORT}`);
});
