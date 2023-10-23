import { Button, Collapse, Select, Typography } from "antd";
import React, { useEffect, useState } from "react";
import { constantCollapsableItems } from "./constants";
import ButtonGroup from "antd/es/button/button-group";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductSizes, getProductVariants } from "../../apis/product";

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

const ProductDetails = ({ productMetaData = {} }) => {
  const panelStyle = {
    marginBottom: 12,
    border: "0.5px solid black",
    borderRadius: 8,
  };
  const { productId } = useParams();

  const [selectedOption, setSelectedOption] = useState();
  const [selectedVariant, setSelectedVariant] = useState({});
  const [quantity, setQuantity] = useState(1);

  const { data: { options = [] } = {} } = useQuery({
    queryKey: ["product-options", productId],
    queryFn: () => getProductSizes(productId),
  });

  const { data: { variants = [] } = {} } = useQuery({
    queryKey: ["product-variants", productId],
    queryFn: () => getProductVariants(productId),
  });

  useEffect(() => {
    const variant = variants?.find((v) => v.option1 === selectedOption);
    setSelectedVariant(variant);
  }, [selectedOption, variants]);

  useEffect(() => {
    if (!selectedOption) {
      if (options?.length && options[0].values?.length)
        setSelectedOption(options[0].values[0]);
    }
  }, [options, selectedOption, setSelectedOption]);

  return (
    <div style={{ padding: 18 }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Title level={3} style={{ flexGrow: "1" }}>
          {productMetaData.title}
        </Title>
        <Title level={4}>${selectedVariant?.price || "-"}</Title>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        {options?.map((option) => (
          <Select
            key={option.name}
            placeholder={option.name || "-"}
            style={{ marginRight: 8, flexGrow: "1" }}
            value={selectedOption}
            onChange={(newOption) => {
              setSelectedOption(newOption);
            }}
            options={option.values.map((oValue) => ({
              value: oValue,
              label: oValue,
            }))}
          />
        ))}
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
        <Text>{productMetaData.body_html}</Text>
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
