import {
  SET_LOCATION_FILTER,
  SET_TYPE_FILTER,
  SET_BREED_FILTER,
  SET_GENDER_FILTER
} from "../actions/types";

const initialState = {
  location: null,
  type: null,
  breed: null,
  gender: null
};

export default function filterReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOCATION_FILTER:
      return { ...state, location: action.payload };
    case SET_TYPE_FILTER:
      return { ...state, type: action.payload };
    case SET_BREED_FILTER:
      return { ...state, breed: action.payload };
    case SET_GENDER_FILTER:
      return { ...state, gender: action.payload };
    default:
      return state;
  }
}
