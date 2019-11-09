import React, { useState } from "react";
import { filterInputMobile } from "../styles/component-modules/filter.module.css";
import FilterMainMobile from "./FilterMainMobile";
import FilterTypeMobile from "./FilterTypeMobile";
import FilterBreedMobile from "./FilterBreedMobile";

// Controls which mobile filter page to display
const FilterMenuMobile = ({
  handleLocationChange,
  locationFilterValue,
  typeFilter,
  setTypeFilter,
  breedFilter,
  setBreedFilter,
  genderFilter,
  filterObject
}) => {
  // Compoonent State
  const [displayMainOptions, setDisplayMainOptions] = useState(true);
  const [displayTypeOptions, setDisplayTypeOptions] = useState(false);
  const [displayBreedOptions, setDisplayBreedOptions] = useState(false);

  // Renders the Main Options Component
  const handleMainDisplay = () => {
    setDisplayMainOptions(true);
    setDisplayTypeOptions(false);
    setDisplayBreedOptions(false);
  };

  // Renders the Animal Type Options Component
  const handleTypeDisplay = () => {
    setDisplayMainOptions(false);
    setDisplayTypeOptions(true);
    setDisplayBreedOptions(false);
  };

  // Renders the Animal Breed Options Component
  const handleBreedDisplay = () => {
    setDisplayMainOptions(false);
    setDisplayTypeOptions(false);
    setDisplayBreedOptions(true);
  };

  return (
    <>
      <div className={filterInputMobile}>
        {displayMainOptions ? (
          <FilterMainMobile
            handleLocationChange={handleLocationChange}
            locationFilterValue={locationFilterValue}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
            handleTypeDisplay={handleTypeDisplay}
            handleBreedDisplay={handleBreedDisplay}
            filterObject={filterObject}
          />
        ) : displayTypeOptions ? (
          <FilterTypeMobile
            handleMainDisplay={handleMainDisplay}
            handleBreedDisplay={handleBreedDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : displayBreedOptions ? (
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
