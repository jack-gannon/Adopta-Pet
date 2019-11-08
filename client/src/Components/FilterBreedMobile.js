import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_BREED_FILTER } from "../actions/types";
import {
  filterPage,
  filterBackBtn,
  filterSelectBtn,
  filterBreedOptions
} from "../styles/component-modules/filter.module.css";
import AnimalBreedItemMobile from "./AnimalBreedItemMobile";

const FilterBreedMobile = ({ breedFilter, handleMainDisplay }) => {
  const breeds = useSelector(state => state.filter.availableBreeds);
  const [selectedItem, setSelectedItem] = useState("Any");
  const dispatch = useDispatch();
  const handleSelectBreed = () => {
    dispatch({ type: SET_BREED_FILTER, payload: selectedItem });
    handleMainDisplay();
  };
  return (
    <div className={filterPage}>
      <button className={filterBackBtn} onClick={() => handleMainDisplay()}>
        Back
      </button>
      <div className={filterBreedOptions}>
        <ul>
          <AnimalBreedItemMobile
            key={0}
            name={"Any"}
            isActive={breedFilter === "Any"}
            isSelected={selectedItem === "Any"}
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
          />
          {breeds.map((breed, index) => (
            <AnimalBreedItemMobile
              key={index + 1}
              name={breed}
              isActive={breedFilter === breed}
              isSelected={selectedItem === breed}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          ))}
        </ul>
      </div>
      <button onClick={() => handleSelectBreed()} className={filterSelectBtn}>
        Select
      </button>
    </div>
  );
};

export default FilterBreedMobile;
