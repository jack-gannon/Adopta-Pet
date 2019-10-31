import React, { useState } from "react";
import { Link } from "@reach/router";
import { link } from "../styles/type.module.css";
import {
  navbar,
  navMenuMobile,
  navMenuMobileToggle,
  navLinksMobileActive,
  navLinksMobileInactive,
  navMenuDesktop,
  navLinksDesktop
} from "../styles/component-modules/navbar.module.css";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={navbar}>
      <Link to="/">
        <h1>Logo</h1>
      </Link>
      <div className={navMenuMobile}>
        <button className={navMenuMobileToggle} onClick={() => toggleOpen()}>
          {isOpen ? "X" : "-"}
        </button>
        <nav className={isOpen ? navLinksMobileActive : navLinksMobileInactive}>
          <ul>
            <li>
              <Link to="/" className={link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse" className={link}>
                Browse
              </Link>
            </li>
            <li>
              <Link to="/saved" className={link}>
                Saved
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={navMenuDesktop}>
        <nav className={navLinksDesktop}>
          <ul>
            <li>
              <Link to="/" className={link}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/browse" className={link}>
                Browse
              </Link>
            </li>
            <li>
              <Link to="/saved" className={link}>
                Saved
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
