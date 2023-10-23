import { Header } from "antd/es/layout/layout";
import {
  MenuOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Badge, Button } from "antd";
import Logo from "../../assets/Logo.png";
import useScrollDirection from "../../hooks/useScrollDirection";

const ICON_SIZE = 24;

const AppHeader = () => {
  const scrollDirection = useScrollDirection();
  return (
    <Header
      style={{
        maxWidth: 460,
        position: "fixed",
        top: scrollDirection === "down" ? -64 : 0,
        zIndex: 2,
        width: "100%",
        display: "flex",
        alignItems: "center",
        padding: "0 24px",
        background: "white",
        justifyContent: "center",
      }}
    >
      <div style={{ position: "absolute", left: 8 }}>
        <Button type="text" size="large">
          <MenuOutlined style={{ fontSize: ICON_SIZE }} />
        </Button>
        <Button type="text" size="large" style={{ paddingLeft: 0 }}>
          <SearchOutlined style={{ fontSize: ICON_SIZE }} />
        </Button>
      </div>
      <img src={Logo} alt="logo" height="100%" />
      <Button
        style={{ position: "absolute", right: 8 }}
        type="text"
        size="large"
      >
        <Badge count="1" color="black">
          <ShoppingCartOutlined style={{ fontSize: ICON_SIZE }} />
        </Badge>
      </Button>
    </Header>
  );
};

export default AppHeader;
