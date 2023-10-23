import { Typography } from "antd";
import ImagePreview from "../ImagePreview";

const { Text } = Typography;

export default function ProductPreview() {
  return (
    <div style={{ width: 180, flexShrink: "0", marginRight: 12 }}>
      <div style={{ height: 250, borderRadius: 8, overflow: "hidden" }}>
        <ImagePreview />
      </div>
      <div>
        <Text>Product Name</Text>
      </div>
      <Text>$42.00</Text>
    </div>
  );
}
