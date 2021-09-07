import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Hi, I'm a web developer exploring the MERNG stack. Right now, I am
        focusing on building this portfolio site using Gatsby and integrated a
        headless CMS (content management system) called Sanity.
      </p>
      <p>
        I will also try to integrate my existing blog MDX files into this site,
        as well as all of my JS challenges I have created onto separate pages or
        even one page.
      </p>
    </Layout>
  );
};

export default AboutPage;
