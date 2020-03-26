import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeAlert } from "../../../actions/display";
import {
  alertItem,
  alertEntered,
  alertDefault,
  closeBtn
} from "../../../styles/component-modules/alerts.module.css";
import FavoriteAlert from "./FavoriteAlert";
import { CSSTransition } from "react-transition-group";

const AlertItem = ({ alert, index, currentAlert, setCurrentAlert }) => {
  // Detects when component has rendered.
  // Required for transitioning in and out.
  const [isRendered, setRendered] = useState(false);
  const { componentIdentifier } = alert;
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentAlert(alert.id);
    setRendered(true);
    let autoRemoveTimer = setTimeout(() => setRendered(false), 5000);

    // Cleanup function
    return () => {
      clearTimeout(autoRemoveTimer);
    };
  }, []);

  return (
    <CSSTransition
      in={isRendered && alert.id === currentAlert}
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
