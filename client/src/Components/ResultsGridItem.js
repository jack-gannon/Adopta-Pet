import React, { useState } from "react";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../utils/formatAnimalName";
import {
  resultsGridItem,
  saveSlot,
  mainImg,
  infoPanel,
  imgContainer,
  itemName,
  itemValue
} from "../styles/component-modules/resultsGrid.module.css";
import Placeholder from "./Placeholder";
import Image from "./Image";
import ResultsSaveButton from "../Components/ResultsSaveButton";
import ResultsDetailsButton from "../Components/ResultsDetailsButton";

const ResultsGridItem = ({ pet }) => {
  const { id, name, photos, gender, contact, type, species, breeds } = pet;

  return (
    <li className={resultsGridItem}>
      <div className={imgContainer}>
        {// Determine whether or not to use Placeholder image for Main Image
        photos[0] ? (
          <>
            <Image
              src={photos[0] ? photos[0].medium : ""}
              alt={name}
              className={mainImg}
            />
          </>
        ) : (
          <Placeholder type={type} name={name} className={mainImg} />
        )}
      </div>
      <div className={infoPanel}>
        <div className={saveSlot}>
          <ResultsSaveButton id={id} />
        </div>
        <Link to={`/pet/${id}`}>
          {" "}
          <p className={itemName}>{formatAnimalName(name, 12)}</p>
        </Link>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
    </li>
  );
};

export default ResultsGridItem;
