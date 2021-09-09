import * as React from "react";
import Layout from "../components/Layout";
import JsDrumKit from '../components/Projects/JS30/01-js-drum-kit'

const IndexPage = () => {
  return (
    <Layout pageTitle="Matas Pigaga">
      <p>In the process of building this site with Gatsby.js and Sanity</p>
      <h2>Projects</h2>
      <hr />
      <JsDrumKit />
      <hr />
      <h2>Recent Posts</h2>
    </Layout>
  );
};

export default IndexPage;
