import { SET_MODAL_OPEN } from "../actions/types";

const initialState = {
  modalIsOpen: false
};

export default function displayReducer(state = initialState, action) {
  switch (action.type) {
    case SET_MODAL_OPEN:
      return { ...state, modalIsOpen: action.payload };
    default:
      return state;
  }
}
