import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    price: {
      type: Number,
      required: true,
    },
    ram: {
      type: Number,
      required: true,
    },
    rom: {
      type: Number,
      required: true,
    },
    gen: {
      type: Number,
    },
    brand: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.model("product", productSchema);

export default Product;
