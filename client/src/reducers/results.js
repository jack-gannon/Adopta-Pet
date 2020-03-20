import { RESULTS_DISPLAY_GRID, RESULTS_DISPLAY_LIST } from "../actions/types";

const initialState = {
  display: "grid"
};

export default function resultsReducer(state = initialState, action) {
  switch (action.type) {
    case RESULTS_DISPLAY_GRID:
      return { ...state, display: "grid" };
    case RESULTS_DISPLAY_LIST:
      return { ...state, display: "list" };
    default:
      return state;
  }
}
