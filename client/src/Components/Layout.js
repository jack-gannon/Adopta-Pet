import React from "react";
import { useSelector } from "react-redux";
import { CSSTransition } from "react-transition-group";
import {
  main,
  container,
  sidebar,
  sidebarOpen,
  sidebarClosed,
  sidebarHide,
  sidebarShow
} from "../styles/layout.module.css";

const Layout = ({ children, sidebarComponent }) => {
  const sidebarIsOpen = useSelector(state => state.display.sidebarIsOpen);

  return (
    <>
      <main
        className={`${sidebarIsOpen ? sidebarOpen : sidebarClosed}`}
        style={{ transition: "width 500ms" }}
      >
        <div className={container}>{children}</div>
      </main>

      <div
        className={`${sidebar} ${sidebarIsOpen ? sidebarShow : sidebarHide}`}
        style={{ transition: "transform 500ms" }}
      >
        {sidebarComponent}
      </div>
    </>
  );
};

export default Layout;
