import express from "express";
import router from "./src/routes/products.js";

var app = express();

app.use(router);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
