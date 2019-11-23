import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CLEAR_PET } from "../actions/types";
import {
  resultsListItem,
  itemField,
  itemName,
  itemValue,
  controls
} from "../styles/component-modules/resultsList.module.css";
import Placeholder from "./Placeholder";
import { formatAnimalName } from "../utils/formatAnimalName";
import ResultsSaveButton from "./ResultsSaveButton";
import ResultsDetailsButton from "./ResultsDetailsButton";

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
      <div className={itemField}>
        <Link to={`/pet/${id}`} onClick={() => dispatch({ type: CLEAR_PET })}>
          <p className={itemName}>{formatAnimalName(name, 11)}</p>
        </Link>
      </div>
      <div className={itemField}>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>

      <div className={controls}>
        <ResultsSaveButton />
      </div>
    </li>
  );
};

export default ResultsListItem;
