import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import Layout from "../UI/Layout";

const PostsPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        nodes {
          id
          slug
          frontmatter {
            date
            description
            title
          }
          timeToRead
        }
      }
    }
  `);

  return (
    <Layout pageTitle="Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>
            {node.frontmatter.description}{" "}
            <Link to={`/posts/${node.slug}`}>Read More →</Link>
          </p>
          <p>
            {node.frontmatter.date} - {node.timeToRead} minute read
          </p>
        </article>
      ))}
    </Layout>
  );
};

export default PostsPage;
