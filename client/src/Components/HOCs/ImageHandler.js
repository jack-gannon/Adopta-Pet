import React from "react";
import Image from "../Misc/Image";
import Placeholder from "../Misc/Placeholder";

// This component determines whether or not the
// item has an image. If no image is provided,
// then it is replaced with a Placeholder image
// component based on the type of pet.

const ImageHandler = ({
  usePlaceholder,
  src,
  loadingSrc,
  alt,
  className,
  petName,
  petType,
  onLoad,
  onClick
}) => {
  return (
    <>
      {usePlaceholder ? (
        <Placeholder
          petType={petType}
          petName={petName}
          onClick={onClick}
          className={className}
        />
      ) : (
        <Image
          src={src}
          className={className}
          loadingSrc={loadingSrc}
          alt={alt}
          onLoad={onLoad}
          onClick={onClick}
        />
      )}
    </>
  );
};

export default ImageHandler;
