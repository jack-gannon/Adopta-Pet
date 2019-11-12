import React from "react";
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
import Pagination from "./Pagination";

const Filter = ({ currentPage, filterObject }) => {
  // Application State
  const typeFilter = useSelector(state => state.filter.type);
  const breedFilter = useSelector(state => state.filter.breed);
  const locationFilter = useSelector(state => state.filter.location);
  const genderFilter = useSelector(state => state.filter.gender);
  const dispatch = useDispatch();

  //Filter object that is sent in search request

  const handleLocationChange = e => {
    dispatch({ type: SET_LOCATION_FILTER, payload: e.target.value });
  };

  return (
    <>
      <div className={filterInput}>
        <Modal
          defaultOpen={false}
          toggleText="Filter"
          toggleStyles={`${btn} ${btnPrimaryOutline} ${filterToggle}`}
        >
          <FilterMenuMobile
            handleLocationChange={handleLocationChange}
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
            filterObject={filterObject}
            currentPage={currentPage}
          />
        </Modal>
        <button className={`${searchToggle}`}>x</button>
      </div>
      <Pagination currentPage={currentPage} filterObject={filterObject} />
    </>
  );
};

export default Filter;
