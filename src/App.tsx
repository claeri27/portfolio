import React, { FC, useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About, Contact, Home, Portfolio } from '@/views'
import { darkTheme, theme } from '@/theme'
import { CssBaseline, StylesProvider } from '@/theme/material'
import { AppBar, Footer } from '@/components'
import { Context } from '@/context'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'

export const App: FC = () => {
  const [dark, setDark] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme)

  useLayoutEffect(() => {
    if (dark) setCurrentTheme({ ...currentTheme, ...darkTheme })
    else setCurrentTheme(theme)
  }, [dark])

  const muiTheme = createMuiTheme({
    overrides: {
      MuiCssBaseline: {
        '@global': {
          html: { background: currentTheme.colors.background },
        },
      },
    },
  })

  return (
    <StylesProvider injectFirst>
      <Context.Provider value={{ dark, toggleDark: () => setDark(!dark) }}>
        <MuiThemeProvider theme={muiTheme}>
          <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            <BrowserRouter>
              <AppBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </Context.Provider>
    </StylesProvider>
  )
}
