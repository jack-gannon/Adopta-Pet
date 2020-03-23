import React from "react";
import FilterGenderRadio from "./FilterGenderRadio";
import { filterGenderSelect } from "../../../styles/component-modules/filter.module.css";

const FilterGender = ({ genderFilter }) => {
  return (
    <div className={filterGenderSelect}>
      <FilterGenderRadio isActive={genderFilter === "All"} value={"All"} />
      <FilterGenderRadio isActive={genderFilter === "Male"} value={"Male"} />
      <FilterGenderRadio
        isActive={genderFilter === "Female"}
        value={"Female"}
      />
    </div>
  );
};

export default FilterGender;
