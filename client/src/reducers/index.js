import { combineReducers } from "redux";
import pet from "./pets";
import filter from "./filter";
import load from "./loading";
import page from "./pagination";
import results from "./results";
import error from "./errors";
import display from "./display";

export default combineReducers({
  page,
  pet,
  load,
  filter,
  results,
  error,
  display
});
