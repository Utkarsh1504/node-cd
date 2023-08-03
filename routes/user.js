import { Router } from "express";
import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  replaceUser,
  updateUser,
} from "../controller/user.js";

const router = Router();

// Rest APIs - C R U D
// Method path type

// Create Post /products
router.post("/", createUser);
// Read GET /products
router.get("/", getAllUsers);
// Read GET /products/:id
router.get("/:id", getUser);
// Update PUT /products/:id - over write existing item
router.put("/:id", replaceUser);
// Update PATCH /products/:id - update in existing items
router.patch("/:id", updateUser);
// Delete DELETE /products/:id
router.delete("/:id", deleteUser);

export default router;
