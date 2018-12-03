import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Archive = () => (
  <StaticQuery
    query={graphql`
      query BlogPostArchive {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                slug
                title
              }
            }
          }
        }
      }
    `}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          <ul>
            {allMarkdownRemark.edges.map(({ node: { frontmatter: { title, slug } } }) => (
              <li key={slug}>{title}</li>
            ))}
          </ul>
        </aside>
      </>
    )}
  />
)

export default Archive
