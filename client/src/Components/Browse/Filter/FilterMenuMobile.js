import React, { useState } from "react";
import { filterInputMobile } from "../../../styles/component-modules/filter.module.css";
import FilterMainMobile from "./FilterMainMobile";
import FilterLocation from "./FilterLocation";
import FilterType from "./FilterType";
import FilterBreed from "./FilterBreed";

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
  closeModal
}) => {
  // Compoonent State
  const [displayOptions, setDisplayOptions] = useState("main");

  // Selects which mobile options page to display
  const handleSelectDisplay = value => {
    console.log(value);
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
            optionalEvent={handleSelectDisplay}
            filterObject={filterObject}
            currentPage={currentPage}
            closeModal={closeModal}
          />
        ) : displayOptions === "location" ? (
          <FilterLocation
            locationFilter={locationFilter}
            locationFilterType={locationFilterType}
            handleSelectDisplay={handleSelectDisplay}
            optionalEvent={() => handleSelectDisplay("main")}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "type" ? (
          <FilterType
            handleSelectDisplay={handleSelectDisplay}
            optionalEvent={handleSelectDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayOptions === "breed" ? (
          <FilterBreed
            handleSelectDisplay={handleSelectDisplay}
            optionalEvent={handleSelectDisplay}
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
