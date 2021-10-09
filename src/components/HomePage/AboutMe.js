import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import * as classes from "../UI/Layout.module.css";

const AboutMe = () => {
  return (
    <div id="about" className={classes.aboutPage}>
      <div className={classes.imageContainer}>
        <StaticImage
          src="../../site-assets/cartoon-headshot-circle.svg"
          alt="matas pigaga twitter headshot"
          className={classes.imageContainerImage}
        />
      </div>
      <p>
        Hi, I'm a web developer exploring the MERNG stack. Right now, I am
        focusing on building this portfolio site using Gatsby and an integrated
        headless CMS (content management system) called Sanity.
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
            <a href="https://github.com/mataspigaga" className={classes.github}>
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
            <a href="mailto:hello@matas.io" className={classes.email}>
              hello@matas.io
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default AboutMe;
