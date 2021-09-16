import * as React from "react";
import Layout from "../components/Layout";
import JS30Challenges from "../components/Projects/JS30Challenges";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home">
      <p>In the process of building this site with Gatsby.js and Sanity</p>
      <h2>Projects</h2>
      <hr />
      <JS30Challenges />
      <hr />
      <h2>Recent Posts</h2>
    </Layout>
  );
};

export default IndexPage;
