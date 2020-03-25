import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Modal from "./Modal";
import Alerts from "./Alerts/Alerts";
import {
  main,
  container,
  sidebarOpen,
  sidebarClosed
} from "../../styles/layout.module.css";

const Layout = ({ children, sidebarComponent }) => {
  const sidebarIsOpen = useSelector(state => state.display.sidebarIsOpen);
  const modalIsOpen = useSelector(state => state.display.modalIsOpen);

  return (
    <>
      <main
        className={`${main} ${sidebarIsOpen ? sidebarOpen : sidebarClosed}`}
        style={{ transition: "width 500ms" }}
      >
        <div className={container}>{children}</div>
        <Alerts />
      </main>
      <Modal isOpen={modalIsOpen} />
      <Sidebar sidebarComponent={sidebarComponent} />
    </>
  );
};

export default Layout;
