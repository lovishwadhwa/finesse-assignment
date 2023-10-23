import axios from "../common/axios";

const PREFIX = "/api/products/";

const getProductMetaData = async (product) => {
  const { data } = await axios.get(`${PREFIX}metadata/${product}`);
  return data;
};

const getProductVariants = async (product) => {
  const { data } = await axios.get(`${PREFIX}variants/${product}`);
  return data;
};

const getProductImages = async (product) => {
  const { data } = await axios.get(`${PREFIX}images/${product}`);
  return data;
};

const getProductSizes = async (product) => {
  const { data } = await axios.get(`${PREFIX}sizes/${product}`);
  return data;
};

export {
  getProductImages,
  getProductMetaData,
  getProductSizes,
  getProductVariants,
};
