import {
  SET_TYPE_FILTER,
  SET_BREED_FILTER,
  SET_AVAILABLE_BREEDS
} from "../actions/types";
import axios from "axios";

export const setTypeFilter = value => dispatch => {
  dispatch({ type: SET_TYPE_FILTER, payload: value });
};

export const setBreedFilter = value => dispatch => {
  dispatch({ type: SET_BREED_FILTER, payload: value });
};

export const setAvailableBreeds = animalType => async dispatch => {
  try {
    const res = await axios.get(`/api/data/types/${animalType}/breeds`);
    dispatch({
      type: SET_AVAILABLE_BREEDS,
      payload: res.data
    });
  } catch (error) {}
};
