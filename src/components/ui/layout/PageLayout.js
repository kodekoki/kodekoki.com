import React from 'react'
import { ThemeProvider } from 'emotion-theming'
import { Layout } from 'theme-ui'
import theme from '../theme'
import { node } from 'prop-types'
import { Global } from '@emotion/core'
import { globalStyles } from '../globalStyle'

const MainLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <Global styles={globalStyles} />
    <Layout>{children}</Layout>
  </ThemeProvider>
)
MainLayout.propTypes = {
  children: node,
}

export default MainLayout
