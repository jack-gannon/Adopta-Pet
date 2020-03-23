import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import {
  main,
  container,
  sidebarOpen,
  sidebarClosed
} from "../../styles/layout.module.css";

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

      <Sidebar sidebarComponent={sidebarComponent} />
    </>
  );
};

export default Layout;
