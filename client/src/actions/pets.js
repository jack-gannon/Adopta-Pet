import {
  GET_PETS,
  GET_PET,
  GET_PETS_ERROR,
  SET_PETS_LOADING,
  PETS_LOAD_COMPLETE,
  LOAD_COMPLETE,
  SET_LOADING,
  GET_PAGE_COUNT
} from "./types";
import axios from "axios";
import { formatSearchFilter } from "../utils/formatSearchFilter";

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
  dispatch({ type: SET_PETS_LOADING });
  const { location, type, breed, gender } = formatSearchFilter({
    filter
  });
  try {
    const res = await axios.get(
      `/api/pets/search/${location}.${type}.${breed}.${gender}/${pageNumber}`
    );
    // Get all the pets from the server
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
    console.log(error);
  }
  dispatch({ type: PETS_LOAD_COMPLETE });
};

// Get single pet based on ID
export const getPet = id => async dispatch => {
  dispatch({ type: SET_LOADING });
  try {
    const res = await axios.get(`/api/pets/pet/${id}`);
    dispatch({
      type: GET_PET,
      payload: res.data
    });
    dispatch({ type: LOAD_COMPLETE });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR
    });
    dispatch({ type: LOAD_COMPLETE });
  }
};
