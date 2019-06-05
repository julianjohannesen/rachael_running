module.exports = {

  // Site metadata
  siteMetadata: {
    title: `Rachael for Malden`,
    description: `I am Rachael Running and I am running for Malden School Committee in Ward 8. I am passionate about our city and our public schools. As a mother of two, I am dedicated to the success of our schools. When our children succeed, Malden succeeds.`,
    author: `@rachael4malden`,
  },

  // Plugins
  plugins: [
    // Head management
    `gatsby-plugin-react-helmet`,
    // Manifest file management
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rachael4Malden`,
        short_name: `R4M`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // Netlify deployment with HTTP header and redirect information
    `gatsby-plugin-netlify`,

    // Filesystem access
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Image manipulation
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    
    // Typography framework
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
