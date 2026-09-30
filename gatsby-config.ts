import type { GatsbyConfig } from "gatsby"
import dotenv from "dotenv"

dotenv.config()

const trackingIds = [process.env.GATSBY_GA_ID].filter(
  (id): id is string => Boolean(id)
)

const plugins: NonNullable<GatsbyConfig["plugins"]> = [
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
  {
    resolve: `gatsby-plugin-google-gtag`,
    options: {
      trackingIds,
      pluginConfig: {
        head: true,
      },
    },
  },
]

if (process.env.GATSBY_GRAPHQL_URI) {
  plugins.push({
    resolve: "gatsby-source-graphql",
    options: {
      typeName: "GCMS",
      fieldName: "gcms",
      url: process.env.GATSBY_GRAPHQL_URI,
    },
  })
}

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Fred Garingo`,
    description: `My Personal Digital Portfolio, made using gatsby. An Informative way of getting a job or exposing myself to many oppurtunities.`,
    author: `Fredrick Garingo`,
  },
  trailingSlash: `always`,
  graphqlTypegen: true,
  plugins,
}

export default config
