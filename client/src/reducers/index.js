import { combineReducers } from "redux";
import pet from "./pets";
import filter from "./filter";

export default combineReducers({
  pet,
  filter
});
