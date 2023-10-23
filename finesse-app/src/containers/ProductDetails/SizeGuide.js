import { Table } from "antd";

const SizeGuide = () => {
  const columns = [
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "US",
      dataIndex: "us",
      key: "us",
    },
    {
      title: "Bust",
      dataIndex: "bust",
      key: "bust",
    },
    {
      title: "Waist",
      dataIndex: "waist",
      key: "waist",
    },
    {
      title: "Hips",
      dataIndex: "hips",
      key: "hips",
    },
  ];
  const tableData = [
    {
      size: "XS",
      us: "0-2",
      bust: '32.5"',
      waist: '25.5"',
      hips: "35.5",
    },
    {
      size: "S",
      us: "4-6",
      bust: '34"',
      waist: '27"',
      hips: "37",
    },
    {
      size: "M",
      us: "8-10",
      bust: '36"',
      waist: '29"',
      hips: "39",
    },
    {
      size: "L",
      us: "12-14",
      bust: '38"',
      waist: '31"',
      hips: "41",
    },
    {
      size: "XL",
      us: "14-16",
      bust: '40"',
      waist: '33"',
      hips: "43",
    },
    {
      size: "1X",
      us: "16-18",
      bust: '44"',
      waist: '37"',
      hips: "47",
    },
  ];
  return (
    <div>
      <Table dataSource={tableData} columns={columns} pagination={false} />
    </div>
  );
};

export default SizeGuide;
