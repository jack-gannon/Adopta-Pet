import {
  GET_PETS,
  GET_PET,
  GET_PETS_ERROR,
  LOAD_COMPLETE,
  SET_LOADING
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
export const getPetsWithFilter = (filter, currentPage) => async dispatch => {
  dispatch({ type: SET_LOADING });
  const { location, type, breed, gender } = formatSearchFilter({
    filter
  });
  try {
    const res = await axios.get(
      `/api/pets/search/${location}.${type}.${breed}.${gender}/${currentPage}`
    );
    console.log(currentPage + " is the requested page");
    dispatch({ type: GET_PETS, payload: res.data });
  } catch (error) {
    console.log(error);
  }
  dispatch({ type: LOAD_COMPLETE });
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
