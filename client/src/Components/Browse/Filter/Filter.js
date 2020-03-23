import React from "react";
import {
  filterInput,
  filterMobile,
  filterToggle,
  searchToggle
} from "../../../styles/component-modules/filter.module.css";
import { btn, btnPrimaryOutline } from "../../../styles/buttons.module.css";
import Modal from "../../Layout/Modal";
import FilterMenuMobile from "./FilterMenuMobile";
import FilterDesktop from "./FilterDesktop";

const Filter = ({
  currentPage,
  filterObject,
  locationFilter,
  locationFilterType,
  typeFilter,
  breedFilter,
  genderFilter
}) => {
  // Mobile filter must collect filter values in intermediate
  // component-level state before being applied.
  // Desktop filter bypasses component-state and applies
  // value directly to Redux store.

  return (
    <>
      <div className={`${filterInput} ${filterMobile}`}>
        <Modal
          defaultOpen={false}
          toggleComponent={clickEvent => <FilterToggle onClick={clickEvent} />}
          contentComponent={clickEvent => (
            <FilterMenuMobile
              locationFilter={locationFilter}
              locationFilterType={locationFilterType}
              typeFilter={typeFilter}
              breedFilter={breedFilter}
              genderFilter={genderFilter}
              filterObject={filterObject}
              currentPage={currentPage}
              closeModal={clickEvent}
            />
          )}
        />
        <button className={`${searchToggle}`}>x</button>
      </div>
      <FilterDesktop
        locationFilter={locationFilter}
        locationFilterType={locationFilterType}
        typeFilter={typeFilter}
        breedFilter={breedFilter}
        genderFilter={genderFilter}
        filterObject={filterObject}
        currentPage={currentPage}
      />
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
