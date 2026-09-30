require("dotenv").config()

module.exports = {
  siteMetadata: {
    title: `Fred Garingo`,
    description: `My Personal Digital Portfolio, made using gatsby. An Informative way of getting a job or exposing myself to many oppurtunities.`,
    author: `Fredrick Garingo`,
  },
  trailingSlash: `always`,
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Fred Garingo`,
        short_name: `Digital Portfolio`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fred-logo.png`,
      },
    },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        prefix: "_",
        debug: false,
      },
    },
    process.env.GATSBY_GRAPHQL_URI && {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GCMS",
        fieldName: "gcms",
        url: process.env.GATSBY_GRAPHQL_URI,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [process.env.GATSBY_GA_ID].filter(Boolean),
        pluginConfig: {
          head: true,
        },
      },
    },
  ].filter(Boolean),
}
