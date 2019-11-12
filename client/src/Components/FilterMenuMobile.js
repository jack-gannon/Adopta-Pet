import React, { useState } from "react";
import { filterInputMobile } from "../styles/component-modules/filter.module.css";
import FilterMainMobile from "./FilterMainMobile";
import FilterLocationMobile from "./FilterLocationMobile";
import FilterTypeMobile from "./FilterTypeMobile";
import FilterBreedMobile from "./FilterBreedMobile";

// Controls which mobile filter page to display
const FilterMenuMobile = ({
  handleLocationChange,
  locationFilter,
  typeFilter,
  setTypeFilter,
  breedFilter,
  setBreedFilter,
  genderFilter,
  filterObject,
  currentPage
}) => {
  // Compoonent State
  const [displayOptions, setDisplayOptions] = useState("main");

  // Renders the Main Options Component
  const handleMainDisplay = () => {
    setDisplayOptions("main");
  };

  // Renders the Location Options Component
  const handleLocationDisplay = () => {
    setDisplayOptions("location");
  };

  // Renders the Animal Type Options Component
  const handleTypeDisplay = () => {
    setDisplayOptions("type");
  };

  // Renders the Animal Breed Options Component
  const handleBreedDisplay = () => {
    setDisplayOptions("breed");
  };

  return (
    <>
      <div className={filterInputMobile}>
        {displayOptions === "main" ? (
          <FilterMainMobile
            handleLocationChange={handleLocationChange}
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
            handleLocationDisplay={handleLocationDisplay}
            handleTypeDisplay={handleTypeDisplay}
            handleBreedDisplay={handleBreedDisplay}
            filterObject={filterObject}
            currentPage={currentPage}
          />
        ) : displayOptions === "location" ? (
          <FilterLocationMobile
            handleMainDisplay={handleMainDisplay}
            handleBreedDisplay={handleBreedDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "type" ? (
          <FilterTypeMobile
            handleMainDisplay={handleMainDisplay}
            handleBreedDisplay={handleBreedDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "breed" ? (
          <FilterBreedMobile
            handleTypeDisplay={handleTypeDisplay}
            handleMainDisplay={handleMainDisplay}
            breedFilter={breedFilter}
            setBreedFilter={setBreedFilter}
            typeFilter={typeFilter}
          />
        ) : null}
      </div>
    </>
  );
};

export default FilterMenuMobile;
