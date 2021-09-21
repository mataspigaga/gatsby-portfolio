import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as classes from "./Layout.module.css";
import Logo from "../../images/logo.svg";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={classes.container}>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <header>
        <Link to="/">
          <img src={Logo} alt="logo" />{" "}
        </Link>
        <nav>
          {/* <h1 className={classes.heading}>{pageTitle}</h1> */}
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
        <span>
          <a
            href="https://twitter.com/mataspigaga/"
            className={classes.contact}
          >
            say hi
          </a>
        </span>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
