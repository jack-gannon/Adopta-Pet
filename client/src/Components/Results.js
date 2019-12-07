import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESULTS_DISPLAY_GRID, RESULTS_DISPLAY_LIST } from "../actions/types";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ResultsGrid from "./ResultsGrid";
import ResultsList from "./ResultsList";
import EmptyState from "./EmptyState";

const Results = ({ pets, currentPage, petsLoading }) => {
  const dispatch = useDispatch();
  const resultsDisplay = useSelector(state => state.results.display);
  const petsError = useSelector(state => state.error.petsError);
  return (
    <>
      {pets.length > 0 ? (
        <>
          <Pagination currentPage={currentPage} />
          <button onClick={() => dispatch({ type: RESULTS_DISPLAY_GRID })}>
            Grid
          </button>
          <button onClick={() => dispatch({ type: RESULTS_DISPLAY_LIST })}>
            List
          </button>
          {petsLoading ? (
            <Spinner />
          ) : (
            <>
              {resultsDisplay === "grid" ? (
                <ResultsGrid pets={pets} />
              ) : (
                <ResultsList pets={pets} />
              )}
            </>
          )}
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
