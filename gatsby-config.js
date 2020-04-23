require('dotenv-safe').config()

module.exports = {
  siteMetadata: {
    title: `Cereal Concept`,
    description: `Création de site web sur mesure.`,
    author: `Johann Lesacher & Adrien Pierrin`,
    siteUrl: 'https://www.cerealconcept.com',
    image: `/svg/logocerealconcept.svg`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sentry",
      options: {
        dsn: "https://5f958fdd7d0a40d3b2a731342622b6d7@sentry.io/1492881",
        environment: process.env.NODE_ENV,
        enabled: (() => ["production", "stage"].indexOf(process.env.NODE_ENV) !== -1)()
      }
    },
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
    // `gatsby-plugin-netlify-cms-paths`,
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
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: process.env.GATSBY_SANITY_PROJECT_ID,
        dataset: process.env.GATSBY_SANITY_DATASET,
        useCdn: true,
        watchMode: process.env.NODE_ENV === 'staging' ? true : false,
        overlayDrafts: process.env.NODE_ENV === 'staging' ? true : false,
        token: process.env.GATSBY_SANITY_TOKEN,
      },
    },
    // {
    //   // keep as first gatsby-source-filesystem plugin for gatsby image support
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'uploads',
    //     path: `${__dirname}/static/img`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `images`,
    //     path: `${__dirname}/src/images`,
    //   },
    // },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   plugins: [
    //     {
    //       resolve: 'gatsby-remark-relative-images',
    //     },
    //     {
    //       resolve: 'gatsby-remark-images',
    //       options: {
    //         maxWidth: 2048,
    //       },
    //     },
    //     {
    //       resolve: 'gatsby-remark-copy-linked-files',
    //       options: {
    //         destinationDir: 'static',
    //       }
    //     }
    //   ],
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-netlify-cms`,
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages-simples`,
    //     path: `${__dirname}/src/data/pages/simples`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `references`,
    //     path: `${__dirname}/src/data/references`,
    //   },
    // },
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `pages-speciales`,
    //     path: `${__dirname}/src/data/pages/speciales`,
    //   },
    // },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
