import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_BREED_FILTER } from "../../../actions/types";
import {
  filterPage,
  filterBackBtn,
  filterSelectBtn,
  filterBreedOptions
} from "../../../styles/component-modules/filter.module.css";
import AnimalBreedItem from "./AnimalBreedItem";
import TextInput from "../../Input/TextInput";

const FilterBreed = ({ breedFilter, handleSelectDisplay, optionalEvent }) => {
  const breeds = useSelector(state => state.filter.availableBreeds);
  const [selectedItem, setSelectedItem] = useState("Any");
  const [searchQuery, setSearchQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearchQuery = e => {
    setSearchQuery(e.target.value);
  };

  const handleSelectBreed = () => {
    dispatch({ type: SET_BREED_FILTER, payload: selectedItem });
    optionalEvent("main");
  };

  return (
    <div className={filterPage}>
      <button
        className={filterBackBtn}
        onClick={() => handleSelectDisplay("main")}
      >
        Back
      </button>
      <div className={filterBreedOptions}>
        <TextInput
          labelText="Search"
          value={searchQuery}
          action={e => handleSearchQuery(e)}
        />
        <ul>
          {searchQuery === "" && (
            <AnimalBreedItem
              key={0}
              name={"Any"}
              isActive={breedFilter === "Any"}
              isSelected={selectedItem === "Any"}
              setSelectedItem={setSelectedItem}
              selectedItem={selectedItem}
            />
          )}
          {breeds
            .filter(breed => breed.includes(searchQuery))
            .map((breed, index) => (
              <AnimalBreedItem
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

export default FilterBreed;
