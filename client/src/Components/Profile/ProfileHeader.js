import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CLEAR_PETS } from "../../actions/types";
import ImagePanel from "./ImagePanel";
import Placeholder from "../Misc/Placeholder";
import { mainImg } from "../../styles/component-modules/imagePanel.module.css";
import {
  profileHeader,
  backBtn,
  background,
  profileName,
  secondaryInfo
} from "../../styles/component-modules/profileHeader.module.css";

const ProfileHeader = ({ activePet }) => {
  const { name, photos, type, breeds, species } = activePet;
  const dispatch = useDispatch();

  return (
    <div className={profileHeader}>
      <Link to="/browse" onClick={() => dispatch({ type: CLEAR_PETS })}>
        <button className={backBtn}>&larr;</button>
      </Link>
      <svg className={background}>
        <rect></rect>
      </svg>
      {photos && photos.length > 0 ? (
        <ImagePanel photos={photos} type={type} />
      ) : (
        <Placeholder type={type} className={mainImg} />
      )}
      <h1 className={profileName}>{name}</h1>
      <p className={secondaryInfo}>
        {breeds.primary === species
          ? species
          : `${species} | ${breeds.primary}`}
      </p>
    </div>
  );
};

export default ProfileHeader;
