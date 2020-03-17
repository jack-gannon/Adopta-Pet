import { SET_MODAL_OPEN } from "../actions/types";

export const setModalOpen = value => dispatch => {
  dispatch({ type: SET_MODAL_OPEN, payload: value });
};
