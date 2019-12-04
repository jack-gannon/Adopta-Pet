import React from "react";
import {
  animalTypeListItem,
  animalTypeListItemSelected,
  animalTypeListItemDeselected
} from "../styles/component-modules/filter.module.css";
import {
  detailIcon,
  detailIconCheck
} from "../styles/component-modules/feedback.module.css";
import DetailIcon from "./DetailIcon";

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

export default AnimalTypeItemMobile;
