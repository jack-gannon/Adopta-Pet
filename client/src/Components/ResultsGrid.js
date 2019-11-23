import React from "react";
import ResultsGridItem from "./ResultsGridItem";
import { resultsGrid } from "../styles/component-modules/resultsGrid.module.css";

const ResultsGrid = ({ pets }) => {
  return (
    <div className={resultsGrid}>
      <ul>
        {pets.map(pet => (
          <ResultsGridItem pet={pet} key={pet.id} />
        ))}
      </ul>
    </div>
  );
};

export default ResultsGrid;
