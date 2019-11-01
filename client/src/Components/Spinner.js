import React from "react";
import {
  spinner,
  spinnerGraphic
} from "../styles/component-modules/spinner.module.css";
const Spinner = () => {
  return (
    <div className={spinner}>
      <svg className={spinnerGraphic} viewBox="0 0 100 100">
        <circle cx="50%" cy="50%" r="42"></circle>
      </svg>
    </div>
  );
};

export default Spinner;
