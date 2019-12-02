import React, { useState } from "react";
import { filterInputMobile } from "../styles/component-modules/filter.module.css";
import FilterMainMobile from "./FilterMainMobile";
import FilterLocationMobile from "./FilterLocationMobile";
import FilterTypeMobile from "./FilterTypeMobile";
import FilterBreedMobile from "./FilterBreedMobile";

// Controls which mobile filter page to display
const FilterMenuMobile = ({
  locationFilter,
  locationFilterType,
  typeFilter,
  setTypeFilter,
  breedFilter,
  setBreedFilter,
  genderFilter,
  filterObject,
  currentPage,
  toggleOpen
}) => {
  // Compoonent State
  const [displayOptions, setDisplayOptions] = useState("main");

  // Renders the Main Options Component
  const handleSelectDisplay = value => {
    setDisplayOptions(value);
  };

  return (
    <>
      <div className={filterInputMobile}>
        {displayOptions === "main" ? (
          <FilterMainMobile
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
            handleSelectDisplay={handleSelectDisplay}
            filterObject={filterObject}
            currentPage={currentPage}
            toggleOpen={toggleOpen}
          />
        ) : displayOptions === "location" ? (
          <FilterLocationMobile
            locationFilter={locationFilter}
            locationFilterType={locationFilterType}
            handleSelectDisplay={handleSelectDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "type" ? (
          <FilterTypeMobile
            handleSelectDisplay={handleSelectDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "breed" ? (
          <FilterBreedMobile
            handleSelectDisplay={handleSelectDisplay}
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
