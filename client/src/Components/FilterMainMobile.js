import React from "react";
import { useDispatch } from "react-redux";
import { getPetsWithFilter } from "../actions/pets";
import {
  filterHeader,
  filterGenderSelect,
  filterApplyBtn,
  filterPage
} from "../styles/component-modules/filter.module.css";
import TextInput from "./TextInput";
import { label } from "../styles/type.module.css";
import FilterOptionsButtonMobile from "./FilterOptionsButtonMobile";
import FilterGenderRadioBtnMobile from "./FilterGenderRadioBtnMobile";

const FilterMainMobile = ({
  handleLocationChange,
  locationFilterValue,
  typeFilter,
  breedFilter,
  genderFilter,
  handleTypeDisplay,
  handleBreedDisplay,
  filterObject
}) => {
  const dispatch = useDispatch();
  const handleApplyFilter = () => {
    dispatch(getPetsWithFilter(filterObject));
  };
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
      <FilterOptionsButtonMobile
        isDisabled={false}
        action={() => handleTypeDisplay()}
        value={typeFilter}
      />
      <br />
      <label className={label}>Breed</label>
      <br />
      <FilterOptionsButtonMobile
        isDisabled={typeFilter === "Any"}
        action={() => handleBreedDisplay()}
        value={breedFilter}
      />
      <br />
      <label className={label}>Gender</label>
      <div className={filterGenderSelect}>
        <FilterGenderRadioBtnMobile
          isActive={genderFilter === "All"}
          value={"All"}
        />
        <FilterGenderRadioBtnMobile
          isActive={genderFilter === "Male"}
          value={"Male"}
        />
        <FilterGenderRadioBtnMobile
          isActive={genderFilter === "Female"}
          value={"Female"}
        />
      </div>
      <br />
      <button onClick={() => handleApplyFilter()} className={filterApplyBtn}>
        Apply Filter
      </button>
    </div>
  );
};

export default FilterMainMobile;
