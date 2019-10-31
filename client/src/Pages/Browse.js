import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { h3, sansSerif, bold } from "../styles/type.module.css";
import { container } from "../styles/layout.module.css";
import { getPets } from "../actions/pets";
import { Link } from "@reach/router";

const Browse = () => {
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  useEffect(() => {
    dispatch(getPets());
  }, [dispatch]);

  return (
    <div className={container}>
      <h1 className={`${h3} ${sansSerif} ${bold}`}>Browse Pets</h1>
      <ul>
        {pets ? (
          pets.map(pet => {
            return (
              <li key={pet.id}>
                <Link to={`/pet/${pet.id}`}>{pet.name}</Link>
              </li>
            );
          })
        ) : (
          <li>No Pets!</li>
        )}
      </ul>
    </div>
  );
};

export default Browse;
