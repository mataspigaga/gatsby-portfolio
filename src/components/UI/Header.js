import React from "react";
import { Link } from "gatsby";
import logo from "../../site-assets/mp-logo-dark-inline.svg";
import "@fontsource/pacifico";
import * as classes from "./Layout.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo" className={classes.headerLogo} />
      </Link>
      <nav>
        {/* <h1 className={classes.heading}>{pageTitle}</h1> */}
        <ul className={classes.navLinks}>
          <li>
            <Link to="/#about" className={classes.navLinkText}>
              About
            </Link>
          </li>
          <li>
            <Link to="/posts" className={classes.navLinkText}>
              Posts
            </Link>
          </li>
        </ul>
      </nav>
      <a href="https://twitter.com/mataspigaga/" className={classes.contact}>
        Say Hi
      </a>
    </header>
  );
};

export default Header;
