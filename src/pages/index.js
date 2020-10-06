import React from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/Layout'
import Logo from '../svg-components/Logo'

export default function Home ({ data }) {
  return (
    <Layout>
      <Img fixed={data.file.childImageSharp.fixed} alt={'Romano Law Logo'} />
      <Logo />
      <div>Hello world!</div>
    </Layout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "eyes.png" }) {
      childImageSharp {
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

// export const query = graphql`
//   query {
//     logo: file(relativePath: { eq: "eyes.png" }) {
//       childImageSharp {
//         fluid(quality: 90, maxWidth: 4160) {
//           ...GatsbyImageSharpFluid_withWebp
//         }
//       }
//     }
//   }
// `
