import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterPage,
  filterBackBtn,
  filterSelectBtn,
  filterHeader,
  filterLocationRadioOptions
} from "../styles/component-modules/filter.module.css";
import { label } from "../styles/type.module.css";
import { setLocationFilter } from "../actions/filter";

import FilterLocationRadioMobile from "./FilterLocationRadioMobile";
import FilterLocationInputMobile from "./FilterLocationInputMobile";

const FilterLocationMobile = ({
  handleSelectDisplay,
  locationFilter,
  locationFilterType
}) => {
  // Component State
  const [locationValue, setLocationValue] = useState(locationFilter);
  const [locationType, setLocationType] = useState(locationFilterType);

  const dispatch = useDispatch();
  const handleApplyLocation = () => {
    dispatch(setLocationFilter(locationValue, locationType));
    handleSelectDisplay("main");
  };

  const handleSelectLocationType = type => {
    if (type === "zip" || type === "city/state") {
      locationFilterType === type
        ? setLocationValue(locationFilter)
        : setLocationValue("");
    } else if (type === "all") {
      setLocationValue("All Locations");
    }
    setLocationType(type);
  };

  return (
    <div className={filterPage}>
      <button
        className={filterBackBtn}
        onClick={() => handleSelectDisplay("main")}
      >
        Back
      </button>
      <h4 className={filterHeader}>Select Location</h4>
      <label className={label}>Search by:</label>
      <div className={filterLocationRadioOptions}>
        <FilterLocationRadioMobile
          isActive={locationType === "all"}
          radioText="All Locations"
          action={() => handleSelectLocationType("all")}
        />
        <FilterLocationRadioMobile
          isActive={locationType === "zip"}
          radioText="ZIP Code"
          action={() => handleSelectLocationType("zip")}
        />
        <FilterLocationRadioMobile
          isActive={locationType === "city/state"}
          radioText="City & State"
          action={() => handleSelectLocationType("city/state")}
        />
      </div>
      <br />
      <FilterLocationInputMobile
        locationType={locationType}
        setLocationValue={setLocationValue}
        locationValue={locationValue}
      />
      <button
        className={filterSelectBtn}
        disabled={locationValue === ""}
        onClick={() => handleApplyLocation()}
      >
        Apply
      </button>
    </div>
  );
};

export default FilterLocationMobile;
