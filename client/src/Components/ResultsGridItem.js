import React, { useState } from "react";
import {
  resultsGridItem,
  toggleSlot,
  saveSlot,
  mainImg,
  infoPanel,
  imgContainer,
  stop1,
  stop2,
  detailsPanel,
  detailsPanelInactive,
  detailsPanelActive,
  detailsPanelImg,
  detailsPanelDetails,
  detailsItem,
  itemName,
  itemValue
} from "../styles/component-modules/resultsGrid.module.css";
import { useDispatch } from "react-redux";
import Placeholder from "./Placeholder";
import { formatAnimalName } from "../utils/formatAnimalName";
import { Link } from "react-router-dom";
import { CLEAR_PET } from "../actions/types";
import ResultsSaveButton from "../Components/ResultsSaveButton";
import ResultsDetailsButton from "../Components/ResultsDetailsButton";

const ResultsGridItem = ({ pet }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dispatch = useDispatch();
  const { id, name, photos, gender, contact, type, species, breeds } = pet;

  const toggleDetailsPanel = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <li className={resultsGridItem}>
      <div className={toggleSlot}>
        <ResultsDetailsButton
          toggleAction={() => toggleDetailsPanel()}
          detailsOpen={detailsOpen}
        />
      </div>
      <div className={imgContainer}>
        {// Determine whether or not to use Placeholder image for Main Image
        photos[0] ? (
          <>
            <img
              src={photos[0] ? photos[0].medium : ""}
              alt={name}
              className={mainImg}
            />
            <svg>
              <defs>
                <linearGradient id="gradient">
                  <stop offset="0%" className={stop1} />
                  <stop offset="100%" className={stop2} />
                </linearGradient>
              </defs>
              <rect width="100%" height="100%" fill="url(#gradient)"></rect>
            </svg>
          </>
        ) : (
          <Placeholder type={type} name={name} className={mainImg} />
        )}
      </div>
      <div className={infoPanel}>
        <div className={saveSlot}>
          <ResultsSaveButton id={id} />
        </div>
        <Link to={`/pet/${id}`} onClick={() => dispatch({ type: CLEAR_PET })}>
          {" "}
          <p className={itemName}>{formatAnimalName(name, 12)}</p>
        </Link>
        <p className={itemValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
      <div
        className={`${detailsPanel} ${
          detailsOpen ? detailsPanelActive : detailsPanelInactive
        }`}
      >
        {// Determine whether or not to use Placeholder image for Details Panel Image
        photos[0] ? (
          <img
            src={photos[0] ? photos[0].medium : ""}
            alt={name}
            className={detailsPanelImg}
          />
        ) : (
          <Placeholder type={type} name={name} className={detailsPanelImg} />
        )}
        <div className={detailsPanelDetails}>
          {species === breeds.primary ? null : (
            <p className={detailsItem}>{species}</p>
          )}
          <br />
          <p className={detailsItem}>{breeds.primary}</p>
          <br />
          <p className={detailsItem}>{gender}</p>
        </div>
      </div>
    </li>
  );
};

export default ResultsGridItem;
