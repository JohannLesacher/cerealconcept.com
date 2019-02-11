const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({actions}) => {
  const { createRedirect } = actions

  createRedirect({
    fromPath: "https://youthful-lamarr-1d1a58.netlify.com/*",
    toPath: "http://dev.cerealconcept.com/:splat",
    isPermanent: true
  });
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
