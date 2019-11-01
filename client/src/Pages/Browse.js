import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { h3, sansSerif, bold } from "../styles/type.module.css";
import { container } from "../styles/layout.module.css";
import {
  browseList,
  browseListItem
} from "../styles/component-modules/browse.module.css";
import { getPets } from "../actions/pets";
import { Link } from "react-router-dom";
import Spinner from "../Components/Spinner";

const Browse = () => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  const loading = useSelector(state => state.load.loading);
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  return (
    <div className={container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={`${h3} ${sansSerif} ${bold}`}>Browse Pets</h1>
          <ul className={browseList}>
            {pets ? (
              pets.map(pet => {
                return (
                  <li key={pet.id} className={browseListItem}>
                    <Link to={`/pet/${pet.id}`}>{pet.name}</Link>
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
