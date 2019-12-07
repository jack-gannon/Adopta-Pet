import React from "react";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../utils/formatAnimalName";
import {
  resultsListItem,
  itemFields,
  itemField,
  itemFieldMain,
  itemFieldSub,
  itemName,
  itemValue,
  controls
} from "../styles/component-modules/resultsList.module.css";
import Placeholder from "./Placeholder";
import Image from "./Image";
import ResultsSaveButton from "./ResultsSaveButton";

const ResultsListItem = ({ pet }) => {
  const { id, name, contact, type, breed, photos, distance } = pet;
  return (
    <li className={resultsListItem}>
      {photos[0] ? (
        <Image src={pet.photos[0].small} alt={`${name} the ${breed}`} />
      ) : (
        <Placeholder type={type} />
      )}
      <div className={itemFields}>
        <div className={`${itemField} ${itemFieldMain}`}>
          <Link to={`/pet/${id}`}>
            <p className={itemName}>{formatAnimalName(name, 16)}</p>
          </Link>
          <p className={itemValue}>
            {contact.address.city}, {contact.address.state}{" "}
          </p>
        </div>
        <div className={`${itemField} ${itemFieldSub}`}>
          <p className={itemValue}>{distance ? distance : null}</p>
        </div>
      </div>
      <div className={controls}>
        <ResultsSaveButton pet={pet} />
      </div>
    </li>
  );
};

export default ResultsListItem;
