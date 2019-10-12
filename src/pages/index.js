import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Prism from 'prismjs'
import LabelInfo from '../components/labelInfo'

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
  & p {
    line-height: 1.75;
    padding: 1.125rem 0.25rem;
    font-size: 1.0625rem;
    font-family: ${theme.fonts.ptserif};
  }
  & pre {
    display: block;
  }
  & blockquote {
    background: #fdc42d;
    padding: 2rem;
    line-height: 2;
    font-style: italic;
    font-family: ${theme.fonts.ptserif};
    font-size: 2rem;
    text-align: center;
    border-radius: 0.2rem;
  }
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
const tags = ['kebab', 'portugal']

const IndexPage = () => {
  React.useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
      <SEO title="Home" />
      <article css={articleStyle}>
        <section css={wideNormal}>
          <h1>Hi people how are you doing in my</h1>
          <div>
            <LabelInfo field="category" value="open source" color="#2ecc71" />
            <LabelInfo field="post date" value="12/09/2019" color="#00cec9" />
            <LabelInfo field="read time" value="3 mins" color="#f0932b" />
          </div>

          <div className="wide-normal wide-image">
            <Image />
          </div>
          <main>
            <p>
              {/* <p css={wideNormal}> */}
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.
            </p>
            <pre>
              <code className="language-javascript">
                {`
const query = graphql;
const ba = 2;
var bc = 3;
query(ba * bc);
      `}
              </code>
            </pre>
            <p>
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
            <p>
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
            <blockquote
              className="wide-normal wide-quote"
              cite="http://www.worldwildlife.org/who/index.html"
            >
              For 50 years, WWF has been protecting the future of nature.
            </blockquote>
            <p css={wideNormal}>
              Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
              Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
              written in 45 BC. This book is a treatise on the theory of ethics,
              very popular during the Renaissance. The first line of Lorem
              Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
              section 1.10.32. The standard chunk of Lorem Ipsum used since the
              1500s is reproduced below for those interested. Sections 1.10.32
              and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are
              also reproduced in their exact original form, accompanied by
              English versions from the 1914 translation by H. Rackham.
            </p>
          </main>
          <div css={tagWrapperStyle}>
            {tags.map((tag, idx) => (
              <Link to={`/blog/tags/${tag}`} key={idx}>
                <span css={tagStyle}>{`#${tag}`}</span>
              </Link>
            ))}
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <Link css={styleNext} to="/page-2/">
              previous
            </Link>
            <Link css={styleNext} to="/page-2/">
              next
            </Link>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default IndexPage
