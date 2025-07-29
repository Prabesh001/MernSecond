import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productControllers.js";
import { uploads } from "../config/cloudinary.js";

const router = express.Router();

router.get("/" ,getAllProduct);
router.post("/",uploads.single('image'), createProduct);
router.get("/product/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/update/:id",uploads.single('image'), updateProduct);

export default router;
