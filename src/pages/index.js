import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Prism from 'prismjs'

const LabelInfo = ({ field, value, color }) => (
  <span
    style={{
      background: '#6b6b6b',
      fontSize: 12,
      borderRadius: '4px',
      padding: '3px 0',
      margin: '4px 8px 4px 0',
    }}
  >
    <span style={{ margin: '0 6px', color: '#eee' }}>{field}</span>
    <span
      style={{
        background: color,
        color: '#fff',
        padding: '3px 6px',
        borderRadius: '0 4px 4px 0',
      }}
    >
      {value}
    </span>
  </span>
)

const IndexPage = () => {
  React.useEffect(() => {
    Prism.highlightAll()
  })
  return (
    <Layout>
      <SEO title="Home" />
      <article>
        <section className="wide-normal">
          <h1 className="blog-title">Hi people how are you doing in my</h1>
          <LabelInfo field="category" value="open source" color="#2ecc71" />
          <LabelInfo field="post date" value="12/09/2019" color="#00cec9" />
          <LabelInfo field="read time" value="3 mins" color="#f0932b" />
        </section>
        {/* <div className="wide-normal wide-image">
          <Image />
        </div> */}
        <p className="wide-normal blog-paragraph">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source.
        </p>
        <pre className="wide-normal wide-code">
          <code className="language-javascript">
            {`
const query = graphql;
const ba = 2;
var bc = 3;
query(ba * bc);
      `}
          </code>
        </pre>
        <p className="wide-normal blog-paragraph">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
          Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <p className="wide-normal blog-paragraph">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
          Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
        <blockquote
          className="wide-normal wide-quote"
          cite="http://www.worldwildlife.org/who/index.html"
        >
          For 50 years, WWF has been protecting the future of nature.
        </blockquote>
        <p className="wide-normal blog-paragraph">
          Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
          Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written
          in 45 BC. This book is a treatise on the theory of ethics, very
          popular during the Renaissance. The first line of Lorem Ipsum, "Lorem
          ipsum dolor sit amet..", comes from a line in section 1.10.32. The
          standard chunk of Lorem Ipsum used since the 1500s is reproduced below
          for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus
          Bonorum et Malorum" by Cicero are also reproduced in their exact
          original form, accompanied by English versions from the 1914
          translation by H. Rackham.
        </p>
      </article>
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      <div
        style={{ fontSize: 14, padding: '1rem .25rem' }}
        className="wide-normal blog-tags"
      >
        <span
          style={{
            background: '#EFEFEF',
            padding: '2px 4px',
            borderRadius: 2,
            cursor: 'pointer',
            marginRight: '.5rem',
          }}
        >
          #kebab
        </span>{' '}
        <span
          style={{
            background: '#EFEFEF',
            padding: '2px 4px',
            borderRadius: 2,
            cursor: 'pointer',
            marginRight: '.5rem',
          }}
        >
          #es6
        </span>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
        className="wide-normal"
      >
        <Link className="blog-link-next" to="/page-2/">
          previous
        </Link>
        <Link className="blog-link-next" to="/page-2/">
          next
        </Link>
      </div>
    </Layout>
  )
}

export default IndexPage
