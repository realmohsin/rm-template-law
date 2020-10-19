import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Container } from '@material-ui/core'

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
  navContainer: {
    position: 'sticky',
    top: 58,
    zIndex: 100,
    marginTop: '-2.2rem'
  },
  navbar: {
    border: `2px solid ${theme.palette.secondary.dark}`,
    borderRadius: '1rem',
    backgroundColor: '#F9F9F9',
    backgroundColor: theme.palette.primary.dark
    // boxShadow: theme.shadows[6]
  },
  navList: {
    display: 'flex'
  },
  navItem: {
    flex: 1
    // border: '1px solid black'
  },
  entertainmentLawItem: {
    flex: 1.3
  },
  navLink: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '0.9rem 0',
    height: '100%',
    color: theme.palette.primary.dark,
    color: theme.palette.secondary.main,
    // background: theme.palette.primary.dark,
    borderRight: `2px solid ${theme.palette.secondary.dark}`
  },
  lastNavLink: {
    borderRight: 'none'
  }
}))

const Navbar = props => {
  const classes = useStyles()

  return (
    <Container component='header' className={classes.navContainer}>
      <nav className={classes.navbar}>
        <ul className={classes.navList}>
          <li className={classes.navItem}>
            <a className={classes.navLink}>Home</a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.navLink}>About</a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.navLink}>Business Law</a>
          </li>
          <li className={clsx(classes.navItem, classes.entertainmentLawItem)}>
            <a className={classes.navLink}>Entertainment Law</a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.navLink}>Disputes</a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.navLink}>Blog</a>
          </li>
          <li className={classes.navItem}>
            <a className={classes.navLink}>Careers</a>
          </li>
          <li className={classes.navItem}>
            <a className={clsx(classes.navLink, classes.lastNavLink)}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </Container>
  )
}

export default Navbar
