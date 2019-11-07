import React, { useState, useEffect } from "react";
import {
  filterBackBtn,
  filterBreedOptions
} from "../styles/component-modules/filter.module.css";
import axios from "axios";

const FilterBreedMobile = ({ typeFilterValue, handleMainDisplay }) => {
  const [breeds, setBreeds] = useState([]);
  useEffect(() => {
    axios
      .get(`/api/data/types/${typeFilterValue}/breeds`)
      .then(response => setBreeds(response.data))
      .catch(error => console.log(error));
  }, []);
  return (
    <div>
      <button className={filterBackBtn} onClick={() => handleMainDisplay()}>
        Back
      </button>
      <div className={filterBreedOptions}>
        <ul>
          {breeds.map((breed, index) => (
            <li key={index}>{breed}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterBreedMobile;
