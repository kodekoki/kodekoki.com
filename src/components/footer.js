import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import Github from '../assets/icon/github.svg'
import Twitter from '../assets/icon/twitter.svg'
import Rss from '../assets/icon/rss.svg'

const wideNormal = theme => css`
  display: block;
  width: 100%;
  max-width: ${theme.wide.normal};
  margin: 0 auto;
  padding: 0 0.25rem;
  & svg {
    max-width: 24px;
  }
`

const Footer = styled.div`
  height: 100px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: 2.5rem;
  box-shadow: 0 5px 10px 10px rgba(0, 64, 128, 0.05);
`
const linkStyle = theme => css`
  color: ${theme.colors.primary};
  padding: 0 1rem;
`

const footerLink = [
  {
    title: 'twitter',
    url: 'https://twitter.com/arrlancore',
    icon: Twitter,
  },
  {
    title: 'github',
    url: 'https://github.com/arrlancore',
    icon: Github,
  },
  {
    title: 'rss feed',
    url: '/blog/rss.xml',
    icon: Rss,
  },
]
const Footers = () => (
  <Footer>
    <section css={wideNormal}>
      {footerLink.map((link, idx) => (
        <a
          key={idx}
          href={link.url}
          rel="nofollow noopener noreferrer"
          target="_blank"
          css={linkStyle}
        >
          <link.icon title={link.title} />
        </a>
      ))}
    </section>
  </Footer>
)

export default Footers
