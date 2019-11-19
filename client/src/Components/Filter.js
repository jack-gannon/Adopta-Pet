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
import Pagination from "./Pagination";

const Filter = ({
  currentPage,
  filterObject,
  locationFilter,
  typeFilter,
  breedFilter,
  genderFilter
}) => {
  const dispatch = useDispatch();

  // Filter Modal State
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

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
          isOpen={isOpen}
          setOpen={setOpen}
          toggleOpen={toggleOpen}
        >
          <FilterMenuMobile
            handleLocationChange={handleLocationChange}
            locationFilter={locationFilter}
            typeFilter={typeFilter}
            breedFilter={breedFilter}
            genderFilter={genderFilter}
            filterObject={filterObject}
            currentPage={currentPage}
            setOpen={setOpen}
            toggleOpen={toggleOpen}
          />
        </Modal>
        <button className={`${searchToggle}`}>x</button>
      </div>
      <Pagination currentPage={currentPage} filterObject={filterObject} />
    </>
  );
};

export default Filter;
