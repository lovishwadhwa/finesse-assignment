import { Router } from "express";
import { getProductDetails } from "../services/productService.js";

const router = Router();

router.get("/products/:id", getProductDetails);

export default router;
