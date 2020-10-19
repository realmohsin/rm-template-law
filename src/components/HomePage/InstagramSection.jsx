import React, { useState, useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Container, Grid } from '@material-ui/core'
import LinkButton from '../LinkButton'

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
  instagramSection: {
    padding: '12rem 0'
  },
  instagramTitle: {
    ...theme.custom.title2,
    marginBottom: '6rem'
  },
  instagramGrid: {
    padding: '0 7rem',
    marginBottom: '5rem'
  },
  gridItem: {
    padding: '1.75rem'
  },
  instagramImg: {},
  instagramButton: {
    margin: '0 auto'
  }
}))

const InstagramSection = props => {
  const theme = useTheme()
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { regex: "/^instagram-/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 557, maxHeight: 557, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <section className={classes.instagramSection}>
      <Container>
        <h2 className={classes.instagramTitle}>Romano Law Instagram</h2>
        <Grid container className={classes.instagramGrid}>
          {data.allFile.nodes.map(node => (
            <Grid item className={classes.gridItem} xs={12} sm={6} md={4}>
              <Img
                fluid={node.childImageSharp.fluid}
                alt='From Romano Law Instagram'
                className={classes.instagramImg}
              />
            </Grid>
          ))}
        </Grid>
        <LinkButton
          text={'Visit our Instagram'}
          extraClassName={classes.instagramButton}
        />
      </Container>
    </section>
  )
}

export default InstagramSection
