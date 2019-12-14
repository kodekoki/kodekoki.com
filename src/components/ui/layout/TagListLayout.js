import React from 'react'
import PageTitle from '../PageTitle'
import { Header, Footer } from '../index'
import { Container } from 'theme-ui'
import Layout from './PageLayout'
import SEO from '../../seo'
import { Articles } from '../styles'
import { graphql } from 'gatsby'
import { TAGS } from '../../../constants/pageTitle'
import { QUOTES } from '../../../constants/quotes'
import PostList from '../PostList'
import { object, string } from 'prop-types'

const Post = props => {
  const tagName = props.path.replace('/tags/', '')
  const RANDOM_QUOTES = QUOTES[Math.floor(Math.random() * 10)]
  const post = props.data.allMarkdownRemark.edges || []

  return (
    <Layout>
      <SEO title={`${TAGS.TITLE} ${tagName}`} />
      <Header />
      <PageTitle
        title={`${TAGS.TITLE} ${tagName}`}
        description={RANDOM_QUOTES}
      />
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
  path: string,
}

export const tagsListQuery = graphql`
  query tagsListQuery($tag: String, $skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
      filter: {
        frontmatter: { published: { ne: false }, tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            category
            description
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
