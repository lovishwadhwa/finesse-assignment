import { Typography } from "antd";
import ImagePreview from "../ImagePreview";
import { Link } from "react-router-dom";

const { Text } = Typography;

export default function ProductPreview({ product }) {
  return (
    <Link target="__blank" to={`https://finesse.us/products/${product.handle}`}>
      <div style={{ width: 180, flexShrink: "0", marginRight: 12 }}>
        <div style={{ height: 250, borderRadius: 8, overflow: "hidden" }}>
          <ImagePreview image={product?.image} />
        </div>
        <div>
          <Text>{product.name}</Text>
        </div>
        <Text>${product.price}</Text>
      </div>
    </Link>
  );
}
