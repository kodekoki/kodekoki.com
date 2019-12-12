import React from 'react'
import css from '@emotion/css'
import theme from './theme'

const BaseTilted = ({ backgroundColor, shadow }) => (
  <div
    css={css`
      background: ${backgroundColor || theme.colors.primary};
      height: ${shadow ? '0.5rem' : '3rem'};
      position: relative;
      opacity: ${shadow ? 0.2 : 1};
    `}
  >
    <div
      css={css`
        position: absolute;
        content: ' ';
        display: block;
        height: 3rem;
        left: 0;
        top: ${shadow ? '0.5rem' : '3rem'};
        width: 100%;
        border-style: solid;
        border-width: 2rem 100vw 0 0;
        border-color: ${backgroundColor || theme.colors.primary} transparent
          transparent transparent;
      `}
    />
  </div>
)

const Tilted = props => (
  <>
    <BaseTilted {...props} />
    <BaseTilted shadow {...props} />
  </>
)

export default Tilted
