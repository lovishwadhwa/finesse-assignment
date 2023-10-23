import { FullscreenOutlined } from "@ant-design/icons";
import Demo from "../../assets/demo.png";

const ImagePreview = ({ image = Demo, handleClick }) => {
  return (
    <div style={{ position: "relative" }}>
      {handleClick && (
        <FullscreenOutlined
          onClick={handleClick}
          style={{ fontSize: 24, right: 18, top: 18, position: "absolute" }}
        />
      )}
      <img
        className="image-preview"
        height="100%"
        width="100%"
        src={image}
        alt="product"
      />
    </div>
  );
};

export default ImagePreview;
