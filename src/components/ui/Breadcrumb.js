import React from 'react'
import css from '@emotion/css'
import { linkStyle } from './styles'
import { Link } from 'gatsby'
import { string } from 'prop-types'

const styleBreadCrumb = css`
  margin-right: 3rem;
  font-size: 0.75rem;
`

const HOME = 'HOME'

const BreadCrumb = ({ type }) => (
  <span css={styleBreadCrumb}>
    <Link css={linkStyle} to="/">
      {HOME}
    </Link>
    {' / '}
    <Link css={linkStyle} to={`/${type}`}>
      {type.toUpperCase()}
    </Link>
  </span>
)
BreadCrumb.propTypes = {
  type: string,
}

export default BreadCrumb
