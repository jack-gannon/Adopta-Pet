import React from "react";
import { animalTypeListItem } from "../styles/component-modules/filter.module.css";

const AnimalTypeItemMobile = ({ name, img }) => {
  return (
    <li className={animalTypeListItem}>
      <button>{name}</button>
    </li>
  );
};

export default AnimalTypeItemMobile;
