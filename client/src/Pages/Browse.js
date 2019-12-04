import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { container } from "../styles/layout.module.css";
import { browseHeader } from "../styles/component-modules/browse.module.css";
import { getPetsWithFilter } from "../actions/pets";
import Filter from "../Components/Filter";
import Results from "../Components/Results";

const Browse = () => {
  // Application State
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  const petsLoading = useSelector(state => state.load.petsLoading);
  const currentPage = useSelector(state => state.page.currentPage);
  const typeFilter = useSelector(state => state.filter.type);
  const breedFilter = useSelector(state => state.filter.breed);
  const locationFilter = useSelector(state => state.filter.location);
  const locationFilterType = useSelector(state => state.filter.locationType);
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
      <h1 className={browseHeader}>Browse Pets</h1>
      <Filter
        filterObject={filterObject}
        locationFilter={locationFilter}
        locationFilterType={locationFilterType}
        typeFilter={typeFilter}
        breedFilter={breedFilter}
        genderFilter={genderFilter}
        currentPage={currentPage}
      />
      <Results
        currentPage={currentPage}
        pets={pets}
        petsLoading={petsLoading}
      />
    </div>
  );
};

export default Browse;
