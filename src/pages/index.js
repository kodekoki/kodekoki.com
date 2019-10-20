import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import Software from '../images/software.png'
import LinkedIn from '../assets/icon/linkedin.svg'
import Github from '../assets/icon/github.svg'
import Twitter from '../assets/icon/twitter.svg'
import { ThemeProvider } from '../context'
import SEO from '../components/seo'

const rootStyle = theme => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
  transition: all 0.7s ease-in;
  & > main {
    background-color: ${theme.colors.background};
    max-width: 750px;
    width: 100%;
    margin: 0 auto;
    height: 400px;
    position: relative;
    box-shadow: 0 8px 12px 5px rgba(0, 64, 128, 0.05);
    & > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 2rem;
      position: relative;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: linear-gradient(109deg, #ffffff 56%, #01cec9 56%);
    }
  }
  & h2 {
    position: relative;
    transition: all 0.5s ease-in-out;
    font-size: 1.75rem;
    display: inline-block;
    font-weight: 400;
    margin-bottom: 0;
  }
  & section:last-child {
    display: flex;
    z-index: 2;
    & > div {
      padding: 0 1rem 0 0;
    }
    & svg {
      max-width: 24px;
    }
  }
  & section > p {
    font-size: 14px;
  }
`

const menuStyle = theme => css`
  & > div {
    display: inline-block;
    margin-right: 1.5rem;
    font-size: 14px;
    position: relative;
  }
  & > div > a {
    cursor: pointer;
    text-transform: uppercase;
    padding: 0.5rem 0.75rem;
    transition: all ease-in 0.25s;
    background: ${theme.colors.background};
    &:hover {
      background: ${theme.colors.lightBlue};
      color: ${theme.colors.white};
    }
  }
`

const HomePage = () => {
  return (
    <ThemeProvider>
      <SEO title={`Dwiki Arlan Personal Web & Blog`} />
      <div css={rootStyle}>
        <main>
          <div>
            <section css={menuStyle}>
              <div>
                <Link to="/blog">
                  <span>blog</span>
                </Link>
              </div>
              <div>
                <Link to="/">
                  <span>about me</span>
                </Link>
              </div>
            </section>
            <section>
              <div>
                <h2 style={{ fontSize: '4rem' }}>
                  DWIKI <span style={{ fontWeight: 700 }}>ARLAN</span>
                </h2>
              </div>
              <div
                id="software"
                css={theme => css`
                  background-color: ${theme.colors.lightBlue};
                  background-image: url(${Software});
                  height: 38px;
                  width: 180px;
                  background-size: 100%;
                  background-repeat: no-repeat;
                  background-blend-mode: multiply;
                  display: inline-block;
                  top: 7px;
                  position: relative;
                  margin: 0 0.5rem;
                  background-position-y: 50%;
                  transition: all ease-in 0.6s;
                  &:hover {
                    background-color: ${theme.colors.background};
                  }
                `}
              ></div>
              <h2>{`DEVELOPER`}</h2>
            </section>
            <section>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/arrlancore"
                >
                  <Github />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://linkedin.com/in/dwiki-arlan-62645770/"
                >
                  <LinkedIn />
                </a>
              </div>
              <div>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://twitter.com/arrlancore"
                >
                  <Twitter />
                </a>
              </div>
            </section>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}

export default HomePage
