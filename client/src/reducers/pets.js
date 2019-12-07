import {
  GET_PETS,
  GET_PET,
  CLEAR_PET,
  CLEAR_PETS,
  ADD_FAVORITE,
  GET_FAVORITES,
  REMOVE_FAVORITE
} from "../actions/types";
const initialState = {
  pets: [],
  favorites: [],
  activePet: null
};

export default function petsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_PETS:
      return { ...state, pets: [...action.payload] };
    case GET_PET:
      return { ...state, activePet: action.payload };
    case CLEAR_PET:
      return { ...state, activePet: null };
    case CLEAR_PETS:
      return { ...state, pets: [] };
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    case GET_FAVORITES:
      return { ...state, favorites: [...action.payload] };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: [...state.favorites.filter(fav => fav !== action.payload)]
      };
    default:
      return state;
  }
}
