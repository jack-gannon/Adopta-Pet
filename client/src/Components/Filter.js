import React, { useState } from "react";
import {
  filterInput,
  filterToggle,
  searchToggle
} from "../styles/component-modules/filter.module.css";
import { btn, btnPrimaryOutline } from "../styles/buttons.module.css";
import Modal from "./Modal";
import FilterMenuMobile from "./FilterMenuMobile";

const Filter = ({
  currentPage,
  filterObject,
  locationFilter,
  locationFilterType,
  typeFilter,
  breedFilter,
  genderFilter
}) => {
  // Filter Modal State
  const [isOpen, setOpen] = useState(false);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div className={filterInput}>
        <Modal
          defaultOpen={false}
          toggleComponent={clickEvent => <FilterToggle onClick={clickEvent} />}
          isOpen={isOpen}
          setOpen={setOpen}
          toggleOpen={toggleOpen}
        >
          <FilterMenuMobile
            locationFilter={locationFilter}
            locationFilterType={locationFilterType}
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
    </>
  );
};

const FilterToggle = ({ onClick }) => (
  <button
    className={`${filterToggle} ${btn} ${btnPrimaryOutline}`}
    onClick={onClick}
  >
    Filter
  </button>
);

export default Filter;
