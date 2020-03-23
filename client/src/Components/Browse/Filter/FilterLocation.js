import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  filterPage,
  filterBackBtn,
  filterSelectBtn,
  filterHeader,
  filterLocationRadioOptions
} from "../../../styles/component-modules/filter.module.css";
import { label } from "../../../styles/type.module.css";
import { setLocationFilter } from "../../../actions/filter";
import { SET_PAGE } from "../../../actions/types";

import FilterLocationRadio from "./FilterLocationRadio";
import FilterLocationInput from "./FilterLocationInput";

const FilterLocation = ({
  handleSelectDisplay,
  optionalEvent = null,
  locationFilter,
  locationFilterType
}) => {
  // Component State
  const [locationValue, setLocationValue] = useState(locationFilter);
  const [locationType, setLocationType] = useState(locationFilterType);

  const dispatch = useDispatch();

  const handleApplyLocation = () => {
    dispatch({ type: SET_PAGE, payload: 1 });
    dispatch(setLocationFilter(locationValue, locationType));
    if (optionalEvent) {
      optionalEvent();
    }
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
        <FilterLocationRadio
          isActive={locationType === "all"}
          radioText="All Locations"
          action={() => handleSelectLocationType("all")}
        />
        <FilterLocationRadio
          isActive={locationType === "zip"}
          radioText="ZIP Code"
          action={() => handleSelectLocationType("zip")}
        />
        <FilterLocationRadio
          isActive={locationType === "city/state"}
          radioText="City & State"
          action={() => handleSelectLocationType("city/state")}
        />
      </div>
      <br />
      <FilterLocationInput
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

export default FilterLocation;
