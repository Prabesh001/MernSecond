import express from "express";
import {
  createProduct,
  deleteProductById,
  getAllProduct,
  getProductById,
  updateProduct,
} from "../controllers/productControllers.js";
import { uploads } from "../config/cloudinary.js";
import { isLoggedIn } from "../middleware/isLoggedIn.js";
import { isAdmin } from "../middleware/isAdmin.js";

const router = express.Router();

router.get("/",isLoggedIn,isAdmin ,getAllProduct);





router.get("/test",isLoggedIn,isAdmin ,(req,res)=>{
    const myNameIs = req.myName
    console.log("i am test function ")
    res.send("I am test created")
})




router.post("/",uploads.single('image'), createProduct);
router.get("/product/:id", getProductById);
router.delete("/:id", deleteProductById);
router.put("/update/:id",uploads.single('image'), updateProduct);

export default router;
