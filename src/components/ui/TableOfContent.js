import React from 'react'
import css from '@emotion/css'
import { string } from 'prop-types'
import theme from './theme'

const rootStyle = css`
  max-width: 250px;
  width: 100%;
  height: fit-content;
  margin-left: 2rem;
  box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.05);
  transition: all ease-in 0.3s;
  overflow: auto;
  scrollbar-color: rebeccapurple green;
  scrollbar-width: thin;

  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    overflow: hidden;
    &:hover {
      overflow: overlay;
    }
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.6);
  }

  & #title-toc {
    padding: 1rem;
    padding-bottom: 0;
    font-size: 0.825rem;
    font-weight: bold;
    @media only screen and (min-width: ${theme.breakpoints[0]}) {
      display: none;
    }
  }

  & li > p {
    margin: 0;
    padding: 0;
    line-height: 1;
  }

  & li > p > a,
  li > a {
    border-bottom: 0 !important;
    font-size: 0.825rem;
  }

  & li {
    list-style: none;
    padding: 0.5rem 1rem;
    transition: all ease-in 0.2s;
    border-left: 0 solid transparent;
    &:hover {
      border-left: 3px solid transparent;
    }
  }
  & ul {
    padding-inline-start: 0;
  }

  & > div > ul > li ul {
    display: none;
  }
`

const styleOnFixed = css`
  position: relative;
  margin: 0 auto;
  max-height: calc(100vh - 180px);
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
    margin: 0 0 0 2rem;
  }
`
const TITLE = 'Daftar Isi:'

const TableOfContent = ({ headings }) => {
  const [fixed, setFixed] = React.useState(false)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const trackingPosition = () => {
    const elm = document.getElementById('table-of-content')
    const rect = elm ? elm.getBoundingClientRect() : {}
    const isTop = rect.top <= 60
    if (isTop && !fixed) return setFixed(styleOnFixed)
    if (!isTop && fixed) setFixed(css``)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', trackingPosition)
    return () => {
      window.removeEventListener('scroll', trackingPosition)
    }
  }, [trackingPosition])

  // const listHeading = getHeading(headings)
  return headings.length ? (
    <div id="table-of-content" css={[rootStyle, styleOnFixed]}>
      <div id="title-toc">{TITLE}</div>
      <div
        id="list-toc"
        dangerouslySetInnerHTML={{
          __html: headings,
        }}
      />
    </div>
  ) : null
}

TableOfContent.propTypes = {
  headings: string,
}
export default TableOfContent
