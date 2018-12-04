import React, { Component } from 'react'
import Layout from './layout'
import { graphql } from 'gatsby'

// Statis Query
// Used anywhere, doesn't accept variables, can'r use context

// Page Query
// Must be used on pages

class PostLayout extends Component {
  render() {
    const data = this.props
    console.log('data', data)
    return (
      <Layout>
        <h1>Post Layout</h1>
      </Layout>
    )
  }
}

export default PostLayout

export const query = graphql`
  query PostLayout {
    markdownRemark(frontmatter: { slug: { eq: "/third-post" } }) {
      html
      frontmatter {
        title
        date
        slug
      }
    }
  }
`
