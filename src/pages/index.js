import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Layout from '../components/Layout'
import Logo from '../svg-components/Logo'

const useStyles = makeStyles(theme => ({
  testClass: {
    color: 'red'
  }
}))

export default function Home ({ data }) {
  const classes = useStyles()
  return (
    <Layout>
      <Img fixed={data.file.childImageSharp.fixed} alt={'Romano Law Logo'} />
      <Logo />
      <div className={classes.testClass}>Hello world!</div>
      <Typography variant='body1'>from typography</Typography>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "eyes.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
