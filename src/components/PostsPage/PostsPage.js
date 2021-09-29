import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../UI/Layout";
import { BiTime } from "react-icons/bi";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            hero_image_alt
            hero_image {
              childImageSharp {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
          timeToRead
          excerpt
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <GatsbyImage
            image={getImage(node.frontmatter.hero_image)}
            alt={node.frontmatter.hero_image_alt}
          />
          <h2>{node.frontmatter.title}</h2>
          <p>
            {node.excerpt} <Link to={`/posts/${node.slug}`}>Continue →</Link>
          </p>
          <p>
            {node.frontmatter.date} • <BiTime /> {node.timeToRead} min
          </p>
        </article>
      ))}
    </Layout>
  );
};

export default PostsPage;
