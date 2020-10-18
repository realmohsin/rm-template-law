import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  example: {
    // ...mobile first styles,
    [theme.breakpoints.up('sm')]: {
      //...sm and up styles
    },
    [theme.breakpoints.up('md')]: {
      //...md and up styles
    },
    '@media (min-width: 1320px)': {
      //...rules for above 1320px
    }
  },
  logoHeader: {
    background: theme.palette.primary.main,
    padding: '10rem 0 7rem'
  },
  logo: {
    width: '20rem',
    margin: '0 auto'
  }
}))

const LogoHeader = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 500) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={classes.logoHeader}>
      <Img
        fluid={data.file.childImageSharp.fluid}
        alt={'Romano Law Logo'}
        className={classes.logo}
      />
    </div>
  )
}

export default LogoHeader
