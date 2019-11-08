import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_LOCATION_FILTER } from "../actions/types";
import {
  filterInput,
  filterToggle,
  searchToggle
} from "../styles/component-modules/filter.module.css";
import { btn, btnPrimaryOutline } from "../styles/buttons.module.css";
import Modal from "./Modal";
import FilterMenuMobile from "./FilterMenuMobile";

const Filter = () => {
  // Application State
  const typeFilter = useSelector(state => state.filter.type);
  const breedFilter = useSelector(state => state.filter.breed);
  const locationFilter = useSelector(state => state.filter.location);
  const genderFilter = useSelector(state => state.filter.gender);
  const dispatch = useDispatch();

  const handleLocationChange = e => {
    dispatch({ type: SET_LOCATION_FILTER, payload: e.target.value });
  };

  return (
    <>
      <div className={filterInput}>
        <Modal
          toggleText="Filter"
          toggleStyles={`${btn} ${btnPrimaryOutline} ${filterToggle}`}
        >
          <FilterMenuMobile
            handleLocationChange={handleLocationChange}
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
          />
        </Modal>
        <button className={`${searchToggle}`}>x</button>
      </div>
    </>
  );
};

export default Filter;
