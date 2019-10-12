import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import LogoHeader from '../images/logo-small.png'

const linkStyle = theme => {
  return css`
    color: ${theme.colors.font};
    text-decoration: none;
    margin-right: 1rem;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    & img {
      filter: grayscale(100%);
    }
    &:hover img {
      filter: grayscale(0);
    }
  `
}

const headerContainerStyle = css`
  box-shadow: 0 5px 10px 0 rgba(0, 64, 128, 0.05);
  height: 52px;
`

const Header = styled.header`
  background: ${props => props.theme.colors.background};
  margin-bottom: 1.45rem;
`
const Brand = styled.div`
  max-width: 800px;
  display: flex;
  align-items: center;
  margin: 0 auto;
  padding: 0.125rem 0.25rem;
`

const Nav = styled.nav`
  margin: 0;
  display: flex;
  padding: 0.25rem 1rem;
  font-size: 14px;
`

const menus = [
  {
    path: '/blog',
    title: 'Blog',
  },
  {
    path: '#',
    title: 'About me',
  },
]

const HeaderBar = ({ siteTitle }) => (
  <Header>
    <div css={headerContainerStyle}>
      <Brand>
        <Link to="/" css={linkStyle}>
          <div style={{ maxWidth: 30, marginRight: '.5rem', display: 'flex' }}>
            <img style={{ margin: 0, width: 30 }} src={LogoHeader} />
          </div>
          <h1 style={{ margin: 0, fontSize: '1.25rem' }}>{siteTitle}</h1>
        </Link>
        <Nav>
          {menus.map((menu, idx) => (
            <Link to={menu.path} key={idx}>
              <div
                style={{
                  padding: '.25rem 1rem',
                  cursor: 'pointer',
                  textTransform: 'uppercase',
                }}
              >
                {menu.title}
              </div>
            </Link>
          ))}
        </Nav>
      </Brand>
    </div>
  </Header>
)

HeaderBar.propTypes = {
  siteTitle: PropTypes.string,
}

HeaderBar.defaultProps = {
  siteTitle: ``,
}

export default HeaderBar
