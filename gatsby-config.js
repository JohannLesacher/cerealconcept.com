module.exports = {
  siteMetadata: {
    title: `Cereal Concept`,
    description: `Création de site web sur mesure.`,
    author: `Johann Lesacher & Adrien Pierrin`,
  },
  plugins: [
      {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cereal Concept - Création de site web sur mesure.`,
        short_name: `CerealConcept`,
        start_url: `/`,
        background_color: `#44c2de`,
        theme_color: `#44c2de`,
        display: `standalone`,
        icon: `src/images/cerealconcept-icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10410230-3",
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: `${__dirname}/static/img`
        },
        rule: {
          include: /svg/
        }
      }
    },
    {
      // keep as first gatsby-source-filesystem plugin for gatsby image support
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/static/img`,
        name: 'uploads',
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
          options: {
            name: 'uploads',
          },
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
            // It's important to specify the maxWidth (in pixels) of
            // the content container as this plugin uses this as the
            // base for generating different widths of each image.
            maxWidth: 2048,
          },
        },
        {
          resolve: 'gatsby-remark-copy-linked-files',
          options: {
            destinationDir: 'static',
          }
        }
      ],
    },
    `gatsby-plugin-netlify-cms`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages-simples`,
        path: `${__dirname}/src/data/pages/simples`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages-speciales`,
        path: `${__dirname}/src/data/pages/speciales`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
