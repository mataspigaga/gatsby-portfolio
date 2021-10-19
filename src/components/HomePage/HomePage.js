import React from "react";
import Layout from "../UI/Layout";
import AboutMe from "./AboutMe";
import RecentPosts from "./RecentPosts";
import {Link} from 'gatsby'

const HomePage = () => {
  return (
    <Layout pageTitle="Home">
      <p>
        In the process of building this site with Gatsby.js, but I'm mostly
        using it as a place to hold my daily recaps of the{" "}
        <Link to="/posts/100-days/">#100DaysOfCode</Link> Challenge I'm
        currently going through.
      </p>
      <h2>Recent Posts</h2>
      <RecentPosts />
      <h2>About Me</h2>
      <AboutMe />
      <h2>Selected Projects</h2>
      <p>Projects will be going here shortly... some things are in the works.</p>
    </Layout>
  );
};

export default HomePage;
