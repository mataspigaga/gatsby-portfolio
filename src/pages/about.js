import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="Matas Pigaga | About">
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
      <StaticImage
        src="https://pbs.twimg.com/profile_images/1211747903695466498/hEtHgNgq_400x400.jpg"
        alt="matas pigaga twitter profile picture"
      />
    </Layout>
  );
};

export default AboutPage;
