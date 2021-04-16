// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
});

let credentials = require("./gsheet/credentials.json");
let spreadsheetId = process.env.GSHEET_SPREADSHEET_ID;
let private_key = process.env.GSHEET_PRIVATE_KEY;
credentials = { ...credentials, private_key: private_key };

console.log(spreadsheetId);

module.exports = {
  siteMetadata: {
    title: "no title",
  },
  plugins: [
    {
      resolve: "gatsby-source-google-sheets",
      options: {
        spreadsheetId: spreadsheetId,
        worksheetTitle: "Relatorio",
        credentials: credentials,
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
};
