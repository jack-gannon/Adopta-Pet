import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_TYPE_FILTER, SET_BREED_FILTER } from "../actions/types";
import { setAvailableBreeds } from "../actions/filter";
import {
  filterHeader,
  filterBackBtn,
  filterTypeOptions,
  filterSelectBtn,
  filterPage
} from "../styles/component-modules/filter.module.css";
import AnimalTypeItemMobile from "./AnimalTypeItemMobile";

const animalTypes = [
  { name: "Any" },
  { name: "Dog" },
  { name: "Cat" },
  { name: "Rabbit" },
  { name: "Small & Furry" },
  { name: "Horse" },
  { name: "Bird" },
  { name: "Scales, Fins & Other" },
  { name: "Barnyard" }
];

const FilterTypeMobile = ({
  handleMainDisplay,
  typeFilterValue,
  setTypeFilter
}) => {
  // Application State
  const typeFilter = useSelector(state => state.filter.type);
  const dispatch = useDispatch();

  // Component State
  const [selectedItem, setSelectedItem] = useState(null);
  const handleSelectType = () => {
    dispatch({ type: SET_TYPE_FILTER, payload: selectedItem });
    dispatch({ type: SET_BREED_FILTER, payload: "Any" });
    if (selectedItem !== "Any") {
      dispatch(setAvailableBreeds(selectedItem));
    }
    handleMainDisplay();
  };
  return (
    <div className={filterPage}>
      <button className={filterBackBtn} onClick={() => handleMainDisplay()}>
        Back
      </button>
      <h4 className={filterHeader}>Animal Type</h4>
      <div className={filterTypeOptions}>
        <ul>
          {animalTypes.map(type => (
            <AnimalTypeItemMobile
              key={type.name}
              name={type.name}
              isActive={typeFilter === type.name}
              isSelected={selectedItem === type.name}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => handleSelectType()} className={filterSelectBtn}>
        Select
      </button>
    </div>
  );
};

export default FilterTypeMobile;
