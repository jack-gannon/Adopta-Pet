import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  alertsDisplay,
  alertStack
} from "../../../styles/component-modules/alerts.module.css";
import AlertItem from "./AlertItem";
import { CSSTransition } from "react-transition-group";

const AlertsDisplay = ({ alerts }) => {
  const [currentAlert, setCurrentAlert] = useState(null);

  return (
    <CSSTransition
      in={alerts && alerts.length > 0}
      classNames="alert-display"
      timeout={250}
      unmountOnExit={true}
    >
      <div className={alertsDisplay}>
        <div className={alertStack}>
          {alerts.map((alert, index) => (
            <AlertItem
              alert={alert}
              key={alert.id}
              index={index}
              alertsLength={alerts.length}
              currentAlert={currentAlert}
              setCurrentAlert={setCurrentAlert}
              componentIdentifier={alert.componentIdentifier}
            />
          ))}
        </div>
      </div>
    </CSSTransition>
  );
};

export default AlertsDisplay;
