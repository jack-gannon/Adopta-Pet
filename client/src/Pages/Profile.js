import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPet } from "../actions/pets";

const Profile = ({ id }) => {
  const dispatch = useDispatch();
  const pet = useSelector(state => state.pet.activePet);
  useEffect(() => {
    dispatch(getPet(id));
  }, [dispatch]);
  return <div>{pet.name ? pet.name : "Loading Pet"}</div>;
};

export default Profile;
