import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import { resultsList } from "../../../styles/component-modules/resultsList.module.css";

const ResultsList = ({ pets, selectedPet, handleSelectPet, isMobile }) => {
  const favorites = useSelector(state => state.pet.favorites);

  useEffect(() => {}, [favorites]);
  return (
    <div>
      <ul className={resultsList}>
        {pets.map(pet => {
          return (
            <ListItem
              pet={pet}
              key={pet.id}
              isSelected={selectedPet === pet.id}
              selectedPet={selectedPet}
              handleSelectPet={handleSelectPet}
              nameLength={isMobile ? 16 : 24}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default ResultsList;
