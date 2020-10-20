import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Container, Grid, Typography } from '@material-ui/core'
import lightBg from '../../assets/images/light-bg.png'

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
  introSection: {
    padding: '12rem',
    background: `radial-gradient(circle, rgba(239,249,249, 0.9) 0%, rgba(255, 255, 255, 0.4) 100%), url(${lightBg})`
  },
  introTitle: {
    ...theme.custom.title2
  },
  introSecondaryTitle: {
    ...theme.custom.title3
  },
  introGrid: {},
  firstGridItem: {
    paddingLeft: '4rem',
    paddingRight: '5rem'
  },
  secondGridItem: {
    paddingLeft: '7rem',
    paddingRight: '7rem'
  },
  paragraph: {
    marginBottom: '2.5rem'
  },
  highlightedText: {
    color: theme.palette.secondary.main,
    letterSpacing: '0.7px',
    fontWeight: 'normal'
  },
  symbolDivider: {
    width: '3.5rem',
    height: '2px',
    backgroundColor: theme.palette.secondary.main,
    marginBottom: '2rem'
  }
}))

const IntroSection = () => {
  const classes = useStyles()

  return (
    <section className={classes.introSection}>
      <Container>
        <h2 className={classes.introTitle}>Innovative Legal Counsel</h2>
        <Grid container className={classes.introGrid}>
          <Grid item xs={12} md={6} className={classes.firstGridItem}>
            <h3 className={classes.introSecondaryTitle}>
              For Businesses, Professionals & Creative People
            </h3>
          </Grid>
          <Grid item xs={12} md={6} className={classes.secondGridItem}>
            <div className={classes.symbolDivider} />
            <Typography variant='body1' className={classes.paragraph}>
              <strong className={classes.highlightedText}>
                BASED IN NEW YORK CITY
              </strong>
              , Romano Law is a cutting edge firm, with a passion for making a
              difference in our clients’ lives.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              Our legal team takes pride in developing meaningful relationships
              with our clients. Our mission is to deliver cost-effective and
              efficient solutions to help you or your company thrive.
            </Typography>
            <Typography variant='body1' className={classes.paragraph}>
              We’re more than just attorneys – we’re trusted advisors. We love
              what we do.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  )
}

export default IntroSection
