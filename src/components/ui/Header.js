import React from 'react'
import { Container, Styled } from 'theme-ui'
import { Link } from 'gatsby'
import { StyledHeader, Nav, SvgWrapper } from './styles'
import WhiteLogo from '../../assets/logo-white.svg'
import configs from '../../../configs/index'

const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Link
            to="/"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <SvgWrapper width="34px" style={{ marginRight: 10 }}>
              <WhiteLogo />
            </SvgWrapper>
            <Styled.h2
              style={{ color: '#fff', margin: 0, fontSize: '1rem' }}
              href="/"
            >
              {configs.siteTitle}
            </Styled.h2>
          </Link>
        </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
