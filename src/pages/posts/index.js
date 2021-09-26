import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/UI/Layout";

const PostsPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>{node.frontmatter.title}</h2>
          <p>Posted: {node.frontmatter.date}</p>
          <Link to={`/posts/${node.slug}`}>Read More</Link>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query PostFileNames {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date
          title
        }
        id
        slug
      }
    }
  }
`;

export default PostsPage;
