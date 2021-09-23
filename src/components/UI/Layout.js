import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import * as classes from "./Layout.module.css";
import Logo from "../../images/mp-logo-dark-inline.svg";
import favicon from "../../images/mp-favicon.svg";
import "@fontsource/pacifico";
import { Helmet } from "react-helmet";

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
    <>
      <Helmet>
        <html lang="en" />
        <link rel="icon" type="image/svg" sizes="32x32" href={favicon} />
      </Helmet>
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
          <a
            href="https://twitter.com/mataspigaga/"
            className={classes.contact}
          >
            Say Hi
          </a>
        </header>
        <hr />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
