import React from "react";
import Dropdown from "../../Input/Dropdown";
import FilterLocation from "./FilterLocation";
import FilterType from "./FilterType";
import FilterBreed from "./FilterBreed";
import FilterGender from "./FilterGender";

import {
  filterDesktop,
  filterDropdown
} from "../../../styles/component-modules/filterDesktop.module.css";

const FilterDesktop = ({
  locationFilter,
  locationFilterType,
  typeFilter,
  breedFilter,
  genderFilter
}) => {
  return (
    <div className={filterDesktop}>
      <Dropdown
        labelText="Location"
        value={locationFilter}
        className={filterDropdown}
        render={closeEvent => (
          <FilterLocation
            locationFilter={locationFilter}
            locationFilterType={locationFilterType}
            optionalEvent={() => closeEvent()}
          />
        )}
      />
      <Dropdown
        labelText="Animal Type"
        value={typeFilter}
        className={filterDropdown}
        render={closeEvent => (
          <FilterType typeFilter={typeFilter} optionalEvent={closeEvent} />
        )}
      />
      <Dropdown
        labelText="Breed"
        value={breedFilter}
        className={filterDropdown}
        isDisabled={typeFilter === "Any"}
        render={closeEvent => (
          <FilterBreed breedFilter={breedFilter} optionalEvent={closeEvent} />
        )}
      />
      <Dropdown
        className={filterDropdown}
        labelText="Gender"
        value="All"
        render={closeEvent => <FilterGender genderFilter={genderFilter} />}
      />
    </div>
  );
};

export default FilterDesktop;
