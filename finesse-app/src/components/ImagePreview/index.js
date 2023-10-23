import { FullscreenOutlined } from "@ant-design/icons";
import { useRef, useState, useEffect } from "react";

const ImagePreview = ({ image = "", handleClick }) => {
  const [hovered, setHovered] = useState(false);

  const ref = useRef(null);

  const handleMouseOver = () => setHovered(true);
  const handleMouseOut = () => setHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseover", handleMouseOver);
      node.addEventListener("mouseout", handleMouseOut);

      return () => {
        node.removeEventListener("mouseover", handleMouseOver);
        node.removeEventListener("mouseout", handleMouseOut);
      };
    }
  }, [ref]);

  return (
    <div style={{ position: "relative" }} ref={ref}>
      {handleClick && hovered && (
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
