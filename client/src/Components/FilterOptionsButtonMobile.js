import React from "react";
import {
  filterOptionsBtn,
  filterOptionsBtnDisabled
} from "../styles/component-modules/filter.module.css";

const FilterOptionsButtonMobile = ({ action, value, isDisabled }) => {
  return (
    <>
      {isDisabled ? (
        <div className={filterOptionsBtnDisabled}>
          <span>{value}</span>
          <span>
            <span>
              <svg viewBox="0 0 32 32">
                <polyline points="10.6,3.6 22.9,16 10.5,28.4 " />
              </svg>
            </span>
          </span>
        </div>
      ) : (
        <button className={filterOptionsBtn} onClick={action}>
          <span>{value}</span>
          <span>
            <svg viewBox="0 0 32 32">
              <polyline points="10.6,3.6 22.9,16 10.5,28.4 " />
            </svg>
          </span>
        </button>
      )}
    </>
  );
};

export default FilterOptionsButtonMobile;
