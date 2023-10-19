// Mock product JSON
import product from "../mocks/product.js";

export const getProductDetails = (req, res) => {
  const { id } = req.params;
  console.log("Fetching product metadata : ", id);
  // Here we'll have some db queries, where we will find the product by id
  // If not found, raise respective responses like 404 if product not found, etc
  const productMockData = JSON.parse(JSON.stringify(product));
  delete productMockData.image;
  delete productMockData.images;
  delete productMockData.variants;
  delete productMockData.options;
  res.json({
    product: productMockData,
  });
};

export const getProductImages = (req, res) => {
  const { id } = req.params;
  console.log("Fetching product images : ", id);
  // Here we'll have some db queries, where we will find the product by id
  // If not found, raise respective responses like 404 if product not found, etc
  res.json({
    images: product.images,
  });
};

export const getProductVariants = (req, res) => {
  const { id } = req.params;
  console.log("Fetching product variants : ", id);
  // Here we'll have some db queries, where we will find the product by id
  // If not found, raise respective responses like 404 if product not found, etc
  res.json({
    variants: product.variants,
  });
};

export const getProductSizeOptions = (req, res) => {
  const { id } = req.params;
  console.log("Fetching product size options : ", id);
  // Here we'll have some db queries, where we will find the product by id
  // If not found, raise respective responses like 404 if product not found, etc
  res.json({
    options: product.options,
  });
};
