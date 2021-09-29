import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

const RecentPosts = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx(
        limit: 2
        sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          id
          slug
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
          excerpt
        }
      }
    }
  `);

  return (
    <>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h3>{node.frontmatter.title}</h3>
          <p>{node.frontmatter.date}</p>
          <p>
            {node.excerpt} <Link to={`/posts/${node.slug}`}>Continue →</Link>
          </p>
        </article>
      ))}
      <Link to="/posts">More Posts →</Link>
    </>
  );
};

export default RecentPosts;
