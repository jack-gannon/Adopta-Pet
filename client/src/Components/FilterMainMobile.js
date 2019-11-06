import React from "react";
import {
  filterHeader,
  filterOptionsBtn,
  filterGenderSelect,
  filterApplyBtn,
  filterPage
} from "../styles/component-modules/filter.module.css";
import TextInput from "./TextInput";
import { label } from "../styles/type.module.css";

const FilterMainMobile = ({
  handleLocationChange,
  locationFilterValue,
  typeFilterValue,
  breedFilterValue,
  handleTypeDisplay,
  handleBreedDisplay
}) => {
  return (
    <div className={filterPage}>
      <h4 className={filterHeader}>Filter Pets</h4>
      <TextInput
        labelText="Location"
        id="location"
        value={locationFilterValue}
        action={handleLocationChange}
      />
      <br />
      <label className={label}>Animal Type</label>
      <br />
      <button className={filterOptionsBtn} onClick={() => handleTypeDisplay()}>
        {typeFilterValue}
      </button>
      <br />
      <label className={label}>Breed</label>
      <br />
      <button className={filterOptionsBtn} onClick={() => handleBreedDisplay()}>
        {breedFilterValue}
      </button>
      <br />
      <label className={label}>Gender</label>
      <div className={filterGenderSelect}>
        <button>All</button>
        <button>Male</button>
        <button>Female</button>
      </div>
      <br />
      <button className={filterApplyBtn}>Apply Filter</button>
    </div>
  );
};

export default FilterMainMobile;
