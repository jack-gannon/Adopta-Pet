import { combineReducers } from "redux";
import pet from "./pets";
import filter from "./filter";
import load from "./loading";

export default combineReducers({
  pet,
  load,
  filter
});
