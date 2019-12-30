import React from "react";
import {
  emptyState,
  header,
  text
} from "../styles/component-modules/emptyState.module.css";

const errorEmptyState = (
  <div className={emptyState}>
    <h4 className={header}>Oops!</h4>
    <p className={text}>Something went wrong.</p>
  </div>
);

const noFavoritesEmptyState = (
  <div className={emptyState}>
    <h4 className={header}>No Favorites</h4>
    <p className={text}>
      You don't have any favorites yet. Click on the favorite icon to add a pet
      to your favorites
    </p>
  </div>
);

const noResultsEmptyState = (
  <div className={emptyState}>
    <h4 className={header}>No Results Found</h4>
    <p className={text}>
      Your search did not return any results. Please try again.
    </p>
  </div>
);

const EmptyState = ({ type }) => {
  return type === "error"
    ? errorEmptyState
    : type === "favorites"
    ? noFavoritesEmptyState
    : noResultsEmptyState;
};

export default EmptyState;
