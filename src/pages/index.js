import React from 'react'
import Layout from '../components/ui/layout/PageLayout'
import { Header, Banner, Footer } from '../components/ui'
import { SectionWrap } from '../components/ui/styles'
import SEO from '../components/seo'
import * as constants from '../constants/homepage'
import PostList from '../components/ui/PostList'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

const HomePage = props => {
  const post = props.data.allMarkdownRemark.edges || []
  return (
    <Layout>
      <SEO title={constants.SITE_TITLE} />
      <Header />
      <SectionWrap id="screen">
        <Banner
          heading={constants.BANNER_HEADING}
          description={constants.BANNER_DESCRIPTION}
          id="banner"
        />
        <PostList
          heading={constants.POST_HEADING}
          description={constants.POST_DESCRIPTION}
          listItem={post}
        />
      </SectionWrap>
      <Footer />
    </Layout>
  )
}

HomePage.propTypes = {
  data: object,
}
export default HomePage

export const postListQuery = graphql`
  query {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 10
    ) {
      edges {
        node {
          fields {
            slug
            type
          }
          frontmatter {
            title
            description
            date(formatString: "MMMM DD, YYYY")
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
