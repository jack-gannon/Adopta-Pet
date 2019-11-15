import React, { useState } from "react";
import { useDispatch } from "react-redux";
import ResultsGrid from "./ResultsGrid";
import ResultsList from "./ResultsList";

const Results = ({ pets }) => {
  const [displayType, setDisplayType] = useState("grid");

  return (
    <>
      <button onClick={() => setDisplayType("grid")}>Grid</button>
      <button onClick={() => setDisplayType("list")}>List</button>
      {displayType === "grid" ? (
        <ResultsGrid pets={pets} />
      ) : (
        <ResultsList pets={pets} />
      )}
    </>
  );
};

export default Results;
