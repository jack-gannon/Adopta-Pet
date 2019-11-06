import React from "react";
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

const FilterTypeMobile = ({ handleMainDisplay }) => {
  return (
    <div className={filterPage}>
      <button className={filterBackBtn} onClick={() => handleMainDisplay()}>
        Back
      </button>
      <h4 className={filterHeader}>Animal Type</h4>
      <div className={filterTypeOptions}>
        <ul>
          {animalTypes.map(type => (
            <AnimalTypeItemMobile key={type.name} name={type.name} />
          ))}
        </ul>
      </div>
      <button className={filterSelectBtn}>Select</button>
    </div>
  );
};

export default FilterTypeMobile;
