import React from 'react'
import styled from '@emotion/styled'

const Footer = styled.div`
  background: ${props => props.theme.colors.primary};
  height: 100px;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-top: 2.5rem;
`
const Footers = () => <Footer>🔥Built with Gatsby 🔥</Footer>

export default Footers
