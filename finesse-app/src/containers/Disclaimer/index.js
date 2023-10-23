import {
  BackwardOutlined,
  CreditCardOutlined,
  CustomerServiceOutlined,
  PlusCircleOutlined,
} from "@ant-design/icons";
import { Col, Flex, Row } from "antd";

const ICON_SIZE = 24;

const Disclaimer = () => {
  const boxes = [
    {
      label: "SIZE INCLUSIVE UP TO 3X",
      icon: <PlusCircleOutlined size={ICON_SIZE} />,
    },
    {
      label: "EASY RETURNS & EXCHANGES",
      icon: <BackwardOutlined size={ICON_SIZE} />,
    },
    {
      label: "24/7 CUSTOMER SERVICE",
      icon: <CustomerServiceOutlined size={ICON_SIZE} />,
    },
    {
      label: "FLEXIBLE PAYMENT OPTIONS",
      icon: <CreditCardOutlined size={ICON_SIZE} />,
    },
  ];
  return (
    <div style={{ background: "#ededed", color: "#828282" }}>
      <Row>
        {boxes.map((box) => (
          <Col span={12} style={{ padding: "24px 18px" }}>
            <Flex align="center">
              <div style={{ fontSize: 24, marginRight: 8 }}>{box.icon}</div>
              {box.label}
            </Flex>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Disclaimer;
