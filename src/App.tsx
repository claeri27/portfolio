import React, { FC, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { About, Portfolio, Contact, Home, Loading } from '@/views'
import { theme, CssBaseline, StylesProvider } from '@/theme'
import { AppBar, Footer } from '@/components'

export const App: FC = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        {loading ? (
          <Loading loading={loading} />
        ) : (
          <Router>
            <CssBaseline />
            <AppBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </Router>
        )}
      </ThemeProvider>
    </StylesProvider>
  )
}
