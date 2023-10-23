const getRecommendations = async () => {
  const recommendations = [
    {
      name: "Venus Ivory Satin Dress",
      handle: "venus-ivory-satin-dress",
      price: "42.00",
      image:
        "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fd6ff1b3-bc9d-4442-b645-d6b326592585.jpg?v=1674953383&width=720",
    },
    {
      name: "Lennon Floral Sequin Maxi Skirt",
      handle: "lennon-floral-sequin-maxi-skirt",
      price: "55.00",
      image:
        "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Skirt-Front_e3f75759-c358-42fb-82e3-cc81a112cd45.jpg?v=1674908506&width=720",
    },
    {
      name: "Venus Ivory Satin Dress",
      handle: "venus-ivory-satin-dress",
      price: "56.00",
      image:
        "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/file_fd6ff1b3-bc9d-4442-b645-d6b326592585.jpg?v=1674953383&width=720",
    },
    {
      name: "Lennon Floral Sequin Maxi Skirt",
      handle: "lennon-floral-sequin-maxi-skirt",
      price: "45.00",
      image:
        "https://cdn.shopify.com/s/files/1/0237/3346/9261/products/3D-Skirt-Front_e3f75759-c358-42fb-82e3-cc81a112cd45.jpg?v=1674908506&width=720",
    },
  ];
  return { products: recommendations };
};

export { getRecommendations };
