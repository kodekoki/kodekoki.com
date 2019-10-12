import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Image from '../components/image'
import SEO from '../components/seo'
import Prism from 'prismjs'

const LabelInfo = ({ value, color }) => (
  <span
    style={{
      background: '#6b6b6b',
      fontSize: 12,
      borderRadius: '4px',
      padding: '3px 0',
      margin: '4px 8px 4px 0',
    }}
  >
    <span
      style={{
        background: color,
        color: '#fff',
        padding: '3px 6px',
        borderRadius: '4px',
        fontFamily: 'Roboto, Arial',
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
      <content className="blogpost-list-card">
        <article className="blogpost-card">
          <section className="wide-normal">
            <h2
              style={{
                marginBottom: 10,
                marginTop: 16,
                color: 'rgb(0, 66, 113)',
                fontWeight: 700,
              }}
              className="blog-title"
            >
              Hi people how are you doing in my
            </h2>
            <LabelInfo value="14 sep 2019" />
            <LabelInfo value="SASS" />
          </section>
          {/* <div className="wide-normal wide-image">
          <Image />
        </div> */}
          <p
            style={{ marginTop: -10, marginBottom: -10 }}
            className="wide-normal blog-paragraph"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="wide-normal">
            <span
              style={{ fontFamily: 'Roboto, Arial' }}
              className="blog-link-next"
            >
              read more
            </span>
          </div>
        </article>

        <article className="blogpost-card">
          <section className="wide-normal">
            <h2
              style={{
                marginBottom: 10,
                marginTop: 16,
                color: 'rgb(0, 66, 113)',
                fontWeight: 700,
              }}
              className="blog-title"
            >
              Hi people how are you doing 2
            </h2>
            <LabelInfo value="14 sep 2019" />
            <LabelInfo value="open source" />
          </section>
          {/* <div className="wide-normal wide-image">
          <Image />
        </div> */}
          <p
            style={{ marginTop: -10, marginBottom: -10 }}
            className="wide-normal blog-paragraph"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="wide-normal">
            <span
              style={{ fontFamily: 'Roboto, Arial' }}
              className="blog-link-next"
            >
              read more
            </span>
          </div>
        </article>

        <article className="blogpost-card">
          <section className="wide-normal">
            <h2
              style={{
                marginBottom: 10,
                marginTop: 16,
                color: 'rgb(0, 66, 113)',
                fontWeight: 700,
              }}
              className="blog-title"
            >
              Hi people how are you 3
            </h2>
            <LabelInfo value="14 sep 2019" />
            <LabelInfo value="open source" />
          </section>
          {/* <div className="wide-normal wide-image">
          <Image />
        </div> */}
          <p
            style={{ marginTop: -10, marginBottom: -10 }}
            className="wide-normal blog-paragraph"
          >
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            Contrary to popular belief, Lorem Ipsum is not simply random text.
          </p>
          <div className="wide-normal">
            <span
              style={{ fontFamily: 'Roboto, Arial' }}
              className="blog-link-next"
            >
              read more
            </span>
          </div>
        </article>
      </content>
    </Layout>
  )
}

export default IndexPage
