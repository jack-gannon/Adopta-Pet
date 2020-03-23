import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SET_SIDEBAR_OPEN } from "../../actions/types";
import {
  sidebar,
  closeSidebar,
  sidebarHide,
  sidebarShow
} from "../../styles/layout.module.css";

const Sidebar = ({ sidebarComponent }) => {
  const sidebarIsOpen = useSelector(state => state.display.sidebarIsOpen);
  const dispatch = useDispatch();

  const handleCloseSidebar = () => {
    dispatch({ type: SET_SIDEBAR_OPEN, payload: false });
  };

  return (
    <div
      className={`${sidebar} ${sidebarIsOpen ? sidebarShow : sidebarHide}`}
      style={{ transition: "transform 500ms" }}
    >
      <button className={closeSidebar} onClick={() => handleCloseSidebar()}>
        ×
      </button>
      {sidebarComponent}
    </div>
  );
};

export default Sidebar;
