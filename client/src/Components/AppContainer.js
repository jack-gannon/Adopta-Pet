import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_DISPLAY_MOBILE } from "../actions/types";
import {
  appContainer,
  scrollEnabled,
  scrollDisabled
} from "../styles/component-modules/appcontainer.module.css";

const AppContainer = ({ children }) => {
  const modalIsOpen = useSelector(state => state.display.modalIsOpen);
  const isMobile = useSelector(state => state.display.isMobile);
  const dispatch = useDispatch();

  const handleCheckDisplay = () => {
    if (isMobile === false && window.matchMedia("(max-width: 960px").matches) {
      dispatch({ type: SET_DISPLAY_MOBILE, payload: true });
    } else if (isMobile && window.matchMedia("(min-width: 961px").matches) {
      dispatch({ type: SET_DISPLAY_MOBILE, payload: false });
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleCheckDisplay);
    return () => window.removeEventListener("resize", handleCheckDisplay);
  });

  return (
    <div
      className={`${appContainer} ${
        modalIsOpen ? scrollDisabled : scrollEnabled
      }`}
    >
      {children}
    </div>
  );
};

export default AppContainer;
