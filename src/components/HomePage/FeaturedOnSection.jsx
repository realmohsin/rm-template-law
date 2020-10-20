import React from 'react'
import clsx from 'clsx'
import { graphql, useStaticQuery } from 'gatsby'
import Img from 'gatsby-image'
import { makeStyles } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  featuredOnSection: {
    padding: '12rem 0',
    backgroundColor: 'white'
  },
  featuredOnTitle: {
    ...theme.custom.title3,
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '3.5rem',
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
    width: '19.1rem'
  },
  divider: {
    width: '100%',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '2rem'
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
  superLawyersImg: {
    width: '19.1rem'
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
      recognition1: file(name: { eq: "recognition-1" }) {
        childImageSharp {
          fixed(width: 142, height: 136) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      recognition2: file(name: { eq: "recognition-2" }) {
        childImageSharp {
          fixed(width: 156, height: 124) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      recognition3: file(name: { eq: "recognition-3" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      recognition4: file(name: { eq: "recognition-4" }) {
        childImageSharp {
          fluid(maxWidth: 220) {
            ...GatsbyImageSharpFluid
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
          <div className={classes.gridItem}>
            <Img
              fixed={data.recognition1.childImageSharp.fixed}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div className={classes.gridItem}>
            <Img
              fixed={data.recognition2.childImageSharp.fixed}
              alt='Award of Recognition for Romano Law'
            />
          </div>
          <div className={classes.gridItem}>
            <Img
              fluid={data.recognition3.childImageSharp.fluid}
              alt='Award of Recognition for Romano Law'
              className={classes.superLawyersImg}
            />
          </div>
          <div className={classes.gridItem}>
            <Img
              fluid={data.recognition4.childImageSharp.fluid}
              alt='Award of Recognition for Romano Law'
              className={classes.superLawyersImg}
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default FeaturedOnSection
