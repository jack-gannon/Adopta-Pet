import React from "react";

const DetailIcon = ({ type, className }) => {
  return (
    <>
      {type === "check" ? (
        <svg viewBox="0 0 32 32" className={className}>
          <polyline points="7,16 13,22 27,8 " />
        </svg>
      ) : (
        <svg viewBox="0 0 32 32" className={className}>
          <line x1="9" y1="22" x2="23" y2="8" />
          <line x1="23" y1="22" x2="9" y2="8" />
        </svg>
      )}
    </>
  );
};

export default DetailIcon;
