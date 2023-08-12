import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import morgan from "morgan";
import cors from "cors";
import path from "path";

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);
config();

// server connection
const server = express();

// db connection
const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected!");
};
main().catch((err) => console.log(err));

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(express.urlencoded({ extended: true }));
server.use("/products", productRouter);
server.use("/users", userRouter);
server.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "dist", "index.html"));
});

server.listen(process.env.PORT, (req, res) => {
  console.log("server started...");
});
