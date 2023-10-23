import React from "react";
import ImagesSlider from "../../components/ImagesSlider";
import ProductDetails from "../ProductDetails";
import Recommendations from "../Recommendations";
import Disclaimer from "../Disclaimer";

const Product = () => {
  return (
    <div style={{ position: "relative" }}>
      <ImagesSlider />
      <ProductDetails />
      <Disclaimer />
      <Recommendations />
    </div>
  );
};
export default Product;
