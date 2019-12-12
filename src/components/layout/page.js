import React from 'react'
import styled from '@emotion/styled'

const Page = styled.div`
  * {
    box-sizing: border-box;
  }
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  main,
  menu,
  nav,
  section,
  summary {
    display: block;
  }
  /transition: all 500ms;
  isolation: isolate;
`

const PageLayout = props => <Page {...props} />

export default PageLayout
