import React from 'react'
import PageTitle from '../PageTitle'
import { Header, Footer } from '../index'
import { Container } from 'theme-ui'
import Layout from './PageLayout'
import SEO from '../../seo'
import { Articles } from '../styles'
import { graphql } from 'gatsby'
import { SNIPPET } from '../../../constants/pageTitle'
import PostList from '../PostList'
import { object } from 'prop-types'

const Post = props => {
  const post = props.data.allMarkdownRemark.edges || []

  return (
    <Layout>
      <SEO title={SNIPPET.TITLE} description={SNIPPET.DESCRIPTION} />
      <Header />
      <PageTitle title={SNIPPET.TITLE} description={SNIPPET.DESCRIPTION} />
      <Container>
        <Articles>
          <PostList listItem={post} />
        </Articles>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Post
Post.propTypes = {
  data: object,
}

export const snippetListQuery = graphql`
  query snippetListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { published: { ne: false } }
        fileAbsolutePath: { regex: "//content/snippet//" }
      }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
            category
            image {
              childImageSharp {
                fluid(quality: 90) {
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
