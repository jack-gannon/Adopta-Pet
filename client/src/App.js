import React from "react";
import "./styles/global.css";
import { h1, sansSerif, p, small, link } from "./styles/type.module.css";
import {
  btn,
  btnRound,
  btnPrimary,
  btnPrimaryOutline
} from "./styles/buttons.module.css";

import { container } from "./styles/layout.module.css";

function App() {
  return (
    <div className="App">
      <div className={container}>
        <h1 className={`${h1} ${sansSerif}`}>Hello world!</h1>
        <p className={`${p} ${sansSerif}`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <p className={small}>
          *Here is some small text that might be like a disclaimer or something.
        </p>
        <button className={btn}>Button</button>
        <button className={`${btn} ${btnRound}`}>Button - Round</button>
        <a className={`${btn} ${btnRound}`} href="">
          Button - Round - Link
        </a>
        <button className={`${btn} ${btnPrimary} ${btnRound}`}>
          Button - Primary
        </button>
        <button className={`${btn} ${btnPrimaryOutline}`}>
          Button - Primary - Outline
        </button>
        <a href="" className={link}>
          Link
        </a>
      </div>
    </div>
  );
}

export default App;
