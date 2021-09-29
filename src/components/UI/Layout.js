import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as classes from "./Layout.module.css";
import favicon from "../../site-assets/mp-favicon.svg";
import "@fontsource/pacifico";
import { Helmet } from "react-helmet";
import Header from "./Header";

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
        <title>
          {pageTitle} | {data.site.siteMetadata.title}
        </title>
      </Helmet>
      <div className={classes.container}>
        <Header />
        <hr />
        <main>{children}</main>
      </div>
    </>
  );
};

export default Layout;
