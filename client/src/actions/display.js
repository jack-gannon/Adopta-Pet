import {
  SET_MODAL_OPEN,
  SET_SIDEBAR_OPEN,
  SET_DISPLAY_MOBILE
} from "../actions/types";

export const setModalOpen = value => dispatch => {
  dispatch({ type: SET_MODAL_OPEN, payload: value });
};

export const setSidebarOpen = value => dispatch => {
  dispatch({ type: SET_SIDEBAR_OPEN, payload: value });
};

export const setDisplayMobile = value => dispatch => {
  dispatch({ type: SET_DISPLAY_MOBILE, payload: value });
};
