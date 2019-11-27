import React, { useState } from "react";
import {
  mainImg,
  selectorPanel,
  imgSelector,
  selectorActive,
  selectorInactive
} from "../styles/component-modules/profile.module.css";

const ImageGallery = ({ photos, name }) => {
  const [activeImg, setActiveImg] = useState(photos[0].medium);

  return (
    <div>
      <img src={activeImg} alt={name} className={mainImg} />

      <div className={selectorPanel}>
        {photos.map((photo, index) => (
          <button
            onClick={() => setActiveImg(photo.medium)}
            key={index}
            className={imgSelector}
          >
            <img
              src={photo.small}
              alt={name}
              className={
                activeImg === photo.medium ? selectorActive : selectorInactive
              }
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
