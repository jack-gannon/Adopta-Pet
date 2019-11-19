import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPet } from "../actions/pets";
import { h1 } from "../styles/type.module.css";
import { useParams } from "react-router-dom";
import Spinner from "../Components/Spinner";
import { formatAnimalName } from "../utils/formatAnimalName";

const Profile = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const loading = useSelector(state => state.load.loading);
  const pet = useSelector(state => state.pet.activePet);
  useEffect(() => {
    dispatch(getPet(id));
    console.log(pet);
  }, [dispatch, id]);
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <>
          <h1 style={{ paddingTop: "4rem", color: "#000" }} className={h1}>
            {pet.name}
          </h1>
        </>
      )}
    </div>
  );
};

export default Profile;
