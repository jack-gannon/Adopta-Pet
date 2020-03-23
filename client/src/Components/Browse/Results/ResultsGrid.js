import React from "react";
import GridItem from "./GridItem";
import { resultsGrid } from "../../../styles/component-modules/resultsGrid.module.css";

const ResultsGrid = ({ pets, selectedPet, handleSelectPet, isMobile }) => {
  return (
    <div className={resultsGrid}>
      <ul>
        {pets.map(pet => (
          <GridItem
            pet={pet}
            key={pet.id}
            isSelected={selectedPet === pet.id}
            handleSelectPet={handleSelectPet}
            nameLength={isMobile ? 12 : 24}
          />
        ))}
      </ul>
    </div>
  );
};

export default ResultsGrid;
