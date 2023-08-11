import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import morgan from "morgan";
import cors from "cors";
import path from "path";

config();
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// server connection
const server = express();

// db connection
// mongoose.connect('mongodb://localhost:27017/ecommerceDB')
const main = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("db connected!");
};
main().catch((err) => console.log(err));

server.use(cors());
server.use(express.static(path.join(__dirname, process.env.PUBLIC_DIR)));
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/products", productRouter);
server.use("/users", userRouter);
server.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT, (req, res) => {
  console.log("server started...");
});
