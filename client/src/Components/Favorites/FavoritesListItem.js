import React from "react";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../../utils/formatAnimalName";
import Placeholder from "../Misc/Placeholder";
import {
  listItem,
  photoAndName,
  itemName,
  date,
  removeBtn,
  favImg
} from "../../styles/component-modules/favoritesList.module.css";

const FavoritesListItem = ({ favorite, handleRemoveFavorite }) => {
  let { name, id, dateFavorited, img, type } = favorite;
  return (
    <li key={id} className={listItem}>
      <div className={photoAndName}>
        {img ? (
          <img src={img} alt={`${name} the ${type}`} className={favImg} />
        ) : (
          <Placeholder type={type} className={favImg} />
        )}
        <Link to={`/pet/${id}`}>
          <p className={itemName}>{formatAnimalName(name, 18)}</p>
        </Link>
      </div>
      <p className={date}>{dateFavorited}</p>
      <div>
        <button className={removeBtn} onClick={() => handleRemoveFavorite(id)}>
          ×
        </button>
      </div>
    </li>
  );
};

export default FavoritesListItem;
