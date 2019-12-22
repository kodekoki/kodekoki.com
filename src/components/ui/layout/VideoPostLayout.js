import React from 'react'
import PageTitle from '../PageTitle'
import { Header, Footer } from '../index'
import { Container } from 'theme-ui'
import TableOfContent from '../TableOfContent'
import Layout from './PageLayout'
import SEO from '../../seo'
import { Articles, styleWrapContentArticle } from '../styles'
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
  const { type } = data.markdownRemark.fields
  const { timeToRead, excerpt } = markdownRemark

  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
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
            type={type}
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
              <TableOfContent headings={markdownRemark.tableOfContents} />
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

export const queryVideoPostBySlug = graphql`
  query queryVideoPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      timeToRead
      fields {
        type
      }
      tableOfContents
      frontmatter {
        title
        date
        modifiedDate
        category
        description
        tags
        videoId
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
