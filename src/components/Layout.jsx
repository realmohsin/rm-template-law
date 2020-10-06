import React from 'react'
import HtmlHead from './HtmlHead'

const Layout = ({ title, description, children }) => {
  return (
    <>
      <HtmlHead title={title} description={description} />
      {children}
    </>
  )
}

export default Layout
