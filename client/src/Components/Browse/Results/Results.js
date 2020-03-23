import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { CLEAR_PET, SET_SIDEBAR_OPEN } from "../../../actions/types";
import { getPet } from "../../../actions/pets";
import Pagination from "../Pagination/Pagination";
import Spinner from "../../Misc/Spinner";
import ResultsGrid from "./ResultsGrid";
import ResultsList from "./ResultsList";
import EmptyState from "../../Misc/EmptyState";
import ResultsDisplaySwitch from "./ResultsDisplaySwitch";

const Results = ({ pets, currentPage, petsLoading }) => {
  const isMobile = useSelector(state => state.display.isMobile);
  const resultsDisplay = useSelector(state => state.results.display);
  const petsError = useSelector(state => state.error.petsError);
  const [selectedPet, setSelectedPet] = useState(null);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSelectPet = id => {
    console.log(isMobile);
    if (isMobile) {
      console.log("attempting to redirect");
      history.push("/pet/:id");
    }
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
    <>
      {pets.length > 0 ? (
        <>
          <Pagination currentPage={currentPage} />
          <ResultsDisplaySwitch />
          {petsLoading ? (
            <Spinner />
          ) : (
            <>
              {resultsDisplay === "grid" ? (
                <ResultsGrid
                  pets={pets}
                  handleSelectPet={handleSelectPet}
                  selectedPet={selectedPet}
                  isMobile={isMobile}
                />
              ) : (
                <ResultsList
                  pets={pets}
                  handleSelectPet={handleSelectPet}
                  selectedPet={selectedPet}
                  isMobile={isMobile}
                />
              )}
            </>
          )}
          <Pagination currentPage={currentPage} />
        </>
      ) : petsLoading ? (
        <Spinner />
      ) : (
        <EmptyState type={petsError ? "error" : null} />
      )}
    </>
  );
};

export default Results;
