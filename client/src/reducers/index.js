import { combineReducers } from "redux";
import pet from "./pets";
import filter from "./filter";
import load from "./loading";
import page from "./pagination";

export default combineReducers({
  page,
  pet,
  load,
  filter
});
