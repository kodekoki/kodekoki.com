import React from 'react'
import { Link } from 'gatsby'
import { object, string } from 'prop-types'
import { css } from '@emotion/core'
import LabelInfo from './labelInfo'

const ReadmoreStyle = theme => css`
  display: inline;
  margin: 10px 30px 5px 0;
  font-size: 14px;
  line-height: 2.5;
  text-decoration: none;
  cursor: pointer;
  color: ${theme.colors.lightBlue};
  font-family: ${theme.fonts.roboto};
  & :hover {
    color: ${theme.colors.darkGray};
  }
`

const contentStyle = theme => css`
  display: block;
  width: 100%;
  margin-top: ${theme.spacer.horizontal};
  & article {
    padding: 0 1rem 1rem;
    margin: 1rem auto 4rem;
    position: relative;
    perspective: 40em;
    display: grid;
    box-shadow: none;
    transition: all ease 0.2s;
    transform: scale(1);
    box-shadow: 3px 3px 15px 5px rgba(0, 64, 128, 0.07);
    display: flex;
  }

  & article > div:first-child {
    flex: 3;
    padding-right: 3rem;
  }
  & article > div:last-child {
    flex: 2;
    position: relative;
    transform: scale(1.2);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 50% 50%;
    top: 8px;
    filter: grayscale(100%);
    transition: all ease-in 1s;
    &:hover {
      filter: grayscale(0);
    }
  }

  & p {
    font-size: 0.825rem;
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

const titleStyle = theme => css`
  margin-bottom: 10px;
  margin-top: 16px;
  color: ${theme.colors.black};
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

const pageTitleStyle = css`
  margin-top: 2rem;
  font-weight: 400;
  text-transform: capitalize;
`

const PostList = ({ data, pageContext, title }) => {
  const allMarkdownRemark = data || []
  return (
    <>
      <content css={contentStyle}>
        <div css={wideNormal}>
          {title ? <h1 css={pageTitleStyle}>{title}</h1> : ''}
        </div>
        {allMarkdownRemark.edges.map(({ node }, idx) => {
          const imageSource = node.frontmatter.image.childImageSharp.fluid.src
          const { title, category, date } = node.frontmatter
          return (
            <article key={idx} css={wideNormal}>
              <div>
                <section>
                  <Link to={node.fields.slug}>
                    <h2 css={titleStyle}>{title}</h2>
                  </Link>
                  <LabelInfo
                    field={date}
                    color="#00cec9"
                    value={
                      <span css={categoryStyle}>
                        {(category || []).map((categoryName, idx) => (
                          <Link
                            to={`/blog/category/${categoryName.toLowerCase()}`}
                            key={idx}
                          >
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
                    <span css={ReadmoreStyle}>read more +</span>
                  </Link>
                </div>
              </div>
              <div
                css={css`
                  background: #f5f5f5;
                  background-image: url(${imageSource});
                `}
              />
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
    </>
  )
}

PostList.propTypes = {
  data: object,
  title: string,
  pageContext: object,
}

export default PostList
