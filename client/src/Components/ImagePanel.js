import React, { useState } from "react";
import {
  mainImg,
  selectorPanel,
  imgSelector,
  selectorActive,
  selectorInactive
} from "../styles/component-modules/profile.module.css";
import Image from "./Image";
import Modal from "../Components/Modal";
import ImageGallery from "../Components/ImageGallery";

const ImagePanel = ({ photos, name }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [mainImgLoading, setMainImgLoading] = useState(true);
  const handleImageLoaded = () => {
    setMainImgLoading(false);
  };

  const handleSelectImage = imgIndex => {
    setMainImgLoading(true);
    setActiveImgIndex(imgIndex);
  };
  return (
    <div>
      <Modal
        toggleComponent={clickEvent => (
          <Image
            src={photos[activeImgIndex].medium}
            alt={name}
            className={mainImg}
            loading={mainImgLoading}
            loadingSrc={photos[activeImgIndex].small}
            onLoad={() => handleImageLoaded()}
            onClick={clickEvent}
          />
        )}
      >
        <ImageGallery photos={photos} />
      </Modal>

      <div className={selectorPanel}>
        {photos.map((photo, index) => (
          <button
            onClick={() => handleSelectImage(index)}
            key={index}
            className={imgSelector}
          >
            <Image
              src={photo.small}
              alt={name}
              className={
                activeImgIndex === index ? selectorActive : selectorInactive
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImagePanel;
