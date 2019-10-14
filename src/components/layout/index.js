/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react'
import PropTypes, { bool } from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from '../../context'

import Header from '../header'
import Footer from '../footer'
import './layout.css'

const Layout = ({ children, showHeader, showFooter }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider>
        <div>
          {showHeader ? (
            <Header siteTitle={data.site.siteMetadata.title} />
          ) : (
            ''
          )}
          <div
            style={{
              // margin: `0 auto`,
              // maxWidth: 960,
              // padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main
              style={{
                minHeight: 'calc(100vh - 224px)',
                height: '100%',
              }}
            >
              {children}
            </main>
            {showFooter ? <Footer /> : ''}
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showFooter: bool,
  showHeader: bool,
}

Layout.defaultProps = {
  showFooter: true,
  showHeader: true,
}

export default Layout
