import React from 'react'
import { Styled } from 'theme-ui'
import css from '@emotion/css'
import { array } from 'prop-types'
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
    padding-left: 1rem;
  }

  & > div > h4 {
    font-size: 0.825rem;
  }
  & > div > div,
  > div > h4 {
    margin: 0;
    cursor: pointer;
    padding: 1rem;
    line-height: 1;
    border: 1px solid rgba(0, 0, 0, 0.025);
    transition: all ease-in 0.2s;
    &:hover {
      border-left: 3px solid rgba(0, 0, 0, 0.025);
      background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  & div > div {
    font-size: 0.75rem;
    padding-left: 1.25rem;
    &:first-of-type {
      &:hover {
        background-image: none;
        -webkit-background-clip: none;
        -webkit-text-fill-color: none;
        border-left: 0 solid rgba(0, 0, 0, 0.025);
      }
      @media only screen and (min-width: ${theme.breakpoints[0]}) {
        display: none;
      }
    }
  }
`

const styleOnFixed = css`
  position: relative;
  margin: 0 auto;
  max-height: calc(100vh - 80px);
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    position: -webkit-sticky;
    position: sticky;
    top: 70px;
    margin: 0 0 0 2rem;
  }
`
const TITLE = 'ISI KONTEN:'

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

  const onTitleClick = (title, type) => {
    const mainContent = document.getElementById('content-article')
    const titles = mainContent.getElementsByTagName([type.toUpperCase()])
    let target
    for (let i = 0; i < titles.length; i++) {
      const item = titles.item(i)
      if (item.innerText === title) {
        target = item
        target.scrollIntoView()
        window.scrollBy(0, -80)
        return
      }
    }
  }

  function getHeading(nodeHeadings) {
    return nodeHeadings.map(data => ({
      title: data.value,
      type: `h${data.depth}`,
    }))
  }

  React.useEffect(() => {
    window.addEventListener('scroll', trackingPosition)
    return () => {
      window.removeEventListener('scroll', trackingPosition)
    }
  }, [trackingPosition])

  const listHeading = getHeading(headings)
  return listHeading[0] ? (
    <div id="table-of-content" css={[rootStyle, styleOnFixed]}>
      <div>
        <div id="title-toc">{TITLE}</div>
        {listHeading.map((data, indexData) => (
          <React.Fragment key={indexData}>
            {data.type === 'h2' && (
              <Styled.h4 onClick={() => onTitleClick(data.title, data.type)}>
                <strong>{data.title}</strong>
              </Styled.h4>
            )}
            {data.type === 'h3' && (
              <div onClick={() => onTitleClick(data.title, data.type)}>
                {data.title}
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  ) : null
}

TableOfContent.propTypes = {
  headings: array,
}
export default TableOfContent
