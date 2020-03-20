import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_PET, SET_SIDEBAR_OPEN } from "../actions/types";
import { getPet } from "../actions/pets";
import ResultsGridItem from "./ResultsGridItem";
import GridItemDesktop from "./GridItemDesktop";
import GridItemMobile from "./GridItemMobile";
import { resultsGrid } from "../styles/component-modules/resultsGrid.module.css";

const ResultsGrid = ({ pets }) => {
  const isMobile = useSelector(state => state.display.isMobile);
  const [selectedPet, setSelectedPet] = useState(null);
  const dispatch = useDispatch();

  const handleSelect = id => {
    let isSelected = selectedPet === id;
    if (isSelected) {
      dispatch({ type: CLEAR_PET });
      setSelectedPet(null);
    } else {
      dispatch({ type: SET_SIDEBAR_OPEN, payload: true });
      setSelectedPet(id);
      dispatch(getPet(id));
    }
  };

  return (
    <div className={resultsGrid}>
      <ul>
        {isMobile
          ? pets.map(pet => <GridItemMobile pet={pet} key={pet.id} />)
          : pets.map(pet => (
              <GridItemDesktop
                pet={pet}
                key={pet.id}
                isSelected={selectedPet === pet.id}
                handleSelect={handleSelect}
              />
            ))}
      </ul>
    </div>
  );
};

export default ResultsGrid;
