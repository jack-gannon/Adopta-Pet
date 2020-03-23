import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { browseHeader } from "../styles/component-modules/browse.module.css";
import { getPetsWithFilter } from "../actions/pets";
import { getFavorites } from "../actions/pets";
import Layout from "../Components/Layout/Layout";
import Filter from "../Components/Browse/Filter/Filter";
import Results from "../Components/Browse/Results/Results";
import EmptyState from "../Components/Misc/EmptyState";
import ProfileComponent from "../Components/Profile/ProfileComponent";
import Spinner from "../Components/Misc/Spinner";

const Browse = () => {
  // Application State
  const dispatch = useDispatch();
  const pets = useSelector(state => state.pet.pets);
  const activePet = useSelector(state => state.pet.activePet);
  const petsLoading = useSelector(state => state.load.petsLoading);
  const petLoading = useSelector(state => state.load.petLoading);
  const currentPage = useSelector(state => state.page.currentPage);
  const typeFilter = useSelector(state => state.filter.type);
  const breedFilter = useSelector(state => state.filter.breed);
  const locationFilter = useSelector(state => state.filter.location);
  const locationFilterType = useSelector(state => state.filter.locationType);
  const genderFilter = useSelector(state => state.filter.gender);

  let filterObject = {
    zip: locationFilter,
    state: null,
    city: null,
    type: typeFilter,
    breed: breedFilter,
    gender: genderFilter
  };

  useEffect(() => {
    dispatch(getPetsWithFilter(filterObject, currentPage));
    dispatch(getFavorites());
  }, [
    currentPage,
    typeFilter,
    locationFilter,
    locationFilterType,
    breedFilter
  ]);

  return (
    <Layout
      sidebarComponent={
        petLoading ? (
          <Spinner />
        ) : activePet ? (
          <ProfileComponent activePet={activePet} />
        ) : (
          <EmptyState />
        )
      }
    >
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
    </Layout>
  );
};

export default Browse;
