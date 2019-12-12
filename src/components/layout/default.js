import React from 'react'
import { Global } from '@emotion/core'
import { ThemeProvider } from 'theme-ui'
import { Layout } from 'theme-ui'
import theme from '../ui/theme'
import { globalStyles } from '../ui/globalStyle'

const Layouts = children => (
  <ThemeProvider theme={theme}>
    <Layout>
      <Global styles={globalStyles} />
      {children}
    </Layout>
  </ThemeProvider>
)

export default Layouts
