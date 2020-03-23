import {
  GET_PETS,
  GET_PET,
  GET_PETS_ERROR,
  SET_PETS_LOADING,
  PETS_LOAD_COMPLETE,
  SET_PET_LOADING,
  PET_LOAD_COMPLETE,
  LOAD_COMPLETE,
  SET_LOADING,
  GET_PAGE_COUNT,
  ADD_FAVORITE,
  GET_FAVORITES,
  REMOVE_FAVORITE,
  REMOVE_ALL_FAVORITES
} from "./types";
import axios from "axios";
import { formatSearchFilter } from "../utils/formatSearchFilter";
import { addToLocalStorage } from "../utils/addToLocalStorage";
import { removeFromLocalStorage } from "../utils/removeFromLocalStorage";

// Get all pets
export const getPets = () => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await axios.get("/api/pets");
    dispatch({
      type: GET_PETS,
      payload: res.data
    });
    dispatch({ type: LOAD_COMPLETE });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR,
      payload: error.message
    });
    dispatch({ type: LOAD_COMPLETE });
  }
};

// Get pets with filter
export const getPetsWithFilter = (filter, pageNumber) => async dispatch => {
  console.log({ filter });
  dispatch({ type: SET_PETS_LOADING });
  const { location, type, breed, gender } = formatSearchFilter({
    filter
  });
  try {
    const res = await axios.get(
      `/api/pets/search/${location}.${type}.${breed}.${gender}/${pageNumber}`
    );
    // Get all the pets that match the criteria from the server
    dispatch({
      type: GET_PETS,
      payload: res.data.animals
    });

    // Get total page count from server response
    dispatch({
      type: GET_PAGE_COUNT,
      payload: res.data.pagination.total_pages
    });
  } catch (error) {
    dispatch({
      type: GET_PETS_ERROR,
      payload: error
    });
    console.log(error);
  }
  dispatch({ type: PETS_LOAD_COMPLETE });
};

// Get single pet based on ID
export const getPet = id => async dispatch => {
  dispatch({ type: SET_PET_LOADING });
  try {
    const res = await axios.get(`/api/pets/pet/${id}`);
    dispatch({
      type: GET_PET,
      payload: res.data
    });
    dispatch({ type: PET_LOAD_COMPLETE });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR
    });
    dispatch({ type: PET_LOAD_COMPLETE });
  }
};

// Add pet to favorites
export const addFavorite = petObj => async dispatch => {
  try {
    addToLocalStorage("favorites", petObj, petObj.id);
    dispatch({ type: ADD_FAVORITE, payload: petObj });
  } catch (error) {
    console.log(error);
  }
};

// Get all favorited pets
export const getFavorites = () => async dispatch => {
  try {
    let favorites = localStorage.getItem("favorites");
    favorites
      ? dispatch({ type: GET_FAVORITES, payload: JSON.parse(favorites) })
      : addToLocalStorage("favorites", "{}");
  } catch (error) {
    console.log(error);
  }
};

// Remove pet from favorites
export const removeFavorite = petId => async dispatch => {
  try {
    removeFromLocalStorage("favorites", petId);
    let favorites = localStorage.getItem("favorites");
    dispatch({ type: REMOVE_FAVORITE, payload: JSON.parse(favorites) });
  } catch (error) {
    console.log(error);
  }
};

// Remove all favorites
export const removeAllFavorites = () => async dispatch => {
  try {
    localStorage.setItem("favorites", "{}");
    dispatch({ type: REMOVE_ALL_FAVORITES });
  } catch (error) {
    console.log(error);
  }
};
