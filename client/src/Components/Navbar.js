import React, { useState } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CLEAR_PETS } from "../actions/types";
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
  const dispatch = useDispatch();
  const [isOpen, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen(!isOpen);
  };

  return (
    <div className={navbar}>
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <div className={navMenuMobile}>
        <button className={navMenuMobileToggle} onClick={() => toggleOpen()}>
          {isOpen ? "×" : "-"}
        </button>
        <nav className={isOpen ? navLinksMobileActive : navLinksMobileInactive}>
          <svg version="1.1" viewBox="0 0 32 12">
            <polygon points="0.95,12 16,0 30.95,12 " />
          </svg>
          <ul>
            <li>
              <NavLink to="/" className={link} onClick={() => toggleOpen()}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/browse"
                className={link}
                onClick={() => toggleOpen()}
              >
                Browse
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/favorites"
                className={link}
                onClick={() => {
                  toggleOpen();
                  dispatch({ type: CLEAR_PETS });
                }}
              >
                Favorites
              </NavLink>
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
              <Link to="/favorites" className={link}>
                Favorites
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
