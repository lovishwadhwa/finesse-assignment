import { Swiper, SwiperSlide } from "swiper/react";
import { Scrollbar } from "swiper/modules";
import ImageViewer from "react-simple-image-viewer";
import { useCallback, useState } from "react";
// import Swiper and modules styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "./index.css";
import ImagePreview from "../ImagePreview";
import Demo from "../../assets/demo.png";

const ImagesSlider = ({ images = [Demo, Demo, Demo] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={8}
        modules={[Scrollbar]}
        style={{ height: 550, width: "100%" }}
        draggable
        scrollbar={{ draggable: true }}
        initialSlide={currentImage}
      >
        {images.map((image, index) => (
          <SwiperSlide key={`{image} - ${index}`}>
            <ImagePreview
              image={image}
              handleClick={() => openImageViewer(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          disableScroll={false}
          closeOnClickOutside={true}
          onClose={closeImageViewer}
          backgroundStyle={{ zIndex: 100 }}
        />
      )}
    </>
  );
};

export default ImagesSlider;
