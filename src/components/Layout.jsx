import React from 'react'
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../styles/theme'
import HtmlHead from './HtmlHead'
import StickyCTA from './Headers/StickyCTA'
import LogoHeader from './Headers/LogoHeader'
import Navbar from './Navigation/Navbar'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <HtmlHead title={title} description={description} />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <StickyCTA />
        <LogoHeader />
        <Navbar />
        {children}
      </ThemeProvider>
    </>
  )
}

export default Layout
