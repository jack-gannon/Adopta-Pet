import React from "react";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../utils/formatAnimalName";
import {
  resultsListItem,
  itemField,
  itemName,
  itemValue,
  controls
} from "../styles/component-modules/resultsList.module.css";
import Placeholder from "./Placeholder";
import Image from "./Image";
import ResultsSaveButton from "./ResultsSaveButton";

const ResultsListItem = ({ pet }) => {
  const { id, name, contact, type, breed, photos } = pet;
  return (
    <li className={resultsListItem}>
      {photos[0] ? (
        <Image src={pet.photos[0].small} alt={`${name} the ${breed}`} />
      ) : (
        <Placeholder type={type} />
      )}
      <div className={itemField}>
        <Link to={`/pet/${id}`}>
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
