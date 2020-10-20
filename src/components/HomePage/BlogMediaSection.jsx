import React, { useState, useEffect } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { Grid, Container } from '@material-ui/core'
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
  blogMediaSection: {
    padding: '12rem 0',
    height: '110rem'
  },
  titleList: {
    display: 'flex',
    justifyContent: 'center'
  },
  title: {
    ...theme.custom.title2,
    margin: '0 3rem',
    cursor: 'pointer',
    color: '#B2D1D2',
    transition: 'all 0.3s'
  },
  activeTitle: {
    color: theme.palette.primary.main,
    textDecoration: 'underline'
  },
  hiddenTitle: {
    fontSize: 0,
    position: 'absolute',
    left: '-5000px'
  },
  contentContainer: {
    position: 'relative'
  },
  blogSection: {
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.1)',
    transition: 'all 0.5s',
    width: '100%'
  },
  mediaSection: {
    position: 'absolute',
    opacity: 0,
    transform: 'scale(0.1)',
    transition: 'all 0.5s'
  },
  activeSection: {
    opacity: 1,
    transform: 'scale(1)'
  },
  blogItem: {
    padding: '3rem 6rem 5rem'
  },
  blogItemDate: {
    color: theme.palette.primary.main,
    marginBottom: '1.2rem'
  },
  blogItemTitle: {
    ...theme.custom.title3,
    marginBottom: '2.5rem',
    fontSize: '2.6rem',
    color: theme.palette.secondary.dark,
    cursor: 'pointer' // remove after turning into link
  },
  blogItemContent: {
    marginBottom: '0.7rem'
  },
  blogItemReadMore: {
    color: theme.palette.primary.main,
    cursor: 'pointer' // remove after turning into link
  },
  blogButton: {
    margin: '3rem auto'
  }
}))

const BlogMediaSection = props => {
  const theme = useTheme()
  const classes = useStyles()

  const [sectionType, setSectionType] = useState('blog')

  const handleSectionType = type => {
    setSectionType(type)
  }

  const blogSection = (
    <div
      className={clsx(
        classes.blogSection,
        sectionType === 'blog' && classes.activeSection
      )}
    >
      <h2 className={classes.hiddenTitle}>Blog</h2>
      <Grid container>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.blogItemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.blogItemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.blogItemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
        <Grid item xs={12} md={6} className={classes.blogItem}>
          <p className={classes.blogItemDate}>
            <time>03.30.20</time>
          </p>
          <h5 className={classes.blogItemTitle}>
            Are You an Employer Covered by the WARN Act? Three Questions to
            Consider.
          </h5>
          <p className={classes.blogItemContent}>
            As the current coronavirus crisis unfolds, many employers are forced
            to consider laying off their staff, particularly those in the
            hospitality, wellness and event industries. Before you alert your
            team to the new reality, employers should determine whether they are
            covered by federal and state-level WARN laws. For background,
            Congress passed the WARN Act in the
          </p>
          <p className={classes.blogItemReadMore}>(read more...)</p>
        </Grid>
      </Grid>
      <LinkButton text='Visit Our Blog' extraClassName={classes.blogButton} />
    </div>
  )

  const mediaSection = (
    <div
      className={clsx(
        classes.mediaSection,
        sectionType === 'media' && classes.activeSection
      )}
    >
      media
    </div>
  )

  return (
    <section className={classes.blogMediaSection}>
      <Container>
        <header>
          <ul className={classes.titleList}>
            <li
              onClick={e => handleSectionType('blog')}
              className={clsx(
                classes.title,
                sectionType === 'blog' && classes.activeTitle
              )}
            >
              Blog
            </li>
            <li
              onClick={e => handleSectionType('media')}
              className={clsx(
                classes.title,
                sectionType === 'media' && classes.activeTitle
              )}
            >
              Media
            </li>
          </ul>
        </header>
        <div className={classes.contentContainer}>
          {blogSection}
          {mediaSection}
        </div>
      </Container>
    </section>
  )
}

export default BlogMediaSection
