export const getProductDetails = (req, res) => {
  const { id } = req.params;
  res.json({
    product: {},
    productId: id,
  });
};
