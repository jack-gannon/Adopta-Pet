import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { container } from "../styles/layout.module.css";
import {
  browseHeader,
  browseList,
  browseListItem
} from "../styles/component-modules/browse.module.css";
import { CLEAR_PET } from "../actions/types";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";
import Filter from "../Components/Filter";

const Browse = () => {
  // Application State
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  const loading = useSelector(state => state.load.loading);

  return (
    <div className={container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={browseHeader}>Browse Pets</h1>
          <Filter />
          <ul className={browseList}>
            {pets ? (
              pets.map(pet => {
                return (
                  <li key={pet.id} className={browseListItem}>
                    <Link
                      to={`/pet/${pet.id}`}
                      onClick={() => dispatch({ type: CLEAR_PET })}
                    >
                      {pet.name}
                    </Link>
                  </li>
                );
              })
            ) : (
              <li>No Pets!</li>
            )}
          </ul>
        </>
      )}
    </div>
  );
};

export default Browse;
