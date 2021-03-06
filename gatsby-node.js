/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require('path')
// const graphql = require('gatsby')

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(({ data: { allMarkdownRemark: { edges } } }) => {
    edges.forEach(({ node: { frontmatter: { slug } } }) => {
      createPage({
        path: `/posts${slug}`,
        component: path.resolve('./src/components/PostLayout.js'),
        context: { slug },
      })
    })
  })
}
