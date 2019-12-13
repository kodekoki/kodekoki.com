import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'
import theme from './theme'

export const StyledHeader = styled.header`
  display: flex;
  background: ${theme.colors.primary};
  position: fixed;
  width: 100%;
  font-weight: bold;
  top: 0;
  z-index: 10;
  height: 60px;
  & nav > a {
    font-size: 1.125rem;
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
`

export const NavLink = styled.a`
  padding: 1rem 0;
  color: ${theme.colors.light};
  text-decoration: none;
  cursor: pointer;
  transition: 0.27s ease;
  &:hover,
  &:focus {
    filter: brightness(0.95);
  }
`

export const LogoWrap = styled.span`
  padding: 4px;
  & svg {
    width: ${props => props.width || '48px'};
    height: ${props => props.height || '48px'};
  }
`

export const NavItem = styled.li`
  padding-left: 1rem;
`

export const SectionWrap = styled.main`
  min-height: 400px;
`

export const StyledBanner = styled.section`
  scroll-snap-align: start;
  background: linear-gradient(
    ${theme.colors.primary} 12.5vh,
    ${theme.colors.secondary}
  );
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  min-height: 400px;
  height: 100vh;
  width: 100%;
`

export const waveAnimation = length => css`
  animation: ${wave} ${length} linear infinite alternate;
`

export const dashAnimation = length => css`
  animation: ${dash} ${length} linear forwards;
`

export const zoomAnimation = length => css`
  animation: ${zoom} ${length} linear infinite;
`

export const moveAnimation = length => css`
  animation: ${move} ${length} linear infinite;
`

const dash = keyframes`
  0% {
    stroke-dashoffset: 1000;
  }
  100% {
    stroke-dashoffset: 0;
  }
`
const move = keyframes`
  100% {
    transform: translate3d(0, 0, 1px) rotate(360deg);
  }
`

const zoom = keyframes`
  50% {
    transform:scale(1.2) skew(2deg, 2deg);
  }
`

const wave = keyframes`
  0% {
    d: path("M 0 100 Q 250 50 400 200 Q 550 350 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  50% {
    d: path("M 0 100 Q 200 150 400 200 Q 600 250 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
  100% {
    d: path("M 0 100 Q 150 350 400 200 Q 650 50 800 300 L 800 0 L 0 0 L 0 100 Z");
  }
`
export const WaveWrapper = styled.div`
  position: absolute;
  left: 0;
  height: 100%;
  width: 100%;
  user-select: none;
  pointer-events: none;
  ${({ bottom }) =>
    bottom &&
    css`
      transform: matrix(1, 0, 0, -1, 0, 0);
    `}
`

export const InnerWave = styled.div`
  width: 100%;
  height: 20vh;
  left: 0;
  position: absolute;
  svg {
    width: 100%;
    height: 20vh;
  }
  path {
    ${waveAnimation('20s')};
  }
  ${({ layer, waveoffset }) => ({
    zIndex: layer && layer,
    top: waveoffset && waveoffset,
  })}
`

export const StyledSection = styled.section`
  scroll-snap-align: start;
  display: flex;
  align-items: center;
  position: relative;
  height: 100vh;
  min-height: 400px;
  width: 100%;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    min-height: 70vh;
    height: auto;
  }
  ${({ backgroundColor, light }) => ({
    background: backgroundColor && backgroundColor,
    color: light ? theme.colors.light : theme.colors.dark,
  })}
`

export const SplashImage = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 85vh;
  object-fit: contain;
  object-position: bottom;
  user-select: none;
`

export const SplashImageObj = {
  position: 'absolute',
  top: 'unset',
  bottom: 0,
  right: 0,
  width: '100%',
  height: '85vh',
  objectFit: 'contain',
  objectPosition: 'bottom',
  userSelect: 'none',
}

export const ProjectList = styled.ul`
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  list-style: none;
  padding: 0;
  display: flex;
  width: 100%;
  padding: 0 0 1.5rem;

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    overflow: unset;
    flex-wrap: wrap;
  }
`

export const StyledProjectItem = styled.li`
  scroll-snap-align: start;
  overflow: hidden;
  position: relative;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.7);
  min-width: 250px;
  margin: 1rem 1.5rem 0rem 0rem;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: transform 0.27s ease;
  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    flex: 1 1 45%;
    max-width: 45%;
  }
  &:hover {
    transform: scale(1.025);
  }
  &:focus-within {
    outline: -webkit-focus-ring-color auto 5px;
  }
`

export const ProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  height: 275px;
  cursor: pointer;
  text-decoration: none;

  &::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    border-radius: 1rem;
    background: linear-gradient(
      ${theme.colors.primary},
      ${theme.colors.secondary}
    );
    z-index: 2;
    opacity: 0.6;
    pointer-events: none;
    filter: brightness(0.75) saturate(1.5);
  }
  & :hover {
    &::before {
      opacity: 0.9;
    }
  }
`

export const ProjectImage = styled.img`
  position: absolute;
  object-fit: cover;
  height: 100%;
  width: 100%;
  z-index: 1;
  overflow: hidden;
  ${zoomAnimation('50s')}
`

export const ProjectContent = styled.div`
  z-index: 3;
  display: flex;
  align-items: flex-end;
  height: 100%;
  padding: 1rem;
  border-radius: 1rem;
`

export const ProjectTitle = styled.h3`
  color: ${theme.colors.light};
  margin-bottom: 0;
  margin-right: auto;
  padding: 8px;
  border-radius: 4px;
`

export const ProjectBadge = styled.p`
  color: ${theme.colors.light};
  background-color: ${theme.colors.primary};
  margin: 0 4px 0;
  padding: 0.25rem 0.5rem;
  border-radius: 0.5rem;
  font-size: ${theme.fontSizes[0]}px;
  text-transform: capitalize;
`

export const StyledFooter = styled.footer`
  display: flex;
  align-items: center;
  padding: 1rem 0 0;
`
export const FooterBox = styled.div`
  background: ${theme.colors.light};
  padding: 1rem;
  border-radius: 1rem 1rem 0 0;
  font-size: ${theme.fontSizes[1]}px;

  > p {
    margin: 0;
  }
`

export const Avatar = styled.img`
  border-radius: 1rem;
`

export const SvgWrapper = styled.span`
  padding: 0 4px;
  display: flex;
  width: ${props => props.width || '100%'};
  & svg {
    max-width: ${props => props.svgWidth || 'auto'};
    height: ${props => props.svgHeight || 'auto'};
    width: 100%;
    border-radius: ${props => props.borderRadius || 0};
  }
`

export const HyperLink = styled.a`
  cursor: pointer;
  font-weight: ${theme.fontWeights.semiBold};
  text-decoration: none;
  color: ${theme.colors.dark};
`

// styles CSS

export const linkStyle = css`
  &:hover {
    background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
`

export const Articles = styled.article`
  margin-top: 5rem;
  min-height: 200px;
  & .videoWrapper {
    margin: 2rem 0 4rem;
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }
  & .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  & main h2 {
    text-transform: capitalize;
    margin-top: 0;
  }

  & #content-article > h2,
  #content-article > h3,
  #content-article > h4,
  #content-article > h5 {
    padding: 0.25rem;
  }

  & main a {
    padding: 0.25rem 0;
    color: ${theme.colors.dark};
    border-bottom: 2px dashed rgba(0, 0, 0, 0.1);
    &:hover {
      background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  & main a > code {
    &:hover {
      background-image: linear-gradient(to right, #12c2e9, #c471ed, #f64f59);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  & main p {
    line-height: 1.75;
    padding: 0.25rem 0.25rem 1.125rem;
    font-size: 1rem;
    margin: 0;
    color: rgba(0, 0, 0, 0.8);
  }
  & main p > code {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  & main li {
    color: rgba(0, 0, 0, 0.8);
  }
  & .gatsby-highlight {
    display: block;
    border-radius: 0.2rem;
    margin: 1rem 0;
  }
  & main pre > code {
    font-size: 0.75rem;
  }
  & main > div > blockquote {
    padding: 0 2rem;
    line-height: 2;
    font-style: italic;
    font-size: 1.25rem;
    text-align: center;
    border-radius: 0.2rem;
    font-weight: bold;
  }
  & img {
    border-radius: 0.2rem;
    max-width: 100%;
  }
`

export const tagWrapperStyle = css`
  font-size: 0.75rem;
  padding: 1rem 0.25rem;
  margin: 2rem 0 1rem;
  display: flex;
  flex-wrap: wrap;
  & a {
    padding: 1rem 1rem 1rem 0;
  }
`

export const tagStyle = css`
  padding: 0.75rem 1rem;
  border-radius: 2;
  cursor: pointer;
  margin-right: 0.5rem;
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.05);
`

export const styleNext = () => css`
  display: inline;
  margin: 10px 30px 5px 0;
  font-weight: 400;
  line-height: 2.5;
  text-decoration: none;
  cursor: pointer;
  padding: 0.25rem 1rem;
  &:hover {
    opacity: 0.8;
  }
`
export const styleInfo = css`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  & > span {
    width: 40%;
    margin-bottom: 1rem;
    margin-right: 0;
  }
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    margin-bottom: 0;
    justify-content: flex-start;
    width: auto;
    & > span {
      width: auto;
      margin-bottom: 0;
      margin-right: 3rem;
    }
  }
`

export const styleWrapContentArticle = css`
  margin-top: 4rem;
  display: flex;
  flex-direction: column-reverse;
  & #content-article {
    max-width: 100%;
  }

  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    flex-direction: row;
    & #content-article {
      max-width: 70%;
    }
  }

  @media only screen and (min-width: ${theme.breakpoints[1]}) {
    & #content-article {
      max-width: 75%;
    }
  }
`
