import React from "react";
import { profileComponent } from "../../styles/component-modules/profile.module.css";
import ProfileHeader from "./ProfileHeader";
import ProfileListOverview from "./ProfileListOverview";
import ProfileActionPanel from "./ProfileActionPanel";

const ProfileComponent = ({ activePet }) => {
  return (
    <>
      <main className={profileComponent}>
        <ProfileHeader activePet={activePet} />
        <ProfileListOverview sections={activePet.sections} />
      </main>
      <ProfileActionPanel activePet={activePet} />
    </>
  );
};

export default ProfileComponent;
