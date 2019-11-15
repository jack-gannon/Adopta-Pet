import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CLEAR_PET } from "../actions/types";
import {
  resultsListItem,
  resultsListName,
  resultsListValue
} from "../styles/component-modules/results.module.css";
import Placeholder from "./Placeholder";
import { formatAnimalName } from "../utils/formatAnimalName";

const ResultsListItem = ({ pet }) => {
  const { id, name, contact, type, gender, breed, photos } = pet;
  const dispatch = useDispatch();
  return (
    <li className={resultsListItem}>
      {photos[0] ? (
        <img src={pet.photos[0].small} alt={`${name} the ${breed}`} />
      ) : (
        <Placeholder type={type} />
      )}

      <Link to={`/pet/${pet.id}`} onClick={() => dispatch({ type: CLEAR_PET })}>
        <p className={resultsListName}>{formatAnimalName(name, 12)}</p>
      </Link>
      <p className={resultsListValue}>
        {contact.address.city}, {contact.address.state}
      </p>
    </li>
  );
};

export default ResultsListItem;
