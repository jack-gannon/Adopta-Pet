import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { SET_MODAL_OPEN } from "../../actions/types";
import {
  modal,
  modalContents,
  modalOuter,
  closeBtn
} from "../../styles/component-modules/modal.module.css";
const Modal = ({ toggleComponent, contentComponent, defaultOpen = false }) => {
  const [isOpen, setOpen] = useState(defaultOpen);
  const dispatch = useDispatch();

  const handleOpen = () => {
    setOpen(true);
    dispatch({ type: SET_MODAL_OPEN, payload: true });
  };

  const handleClose = () => {
    setOpen(false);
    dispatch({ type: SET_MODAL_OPEN, payload: false });
  };

  return (
    <div>
      {toggleComponent(() => handleOpen())}
      {isOpen ? (
        <div className={modal}>
          <div className={modalContents}>
            <button onClick={() => handleClose()} className={closeBtn}>
              &times;
            </button>
            {contentComponent(() => handleClose())}
          </div>
          <div className={modalOuter} onClick={() => handleClose()}></div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
