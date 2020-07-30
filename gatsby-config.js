module.exports = {
  siteMetadata: {
    title: `Fred Garingo`,
    description: `My Personal Digital Portfolio, made using gatsby. An Informative way of getting a job or exposing youself to many oppurtunities.`,
    author: `Fredrick Garingo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/fred-logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-styletron`,
      options: {
        // You can pass options to Styletron.
        prefix: "_",
        // Disable dev debug mode, enabled by default
        debug: false,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
  	  options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`900`]
          },
          {
            family: `Playball`,
            variants: [`400`]
          },
          {
          	family: `Biryani`,
          	variants: [`400`, `600`, `700`, `800`, `900`]
          },
        ],
      },
    }
  ],
}
