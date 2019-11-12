import { NEXT_PAGE, PREVIOUS_PAGE } from "../actions/types";

const initialState = {
  currentPage: 1
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    default:
      return state;
  }
}
