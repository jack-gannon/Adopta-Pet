import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { removeAlert } from "../../../actions/display";
import {
  alertItem,
  alertDefault,
  closeBtn
} from "../../../styles/component-modules/alerts.module.css";
import FavoriteAlert from "./FavoriteAlert";
import { CSSTransition } from "react-transition-group";

const AlertItem = ({ alert, index, alertsLength }) => {
  const [isRendered, setRendered] = useState(false);
  const { componentIdentifier } = alert;
  const dispatch = useDispatch();

  useEffect(() => {
    setRendered(true);
    setTimeout(() => setRendered(false), 5000);
  }, []);

  return (
    <CSSTransition
      in={isRendered}
      timeout={500}
      classNames="alert"
      onExited={() => dispatch(removeAlert(alert))}
    >
      <div className={`${alertItem} ${alertDefault}`}>
        {componentIdentifier === "add-favorite-alert" ? (
          <FavoriteAlert alert={alert} type="add" />
        ) : componentIdentifier === "remove-favorite-alert" ? (
          <FavoriteAlert alert={alert} type="remove" />
        ) : null}
        <button
          className={closeBtn}
          onClick={() => dispatch(removeAlert(alert))}
        >
          ×
        </button>
      </div>
    </CSSTransition>
  );
};

export default AlertItem;
