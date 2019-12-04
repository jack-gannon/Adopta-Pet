import React from "react";
import {
  animalBreedListItem,
  animalBreedListItemSelected,
  animalBreedListItemDeselected
} from "../styles/component-modules/filter.module.css";
import {
  detailIcon,
  detailIconCheck
} from "../styles/component-modules/feedback.module.css";
import DetailIcon from "./DetailIcon";

const AnimalBreedItemMobile = ({
  name,
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
        <span>
          {isSelected ? (
            "check"
          ) : isActive ? (
            <DetailIcon
              type="check"
              className={`${detailIcon} ${detailIconCheck}`}
            />
          ) : null}
        </span>
      </button>
    </li>
  );
};

export default AnimalBreedItemMobile;
