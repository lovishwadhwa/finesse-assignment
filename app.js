import express from "express";
import router from "./src/routes/products.js";
import authentication from "./src/middlewares/authentication.js";
import cors from "cors";

var app = express();

app.use(authentication);
app.use(cors());
app.use("/api/", router);

app.listen(8443, () => {
  console.log("Server running on port 8443");
});
