require("dotenv").config()

const trackingIds = [process.env.GATSBY_GA_ID].filter(Boolean)

const plugins = [
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
    resolve: `gatsby-plugin-sitemap`,
    options: {
      excludes: [`/404`, `/404/`, `/404.html`],
    },
  },
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

module.exports = {
  siteMetadata: {
    title: `Fred Garingo`,
    description: `Senior full stack developer in Cebu. Fred Garingo builds web and mobile products end to end, from frontend architecture and backend services to production AI.`,
    author: `Fred Garingo`,
    siteUrl: `https://fredgaringo.ga`,
    jobTitle: `Senior Full Stack Developer`,
    locality: `Talisay City`,
    region: `Cebu`,
    country: `Philippines`,
  },
  trailingSlash: `always`,
  graphqlTypegen: true,
  plugins,
}
