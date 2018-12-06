import React from 'react'
import { StaticQuery, graphql, Link } from 'gatsby'

const Listing = () => (
  <StaticQuery
    query={graphql`
      query Listing {
        allMarkdownRemark(limit: 5, sort: { order: DESC, fields: [frontmatter___date] }) {
          edges {
            node {
              frontmatter {
                slug
                title
                date(formatString: "MMMM DD, YYYY")
              }
              excerpt
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark: { edges } }) => (
      <div>
        {edges.map(({ node: { frontmatter: { slug, title, date }, excerpt } }) => (
          <article key={slug}>
            <h2>
              <Link to={`/posts${slug}`}>{title}</Link>
            </h2>
            <p>{date}</p>
            <p>{excerpt}</p>
            <Link to={`/posts${slug}`}>Read More</Link>
          </article>
        ))}
      </div>
    )}
  />
)

export default Listing
