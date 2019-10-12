import React from 'react'
import { object } from 'prop-types'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../layout'
import SEO from '../seo'
import LabelInfo from '../labelInfo'

const wideNormal = theme => css`
  display: block;
  width: 100%;
  max-width: ${theme.wide.normal};
  margin: 0 auto;
  padding: 0 0.25rem;
`

const articleStyle = theme => css`
  & h1 {
    margin-top: 2rem;
    font-weight: 400;
    text-transform: capitalize;
  }
  & main > div > p {
    line-height: 1.75;
    padding: 0.25rem 0.25rem 1.125rem;
    font-size: 1.0625rem;
    font-family: ${theme.fonts.ptserif};
  }
  & main > div > .gatsby-highlight {
    display: block;
    border-radius: 0.2rem;
    margin: 1rem 0;
  }
  & main > div > blockquote {
    padding: 0 2rem;
    line-height: 2;
    font-style: italic;
    font-family: ${theme.fonts.ptserif};
    font-size: 1.25rem;
    text-align: center;
    border-radius: 0.2rem;
    font-weight: bold;
    color: ${theme.colors.darkGray};
  }
  & img {
    margin: ${theme.spacer.vertical} 0;
  }
  & main > div > img {
    width: 100%;
  }
`

const wrapImage = css`
  width: 100%;
  display: block;
  margin: 0 auto;
`
const tagWrapperStyle = css`
  font-size: 14px;
  padding: 1rem 0.25rem;
`
const tagStyle = css`
  background: #efefef;
  padding: 2px 4px;
  border-radius: 2;
  cursor: pointer;
  margin-right: 0.5rem;
`

const styleNext = theme => css`
  display: inline;
  margin: 10px 30px 5px 0;
  border-bottom: 2px dashed;
  font-weight: 400;
  line-height: 2.5;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.primary};
`

const BlogPost = ({ data, pageContext }) => {
  const { next, previous } = pageContext
  console.log('TCL: BlogPost -> previous', previous)
  console.log('TCL: BlogPost -> next', next)
  const { markdownRemark } = data
  const imageSource = markdownRemark.frontmatter.image.childImageSharp.fluid.src
  const { title, date, category, tags } = markdownRemark.frontmatter
  return (
    <Layout>
      <SEO title={title} />
      <article css={articleStyle}>
        <section css={wideNormal}>
          <h1>{title}</h1>
          <div>
            {(category || []).map((categoryName, idx) => (
              <Link
                key={idx}
                to={`/blog/category/${categoryName.toLowerCase()}`}
              >
                <LabelInfo
                  field="category"
                  value={categoryName}
                  color="#2ecc71"
                />
              </Link>
            ))}
            <LabelInfo field="post date" value={date} color="#00cec9" />
            <LabelInfo
              field="read time"
              value={`${markdownRemark.timeToRead} ${
                markdownRemark.timeToRead > 1 ? 'mins' : 'min'
              }`}
              color="#f0932b"
            />
          </div>
          <div css={wrapImage}>
            <img src={imageSource} alt={`cover image of ${title}`} />
          </div>
          <main>
            <div dangerouslySetInnerHTML={{ __html: markdownRemark.html }} />
          </main>
          <div css={tagWrapperStyle}>
            {(tags || []).map((tag, idx) => (
              <Link to={`/blog/tags/${tag.toLowerCase()}`} key={idx}>
                <span css={tagStyle}>{`#${tag}`}</span>
              </Link>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              padding: '.25rem',
            }}
          >
            <span>
              {previous ? (
                <Link css={styleNext} to={previous.node.fields.slug}>
                  previous
                </Link>
              ) : (
                ''
              )}
            </span>
            <span>
              {next ? (
                <Link css={styleNext} to={next.node.fields.slug}>
                  next
                </Link>
              ) : (
                ''
              )}
            </span>
          </div>
        </section>
      </article>
    </Layout>
  )
}
BlogPost.propTypes = {
  data: object,
  pageContext: object,
}

export default BlogPost

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      timeToRead
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
