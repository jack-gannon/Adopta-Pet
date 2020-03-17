import React from "react";
import { useDispatch } from "react-redux";
import { getPetsWithFilter } from "../actions/pets";
import {
  filterHeader,
  filterGenderSelect,
  filterApplyBtn,
  filterPage
} from "../styles/component-modules/filter.module.css";

import { label } from "../styles/type.module.css";
import FilterOptionsButtonMobile from "./FilterOptionsButtonMobile";
import FilterGenderRadioBtnMobile from "./FilterGenderRadioBtnMobile";
import { SET_PAGE } from "../actions/types";

const FilterMainMobile = ({
  handleLocationChange,
  locationFilter,
  typeFilter,
  breedFilter,
  genderFilter,
  handleSelectDisplay,
  filterObject,
  currentPage,
  closeModal
}) => {
  const dispatch = useDispatch();
  const handleApplyFilter = () => {
    dispatch({ type: SET_PAGE, payload: 1 });
    dispatch(getPetsWithFilter(filterObject, currentPage));
    closeModal();
  };
  return (
    <div className={filterPage}>
      <h4 className={filterHeader}>Filter Pets</h4>
      <label className={label}>Location</label>
      <FilterOptionsButtonMobile
        isDisabled={false}
        handleSelectDisplay={handleSelectDisplay}
        action={() => handleSelectDisplay("location")}
        value={locationFilter}
      />
      <br />
      <label className={label}>Animal Type</label>
      <br />
      <FilterOptionsButtonMobile
        isDisabled={false}
        action={() => handleSelectDisplay("type")}
        value={typeFilter}
      />
      <br />
      <label className={label}>Breed</label>
      <br />
      <FilterOptionsButtonMobile
        isDisabled={typeFilter === "Any"}
        action={() => handleSelectDisplay("breed")}
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
