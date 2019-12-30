import React from "react";
import FavoritesListItem from "./FavoritesListItem";
import {
  favoritesList,
  tableHeader,
  bottomPanel,
  removeAllBtn,
  total
} from "../styles/component-modules/favoritesList.module.css";

const FavoritesList = ({ favorites, handleRemoveFavorite }) => {
  return (
    <div className={favoritesList}>
      <div className={tableHeader}>
        <p>Name</p>
        <p>Date Added</p>
        <p>Options</p>
      </div>
      <ul>
        {favorites.map(favorite => (
          <FavoritesListItem
            key={favorite[0]}
            favorite={favorite[1]}
            handleRemoveFavorite={handleRemoveFavorite}
          />
        ))}
      </ul>
      <div className={bottomPanel}>
        <button className={removeAllBtn}>× Remove All</button>
        <p className={total}>
          <span>{favorites.length}</span> Favorites
        </p>
      </div>
    </div>
  );
};

export default FavoritesList;
