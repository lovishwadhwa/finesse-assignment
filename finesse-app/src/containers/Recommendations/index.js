import Typography from "antd/es/typography/Typography";
import ProductPreview from "../../components/ProductPreview";

export default function Recommendations() {
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
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
        <ProductPreview />
      </div>
    </div>
  );
}
