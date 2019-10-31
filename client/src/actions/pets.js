import { GET_PETS, GET_PET, GET_PETS_ERROR } from "./types";
import axios from "axios";

export const getPets = () => async dispatch => {
  try {
    const res = await axios.get("/api/pets");
    dispatch({
      type: GET_PETS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR,
      payload: error.message
    });
  }
};

export const getPet = id => async dispatch => {
  try {
    const res = await axios.get(`/api/pets/pet/${id}`);
    dispatch({
      type: GET_PET,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR
    });
  }
};
