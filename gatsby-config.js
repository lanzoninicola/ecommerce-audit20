module.exports = {
  siteMetadata: {
    title: 'no title',
  },
  plugins: [
      {
      resolve: "gatsby-source-google-sheets",
      options: {
		// Testing file
        // spreadsheetId: "1JRNetI-yJTmWiAlqY3mAZdYzij-DG-H0",
        // worksheetTitle: "Sheet1",
		spreadsheetId: "1RaP0OzThdR8b4dg7TvOpFU9JmMwHSVQ7GEAgm9Lh_wE",
        worksheetTitle: "Relatorio",
        credentials: require("./gsheet/client_secret.json"),
      },
    },
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: "gatsby-plugin-react-leaflet",
    //   options: {
    //     linkStyles: true, // (default: true) Enable/disable loading stylesheets via CDN
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
