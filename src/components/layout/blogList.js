import React from 'react'
import { graphql } from 'gatsby'
import { object } from 'prop-types'
import Layout from './index'
import SEO from '../seo'
import PostList from '../postList'

const BlogPostList = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <PostList data={allMarkdownRemark} pageContext={pageContext} />
    </Layout>
  )
}
BlogPostList.propTypes = {
  data: object,
  pageContext: object,
}

export default BlogPostList

export const blogListQuery = graphql`
  query blogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
          excerpt
        }
      }
    }
  }
`
