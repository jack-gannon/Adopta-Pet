import { SET_LOADING, LOAD_COMPLETE } from "../actions/types";

const initialState = {
  loading: false
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case LOAD_COMPLETE:
      return { ...state, loading: false };
    default:
      return state;
  }
}
