import React from "react";
import { useSelector } from "react-redux";
import {
  appContainer,
  scrollEnabled,
  scrollDisabled
} from "../styles/component-modules/appcontainer.module.css";

const AppContainer = ({ children }) => {
  const modalIsOpen = useSelector(state => state.display.modalIsOpen);

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
