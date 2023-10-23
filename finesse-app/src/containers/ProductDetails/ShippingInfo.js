import { Table, Typography } from "antd";

const { Text, Title } = Typography;

const ShippingInfo = () => {
  const columns = [
    {
      title: "Location",
      dataIndex: "location",
      key: "location",
    },
    {
      title: "Standard Shipping",
      dataIndex: "standard",
      key: "standard",
    },
    {
      title: "Express Shipping",
      dataIndex: "express",
      key: "express",
    },
  ];
  const tableData = [
    {
      location: "US",
      standard: "5-9 business days",
      express: "2-5 business days*",
    },
    {
      location: "UK",
      standard: "5-8 business days",
      express: "2-5 business days*",
    },
    {
      location: "AU",
      standard: "5-8 business days",
      express: "Not available",
    },
  ];
  return (
    <div>
      <Title level={5}>Shipping Info</Title>
      <Table dataSource={tableData} columns={columns} pagination={false} />
      <Title level={5}>*Subject to availability</Title>
      <Text>
        Express shipping is currently not available for P.O. Box addresses.
      </Text>
      <Title level={5}>Free Return & Exchange Shipping</Title>
      <Text>
        Returns and exchanges are easy and are accepted within 45 days of order
        delivery 🙂 We also offer free shipping for returns and exchanges!
      </Text>
    </div>
  );
};

export default ShippingInfo;
