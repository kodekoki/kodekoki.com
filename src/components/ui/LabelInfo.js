import React from 'react'
import { css } from '@emotion/core'
import { string, node, oneOfType, bool } from 'prop-types'
import theme from './theme'

const rootStyle = css`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-right: 3rem;
`

const fieldStyle = css`
  color: ${theme.colors.dark};
  line-height: 0.5;
`

const valueStyle = css`
  color: ${theme.colors.dark};
  padding: 3px 0;
`

const LabelInfo = ({ field, value, isDate }) => (
  <span css={rootStyle}>
    <span css={fieldStyle}>{field}</span>
    <span css={valueStyle}>
      <strong>{isDate ? <time dateTime={isDate}>{value}</time> : value}</strong>
    </span>
  </span>
)
LabelInfo.propTypes = {
  field: string,
  value: oneOfType([string, node]),
  color: string,
  isDate: string,
}
export default LabelInfo
