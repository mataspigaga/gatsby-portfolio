import * as React from "react";
import { Link } from "gatsby";

const Layout = ({ pageTitle, children }) => {
  return (
    <>
      <title>{pageTitle}</title>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </>
  );
};

export default Layout;
