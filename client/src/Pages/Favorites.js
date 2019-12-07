import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite, getFavorites } from "../actions/pets";
import EmptyState from "../Components/EmptyState";

const Saved = () => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.pet.favorites);
  useEffect(() => {
    dispatch(getFavorites());
  }, [dispatch]);

  const handleRemoveFavorite = favObj => {
    dispatch(removeFavorite(favObj));
    dispatch(getFavorites());
  };

  return (
    <div style={{ paddingTop: "12rem" }}>
      <ul>
        {favorites.length > 0 ? (
          favorites.map(fav => (
            <li key={fav.id}>
              {`${fav.name} | ${fav.id}`}
              <button onClick={() => handleRemoveFavorite(fav)}>X</button>
            </li>
          ))
        ) : (
          <EmptyState type="favorites" />
        )}
      </ul>
    </div>
  );
};

export default Saved;
