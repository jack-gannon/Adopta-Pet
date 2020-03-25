import React from "react";
import { formatAnimalName } from "../../../utils/formatAnimalName";
import {
  alertContent,
  favoritedImg,
  textContent,
  nameText
} from "../../../styles/component-modules/alerts.module.css";

const AddFavoriteAlert = ({ alert, type }) => {
  const { img, name } = alert;
  return (
    <div className={alertContent}>
      <img src={img} alt={name} className={favoritedImg} />
      <p className={textContent}>
        <span className={nameText}>{formatAnimalName(name, 16)}</span> was{" "}
        {type === "add" ? "added to" : "removed from"} your favorites.
      </p>
    </div>
  );
};

export default AddFavoriteAlert;
