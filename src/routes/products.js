import { Router } from "express";
import {
  getProductDetails,
  getProductImages,
  getProductSizeOptions,
  getProductVariants,
} from "../services/productService.js";

const router = Router();

// Imagine this is coming from a separate service which only interacts with product meta data
router.get("/products/metadata/:id", getProductDetails);
// This is coming from a separate service which only interacts with product variants and their pricing details
router.get("/products/variants/:id", getProductVariants);
// This is coming from a separate service which only interacts with product images
router.get("/products/images/:id", getProductImages);
// This is coming from a separate service which only interacts with product sizes available/configured
router.get("/products/sizes/:id", getProductSizeOptions);

export default router;
