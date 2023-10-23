import { Button, Collapse, Select, Typography } from "antd";
import React, { useState } from "react";
import { constantCollapsableItems } from "./constants";
import ButtonGroup from "antd/es/button/button-group";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const { Title, Text } = Typography;

const getCollapsableItems = (panelStyle) => [
  {
    key: "model",
    label: "Model",
    children: `Casey is 5'11" and is wearing a size S`,
    style: panelStyle,
  },
  {
    key: "material",
    label: "Material",
    children: `95% Polyester 5% Spandex`,
    style: panelStyle,
  },
  ...constantCollapsableItems.map((item) => ({
    ...item,
    style: panelStyle,
  })),
];

const ProductDetails = () => {
  const panelStyle = {
    marginBottom: 12,
    border: "0.5px solid black",
    borderRadius: 8,
  };
  const [quantity, setQuantity] = useState(1);
  return (
    <div style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title level={3} style={{ flexGrow: "1" }}>
          Product Name
        </Title>
        <Title level={4}>$15.00</Title>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Select
          placeholder="Choose a size"
          style={{ marginRight: 8, flexGrow: "1" }}
        >
          <Option value="S">S</Option>
          <Option value="M">M</Option>
          <Option value="L">L</Option>
        </Select>
        <ButtonGroup>
          <Button
            disabled={quantity === 1}
            onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          >
            <MinusOutlined />
          </Button>
          <Button style={{ cursor: "text" }}>{quantity}</Button>
          <Button onClick={() => setQuantity(quantity + 1)}>
            <PlusOutlined />
          </Button>
        </ButtonGroup>
      </div>
      <div style={{ paddingTop: 16 }}>
        <Button type="primary" size="large" block>
          Add to Cart
        </Button>
      </div>
      <div style={{ paddingTop: 16 }}>
        <Button
          style={{ background: "#ffc520", borderColor: "black" }}
          size="large"
          block
        >
          Buy Now
        </Button>
      </div>
      <div style={{ paddingTop: 32 }}>
        <Title level={3}>Product Details</Title>
        <Text>
          Angel on earth vibes - look otherworldly in this tie dye printed dress
          🦋 Having them all trying to figure out where you came from… heaven,
          duh 😇
        </Text>
      </div>
      <Collapse
        defaultActiveKey={["model"]}
        expandIconPosition="end"
        style={{ marginTop: 32, background: "white" }}
        accordion
        bordered={false}
        items={getCollapsableItems(panelStyle)}
      />
    </div>
  );
};
export default ProductDetails;
