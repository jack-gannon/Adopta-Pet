import React from "react";
import {
  animalTypeListItem,
  animalTypeListItemSelected,
  animalTypeListItemDeselected
} from "../styles/component-modules/filter.module.css";

const AnimalTypeItemMobile = ({
  name,
  img,
  isActive,
  isSelected,
  setSelectedItem
}) => {
  return (
    <li
      className={`${animalTypeListItem} ${
        isSelected ? animalTypeListItemSelected : animalTypeListItemDeselected
      }`}
    >
      <button onClick={() => setSelectedItem(name)}>
        <span>{name}</span>
        <span>{isSelected ? "check" : isActive ? "Yes" : null}</span>
      </button>
    </li>
  );
};

export default AnimalTypeItemMobile;
