import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addFavorite,
  getFavorites,
  removeFavorite
} from "../../../actions/pets";
import moment from "moment";

import {
  saveBtn,
  saveBtnActive,
  saveBtnInactive
} from "../../../styles/component-modules/results.module.css";

const ResultsFavoriteButton = ({ pet }) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.pet.favorites);
  const { name, id, photos, type } = pet;

  useEffect(() => {
    dispatch(getFavorites);
  }, []);

  const handleAddFavorite = () => {
    let petObject = {
      name: name,
      id: id,
      dateFavorited: moment().calendar(),
      img: photos.length > 0 ? photos[0].small : null,
      type: type
    };
    dispatch(addFavorite(petObject));
  };

  const handleRemoveFavorite = () => {
    dispatch(removeFavorite(id));
  };

  return (
    <button
      className={saveBtn}
      onClick={
        favorites[id] ? () => handleRemoveFavorite() : () => handleAddFavorite()
      }
    >
      {favorites[id] ? (
        <svg className={saveBtnActive} x="0px" y="0px" viewBox="0 0 24 24">
          <path
            d="M12,21.4L10.6,20C5.4,15.4,2,12.3,2,8.5C2,5.4,4.4,3,7.5,3c1.7,0,3.4,0.8,4.5,2.1C13.1,3.8,14.8,3,16.5,3
       C19.6,3,22,5.4,22,8.5c0,3.8-3.4,6.9-8.6,11.5L12,21.4z"
          />
        </svg>
      ) : (
        <svg className={saveBtnInactive} x="0px" y="0px" viewBox="0 0 24 24">
          <path
            d="M16.5,3c-1.7,0-3.4,0.8-4.5,2.1C10.9,3.8,9.2,3,7.5,3C4.4,3,2,5.4,2,8.5c0,3.8,3.4,6.9,8.6,11.5l1.4,1.3l1.4-1.3
	c5.2-4.7,8.6-7.8,8.6-11.5C22,5.4,19.6,3,16.5,3z M12.1,18.5L12,18.6l-0.1-0.1C7.1,14.2,4,11.4,4,8.5C4,6.5,5.5,5,7.5,5
	c1.5,0,3,1,3.6,2.4h1.9C13.5,6,15,5,16.5,5c2,0,3.5,1.5,3.5,3.5C20,11.4,16.9,14.2,12.1,18.5z"
          />
        </svg>
      )}
    </button>
  );
};

export default ResultsFavoriteButton;
