import * as React from "react";
import { Link } from "gatsby";
import * as classes from "./Layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={classes.container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={classes.navLinks}>
          <li>
            <Link to="/" className={classes.navLinkText}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.navLinkText}>
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
      <main>
        <h1 className={classes.heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
