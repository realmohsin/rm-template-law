import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  featuredOnSection: {
    paddingTop: '12rem',
    paddingBottom: '12rem',
    backgroundColor: 'white'
  },
  featuredOnTitle: {
    ...theme.custom.title3,
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '2rem',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
  },
  featuredGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    rowGap: '3rem',
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(4, 1fr)'
    },
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  gridItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  featuredCompanyImg: {
    width: '22.5rem'
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '1.8rem'
  },
  bottomDivider: {
    marginTop: '8rem'
  },
  recognitionGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    rowGap: '3rem',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  },
  recognitionImg: {
    width: '14.2rem'
  }
}))

const FeaturedOnSection = () => {
  const classes = useStyles()
  const data = useStaticQuery(graphql`
    query {
      featured: allFile(filter: { name: { regex: "/^featured-/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 225, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      recognition: allFile(filter: { name: { regex: "/^recognition-/" } }) {
        nodes {
          childImageSharp {
            fluid(maxWidth: 220, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `)

  return (
    <section className={classes.featuredOnSection}>
      <Container>
        <div className={classes.divider} />
        <h2 className={classes.featuredOnTitle}>Featured On</h2>
        <div className={classes.featuredGrid}>
          {data.featured.nodes.map(node => (
            <div className={classes.gridItem}>
              <Img
                fluid={node.childImageSharp.fluid}
                alt='Logo of company Romano Law has been featured in'
                className={classes.featuredCompanyImg}
              />
            </div>
          ))}
        </div>
        <div className={clsx(classes.divider, classes.bottomDivider)} />
        <h2 className={classes.featuredOnTitle}>Recognition</h2>
        <div className={classes.recognitionGrid}>
          {data.recognition.nodes.map(node => (
            <div className={classes.gridItem}>
              <Img
                fluid={node.childImageSharp.fluid}
                alt='Logo of company Romano Law has been featured in'
                className={classes.recognitionImg}
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default FeaturedOnSection
