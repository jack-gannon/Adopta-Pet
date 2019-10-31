import { GET_PETS, GET_PETS_ERROR } from "./types";
import axios from "axios";

export const getPets = ({ filters }) => async dispatch => {
  try {
    const res = await axios.get("/api/pets");
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
