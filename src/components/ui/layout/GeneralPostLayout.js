import React from 'react'
import PageTitle from '../PageTitle'
import { Header, Footer } from '../index'
import { Container } from 'theme-ui'
import TableOfContent from '../TableOfContent'
import Layout from './PageLayout'
import SEO from '../../seo'
import { styleWrapContentArticle, Articles } from '../styles'
import Tags from '../Tags'
import VideoYoutube from '../VideoYoutube'
import ArticleNavigation from '../ArticleNavigation'
import ArticleInfo from '../ArticleInfo'
import { graphql } from 'gatsby'
import { object } from 'prop-types'

const Post = ({ data }) => {
  const { next, previous } = {}
  const { markdownRemark } = data
  const {
    title,
    description,
    date,
    image,
    author,
    tags,
    videoId,
    modifiedDate,
  } = data.markdownRemark.frontmatter
  const { timeToRead } = markdownRemark

  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={image && image.childImageSharp.fluid.src}
      />
      <Header />
      <PageTitle
        image={image && image.childImageSharp.fluid}
        title={title}
        description={description}
      />
      <Container>
        <Articles>
          <ArticleInfo
            type={null}
            date={date}
            modifiedDate={modifiedDate}
            timeReading={timeToRead}
            author={author}
          />
          <main>
            <VideoYoutube videoId={videoId} />
            <section css={styleWrapContentArticle}>
              <div
                id="content-article"
                dangerouslySetInnerHTML={{
                  __html: markdownRemark.html,
                }}
              />
              <TableOfContent headings={markdownRemark.headings} />
            </section>
          </main>
          <Tags tags={tags} />
          <ArticleNavigation
            next={next && next.node.fields.slug}
            prev={previous && previous.node.fields.slug}
          />
        </Articles>
      </Container>
      <Footer />
    </Layout>
  )
}

export default Post
Post.propTypes = { data: object }

export const queryPostBySlug = graphql`
  query queryPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        type
      }
      headings {
        value
        depth
      }
      frontmatter {
        title
        description
        date
        modifiedDate
        category
        tags
        author
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
`