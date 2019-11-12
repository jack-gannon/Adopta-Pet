import React, { useState } from "react";
import {
  filterPage,
  filterBackBtn,
  filterSelectBtn,
  filterHeader,
  filterLocationRadioOptions
} from "../styles/component-modules/filter.module.css";

import FilterLocationRadioMobile from "./FilterLocationRadioMobile";
import FilterLocationStateSelect from "./FilterLocationStateSelect";

const FilterLocationMobile = ({ handleMainDisplay }) => {
  // Component State
  const [displayStates, setDisplayStates] = useState(false);
  const [locationType, setLocationType] = useState("all");
  return displayStates ? (
    <FilterLocationStateSelect />
  ) : (
    <div className={filterPage}>
      <button className={filterBackBtn} onClick={() => handleMainDisplay()}>
        Back
      </button>
      <h4 className={filterHeader}>Select Location</h4>
      <p>Search by:</p>
      <div className={filterLocationRadioOptions}>
        <FilterLocationRadioMobile
          isActive={locationType === "all"}
          radioText="All Locations"
          action={() => setLocationType("all")}
        />
        <FilterLocationRadioMobile
          isActive={locationType === "zip"}
          radioText="ZIP Code"
          action={() => setLocationType("zip")}
          renderElement={zipRenderElement}
        />
        <FilterLocationRadioMobile
          isActive={locationType === "city/state"}
          radioText="City & State"
          action={() => setLocationType("city/state")}
        />
      </div>
      <br />
      <button className={filterSelectBtn}>Select</button>
    </div>
  );
};

const zipRenderElement = (
  <div>
    <p>This is where you select zip code</p>
  </div>
);

export default FilterLocationMobile;
