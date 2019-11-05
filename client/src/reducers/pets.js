import { GET_PETS, GET_PET, CLEAR_PET } from "../actions/types";
const initialState = {
  pets: [],
  activePet: {}
};

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PETS:
      return { ...state, pets: [...action.payload] };
    case GET_PET:
      return { ...state, activePet: action.payload };
    case CLEAR_PET:
      return { ...state, activePet: {} };
    default:
      return state;
  }
}
