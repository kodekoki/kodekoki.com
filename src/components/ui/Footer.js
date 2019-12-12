import React from 'react'
import { Section } from './'
import { Styled } from 'theme-ui'
import theme from './theme'
import * as CONSTANT from '../../constants/footer'

const Footer = () => (
  <div>
    {/* <WaveBar color={theme.colors.primary} direction="down" /> */}
    <Section
      backgroundColor={theme.colors.primary}
      id="about"
      light
      enableWave={false}
      waveBottom={false}
    >
      <Styled.h2>{CONSTANT.TITLE}</Styled.h2>
      <Styled.p>{CONSTANT.DESCRIPTION}</Styled.p>
    </Section>
  </div>
)

export default Footer
