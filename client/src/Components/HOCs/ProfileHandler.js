import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Misc/Spinner";
import EmptyState from "../Misc/EmptyState";
import ProfileComponent from "../Profile/ProfileComponent";

const ProfileHandler = () => {
  const petLoading = useSelector(state => state.load.petLoading);
  const activePet = useSelector(state => state.pet.activePet);

  return (
    <>
      {petLoading ? (
        <Spinner />
      ) : activePet ? (
        <ProfileComponent activePet={activePet} />
      ) : (
        <EmptyState />
      )}
    </>
  );
};

export default ProfileHandler;
