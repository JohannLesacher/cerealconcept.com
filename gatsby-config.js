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
        icon: `src/images/cerealconcept-icon.png`,
        include_favicon: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-netlify-cms-paths`,
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
        name: 'uploads',
        path: `${__dirname}/static/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      plugins: [
        {
          resolve: 'gatsby-remark-relative-images',
        },
        {
          resolve: 'gatsby-remark-images',
          options: {
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
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
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
        name: `references`,
        path: `${__dirname}/src/data/references`,
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
