import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'
import Layout from './index'
import SEO from '../seo'
import PostList from '../postList'

const BlogTags = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data
  const pageTitle = `Tag: ${pageContext.tag}`
  return (
    <>
      <Layout>
        <SEO title={pageTitle} />
        <PostList
          title={pageTitle}
          data={allMarkdownRemark}
          pageContext={pageContext}
        />
      </Layout>
    </>
  )
}

BlogTags.propTypes = {
  data: object,
  pageContext: object,
}

export default BlogTags

export const query = graphql`
  query blogPostsListByTags($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
            tags
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
