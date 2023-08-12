import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import authRouter from './routes/auth.js';
import morgan from "morgan";
import cors from "cors";
import path from "path";
import jwt from "jsonwebtoken";

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

const auth = (req, res, next) => {
  try {
    const token = req.get("Authorization").split("Bearer ")[1];
    var decoded = jwt.verify(token, process.env.SECRET);
    if (decoded.email) {
      next();
    } else {
      res.sendStatus(401);
    }
  } catch (err) {
    res.sendStatus(401).json(err);
  }
};

server.use(cors());
server.use(morgan("dev"));
server.use(express.json());
server.use(express.static(path.resolve(__dirname, process.env.PUBLIC_DIR)));
server.use(express.urlencoded({ extended: true }));
server.use("/auth", authRouter);
server.use("/products", auth, productRouter);
server.use("/users", auth, userRouter);
server.use("*", auth, (req, res) => {
  res.sendFile(path.resolve(__dirname, "build", "index.html"));
});

server.listen(process.env.PORT, (req, res) => {
  console.log("server started...");
});
