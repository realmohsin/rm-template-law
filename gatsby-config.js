const path = require(`path`)

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
