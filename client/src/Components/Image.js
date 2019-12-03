import React from "react";
import { image } from "../styles/component-modules/image.module.css";

const Image = ({
  src,
  alt,
  className,
  loading = false,
  loadingSrc = src,
  onLoad
}) => {
  return (
    <>
      <img
        src={loading ? loadingSrc : src}
        className={`${image} ${className}`}
        onLoad={onLoad}
        alt={alt}
      />
    </>
  );
};

export default Image;
