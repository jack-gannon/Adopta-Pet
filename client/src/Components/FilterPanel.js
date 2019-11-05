import React from "react";
import {
  filterInput,
  filterToggle,
  searchToggle
} from "../styles/component-modules/filter.module.css";
import { btn, btnPrimaryOutline } from "../styles/buttons.module.css";
import { Link } from "react-router-dom";

const Filter = () => {
  return (
    <>
      <div className={filterInput}>
        <Link to={`browse/filter`}>
          <button className={`${btn} ${btnPrimaryOutline} ${filterToggle}`}>
            Filter
          </button>
        </Link>
        <button className={`${searchToggle}`}>x</button>
      </div>
    </>
  );
};

export default Filter;
