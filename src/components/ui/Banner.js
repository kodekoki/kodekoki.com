import React from 'react'
import { StyledBanner, SvgWrapper } from './styles'
import { AnimatedWave, Section } from '.'
import BannerImage from '../../assets/banner.svg'
import theme from './theme'
import styled from '@emotion/styled'
import { keyframes, css } from '@emotion/core'
import { string } from 'prop-types'

const bannerAnimation = keyframes`
  50% {
    transform: rotate(-2deg)
  }
  75% {
    transform: rotate(2deg)
  }
`
const ImageBannerContainer = styled.div`
  opacity: 0.8;
  margin-top: 150px;
  animation: ${bannerAnimation} 15s linear infinite;
`

const BannerWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  & > div,
  span {
    flex: 1;
  }
  & div:nth-child(2) {
    display: none;
  }
  @media only screen and (min-width: ${theme.breakpoints[0]}) {
    flex-direction: row;
    & div:nth-child(2) {
      display: block;
      margin-top: 150px;
      width: 100%;
    }
  }
`

const Banner = ({ id, heading, description }) => {
  return (
    <StyledBanner id={id}>
      <Section backgroundColor="transparent">
        <BannerWrap>
          <div>
            <h1
              css={css`
                color: rgb(255, 255, 255);
                font-size: 3.5rem;
                letter-spacing: -5px;
                font-weight: bolder;
                line-height: 0.9;
              `}
            >
              {heading}
            </h1>
            <span style={{ color: '#eee' }}>{description}</span>
          </div>
          <ImageBannerContainer>
            <SvgWrapper>
              <BannerImage />
            </SvgWrapper>
          </ImageBannerContainer>
        </BannerWrap>
      </Section>
      <AnimatedWave enableWave bottom={true} />
    </StyledBanner>
  )
}

Banner.propTypes = { id: string, heading: string, description: string }

export default Banner
