import * as React from "react";
import Layout from "../components/UI/Layout";
import headshot from "../images/cartoon-headshot-circle.svg";
import * as classes from "../components/UI/Layout.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About">
      <div className={classes.aboutPage}>
        <div className={classes.imageContainer}>
          <img src={headshot} alt="matas pigaga twitter headshot" />
        </div>
        <p>
          Hi, I'm a web developer exploring the MERNG stack. Right now, I am
          focusing on building this portfolio site using Gatsby and an
          integrated headless CMS (content management system) called Sanity.
        </p>
        <p>
          On this project, my goals are to make it a single page experience with
          blog article previews, links to various projects, and a contact form.
        </p>
        <section className={classes.socialMediaLinks}>
          <h3>Get In Touch</h3>
          <ul>
            <li>
              <a
                href="https://twitter.com/mataspigaga"
                className={classes.twitter}
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://github.com/mataspigaga"
                className={classes.github}
              >
                GitHub
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/mataspigaga"
                className={classes.instagram}
              >
                Instagram
              </a>
            </li>
            <li>
              <a href="mailto:contact@matas.io" className={classes.email}>
                Email
              </a>
            </li>
          </ul>
        </section>
      </div>
    </Layout>
  );
};

export default AboutPage;
