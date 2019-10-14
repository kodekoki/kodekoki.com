import React from 'react'
import { graphql } from 'gatsby'
import { object } from 'prop-types'
import Layout from './index'
import SEO from '../seo'
import PostList from '../postList'

const BlogCategory = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const pageTitle = `Category: ${pageContext.category}`
  return (
    <Layout>
      <SEO title={pageTitle} />
      <PostList
        title={pageTitle}
        data={allMarkdownRemark}
        pageContext={pageContext}
      />
    </Layout>
  )
}
BlogCategory.propTypes = {
  data: object,
  pageContext: object,
}
export default BlogCategory

export const query = graphql`
  query blogPostsListByCategory($category: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { in: [$category] } } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          fields {
            slug
          }
          excerpt
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
        }
      }
    }
  }
`
