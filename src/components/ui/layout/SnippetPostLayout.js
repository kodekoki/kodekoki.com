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
  const { type } = data.markdownRemark.fields
  const { timeToRead } = markdownRemark
  const getHeadings = () => {
    let headings = []
    const content = document.getElementById('content-article')
    content &&
      content.querySelectorAll('h2, h3').forEach(elm => {
        headings.push({
          title: elm.innerText,
          type: elm.tagName.toLowerCase(),
        })
      })
    return headings
  }
  return (
    <Layout>
      <SEO title={title} />
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
              <TableOfContent
                htmlContent={markdownRemark.html}
                contents={getHeadings()}
              />
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

export const querySnippetPostBySlug = graphql`
  query querySnippetPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
      fields {
        type
      }
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
`
