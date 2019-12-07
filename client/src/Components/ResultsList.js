import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ResultsListItem from "./ResultsListItem";
import { resultsList } from "../styles/component-modules/resultsList.module.css";

const ResultsList = ({ pets }) => {
  const favorites = useSelector(state => state.pet.favorites);
  useEffect(() => {}, [favorites]);
  return (
    <div>
      <ul className={resultsList}>
        {pets ? (
          pets.map(pet => {
            return <ResultsListItem pet={pet} key={pet.id} />;
          })
        ) : (
          <li>No Pets!</li>
        )}
      </ul>
    </div>
  );
};

export default ResultsList;
