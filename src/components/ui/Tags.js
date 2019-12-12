import React from 'react'
import { tagWrapperStyle, tagStyle } from './styles'
import { Link } from 'gatsby'
import { array } from 'prop-types'

const Tags = ({ tags }) => (
  <div css={tagWrapperStyle}>
    {(tags || []).map((tag, idx) => (
      <Link to={`/tags/${tag.toLowerCase()}`} key={idx}>
        <span css={tagStyle}>{`#${tag}`}</span>
      </Link>
    ))}
  </div>
)

Tags.propTypes = {
  tags: array,
}

export default Tags
