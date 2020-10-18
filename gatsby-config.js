const path = require(`path`)

if (
  process.env.NODE_ENV === 'development' ||
  process.env.NODE_ENV === 'production'
) {
  require('dotenv').config({
    path: '.env.development'
  })
}

module.exports = {
  siteMetadata: {
    title: 'Business Lawyer New York - Entertainment Lawyer NYC',
    description:
      "Romano Law's innovative New York lawyers focused in Business Law, Entertainment Law and Sports Law. Learn why business owners and creatives choose Romano.",
    author: '' // this is for twitter seo, use twitter handle
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`
      }
    },
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        forceFullSync: true
      }
    },
    {
      resolve: 'gatsby-plugin-material-ui',
      options: {
        stylesProvider: {
          injectFirst: true
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ]
}
