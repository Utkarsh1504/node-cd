const express = require("express");
const morgan = require("morgan");
const server = express();

server.use(express.json());
server.use(morgan("default"));
server.use(express.static("public"));

// middleware - application level middleware
// server.use((req, res, next) => {
//   console.log(req.hostname, req.ip, new Date(), req.get("User-Agent"));
//   next();
// });
  
// router-level middleware

// const auth = (req, res, next) => {
//   console.log(req.query);
//   req.body - by default not read by express
//   if (req.body.password === "1234") {
//     next();
//   } else {
//     res.sendStatus(401);
//   }
// };
// server.use(auth)

server.get("/", (req, res) => {
  res.json({ type: "GET" });
});
server.post("/", (req, res) => {
  res.json({ type: "POST" });
});
server.delete("/", (req, res) => {
  res.json({ type: "DELETE" });
});
server.put("/", (req, res) => {
  res.json({ type: "PUT" });
});
server.patch("/", (req, res) => {
  res.json({ type: "PATCH" });
});

server.listen(8080, (req, res) => {
  console.log("server started");
});
