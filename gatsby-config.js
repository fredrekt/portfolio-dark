module.exports = {
  siteMetadata: {
    title: `Fred Garingo`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
