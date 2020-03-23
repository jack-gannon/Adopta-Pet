import React from "react";
import { formatAnimalName } from "../../../utils/formatAnimalName";
import {
  resultsListItem,
  selected,
  deselected,
  itemFields,
  itemField,
  itemFieldMain,
  itemFieldSub,
  itemName,
  itemValue,
  controls
} from "../../../styles/component-modules/resultsList.module.css";
import Placeholder from "../../Misc/Placeholder";
import Image from "../../Misc/Image";
import ResultsFavoriteButton from "./ResultsFavoriteButton";

const ListItem = ({ pet, handleSelectPet, isSelected, nameLength }) => {
  const { id, name, contact, type, breed, photos, distance } = pet;
  return (
    <li
      className={`${resultsListItem} ${isSelected ? selected : deselected}`}
      onClick={() => handleSelectPet(id)}
    >
      {photos[0] ? (
        <Image src={pet.photos[0].small} alt={`${name} the ${breed}`} />
      ) : (
        <Placeholder type={type} />
      )}
      <div className={itemFields}>
        <div className={`${itemField} ${itemFieldMain}`}>
          <p className={itemName}>{formatAnimalName(name, nameLength)}</p>
          <p className={itemValue}>
            {contact.address.city}, {contact.address.state}{" "}
          </p>
        </div>
        <div className={`${itemField} ${itemFieldSub}`}>
          <p className={itemValue}>{distance ? distance : null}</p>
        </div>
      </div>
      <div className={controls}>
        <ResultsFavoriteButton pet={pet} />
      </div>
    </li>
  );
};

export default ListItem;
