import express from "express";
import { config } from "dotenv";
import productRouter from "./routes/product.js";
import userRouter from "./routes/user.js";
import morgan from "morgan";

config();
const server = express();

server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use("/products", productRouter);
server.use("/users", userRouter);

server.listen(process.env.PORT, (req, res) => {
  console.log("server started...");
});
