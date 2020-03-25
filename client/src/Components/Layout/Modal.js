import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SET_MODAL_OPEN, CLEAR_MODAL_COMPONENT } from "../../actions/types";
import FavoritesRemoveConfirm from "../Favorites/FavoritesRemoveConfirm";
import FilterMenuMobile from "../Browse/Filter/FilterMenuMobile";
import ImageGallery from "../Profile/ImageGallery";
import {
  modal,
  modalContents,
  modalOuter,
  closeBtn
} from "../../styles/component-modules/modal.module.css";
const Modal = ({ isOpen }) => {
  const modalComponent = useSelector(state => state.display.modalComponent);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch({ type: SET_MODAL_OPEN, payload: false });
    dispatch({ type: CLEAR_MODAL_COMPONENT });
  };

  return (
    <>
      {isOpen ? (
        <div className={modal}>
          <div className={modalContents}>
            <button onClick={() => handleClose()} className={closeBtn}>
              &times;
            </button>
            {modalComponent === "remove-favorites" ? (
              <FavoritesRemoveConfirm closeModal={() => handleClose()} />
            ) : modalComponent === "mobile-filter" ? (
              <FilterMenuMobile />
            ) : modalComponent === "image-gallery" ? (
              <ImageGallery />
            ) : null}
          </div>
          <div className={modalOuter} onClick={() => handleClose()}></div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
