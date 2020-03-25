import React from "react";
import { useDispatch } from "react-redux";
import { openModalWithComponent } from "../../actions/display";
import { removeAllBtn } from "../../styles/component-modules/favoritesRemove.module.css";

const FavoritesRemoveButton = () => {
  const dispatch = useDispatch();

  const handleOpenConfirmAll = () => {
    dispatch(openModalWithComponent("remove-favorites"));
  };

  return (
    <button className={removeAllBtn} onClick={() => handleOpenConfirmAll()}>
      × Remove All
    </button>
  );
};

export default FavoritesRemoveButton;
