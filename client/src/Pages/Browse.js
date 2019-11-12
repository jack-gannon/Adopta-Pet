import React, { useEffect } from "react";
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
import { getPetsWithFilter } from "../actions/pets";

const Browse = () => {
  // Application State
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  const loading = useSelector(state => state.load.loading);
  const currentPage = useSelector(state => state.page.currentPage);
  const typeFilter = useSelector(state => state.filter.type);
  const breedFilter = useSelector(state => state.filter.breed);
  const locationFilter = useSelector(state => state.filter.location);
  const genderFilter = useSelector(state => state.filter.gender);

  const filterObject = {
    zip: locationFilter,
    state: null,
    city: null,
    type: typeFilter,
    breed: breedFilter,
    gender: genderFilter
  };

  useEffect(() => {
    dispatch(getPetsWithFilter(filterObject, currentPage));
  }, [currentPage]);

  return (
    <div className={container}>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 className={browseHeader}>Browse Pets</h1>
          <Filter currentPage={currentPage} filterObject={filterObject} />

          <ul className={browseList}>
            {pets ? (
              pets.map(pet => {
                return (
                  <li key={pet.id} className={browseListItem}>
                    <Link
                      to={`/pet/${pet.id}`}
                      onClick={() => dispatch({ type: CLEAR_PET })}
                    >
                      {pet.name} | {pet.type} | {pet.gender} |{" "}
                      {pet.contact.address.city} | {pet.contact.address.state}
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
