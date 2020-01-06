import React, { useState } from "react";
import {
  imageGallery,
  activeImg,
  imgSequencer,
  imgSequencerBtn,
  imgSequencerNumbers,
  imgSelectorPanel,
  imgSelector,
  selectorActive,
  selectorInactive
} from "../styles/component-modules/profileImageGallery.module.css";
import Image from "./Image";
const ImageGallery = ({ photos }) => {
  const [activeImgIndex, setActiveImgIndex] = useState(0);
  const [mainImgLoading, setMainImgLoading] = useState(true);
  const handleSelectImage = index => {
    setActiveImgIndex(index);
    setMainImgLoading(true);
  };
  const handleImageLoaded = () => {
    setMainImgLoading(false);
  };

  const handleIncrementIndex = () => {
    if (activeImgIndex === photos.length - 1) {
      setActiveImgIndex(0);
      setMainImgLoading(true);
    } else {
      setActiveImgIndex(activeImgIndex + 1);
      setMainImgLoading(true);
    }
  };

  const handleDecrementIndex = () => {
    if (activeImgIndex === 0) {
      setActiveImgIndex(photos.length - 1);
      setMainImgLoading(true);
    } else {
      setActiveImgIndex(activeImgIndex - 1);
      setMainImgLoading(true);
    }
  };
  return (
    <div className={imageGallery}>
      <Image
        className={activeImg}
        src={photos[activeImgIndex].large}
        loading={mainImgLoading}
        loadingSrc={photos[activeImgIndex].small}
        onLoad={() => handleImageLoaded()}
      />
      {photos.length > 1 ? (
        <>
          <div className={imgSequencer}>
            <button
              className={imgSequencerBtn}
              onClick={() => handleDecrementIndex()}
            >
              &larr;
            </button>
            <p className={imgSequencerNumbers}>{`${activeImgIndex + 1} / ${
              photos.length
            }`}</p>
            <button
              className={imgSequencerBtn}
              onClick={() => handleIncrementIndex()}
            >
              &rarr;
            </button>
          </div>
          <div className={imgSelectorPanel}>
            {photos.map((photo, index) => (
              <button
                className={imgSelector}
                onClick={() => handleSelectImage(index)}
                key={index}
              >
                <Image
                  src={photo.small}
                  className={
                    activeImgIndex === index ? selectorActive : selectorInactive
                  }
                />
              </button>
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default ImageGallery;
