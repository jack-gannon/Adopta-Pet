import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR_PETS } from "../actions/types";
import {
  profileComponent,
  backBtn,
  galleryToggle,
  background,
  profileName,
  secondaryInfo,
  actionPanel,
  primaryAction,
  mainImg
} from "../styles/component-modules/profile.module.css";
import Placeholder from "./Placeholder";
import ImagePanel from "./ImagePanel";
import ProfileListOverview from "./ProfileListOverview";
import Modal from "./Modal";
import ImageGallery from "./ImageGallery";

const ProfileComponent = ({ activePet }) => {
  const dispatch = useDispatch();
  const { name, photos, type, breeds, species, url, sections } = activePet;
  const [imageGalleryOpen, setImageGalleryOpen] = useState(false);
  return (
    <>
      <main className={profileComponent}>
        <Link to="/browse" onClick={() => dispatch({ type: CLEAR_PETS })}>
          <button className={backBtn}>&larr;</button>
        </Link>
        {photos && photos.length > 0 ? (
          <Modal
            toggleStyles={galleryToggle}
            toggleText="⊕"
            isOpen={imageGalleryOpen}
            toggleOpen={() => setImageGalleryOpen(!imageGalleryOpen)}
          >
            <ImageGallery photos={photos} />
          </Modal>
        ) : null}

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
        <ProfileListOverview sections={sections} />
      </main>
      <div className={actionPanel}>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className={primaryAction}
        >
          <button>
            Adopt <b>{name}</b>
          </button>
        </a>
      </div>
    </>
  );
};

export default ProfileComponent;
