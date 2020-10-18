import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid } from '@material-ui/core'

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
  heroSection: {
    marginTop: '-2rem',
    position: 'relative',
    height: '74rem'
  },
  heroSectionTitle: {
    zIndex: 1, // unclear why this is needed
    width: '100%',
    textAlign: 'center',
    position: 'absolute',
    top: '15%',
    color: theme.palette.primary.dark,
    fontFamily: ['Piazzolla', 'serif'].join(', '),
    fontSize: '4.2rem'
  },
  heroImage: {
    height: '100%'
  }
}))

const HeroSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      contentfulRomanoHomePage {
        heroImageTitle
        heroImage1 {
          fluid(maxWidth: 1800, quality: 100) {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  `)

  return (
    <section className={classes.heroSection}>
      <h1 className={classes.heroSectionTitle}>
        {data.contentfulRomanoHomePage.heroImageTitle}
      </h1>
      <Img
        fluid={data.contentfulRomanoHomePage.heroImage1.fluid}
        alt={'Romano Law Lawyers'}
        className={classes.heroImage}
      />
    </section>
  )
}

export default HeroSection
