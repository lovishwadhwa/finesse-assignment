import { Button } from "antd";
import { Footer } from "antd/es/layout/layout";
import {
  TwitterOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
  UpOutlined,
} from "@ant-design/icons";

const ALL_LINKS = [
  "Home",
  "Product",
  "About",
  "Help & FAQ",
  "Track your order",
  "Start a Return or Exchange",
];
const AppFooter = () => {
  return (
    <Footer
      style={{
        textAlign: "center",
        padding: 0,
        position: "relative",
      }}
    >
      <div
        style={{
          padding: 48,
          background: "white",
          borderTop: "1px solid lightgrey",
        }}
        onClick={() =>
          window.scroll({
            behavior: "smooth",
            top: 0,
          })
        }
      >
        Back to the top <UpOutlined />
      </div>
      <div
        style={{
          padding: "44px 8px",
          background: "black",
        }}
      >
        {ALL_LINKS.map((link) => (
          <Button key={link} block type="text" style={{ color: "white" }}>
            {link}
          </Button>
        ))}
      </div>
      <div
        style={{
          width: "100%",
          bottom: 8,
          background: "black",
          padding: 16,
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Button shape="circle">
          <TwitterOutlined />
        </Button>
        <Button shape="circle">
          <FacebookOutlined />
        </Button>
        <Button shape="circle">
          <InstagramOutlined />
        </Button>
        <Button shape="circle">
          <YoutubeOutlined />
        </Button>
      </div>
    </Footer>
  );
};

export default AppFooter;
