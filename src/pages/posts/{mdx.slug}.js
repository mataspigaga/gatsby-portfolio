import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/UI/Layout";

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article>
        <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
        <header>
          <h1>{data.mdx.frontmatter.title}</h1>
          <Link to="/posts">Back</Link>
        </header>
        <p>
          Photo Credit:{" "}
          <a href={data.mdx.frontmatter.hero_image_credit_link}>
            {data.mdx.frontmatter.hero_image_credit_text}
          </a>
        </p>
        <p>Posted: {data.mdx.frontmatter.date}</p>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1200, height: 600, placeholder: BLURRED)
          }
        }
      }
      body
    }
  }
`;

export default BlogPost;
