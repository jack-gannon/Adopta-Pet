import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../actions/pets";
import { objectToArray } from "../utils/objectToArray";
import Layout from "../Components/Layout/Layout";
import EmptyState from "../Components/Misc/EmptyState";
import FavoritesList from "../Components/Favorites/FavoritesList";
import { container } from "../styles/layout.module.css";
import { header } from "../styles/component-modules/favoritesList.module.css";

const Favorites = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.pet.favorites);
  const favoritesArray = objectToArray(favorites);

  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = favObj => {
    dispatch(removeFavorite(favObj));
    dispatch(getFavorites());
  };

  return (
    <>
      <h1 className={header}>Favorites</h1>
      {favoritesArray.length > 0 ? (
        <FavoritesList
          favorites={favoritesArray}
          handleRemoveFavorite={handleRemoveFavorite}
        />
      ) : (
        <EmptyState type="favorites" />
      )}
    </>
  );
};

export default Favorites;
