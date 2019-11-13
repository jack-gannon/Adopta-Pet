import React from "react";
import ResultsListItem from "./ResultsListItem";
import { browseList } from "../styles/component-modules/browse.module.css";

const ResultsList = ({ pets }) => {
  return (
    <div>
      <ul className={browseList}>
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
