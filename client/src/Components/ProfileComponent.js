import React from "react";
import {
  profileComponent,
  background,
  profileName,
  secondaryInfo,
  actionPanel,
  primaryAction,
  mainImg
} from "../styles/component-modules/profile.module.css";
import Placeholder from "../Components/Placeholder";
import ImageGallery from "../Components/ImageGallery";
import ProfileListOverview from "./ProfileListOverview";

const ProfileComponent = ({ activePet }) => {
  const { name, photos, type, breeds, species, url, sections } = activePet;
  return (
    <>
      <main className={profileComponent}>
        <svg className={background}>
          <rect></rect>
        </svg>
        {photos && photos.length > 0 ? (
          <ImageGallery photos={photos} type={type} />
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
