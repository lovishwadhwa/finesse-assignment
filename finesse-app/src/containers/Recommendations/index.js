import Typography from "antd/es/typography/Typography";
import { useQuery } from "@tanstack/react-query";
import ProductPreview from "../../components/ProductPreview";
import { getRecommendations } from "../../apis/recommendation";

export default function Recommendations() {
  const { data: { products = [] } = {} } = useQuery({
    queryKey: ["product-recommendation"],
    queryFn: () => getRecommendations(),
  });
  return (
    <div
      style={{
        padding: 18,
      }}
    >
      <Typography.Title>You may like...</Typography.Title>
      <div
        style={{
          paddingBottom: 48,
          display: "flex",
          overflowX: "auto",
          width: "100%",
        }}
      >
        {products.map((product) => (
          <ProductPreview key={product.handle} product={product} />
        ))}
      </div>
    </div>
  );
}
