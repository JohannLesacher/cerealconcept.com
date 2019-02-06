module.exports = {
  siteMetadata: {
    title: `Cereal Concept`,
    description: `Création de site web sur mesure.`,
    author: `Johann Lesacher & Adrien Pierrin`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-10410230-3",
      },
    },
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
        name: `Cereal Concept - Création de site web sur mesure.`,
        short_name: `CerealConcept`,
        start_url: `/`,
        background_color: `#44c2de`,
        theme_color: `#44c2de`,
        display: `standalone`,
        icon: `src/images/cerealconcept-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
          rule: {
            include: /svg/
          }
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
  ],
}
