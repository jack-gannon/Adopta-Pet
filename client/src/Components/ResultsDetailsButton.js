import React from "react";
import {
  detailsToggle,
  detailsToggleActive,
  detailsToggleInactive
} from "../styles/component-modules/results.module.css";

const ResultsDetailsButton = ({ detailsOpen, toggleAction }) => {
  return (
    <button
      onClick={toggleAction}
      className={`${detailsToggle} ${
        detailsOpen ? detailsToggleActive : detailsToggleInactive
      }`}
    >
      {detailsOpen ? <span>&times;</span> : <span>&hellip;</span>}
    </button>
  );
};

export default ResultsDetailsButton;
