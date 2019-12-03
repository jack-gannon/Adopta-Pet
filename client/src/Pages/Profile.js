import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPet } from "../actions/pets";
import { CLEAR_PET } from "../actions/types";
import { container } from "../styles/layout.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import ProfileComponent from "../Components/ProfileComponent";

const Profile = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const petLoading = useSelector(state => state.load.petLoading);
  const activePet = useSelector(state => state.pet.activePet);
  useEffect(() => {
    dispatch(getPet(id));

    // Cleanup Function
    return () => {
      dispatch({ type: CLEAR_PET });
    };
  }, [dispatch, id]);

  return (
    <div className={container}>
      {petLoading || !activePet ? (
        <Spinner />
      ) : (
        <>
          <ProfileComponent activePet={activePet} />
        </>
      )}
    </div>
  );
};

export default Profile;
