import React from "react";
import Layout from "../UI/Layout";
import AboutMe from "./AboutMe";
import RecentPosts from "./RecentPosts";

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <p>In the process of building this site with Gatsby.js and Sanity</p>
      <h2>Recent Posts</h2>
      <RecentPosts />
      <h2>About Me</h2>
      <AboutMe />
      <h2>Selected Projects</h2>
      <p>Projects will be going here shortly...</p>
    </Layout>
  );
};

export default HomePage;
