import mongoose from "mongoose";
import { Schema } from "mongoose";

const addressSchema = new Schema({
  city: { type: String, required: true },
  state: { type: String, required: true },
  postalCode: { type: String, required: true },
});

const userSchema = new Schema({
  firstName: {
    type: String,
    required: [true, "firstName is required"],
  },
  lastName: {
    type: String,
    required: [true, "lastName is required"],
  },
  age: {
    type: Number,
    required: true,
    min: [0, "invalid age"],
    max: [150, "invalid"],
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: addressSchema,
    required: true
  },
});

const User = mongoose.model("User", userSchema);

export { User };
