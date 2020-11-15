import React, { FC, useEffect, useLayoutEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { About, Portfolio, Contact, Home, Loading } from '@/views'
import { theme, CssBaseline, StylesProvider, darkTheme } from '@/theme'
import { AppBar, Footer } from '@/components'
import { ContextProvider } from '@/context'

export const App: FC = () => {
  const [loading, setLoading] = useState(true)
  const [dark, setDark] = useState(false)
  const [currentTheme, setCurrentTheme] = useState(theme)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3900)
    return () => clearTimeout(timer)
  }, [])

  useLayoutEffect(() => {
    if (dark) setCurrentTheme({ ...darkTheme })
    else setCurrentTheme(theme)
  }, [dark])

  return (
    <StylesProvider injectFirst>
      <ContextProvider value={{ dark, toggleDark: () => setDark(!dark) }}>
        <ThemeProvider theme={currentTheme}>
          <CssBaseline />
          {loading ? (
            <Loading loading={loading} />
          ) : (
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
          )}
        </ThemeProvider>
      </ContextProvider>
    </StylesProvider>
  )
}
