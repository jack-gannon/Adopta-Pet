import React, { useState, useRef } from "react";
import { label } from "../../styles/type.module.css";
import {
  dropdown,
  dropdownInput,
  dropdownIcon,
  iconActive,
  iconDisabled,
  dropdownContents
} from "../../styles/input.module.css";
import DetectClickOutside from "../HOCs/DetectClickOutside";

const Dropdown = ({
  labelText,
  id,
  value,
  className,
  render,
  isDisabled = false
}) => {
  const [isExpanded, setExpanded] = useState(false);
  const dropdownRef = useRef(null);
  const handleToggleExpand = () => {
    setExpanded(!isExpanded);
  };

  return (
    <div className={`${dropdown} ${className}`}>
      <label className={label} htmlFor={id}>
        {labelText}
      </label>{" "}
      <br />
      <button
        id={id}
        onClick={() => handleToggleExpand()}
        className={dropdownInput}
        ref={dropdownRef}
        disabled={isDisabled}
      >
        {value}
        <svg
          viewBox="0 0 16 16"
          className={`${dropdownIcon} ${isExpanded &&
            iconActive} ${isDisabled && iconDisabled}`}
        >
          <polyline points="2.5,6 8,10.5 13.5,6 " />
        </svg>
      </button>
      {isExpanded ? (
        <DetectClickOutside
          className={dropdownContents}
          onClickOutside={() => handleToggleExpand()}
          exceptionRef={dropdownRef}
        >
          {render(handleToggleExpand)}
        </DetectClickOutside>
      ) : null}
    </div>
  );
};

export default Dropdown;
