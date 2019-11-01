import React, { useState } from "react";
import { BrowserRouter as Link, NavLink } from "react-router-dom";
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
      <NavLink to="/">
        <h1>Logo</h1>
      </NavLink>
      <div className={navMenuMobile}>
        <button className={navMenuMobileToggle} onClick={() => toggleOpen()}>
          {isOpen ? "X" : "-"}
        </button>
        <nav className={isOpen ? navLinksMobileActive : navLinksMobileInactive}>
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
              <Link to="/saved" className={link} onClick={() => toggleOpen()}>
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
