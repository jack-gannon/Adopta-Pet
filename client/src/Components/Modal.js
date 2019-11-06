import React, { useState } from "react";
import {
  modal,
  modalContents,
  modalOuter,
  closeBtn
} from "../styles/component-modules/modal.module.css";
import { container } from "../styles/layout.module.css";
const Modal = ({ toggleText, toggleStyles, children }) => {
  const [isOpen, setOpen] = useState(true);
  const toggleOpen = () => {
    setOpen(!isOpen);
  };

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
