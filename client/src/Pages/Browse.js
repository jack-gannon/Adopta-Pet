import React from "react";
import { h3, sansSerif, bold } from "../styles/type.module.css";
import { container } from "../styles/layout.module.css";

const Browse = () => {
  return (
    <div className={container}>
      <h1 className={`${h3} ${sansSerif} ${bold}`}>Browse Pets</h1>
    </div>
  );
};

export default Browse;
