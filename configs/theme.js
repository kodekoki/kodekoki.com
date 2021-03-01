const lightColor = {
  primary: '#004271',
  secondary: '#004271',
  gray: '#bbb',
  darkGray: '#6b6b6b',
  black: '#000',
  white: '#fff',
  background: '#fff',
  body: '#fff',
  font: 'hsla(0, 0%, 0%, 0.8)',
  secondaryFont: '#676767',
  link: 'hsla(0, 0%, 0%, 0.8)',
  titleHeader: '#444',
  linkHover: '#004271',
  green: '#2ecc71',
  lightBlue: '#00cec9',
  orange: '#f0932b',
  yellow: '#fdc42d',
}

const theme = {
  breakpoints: {
    xs: '400px',
    s: '600px',
    m: '900px',
    l: '1200px',
  },
  wide: {
    normal: '800px',
    over: '860px',
    full: '100%',
  },
  spacer: {
    horizontal: '2rem',
    vertical: '3rem',
  },
  transition: {
    ease: 'all 250ms ease-in-out',
  },
}

const themes = {
  light: { ...theme, colors: lightColor },
  dark: { ...theme, colors: lightColor },
}

export default themes
