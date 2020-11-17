import type { DefaultTheme } from 'styled-components'

export const lightTheme = {
  colors: {
    text: 'white',
    background: '#fafafa',
  },
}

export const darkTheme = {
  colors: {
    text: 'white',
    background: '#303030',
  },
}

export const theme: DefaultTheme = {
  ...lightTheme,
  breakpoints: {
    desktop: '(min-width: 750px)',
    tablet: '(min-width: 530px)',
  },
  height: {
    appBar: '3.5rem',
    footer: '3rem',
  },
  transitions: {
    appBar: { in: 1500, timeout: 800 },
    footer: { in: 2500, timeout: 800 },
    loading: {
      in: 3000,
      timeout: {
        enter: 1000,
        exit: 1500,
      },
    },
  },
}
