import React from 'react'
import { string } from 'prop-types'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Prism from 'prismjs'

const labelMonoStyle = theme => css`
  background: ${theme.colors.gray};
  font-size: 12px;
  border-radius: 4px;
  padding: 3px 0;
  margin: 4px 8px 4px 0;
  & > span {
    color: #fff;
    padding: 3px 6px;
    borderradius: 4px;
    font-family: ${theme.fonts.roboto};
  }
`

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
  font-size: 0.75rem;
`

const contentStyle = theme => css`
  display: block;
  width: 100%;
  font-family: ${theme.fonts.ptserif};
  margin-top: ${theme.spacer.horizontal};
  & p {
    font-size: 14px;
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
`

const LabelInfo = ({ value }) => (
  <span css={labelMonoStyle}>
    <span>{value}</span>
  </span>
)
LabelInfo.propTypes = {
  value: string,
}

const category = ['News', 'bugs']
const date = new Date().toDateString()

const IndexPage = () => {
  React.useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
      <SEO title="Home" />
      <content css={contentStyle}>
        <article css={wideNormal}>
          <section>
            <h2 css={titleStyle}>Hi people how are you doing in my</h2>
            <LabelInfo value={date} />
            {(category || []).map((categoryName, idx) => (
              <Link
                to={`/blog/category/${categoryName.toLowerCase()}`}
                key={idx}
              >
                <LabelInfo value={categoryName} />
              </Link>
            ))}
          </section>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div>
            <span css={ReadmoreStyle}>read more</span>
          </div>
        </article>
      </content>
    </Layout>
  )
}

export default IndexPage
