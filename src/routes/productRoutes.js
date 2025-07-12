import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productControllers.js";

const router = express.Router();

router.get("/", getAllProduct);
router.post("/", createProduct);
router.get("/product/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/update/:id", updateProduct);

export default router;
