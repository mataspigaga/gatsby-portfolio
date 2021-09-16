import * as React from "react";
import Layout from "../components/Layout";
import headshot from "../images/profile_pic_headshot.jpeg";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
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
      <hr />
      <p>
        I swear this is the only good headshot of me from the last 5 years of my
        life...
      </p>
      <img src={headshot} alt="matas pigaga twitter headshot" />
    </Layout>
  );
};

export default AboutPage;
