import React from "react";
import {
  RESULTS_DISPLAY_GRID,
  RESULTS_DISPLAY_LIST
} from "../../../actions/types";
import { useDispatch, useSelector } from "react-redux";
import {
  switchPanel,
  resultsSwitch,
  active,
  inactive
} from "../../../styles/component-modules/resultsDisplaySwitch.module.css";

const ResultsDisplaySwitch = () => {
  const dispatch = useDispatch();
  const resultsDisplay = useSelector(state => state.results.display);

  return (
    <div className={switchPanel}>
      <button
        title="Display as Grid"
        className={`${resultsSwitch} ${
          resultsDisplay === "grid" ? active : inactive
        }`}
        onClick={() => dispatch({ type: RESULTS_DISPLAY_GRID })}
      >
        <svg viewBox="0 0 24 24">
          <path d="M10,11H3c-0.55,0-1-0.45-1-1V3c0-0.55,0.45-1,1-1h7c0.55,0,1,0.45,1,1v7C11,10.55,10.55,11,10,11z" />
          <path d="M21,11h-7c-0.55,0-1-0.45-1-1V3c0-0.55,0.45-1,1-1h7c0.55,0,1,0.45,1,1v7C22,10.55,21.55,11,21,11z" />
          <path d="M10,22H3c-0.55,0-1-0.45-1-1v-7c0-0.55,0.45-1,1-1h7c0.55,0,1,0.45,1,1v7C11,21.55,10.55,22,10,22z" />
          <path d="M21,22h-7c-0.55,0-1-0.45-1-1v-7c0-0.55,0.45-1,1-1h7c0.55,0,1,0.45,1,1v7C22,21.55,21.55,22,21,22z" />
        </svg>
      </button>
      <button
        title="Display as List"
        className={`${resultsSwitch} ${
          resultsDisplay === "list" ? active : inactive
        }`}
        onClick={() => dispatch({ type: RESULTS_DISPLAY_LIST })}
      >
        <svg viewBox="0 0 24 24">
          <path d="M21,11H3c-0.55,0-1-0.45-1-1V9c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1v1C22,10.55,21.55,11,21,11z" />
          <path d="M21,6H3C2.45,6,2,5.55,2,5V4c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1v1C22,5.55,21.55,6,21,6z" />
          <path d="M21,16H3c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1v1C22,15.55,21.55,16,21,16z" />
          <path d="M21,21H3c-0.55,0-1-0.45-1-1v-1c0-0.55,0.45-1,1-1h18c0.55,0,1,0.45,1,1v1C22,20.55,21.55,21,21,21z" />
        </svg>
      </button>
    </div>
  );
};

export default ResultsDisplaySwitch;
