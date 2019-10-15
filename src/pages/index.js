import React from 'react'
import { Link } from 'gatsby'
import { css, keyframes } from '@emotion/core'
import Software from '../images/software.png'
import Background from '../assets/home-background.svg'
import LinkedIn from '../assets/icon/linkedin.svg'
import Github from '../assets/icon/github.svg'
import Twitter from '../assets/icon/twitter.svg'
import { ThemeProvider } from '../context'
import SEO from '../components/seo'

const dotAnimation = keyframes`
  0% {
    transform: scale(1);
    background: #3b2750;
  }
  20%{
    transform: scale(0.5);
    background: #444;
  }
  40%{
    transform: scale(0.8);
    background: #blue;
  }
  80%{
    transform: scale(0.6);
    background: #3b2750;
  }
`

const rootStyle = theme => css`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fe8b1d' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23fa792d' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23f46839' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23eb5843' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23e04a4c' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23d23e53' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23c33459' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b12c5d' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%239f2760' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%238b2460' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%2377225f' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%2363215c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%234e1f57' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%233a1d50' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23271948' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%2313153e' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23000f33' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  transition: all 0.7s ease-in;
  & .dot {
    width: 14px;
    height: 14px;
    background: #3b2750;
    position: absolute;
    left: 6px;
    top: 6px;
    border-radius: 50%;
    animation: ${dotAnimation} 8s ease-in-out infinite;
    transition: all ease-in-out 1s;
    & :hover {
      opacity: 0;
    }
  }
  & > main {
    background-color: ${theme.colors.background};
    background-image: url(/static/assets/home-background.svg);
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
      background: #fff;
    }
    &:after {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      background-color: ${theme.colors.lightBlue};
      left: 1rem;
      top: 1rem;
      z-index: 1;
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
  & > div > span {
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
        <div className="dot"></div>
        <main>
          <div>
            <Background
              css={css`
                width: 85%;
                position: absolute;
                top: -72px;
                right: 0;
              `}
            />
            <section css={menuStyle}>
              <div>
                <span>
                  <Link to="/blog">blog</Link>
                </span>
              </div>
              <div>
                <span>
                  <Link to="/">about me</Link>
                </span>
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
                    background-color: #fff;
                    transform: scale(1.1);
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
