import * as React from "react";
import Layout from "../components/UI/Layout";
// import JS30Challenges from "../components/Projects/JS30Challenges";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <hr />
      <p>In the process of building this site with Gatsby.js and Sanity</p>
      <h2>Projects</h2>
      <p>Projects will be going here shortly...</p>
      {/* <hr />
      <JS30Challenges />
      <hr /> */}
      <h2>Recent Posts</h2>
      <p>#100DaysOfCode Challenge</p>
      <p>etc.</p>
    </Layout>
  );
};

export default IndexPage;
