import React from 'react'
import { graphql, Link } from 'gatsby'
import { object } from 'prop-types'
import { string } from 'prop-types'
import { css } from '@emotion/core'
import Layout from './index'
import LabelInfo from '../labelInfo'
import SEO from '../seo'

const ReadmoreStyle = theme => css`
  display: inline;
  margin: 10px 30px 5px 0;
  border-bottom: 2px dashed;
  font-weight: 500;
  line-height: 2.5;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.primary};
  font-family: ${theme.fonts.roboto};
`

const contentStyle = theme => css`
  display: block;
  width: 100%;
  margin-top: ${theme.spacer.horizontal};
  & article {
    padding: 0 1rem 1rem;
    margin: 1rem auto;
    position: relative;
    perspective: 40em;
    display: grid;
    box-shadow: none;
    transition: all ease 0.2s;
    transform: scale(1);
  }

  & p {
    font-size: 1rem;
    padding-left: 0;
    margin-bottom: 0;
  }
`

const wideNormal = theme => css`
  display: block;
  width: 100%;
  max-width: ${theme.wide.normal};
  margin: 0 auto;
  padding: 0 0.25rem;
`

const titleStyle = css`
  margin-bottom: 10px;
  margin-top: 16px;
  color: rgb(0, 66, 113);
  font-weight: 700;
  text-transform: capitalize;
`

const paginationStyle = theme => css`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
  margin-top: ${theme.spacer.horizontal};
  & li {
    font-size: 14px;
    padding: 0.5rem;
  }
  & li > a:hover {
    color: ${theme.colors.primary};
    text-decoration: underline;
    font-weight: 700;
  }
`

const activePageNumberStyle = theme => css`
  color: ${theme.colors.primary};
  text-decoration: underline;
`

const categoryStyle = theme => css`
  & a {
    color: ${theme.colors.background};
  }
`
LabelInfo.propTypes = {
  value: string,
}

const BlogPostList = ({ data, pageContext }) => {
  const { allMarkdownRemark } = data

  return (
    <Layout>
      <SEO title="Blog" />
      <content css={contentStyle}>
        {allMarkdownRemark.edges.map(({ node }, idx) => {
          // const imageSource = node.frontmatter.image.childImageSharp.fluid.src
          const { title, category, date } = node.frontmatter
          return (
            <article key={idx} css={wideNormal}>
              <section>
                <Link to={node.fields.slug}>
                  <h2 css={titleStyle}>{title}</h2>
                </Link>
                <LabelInfo
                  field={date}
                  color="#2ecc71"
                  value={
                    <span css={categoryStyle}>
                      {(category || []).map((categoryName, idx) => (
                        <Link to={`/blog/category/${categoryName}`} key={idx}>
                          {`${idx > 0 ? ', ' : ''}${categoryName}`}
                        </Link>
                      ))}
                    </span>
                  }
                />
              </section>
              <p>{node.excerpt}</p>
              <div>
                <Link to={node.fields.slug}>
                  <span css={ReadmoreStyle}>read more</span>
                </Link>
              </div>
            </article>
          )
        })}
      </content>
      <section css={wideNormal}>
        <ul css={paginationStyle}>
          {pageContext.numPages > 1
            ? Array.from({ length: pageContext.numPages }).map((item, i) => {
                const index = i + 1
                const link = index === 1 ? '/blog' : `/blog/page/${index}`
                return (
                  <li key={i}>
                    {pageContext.currentPage === index ? (
                      <span css={activePageNumberStyle}>{index}</span>
                    ) : (
                      <Link to={link}>{index}</Link>
                    )}
                  </li>
                )
              })
            : ''}
        </ul>
      </section>
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
