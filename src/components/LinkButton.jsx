import React from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'

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
  linkButton: {
    border: `1px solid ${theme.palette.secondary.main}`,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    padding: '1rem 3rem',
    width: 'max-content',
    letterSpacing: '0.5px',
    wordSpacing: '0.5px',
    transition: 'all 0.3s',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.secondary.main
    }
  }
}))

const LinkButton = ({ text, href, extraClassName }) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <a
      href={href || '/'}
      className={clsx(classes.linkButton, extraClassName || '')}
    >
      {text}
    </a>
  )
}

export default LinkButton
