import React, { useState } from "react";
import {
  filterHeader,
  filterInputMobile
} from "../styles/component-modules/filter.module.css";
import { Switch, Link, Route, useRouteMatch } from "react-router-dom";
import TextInput from "./TextInput";

const FilterInputMobile = ({ handleLocationChange, locationFilter }) => {
  const { path } = useRouteMatch();

  return (
    <>
      <div className={filterInputMobile}>
        <Link to="/browse">Back</Link>
        <h4 className={filterHeader}>Filter Pets</h4>
        <TextInput
          label="Location"
          id="location"
          value={locationFilter}
          action={handleLocationChange}
        />
        <br />
        <button>Animal Type</button>
        <button>Breed</button>
        <button>Apply Filter</button>
      </div>
    </>
  );
};

export default FilterInputMobile;
