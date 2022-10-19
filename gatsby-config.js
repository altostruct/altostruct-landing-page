const path = require("path");

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  // Used for github pages will be overritten when
  // deploying to production.
  pathPrefix: `/altostruct-landing-page`,
  siteMetadata: {
    siteUrl: `https://www.altostruct.com`,
    title: `Altostruct - AWS consulting`,
    description: `AWS consultants located in Sweden`,
    author: `Erik Rehn, Joakim Tornert & Rasmus Holmgren`,
  },
  plugins: [
    "gatsby-transformer-json",
    "gatsby-transformer-typescript-css-modules",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-robots-txt",
    {
      resolve: "gatsby-plugin-react-svg",
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-6T55W0J1S2",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/favicon.png",
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        plugins: [
          {
            resolve: `gatsby-remark-images-contentful`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./static",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "locales",
        path: "locales",
      },
      __key: "locales",
    },
  ],
};
