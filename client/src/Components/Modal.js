import React, { useState } from "react";
import {
  modal,
  modalContents,
  modalOuter,
  closeBtn
} from "../styles/component-modules/modal.module.css";
const Modal = ({
  toggleText,
  toggleStyles,
  children,
  isOpen,
  setOpen,
  toggleOpen
}) => {
  return (
    <div>
      <button onClick={() => toggleOpen()} className={toggleStyles}>
        {toggleText}
      </button>
      {isOpen ? (
        <div className={modal}>
          <div className={modalContents}>
            <button onClick={() => toggleOpen()} className={closeBtn}>
              &times;
            </button>
            {children}
          </div>
          <div className={modalOuter} onClick={() => toggleOpen()}></div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
