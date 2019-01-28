/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({actions}) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "https://youthful-lamarr-1d1a58.netlify.com/*",
    toPath: "http://dev.cerealconcept.com/:splat",
    isPermanent: true
  });
}
