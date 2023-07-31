const http = require("http");
const fs = require("fs");

const index = fs.readFileSync("index.html", "utf-8");
const data = JSON.parse(fs.readFileSync("data.json", "utf-8"));
// const product = data.products[0];

const server = http.createServer((req, res) => {
  if (req.url.startsWith("/product")) {
    const id = req.url.split("/")[2];
    const product = data.products[id];
    res.setHeader("Content-Type", "text/html");
    let modifiedIndex = index
      .replace("**title**", product.title)
      .replace("**rating**", product.rating)
      .replace("**price**", product.price)
      .replace("**url**", product.thumbnail);
    res.end(modifiedIndex);
    return;
  }
  console.log("server started");
  switch (req.url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.end('<h1>Hello, World!<h1>');
      break;
    case "/api":
      res.setHeader("Content-Type", "application/json");
      res.end(JSON.stringify(data));
      break;
    default:
      res.writeHead(404);
      res.end("Page Not Found");
  }
});

server.listen(8080);
