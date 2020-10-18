import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Typography } from '@material-ui/core'

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
  stickyCta: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.palette.primary.dark,
    width: '100%',
    padding: '0.95rem',
    position: 'fixed',
    boxShadow: theme.shadows[1],
    zIndex: 100
  },
  stickyCtaText: {
    textTransform: 'uppercase',
    color: 'white',
    fontSize: '1.7rem',
    letterSpacing: '1px'
  },
  ctaButton: {
    backgroundColor: 'transparent',
    color: 'white',
    border: `2px solid ${theme.palette.secondary.main}`,
    borderRadius: '1rem',
    padding: '0.75rem 1.5rem',
    transition: '0.3s all',
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.secondary.main,
      backgroundColor: theme.palette.primary.main
    }
  },
  callButton: {
    marginLeft: '2rem'
  },
  bookNowButton: {
    marginLeft: '2rem'
  }
}))

const StickyCTA = props => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <div className={classes.stickyCta}>
      <Typography className={classes.stickyCtaText} variant='h5'>
        Contact an Experienced Business Lawyer Now
      </Typography>
      <button className={clsx(classes.ctaButton, classes.callButton)}>
        (212) 865-8989
      </button>
      <button className={clsx(classes.ctaButton, classes.bookNowButton)}>
        Book Now
      </button>
    </div>
  )
}

export default StickyCTA
