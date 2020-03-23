import React from "react";
import {
  actionPanel,
  primaryAction
} from "../../styles/component-modules/actionPanel.module.css";

const ProfileActionPanel = ({ activePet }) => {
  const { name, url } = activePet;
  return (
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
  );
};

export default ProfileActionPanel;
