import React from "react";
import {
  filterLocationRadio,
  filterLocationRadioActive,
  filterLocationRadioInactive
} from "../../../styles/component-modules/filter.module.css";
const FilterLocationRadio = ({ isActive, radioText, action }) => {
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

export default FilterLocationRadio;
