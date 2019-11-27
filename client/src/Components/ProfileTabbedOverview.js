import React, { useState } from "react";
import {
  overviewSectionsTabs,
  sectionTabActive,
  sectionTabInactive,
  sectionList,
  sectionItem,
  detailIcon,
  detailIconCheck,
  detailIconX
} from "../styles/component-modules/profile.module.css";
import DetailIcon from "./DetailIcon";

const ProfileTabbedOverview = ({ sections }) => {
  const [activeSectionIndex, setActiveSectionIndex] = useState(0);

  return (
    <>
      <div className={overviewSectionsTabs}>
        {sections.map((section, index) => {
          return (
            <button
              style={{ width: `${100 / sections.length}%` }}
              onClick={() => setActiveSectionIndex(index)}
              className={
                index === activeSectionIndex
                  ? sectionTabActive
                  : sectionTabInactive
              }
              key={index}
            >
              {section.title}
            </button>
          );
        })}
      </div>
      <div>
        <ul className={sectionList}>
          {sections &&
            sections[activeSectionIndex].items.map(item => {
              let key = Object.keys(item);
              return item[key] !== null ? (
                <li className={sectionItem} key={key}>
                  <p>{key[0].replace(/_/g, " ")}:</p>

                  <p>
                    {Array.isArray(item[key]) ? (
                      item[key]
                        .filter(word => word)
                        .map((word, index) => {
                          return index === item[key].length
                            ? word + ", "
                            : word;
                        })
                    ) : typeof item[key] === "boolean" ? (
                      <DetailIcon
                        type={item[key] ? "check" : "x"}
                        className={`${detailIcon} ${
                          item[key] ? detailIconCheck : detailIconX
                        }`}
                      />
                    ) : (
                      item[key]
                    )}
                  </p>
                </li>
              ) : null;
            })}
        </ul>
      </div>
    </>
  );
};

export default ProfileTabbedOverview;
