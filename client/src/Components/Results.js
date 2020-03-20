import React from "react";
import { useSelector } from "react-redux";
import Pagination from "./Pagination";
import Spinner from "./Spinner";
import ResultsGrid from "./ResultsGrid";
import ResultsList from "./ResultsList";
import EmptyState from "./EmptyState";
import ResultsDisplaySwitch from "./ResultsDisplaySwitch";

const Results = ({ pets, currentPage, petsLoading }) => {
  const resultsDisplay = useSelector(state => state.results.display);
  const petsError = useSelector(state => state.error.petsError);
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
                <ResultsGrid pets={pets} />
              ) : (
                <ResultsList pets={pets} />
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
