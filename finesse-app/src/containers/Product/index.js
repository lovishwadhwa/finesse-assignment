import React from "react";
import { Helmet } from "react-helmet";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import ImagesSlider from "../../components/ImagesSlider";
import ProductDetails from "../ProductDetails";
import Recommendations from "../Recommendations";
import Disclaimer from "../Disclaimer";
import { getProductImages, getProductMetaData } from "../../apis/product";

const Product = () => {
  const { productId } = useParams();
  const { data: { product = {} } = {} } = useQuery({
    queryKey: ["product-meta-data", productId],
    queryFn: () => getProductMetaData(productId),
  });

  const { data: { images = [] } = {} } = useQuery({
    queryKey: ["product-images", productId],
    queryFn: () => getProductImages(productId),
  });

  return (
    <div style={{ position: "relative" }}>
      <Helmet>
        <title>{product?.title || "-"}</title>
      </Helmet>
      <ImagesSlider images={images?.map((i) => i.src)} />
      <ProductDetails productMetaData={product} />
      <Disclaimer />
      <Recommendations />
    </div>
  );
};
export default Product;
