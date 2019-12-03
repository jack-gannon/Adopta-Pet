import { GET_PET_ERROR, GET_PETS_ERROR } from "../actions/types";

const initialState = {
  petError: null,
  petsError: null
};

export default function errorReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PET_ERROR:
      return { ...state, petError: action.payload };
    case GET_PETS_ERROR:
      return { ...state, petsError: action.payload };
    default:
      return state;
  }
}
