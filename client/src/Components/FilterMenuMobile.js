import React, { useState } from "react";
import { filterInputMobile } from "../styles/component-modules/filter.module.css";
import FilterMainMobile from "./FilterMainMobile";
import FilterTypeMobile from "./FilterTypeMobile";
import FilterBreedMobile from "./FilterBreedMobile";

const FilterMenuMobile = ({
  handleLocationChange,
  locationFilterValue,
  typeFilter,
  setTypeFilter,
  breedFilter,
  setBreedFilter,
  genderFilter
}) => {
  // Compoonent State
  const [displayMainOptions, setDisplayMainOptions] = useState(true);
  const [displayTypeOptions, setDisplayTypeOptions] = useState(false);
  const [displayBreedOptions, setDisplayBreedOptions] = useState(false);

  // Renders the Main Options Component
  const handleMainDisplay = () => {
    setDisplayMainOptions(true);
    setDisplayTypeOptions(false);
  };

  // Renders the Animal Type Options Component
  const handleTypeDisplay = () => {
    setDisplayMainOptions(false);
    setDisplayTypeOptions(true);
  };

  // Renders the Animal Breed Options Component
  const handleBreedDisplay = () => {
    setDisplayMainOptions(false);
    setDisplayTypeOptions(false);
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
          />
        ) : displayTypeOptions ? (
          <FilterTypeMobile
            handleMainDisplay={handleMainDisplay}
            handleBreedDisplay={handleBreedDisplay}
            typeFilter={typeFilter}
            setTypeFilter={setTypeFilter}
          />
        ) : (
          <FilterBreedMobile
            handleTypeDisplay={handleTypeDisplay}
            handleMainDisplay={handleMainDisplay}
            breedFilter={breedFilter}
            setBreedFilter={setBreedFilter}
            typeFilter={typeFilter}
          />
        )}
      </div>
    </>
  );
};

export default FilterMenuMobile;
