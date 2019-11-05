import React from "react";
import {
  hero,
  heroDisplay,
  heroBlurb,
  textBox
} from "../styles/component-modules/hero.module.css";
import { container } from "../styles/layout.module.css";
import {
  btn,
  btnLarge,
  btnPrimary,
  btnRound
} from "../styles/buttons.module.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getPets } from "../actions/pets";

const Hero = () => {
  const dispatch = useDispatch();
  return (
    <header className={hero}>
      <div className={container}>
        <div className={textBox}>
          <h1 className={heroDisplay}>Adopta Pet</h1>
          <p className={heroBlurb}>
            Lots of pets are waiting to meet you. Find a pet to adopt today!
          </p>
          <Link
            to="/browse"
            onClick={() => dispatch(getPets())}
            className={`${btn} ${btnLarge} ${btnPrimary} ${btnRound}`}
          >
            Browse Pets
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
