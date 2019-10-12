import React from 'react'
import { node } from 'prop-types'
import { ThemeProvider as EmotionThemeProvider } from 'emotion-theming'
import themes from '../configs/theme'
// theme context
export const themeContext = React.createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = React.useState(themes.light)
  return (
    <themeContext.Provider value={[theme, setTheme]}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </themeContext.Provider>
  )
}
ThemeProvider.propTypes = { children: node }
