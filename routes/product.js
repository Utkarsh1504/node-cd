import { Router } from "express";
import {
  createProduct,
  getAllProducts,
  getProduct,
  replaceProduct,
  updateProduct,
  deleteProduct,
} from "../controller/product.js";

const router = Router();

// Rest APIs - C R U D
// Method path type

// Create Post /products
router.post("/", createProduct);
// Read GET /products
router.get("/", getAllProducts);
// Read GET /products/:id
router.get("/:id", getProduct);
// Update PUT /products/:id - over write existing item
router.put("/:id", replaceProduct);
// Update PATCH /products/:id - update in existing items
router.patch("/:id", updateProduct);
// Delete DELETE /products/:id
router.delete("/:id", deleteProduct);

export default router;
