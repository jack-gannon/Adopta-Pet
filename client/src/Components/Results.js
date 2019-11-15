import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RESULTS_DISPLAY_GRID, RESULTS_DISPLAY_LIST } from "../actions/types";
import ResultsGrid from "./ResultsGrid";
import ResultsList from "./ResultsList";

const Results = ({ pets }) => {
  const dispatch = useDispatch();
  const resultsDisplay = useSelector(state => state.results.display);
  return (
    <>
      <button onClick={() => dispatch({ type: RESULTS_DISPLAY_GRID })}>
        Grid
      </button>
      <button onClick={() => dispatch({ type: RESULTS_DISPLAY_LIST })}>
        List
      </button>
      {resultsDisplay === "grid" ? (
        <ResultsGrid pets={pets} />
      ) : (
        <ResultsList pets={pets} />
      )}
    </>
  );
};

export default Results;
