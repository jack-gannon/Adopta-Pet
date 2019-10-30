import { GET_PETS } from "../actions/types";

export default function petsReducer(state = [], action) {
  switch (action.type) {
    case GET_PETS:
      return [...state];
    default:
      return state;
  }
}
