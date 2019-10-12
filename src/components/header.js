import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#fff`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      className="shadow-type-1"
      style={{
        height: 52,
      }}
    >
      <div
        style={{
          maxWidth: 800,
          display: 'flex',
          alignItems: 'center',
          margin: '0 auto',
          padding: `.125rem .25rem`,
        }}
      >
        <h1 style={{ margin: 0, fontSize: '1.25rem' }}>
          <Link
            to="/"
            style={{
              color: `#444`,
              textDecoration: `none`,
              marginRight: '1rem',
              textTransform: 'uppercase',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
        <nav
          style={{
            margin: 0,
            display: 'flex',
            listStyle: 'none',
            padding: '.25rem 1rem',
            fontSize: 14,
          }}
        >
          <div
            style={{
              padding: '.25rem 1rem',
              cursor: 'pointer',
            }}
          >
            BLOG
          </div>
          <div
            style={{
              padding: '.25rem 1rem',
              cursor: 'pointer',
            }}
          >
            ABOUT ME
          </div>
        </nav>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
