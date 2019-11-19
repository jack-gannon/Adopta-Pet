import {
  SET_PAGE,
  NEXT_PAGE,
  PREVIOUS_PAGE,
  GET_PAGE_COUNT
} from "../actions/types";

const initialState = {
  currentPage: 1,
  pageCount: 0
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PAGE:
      return { ...state, currentPage: action.payload };
    case NEXT_PAGE:
      return { ...state, currentPage: state.currentPage + 1 };
    case PREVIOUS_PAGE:
      return { ...state, currentPage: state.currentPage - 1 };
    case GET_PAGE_COUNT:
      return { ...state, pageCount: action.payload };
    default:
      return state;
  }
}
