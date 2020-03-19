import React from "react";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { removeAllFavorites } from "../actions/pets";
import {
  removeAllBtn,
  removeConfirmControls,
  removeConfirmText,
  confirmHeader,
  confirmSubheader,
  removeAllConfirm,
  removeAllCancel
} from "../styles/component-modules/favoritesRemove.module.css";

const FavoritesRemove = () => {
  return (
    <Modal
      toggleComponent={openModal => <RemoveButton openModal={openModal} />}
      contentComponent={closeModal => <RemoveConfirm closeModal={closeModal} />}
    />
  );
};

const RemoveButton = ({ openModal }) => {
  return (
    <button className={removeAllBtn} onClick={openModal}>
      × Remove All
    </button>
  );
};

const RemoveConfirm = ({ closeModal }) => {
  const dispatch = useDispatch();
  const handleRemoveAll = () => {
    dispatch(removeAllFavorites());
    closeModal();
  };

  return (
    <>
      <div className={removeConfirmText}>
        <h3 className={confirmHeader}>Are You Sure?</h3>
        <p className={confirmSubheader}>
          Please confirm that you want to remove all pets from your favorites
          list.
        </p>
      </div>
      <div className={removeConfirmControls}>
        <button className={removeAllCancel} onClick={closeModal}>
          × Cancel
        </button>
        <button className={removeAllConfirm} onClick={() => handleRemoveAll()}>
          Remove All
        </button>
      </div>
    </>
  );
};

export default FavoritesRemove;
