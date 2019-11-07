import React, { useState } from "react";
import {
  filterInput,
  filterToggle,
  searchToggle
} from "../styles/component-modules/filter.module.css";
import { btn, btnPrimaryOutline } from "../styles/buttons.module.css";
import Modal from "./Modal";
import FilterInputMobile from "./FilterInputMobile";

const Filter = () => {
  // Component State
  const [locationFilterValue, setLocationFilter] = useState("");
  const [typeFilterValue, setTypeFilter] = useState("Any");
  const [breedFilterValue, setBreedFilter] = useState("Any");

  const handleLocationChange = e => {
    setLocationFilter(e.target.value);
  };
  return (
    <>
      <div className={filterInput}>
        <Modal
          toggleText="Filter"
          toggleStyles={`${btn} ${btnPrimaryOutline} ${filterToggle}`}
        >
          <FilterInputMobile
            locationFilterValue={locationFilterValue}
            setLocationFilter={setLocationFilter}
            handleLocationChange={handleLocationChange}
            typeFilterValue={typeFilterValue}
            setTypeFilter={setTypeFilter}
            breedFilterValue={breedFilterValue}
            setBreedFilter={setBreedFilter}
          />
        </Modal>
        <button className={`${searchToggle}`}>x</button>
      </div>
    </>
  );
};

export default Filter;
