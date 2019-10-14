import React from 'react'
import { css } from '@emotion/core'
import Layout from '../components/layout'
import SEO from '../components/seo'

const wideNormal = theme => css`
  display: block;
  width: 100%;
  max-width: ${theme.wide.normal};
  margin: 0 auto;
  padding: 0 0.25rem;
`

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section css={wideNormal}>
      <h3>Ups.. the page doesnt exist</h3>
    </section>
  </Layout>
)

export default NotFoundPage
