import React, { useRef, useEffect } from "react";

const useDetectClickOutside = (ref, onClickOutside, exceptionRef) => {
  const handleClickOutside = event => {
    if (
      ref.current &&
      !ref.current.contains(event.target) &&
      event.target !== exceptionRef.current
    ) {
      onClickOutside();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    //Clean-up function
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};

const DetectClickOutside = ({
  className,
  onClickOutside,
  children,
  exceptionRef
}) => {
  const wrapperRef = useRef(null);
  useDetectClickOutside(wrapperRef, onClickOutside, exceptionRef);

  return (
    <div ref={wrapperRef} className={className}>
      {children}
    </div>
  );
};

export default DetectClickOutside;
