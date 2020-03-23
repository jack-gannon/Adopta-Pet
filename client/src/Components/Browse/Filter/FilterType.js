import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_TYPE_FILTER,
  SET_BREED_FILTER,
  SET_PAGE
} from "../../../actions/types";
import { setAvailableBreeds } from "../../../actions/filter";
import {
  filterHeader,
  filterBackBtn,
  filterTypeOptions,
  filterSelectBtn,
  filterPage
} from "../../../styles/component-modules/filter.module.css";
import AnimalTypeItem from "./AnimalTypeItem";

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
  handleSelectDisplay,
  optionalEvent,
  typeFilterValue,
  setTypeFilter
}) => {
  // Application State
  const typeFilter = useSelector(state => state.filter.type);
  const dispatch = useDispatch();

  // Component State
  const [selectedItem, setSelectedItem] = useState(null);

  // Merge Component State into Application State
  const handleSelectType = name => {
    dispatch({ type: SET_TYPE_FILTER, payload: name });
    dispatch({ type: SET_BREED_FILTER, payload: "Any" });
    dispatch({ type: SET_PAGE, payload: 1 });
    if (name !== "Any") {
      dispatch(setAvailableBreeds(name));
    }
    optionalEvent("main"); // Return to main menu page
  };
  return (
    <div className={filterPage}>
      <button
        className={filterBackBtn}
        onClick={() => handleSelectDisplay("main")}
      >
        Back
      </button>
      <h4 className={filterHeader}>Animal Type</h4>
      <div className={filterTypeOptions}>
        <ul>
          {animalTypes.map(type => (
            <AnimalTypeItem
              key={type.name}
              name={type.name}
              isActive={typeFilter === type.name}
              isSelected={selectedItem === type.name}
              setSelectedItem={setSelectedItem}
              handleSelectType={handleSelectType}
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
