import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { formatAnimalName } from "../utils/formatAnimalName";
import Placeholder from "./Placeholder";
import Image from "./Image";
import ResultsSaveButton from "../Components/ResultsSaveButton";
import {
  resultsGridItem,
  saveSlot,
  mainImg,
  infoPanel,
  imgContainer,
  itemName,
  itemValue
} from "../styles/component-modules/resultsGrid.module.css";

const ResultsGridItem = ({ pet }) => {
  const isMobile = useSelector(state => state.display.isMobile);
  const { id, name, photos, contact, type } = pet;

  return (
    <li className={resultsGridItem}>
      <div className={imgContainer}>
        <Link to={isMobile ? `/pet/${id}` : null}>
          {// Determine whether or not to use Placeholder image for Main Image
          photos[0] ? (
            <>
              <Image
                src={photos[0] ? photos[0].medium : ""}
                alt={name}
                className={mainImg}
              />
            </>
          ) : (
            <Placeholder type={type} name={name} className={mainImg} />
          )}
        </Link>
      </div>
      <div className={infoPanel}>
        <div className={saveSlot}>
          <ResultsSaveButton pet={pet} />
        </div>
        <Link to={isMobile ? `/pet/${id}` : null}>
          {" "}
          <p className={itemName}>{formatAnimalName(name, 12)}</p>
        </Link>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
    </li>
  );
};

export default ResultsGridItem;
