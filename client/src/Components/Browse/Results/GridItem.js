import React from "react";
import { formatAnimalName } from "../../../utils/formatAnimalName";
import Placeholder from "../../Misc/Placeholder";
import Image from "../../Misc/Image";
import ResultsFavoriteButton from "./ResultsFavoriteButton";
import {
  resultsGridItem,
  selected,
  deselected,
  saveSlot,
  mainImg,
  infoPanel,
  imgContainer,
  itemName,
  itemValue
} from "../../../styles/component-modules/resultsGrid.module.css";

const GridItem = ({ pet, isSelected, handleSelectPet, nameLength }) => {
  const { id, name, photos, contact, type } = pet;

  return (
    <li className={`${resultsGridItem}`}>
      <div className={imgContainer}>
        {// Determine whether or not to use Placeholder image for Main Image
        photos[0] ? (
          <>
            <Image
              src={photos[0] ? photos[0].medium : ""}
              alt={name}
              className={`${mainImg} ${isSelected ? selected : deselected}`}
              onClick={() => handleSelectPet(id)}
            />
          </>
        ) : (
          <Placeholder
            type={type}
            name={name}
            className={`${mainImg} ${isSelected ? selected : deselected}`}
            onClick={() => handleSelectPet(id)}
          />
        )}
      </div>
      <div className={infoPanel}>
        <div className={saveSlot}>
          <ResultsFavoriteButton pet={pet} />
        </div>{" "}
        <p className={itemName} onClick={() => handleSelectPet(id)}>
          {formatAnimalName(name, nameLength)}
        </p>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
    </li>
  );
};

export default GridItem;
