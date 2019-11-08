import React from "react";
import {
  animalBreedListItem,
  animalBreedListItemSelected,
  animalBreedListItemDeselected
} from "../styles/component-modules/filter.module.css";

const AnimalBreedItemMobile = ({
  name,
  img,
  isActive,
  isSelected,
  setSelectedItem
}) => {
  return (
    <li
      className={`${animalBreedListItem} ${
        isSelected ? animalBreedListItemSelected : animalBreedListItemDeselected
      }`}
    >
      <button onClick={() => setSelectedItem(name)}>
        <span>{name}</span>
        <span>{isSelected ? "check" : isActive ? "Yes" : null}</span>
      </button>
    </li>
  );
};

export default AnimalBreedItemMobile;
