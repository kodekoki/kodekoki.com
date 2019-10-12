import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import theme from '../../configs/theme'
import { node, object } from 'prop-types'

function MarkdownPage({ children, pageContext: { frontmatter } }) {
  return (
    <>
      <SEO frontmatter={frontmatter} />
      <Layout
        pageTitle={frontmatter.title}
        frontmatter={frontmatter}
        headerColor={theme.colors.white}
      >
        <div id="container">{children}</div>
      </Layout>
    </>
  )
}

MarkdownPage.propTypes = {
  children: node,
  pageContext: object,
}

export default MarkdownPage
