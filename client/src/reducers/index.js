import { combineReducers } from "redux";
import pet from "./pets";
import filter from "./filter";
import load from "./loading";
import page from "./pagination";
import results from "./results";

export default combineReducers({
  page,
  pet,
  load,
  filter,
  results
});
