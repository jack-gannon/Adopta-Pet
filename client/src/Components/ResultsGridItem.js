import React from "react";
import {
  resultsGridItem,
  resultsGridName,
  resultsGridValue
} from "../styles/component-modules/results.module.css";
import { useDispatch } from "react-redux";
import Placeholder from "./Placeholder";
import { formatAnimalName } from "../utils/formatAnimalName";
import { Link } from "react-router-dom";
import { CLEAR_PET } from "../actions/types";

const ResultsGridItem = ({ pet }) => {
  const dispatch = useDispatch();
  const { id, name, photos, contact, type } = pet;
  return (
    <li className={resultsGridItem}>
      {photos[0] ? (
        <img src={photos[0] ? photos[0].medium : ""} alt={name} />
      ) : (
        <Placeholder type={type} name={name} />
      )}

      <div>
        <Link to={`/pet/${id}`} onClick={() => dispatch({ type: CLEAR_PET })}>
          {" "}
          <p className={resultsGridName}>{formatAnimalName(name, 12)}</p>
        </Link>
        <p className={resultsGridValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
    </li>
  );
};

export default ResultsGridItem;
