import React from 'react'
import { string } from 'prop-types'
import { styleNext } from './styles'
import { Link } from 'gatsby'
import css from '@emotion/css'

const constant = {
  NEXT: 'selanjutnya',
  PREVIOUS: 'sebelumnya',
}

const ArticleNavigation = ({ next, prev }) => (
  <div
    css={css`
      display: flex;
      justify-content: space-between;
      padding: 0.25rem;
    `}
  >
    <span>
      {prev && (
        <Link css={styleNext} to={prev}>
          {constant.NEXT}
        </Link>
      )}
    </span>
    <span>
      {next && (
        <Link css={styleNext} to={next}>
          {constant.PREVIOUS}
        </Link>
      )}
    </span>
  </div>
)
ArticleNavigation.propTypes = {
  next: string,
  prev: string,
}

export default ArticleNavigation
