import React from "react";
import {
  profileSection,
  sectionHeader,
  sectionList,
  sectionItem,
  itemLabel,
  detailIcon,
  detailIconCheck,
  detailIconX
} from "../styles/component-modules/profileOverview.module.css";
import DetailIcon from "./DetailIcon";

const ProfileListOverview = ({ sections }) => {
  return (
    <>
      {sections &&
        sections.map(section => (
          <div className={profileSection} key={section.title}>
            <h3 className={sectionHeader}>{section.title}</h3>
            <ul className={sectionList}>
              {section.items.map(item => {
                let key = Object.keys(item);
                // Do not render items with a value of null
                return (
                  item[key] !== null && (
                    <li className={sectionItem} key={key}>
                      <p className={itemLabel}>
                        {key[0].replace(/_/g, " ").replace("slash", "/")}:
                      </p>
                      {typeof item[key] === "boolean" ? (
                        <DetailIcon
                          type={item[key] ? "check" : "x"}
                          className={`${detailIcon} ${
                            item[key] ? detailIconCheck : detailIconX
                          }`}
                        />
                      ) : (
                        <p>{item[key]}</p>
                      )}
                    </li>
                  )
                );
              })}
            </ul>
          </div>
        ))}
    </>
  );
};

export default ProfileListOverview;
