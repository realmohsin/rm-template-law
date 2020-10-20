import React from 'react'
import { graphql } from 'gatsby'
// import { makeStyles } from '@material-ui/core/styles'
import Layout from '../components/Layout'
import HeroSection from '../components/HomePage/HeroSection'
import FeaturedOnSection from '../components/HomePage/FeaturedOnSection'
import IntroSection from '../components/HomePage/IntroSection'
import InstagramSection from '../components/HomePage/InstagramSection'
import BlogMediaSection from '../components/HomePage/BlogMediaSection'

// const useStyles = makeStyles(theme => ({
//   testClass: {
//     color: 'red'
//   }
// }))

export default function Home ({ data }) {
  // const classes = useStyles()
  return (
    <Layout>
      {/* <Img fixed={data.file.childImageSharp.fixed} alt={'Romano Law Logo'} />
      <Logo />
      <div className={classes.testClass}>Hello world!</div>
      <Typography variant='body1'>
        {data.contentfulRomanoHomePage.heroImageTitle}
      </Typography>

      <Img
        fluid={data.contentfulRomanoHomePage.heroImage1.fluid}
        alt={'contentful'}
      /> */}
      <HeroSection />
      <FeaturedOnSection />
      <IntroSection />
      <InstagramSection />
      <BlogMediaSection />
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "featured-1.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    contentfulRomanoHomePage {
      heroImageTitle
      heroImage1 {
        fluid(maxWidth: 1800, quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
