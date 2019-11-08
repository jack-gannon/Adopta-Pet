import {
  APPLY_FILTER,
  SET_TYPE_FILTER,
  SET_BREED_FILTER,
  SET_LOADING,
  LOAD_COMPLETE,
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

// //Get all pets
// export const getPets = () => async dispatch => {
//   dispatch({ type: SET_LOADING });
//   try {
//     const res = await axios.get("/api/pets");
//     dispatch({
//       type: GET_PETS,
//       payload: res.data
//     });
//     dispatch({ type: LOAD_COMPLETE });
//   } catch (error) {
//     console.log(error);
//     dispatch({
//       type: GET_PETS_ERROR,
//       payload: error.message
//     });
//     dispatch({ type: LOAD_COMPLETE });
//   }
// };
