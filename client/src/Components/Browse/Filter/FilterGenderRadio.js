import React from "react";
import { useDispatch } from "react-redux";
import { SET_GENDER_FILTER } from "../../../actions/types";
import {
  filterGenderRadioBtn,
  filterGenderBtnActive,
  filterGenderBtnInactive
} from "../../../styles/component-modules/filter.module.css";

const FilterGenderRadio = ({ value, isActive }) => {
  const dispatch = useDispatch();
  return (
    <button
      className={`${filterGenderRadioBtn} ${
        isActive ? filterGenderBtnActive : filterGenderBtnInactive
      }`}
      onClick={() => dispatch({ type: SET_GENDER_FILTER, payload: value })}
    >
      <span>
        <svg viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35"></circle>
        </svg>
      </span>
      <span>{value}</span>
    </button>
  );
};

export default FilterGenderRadio;
