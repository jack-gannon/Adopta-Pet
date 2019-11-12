import React from "react";
import {
  filterLocationRadio,
  filterLocationRadioActive,
  filterLocationRadioInactive,
  filterRadioInnerCircle
} from "../styles/component-modules/filter.module.css";
const FilterLocationRadioMobile = ({
  isActive,
  radioText,
  renderElement,
  action
}) => {
  return (
    <button
      className={`${filterLocationRadio} ${
        isActive ? filterLocationRadioActive : filterLocationRadioInactive
      }`}
      onClick={action}
    >
      <span>{radioText}</span>
    </button>
  );
};

export default FilterLocationRadioMobile;
