import {
  SET_MODAL_OPEN,
  SET_SIDEBAR_OPEN,
  SET_DISPLAY_MOBILE
} from "../actions/types";

const initialState = {
  modalIsOpen: false,
  sidebarIsOpen: false,
  isMobile: false
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { ...state, modalIsOpen: action.payload };
    case SET_SIDEBAR_OPEN:
      return { ...state, sidebarIsOpen: action.payload };
    case SET_DISPLAY_MOBILE:
      return { ...state, isMobile: action.payload };
    default:
      return state;
  }
}
