const config = require('./site-config.json')

module.exports = {
  pathPrefix: process.env.PATH_PREFIX || '/',
  siteMetadata: {
    title: config.title,
    description: config.description,
    siteUrl: 'https://poltak.github.io/forestry-blog',
    footer: config.footer,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/data`,
        name: 'data',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `@forestryio/gatsby-remark-normalize-paths`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
            },
          },
          'gatsby-remark-copy-linked-files',
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        //trackingId: `ADD YOUR TRACKING ID HERE`,
      },
    },
    `gatsby-plugin-feed`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-react-helmet`,
    'gatsby-transformer-json',
    'gatsby-plugin-sass',
    'gatsby-plugin-catch-links',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Van's blog`,
        short_name: `Van's blog`,
        start_url: `/`,
        background_color: `#6b37bf`,
        theme_color: `#6b37bf`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
  ],
}
