import { GET_PETS, GET_PETS_ERROR } from "./types";
import axios from "axios";

export const getPets = () => async dispatch => {
  try {
    const res = axios.get("");
    dispatch({
      type: GET_PETS,
      payload: res.data
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_PETS_ERROR
    });
  }
};
