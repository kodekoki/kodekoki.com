import React from 'react'
import { css } from '@emotion/core'
import { string, node, oneOfType } from 'prop-types'

const rootStyle = css`
  background: #6b6b6b;
  font-size: 12px;
  padding: 3px 0;
  margin: 4px 8px 4px 0;
`

const fieldStyle = css`
  margin: 0 6px;
  color: #fff;
`

const valueStyle = theme => css`
  color: ${theme.colors.background};
  padding: 3px 6px;
`

const LabelInfo = ({ field, value, color }) => (
  <span css={rootStyle}>
    <span css={fieldStyle}>{field}</span>
    <span
      css={valueStyle}
      style={{
        background: color,
      }}
    >
      {value}
    </span>
  </span>
)
LabelInfo.propTypes = {
  field: string,
  value: oneOfType([string, node]),
  color: string,
}
export default LabelInfo
