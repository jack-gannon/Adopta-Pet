import {
  SET_PETS_LOADING,
  SET_BREEDS_LOADING,
  SET_LOADING,
  PETS_LOAD_COMPLETE,
  BREEDS_LOAD_COMPLETE,
  LOAD_COMPLETE
} from "../actions/types";

const initialState = {
  applicationLoading: false,
  petsLoading: false,
  breedsLoading: false
};

export default function loadingReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PETS_LOADING:
      return { ...state, petsLoading: true };
    case SET_BREEDS_LOADING:
      return { ...state, breedsLoading: true };
    case SET_LOADING:
      return { ...state, applicationLoading: true };
    case PETS_LOAD_COMPLETE:
      return { ...state, petsLoading: false };
    case BREEDS_LOAD_COMPLETE:
      return { ...state, breedsLoading: false };
    case LOAD_COMPLETE:
      return { ...state, applicationLloading: false };
    default:
      return state;
  }
}
