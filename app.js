import express from "express";
import router from "./src/routes/products.js";
import authentication from "./src/middlewares/authentication.js";

var app = express();

app.use(authentication);
app.use(router);

app.listen(8443, () => {
  console.log("Server running on port 8443");
});
