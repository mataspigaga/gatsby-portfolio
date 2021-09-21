import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/UI/Layout";

const PostsPage = ({ data }) => {
  return (
    <Layout pageTitle="Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query PostFileNames {
    allFile {
      nodes {
        name
      }
    }
  }
`;

export default PostsPage;
