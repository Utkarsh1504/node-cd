import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  getUser,
  replaceUser,
  updateUser,
} from "../controller/user.js";

const router = Router();

// Rest APIs - C R U D
// Method path type
// Create Post /users
// router.post("/", createUser);
// Read GET /users
router.get("/", getAllUsers);
// Read GET /users/:id
router.get("/:id", getUser);
// Update PUT /users/:id - over write existing item
router.put("/:id", replaceUser);
// Update PATCH /users/:id - update in existing items
router.patch("/:id", updateUser);
// Delete DELETE /users/:id
router.delete("/:id", deleteUser);

export default router;
