import mongoose from "mongoose";
import { Schema } from "mongoose";

const productSchema = new Schema({
  title: {
    type: String,
    unique: true,
    required: [true, "product title is required"],
  },
  description: String,
  price: { type: Number, required: true, min: [0, "invalid price"] },
  discountPercentage: {
    type: Number,
    min: [0, "invalid discount"],
    max: [60, "invalid discount"],
  },
  rating: {
    type: Number,
    min: [0, "invalid rating"],
    max: [5, "invalid rating"],
  },
  brand: { type: String, required: true },
  category: { type: String, required: true },
  thumbnail: { type: String, required: true },
  images: [String],
});

const Product = mongoose.model("Product", productSchema);

export default Product;
