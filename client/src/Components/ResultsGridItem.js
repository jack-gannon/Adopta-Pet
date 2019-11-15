import React, { useState } from "react";
import {
  resultsGridItem,
  resultsGridDetailsToggle,
  resultsGridMainImg,
  resultsGridInfoPanel,
  resultsGridDetailsPanel,
  resultsGridDetailsPanelInactive,
  resultsGridDetailsPanelActive,
  resultsGridDetailsPanelImg,
  resultsGridDetailsPanelDetails,
  resultsGridDetailsPanelDetailsItem,
  resultsGridName,
  resultsGridValue
} from "../styles/component-modules/results.module.css";
import { useDispatch } from "react-redux";
import Placeholder from "./Placeholder";
import { formatAnimalName } from "../utils/formatAnimalName";
import { Link } from "react-router-dom";
import { CLEAR_PET } from "../actions/types";

const ResultsGridItem = ({ pet }) => {
  const [detailsOpen, setDetailsOpen] = useState(false);
  const dispatch = useDispatch();
  const { id, name, photos, gender, contact, type, species, breeds } = pet;

  const toggleDetailsPanel = () => {
    setDetailsOpen(!detailsOpen);
  };
  return (
    <li className={resultsGridItem}>
      {photos[0] ? (
        <img
          src={photos[0] ? photos[0].medium : ""}
          alt={name}
          className={resultsGridMainImg}
        />
      ) : (
        <Placeholder type={type} name={name} className={resultsGridMainImg} />
      )}

      <div className={resultsGridInfoPanel}>
        <button
          onClick={() => toggleDetailsPanel()}
          className={resultsGridDetailsToggle}
        >
          {detailsOpen ? <span>&times;</span> : <span>&hellip;</span>}
        </button>
        <Link to={`/pet/${id}`} onClick={() => dispatch({ type: CLEAR_PET })}>
          {" "}
          <p className={resultsGridName}>{formatAnimalName(name, 12)}</p>
        </Link>
        <p className={resultsGridValue}>
          {contact.address.city}, {contact.address.state}
        </p>
      </div>
      <div
        className={`${resultsGridDetailsPanel} ${
          detailsOpen
            ? resultsGridDetailsPanelActive
            : resultsGridDetailsPanelInactive
        }`}
      >
        {photos[0] ? (
          <img
            src={photos[0] ? photos[0].medium : ""}
            alt={name}
            className={resultsGridDetailsPanelImg}
          />
        ) : (
          <Placeholder
            type={type}
            name={name}
            className={resultsGridDetailsPanelImg}
          />
        )}
        <div className={resultsGridDetailsPanelDetails}>
          <p className={resultsGridDetailsPanelDetailsItem}>{species}</p>
          <br />
          <p className={resultsGridDetailsPanelDetailsItem}>{breeds.primary}</p>
          <br />
          <p className={resultsGridDetailsPanelDetailsItem}>{gender}</p>
        </div>
      </div>
    </li>
  );
};

export default ResultsGridItem;
