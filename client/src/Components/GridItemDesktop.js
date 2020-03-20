import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPet } from "../actions/pets";
import { CLEAR_PET } from "../actions/types";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../utils/formatAnimalName";
import Placeholder from "./Placeholder";
import Image from "./Image";
import ResultsSaveButton from "../Components/ResultsSaveButton";
import {
  resultsGridItem,
  gridItemDesktop,
  selected,
  deselected,
  saveSlot,
  mainImg,
  infoPanel,
  imgContainer,
  itemName,
  itemValue
} from "../styles/component-modules/resultsGrid.module.css";

const GridItemDesktop = ({ pet, isSelected, handleSelect }) => {
  const { id, name, photos, contact, type } = pet;
  const [isHovered, setHovered] = useState(false);

  return (
    <li className={`${resultsGridItem} ${gridItemDesktop}`}>
      <div className={imgContainer}>
        {// Determine whether or not to use Placeholder image for Main Image
        photos[0] ? (
          <>
            <Image
              src={photos[0] ? photos[0].medium : ""}
              alt={name}
              className={`${mainImg} ${isSelected ? selected : deselected}`}
              onClick={() => handleSelect(id)}
            />
          </>
        ) : (
          <Placeholder
            type={type}
            name={name}
            className={`${mainImg} ${isSelected ? selected : deselected}`}
            onClick={() => handleSelect(id)}
          />
        )}
      </div>
      <div className={infoPanel}>
        <div className={saveSlot}>
          <ResultsSaveButton pet={pet} />
        </div>{" "}
        <p className={itemName} onClick={() => handleSelect(id)}>
          {formatAnimalName(name, 24)}
        </p>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
    </li>
  );
};

export default GridItemDesktop;
