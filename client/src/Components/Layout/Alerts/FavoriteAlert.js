import React from "react";
import { formatAnimalName } from "../../../utils/formatAnimalName";
import {
  alertContent,
  favoritedImg,
  textContent,
  nameText
} from "../../../styles/component-modules/alerts.module.css";
import ImageHandler from "../../HOCs/ImageHandler";

const AddFavoriteAlert = ({ alert, type }) => {
  const { img, name, petType } = alert;
  return (
    <div className={alertContent}>
      <ImageHandler
        usePlaceholder={img ? false : true}
        className={favoritedImg}
        src={img}
        alt={name}
        petType={petType}
      />
      <p className={textContent}>
        <span className={nameText}>{formatAnimalName(name, 16)}</span> was{" "}
        {type === "add" ? "added to" : "removed from"} your favorites.
      </p>
    </div>
  );
};

export default AddFavoriteAlert;
